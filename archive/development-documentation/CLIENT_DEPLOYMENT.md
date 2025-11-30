# Client Deployment - Simple Guide

## For End Users (Non-Technical)

### 🎯 Easiest Option: Double-Click Apps

**For Mac users:**
1. **Double-click** `VTS Guide.app`
2. Browser opens automatically
3. Done!

**For Windows users:**
1. **Double-click** `VTS Guide.exe`
2. Browser opens automatically
3. Done!

### Requirements

**Mac App (`VTS Guide.app`):**
- macOS 10.13 or later
- **No Node.js needed!** (bundled in the app)
- That's it!

**Windows App (`VTS Guide.exe`):**
- Windows 7 or later
- No Node.js needed! (bundled in the .exe)

### Creating the Deployment Package

#### Option 1: Mac App (Recommended for Mac)

1. Build the Mac app:
   ```bash
   npm run build:mac
   ```

2. Set the icon (optional but recommended):
   - Right-click `VTS Guide.app` → Get Info
   - Drag `static/img/vts-guide/image29.png` to the icon area

3. Copy `VTS Guide.app` to the client's Mac
   - They can drag it to Applications folder
   - Or keep it anywhere and double-click

#### Option 2: Windows Executable

1. Build the Windows .exe:
   ```bash
   npm run build:windows
   npm install -g pkg
   pkg pkg-package.json --out-path dist
   ```

2. Rename `dist/vts-guide.exe` to `VTS Guide.exe`

3. Copy `VTS Guide.exe` to the client's Windows PC
   - No installation needed!
   - Just double-click to run

#### Option 3: Script-Based (Fallback)

If apps don't work, use the script launchers:

1. Build the offline version:
   ```bash
   npm run build:offline
   ```

2. Copy these files to a USB drive or zip file:
   - `build/` folder (entire folder)
   - `launcher.js`
   - `launch.sh` (Mac/Linux)
   - `launch.bat` (Windows)

3. Client needs Node.js installed, then double-click the launcher script

### How It Works

The launcher:
- Starts a tiny web server automatically (runs in the background)
- Opens your browser automatically
- Serves the guide from local files (no internet needed)
- Works completely offline

### Stopping the Server

- Close the terminal window, OR
- Press `Ctrl+C` in the terminal

### Troubleshooting

**"Node.js is not installed"**
- Install Node.js from https://nodejs.org/
- Download the LTS version
- Run the installer

**"build/ directory not found"**
- Make sure you copied the `build/` folder
- It should be in the same folder as `launcher.js`

**Browser doesn't open automatically**
- Manually open: `http://localhost:8080`

**Port 8080 already in use**
- Close any other applications using port 8080
- Or edit `launcher.js` and change `PORT = 8080` to another number

## For Developers

### Testing Locally

```bash
npm run build:offline
npm run launch
```

### Custom Port

Edit `launcher.js` and change:
```javascript
const PORT = 8080;  // Change to any port you want
```

### Network Access

To allow other devices on the network to access the guide, edit `launcher.js`:

Change:
```javascript
server.listen(PORT, () => {
```

To:
```javascript
server.listen(PORT, '0.0.0.0', () => {
```

Then access from other devices: `http://[YOUR_IP]:8080`

