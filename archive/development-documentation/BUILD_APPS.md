# Building Standalone Apps

This guide explains how to create double-clickable apps for Mac and Windows.

## Prerequisites

1. Build the offline version first:
   ```bash
   npm run build:offline
   ```

## macOS App Bundle

### Quick Build

```bash
npm run build:mac
```

This creates `VTS Guide.app` - a proper macOS application bundle that can be double-clicked.

### Manual Steps

1. Run the script:
   ```bash
   bash create-mac-app.sh
   ```

2. Set a custom icon (optional):
   - Right-click `VTS Guide.app` → Get Info
   - Drag `static/img/vts-guide/image29.png` to the icon area at the top-left
   - The icon will update

3. Test it:
   - Double-click `VTS Guide.app`
   - Browser should open automatically

### What Gets Created

```
VTS Guide.app/
├── Contents/
│   ├── Info.plist          (app metadata)
│   ├── MacOS/
│   │   └── VTS Guide       (executable script)
│   └── Resources/
│       ├── build/          (entire documentation)
│       └── launcher.js      (server script)
```

### Deployment

- Copy `VTS Guide.app` to the client's Mac
- They can double-click it - no terminal needed!
- No Node.js installation required (if we bundle it, but currently needs Node.js)

**Note**: Currently requires Node.js on the client Mac. For a fully standalone app, we'd need to bundle Node.js (larger file size).

## Windows Executable

### Quick Build

```bash
npm run build:windows
```

This prepares the build configuration. Then:

1. Install pkg globally:
   ```bash
   npm install -g pkg
   ```

2. Build the .exe:
   ```bash
   pkg pkg-package.json --out-path dist
   ```

3. The executable will be in `dist/vts-guide.exe`

### Manual Steps

1. Install pkg:
   ```bash
   npm install -g pkg
   ```

2. Run the prep script:
   ```bash
   node create-windows-exe.js
   ```

3. Build the .exe:
   ```bash
   pkg pkg-package.json --out-path dist
   ```

4. Rename the .exe:
   ```bash
   # Windows
   ren dist\vts-guide.exe "VTS Guide.exe"
   
   # Or manually rename in File Explorer
   ```

### What Gets Created

- `dist/VTS Guide.exe` - Standalone executable (includes Node.js runtime)
- No Node.js installation needed on client Windows machine
- File size: ~50-70MB (includes Node.js)

### Setting Icon (Windows)

To set a custom icon for the .exe:

1. Convert PNG to .ico:
   - Use online tool or ImageMagick
   - Or use `png2ico` utility

2. Build with icon:
   ```bash
   pkg pkg-package.json --out-path dist --icon icon.ico
   ```

## Comparison

| Feature | Mac .app | Windows .exe |
|---------|---------|--------------|
| **Double-clickable** | ✅ Yes | ✅ Yes |
| **Requires Node.js** | ⚠️ Currently yes | ❌ No (bundled) |
| **File size** | ~10MB | ~50-70MB |
| **Icon support** | ✅ Easy (drag & drop) | ⚠️ Requires .ico file |
| **Standalone** | ⚠️ Needs Node.js | ✅ Fully standalone |

## Future Improvements

### Fully Standalone Mac App

To make Mac app fully standalone (no Node.js required):

1. Use `pkg` for Mac too:
   ```bash
   pkg pkg-package.json --targets node18-macos-x64 --out-path dist
   ```

2. Or use Electron for a true native app experience

3. Or bundle Node.js in the .app bundle (larger size)

### Electron App (Cross-platform)

For a true cross-platform solution with native feel:

```bash
npm install --save-dev electron electron-builder
```

Then create an Electron wrapper. This gives:
- Native app experience
- Custom icon support
- No Node.js required
- Works on Mac, Windows, Linux
- Larger file size (~100MB+)

## Troubleshooting

### Mac: "VTS Guide.app can't be opened"

1. Right-click → Open
2. Or: System Preferences → Security & Privacy → Allow

### Mac: App opens but nothing happens

- Check Console.app for errors
- Make sure Node.js is installed: `node --version`
- Check that `build/` folder exists in Resources

### Windows: .exe won't run

- Check Windows Defender isn't blocking it
- Try running as Administrator
- Check Event Viewer for errors

### Port already in use

- Close other instances
- Edit `launcher.js` and change `PORT = 8080` to another number

