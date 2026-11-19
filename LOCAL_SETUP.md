# Setting Up Your Portfolio Locally

## Prerequisites
Make sure you have these installed on your computer:
- **Node.js** (v18 or higher): https://nodejs.org/
- **Git**: https://git-scm.com/
- **npm** or **pnpm** (comes with Node.js)

Check versions:
```bash
node --version
npm --version
git --version
```

---

## Step 1: Clone the Repository

1. Go to your GitHub: https://github.com/tejHacks/developer-portfolio-latest
2. Click the green **"Code"** button
3. Copy the HTTPS link
4. Open your terminal/command prompt and run:

```bash
git clone https://github.com/tejHacks/developer-portfolio-latest.git
cd developer-portfolio-latest
```

---

## Step 2: Switch to the Latest Branch

The v0 branch has all the latest changes:

```bash
git checkout v0/olatejuo51-1468-5b845010
```

Verify you're on the right branch:
```bash
git branch
```

You should see: `* v0/olatejuo51-1468-5b845010` (with asterisk)

---

## Step 3: Install Dependencies

Install all required packages:

```bash
npm install
```

Or if you prefer pnpm (faster):
```bash
pnpm install
```

This will download all dependencies into a `node_modules` folder (takes ~2-3 minutes).

---

## Step 4: Run the Development Server

Start the local development server:

```bash
npm run dev
```

You should see output like:
```
> next dev
  ▲ Next.js 16.x.x
  - Local:        http://localhost:3000
```

**Open your browser and go to: `http://localhost:3000`**

Your portfolio should now be live locally! 🎉

---

## Step 5: Make Changes & See Them Live

The development server has **Hot Module Replacement (HMR)** - changes appear instantly:

1. Edit any file (e.g., `components/screens/about-screen.tsx`)
2. Save the file
3. Your browser automatically updates (no manual refresh needed)

---

## Adding Project Images

When you're ready to add screenshots and icons:

1. Create folders: `public/projects/kairos`, `public/projects/scribe`, etc.
2. Add images:
   - `icon.png` (app icon)
   - `screenshot-1.png` through `screenshot-6.png`
3. Save and refresh browser - images appear automatically

See `ADDING_IMAGES_GUIDE.md` for detailed instructions.

---

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```
Then visit `http://localhost:3001`

### Module not found errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing?
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Git conflicts?
```bash
git status  # See what's conflicting
git pull origin v0/olatejuo51-1468-5b845010  # Pull latest changes
```

---

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `.next` folder.

Test production build locally:
```bash
npm run build
npm start
```

Then visit `http://localhost:3000`

---

## Pushing Changes Back to GitHub

After making changes locally:

```bash
# Check what changed
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "Updated project descriptions and fixed button centering"

# Push to your branch
git push origin v0/olatejuo51-1468-5b845010
```

Then create a Pull Request on GitHub to merge into `main`.

---

## Keeping Your Local Version Updated

When v0 releases new changes:

```bash
git pull origin v0/olatejuo51-1468-5b845010
npm install  # If new dependencies were added
```

---

## Essential npm Scripts

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Create production build
npm run start        # Run production build
npm run lint         # Check code style
```

---

## Folder Structure

```
developer-portfolio-latest/
├── app/
│   ├── layout.tsx        # Main layout with fonts & metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles & theme
├── components/
│   ├── screens/          # Home, About, Skills, Experience, Projects, Writing, Contact
│   ├── status-bar.tsx    # iOS-like status bar with battery
│   ├── navigation-dock.tsx # Bottom navigation
│   └── command-palette.tsx # Cmd+K navigation
├── public/
│   ├── projects/         # Where to add app icons & screenshots
│   └── resume.pdf        # Your resume
├── package.json          # Dependencies & scripts
└── tailwind.config.ts    # Tailwind CSS configuration
```

---

## Next Steps

1. ✅ Clone repo
2. ✅ Install dependencies
3. ✅ Run dev server
4. ✅ View at http://localhost:3000
5. Add screenshots and icons to `public/projects/`
6. Push changes back to GitHub
7. Deploy to Vercel with one click

---

## Questions?

- **Next.js docs**: https://nextjs.org/docs
- **React docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion/

Enjoy! 🚀
