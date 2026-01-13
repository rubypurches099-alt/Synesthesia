# GitHub Setup Guide

## 📦 Everything is Ready to Upload!

This folder contains your complete, organized Synesthesia repository ready for GitHub.

---

## 🚀 Upload to GitHub (Step-by-Step)

### Step 1: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" (if you don't have an account)
3. Follow the signup process
4. Verify your email

### Step 2: Create New Repository
1. Click the **"+"** icon in top-right corner
2. Select **"New repository"**
3. Fill in details:
   - **Repository name:** `synesthesia`
   - **Description:** "MIDI Visualizer Collection - The Sound of Colour"
   - **Visibility:** Select **Public** (required for free GitHub Pages)
   - **DON'T** initialize with README (we already have one)
4. Click **"Create repository"**

### Step 3: Upload Files
1. On the new repository page, click **"uploading an existing file"**
2. **Select ALL files and folders** from this directory:
   - index.html
   - README.md
   - .gitignore
   - visualizers/ (folder)
   - archive/ (folder)
   - docs/ (folder)
   - assets/ (folder)
3. **Drag and drop** everything into the upload area
4. Wait for upload to complete (may take 30-60 seconds)
5. Add commit message: "Initial commit - Complete Synesthesia collection"
6. Click **"Commit changes"**

### Step 4: Enable GitHub Pages
1. Go to **Settings** tab (top menu)
2. Click **Pages** in left sidebar
3. Under "Source":
   - Branch: Select **main**
   - Folder: Select **/ (root)**
4. Click **Save**
5. Wait 2-3 minutes for deployment

### Step 5: Get Your Link
1. Refresh the Pages settings page
2. You'll see: **"Your site is live at https://YOUR-USERNAME.github.io/synesthesia/"**
3. Click the link to visit your site!
4. **Bookmark it** and share!

---

## ✅ What You'll Have

After setup, your URLs will be:

- **Main Site:** `https://YOUR-USERNAME.github.io/synesthesia/`
- **Visualizers:** `https://YOUR-USERNAME.github.io/synesthesia/visualizers/newton-midi-visualizer.html`
- **Archive Browser:** `https://YOUR-USERNAME.github.io/synesthesia/archive/`
- **Individual Archives:** `https://YOUR-USERNAME.github.io/synesthesia/archive/styles/synthwave.html`

---

## 📝 Update README

After your site is live:

1. Click on `README.md` in your repository
2. Click the pencil icon (✏️) to edit
3. Replace `YOUR-USERNAME` with your actual GitHub username
4. Scroll down and click "Commit changes"

---

## 🔄 Making Updates Later

When you want to add new visualizers or update files:

### Option A: Web Interface (Easy)
1. Go to your repository on GitHub
2. Navigate to the file/folder
3. Click "Add file" → "Upload files"
4. Drag new files
5. Commit changes
6. Site updates automatically in 1-2 minutes!

### Option B: Git Commands (Advanced)
```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/synesthesia.git
cd synesthesia

# Make changes to files
# ... edit files ...

# Commit and push
git add .
git commit -m "Update: description of changes"
git push
```

---

## 📂 File Organization Tips

### Adding New Visualizers:
1. Place file in `/visualizers/` folder
2. Update `index.html` to add new card
3. Commit changes

### Archiving Old Versions:
1. Move old file to appropriate `/archive/` subfolder
2. Rename with version number or date
3. Update `/archive/index.html` if needed
4. Commit changes

### Version Naming Convention:
```
visualizer-name-v1.0.html
visualizer-name-v2.0-2025-01.html
visualizer-name-experimental-2025-01.html
```

---

## 🆘 Troubleshooting

### Site Not Loading After 5 Minutes?
- Check Settings → Pages shows "Your site is published"
- Make sure branch is set to "main" not "master"
- Ensure index.html is in root (not in a subfolder)
- Try a hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

### 404 Errors on Visualizer Links?
- Check that folders uploaded correctly
- File paths are case-sensitive
- Make sure folder structure matches exactly

### Files Not Updating?
- GitHub Pages can take 1-2 minutes to deploy
- Try clearing browser cache
- Check the "Actions" tab for build status

---

## 🌟 Next Steps

Once your site is live:

1. **Test all visualizers** - Click each one to make sure they work
2. **Test archive browser** - Visit `/archive/` and test links
3. **Share your link** - Give it to friends, collaborators, or clients
4. **Update README** - Add your GitHub username to all links
5. **Consider custom domain** - GitHub Pages supports custom domains (optional)

---

## 📧 Need Help?

If you run into issues:
1. Check GitHub's [Pages Documentation](https://docs.github.com/pages)
2. Search GitHub Community discussions
3. Double-check all steps in this guide

---

## 🎉 You're All Set!

Your repository is professionally organized and ready to share with the world!

**Happy visualizing!** 🎨🎵

---

*The Sound Of Colour - Ruby Purches*
