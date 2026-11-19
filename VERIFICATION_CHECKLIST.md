# Verification Checklist - Testing Your Portfolio Locally

After you clone and run the project, use this checklist to verify everything works.

## Initial Setup ✓
- [ ] Cloned repository successfully
- [ ] Switched to correct branch (`v0/olatejuo51-1468-5b845010`)
- [ ] Ran `npm install` without errors
- [ ] Dev server running at `http://localhost:3000`
- [ ] No console errors in browser dev tools

---

## Navigation & UI ✓

### Status Bar
- [ ] Time shows and updates correctly
- [ ] Battery percentage displays
- [ ] Charging indicator (lightning bolt) shows when plugged in
- [ ] All icons visible and properly styled

### Navigation Dock (Bottom)
- [ ] Dock appears at bottom of screen
- [ ] 6 icons visible: Home, About, Skills, Experience, Projects, Writing, Contact
- [ ] Clicking each icon navigates to that screen
- [ ] Current screen icon is highlighted
- [ ] Smooth animations when switching screens

### Command Palette
- [ ] Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)
- [ ] Command menu opens with search
- [ ] Can type to filter options
- [ ] Click or Enter to navigate
- [ ] Press Escape to close

---

## Screen-by-Screen Verification

### 1. Home Screen
- [ ] Title displays: "Olateju Olamide Emmanuel"
- [ ] Subtitle: "Mobile Developer & Technical Writer"
- [ ] Bio text is readable
- [ ] **View Work button is CENTERED** ✓
- [ ] **Contact button is CENTERED** ✓
- [ ] Buttons have hover effects
- [ ] Clicking "View Work" goes to Projects
- [ ] Clicking "Contact" goes to Contact screen
- [ ] Mobile responsive (test with DevTools)

### 2. About Screen
- [ ] Title: "About"
- [ ] Profile photo placeholder area visible
- [ ] Bio text about 4+ years experience
- [ ] Stats show: 4+ years, 17+ projects, 28+ technologies, 12+ articles
- [ ] Stats have animations when you scroll
- [ ] Location shows: "Ibadan, Nigeria"
- [ ] Company: "CSMTech - Global Lead Developer (Mobile App)"

### 3. Skills Screen
- [ ] Title: "Skills"
- [ ] Skills displayed as colored tags (no percentages)
- [ ] Skills organized in categories:
  - Frontend: React Native, Expo, TypeScript, JavaScript, React, Tailwind, NativeWind
  - Backend: Node.js, Python, PHP, Bash
  - Tools: Android Studio, Postman, npm, Firebase, SQLite
  - Other: Kotlin, Linux, DevOps tools
- [ ] All 28+ skills visible
- [ ] Smooth animations

### 4. Experience Screen
- [ ] Title: "Experience"
- [ ] Shows work timeline
- [ ] Current role: "Global Lead Developer (Mobile App) @ CSMTech"
- [ ] Timeline displays job entries
- [ ] Each entry shows role, company, duration, description
- [ ] "Download Resume" button visible and clickable
- [ ] Resume PDF downloads when clicked

### 5. Projects Screen
- [ ] Title: "Projects"
- [ ] 9 project cards visible in grid:
  1. Kairos (blue)
  2. Scribe (green)
  3. JaundX (amber)
  4. SmoothSpeex (purple)
  5. FaithQuotes (pink)
  6. Hagah (indigo) - with GREEN checkmark (PlayStore available)
  7. TerminalMaster (pink)
  8. NexusUI (cyan)
  9. Taska (amber)
- [ ] Each card shows: icon placeholder, name, description
- [ ] APK/iOS availability icons show
- [ ] Click any card to open modal
- [ ] Modal shows:
  - [ ] Project name and description
  - [ ] App icon
  - [ ] Screenshot carousel (3-6 screenshots)
  - [ ] Left/right arrows to browse screenshots
  - [ ] Dot indicators showing which screenshot
  - [ ] APK download button (green if available, gray if not)
  - [ ] iOS download button (gray = coming soon)
  - [ ] PlayStore link button
  - [ ] GitHub link button
