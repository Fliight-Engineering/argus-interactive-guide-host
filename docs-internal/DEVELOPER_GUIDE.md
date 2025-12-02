# 📖 Developer Guide - VTS Interactive Guide

## 🚀 Quick Start

### Development
```bash
make install         # Install dependencies
make dev             # Run dev server (http://localhost:3000)
```

### Test Electron App Locally
```bash
make test-build      # Build offline + Electron app
                     # Check: artifacts/dist-electron/
```

### All Available Commands
```bash
make help            # Show all commands
make dev             # Start dev server
make build           # Build website
make test-build      # Build Electron app locally
make release "msg"   # Release with changelog
make clean           # Clean build artifacts
make check-version   # Show current version
```

---

## 📦 Release Workflow

### Simple Release (Recommended)
```bash
make release "Your changelog message here"
```

**Example:**
```bash
make release "Fixed icon and responsive layout"
```

**This command automatically:**
1. ✅ Auto-bumps patch version (1.0.13 → 1.0.14)
2. ✅ Adds changelog entry with your message
3. ✅ Shows preview and asks for confirmation
4. ✅ Commits and pushes to GitHub
5. ✅ Creates git tag and triggers build workflow
6. ✅ Builds app for Windows & Linux (macOS disabled - needs icon)
7. ✅ Uploads to GitHub Releases with changelog
8. ✅ Users with old app will receive update notification (Windows/Linux only)

### Traditional Release (Still Works)
```bash
# 1. Manually update CHANGELOG.md
# 2. Then run publish
npm run publish        # Patch: 1.0.4 → 1.0.5
```

### Update Website Only (without releasing app)
```bash
git add -A
git commit -m "docs: update content"
git push origin main
```
→ Website auto-deploys to GitHub Pages

---

## 📁 Project Structure

```
├── docs/                    # Markdown documentation files
├── src/
│   ├── components/          # React components
│   ├── css/                 # Styles
│   └── pages/               # Custom pages
├── static/                  # Static assets (images, etc.)
├── electron/                # Electron app
│   ├── main.js              # Electron main process
│   └── package.json         # Electron config + build settings
├── .github/workflows/
│   ├── deploy.yml           # Auto-deploy to GitHub Pages
│   └── release-electron.yml # Build & release Electron app
├── package.json             # Main project config
└── docusaurus.config.js     # Docusaurus configuration
```

---

## 🔧 Configuration

### Version Files (auto-synced by `npm run bump`)
- `package.json` - Root version
- `electron/package.json` - Electron app version
- `static/version.json` - Runtime version check

### Key Files
| File | Purpose |
|------|---------|
| `docusaurus.config.js` | Site title, URL, navbar, footer |
| `sidebars.js` | Documentation sidebar structure |
| `electron/package.json` | App name, icons, build targets |

---

## 🔄 Auto-Update Flow

```
┌─────────────┐     npm run publish     ┌──────────────┐
│  Developer  │ ───────────────────────►│   GitHub     │
│  runs cmd   │                         │   Actions    │
└─────────────┘                         └──────┬───────┘
                                               │
                    ┌──────────────────────────┼──────────────────────────┐
                    │                          │                          │
                    ▼                          ▼                          ▼
           ┌───────────────┐          ┌───────────────┐          ┌───────────────┐
           │ Windows Build │          │  macOS Build  │          │  Linux Build  │
           │   (.exe)      │          │  (.dmg/.zip)  │          │  (.AppImage)  │
           └───────┬───────┘          └───────┬───────┘          └───────┬───────┘
                   │                          │                          │
                   └──────────────────────────┼──────────────────────────┘
                                              │
                                              ▼
                                    ┌─────────────────┐
                                    │ GitHub Release  │
                                    │ + latest.yml    │
                                    └────────┬────────┘
                                             │
                                             ▼
                                    ┌─────────────────┐
                                    │ User opens app  │
                                    │ → Check update  │
                                    │ → Download      │
                                    │ → Auto install  │
                                    └─────────────────┘
```

---

## 🛠 Troubleshooting

### Build fails on Windows
- Ensure `cross-env` is installed: `npm install cross-env --save-dev`

### Auto-update not working
1. Check `latest.yml` exists in GitHub Release
2. Verify `artifactName` in `electron/package.json` matches actual filename
3. Check app version is older than release version
4. **Note:** macOS does NOT support auto-update (requires Apple Developer Certificate $99/year)

### macOS app won't open ("app is damaged")
macOS Gatekeeper blocks unsigned apps. Run these commands in Terminal:
```bash
# Copy app to Applications
cp -R "/Volumes/VTS Guide/VTS Guide.app" /Applications/

# Remove quarantine attribute
xattr -cr "/Applications/VTS Guide.app"

# Open app
open "/Applications/VTS Guide.app"
```

### AppImage won't run on Linux
```bash
chmod +x VTS-Guide-*.AppImage
./VTS-Guide-*.AppImage
```

---

## 📋 Checklist for New Release

- [ ] Code changes committed
- [ ] Test locally with `npm start`
- [ ] Test Electron with `npm run build:offline && cd electron && npm start`
- [ ] Update `CHANGELOG.md` with new version entry
- [ ] Run `npm run publish`
- [ ] Wait for GitHub Actions to complete (~5 min)
- [ ] Verify release at GitHub Releases page
- [ ] Verify changelog appears in release notes

---

## 📝 CHANGELOG.md Format

Before releasing, add an entry to `CHANGELOG.md`:

```markdown
## [1.0.8] - 2025-12-02
### Added
- New feature description

### Fixed
- Bug fix description

### Changed
- Change description
```

The release workflow automatically extracts this and displays it in GitHub Release notes.
