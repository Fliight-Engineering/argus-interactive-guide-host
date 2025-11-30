#!/bin/bash

# Simple launcher script for Argus VTS Guide
# Double-click this file (or run from terminal) to start the guide

cd "$(dirname "$0")"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed!"
    echo "   Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if build exists
if [ ! -d "build" ]; then
    echo "❌ Error: build/ directory not found!"
    echo "   Please run: npm run build:offline"
    exit 1
fi

# Start the launcher
node launcher.js

