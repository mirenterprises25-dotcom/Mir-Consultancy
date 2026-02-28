# Editing Guide for Administrators

This guide is designed for administrators who want to edit the content of the MIR Consulting website **without writing code**. 

The website uses a **"Serverless Static Data"** architecture. This means all the text, lists, and articles are stored as simple `.json` (JavaScript Object Notation) files. 

## Where to Find Content
All website content is located in the GitHub repository here:
`/frontend/public/data/`

Inside this folder, you will find files like:
- `industries.json`
- `capabilities.json`
- `insights.json`
- `leadership.json`
- `pages.json`

## How to Edit Text
To change text on the website directly from GitHub:

1. Open your repository on GitHub.com in your web browser.
2. Navigate to `frontend/public/data/`.
3. Click on the file you want to edit (e.g., `leadership.json`).
4. Click the **Pencil icon** (Edit this file) in the top right corner of the file view.
5. Carefully change the text inside the quotation marks `" "`.

**Example:**
Change: `"name": "Mir AbdulRehman"`
To: `"name": "Mir A. Rehman"`

> ⚠️ **CRITICAL Rule:** Never delete the quotation marks `" "` or the commas `,` at the end of lines. Doing so will break the JSON format, and the website build will fail to load the data.

6. Scroll down and click **Commit changes...**.
7. In the message box type a short description (e.g., "Updated CEO name") and click **Commit changes**.

*As soon as you commit the change, GitHub Actions will automatically rebuild the website. Your changes will be live in ~2 minutes.*

## How to Add or Change Images
Images are stored in `/frontend/public/images/` or another relative asset folder.

1. Navigate to your desired image folder in GitHub.
2. Click **Add file** -> **Upload files**.
3. Upload your new image (preferably a compressed WebP, JPEG, or PNG).
4. Note the exact file name (e.g., `new-hero.jpg`).
5. Open your corresponding `data` JSON file (or a React Component in `src/pages`) and update the image reference URL to point to `/images/new-hero.jpg`.

## Need Help?
If you make a mistake and the website breaks:
1. Go to the **Commits** tab in GitHub.
2. You can revert the latest change safely.
3. Use a free tool like [JSONLint.com](https://jsonlint.com/) and paste your edited JSON file to ensure you didn't miss a comma or quote before committing.
