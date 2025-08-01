# ⚛️ React Project Setup

## 1. Creating a React Project

React apps are initialized using the `create-react-app` CLI tool.

## 2. Creating a New React Application

```bash
npx create-react-app my-app
```

Or use the latest version:

```bash
npx create-react-app@latest react-todos
```

## 3. Running the React App

```bash
cd my-app
npm start
```

This will start the development server at:  
http://localhost:3000

## 4. Changing the Server Port

### On Windows CMD:
```bash
set PORT=5100 && npm start
```

### On PowerShell:
```bash
$env:PORT=5100; npm start
```

### On macOS/Linux:
```bash
PORT=5100 npm start
```

Or add to `.env` file in root directory:
```
PORT=5100
```

## 5. Useful NPM Scripts

```bash
npm start       # Start development server
npm run build   # Build production-ready app
npm test        # Run tests
npm run eject   # Eject config (irreversible)
```

> ⚠️ Note: `npm run eject` gives full control over configuration but cannot be undone.
