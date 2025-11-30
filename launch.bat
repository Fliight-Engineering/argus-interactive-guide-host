@echo off
REM Simple launcher script for Argus VTS Guide
REM Double-click this file to start the guide

cd /d "%~dp0"

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error: Node.js is not installed!
    echo    Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if build exists
if not exist "build" (
    echo ❌ Error: build/ directory not found!
    echo    Please run: npm run build:offline
    pause
    exit /b 1
)

REM Start the launcher
node launcher.js

pause

