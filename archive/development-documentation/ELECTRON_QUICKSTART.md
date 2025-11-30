# Electron App - Quick Start Guide

## What You Just Got

An Electron app that wraps your Docusaurus site in a native desktop application. This is **way better** than the pkg solution because:

- ✅ **Native app window** - looks like a real app
- ✅ **Embedded browser** - no external browser needed
- ✅ **Professional** - proper app icon, installers, etc.
- ✅ **Cross-platform** - Mac, Windows, Linux from one build

## First Time Setup

1. **Install Electron dependencies:**
   ```bash
   cd electron
   npm install
   cd ..
   ```

2. **Build the Docusaurus site:**
   ```bash
   npm run build:offline
   ```

## Test It (Development Mode)

```bash
npm run electron:dev
```

This opens the Electron app so you can test it. The window should show your Docusaurus site.

## Build the App

```bash
npm run build:electron
```

This creates distributable app files in `electron/dist-electron/`:
- **Mac**: `.dmg` installer and `.zip` app
- **Windows**: `.exe` installer and portable `.exe`
- **Linux**: `.AppImage` and `.deb` package

## How It Works

1. Electron creates a native window
2. A local HTTP server (inside the app) serves your Docusaurus build
3. The embedded Chromium browser displays the site
4. Everything is bundled - works completely offline

## File Structure

```
electron/
├── main.js          # The Electron app code
├── package.json     # Electron config
└── dist-electron/   # Built apps (after build)

build/               # Your Docusaurus site (must exist)
```

## Customize

### Change Window Size

Edit `electron/main.js`, find:
```javascript
mainWindow = new BrowserWindow({
  width: 1200,   // Change these
  height: 800,
```

### Change App Name/Icon

Edit `electron/package.json`:
```json
{
  "productName": "VTS Guide",  // App name
  "build": {
    "appId": "com.fliight.vtsguide",  // Bundle ID
    "mac": {
      "icon": "../static/img/vts-guide/image29.png"  // Icon path
    }
  }
}
```

## Distribution

### For Mac Users
Give them: `electron/dist-electron/VTS Guide-1.0.0-mac.zip`
- They extract it
- Double-click `VTS Guide.app`

### For Windows Users  
Give them: `electron/dist-electron/VTS Guide-1.0.0-win-portable.exe`
- They just double-click it
- No installation needed

## Troubleshooting

**"electron not found"**
```bash
cd electron
npm install
```

**App won't start**
Make sure you built the site first:
```bash
npm run build:offline
```

**Build fails**
Check that `build/` directory exists with your Docusaurus site.

## That's It!

The Electron app is much more user-friendly than the pkg solution. It's a proper native app that clients can just double-click and use.

For more details, see `BUILD_ELECTRON.md`.

