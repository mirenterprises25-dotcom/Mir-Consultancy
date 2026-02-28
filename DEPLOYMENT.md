# Deployment Guide

This repository is configured to automatically build and deploy the MIR Consulting website to GitHub Pages using **GitHub Actions**.

## How It Works
Because there are no backend servers involved, the entire application has been converted to a **Static Site** using React and Vite. 

When you make a change to the code and push it to the `main` branch, a GitHub Action is triggered automatically.

1. **Trigger:** You upload or modify files on the `main` branch.
2. **Build:** GitHub runs the `.github/workflows/deploy.yml` file. This installs the package dependencies (`npm ci`) and compiles the React application (`npm run build`).
3. **Publish:** The resulting static files in the `frontend/dist` directory are securely uploaded and served globally on GitHub Pages.

## Managing the Deployment
- **Deployment URL:** The site will be available at `https://mirenterprises25-dotcom.github.io/Mir-Consultancy/`.
- **Viewing Deployment Progress:** Go to the **Actions** tab in your GitHub repository to watch the deployment build in real-time. If it fails (e.g., due to a syntax error in your JSON files), the logs will explain what went wrong.
- **Enabling GitHub Pages:** If this is your first time deploying:
  1. Go to your repository **Settings** in GitHub.
  2. Navigate to **Pages** on the left sidebar.
  3. Under *Build and deployment > Source*, select **GitHub Actions**.

## Custom Domain
If you eventually purchase a domain name (like `mir-consulting.com`):
1. Go to repository **Settings -> Pages**.
2. Enter your domain in the **Custom domain** field and save.
3. Your DNS provider must be pointed to GitHub's IPs. (See GitHub's official documentation for setting up custom domains).
