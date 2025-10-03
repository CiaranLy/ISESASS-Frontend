#!/bin/bash

# ISESASS Frontend Setup Script
echo "🚀 Setting up ISESASS Frontend..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16+ required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Create .env.local file
echo "📝 Creating .env.local file..."
echo "REACT_APP_API_URL=https://isesass-backend.vercel.app" > .env.local
echo "✅ Environment file created"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install global dependencies
echo "📦 Installing global dependencies..."
npm install -g vercel
npm install -g kill-port

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Link to existing Vercel project
echo "🔗 Linking to Vercel project..."
vercel link --project isesass-frontend --yes

if [ $? -eq 0 ]; then
    echo "✅ Successfully linked to Vercel project"
else
    echo "⚠️  Could not link to Vercel project. You may need to run 'vercel login' first"
fi

# Kill any process on port 3000
echo "🔧 Checking port 3000..."
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "⚠️  Port 3000 is in use. Attempting to kill existing process..."
    npx kill-port 3000
    sleep 2
fi

echo "🎉 Setup complete! Run 'npm start' to start the development server."
echo "🌐 The app will be available at: http://localhost:3000"
