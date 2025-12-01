# Deployment and Update System

## Overview

The Argus VTS Guide uses a fully automated CI/CD pipeline:

- **Website**: GitHub Pages (auto-deploy on push)
- **Desktop Apps**: Electron (Windows, macOS, Linux)
- **Auto-Update**: Windows & Linux apps auto-update from GitHub Releases

## Quick Commands

```bash
# Development
npm start                    # Start local dev server

# Release new version
npm run publish              # Bump version, push, tag, trigger builds

# Manual version bump
npm run bump                 # Bump patch version (1.0.0 → 1.0.1)
npm run bump minor           # Bump minor version (1.0.0 → 1.1.0)
npm run bump major           # Bump major version (1.0.0 → 2.0.0)
```

## How It Works

### 1. Development Flow

```
Edit code → git push → GitHub Pages updated
                ↓
    https://fliight-engineering.github.io/argus-interactive-guide/
```

- Every push to main triggers .github/workflows/deploy.yml
- Builds Docusaurus and deploys to GitHub Pages
- Great for dev/testing - changes visible immediately

### 2. Release Flow

```
npm run publish
       ↓
Bump version (package.json, electron/package.json, static/version.json)
       ↓
Git commit + push + tag (v1.0.x)
       ↓
GitHub Actions (.github/workflows/release-electron.yml)
       ↓
Build Windows (.exe) + macOS (.dmg) + Linux (.AppImage, .deb)
       ↓
Create GitHub Release with changelog + artifacts
       ↓
Desktop apps detect update and prompt user
```

## Workflow Files

| File | Trigger | Action |
|------|---------|--------|
| .github/workflows/deploy.yml | Push to main | Deploy to GitHub Pages |
| .github/workflows/release-electron.yml | Tag v* | Build desktop apps + GitHub Release |

## Version Management

### Files to Keep in Sync

These files are automatically synced by npm run bump:

| File | Purpose |
|------|---------|
| package.json | Root package version |
| electron/package.json | Electron app version |
| static/version.json | Version displayed in app |

### CHANGELOG.md

Before releasing, add an entry to CHANGELOG.md:

```markdown
## [1.0.8] - 2025-12-02
### Added
- New feature description

### Fixed
- Bug fix description

### Changed
- Change description
```

The release workflow automatically extracts this and adds it to GitHub Release notes.

## Desktop App Auto-Update

### How It Works

1. App starts → checks GitHub Releases for newer version
2. If update available → shows dialog to user
3. User clicks Download → downloads in background
4. Download complete → prompts to restart and install

### Platform Support

| Platform | Auto-Update | Notes |
|----------|-------------|-------|
| Windows | ✅ Yes | Works automatically |
| Linux | ✅ Yes | Works automatically |
| macOS | ❌ No | Requires Apple Developer Certificate ($99/year) |

macOS users need to download updates manually from GitHub Releases.

## Release Checklist

### Before Release

1. ✅ Test changes locally (npm start)
2. ✅ Update CHANGELOG.md with changes for new version
3. ✅ Commit all changes

### Release

```bash
npm run publish
```

This command:
1. Bumps version in all files
2. Commits version bump
3. Pushes to GitHub
4. Creates git tag
5. Triggers GitHub Actions to build apps

### After Release

1. ✅ Check GitHub Actions completed successfully
2. ✅ Verify GitHub Release has correct changelog
3. ✅ Test download links work
4. ✅ Test auto-update on Windows/Linux

## Troubleshooting

### GitHub Actions Failed

Check the Actions tab: https://github.com/Fliight-Engineering/argus-interactive-guide/actions

Common issues:
- Build failed: Check build logs for errors
- Missing secrets: Ensure GITHUB_TOKEN has write permissions

### Auto-Update Not Working

1. Check version in static/version.json matches electron/package.json
2. Check GitHub Release has latest.yml file
3. Check app is running from installed location (not development)

### macOS App Wont Open

macOS Gatekeeper blocks unsigned apps:

```bash
# Copy to Applications first
cp -R "/Volumes/VTS Guide/VTS Guide.app" /Applications/

# Remove quarantine
xattr -cr "/Applications/VTS Guide.app"

# Open app
open "/Applications/VTS Guide.app"
```

## File Structure

```
.github/
  workflows/
    deploy.yml              # GitHub Pages deployment
    release-electron.yml    # Electron app builds

electron/
  main.js                   # Electron main process + auto-updater
  package.json              # Electron build config

scripts/
  bump-version.js           # Version bump script
  update-version.js         # Update version.json

static/
  version.json              # Current version info

CHANGELOG.md                # Release notes
```

## URLs

- Website: https://fliight-engineering.github.io/argus-interactive-guide/
- Releases: https://github.com/Fliight-Engineering/argus-interactive-guide/releases
- Actions: https://github.com/Fliight-Engineering/argus-interactive-guide/actions
