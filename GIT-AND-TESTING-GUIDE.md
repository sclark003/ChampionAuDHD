# Git Commands & Local Testing Guide

This guide will help you use Git to manage your website changes and test them locally before making them live.

---

## 📋 Table of Contents

1. [What is Git?](#what-is-git)
2. [Setting Up Git](#setting-up-git)
3. [Basic Git Commands](#basic-git-commands)
4. [Testing Locally](#testing-locally)
5. [Common Workflows](#common-workflows)
6. [Troubleshooting](#troubleshooting)

---

## 🤔 What is Git?

Git is a version control system that helps you:
- **Track changes** to your files
- **Save snapshots** of your work (called "commits")
- **Undo mistakes** if something goes wrong
- **Work safely** knowing you can always go back

Think of it like "Save" in a video game - you can save your progress and go back to it later.

---

## ⚙️ Setting Up Git

### First Time Setup

1. **Install Git** (if not already installed)
   - Download from: https://git-scm.com/downloads
   - Follow the installation wizard
   - Use default settings

2. **Configure Git** (one-time setup)
   Open your terminal/command prompt and run:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

   Replace with your actual name and email.

3. **Verify Installation**
   ```bash
   git --version
   ```
   This should show your Git version (e.g., `git version 2.40.0`)

---

## 📂 Basic Git Commands

### Check Current Status
See what files have changed:
```bash
git status
```

**What you'll see:**
- **Red files** = Changed but not saved (staged)
- **Green files** = Ready to be saved (staged)
- **Untracked files** = New files not yet added to Git

---

### Save Your Changes (Commit)

**Step 1: Stage your changes** (tell Git which files to save)
```bash
git add .
```
This adds all changed files. Or add specific files:
```bash
git add src/pages/Home.jsx
```

**Step 2: Commit** (save a snapshot with a message)
```bash
git commit -m "Updated home page text"
```

**Good commit messages:**
- ✅ "Updated home page hero text"
- ✅ "Added new image to coaching page"
- ✅ "Fixed contact form email address"
- ❌ "changes" (too vague)
- ❌ "stuff" (not helpful)

---

### View Your History
See all your saved changes:
```bash
git log
```

Press `q` to exit the log view.

---

### Undo Changes (Before Committing)

**Undo changes to a specific file:**
```bash
git checkout -- src/pages/Home.jsx
```

**⚠️ Warning:** This permanently discards your changes! Use carefully.

---

### See What Changed
Compare your current files with the last saved version:
```bash
git diff
```

To see changes in a specific file:
```bash
git diff src/pages/Home.jsx
```

---

### Create a Backup Branch

Before making big changes, create a backup:
```bash
git checkout -b backup-before-changes
git add .
git commit -m "Backup before making changes"
```

To go back to main branch:
```bash
git checkout main
```

---

## 🧪 Testing Locally

### Starting the Development Server

**Step 1: Open Terminal/Command Prompt**
- **Windows:** Press `Win + R`, type `cmd`, press Enter
- **Mac:** Press `Cmd + Space`, type `Terminal`, press Enter

**Step 2: Navigate to Project Folder**
```bash
cd "C:\Users\Sarah\Documents\Documents\Python\ChampionAuDHD"
```

Or on Mac:
```bash
cd ~/Documents/ChampionAuDHD
```

**Step 3: Install Dependencies** (first time only)
```bash
npm install
```

**Step 4: Start the Server**

**Option A: Frontend Only** (for testing pages, images, text)
```bash
npm run dev
```

**Option B: Full Setup** (for testing contact forms and email functionality)
```bash
npm run dev:full
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Step 5: Open in Browser**
- Open your web browser
- Go to: `http://localhost:5173/`
- You'll see your website!

**Note:** Use `npm run dev:full` if you want to test the contact form or booking form, as these need the backend server running.

---

### Making Changes and Testing

1. **Edit a file** (e.g., `src/pages/Home.jsx`)
2. **Save the file** (Ctrl+S or Cmd+S)
3. **Check your browser** - changes appear automatically! ✨
4. **Test on mobile** - Open browser developer tools (F12) and click mobile view icon

**Testing Forms:**
- To test the contact form or booking form, you need the backend server running
- Use `npm run dev:full` instead of `npm run dev`
- Make sure your `.env` file is configured with email settings

---

### Stopping the Server

When you're done testing:
- Press `Ctrl + C` in the terminal
- Type `Y` if asked to confirm

---

## 🔄 Common Workflows

### Workflow 1: Making Small Edits

```bash
# 1. Check what you're about to change
git status

# 2. Make your edits in your code editor
# (Edit files, save them)

# 3. Test locally
npm run dev          # For pages/content
# OR
npm run dev:full     # For forms/email testing
# (Open browser, check changes)

# 4. Save your changes
git add .
git commit -m "Description of your changes"

# 5. Stop the server (Ctrl+C)
```

---

### Workflow 2: Making Big Changes (Safe Way)

```bash
# 1. Create a backup branch
git checkout -b my-changes-backup
git add .
git commit -m "Backup before big changes"

# 2. Go back to main branch
git checkout main

# 3. Make your changes
# (Edit files)

# 4. Test locally
npm run dev

# 5. If everything looks good, save
git add .
git commit -m "Description of changes"

# 6. If something went wrong, you can go back:
# git checkout my-changes-backup
```

---

### Workflow 3: Undoing a Mistake

**If you haven't committed yet:**
```bash
# See what changed
git status

# Undo changes to a file
git checkout -- src/pages/Home.jsx

# Or undo all changes
git checkout -- .
```

**If you already committed:**
```bash
# See your commit history
git log

# Go back to a previous commit (replace COMMIT_ID with actual ID)
git reset --soft HEAD~1
```

---

## 🛠️ Troubleshooting

### Problem: "npm: command not found"

**Solution:** Node.js isn't installed or not in your PATH.
- Download Node.js from: https://nodejs.org/
- Install it
- Restart your terminal

---

### Problem: "Cannot find module" errors

**Solution:** Dependencies aren't installed.
```bash
npm install
```

---

### Problem: Server won't start / Port already in use

**Solution:** Another server is running on that port.
```bash
# Option 1: Stop the other server
# Find it in Task Manager (Windows) or Activity Monitor (Mac)

# Option 2: Use a different port
npm run dev -- --port 5174
```

---

### Problem: Changes not showing in browser

**Solutions:**
1. **Hard refresh:** Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. **Clear browser cache:** Settings → Clear browsing data
3. **Check terminal for errors:** Look for red error messages
4. **Restart server:** Stop (Ctrl+C) and start again (`npm run dev`)

---

### Problem: Git says "nothing to commit"

**This is normal!** It means:
- All your changes are already saved, OR
- You haven't made any changes yet

---

### Problem: "Permission denied" errors

**Solution:** You might not have write permissions.
- Check file permissions
- Make sure you're in the correct folder
- On Mac/Linux, you might need `sudo` (use carefully!)

---

### Problem: Can't find the project folder

**Solution:** Use these commands to navigate:

```bash
# See where you are
pwd

# List files in current folder
ls        # Mac/Linux
dir       # Windows

# Go up one folder
cd ..

# Go to a specific folder
cd "folder-name"
```

---

## 📝 Quick Reference Card

### Essential Commands

```bash
# Check status
git status

# Save changes
git add .
git commit -m "Your message"

# Start testing server
npm run dev          # Frontend only
npm run dev:full     # Frontend + backend (for forms)

# Stop server
Ctrl + C

# View history
git log

# Undo file changes (before commit)
git checkout -- filename.jsx
```

### Testing Checklist

- [ ] Started development server (`npm run dev` or `npm run dev:full`)
- [ ] Opened browser to `http://localhost:5173/`
- [ ] Made my changes
- [ ] Saved the file
- [ ] Checked browser (changes appear automatically)
- [ ] Tested on mobile view (F12 → mobile icon)
- [ ] Tested forms (if applicable) - make sure backend is running
- [ ] Everything looks good!
- [ ] Saved changes with Git (`git add .` then `git commit -m "message"`)

---

## 🎯 Best Practices

### ✅ DO:
- **Test before committing** - Always test locally first
- **Write clear commit messages** - "Updated home page" not "changes"
- **Commit often** - Save your work frequently
- **Check status** - Use `git status` before committing
- **Create backups** - Use branches for big changes

### ❌ DON'T:
- **Don't commit broken code** - Test first!
- **Don't use vague messages** - "fix" doesn't help
- **Don't ignore errors** - Fix issues before committing
- **Don't delete Git files** - The `.git` folder is important!

---

## 🔐 Safety Tips

### Before Making Changes:
1. ✅ Check current status: `git status`
2. ✅ Create a backup branch if making big changes
3. ✅ Test locally first

### If Something Goes Wrong:
1. ✅ Don't panic!
2. ✅ Check `git status` to see what changed
3. ✅ Use `git checkout -- filename` to undo a file
4. ✅ Check `git log` to see previous versions
5. ✅ Ask for help if stuck

---

## 📚 Additional Resources

### Git Learning:
- **Official Git Tutorial:** https://git-scm.com/docs/gittutorial
- **Interactive Tutorial:** https://learngitbranching.js.org/

### Node.js & npm:
- **Node.js Docs:** https://nodejs.org/docs/
- **npm Docs:** https://docs.npmjs.com/

### VS Code (Recommended Editor):
- **Download:** https://code.visualstudio.com/
- **Git Extension:** Built-in, no installation needed!

---

## 🆘 Getting Help

### If You're Stuck:

1. **Check the error message** - It often tells you what's wrong
2. **Google the error** - Someone else has probably had the same issue
3. **Check Git status** - `git status` shows what's happening
4. **Ask for help** - Don't be afraid to ask!

### Common Error Messages:

**"fatal: not a git repository"**
- You're not in the project folder
- Solution: `cd` to the project folder

**"npm ERR! code ENOENT"**
- File or folder not found
- Solution: Check file paths, make sure you're in the right folder

**"Port 5173 is already in use"**
- Another server is running
- Solution: Stop other server or use different port

---

## 🎉 You're Ready!

You now know how to:
- ✅ Use basic Git commands
- ✅ Test your website locally
- ✅ Save your changes safely
- ✅ Undo mistakes if needed

**Remember:** Practice makes perfect! Start with small changes and work your way up.

---

**Happy Coding!** 🚀
