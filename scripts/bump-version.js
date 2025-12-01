#!/usr/bin/env node

/**
 * Script to bump version in both package.json files and update version.json
 * Usage: node scripts/bump-version.js [major|minor|patch]
 * Default: patch
 * 
 * This script also validates CHANGELOG.md has an entry for the new version.
 */

const fs = require('fs');
const path = require('path');

const bumpType = process.argv[2] || 'patch';

// Read root package.json
const rootPkgPath = path.join(__dirname, '../package.json');
const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));

// Read electron package.json
const electronPkgPath = path.join(__dirname, '../electron/package.json');
const electronPkg = JSON.parse(fs.readFileSync(electronPkgPath, 'utf8'));

// Parse current version
const currentVersion = rootPkg.version;
const [major, minor, patch] = currentVersion.split('.').map(Number);

// Calculate new version
let newVersion;
switch (bumpType) {
  case 'major':
    newVersion = `${major + 1}.0.0`;
    break;
  case 'minor':
    newVersion = `${major}.${minor + 1}.0`;
    break;
  case 'patch':
  default:
    newVersion = `${major}.${minor}.${patch + 1}`;
    break;
}

// Validate CHANGELOG.md has entry for new version
const changelogPath = path.join(__dirname, '../CHANGELOG.md');
let changelogWarning = false;
if (fs.existsSync(changelogPath)) {
  const changelog = fs.readFileSync(changelogPath, 'utf8');
  if (!changelog.includes(`## [${newVersion}]`)) {
    changelogWarning = true;
    console.log(`\n⚠️  WARNING: CHANGELOG.md does not have entry for v${newVersion}`);
    console.log(`   Please add a changelog entry before releasing.`);
    console.log(`   Expected format: ## [${newVersion}] - YYYY-MM-DD\n`);
  }
} else {
  changelogWarning = true;
  console.log('\n⚠️  WARNING: CHANGELOG.md not found.');
  console.log('   Please create CHANGELOG.md with release notes.\n');
}

// Update both package.json files
rootPkg.version = newVersion;
electronPkg.version = newVersion;

fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2) + '\n');
fs.writeFileSync(electronPkgPath, JSON.stringify(electronPkg, null, 2) + '\n');

// Update version.json
const versionJsonPath = path.join(__dirname, '../static/version.json');
const versionData = {
  version: newVersion,
  buildDate: new Date().toISOString(),
  updateUrl: 'https://github.com/Fliight-Engineering/argus-interactive-guide/releases/latest',
  versionCheckUrl: 'https://raw.githubusercontent.com/Fliight-Engineering/argus-interactive-guide/main/static/version.json'
};
fs.writeFileSync(versionJsonPath, JSON.stringify(versionData, null, 2) + '\n');

console.log(`✅ Bumped version: ${currentVersion} → ${newVersion}`);
console.log(`   Updated: package.json, electron/package.json, static/version.json`);

if (changelogWarning) {
  console.log(`\n📝 Next steps:`);
  console.log(`   1. Add entry to CHANGELOG.md for v${newVersion}`);
  console.log(`   2. Run: npm run publish`);
} else {
  console.log(`\n📝 Next step: Run npm run publish`);
}
