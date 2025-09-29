# ISESASS Frontend Setup Guide

## Quick Setup

### Option 1: Automated Setup (Recommended)

**For Mac/Linux:**
```bash
chmod +x setup.sh
./setup.sh
npm start
```

**For Windows:**
```cmd
setup.bat
npm start
```

### Option 2: Manual Setup

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org/)
   - Version 16.0.0 or higher required

2. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd ISESASS-Frontend
   ```

3. **Create environment file**
   ```bash
   echo "REACT_APP_API_URL=https://isesass-backend.vercel.app" > .env.local
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000)

## Troubleshooting

### Port 3000 already in use
```bash
npx kill-port 3000
npm start
```

### Dependency issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Permission errors (Mac/Linux)
```bash
sudo npm install
```

### Check versions
```bash
node --version
npm --version
```

## Project Structure

```
ISESASS-Frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── CRUD/
│   ├── Types/
│   └── ...
├── .env.local
├── package.json
└── README.md
```

## Environment Variables

The `.env.local` file should contain:
```
REACT_APP_API_URL=https://isesass-backend.vercel.app
```

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure Node.js version is 16+
3. Verify the `.env.local` file exists
4. Try clearing cache and reinstalling dependencies
