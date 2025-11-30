# Building Electron App - Complete Guide

This guide shows you how to build a native desktop app using Electron. The app embeds a browser and serves your Docusaurus site locally - perfect for offline use!

## What You Get

- **Native desktop app** (Mac .app, Windows .exe, Linux AppImage)
- **Embedded browser** - no external browser needed
- **Fully offline** - everything bundled
- **Professional look** - proper app icon, window controls, etc.
- **Easy distribution** - just copy the app file

## Prerequisites

1. Build the offline Docusaurus site first:
   ```bash
   npm run build:offline
   ```

2. Install Electron dependencies:
   ```bash
   cd electron
   npm install
   cd ..
   ```

## Quick Start

### Build Electron App

```bash
npm run build:electron
```

This will:
1. Build the offline Docusaurus site
2. Package it with Electron
3. Create distributable app files in `electron/dist-electron/`

### Test Electron App (Development)

```bash
npm run electron:dev
```

This runs the Electron app in development mode (useful for testing).

## What Gets Created

After building, you'll find:

**Mac:**
- `electron/dist-electron/VTS Guide-1.0.0.dmg` - Installer
- `electron/dist-electron/VTS Guide-1.0.0-mac.zip` - Portable app

**Windows:**
- `electron/dist-electron/VTS Guide Setup 1.0.0.exe` - Installer
- `electron/dist-electron/VTS Guide-1.0.0-win-portable.exe` - Portable app

**Linux:**
- `electron/dist-electron/VTS Guide-1.0.0.AppImage` - Portable app
- `electron/dist-electron/vts-guide_1.0.0_amd64.deb` - Debian package

## How It Works

1. **Electron** creates a native app window
2. **Local HTTP server** serves the Docusaurus build from within the app
3. **Embedded browser** (Chromium) displays the site
4. Everything is bundled - no external dependencies needed

## Customization

### Change App Icon

Edit `electron/package.json` and update the icon paths:
```json
"mac": {
  "icon": "../static/img/vts-guide/image29.png"
}
```

For best results, use `.icns` (Mac) or `.ico` (Windows) files.

### Change Window Size

Edit `electron/main.js`:
```javascript
mainWindow = new BrowserWindow({
  width: 1200,  // Change these
  height: 800,
  // ...
});
```

### Change App Name

Edit `electron/package.json`:
```json
{
  "productName": "VTS Guide",  // Change this
  "build": {
    "appId": "com.fliight.vtsguide"  // And this
  }
}
```

## Distribution

### For Mac Users

1. Build: `npm run build:electron`
2. Give them: `electron/dist-electron/VTS Guide-1.0.0-mac.zip`
3. They extract and double-click `VTS Guide.app`

### For Windows Users

1. Build: `npm run build:electron`
2. Give them: `electron/dist-electron/VTS Guide-1.0.0-win-portable.exe`
3. They double-click to run (no installation needed)

### For Linux Users

1. Build: `npm run build:electron`
2. Give them: `electron/dist-electron/VTS Guide-1.0.0.AppImage`
3. They make it executable: `chmod +x VTS\ Guide-1.0.0.AppImage`
4. Then run it

## Troubleshooting

### "electron not found"

Run:
```bash
cd electron
npm install
```

### Build fails

Make sure you've built the Docusaurus site first:
```bash
npm run build:offline
```

### App won't start

Check the console for errors:
```bash
npm run electron:dev
```

This shows any errors in the terminal.

### Icon not showing

- Mac: Use `.icns` format (convert PNG to ICNS)
- Windows: Use `.ico` format (convert PNG to ICO)
- Or use online converters

## File Structure

```
electron/
├── main.js          # Electron main process (server + window)
├── package.json     # Electron app config
└── dist-electron/   # Built apps (created after build)

build/               # Docusaurus build (must exist)
```

## Advantages Over pkg Solution

✅ **Better UX** - Native window, proper app feel
✅ **No terminal** - Runs as a real app
✅ **Cross-platform** - One codebase, all platforms
✅ **Professional** - Installers, icons, proper app structure
✅ **Easier distribution** - Standard app files

## Comparison

| Feature | pkg (current) | Electron |
|---------|---------------|----------|
| **File size** | ~50MB | ~150MB |
| **Native feel** | ⚠️ Terminal-based | ✅ True native app |
| **Cross-platform** | ⚠️ Separate builds | ✅ One build script |
| **Distribution** | ⚠️ Manual | ✅ Installers |
| **User experience** | ⚠️ Opens browser | ✅ Embedded browser |

## Next Steps

1. **Test it**: `npm run electron:dev`
2. **Build it**: `npm run build:electron`
3. **Distribute**: Give clients the app file from `electron/dist-electron/`

That's it! The Electron app is much more user-friendly than the pkg solution.

