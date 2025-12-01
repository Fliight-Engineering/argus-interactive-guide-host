# How to Use Reusable CI Workflows

This document provides instructions on how to utilize the reusable CI workflows for **Docusaurus + Electron** projects.

## Overview of Reusable Workflows

| Workflow | Purpose | Use Case |
|----------|---------|----------|
| `reusable-build.yml` | Build Docusaurus site | GitHub Pages, Static hosting |
| `reusable-deploy.yml` | Deploy to GitHub Pages or create Release | After build completes |
| `reusable-electron.yml` | Build Electron app with auto-updater | Desktop app distribution |
| `reusable-test.yml` | Run tests | CI validation |

---

## Quick Start

### 1. Deploy to GitHub Pages

Create `.github/workflows/deploy.yml` in your project:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build:
    uses: Fliight-Engineering/reusable-ci-workflows/.github/workflows/reusable-build.yml@main
    with:
      node-version: '20'
      offline-build: false

  deploy:
    needs: build
    uses: Fliight-Engineering/reusable-ci-workflows/.github/workflows/reusable-deploy.yml@main
    with:
      deploy-target: 'github-pages'
      artifact-name: 'site-build'
    secrets:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 2. Build Electron App with Auto-Updater

Create `.github/workflows/release-electron.yml`:

```yaml
name: Release Electron App

on:
  push:
    tags:
      - 'v*'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build-and-release:
    uses: Fliight-Engineering/reusable-ci-workflows/.github/workflows/reusable-electron.yml@main
    with:
      node-version: '20'
      electron-directory: 'electron'
      platforms: 'linux,win,mac'
    secrets:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## Workflow Inputs Reference

### reusable-build.yml

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `node-version` | string | `'20'` | Node.js version |
| `offline-build` | boolean | `false` | Set `true` for Electron (baseUrl='/') |
| `build-command` | string | `'npm run build'` | Custom build command |
| `working-directory` | string | `'.'` | Working directory |

### reusable-deploy.yml

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `deploy-target` | string | ✅ | `'github-pages'` or `'electron-release'` |
| `artifact-name` | string | No | Artifact to deploy (default: `'site-build'`) |
| `github-pages-branch` | string | No | Target branch (default: `'gh-pages'`) |

### reusable-electron.yml

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `node-version` | string | `'20'` | Node.js version |
| `electron-directory` | string | `'electron'` | Electron package.json location |
| `platforms` | string | `'linux,win,mac'` | Platforms to build |

---

## Project Structure Requirements

Your project should have this structure:

```
your-project/
├── .github/
│   └── workflows/
│       ├── deploy.yml           # GitHub Pages deployment
│       └── release-electron.yml # Electron releases
├── electron/
│   ├── main.js                  # Electron main process
│   └── package.json             # Electron dependencies
├── src/                         # Docusaurus source
├── static/                      # Static assets
├── docs/                        # Documentation content
├── docusaurus.config.js         # Must support OFFLINE_BUILD env
└── package.json
```

### docusaurus.config.js

Ensure your config supports `OFFLINE_BUILD`:

```javascript
const isOfflineBuild = process.env.OFFLINE_BUILD === 'true';
const baseUrl = isOfflineBuild ? '/' : '/your-repo-name/';

module.exports = {
  // ...
  baseUrl: baseUrl,
  // ...
};
```

### electron/package.json

Include `electron-updater` and publish config:

```json
{
  "name": "your-app",
  "version": "1.0.0",
  "dependencies": {
    "electron-updater": "^6.3.9"
  },
  "build": {
    "publish": {
      "provider": "github",
      "owner": "your-org",
      "repo": "your-repo"
    }
  }
}
```

---

## Auto-Updater Flow

1. **First Release**: Create tag `v1.0.0` → Workflow builds and creates GitHub Release
2. **User Downloads**: User downloads and installs app from Release
3. **New Release**: Push changes, create tag `v1.0.1` → New Release created
4. **Auto-Update**: User opens app → App checks GitHub → Downloads update → Installs

---

## Testing Locally

```bash
# Build for GitHub Pages
npm run build

# Build for Electron (offline)
OFFLINE_BUILD=true npm run build

# Run Electron locally
cd electron && npm start
```

---

## Secrets Required

| Secret | Required For | How to Get |
|--------|--------------|------------|
| `GITHUB_TOKEN` | All workflows | Automatically provided by GitHub Actions |

---

## Example Projects

See `templates/sample-project/` for a complete working example.
