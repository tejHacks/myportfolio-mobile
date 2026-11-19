# Project Assets Guide

This directory contains all images for your portfolio projects. Follow the structure below to easily add icons and screenshots.

## Directory Structure

```
projects/
├── kairos/
│   ├── icon.png          # App icon (512x512 or larger recommended)
│   ├── screenshot-1.png  # Screenshot 1 (1080x2340 recommended)
│   ├── screenshot-2.png  # Screenshot 2
│   ├── screenshot-3.png  # Screenshot 3
│   ├── screenshot-4.png  # Screenshot 4 (optional)
│   ├── screenshot-5.png  # Screenshot 5 (optional)
│   └── screenshot-6.png  # Screenshot 6 (optional)
│
├── scribe/
│   ├── icon.png
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   └── screenshot-3.png
│
├── jaundx/
│   ├── icon.png
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   └── screenshot-3.png
│
├── smoothspeex/
│   ├── icon.png
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   └── screenshot-3.png
│
├── faithquotes/
│   ├── icon.png
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   └── screenshot-3.png
│
├── hagah/
│   ├── icon.png
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   └── screenshot-3.png
│
├── terminalmaster/
│   ├── icon.png
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   └── screenshot-3.png
│
├── nexusui/
│   ├── icon.png
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   └── screenshot-3.png
│
└── taska/
    ├── icon.png
    ├── screenshot-1.png
    ├── screenshot-2.png
    └── screenshot-3.png
```

## How to Add Images

### 1. App Icons
- Place your app icon at: `projects/[project-name]/icon.png`
- Recommended size: 512x512px or larger
- Format: PNG with transparency recommended

### 2. Screenshots
- Add 3-6 screenshots per project
- Path pattern: `projects/[project-name]/screenshot-[1-6].png`
- Recommended size: 1080x2340px (mobile aspect ratio)
- Format: PNG or JPG

## Example Projects

### Kairos (Prayer Reminder App)
- kairos/icon.png
- kairos/screenshot-1.png (Home screen)
- kairos/screenshot-2.png (Prayer times)
- kairos/screenshot-3.png (Settings)
- kairos/screenshot-4.png (History)

### NexusUI (Robot Dashboard)
- nexusui/icon.png
- nexusui/screenshot-1.png (Dashboard)
- nexusui/screenshot-2.png (Robot controls)
- nexusui/screenshot-3.png (Telemetry)
- nexusui/screenshot-4.png (Settings)
- nexusui/screenshot-5.png (Connection screen)
- nexusui/screenshot-6.png (Emergency stop)

## Supported Formats
- PNG (recommended for icons)
- JPG (good for screenshots)
- WebP (modern format, best compression)

## Tips
- Use consistent aspect ratios for better visual appeal
- Compress images to keep portfolio loading fast
- Use descriptive filenames for easy organization
- Test on different devices to ensure visibility

## Integration
Images are automatically loaded in the projects modal when:
1. App icon displays at the top of the modal
2. Screenshots carousel shows 3-6 images with navigation arrows
3. Click previous/next arrows to browse through screenshots
