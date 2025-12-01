#!/usr/bin/env node

/**
 * Simple launcher for Argus VTS Guide
 * Starts a local web server and opens the browser automatically
 */

const http = require('http');
const net = require('net');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Show startup notification on macOS (so user knows app is launching)
if (process.platform === 'darwin') {
  try {
    exec('osascript -e \'display notification "Starting VTS Guide..." with title "VTS Guide"\'', () => {});
  } catch (e) {
    // Ignore notification errors
  }
}

const START_PORT = 8080;
const MAX_PORT_ATTEMPTS = 10;

// Function to check if port is available
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.listen(port, () => {
      server.once('close', () => resolve(true));
      server.close();
    });
    server.on('error', () => resolve(false));
  });
}

// Find an available port
async function findAvailablePort() {
  for (let i = 0; i < MAX_PORT_ATTEMPTS; i++) {
    const port = START_PORT + i;
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`Could not find an available port (tried ${START_PORT}-${START_PORT + MAX_PORT_ATTEMPTS - 1})`);
}

// Show error dialog on macOS
function showErrorDialog(title, message) {
  if (process.platform === 'darwin') {
    exec(`osascript -e 'display dialog "${message}" with title "${title}" buttons {"OK"} default button "OK" with icon stop'`, () => {});
  }
  console.error(`❌ ${title}: ${message}`);
}

// Find build directory - works in standalone, app bundle, and pkg-bundled
// When bundled with pkg, assets are accessible via __dirname in the snapshot filesystem
// pkg places assets at the same relative path as specified in the assets array

// Check if we're running from pkg bundle
const isPkg = typeof process.pkg !== 'undefined';

// When pkg bundles, __dirname points to the snapshot filesystem where assets are
// Assets specified as "build/**/*" will be at __dirname/build/
let BUILD_DIR = path.join(__dirname, 'build');

// Try different locations (pkg bundled assets should be at __dirname/build first)
const possiblePaths = [
  path.join(__dirname, 'build'),                    // pkg bundled (snapshot) - THIS SHOULD WORK
  path.join(process.cwd(), 'build'),                 // Current working directory
  path.join(__dirname, 'Resources', 'build'),       // App bundle
  path.join(__dirname, '..', 'Resources', 'build'), // App bundle (from MacOS)
  path.join(path.dirname(process.execPath), 'build'), // Relative to executable
];

// Find build directory
for (const testPath of possiblePaths) {
  if (fs.existsSync(testPath)) {
    BUILD_DIR = testPath;
    break;
  }
}

// Check if build directory exists
if (!fs.existsSync(BUILD_DIR)) {
  // Write debug info to file for troubleshooting
  const debugInfo = {
    isPkg: typeof process.pkg !== 'undefined',
    __dirname: __dirname,
    processExecPath: process.execPath,
    processCwd: process.cwd(),
    checkedPaths: possiblePaths.map(p => ({ path: p, exists: fs.existsSync(p) }))
  };
  
  try {
    fs.writeFileSync('/tmp/vts-guide-error.json', JSON.stringify(debugInfo, null, 2));
  } catch (e) {
    // Ignore write errors
  }
  
  const checkedPaths = possiblePaths.map(p => `  • ${p} ${fs.existsSync(p) ? '✓' : '✗'}`).join('\n');
  const errorMsg = `Build directory not found!\n\nThe app couldn't find the documentation files.\n\nChecked locations:\n${checkedPaths}\n\nDebug info saved to: /tmp/vts-guide-error.json\n\nThis usually means the app wasn't built correctly.\nPlease rebuild with: npm run build:mac`;
  showErrorDialog('VTS Guide Error', errorMsg);
  console.error('Build directory not found!');
  console.error('Debug info:', JSON.stringify(debugInfo, null, 2));
  process.exit(1);
}

// Simple static file server
const server = http.createServer((req, res) => {
  let filePath = path.join(BUILD_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // Security: prevent directory traversal
  filePath = path.normalize(filePath);
  if (!filePath.startsWith(BUILD_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  
  // Default to index.html for routes (SPA support)
  if (!path.extname(filePath) && !fs.existsSync(filePath)) {
    filePath = path.join(BUILD_DIR, 'index.html');
  }
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Fallback to index.html for client-side routing
        fs.readFile(path.join(BUILD_DIR, 'index.html'), (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end('Not Found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
          }
        });
      } else {
        res.writeHead(500);
        res.end('Server Error');
      }
    } else {
      const ext = path.extname(filePath);
      const contentType = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
        '.eot': 'application/vnd.ms-fontobject',
      }[ext] || 'application/octet-stream';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

// Start server with error handling
async function startServer() {
  try {
    const PORT = await findAvailablePort();
    const url = `http://localhost:${PORT}`;
    
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        showErrorDialog('Port Error', `Port ${PORT} is already in use.\n\nPlease close other applications using this port.`);
      } else {
        showErrorDialog('Server Error', `Failed to start server: ${err.message}`);
      }
      process.exit(1);
    });
    
    server.listen(PORT, () => {
      console.log('🚀 VTS Guide is starting...');
      console.log(`📖 Opening guide at: ${url}`);
      console.log('   Press Ctrl+C to stop the server\n');
      
      // Open browser automatically - CRITICAL for user experience
      const platform = process.platform;
      
      if (platform === 'darwin') {
        // Small delay to ensure server is fully ready
        setTimeout(() => {
          // Try to open browser
          exec(`open "${url}"`, (openErr) => {
            if (openErr) {
              // If open fails, show dialog with clickable option
              const dialogScript = `tell application "System Events"
                set response to display dialog "VTS Guide is running!\\n\\nClick 'Open Browser' to view the guide." & return & return & "URL: ${url}" with title "VTS Guide" buttons {"Open Browser", "Cancel"} default button "Open Browser"
                if button returned of response is "Open Browser" then
                  do shell script "open '${url}'"
                end if
              end tell`;
              exec(`osascript -e '${dialogScript}'`, () => {});
            }
          });
        }, 300);
      } else if (platform === 'win32') {
        command = `start ${url}`;
        exec(command, (err) => {
          if (err) {
            console.log(`⚠️  Could not open browser automatically. Please open: ${url}`);
          }
        });
      } else {
        command = `xdg-open ${url}`;
        exec(command, (err) => {
          if (err) {
            console.log(`⚠️  Could not open browser automatically. Please open: ${url}`);
          }
        });
      }
    });
  } catch (err) {
    showErrorDialog('Startup Error', err.message);
    process.exit(1);
  }
}

startServer();

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down server...');
  server.close(() => {
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});