- [ ] Close modal by clicking X or outside
- [ ] **Hagah shows as AVAILABLE on PlayStore** ✓

### 6. Writing Screen
- [ ] Title: "Writing"
- [ ] All 12 Medium articles visible:
  1. Machine Learning without Hype
  2. Node.js Backend Security
  3. 10 Lessons from Private Nigerian University
  4. Start JavaScript & Solidify Learning
  5. React Native vs Flutter 2026
  6. Linux vs Windows for Developers
  7. 25 Christian Tech Apps
  8. 25 C++ Project Ideas
  9. C++: Language of the Millenium
  10. Overplanning, Comparison & Emotional Hoarding
  11. Speaker Diarization
  12. PHP: Right Tool at Right Time
- [ ] Each article shows title, excerpt, publish date
- [ ] Click article to open on Medium (new tab)
- [ ] "See more articles" button links to Medium profile
- [ ] Smooth animations

### 7. Contact Screen
- [ ] Title: "Contact"
- [ ] Availability status: "Available for projects"
- [ ] Location: "Ibadan, Nigeria"
- [ ] All 5 social links visible:
  - [ ] Email: olateju202@gmail.com with copy button
  - [ ] LinkedIn: with copy button
  - [ ] GitHub (tejHacks): with copy button
  - [ ] X/Twitter: with copy button
  - [ ] Medium: with copy button
- [ ] Each link has icon colored appropriately
- [ ] Hover effects on links
- [ ] Click copy button shows "Copied!" feedback
- [ ] Click link opens in new tab
- [ ] Download Resume button visible and works
- [ ] All text is readable

---

## Responsive Design

Test each screen at different sizes:

### Mobile (iPhone 12, 390px)
- [ ] All text readable (no overflow)
- [ ] Buttons centered and touchable
- [ ] Navigation dock visible at bottom
- [ ] Status bar visible at top
- [ ] Images/content not cut off
- [ ] Spacing looks good

### Tablet (iPad, 768px)
- [ ] Layout adjusts appropriately
- [ ] Grid shows 2 columns for projects
- [ ] Text scales properly
- [ ] All buttons accessible

### Desktop (1024px+)
- [ ] Projects show 3-column grid
- [ ] Full layout utilized
- [ ] Nothing cramped or too spread out
- [ ] Smooth animations

---

## Performance

- [ ] Page loads in under 3 seconds
- [ ] No lag when scrolling
- [ ] Animations are smooth (60fps)
- [ ] Navigation between screens is instant
- [ ] No console errors or warnings

---

## Browser Compatibility

Test in:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (Mac/iOS)
- [ ] Edge

---

## Final Checks

- [ ] All 9 projects have accurate descriptions
- [ ] Hagah shows as PlayStore available
- [ ] View Work & Contact buttons are centered on home
- [ ] All links work correctly
- [ ] No broken images (placeholders show where images go)
- [ ] Copy-to-clipboard works
- [ ] All animations are smooth
- [ ] Mobile responsive works perfectly

---

## Issues Found?

**Common Issues & Solutions:**

| Issue | Solution |
|-------|----------|
| Buttons not centered | Check DevTools, make sure browser is not zoomed |
| Images not showing | Place images in `public/projects/[projectname]/` |
| Links not working | Check internet connection, URLs are correct |
| Animations janky | Close other browser tabs, restart dev server |
| Port 3000 in use | Run `npm run dev -- -p 3001` |
| Styles look wrong | Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac) |

---

## When Everything Works ✓

1. Push changes to GitHub
2. Deploy to Vercel
3. Share portfolio with potential employers
4. Add screenshots when ready
5. Publish apps to PlayStore

**You're ready to showcase your work!** 🚀
