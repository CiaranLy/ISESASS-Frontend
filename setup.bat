@echo off
REM ISESASS Frontend Setup Script for Windows

echo 🚀 Setting up ISESASS Frontend...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

echo ✅ npm version:
npm --version

REM Create .env.local file
echo 📝 Creating .env.local file...
echo REACT_APP_API_URL=https://isesass-backend.vercel.app > .env.local
echo ✅ Environment file created

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Install global dependencies
echo 📦 Installing global dependencies...
npm install -g vercel
npm install -g kill-port

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Link to existing Vercel project
echo 🔗 Linking to Vercel project...
vercel link --project isesass-frontend --yes

if %errorlevel% equ 0 (
    echo ✅ Successfully linked to Vercel project
) else (
    echo ⚠️  Could not link to Vercel project. You may need to run 'vercel login' first
)

REM Kill any process on port 3000
echo 🔧 Checking port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do (
    echo Killing process %%a on port 3000...
    taskkill /f /pid %%a >nul 2>&1
)

echo 🎉 Setup complete! Run 'npm start' to start the development server.
echo 🌐 The app will be available at: http://localhost:3000
pause
