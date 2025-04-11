# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## React App Setup & GitHub Upload Notes
Date: 2025-04-11

### STEP 1: Install Node.js
1. Go to https://nodejs.org  
2. Download the LTS version and install it.  
3. Confirm installation:
   ```
   node -v
   npm -v
   ```

### STEP 2: Create React App
1. Open Command Prompt or PowerShell  
2. Navigate to desired folder:
   ```
   cd C:\Users\YourName\Documents
   ```
3. Create a new React app:
   ```
   npx create-react-app my-app
   ```
4. Navigate into the app:
   ```
   cd my-app
   ```
5. Start the app:
   ```
   npm start
   ```

### STEP 3: Update Node & npm (if needed)
- Visit https://nodejs.org and reinstall the latest LTS version.  
- Or use NVM for Windows: https://github.com/coreybutler/nvm-windows/releases

### STEP 4: Upload Project to GitHub
1. Go to https://github.com and create a new repository (don't initialize with README).  
2. In your terminal:
   ```
   cd path\to\my-app
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Add remote:
   ```
   git remote add origin https://github.com/YourUsername/repo-name.git
   ```
4. Rename default branch to main:
   ```
   git branch -M main
   ```

### STEP 5: Push to GitHub

**Option A: If the remote is empty:**
```
git push -u origin main
```

**Option B: If remote already has a README or other files:**
```
git push -u origin main --force
```
or
```
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

✅ You're all set! Your React app is live on GitHub.
