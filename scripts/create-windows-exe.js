#!/usr/bin/env node

/**
 * Script to prepare Windows .exe build using pkg
 * Run: npm install -g pkg
 * Then: node create-windows-exe.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📦 Preparing Windows .exe build...');

// Check if build exists
if (!fs.existsSync('build')) {
  console.error('❌ Error: build/ directory not found!');
  console.error('   Please run: npm run build:offline');
  process.exit(1);
}

// Create package.json for pkg
const pkgConfig = {
  name: 'vts-guide',
  version: '1.0.0',
  description: 'VTS Guide Launcher',
  main: 'launcher.js',
  bin: {
    'VTS Guide': './launcher.js'
  },
  pkg: {
    assets: [
      'build/**/*'
    ],
    outputPath: 'dist',
    targets: [
      'node18-win-x64'
    ]
  },
  scripts: {
    start: 'node launcher.js'
  }
};

// Write temporary package.json for pkg
fs.writeFileSync('pkg-package.json', JSON.stringify(pkgConfig, null, 2));

console.log('✅ Created pkg-package.json');
console.log('');
console.log('📝 To build Windows .exe:');
console.log('   1. Install pkg: npm install -g pkg');
console.log('   2. Run: pkg pkg-package.json --out-path dist');
console.log('   3. The .exe will be in dist/');
console.log('');
console.log('⚠️  Note: First build will download Node.js binaries (~50MB)');

