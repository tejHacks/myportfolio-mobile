# Tej's Developer Portfolio

> A modern, interactive portfolio showcasing 4+ years of full-stack development, mobile engineering, and AI/ML expertise.

**🔗 [Live Portfolio](https://tejthedevportfolio.vercel.app/)**

---

## ✨ Features

### 🎨 Premium Design Experience
- **Dark theme** with glassmorphism effects and smooth animations
- **Particle background** with dynamic visual effects using Framer Motion
- **Command palette** (⌘K) for lightning-fast navigation
- **Responsive design** that works seamlessly across all devices
- **Custom cursor** and interactive UI elements
- **Smooth screen transitions** with AnimatePresence

### 📱 Full-Stack Showcase
- **Hero Screen** – Captivating introduction with call-to-action
- **About Section** – Professional background with animated counters (4+ years, 17+ projects, 28+ technologies)
- **Skills Matrix** – Comprehensive technology stack display
- **Experience Timeline** – Career progression and achievements
- **Projects Gallery** – Featured mobile apps and web projects with screenshots
- **Writing Archive** – Published articles and technical content
- **Contact Hub** – Multiple communication channels

### 🚀 Advanced Capabilities
- **React Native specialist** – Building cross-platform apps with Expo and TypeScript
- **ML/AI engineer** – On-device machine learning with TensorFlow Lite and PyTorch
- **Full-stack development** – Node.js, Laravel, FastAPI, and modern databases
- **Linux enthusiast** – Docker, CLI tools, and open-source contributions

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **UI Library**: [Radix UI](https://radix-ui.com) (30+ accessible components)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Tailwind CSS + PostCSS
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

### Additional Libraries
- Carousel: Embla Carousel
- Analytics: Vercel Analytics
- Notifications: Sonner
- Date handling: date-fns
- OTP Input: input-otp
- Utility classes: clsx, class-variance-authority

### Deployment
- **Platform**: [Vercel](https://vercel.com)
- **Auto-deployment** on `main` branch commits

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd developer-portfolio

# Install dependencies
pnpm install
# or
npm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app auto-refreshes as you edit `app/page.tsx`.

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main portfolio container
│   └── globals.css         # Global styles
├── components/
│   ├── screens/            # Main portfolio sections (7 screens)
│   ├── ui/                 # Radix UI + shadcn components (40+ components)
│   ├── navigation-dock.tsx # Bottom navigation
│   ├── command-palette.tsx # Quick navigation (⌘K)
│   ├── status-bar.tsx      # System-like status indicator
│   ├── custom-cursor.tsx   # Custom pointer
│   └── theme-provider.tsx  # Theme management
├── hooks/
│   ├── use-mobile.ts       # Responsive breakpoint hook
│   └── use-toast.ts        # Toast notifications
├── lib/
│   └── utils.ts            # Utility functions
├── styles/
│   └── globals.css         # Tailwind + custom styles
├── public/
│   └── projects/           # Project screenshots and assets
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🎯 Key Features Explained

### Command Palette Navigation
Press `⌘K` (or `Ctrl+K` on Windows/Linux) to instantly jump to any section:
- Home, About, Skills, Experience, Projects, Writing, Contact

### Dynamic Counters
The About section features animated counters that increment on scroll:
- 4+ Years of Experience
- 17+ Projects Shipped
- 28+ Technologies Mastered
- 12+ Articles Published

### Responsive Navigation
- Fixed dock at the bottom with glassmorphic design
- Active state indicators
- Smooth scroll-to-top on navigation

---

## 📚 Featured Projects

### 🙏 Kairos
Prayer reminder app with Bible verses and notifications
- React Native, Expo, TypeScript, SQLite
- Push notifications and prayer tracking
- Offline scripture access

### ✍️ Scribe
Note-taking app with Bible, Strong's dictionary, and quizzes
- React Native, SQLite, Expo AV
- King James Version (KJV) Bible integration
- Full-text search and Bible quizzes

---

## 🤝 Contributing

This is a personal portfolio, but feel free to fork it and customize it for your own use!

### To customize:
1. Fork the repository
2. Update content in `components/screens/` files
3. Replace project information in `projects-screen.tsx`
4. Add your own assets to `public/`
5. Deploy to Vercel with one click

---

## 📦 Dependencies Highlights

- **30+ Radix UI components** for accessible, unstyled UI primitives
- **Framer Motion** for professional-grade animations
- **TypeScript** for type safety throughout
- **Tailwind CSS** for rapid, responsive styling
- **Next.js App Router** for server/client component optimization

---

## 🔐 Environment Setup

No environment variables required for basic functionality. The portfolio runs standalone without backend dependencies.

For analytics:
- Vercel Analytics is pre-configured and tracks pageviews automatically

---

## 📊 Performance

- **Optimized images** with Next.js Image component
- **Code splitting** with Next.js App Router
- **Lazy loading** of screens and components
- **Vercel deployment** for global CDN and edge functions
- **Analytics tracking** for visitor insights

---

## 🎓 Learning Resources

This portfolio demonstrates:
- Modern React patterns (hooks, server components)
- TypeScript best practices
- Accessible UI with Radix UI
- Advanced CSS animations
- Responsive design
- SEO optimization with Next.js

---

## 📞 Get in Touch

Visit the portfolio at **[tejthedevportfolio.vercel.app](https://tejthedevportfolio.vercel.app/)** to:
- 💌 Send a message
- 📋 View my resume
- 🔗 Connect on social media
- 📖 Read my latest articles

---

## 📄 License

This project is open source. Feel free to use it as inspiration for your own portfolio!

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**
