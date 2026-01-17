# Deployment Guide: Uploading to IONOS with FileZilla

This guide will help you upload your website files to IONOS hosting using FileZilla, a free FTP (File Transfer Protocol) client.

---

## 📋 Table of Contents

1. [What is FileZilla?](#what-is-filezilla)
2. [Installing FileZilla](#installing-filezilla)
3. [Getting IONOS FTP Credentials](#getting-ionos-ftp-credentials)
4. [Connecting to IONOS](#connecting-to-ionos)
5. [Uploading Files](#uploading-files)
6. [Deployment Workflow](#deployment-workflow)
7. [Troubleshooting](#troubleshooting)
8. [Best Practices](#best-practices)

---

## 🤔 What is FileZilla?

FileZilla is a free, open-source FTP client that lets you:
- **Upload files** from your computer to your web server
- **Download files** from your server to your computer
- **Manage files** on your web server
- **Sync folders** between local and remote

Think of it like a file explorer that connects to your website's server.

---

## 📥 Installing FileZilla

### Step 1: Download FileZilla

1. Go to: https://filezilla-project.org/
2. Click **"Download FileZilla Client"**
3. Choose your operating system (Windows, Mac, or Linux)
4. Download the installer

### Step 2: Install FileZilla

1. **Run the installer** you just downloaded
2. **Follow the installation wizard:**
   - Click "Next" through the setup
   - Choose installation location (default is fine)
   - **Important:** During installation, uncheck any optional software/add-ons if you don't want them
3. **Complete the installation**
4. **Launch FileZilla**

---

## 🔑 Getting IONOS FTP Credentials

Before you can connect, you need your FTP login details from IONOS.

### Option 1: Find in IONOS Control Panel

1. **Log in to IONOS** (https://www.ionos.com/)
2. **Go to your hosting package**
3. **Navigate to "FTP & SSH"** or "FTP Accounts"
4. **Find your FTP credentials:**
   - **FTP Server/Host:** Usually `ftp.yourdomain.com` or an IP address
   - **FTP Username:** Your FTP username
   - **FTP Password:** Your FTP password
   - **Port:** Usually `21` (for FTP) or `22` (for SFTP)

### Option 2: Check Welcome Email

IONOS usually sends FTP credentials in your welcome email when you set up hosting.

### Option 3: Create New FTP Account (if needed)

1. In IONOS control panel, go to **"FTP & SSH"**
2. Click **"Create FTP Account"** or **"Add User"**
3. Set username and password
4. Note down the credentials

**Important:** Keep these credentials secure! Don't share them publicly.

---

## 🔌 Connecting to IONOS

### Step 1: Open Site Manager

1. **Launch FileZilla**
2. Click **"File"** → **"Site Manager"** (or press `Ctrl+S`)
3. Click **"New Site"** button
4. Give it a name (e.g., "ChampionAuDHD Website")

### Step 2: Enter Connection Details

Fill in the following fields:

**General Tab:**
- **Protocol:** Choose:
  - `FTP - File Transfer Protocol` (most common, port 21)
  - `SFTP - SSH File Transfer Protocol` (more secure, port 22)
- **Host:** Your FTP server address (e.g., `ftp.yourdomain.com`)
- **Port:** 
  - `21` for FTP
  - `22` for SFTP
  - Leave blank to use default
- **Encryption:** 
  - For FTP: `Only use plain FTP (insecure)`
  - For SFTP: `Require explicit FTP over TLS`
- **Logon Type:** `Normal`
- **User:** Your FTP username
- **Password:** Your FTP password

**Example Settings:**
```
Protocol: FTP - File Transfer Protocol
Host: ftp.championaudhd.com
Port: 21
Encryption: Only use plain FTP (insecure)
Logon Type: Normal
User: your-username
Password: your-password
```

### Step 3: Save and Connect

1. Click **"OK"** to save
2. Click **"Connect"** (or double-click your site name)
3. FileZilla will connect to your server

**First Time Connection:**
- You may see a certificate warning (for SFTP)
- Click **"OK"** to accept (this is normal)

---

## 📤 Uploading Files

### Understanding the FileZilla Interface

FileZilla has **4 main panels:**

1. **Top Left:** Your local computer files (where your website files are)
2. **Top Right:** Remote server files (your website on IONOS)
3. **Bottom Left:** Local file queue (files waiting to upload)
4. **Bottom Right:** Transfer status and server messages

### Step 1: Navigate to Your Local Files

1. **In the left panel** (Local site), navigate to your project folder:
   ```
   C:\Users\Sarah\Documents\Documents\Python\ChampionAuDHD\dist
   ```
   This is your **built website** folder (after running `npm run build`)

2. **You should see:**
   - `index.html`
   - `assets/` folder
   - Image files (`.jpg`, `.png`, etc.)

### Step 2: Navigate to Remote Server

1. **In the right panel** (Remote site), navigate to your website's root folder
2. **Common locations:**
   - `/` (root)
   - `/httpdocs/` (IONOS default)
   - `/public_html/` (some IONOS packages)
   - `/www/` (alternative)

3. **If you're not sure:**
   - Look for folders like `httpdocs`, `public_html`, or `www`
   - Your `index.html` should be in the same folder as these

### Step 3: Upload Files

**Method 1: Drag and Drop**
1. **Select files/folders** in the left panel (local)
2. **Drag them** to the right panel (remote)
3. **Drop them** in the correct folder
4. FileZilla will start uploading

**Method 2: Right-Click Menu**
1. **Right-click** on files/folders in the left panel
2. Select **"Upload"**
3. Files will be added to the queue and upload

**Method 3: Select and Upload Button**
1. **Select files** in the left panel
2. Click the **up arrow** button (Upload) in the toolbar

### Step 4: Monitor Upload Progress

- **Bottom panel** shows upload progress
- **Green checkmarks** = successful uploads
- **Red X marks** = failed uploads
- Wait for all uploads to complete

---

## 🔄 Deployment Workflow

### Complete Deployment Process

**Step 1: Build Your Website**
```bash
# In your project folder
npm run build
```

This creates the `dist/` folder with your production website.

**Step 2: Connect to IONOS**
1. Open FileZilla
2. Connect to your IONOS server (using saved site)

**Step 3: Backup Current Website** (Recommended)
1. In FileZilla, **right-click** on your remote `index.html`
2. Select **"Download"** to save a backup
3. Or download the entire website folder

**Step 4: Upload New Files**
1. Navigate to local `dist/` folder
2. Navigate to remote website root (e.g., `/httpdocs/`)
3. **Select all files** in `dist/` folder:
   - `index.html` ⚠️ **IMPORTANT:** Must be from `dist/` folder, NOT the root `index.html`!
   - `assets/` folder
   - All image files
4. **Upload** to remote server

**⚠️ CRITICAL:** Make sure you upload `dist/index.html`, NOT the root `index.html` file!
- ✅ **Correct:** `dist/index.html` (has `/assets/index-xxxxx.js`)
- ❌ **Wrong:** Root `index.html` (has `/src/main.jsx` - this causes MIME type errors!)

**Step 5: Upload Server Files** (if needed)
1. Upload `server.js` to your server (if using Node.js hosting)
2. Upload `.htaccess` file (for Apache routing)
3. Upload `.env` file (keep it secure!)

**Step 6: Verify Upload**
1. Visit your website in a browser
2. Check that everything loads correctly
3. Test all pages and forms

---

## 📁 File Structure on IONOS

### Typical IONOS Structure

```
/httpdocs/                    (or /public_html/ or /www/)
├── index.html                ← Your main page
├── assets/
│   ├── index-xxxxx.css       ← Styles
│   └── index-xxxxx.js        ← JavaScript
├── bg-image.jpg              ← Images
├── hero-image.jpg
├── .htaccess                 ← Apache configuration
└── server.js                  ← Backend (if using Node.js)
```

### Important Files to Upload

**Always Upload:**
- ✅ `index.html` - Main page
- ✅ `assets/` folder - CSS and JavaScript
- ✅ All images from `dist/` folder
- ✅ `.htaccess` - For routing

**Conditional:**
- ⚠️ `server.js` - Only if using Node.js backend
- ⚠️ `.env` - Only if needed (keep secure!)

**Don't Upload:**
- ❌ `src/` folder - Source files (not needed)
- ❌ `node_modules/` - Dependencies (not needed)
- ❌ `.git/` - Git files (not needed)

---

## 🛠️ Troubleshooting

### Problem: "Connection Timeout"

**Solutions:**
1. **Check your FTP host address** - Make sure it's correct
2. **Check port number** - Try port 21 for FTP or 22 for SFTP
3. **Check firewall** - FileZilla might be blocked
4. **Try passive mode:**
   - Go to **Edit** → **Settings** → **Connection** → **FTP**
   - Check **"Use passive mode"**

---

### Problem: "Authentication Failed"

**Solutions:**
1. **Double-check username and password** - They're case-sensitive
2. **Reset FTP password** in IONOS control panel
3. **Check if account is active** in IONOS
4. **Try SFTP instead of FTP** (or vice versa)

---

### Problem: "550 Permission Denied"

**Solutions:**
1. **Check file permissions:**
   - Right-click file → **"File permissions"**
   - Set to `644` for files
   - Set to `755` for folders
2. **Make sure you're in the correct folder** (usually `/httpdocs/`)
3. **Check if you have write permissions** in IONOS

---

### Problem: Files Upload But Website Doesn't Update

**Solutions:**
1. **Clear browser cache:**
   - Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. **Check file paths:**
   - Make sure `index.html` is in the root folder
   - Verify image paths start with `/`
3. **Check `.htaccess` file:**
   - Make sure it's uploaded
   - Verify it's in the root folder
4. **Wait a few minutes** - Sometimes changes take time to propagate

---

### Problem: "Loading module from /src/main.jsx was blocked because of a disallowed MIME type"

**This means the WRONG index.html is being served!**

**Solutions:**
1. **Delete the root `index.html` from your server** (if it exists in `/httpdocs/`)
2. **Upload the correct `index.html` from `dist/` folder:**
   - The correct `index.html` should reference `/assets/index-xxxxx.js`
   - The wrong one references `/src/main.jsx`
3. **Verify you uploaded from `dist/` folder:**
   - Check that `index.html` on server has `<script src="/assets/index-xxxxx.js">`
   - NOT `<script src="/src/main.jsx">`
4. **Clear browser cache** and hard refresh (`Ctrl + Shift + R`)
5. **Make sure `.htaccess` is uploaded** - it blocks access to `/src/` folder

---

### Problem: Images Not Showing

**Solutions:**
1. **Check image file names** - They're case-sensitive!
   - `image.jpg` ≠ `Image.jpg`
2. **Verify image paths** in code:
   - Should be `/image.jpg` (with leading slash)
   - Images must be in `public/` folder before building
3. **Check file extensions** - `.jpg` vs `.jpeg` vs `.JPG`
4. **Re-upload images** - Make sure they're in the `dist/` folder

---

### Problem: "Connection Refused"

**Solutions:**
1. **Check if FTP is enabled** in IONOS control panel
2. **Verify server address** is correct
3. **Try different port:**
   - Port 21 (FTP)
   - Port 22 (SFTP)
   - Port 990 (FTPS)
4. **Contact IONOS support** if problem persists

---

## ✅ Best Practices

### Before Uploading

- ✅ **Always build first:** Run `npm run build` before uploading
- ✅ **Test locally:** Make sure everything works with `npm run dev`
- ✅ **Backup current site:** Download existing files as backup
- ✅ **Check file sizes:** Large files may take time to upload

### During Upload

- ✅ **Upload in order:**
  1. `.htaccess` first (if needed)
  2. `index.html`
  3. `assets/` folder
  4. Images
- ✅ **Don't interrupt:** Let uploads complete
- ✅ **Watch for errors:** Check bottom panel for failed uploads

### After Uploading

- ✅ **Verify files:** Check that all files uploaded successfully
- ✅ **Test website:** Visit your site and test all pages
- ✅ **Check mobile:** Test on mobile devices
- ✅ **Test forms:** Make sure contact/booking forms work
- ✅ **Clear cache:** Hard refresh browser (`Ctrl + Shift + R`)

### Security

- ✅ **Keep `.env` secure:** Don't share it publicly
- ✅ **Use SFTP when possible:** More secure than FTP
- ✅ **Don't upload source files:** Only upload `dist/` folder
- ✅ **Change default passwords:** Use strong FTP passwords

---

## 📝 Quick Reference

### Essential FileZilla Actions

| Action | How To |
|--------|--------|
| **Connect** | Double-click site in Site Manager |
| **Upload** | Drag files from left to right, or right-click → Upload |
| **Download** | Drag files from right to left, or right-click → Download |
| **Delete** | Right-click → Delete (be careful!) |
| **Rename** | Right-click → Rename |
| **Create Folder** | Right-click → Create directory |
| **Set Permissions** | Right-click → File permissions |

### File Permissions

| Type | Permission | When to Use |
|------|-----------|-------------|
| **Files** | `644` | HTML, CSS, JS, images |
| **Folders** | `755` | Directories |
| **Scripts** | `755` | PHP, Node.js scripts |

### Common IONOS Folders

| Folder | Purpose |
|--------|---------|
| `/httpdocs/` | Main website folder (most common) |
| `/public_html/` | Alternative website folder |
| `/www/` | Alternative website folder |
| `/logs/` | Server logs (read-only) |

---

## 🎯 Step-by-Step: First Time Deployment

### Complete Checklist

1. **✅ Build your website**
   ```bash
   npm run build
   ```

2. **✅ Install FileZilla**
   - Download and install from filezilla-project.org

3. **✅ Get FTP credentials from IONOS**
   - Log in to IONOS control panel
   - Find FTP & SSH section
   - Note down: Host, Username, Password, Port

4. **✅ Set up FileZilla connection**
   - Open Site Manager
   - Create new site
   - Enter credentials
   - Save and connect

5. **✅ Navigate to correct folders**
   - Local: `dist/` folder
   - Remote: `/httpdocs/` (or your website root)

6. **✅ Upload files**
   - Select all files in `dist/`
   - Upload to remote server
   - Wait for completion

7. **✅ Upload additional files**
   - `.htaccess` (if needed)
   - `server.js` (if using Node.js)
   - `.env` (keep secure!)

8. **✅ Test your website**
   - Visit your domain
   - Test all pages
   - Test forms
   - Check mobile view

9. **✅ Verify everything works**
   - Images load correctly
   - Links work
   - Forms submit
   - No console errors

---

## 🔄 Updating Your Website

### Quick Update Process

1. **Make your changes** (edit files)
2. **Test locally:** `npm run build` then `npm run preview`
3. **Build:** `npm run build`
4. **Connect FileZilla** to IONOS
5. **Upload changed files** (or upload entire `dist/` folder)
6. **Test live site**

**Tip:** You can upload just the changed files instead of everything, but uploading the entire `dist/` folder is safer and ensures everything is in sync.

---

## 🆘 Getting Help

### If You're Stuck

1. **Check FileZilla logs:**
   - View → Show Message Log
   - Look for error messages

2. **IONOS Support:**
   - Contact IONOS support for FTP issues
   - They can verify your FTP account settings

3. **FileZilla Forums:**
   - https://forum.filezilla-project.org/

4. **Common Issues:**
   - Check this guide's troubleshooting section
   - Verify all credentials are correct
   - Make sure FTP is enabled in IONOS

---

## 📚 Additional Resources

- **FileZilla Documentation:** https://wiki.filezilla-project.org/
- **IONOS Help Center:** https://www.ionos.com/help/
- **FTP vs SFTP:** Use SFTP when possible (more secure)

---

## 🎉 You're Ready!

You now know how to:
- ✅ Install and set up FileZilla
- ✅ Connect to IONOS
- ✅ Upload your website files
- ✅ Troubleshoot common issues
- ✅ Deploy updates safely

**Remember:** Always test locally first, backup before uploading, and verify everything works after deployment!

---

**Happy Deploying!** 🚀
