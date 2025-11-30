# Debugging Mac App Issues

If `VTS Guide.app` doesn't work when you double-click it, here's how to figure out what's wrong:

## Quick Test from Terminal

Open Terminal and run:

```bash
cd /path/to/VTS\ Guide.app/Contents/MacOS
./VTS\ Guide
```

This will show you any error messages directly.

## Common Issues

### 1. "Node.js is not installed"

**Error:** Dialog says "Node.js is not installed"

**Fix:**
- Install Node.js from https://nodejs.org/
- Download the LTS version
- Run the installer
- Restart your Mac (sometimes needed)

**Verify:**
```bash
node --version
```

### 2. Port Already in Use

**Error:** "Port 8080 is already in use"

**Fix:**
- Close other instances of VTS Guide
- Or close any app using port 8080
- The app will now auto-try ports 8080-8089

**Check what's using the port:**
```bash
lsof -i :8080
```

**Kill the process:**
```bash
lsof -ti:8080 | xargs kill -9
```

### 3. Build Directory Not Found

**Error:** "build/ directory not found"

**Fix:**
- Rebuild the app: `npm run build:mac`
- Make sure the build completed successfully

### 4. App Won't Open / Nothing Happens

**Possible causes:**
- Gatekeeper blocking the app
- Missing permissions
- Silent crash

**Debug steps:**

1. **Check Console.app:**
   - Open Console.app (Applications → Utilities)
   - Look for "VTS Guide" errors
   - Check recent crash reports

2. **Try running from terminal:**
   ```bash
   "/path/to/VTS Guide.app/Contents/MacOS/VTS Guide"
   ```

3. **Check app permissions:**
   - Right-click app → Get Info
   - Make sure "Open using Rosetta" is NOT checked (unless on Intel Mac)
   - Check "Read & Write" permissions

4. **Gatekeeper issues:**
   - Right-click app → Open (first time)
   - Or: System Preferences → Security & Privacy → Allow

5. **Check if Node.js works:**
   ```bash
   which node
   node --version
   ```

### 5. Browser Doesn't Open

**Error:** Server starts but browser doesn't open

**Fix:**
- A dialog should appear with the URL
- Manually open: `http://localhost:8080` (or whatever port it found)
- Check your default browser settings

## Viewing Logs

### Terminal Output
If you run from terminal, you'll see all output.

### Console.app
1. Open Console.app
2. Search for "VTS Guide" or "node"
3. Look for error messages

### Log File
The app creates a log file:
```bash
cat /tmp/vts-guide.log
```

## Testing the Launcher Directly

Test the launcher script without the app bundle:

```bash
cd /path/to/project
node launcher.js
```

This should work the same way. If this works but the app doesn't, the issue is with the app bundle structure.

## Rebuilding the App

If all else fails, rebuild:

```bash
npm run build:mac
```

This will:
1. Rebuild the documentation
2. Recreate the app bundle
3. Fix any structural issues

## Getting Help

If you're still stuck, gather this info:

1. **macOS version:**
   ```bash
   sw_vers
   ```

2. **Node.js version:**
   ```bash
   node --version
   ```

3. **Error from terminal:**
   ```bash
   "./VTS Guide.app/Contents/MacOS/VTS Guide"
   ```

4. **Console.app errors:**
   - Screenshot or copy error messages

5. **App structure:**
   ```bash
   ls -la "VTS Guide.app/Contents/"
   ```

