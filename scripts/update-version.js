#!/usr/bin/env node

/**
 * Script to update version.json with current version and build date
 * Run this before building: npm run update-version
 */

const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');
const versionJsonPath = path.join(__dirname, '../static/version.json');

const versionData = {
  version: packageJson.version,
  buildDate: new Date().toISOString(),
  updateUrl: 'https://github.com/Fliight-Engineering/argus-interactive-guide/releases/latest',
  versionCheckUrl: 'https://raw.githubusercontent.com/Fliight-Engineering/argus-interactive-guide/main/static/version.json'
};

fs.writeFileSync(
  versionJsonPath,
  JSON.stringify(versionData, null, 2) + '\n'
);

console.log(`✅ Updated version.json to v${packageJson.version}`);
console.log(`   Build date: ${versionData.buildDate}`);

