# ChampionAuDHD Website

A modern, responsive website for ChampionAuDHD coaching and consultancy services.

## 📚 Documentation

This project includes comprehensive documentation for non-technical users:

1. **[EDITING-GUIDE.md](./EDITING-GUIDE.md)** - Complete guide for editing website content
2. **[COMPONENT-REFERENCE.md](./COMPONENT-REFERENCE.md)** - Reference for all reusable components
3. **[GIT-AND-TESTING-GUIDE.md](./GIT-AND-TESTING-GUIDE.md)** - Git commands and local testing instructions
4. **[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)** - Guide for uploading to IONOS using FileZilla

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if not already done)
   ```bash
   git clone <repository-url>
   cd ChampionAuDHD
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `server-example.env` to `.env`
   - Fill in your configuration values (email, social media links, etc.)

4. **Start development server**
   ```bash
   # Frontend only (for content editing)
   npm run dev
   
   # Full setup (for testing forms/email)
   npm run dev:full
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173/`

## 📁 Project Structure

```
ChampionAuDHD/
├── src/
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Coaching.jsx
│   │   ├── Consultancy.jsx
│   │   ├── Contact.jsx
│   │   ├── EnquiryForm.jsx
│   │   └── Media.jsx
│   ├── components/     # Reusable components
│   │   ├── Hero.jsx
│   │   ├── Photo.jsx
│   │   ├── StyledCard.jsx
│   │   └── ...
│   ├── config/         # Configuration
│   └── theme.js        # Theme configuration
├── public/             # Static assets (images, etc.)
├── dist/               # Production build (generated)
└── server.js           # Backend server for email
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (frontend only)
- `npm run dev:full` - Start development server with backend (for forms)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start backend server only

## 📝 Editing Content

### For Non-Technical Users

1. **Read the guides:**
   - Start with [EDITING-GUIDE.md](./EDITING-GUIDE.md)
   - Reference [COMPONENT-REFERENCE.md](./COMPONENT-REFERENCE.md) for components
   - Use [GIT-AND-TESTING-GUIDE.md](./GIT-AND-TESTING-GUIDE.md) for Git and testing
   - Follow [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) to upload to IONOS

2. **Make your changes:**
   - Edit files in `src/pages/` for page content
   - Add images to `public/` folder
   - Update `.env` file for configuration

3. **Test locally:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser

4. **Save your changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

## 🎨 Technologies Used

- **React** - UI framework
- **Chakra UI** - Component library
- **React Router** - Routing
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Express** - Backend server
- **Nodemailer** - Email sending

## 📧 Email Configuration

The website uses Nodemailer to send emails from contact and booking forms. Configure your SMTP settings in the `.env` file:

```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
```

## 🚢 Deployment

For detailed deployment instructions, see **[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)**

**Quick Steps:**
1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Upload files using FileZilla:**
   - Connect to IONOS via FTP
   - Upload `dist/` folder contents to `/httpdocs/`
   - Upload `.htaccess` file
   - Upload `server.js` if using Node.js backend

3. **Test your live website**

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for complete FileZilla setup and upload instructions.

## 📖 Additional Resources

- [Chakra UI Documentation](https://chakra-ui.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 🆘 Need Help?

- Check the documentation files in the project root
- Review comments in the code files
- Check browser console for errors
- Verify environment variables are set correctly

## 📄 License

All rights reserved.

---

**For detailed editing instructions, see [EDITING-GUIDE.md](./EDITING-GUIDE.md)**
