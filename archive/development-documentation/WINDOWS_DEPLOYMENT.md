# Windows Offline Deployment Guide

Quick guide for testing the app offline on Windows.

## Option 1: Electron App (Recommended - Standalone)

**Best for**: Testing without requiring Node.js installation

### What to Package:
- Copy the entire `electron/dist-electron/win-x64-unpacked/` folder (or `win-arm64-unpacked/` for ARM Windows)
- That's it! Everything is self-contained.

### How to Test:
1. Copy the folder to your Windows machine
2. Double-click `VTS Guide.exe`
3. The app will start automatically

### Building for Windows:
```bash
# Build for x64 (Surface 7, most Windows machines)
npm run build:electron:win-x64

# The output will be in: electron/dist-electron/win-x64-unpacked/
```

**Note**: Surface 7 uses x64 architecture. The build command above explicitly targets x64. If you need ARM64 (Surface Pro X), use `npm run build:electron` and it will build for your Mac's architecture, or manually specify `--arm64`.

---

## Option 2: Simple Launcher (Requires Node.js)

**Best for**: Quick testing if Node.js is already installed

### What to Package:
1. `build/` folder (entire directory)
2. `launcher.js` (root file)
3. `launch.bat` (root file)

### How to Test:
1. Copy all three items to your Windows machine
2. Ensure Node.js is installed
3. Double-click `launch.bat`
4. Browser will open automatically

### Building:
```bash
npm run build:offline
```

Then copy:
- `build/` folder
- `launcher.js`
- `launch.bat`

---

## Option 3: Build Folder Only (Requires Web Server)

**Best for**: If you want to serve it via a web server

### What to Package:
- `build/` folder (entire directory)

### How to Test:
1. Copy `build/` folder to Windows machine
2. Start a web server:
   ```cmd
   cd build
   python -m http.server 8000
   ```
   Or use Node.js:
   ```cmd
   npx http-server build -p 8000
   ```
3. Open `http://localhost:8000` in browser

### Building:
```bash
npm run build:offline
```

---

## Quick Test Checklist

For **Option 1 (Electron)**:
- [ ] Run `npm run build:electron` (or use existing build)
- [ ] Copy `electron/dist-electron/win-x64-unpacked/` folder
- [ ] Test `VTS Guide.exe` on Windows

For **Option 2 (Launcher)**:
- [ ] Run `npm run build:offline`
- [ ] Copy `build/`, `launcher.js`, and `launch.bat`
- [ ] Ensure Node.js is installed on Windows
- [ ] Test `launch.bat` on Windows

For **Option 3 (Web Server)**:
- [ ] Run `npm run build:offline`
- [ ] Copy `build/` folder
- [ ] Start web server on Windows
- [ ] Test in browser

---

## Architecture Notes

- **x64**: Most Windows machines (Intel/AMD)
- **arm64**: Surface Pro X, Windows on ARM devices
- **ia32**: 32-bit Windows (rare, usually not needed)

The Electron build will target the architecture of your build machine by default. To build for a specific architecture, you may need to configure electron-builder or use cross-compilation.

