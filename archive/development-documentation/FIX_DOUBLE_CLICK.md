# Fix: App Doesn't Open When Double-Clicked

If `VTS Guide.app` doesn't open when double-clicked, try these solutions:

## Solution 1: Right-Click and Open (Gatekeeper)

macOS might be blocking the unsigned app:

1. **Right-click** `VTS Guide.app`
2. Select **"Open"** (not double-click)
3. Click **"Open"** in the security dialog
4. After first time, double-click will work

## Solution 2: Check System Preferences

1. Open **System Preferences** → **Security & Privacy**
2. If you see a message about the app being blocked, click **"Open Anyway"**
3. Try double-clicking again

## Solution 3: Run from Terminal (Test)

To verify the app works:

```bash
open "VTS Guide.app"
```

Or:

```bash
"/path/to/VTS Guide.app/Contents/MacOS/VTS Guide"
```

If this works, the app is fine - it's just macOS security blocking it.

## Solution 4: Remove Quarantine Attribute

If the app was downloaded, macOS might have quarantined it:

```bash
xattr -d com.apple.quarantine "VTS Guide.app"
```

Then try double-clicking again.

## Solution 5: Check Console.app for Errors

1. Open **Console.app** (Applications → Utilities)
2. Filter for "VTS Guide"
3. Look for error messages
4. Share any errors you find

## Why This Happens

- macOS Gatekeeper blocks unsigned apps by default
- First run requires explicit permission
- After first permission, it works normally

## Permanent Fix (For Distribution)

To avoid this for clients, you'd need to:
1. Code sign the app with an Apple Developer certificate
2. Notarize it with Apple
3. This requires a paid Apple Developer account ($99/year)

For internal use, Solution 1 (right-click → Open) is the easiest.

