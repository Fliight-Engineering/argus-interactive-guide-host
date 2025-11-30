#!/bin/bash

# Creates a fully standalone macOS .app bundle for VTS Guide
# Uses pkg to bundle Node.js - no Node.js installation needed on client Mac!

APP_NAME="VTS Guide"
ARTIFACTS_DIR="artifacts"
APP_DIR="${ARTIFACTS_DIR}/${APP_NAME}.app"
CONTENTS_DIR="${APP_DIR}/Contents"
MACOS_DIR="${CONTENTS_DIR}/MacOS"
RESOURCES_DIR="${CONTENTS_DIR}/Resources"
DIST_DIR="dist"

echo "📦 Creating standalone macOS app bundle: ${APP_NAME}.app"

# Check if build exists
if [ ! -d "build" ]; then
    echo "❌ Error: build/ directory not found!"
    echo "   Please run: npm run build:offline"
    exit 1
fi

# Check if pkg is installed
if ! command -v pkg &> /dev/null; then
    echo "❌ Error: pkg is not installed!"
    echo "   Installing pkg globally..."
    npm install -g pkg
    if [ $? -ne 0 ]; then
        echo "   Failed to install pkg. Please run: npm install -g pkg"
        exit 1
    fi
fi

# Create artifacts directory if it doesn't exist
mkdir -p "${ARTIFACTS_DIR}"

# Clean up old builds
rm -rf "${APP_DIR}"
rm -rf "${DIST_DIR}"
rm -f pkg-package.json

# Create package.json for pkg
cat > pkg-package.json <<EOF
{
  "name": "vts-guide",
  "version": "1.0.0",
  "description": "VTS Guide Launcher",
  "main": "launcher.js",
  "bin": {
    "VTS Guide": "./launcher.js"
  },
  "pkg": {
    "assets": [
      "build/**/*"
    ],
    "outputPath": "dist",
    "targets": [
      "node18-macos-x64",
      "node18-macos-arm64"
    ]
  }
}
EOF

echo "🔨 Building standalone executable with pkg..."
echo "   (First time will download Node.js binaries ~50MB)"

# Build with pkg - specify target explicitly
pkg pkg-package.json --out-path "${DIST_DIR}" --targets node18-macos-x64,node18-macos-arm64

if [ $? -ne 0 ]; then
    echo "❌ Failed to build with pkg"
    exit 1
fi

# Detect architecture and use appropriate executable
ARCH=$(uname -m)
EXECUTABLE=""

if [ "$ARCH" = "arm64" ]; then
    EXECUTABLE="${DIST_DIR}/pkg-package-arm64"
elif [ "$ARCH" = "x86_64" ]; then
    EXECUTABLE="${DIST_DIR}/pkg-package-x64"
else
    # Try to find any executable
    EXECUTABLE=$(find "${DIST_DIR}" -type f -perm +111 | head -1)
fi

if [ -z "$EXECUTABLE" ] || [ ! -f "$EXECUTABLE" ]; then
    echo "❌ Error: Executable not found in dist/"
    echo "   Contents of dist/:"
    ls -la "${DIST_DIR}" 2>/dev/null || echo "   (dist/ doesn't exist)"
    exit 1
fi

echo "✅ Standalone executable created: $(basename "${EXECUTABLE}") (${ARCH})"

# Create app bundle structure
mkdir -p "${MACOS_DIR}"
mkdir -p "${RESOURCES_DIR}"

# Copy the pkg-built executable into the app bundle with correct name
cp "${EXECUTABLE}" "${MACOS_DIR}/VTS Guide"
chmod +x "${MACOS_DIR}/VTS Guide"

# Create Info.plist
cat > "${CONTENTS_DIR}/Info.plist" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleExecutable</key>
    <string>VTS Guide</string>
    <key>CFBundleIdentifier</key>
    <string>com.fliight.vtsguide</string>
    <key>CFBundleName</key>
    <string>VTS Guide</string>
    <key>CFBundleDisplayName</key>
    <string>VTS Guide</string>
    <key>CFBundleVersion</key>
    <string>1.0.0</string>
    <key>CFBundleShortVersionString</key>
    <string>1.0</string>
    <key>CFBundlePackageType</key>
    <string>APPL</string>
    <key>CFBundleIconFile</key>
    <string>AppIcon</string>
    <key>LSMinimumSystemVersion</key>
    <string>10.13</string>
    <key>NSHighResolutionCapable</key>
    <true/>
    <key>LSUIElement</key>
    <false/>
    <key>NSHighResolutionCapable</key>
    <true/>
    <key>LSBackgroundOnly</key>
    <false/>
</dict>
</plist>
EOF

# Clean up
rm -rf "${DIST_DIR}"
rm -f pkg-package.json

echo ""
echo "✅ Created ${ARTIFACTS_DIR}/${APP_NAME}.app (fully standalone - no Node.js needed!)"
echo ""
echo "📝 To set a custom icon:"
echo "   1. Right-click ${ARTIFACTS_DIR}/${APP_NAME}.app → Get Info"
echo "   2. Drag static/img/vts-guide/image29.png to the icon area at the top"
echo ""
echo "🚀 Double-click ${ARTIFACTS_DIR}/${APP_NAME}.app to launch!"
echo "   (No Node.js installation required on client Mac!)"
