# How to Add Images to Your Portfolio - Step by Step

Your portfolio structure is now set up to make adding images **super easy**. Follow this guide to add app icons and screenshots.

## Directory Structure Ready

All directories are created and ready:
```
public/projects/
├── kairos/
├── scribe/
├── jaundx/
├── smoothspeex/
├── faithquotes/
├── hagah/
├── terminalmaster/
├── nexusui/
└── taska/
```

## Step 1: Add App Icons

For each project, add an `icon.png` file:

### File: `public/projects/kairos/icon.png`
- Size: 512x512px (minimum)
- Format: PNG with transparent background recommended
- This displays at the top of the project modal

**Quick Add in v0:**
1. Click the attachment icon (📎) in the prompt
2. Select your icon image
3. Tell me: "Add kairos icon" or drag it directly to the projects/kairos folder
4. Repeat for each project

## Step 2: Add Screenshots (3-6 per project)

For each project, add screenshots named `screenshot-1.png` through `screenshot-6.png`:

### Example for Kairos:
- `public/projects/kairos/screenshot-1.png` - Home screen
- `public/projects/kairos/screenshot-2.png` - Prayer times screen
- `public/projects/kairos/screenshot-3.png` - Settings screen
- `public/projects/kairos/screenshot-4.png` (optional)
- `public/projects/kairos/screenshot-5.png` (optional)
- `public/projects/kairos/screenshot-6.png` (optional)

### Screenshot Recommendations:
- **Size:** 1080x2340px (mobile aspect ratio) or 1440x2560px
- **Format:** PNG or JPG
- **What to show:** Key screens that highlight the app's main features
- **3 minimum:** Home, Main Feature, Settings/About
- **6 maximum:** Can include tutorial screens, different states, etc.

## File Naming Convention

**IMPORTANT:** Follow this exact naming pattern:
```
screenshot-1.png
screenshot-2.png
screenshot-3.png
screenshot-4.png (optional)
screenshot-5.png (optional)
screenshot-6.png (optional)
```

Not:
- ❌ screenshot1.png (no hyphen)
- ❌ screenshot_1.png (underscore)
- ❌ 1.png (no prefix)
- ❌ kairos-1.png (duplicate naming)

## Recommended Screenshots for Each Project

### Kairos (Prayer Reminder)
1. Home screen with prayer times
2. Prayer history/log
3. Settings and notifications
4. Bible verse integration (optional)
5. Dark mode view (optional)

### Scribe (Note-Taking)
1. Notes list
2. Create/edit note
3. Note with audio recording
4. Search function
5. Settings (optional)

### JaundX (Jaundice Detection)
1. Camera capture screen
2. Analysis/results
3. History/past scans
4. Doctor referral interface
5. Risk level visualization (optional)

### SmoothSpeex (Speaker Diarization)
1. Recording interface
2. Active recording
3. Playback with diarization labels
4. Export/share options
5. Settings (optional)

### FaithQuotes (Devotional Quotes)
1. Quote display
2. Quote of the day
3. Saved/favorites
4. Categories
5. Share functionality (optional)

### Hagah (Meditation)
1. Daily devotional
2. Text-to-speech playback
3. Record confession
4. Playback confessions
5. History/progress
6. Meditation timer (optional)

### TerminalMaster (Linux Commands)
1. Command list/search
2. Command details
3. Quiz mode
4. Daily challenge
5. Leaderboard/progress
6. Categories (optional)

### NexusUI (Robot Dashboard)
1. Robot connection screen
2. Main control dashboard
3. Sensor telemetry
4. Camera feed
5. Motor controls
6. Emergency stop screen

### Taska (To-Do List)
1. Task list view
2. Create new task
3. Task details with time
4. Recurring tasks
5. Categories/priorities (optional)
6. Statistics (optional)

## How to Add Images to v0

### Option 1: Drag and Drop (Easiest)
1. Take screenshot or grab icon file on your computer
2. Tell me which project: "Add NexusUI icon" or "Add Kairos screenshots"
3. Drag files directly into the chat
4. I'll place them in the correct folder automatically

### Option 2: Direct File Path
Tell me the exact path where to save:
- "Add this as `/vercel/share/v0-project/public/projects/kairos/icon.png`"
- "Add these screenshots to kairos folder"

### Option 3: Batch Upload
Send multiple images at once:
- "Here are 5 Kairos screenshots - add them as screenshot-1 through 5"
- I'll organize them automatically

## Once Images Are Added

1. **No code changes needed** - Images automatically display in the portfolio
2. **On modal open** - Icon appears at top, screenshots load in carousel
3. **Navigation** - Use left/right arrows to browse screenshots
4. **Responsive** - Images scale properly on mobile and desktop
5. **Fallback** - If image missing, displays placeholder message

## Supported Image Formats

- ✅ PNG (best for icons, supports transparency)
- ✅ JPG (best for screenshots)
- ✅ WebP (modern, best compression - future proofing)
- ❌ GIF (not recommended, use video instead)
- ❌ BMP (too large)

## Image Optimization Tips

**For Best Performance:**
1. **Compress before uploading:**
   - Use TinyPNG.com (free, lossless)
   - Use Squoosh.app (Google's tool)
   - Use ImageOptim (Mac)

2. **Target sizes:**
   - Icons: 512x512px @ 100-200KB
   - Screenshots: 1080x2340px @ 200-400KB each

3. **Naming consistency:**
   - Always use lowercase
   - Always use hyphens (screenshot-1, not screenshot_1)
   - No spaces in filenames

## Complete Checklist

- [ ] Kairos: icon.png + 3 screenshots
- [ ] Scribe: icon.png + 3 screenshots
- [ ] JaundX: icon.png + 3 screenshots
- [ ] SmoothSpeex: icon.png + 3 screenshots
- [ ] FaithQuotes: icon.png + 3 screenshots
- [ ] Hagah: icon.png + 3 screenshots
- [ ] TerminalMaster: icon.png + 3 screenshots
- [ ] NexusUI: icon.png + 4-6 screenshots
- [ ] Taska: icon.png + 3 screenshots

**Total: 9 icons + 27-33 screenshots**

## File Size Budget

- All icons (9): ~1.5-2MB total
- All screenshots (30): ~6-12MB total
- **Total portfolio media: ~8-14MB**

This is reasonable for a portfolio and will load quickly.

## Testing

Once images are added:
1. Open your portfolio in the preview
2. Navigate to Projects screen
3. Click on each project card
4. Verify icon displays at top
5. Test screenshot carousel (arrows)
6. Check mobile responsiveness
7. Verify all images load

## If an Image Doesn't Load

1. Check the filename matches exactly (case-sensitive)
2. Verify it's in the correct folder
3. Try JPG instead of PNG for screenshots
4. Compress the image if > 500KB
5. Check file isn't corrupted

## Quick Reference

```
# Icon must be named exactly:
icon.png

# Screenshots must be:
screenshot-1.png
screenshot-2.**png**
screenshot-3.png
... up to screenshot-6.png

# In this folder structure:
public/projects/[project-name]/[icon-or-screenshot].png
```

## Next Steps

1. **Collect your app screenshots** from each project
2. **Export your app icons** (usually available in App Store Connect or Google Play Console)
3. **Send them to me** with the project name
4. **I'll place them** in the correct folders
5. **Portfolio automatically displays** them with no code changes

---

**You're all set! The portfolio is 100% ready for images. Just send them when you have them, and I'll add them instantly.**
