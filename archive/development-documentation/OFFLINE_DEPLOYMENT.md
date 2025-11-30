# Offline Deployment Guide

This guide explains how to deploy the Argus VTS documentation for offline use on client devices.

## Quick Start

### Build for Offline Use

```bash
npm run build:offline
```

This creates a static site in the `build/` directory configured for offline/local deployment (baseUrl: `/`).

### Serve Locally for Testing

```bash
npm run serve:offline
```

This builds and serves the site on `http://localhost:3000` (accessible from other devices on your network).

## Deployment Options

### Option 1: Local Web Server (Recommended)

**Best for**: Tablets, laptops, or any device that can run a simple web server.

1. Build the offline version:
   ```bash
   npm run build:offline
   ```

2. Copy the `build/` folder to the target device.

3. Serve it using a simple HTTP server:

   **Python 3:**
   ```bash
   cd build
   python3 -m http.server 8000
   ```

   **Node.js (http-server):**
   ```bash
   npx http-server build -p 8000
   ```

   **PHP:**
   ```bash
   cd build
   php -S localhost:8000
   ```

4. Open `http://localhost:8000` in a browser.

### Option 2: USB/Network Share

**Best for**: Quick deployment without installing software.

1. Build the offline version:
   ```bash
   npm run build:offline
   ```

2. Copy the entire `build/` folder to:
   - USB drive
   - Network share
   - Local file system

3. On the client device, use a file-based web server (see Option 1) or open `index.html` directly (limited functionality - routing may not work).

### Option 3: Embedded Web Server

**Best for**: Permanent installation on a device.

1. Build the offline version:
   ```bash
   npm run build:offline
   ```

2. Install a lightweight web server on the device:
   - **Windows**: IIS, nginx, or Caddy
   - **macOS/Linux**: nginx, Apache, or Caddy
   - **Raspberry Pi**: nginx or lighttpd

3. Point the web server document root to the `build/` directory.

4. Configure the server to:
   - Serve on a local IP (e.g., `192.168.x.x`)
   - Allow access from other devices on the network
   - Set appropriate file permissions

### Option 4: Electron App (Advanced)

**Best for**: Standalone desktop application.

Package the built site as an Electron app for a native desktop experience. This requires additional setup with Electron.

## Build Differences

### Online Build (GitHub Pages)
- Base URL: `/argus-interactive-guide-host/`
- Command: `npm run build`
- For: GitHub Pages deployment

### Offline Build (Local/Standalone)
- Base URL: `/`
- Command: `npm run build:offline`
- For: Local file servers, USB deployment, embedded systems

## File Structure After Build

```
build/
├── index.html
├── 404.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── docs/
│   └── [all documentation pages]
└── [other static assets]
```

The entire `build/` folder is self-contained and can be copied anywhere.

## Network Access

If you want other devices on the network to access the documentation:

1. Find your device's local IP:
   ```bash
   # macOS/Linux
   ifconfig | grep "inet "
   
   # Windows
   ipconfig
   ```

2. Serve on all interfaces:
   ```bash
   # Python
   python3 -m http.server 8000 --bind 0.0.0.0
   
   # Node.js http-server
   npx http-server build -p 8000 -a 0.0.0.0
   ```

3. Access from other devices: `http://[YOUR_IP]:8000`

## Troubleshooting

### Links don't work when opening index.html directly
- **Solution**: Use a web server (see Option 1). Direct file access doesn't support client-side routing.

### Images not loading
- **Solution**: Ensure you're using a web server, not opening files directly. Check that all images are in `build/img/vts-guide/`.

### 404 errors on navigation
- **Solution**: The web server must support fallback to `index.html` for client-side routing. Most simple servers do this automatically.

## Notes

- The offline build is completely static - no internet connection required
- All images and assets are bundled in the build
- Works on any device with a modern web browser
- No database or backend required
- File size: ~5-10MB (depending on images)

