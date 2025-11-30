# Quick Fix: App Not Opening

## The Problem
When you double-click `VTS Guide.app`, nothing happens.

## The Solution (30 seconds)

Run this command in Terminal:

```bash
cd /path/to/argus-interactive-guide
xattr -d com.apple.quarantine "VTS Guide.app"
```

Then double-click the app - it should work!

## Why This Happens
macOS adds a "quarantine" attribute to apps that aren't code-signed. This blocks them from running when double-clicked.

## Alternative: Right-Click Method
1. Right-click `VTS Guide.app`
2. Select "Open"
3. Click "Open" in the security dialog
4. After first time, double-click works

## Verify It's Working
After opening, check:
- Browser should open automatically to `http://localhost:8080`
- If browser doesn't open, manually go to that URL
- The guide should load

## Still Not Working?
Run from terminal to see errors:
```bash
"./VTS Guide.app/Contents/MacOS/VTS Guide"
```

This will show any error messages.

