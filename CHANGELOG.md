# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.6] - 2025-12-01
### Fixed
- Disabled auto-update on macOS (requires Apple Developer certificate for code signing)
- Added CHANGELOG.md for release management

### Changed
- Updated bump-version.js to validate changelog entries

## [1.0.5] - 2025-12-01
### Fixed
- Fixed artifact naming for cross-platform builds
- Project structure cleanup (moved docs to docs-internal/, scripts to scripts/)

### Changed
- Removed legacy files and old documentation

## [1.0.4] - 2025-12-01
### Fixed
- Fixed electron-builder artifactName to match latest.yml for auto-update

## [1.0.3] - 2025-12-01
### Added
- Error dialogs for auto-update failures

### Fixed
- Improved error handling for update process

## [1.0.2] - 2025-12-01
### Fixed
- Fixed version synchronization between root and electron package.json
- Added cross-env for Windows compatibility in build scripts

## [1.0.1] - 2025-12-01
### Added
- Initial auto-update implementation using electron-updater
- GitHub Releases integration for update distribution

## [1.0.0] - 2025-12-01
### Added
- Initial release of VTS Guide
- Interactive documentation for Argus VTS system
- Offline Electron desktop app for Windows, macOS, and Linux
- GitHub Pages deployment for online access
- Version tracking and update checking
- Responsive design with dark/light mode support
