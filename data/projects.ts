/**
 * ============================================================================
 *  PROJECTS — single typed source for cards, filters, and detail pages.
 *
 *  Images live in /public/projects/<slug>/. When `screenshots` is empty the UI
 *  renders a gradient phone mockup instead, so a project never looks broken.
 *  To add screenshots later, drop files into /public/projects/<slug>/ and list
 *  them in `screenshots`.
 * ============================================================================
 */

export type ProjectCategory = "mobile" | "ai" | "games" | "faith" | "education";
export type ProjectStatus = "live" | "beta" | "in-development";

export interface ProjectLinks {
  live?: string;
  github?: string;
  playStore?: string;
  appStore?: string;
  apkPure?: string;
  apk?: string;
  caseStudy?: string;
}

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  /** Longer overview paragraph for the detail page. */
  overview: string;
  problem: string;
  /** "What I built" paragraph. */
  solution: string;
  features: string[];
  tech: string[];
  categories: ProjectCategory[];
  status: ProjectStatus;
  /** Accent colour for the card glow and mockup gradient. */
  color: string;
  /** Second gradient stop for the placeholder mockup. */
  colorTo?: string;
  icon?: string;
  screenshots: string[];
  links: ProjectLinks;
  featured?: boolean;
  /** Large card in the grid. */
  size?: "large";
  competitions?: { name: string; url?: string }[];
  /** Traction numbers shown as badges, e.g. "120+ downloads". */
  metrics?: string[];
  /** Older/smaller work folded behind "More products" on the All view. */
  archived?: boolean;
  origins?: string;
}

export const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai", label: "AI / HealthTech" },
  { id: "games", label: "Games" },
  { id: "faith", label: "Faith" },
  { id: "education", label: "Education" },
];

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  beta: "Beta",
  "in-development": "In development",
};

export const projects: Project[] = [
  /* ------------------------------------------------------------------ NEW */
  {
    slug: "cribdoc",
    name: "CribDoc",
    eyebrow: "Mobile · Edge AI · HealthTech",
    tagline: "Catch newborn jaundice early, even with no internet.",
    overview:
      "CribDoc screens a newborn's eye photo for signs of jaundice entirely on the phone with ONNX Runtime, so it works in homes and primary health centres with no internet. Around the scan it adds what care teams actually need: case records for every baby, referrals tracked until the baby is seen, roles for parents, health workers and admins, follow-up reminders and PDF reports.",
    problem:
      "Neonatal jaundice is common and usually manageable when it is caught early, but many clinics and homes don't have reliable internet or specialist equipment close by. A screening tool that depends on the cloud simply doesn't work where it is needed most.",
    solution:
      "A React Native app with a native ONNX Runtime setup (a config plugin links it and bundles the model on Android and iOS) and a pipeline built for speed: the photo is resized natively before decoding, the model loads in the background at launch, and the sclera mask is only computed inside detected boxes. The eye model is being trained on a new dataset; until it's calibrated the app shows no result at all, never a guess.",
    features: [
      "On-device eye-photo screening with ONNX Runtime, no internet needed",
      "Fast pipeline: native resize, background model warm-up, box-limited mask building",
      "Case records for every baby: screenings with photos, referrals and dated notes",
      "Referrals tracked Sent → Seen → Completed, with who updated them",
      "Roles for parents, health workers and admins, with user switching on shared clinic phones",
      "\"Needs attention\" home: urgent referrals, unreferred results, due follow-ups",
      "Follow-up reminders and shareable PDF case reports",
      "Model contract plus export, calibration and check scripts for the new model",
      "29 Jest tests covering the pipeline maths, rules and user flows",
    ],
    tech: ["React Native", "Expo SDK 58", "TypeScript", "ONNX Runtime", "YOLOv8", "On-device ML", "Jest", "Python"],
    categories: ["mobile", "ai"],
    status: "in-development",
    color: "#F59E0B",
    colorTo: "#10B981",
    icon: "/projects/cribdoc/icon.svg",
    screenshots: [
      "/projects/cribdoc/screen-1-home.png",
      "/projects/cribdoc/screen-2-scan-guide.png",
      "/projects/cribdoc/screen-3-baby.png",
      "/projects/cribdoc/screen-4-referral.png",
      "/projects/cribdoc/screen-5-babies.png",
      "/projects/cribdoc/screen-6-team.png",
    ],
    links: { github: "https://github.com/tejHacks/cribdoc-mobile" },
    featured: true,
    size: "large",
    competitions: [{ name: "USPF Changemaker" }, { name: "GenHacks (Devpost)" }],
  },
  {
    slug: "lumicare",
    name: "LumiCare",
    eyebrow: "Mobile · Edge AI · Newborn Care",
    tagline: "Offline-first newborn care support for noticing concerns, keeping records, and following up.",
    overview:
      "LumiCare is a mobile prototype for caregivers and community health workers. It brings newborn jaundice education, a guided eye-photo workflow, on-device records, care contacts, and follow-up reminders together in one app. Its aim is to make the next step easier to understand and keep important care information available when connectivity is limited. Built with Favour Oni for the MTN Pachipanda Challenge — and won. I developed the mobile app.",
    problem:
      "Caregivers and community health workers often work where connectivity is limited, yet newborn concerns like jaundice need clear guidance, good records, and timely follow-up with a qualified professional.",
    solution:
      "My part: the whole mobile app. An Expo / React Native app where every scan runs a bundled ONNX model on-device: a YOLOv8 segmentation model finds the sclera, a yellow-pixel index is computed from the mask, and a ported linear classifier maps it to an evaluation-only display state. Records live in an encrypted on-device SQLite database, with PDF exports, referral sharing, and follow-up reminders.",
    features: [
      "Guided eye-photo workflow — camera or gallery",
      "On-device ONNX Runtime inference (YOLOv8 sclera segmentation)",
      "Offline-first records with SQLCipher-configured SQLite",
      "PDF export and referral sharing",
      "Follow-up reminders with native notifications",
      "Newborn jaundice education and danger-sign guidance",
      "Language selector with 20 options, including Yoruba, Igbo and Hausa",
    ],
    tech: ["React Native", "Expo SDK 57", "TypeScript", "Expo Router", "ONNX Runtime", "YOLOv8", "SQLite", "SQLCipher", "Python"],
    categories: ["mobile", "ai"],
    status: "beta",
    color: "#0EA5E9",
    colorTo: "#F59E0B",
    icon: "/projects/lumicare/icon.png",
    screenshots: [
      "/projects/lumicare/screen-1-welcome.png",
      "/projects/lumicare/screen-2-home.png",
      "/projects/lumicare/screen-3-scan.png",
      "/projects/lumicare/screen-4-guide.png",
      "/projects/lumicare/screen-5-reminders.png",
      "/projects/lumicare/screen-6-referrals.png",
    ],
    links: { github: "https://github.com/tejHacks/lumicare-mobile" },
    competitions: [{ name: "MTN Pachipanda Challenge — Winner" }, { name: "Rice360" }, { name: "Optica" }],
    origins:
      "LumiCare is an engineering-evaluation prototype — not a medical device, and its model is not clinically validated.",
  },
  {
    slug: "aidnow",
    name: "AidNow",
    eyebrow: "Mobile · Health · Emergency First Aid",
    tagline: "Know what to do in an emergency, wherever you are.",
    overview:
      "AidNow is an offline-first first-aid companion for the moments when someone collapses, seizes, chokes or bleeds and you need to act. It gives calm, step-by-step guidance for common emergencies — epilepsy and seizures, fainting, choking, CPR, severe bleeding, burns, allergic reactions, asthma attacks, stroke, heat stroke, low blood sugar and more — with one tap to call the right emergency number for the country you're in.",
    problem:
      "In an emergency most people freeze. First-aid knowledge is scattered, rarely remembered, and often unavailable when there's no signal. Seconds matter, and the right first steps can make a real difference.",
    solution:
      "Big, simple, step-by-step guides that work without internet; a seizure timer that flags when to call for help; a CPR metronome at 110 beats per minute; a local emergency-number lookup; and a medical ID the person can fill in ahead of time.",
    features: [
      "17 illustrated step-by-step guides: seizures, fainting, choking, CPR, bleeding, burns and more",
      "Seizure timer with a call-for-help alert at 5 minutes",
      "CPR metronome with haptic beats",
      "One-tap emergency call with country-aware numbers",
      "Medical ID: allergies, conditions, medications, emergency contacts",
      "Works fully offline",
      "Quick three-slide onboarding",
      "41 automated tests, including safety rules for every life-threatening guide",
    ],
    tech: ["React Native", "Expo SDK 58", "TypeScript", "Expo Router", "Expo Haptics", "Expo Localization", "Jest", "React Native Testing Library"],
    categories: ["mobile", "ai"],
    status: "in-development",
    color: "#F43F5E",
    colorTo: "#991B1B",
    icon: "/projects/aidnow/icon.svg",
    screenshots: [
      "/projects/aidnow/screen-1-calm.png",
      "/projects/aidnow/screen-2-home.png",
      "/projects/aidnow/screen-3-seizure.png",
      "/projects/aidnow/screen-4-cpr.png",
    ],
    links: { github: "https://github.com/tejHacks/aidnow-mobile" },
  },
  {
    slug: "flow",
    name: "Flow",
    eyebrow: "Mobile · Productivity · Wellbeing",
    tagline: "Empty your head. Leave with three things to do.",
    overview:
      "Brain-dump everything on your mind; an LLM distills it into 3 clear action items, and a built-in breathing timer helps you reset before you start.",
    problem:
      "When everything feels urgent, it's hard to start anything. Long to-do lists add to the noise instead of cutting through it.",
    solution:
      "A single brain-dump screen, an LLM that turns the dump into exactly three action items, and a breathing timer to reset before getting to work.",
    features: [
      "Free-form brain dump",
      "LLM-distilled top 3 action items",
      "Built-in breathing timer",
      "Subscriptions via RevenueCat",
    ],
    tech: ["React Native", "Expo Router", "Supabase", "OpenAI API", "RevenueCat"],
    categories: ["mobile", "ai"],
    status: "beta",
    icon: "/projects/flow/icon.svg",
    color: "#6366F1",
    colorTo: "#22D3EE",
    screenshots: [
      "/projects/flow/screen-1-home.png",
      "/projects/flow/screen-2-breathe.png",
      "/projects/flow/screen-3-onboarding.png",
      "/projects/flow/screen-4-onboarding-focus.png",
    ],
    links: {},
    featured: true,
  },
  {
    slug: "ankara-blocks",
    name: "Ankara Blocks",
    eyebrow: "Game · Puzzle · iOS & Android",
    tagline: "An endless block puzzle with 50 levels of Ankara designs.",
    overview:
      "A fast, addictive endless block-puzzle game for iOS and Android. Drag pieces onto an 8×8 board, clear rows and columns, and chain combos. Every game earns XP toward 50 levels, and each level unlocks a new Ankara-inspired design, with a fresh sound pack every five levels.",
    problem:
      "Block puzzles are everywhere, but few of them look or feel like home. Ankara Blocks brings West African pattern and colour to a genre people already love.",
    solution:
      "Gesture-driven drag-and-drop on a 60fps Reanimated board, combo and perfect-clear scoring, and a fair dealer that always hands you at least one piece that fits. Ten pattern families × five colourways give 50 designs, each checked in tests for colour contrast, plus ten generated sound packs and \"Victory at the Summit\" as the soundtrack.",
    features: [
      "Endless play with 50 levels, each unlocking a new Ankara design",
      "A new sound pack every five levels",
      "Combo streaks, perfect-clear bonus and level-up celebrations",
      "Fair dealing: at least one piece always fits",
      "Pick any unlocked design from the Designs gallery",
      "32 Jest tests covering the engine, levels and app flow",
    ],
    tech: ["React Native", "Expo SDK 58", "TypeScript", "Reanimated", "Gesture Handler", "Jest"],
    categories: ["games"],
    status: "beta",
    icon: "/projects/ankara-blocks/icon.svg",
    color: "#E11D48",
    colorTo: "#F59E0B",
    screenshots: [
      "/projects/ankara-blocks/screen-1-game-L1.png",
      "/projects/ankara-blocks/screen-2-levelup.png",
      "/projects/ankara-blocks/screen-3-designs.png",
      "/projects/ankara-blocks/screen-4-game-L26.png",
      "/projects/ankara-blocks/screen-5-game-L44.png",
      "/projects/ankara-blocks/screen-6-howto-levels.png",
    ],
    links: { github: "https://github.com/tejHacks/ankara-blocks-mobile" },
    featured: true,
  },
  {
    slug: "ayo-arena",
    name: "Ayo Arena",
    eyebrow: "Game · Board · Culture",
    tagline: "The Yorùbá seed-sowing classic, in your pocket.",
    overview:
      "Ayọ̀ (Oware), the board game played across Yorùbá land and West Africa, with the real rules and the feel of a carved wooden board. Play a computer that thinks up to seven moves ahead, or pass the phone to a friend.",
    problem:
      "Ayo is a game many of us grew up with, but it rarely shows up on our phones with the care it deserves, and you don't always have someone to play.",
    solution:
      "A pure TypeScript rules engine (sowing, chain captures, must-feed, no grand slam, cycle limit) with an alpha-beta minimax opponent at three levels, a wooden-board UI with seed-by-seed sowing, capture highlights and hints, and a record per difficulty.",
    features: [
      "The real rules: chain captures of 2s and 3s, must-feed, no grand slam",
      "Computer opponent at three levels, up to seven moves ahead",
      "Pass and play with a friend",
      "Seed-by-seed sowing, gold capture flashes and haptics",
      "Hints that pulse the suggested pit",
      "Record per difficulty with win streak and best margin",
      "20 Jest tests: every rule, 300 simulated games, AI strength, screen flows",
    ],
    tech: ["React Native", "Expo SDK 58", "TypeScript", "Minimax AI", "Jest"],
    categories: ["games"],
    status: "beta",
    icon: "/projects/ayo-arena/icon.svg",
    color: "#92400E",
    colorTo: "#F59E0B",
    screenshots: [
      "/projects/ayo-arena/screen-1-menu.png",
      "/projects/ayo-arena/screen-2-capture.png",
      "/projects/ayo-arena/screen-3-hint.png",
      "/projects/ayo-arena/screen-4-how-to-play.png",
    ],
    links: { github: "https://github.com/tejHacks/ayo-arena-mobile" },
  },

  {
    slug: "periodica",
    name: "Periodica",
    eyebrow: "Game · Education · Chemistry",
    tagline: "The periodic table, as a game.",
    overview:
      "A quick-fire game for learning the elements. Rounds of 10 questions against the clock, with lives, streaks and stars, and a signature twist: tap where an element goes on a blank periodic table. Six levels open the table row by row, and every right answer adds an element to your collection.",
    problem:
      "Most people memorise the periodic table for an exam and forget it. Flashcards are dull, and few games test where elements actually sit on the table.",
    solution:
      "All 118 elements with families and states, with period, group and grid position derived from the atomic number and checked by tests. Pure, seeded game logic (rounds, look-alike options, scoring, stars, unlocks) behind a dark lab-bench UI with a live table, an Explorer collection and element cards.",
    features: [
      "Five question types, including Place it on a blank table",
      "12-second timer, 3 lives, streak multiplier and 3-star ratings",
      "Six levels from Hydrogen–Neon to all 118 elements",
      "Explorer: your table fills in as you discover elements",
      "Element cards with family, period, group and state",
      "19 tests: data accuracy, rules and real play-throughs",
    ],
    tech: ["React Native", "Expo SDK 58", "TypeScript", "Expo Router", "Jest"],
    categories: ["games", "education"],
    status: "in-development",
    icon: "/projects/periodica/icon.png",
    color: "#22D3EE",
    colorTo: "#748FFC",
    screenshots: [
      "/projects/periodica/screen-1-levels.png",
      "/projects/periodica/screen-2-correct.png",
      "/projects/periodica/screen-3-place-it.png",
      "/projects/periodica/screen-4-explorer.png",
      "/projects/periodica/screen-5-element.png",
      "/projects/periodica/screen-6-onboarding.png",
    ],
    links: {},
  },
  {
    slug: "kudi",
    name: "Kudi",
    eyebrow: "Flutter · Personal finance",
    tagline: "Your bank alerts, turned into a budget.",
    overview:
      "A private money tracker for Nigeria. Kudi reads the debit and credit alerts you already get from your bank (or lets you paste one), turns them into transactions, sorts them into categories like food, transport, airtime and bills, and shows where your money went this month against your budgets.",
    problem:
      "Most budgeting apps want your bank login or make you type every expense. Nigerian banks already send an SMS for every transaction, but nothing turns those alerts into a picture of your spending.",
    solution:
      "A Flutter app with a format-agnostic alert parser (direction, amount, balance and description from any bank's wording), keyword categorisation, de-duplication, monthly summaries and per-category budgets. Android imports the SMS inbox on the phone; everything stays on-device.",
    features: [
      "Parses alerts from GTBank, Access, Zenith, UBA, OPay, Kuda and more",
      "Android SMS import on the phone; paste an alert on any device",
      "Automatic categories you can correct with a tap",
      "Monthly spend, income and net; budgets per category",
      "No bank login, no account, no server",
      "16 tests including real alert formats",
    ],
    tech: ["Flutter", "Dart", "shared_preferences", "SMS inbox", "flutter_test"],
    categories: ["mobile"],
    status: "in-development",
    icon: "/projects/kudi/icon.png",
    color: "#1E3A8A",
    colorTo: "#F59E0B",
    screenshots: [
      "/projects/kudi/screen-1-home.png",
      "/projects/kudi/screen-2-home-recent.png",
      "/projects/kudi/screen-3-activity.png",
      "/projects/kudi/screen-4-budgets.png",
      "/projects/kudi/screen-5-add.png",
      "/projects/kudi/screen-6-onboarding.png",
    ],
    links: {},
  },
  {
    slug: "psalm",
    name: "Psalm",
    eyebrow: "SwiftUI · WidgetKit · iOS",
    tagline: "A psalm for today, on your Home and Lock Screen.",
    overview:
      "My first native iOS app. One verse from the Psalms each day (the same on every screen and in every widget, changing at midnight), browse by theme, save and share. Small and Lock Screen widgets keep the day's verse in view.",
    problem:
      "Scripture apps are often heavy. Sometimes you just want one verse for the day, right where you look most: your Home and Lock Screen.",
    solution:
      "SwiftUI with the Observation framework, a WidgetKit extension with small, medium and Lock Screen families, and a shared verse library so the app and widget always agree without needing App Groups. The Xcode project is generated with XcodeGen and covered by XCTest.",
    features: [
      "Verse of the day from 40 KJV Psalms, refreshing at midnight",
      "Home Screen and Lock Screen widgets",
      "Browse by theme: peace, strength, trust, praise, morning, rest",
      "Save and share verses",
      "Accessible colours in light and dark mode (WCAG AA)",
      "3-page onboarding",
      "6 XCTest tests",
    ],
    tech: ["Swift", "SwiftUI", "WidgetKit", "XcodeGen", "XCTest"],
    categories: ["mobile", "faith"],
    status: "in-development",
    icon: "/projects/psalm/icon.png",
    color: "#1C1F42",
    colorTo: "#DBA63D",
    screenshots: [
      "/projects/psalm/screen-1-today.png",
      "/projects/psalm/screen-2-themes.png",
      "/projects/psalm/screen-3-saved.png",
      "/projects/psalm/screen-4-today-dark.png",
      "/projects/psalm/screen-5-onboarding.png",
    ],
    links: {},
  },

  /* ------------------------------------------------------------- EXISTING */
  {
    slug: "kairos",
    name: "Kairos",
    eyebrow: "Faith · Prayer · Spiritual Discipline",
    tagline:
      "A prayer companion built to help believers turn good intentions into consistent spiritual practice.",
    overview:
      "Kairos is a spiritual companion for believers who want to build a deeper rhythm of prayer, fasting, Scripture meditation, and reflection. It brings several disciplines into one focused experience: structured prayer plans, customizable prayer reminders, fasting plans, a prayer journal, testimonies, and a Prayer Pad where important prayer points can be pinned and revisited.",
    problem:
      "Prayer can easily become something we intend to do rather than something we consistently practice. Kairos turns spiritual disciplines into simple, repeatable routines without making the experience feel mechanical.",
    solution:
      "Prayer plans ranging from short 5-minute sessions to longer guided sessions, customizable prayer schedules, fasting plans, journaling, testimonies, pinned prayer points, offline Scripture, meditation content, and notification-driven routines.",
    features: [
      "Prayer plans ranging from short 5-minute sessions to longer guided sessions",
      "Customizable prayer schedules",
      "Fasting plans",
      "Journaling and testimonies",
      "Pinned prayer points",
      "Offline Scripture and meditation content",
      "Notification-driven routines",
    ],
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "Push Notifications", "AsyncStorage", "Prayer Plans", "Fasting", "Journaling"],
    categories: ["mobile", "faith"],
    status: "live",
    color: "#3B82F6",
    icon: "/projects/kairos/icon.png",
    screenshots: [
      "/projects/kairos/landnig-home.png",
      "/projects/kairos/kairos-meditate.png",
      "/projects/kairos/kairos-pray.png",
      "/projects/kairos/kairos-fast.png",
      "/projects/kairos/kairos-scribe.png",
    ],
    links: {
      github: "https://github.com/tejHacks/kairos-mobile-app",
      apkPure: "https://apkpure.com/p/com.olateju.kairos",
    },
    metrics: ["100+ users"],
  },
  {
    slug: "hagah",
    name: "Hagah",
    eyebrow: "Faith · Declarations · Word Study",
    tagline:
      "A Scripture declaration and meditation app built around speaking, studying, and remembering God's Word.",
    overview:
      "Hagah is built around the idea of meditating on God's Word deeply enough for it to become part of everyday thinking. Users can explore Scripture-backed declarations, study words using the KJV and Strong's Concordance, save important declarations, share beautifully formatted cards, and schedule reminders for morning, afternoon, and night.",
    problem:
      "Reading Scripture once is easy. Returning to it, speaking it, studying it, and carrying it through the day is harder. Hagah creates a practical rhythm around repeated meditation.",
    solution:
      "Scripture declarations, KJV word study with Strong's references, pinned declarations, shareable cards, scheduled reminders, meditation content, and a focused reading experience.",
    features: [
      "Scripture declarations",
      "KJV word study with Strong's references",
      "Pinned declarations",
      "Shareable cards",
      "Scheduled reminders for morning, afternoon, and night",
      "Meditation content and a focused reading experience",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Strong's Concordance", "KJV", "Text-to-Speech", "Push Notifications", "Sharing"],
    categories: ["mobile", "faith"],
    status: "live",
    color: "#C9923A",
    icon: "/projects/hagah/logo.png",
    screenshots: [
      "/projects/hagah/screen-1.png",
      "/projects/hagah/screen-2.png",
      "/projects/hagah/screen-3.png",
      "/projects/hagah/screen-4.png",
      "/projects/hagah/screen-5.png",
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.olateju.hagahapp",
      github: "https://github.com/tejHacks/hagahmobileapp",
    },
    metrics: ["120+ downloads"],
  },
  {
    slug: "scribe",
    name: "Scribe",
    eyebrow: "Faith · Study · Sermon Recording",
    tagline: "Capture the sermon. Keep the Word.",
    overview:
      "Scribe is an ongoing Christian study application combining note-taking with Scripture research. The vision is to let users capture sermons and thoughts while keeping the Bible, Strong's resources, search, quizzes, and study material close at hand. Scribe now also records sermons in church — with audio recording, playback, and notes tied to timestamps — so you can return to exactly the moment a point was made.",
    problem:
      "Taking notes during a sermon often means switching between several apps, websites, and Bible tools. Scribe brings the study workflow into one place.",
    solution:
      "Offline KJV Scripture, Strong's study resources, full-text search, sermon notes, quizzes, clipboard workflows, and local-first data architecture — now with in-church sermon recording, playback, and timestamped notes.",
    features: [
      "Record sermons in church",
      "Audio playback with notes tied to timestamps",
      "Offline KJV Scripture",
      "Strong's study resources",
      "Full-text search",
      "Sermon notes and quizzes",
      "Local-first data architecture",
    ],
    tech: ["React Native", "Expo", "Expo Audio", "TypeScript", "SQLite", "Strong's", "Bible", "Quiz Engine", "Full-text Search"],
    categories: ["mobile", "faith"],
    status: "in-development",
    color: "#10B981",
    icon: "/projects/scribe/logo.png",
    screenshots: [
      "/projects/scribe/screenshot-1.png",
      "/projects/scribe/screenshot-2.png",
      "/projects/scribe/screenshot-3.png",
      "/projects/scribe/screenshot-5.png",
      "/projects/scribe/quiz.png",
    ],
    links: { github: "https://github.com/tejHacks/scribe-mobile-app" },
  },
  {
    slug: "algo-x",
    archived: true,
    name: "Algo-X",
    eyebrow: "Education · Algorithms · Data Structures",
    tagline:
      "An interactive DSA learning lab that makes algorithms and data structures easier to understand through step-by-step visualization.",
    overview:
      "Algo-X is an interactive learning environment for understanding algorithms and data structures by watching them work. Instead of memorizing definitions, users can step through operations, control playback, inspect each state, and connect the visual changes to the underlying logic.",
    problem:
      "Algorithms and data structures are often taught as static diagrams or code snippets. Algo-X turns those ideas into interactive sequences so learners can see comparisons, swaps, searches, insertions, traversals, and other operations happen step by step.",
    solution:
      "Interactive algorithm visualizations, step-by-step playback, speed controls, explanations, complexity information, and a growing collection of sorting, searching, linear data structure, tree, hash table, and graph visualizations.",
    features: [
      "Interactive algorithm visualizations",
      "Step-by-step playback and speed controls",
      "Explanations and complexity information",
      "Sorting, searching, linear data structure, tree, hash table, and graph visualizations",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Algorithms", "Data Structures", "Visualization", "DSA", "Interactive Learning"],
    categories: ["mobile", "education"],
    status: "beta",
    color: "#8B5CF6",
    icon: "/projects/algo-x/icon.svg",
    screenshots: Array.from({ length: 25 }, (_, i) => `/projects/algo-x/screen-${i + 1}.jpeg`),
    links: { github: "https://github.com/tejHacks/algo-x" },
  },
  {
    slug: "faithquotes",
    archived: true,
    name: "FaithQuotes",
    eyebrow: "Faith · Content · Sharing",
    tagline: "A lightweight devotional experience built around daily quotes, reminders, and easy sharing.",
    overview:
      "FaithQuotes is a focused devotional application designed around one simple interaction: receive something worth remembering, reflect on it, and share it with someone else. It combines curated Christian quotes with daily reminders and visual sharing.",
    problem:
      "Small moments of encouragement are often buried inside feeds and notifications. FaithQuotes makes them intentional and easy to revisit.",
    solution:
      "Daily quote delivery, scheduled reminders, swipe navigation, custom typography, visual quote cards, and one-tap sharing.",
    features: [
      "Daily quote delivery",
      "Scheduled reminders",
      "Swipe navigation",
      "Custom typography and visual quote cards",
      "One-tap sharing",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Push Notifications", "SVG", "Expo Font", "Sharing"],
    categories: ["mobile", "faith"],
    status: "live",
    color: "#EC4899",
    icon: "/projects/faithquotes/icon.png",
    screenshots: [
      "/projects/faithquotes/home.jpeg",
      "/projects/faithquotes/home-2.jpeg",
      "/projects/faithquotes/faithquotes-2.png",
      "/projects/faithquotes/faithquotes-3.png",
      "/projects/faithquotes/faithquotes-5.png",
    ],
    links: {
      apk: "https://github.com/tejHacks/christian-quotes-mobile-app/releases/download/v1.0.0/BibleQuotes.apk",
      github: "https://github.com/tejHacks/christian-quotes-mobile-app",
    },
  },
  {
    slug: "terminalmaster",
    archived: true,
    name: "TerminalMaster",
    eyebrow: "Education · Linux · Gamification",
    tagline: "A practical Linux learning environment built around commands, challenges, and repetition.",
    overview:
      "TerminalMaster turns Linux command learning into a structured practice system. Instead of presenting a static command list, it combines command references with quizzes, challenges, progress tracking, achievements, and spaced repetition.",
    problem:
      "Memorizing Linux commands from a cheat sheet is easy until the terminal is actually in front of you. TerminalMaster focuses on repeated recall and practical learning.",
    solution:
      "200+ command references, interactive quizzes, daily challenges, spaced repetition, progress tracking, achievements, offline storage, and gamification.",
    features: [
      "200+ command references",
      "Interactive quizzes and daily challenges",
      "Spaced repetition",
      "Progress tracking and achievements",
      "Offline storage",
    ],
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "Quiz Engine", "Gamification", "Spaced Repetition"],
    categories: ["mobile", "education"],
    status: "beta",
    color: "#3B82F6",
    icon: "/projects/terminalmaster/icon.png",
    screenshots: [
      "/projects/terminalmaster/screen-1.jpeg",
      "/projects/terminalmaster/screen-2.jpeg",
      "/projects/terminalmaster/screen-3.jpeg",
      "/projects/terminalmaster/screen-4.jpeg",
    ],
    links: { github: "https://github.com/tejHacks/linux-commands-mobile-app" },
  },
  {
    slug: "smoothspeex",
    archived: true,
    name: "SmoothSpeex",
    eyebrow: "AI · Audio · Productivity",
    tagline: "An intelligent meeting recorder exploring speaker diarization and structured transcripts.",
    overview:
      "SmoothSpeex is an audio productivity experiment focused on making recorded conversations easier to understand. Instead of producing one giant block of text, it explores identifying different speakers, separating conversation segments, attaching timestamps, and turning raw recordings into useful meeting information.",
    problem:
      "Long recordings are difficult to revisit. The useful information is buried inside minutes of audio and conventional transcripts rarely preserve enough conversational structure.",
    solution:
      "Audio recording, speaker diarization, timestamped segments, transcript generation, speaker separation, key quote extraction, and export workflows.",
    features: [
      "Audio recording",
      "Speaker diarization and separation",
      "Timestamped segments",
      "Transcript generation",
      "Key quote extraction",
      "Export workflows",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Expo AV", "Speaker Diarization", "Audio Processing", "Transcription"],
    categories: ["mobile", "ai"],
    status: "beta",
    color: "#8B5CF6",
    icon: "/projects/smoothspeex/icon.png",
    screenshots: [
      "/projects/smoothspeex/screenshot-1.png",
      "/projects/smoothspeex/screenshot-2.png",
      "/projects/smoothspeex/screenshot-3.png",
      "/projects/smoothspeex/screenshot-4.png",
    ],
    links: { github: "https://github.com/tejHacks/SmoothSpeex" },
  },
  {
    slug: "yorubaverse",
    archived: true,
    name: "YorùbáVerse",
    eyebrow: "Language · Culture · Audio",
    tagline: "A tone-first Yorùbá learning experience designed around pronunciation, conversation, and repetition.",
    overview:
      "YorùbáVerse is being built around something many language-learning products get wrong: tone matters. The experience treats Yorùbá diacritics and tonal patterns as first-class learning information while combining vocabulary, native-speaker audio, dialogue practice, and spaced repetition.",
    problem:
      "Learning Yorùbá from text alone can hide the difference between words that look similar but sound very different. YorùbáVerse puts pronunciation and tonal recall at the centre of the learning experience.",
    solution:
      "Tone-aware vocabulary, native-speaker audio, dialogue practice, offline content, SQLite + FTS5 search, spaced repetition, and tone-matching exercises.",
    features: [
      "Tone-aware vocabulary",
      "Native-speaker audio",
      "Dialogue practice",
      "Offline content with SQLite + FTS5 search",
      "Spaced repetition and tone-matching exercises",
    ],
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "FTS5", "Expo AV", "Audio", "Spaced Repetition", "Offline-first"],
    categories: ["mobile", "education"],
    status: "in-development",
    color: "#059669",
    icon: "/projects/yoba/icon.png",
    screenshots: [
      "/projects/yoba/screen-1.jpeg",
      "/projects/yoba/screen-2.jpeg",
      "/projects/yoba/screen-3.jpeg",
      "/projects/yoba/screen-4.jpeg",
      "/projects/yoba/screen-6.jpeg",
      "/projects/yoba/screen-8.jpeg",
    ],
    links: { github: "https://github.com/tejHacks/Yoruba-verse" },
  },
  {
    slug: "splitit",
    archived: true,
    name: "SplitIt!!",
    eyebrow: "Fintech · Payments · Group Commerce",
    tagline: "A group cost-sharing product designed around the realities of buying together in Nigeria.",
    overview:
      "SplitIt explores a simple but powerful idea: groups should be able to buy together without turning the calculation and settlement into chaos. Create a basket, add participants, calculate each person's share, generate a shareable payment reference, and move towards settlement through a single workflow.",
    problem:
      "Group purchases become messy when someone has to calculate everyone's share, chase payments, and manually reconcile who has paid.",
    solution:
      "Group baskets, participant management, automatic cost splitting, transaction references, QR codes, payment workflows, and Paystack integration architecture.",
    features: [
      "Group baskets and participant management",
      "Automatic cost splitting",
      "Transaction references and QR codes",
      "Payment workflows",
      "Paystack integration architecture",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Paystack", "QR Codes", "Fintech"],
    categories: ["mobile"],
    status: "beta",
    icon: "/projects/splitit/icon.svg",
    color: "#0F7A45",
    screenshots: [
      "/projects/splitit/screen-2.jpeg",
      "/projects/splitit/screen-1.jpeg",
      "/projects/splitit/screen-3.jpeg",
      "/projects/splitit/screen-4.jpeg",
      "/projects/splitit/add-basket.jpeg",
      "/projects/splitit/scan-basket.jpeg",
      "/projects/splitit/scan-basket-2.jpeg",
      "/projects/splitit/share-basket.jpeg",
    ],
    links: { github: "https://github.com/tejHacks/splitit-mobileapp" },
  },

  /* ------------------------------------------------------------- INCOMING */
  {
    slug: "beatpd",
    name: "Beatpd",
    eyebrow: "Mobile · Music · Creativity",
    tagline: "A pocket beat pad. Tap, loop, vibe.",
    overview:
      "Beatpd is a small, fast beat-making app: sixteen pads of drums, bass, keys and effects you can tap live, plus a 16-step sequencer to loop a groove. It's deliberately tiny — no menus to dig through, no accounts — just open it and make something in thirty seconds.",
    problem:
      "Most music apps are either toys or full studios. When you just want to tap out an idea, a full DAW is too much and most pad apps bury the fun under paywalls and packs.",
    solution:
      "One screen of colour-coded pads with low-latency playback, a step sequencer with tempo control, and a sound kit designed from scratch — small enough to learn in seconds.",
    features: [
      "16 pads across drums, bass, keys and FX",
      "16-step sequencer with adjustable BPM",
      "Original synthesised sound kit",
      "Haptic feedback on every hit",
      "Works fully offline",
    ],
    tech: ["React Native", "Expo SDK 58", "TypeScript", "Expo Audio", "Expo Haptics"],
    categories: ["mobile"],
    status: "in-development",
    icon: "/projects/beatpd/icon.svg",
    color: "#7C3AED",
    colorTo: "#EC4899",
    screenshots: [
      "/projects/beatpd/screen-1-pads.png",
      "/projects/beatpd/screen-2-playing.png",
      "/projects/beatpd/screen-3-intro.png",
      "/projects/beatpd/screen-4-intro-loop.png",
    ],
    links: {},
  },
  {
    slug: "howmarket",
    name: "HowMarket",
    eyebrow: "Mobile · Marketplace data · Community",
    tagline: "How much is it at the market today?",
    overview:
      "HowMarket crowdsources real food prices from local markets — rice, garri, tomatoes, palm oil — so you know what things cost before you leave the house. Sign in, pick your area, see today's price at every market near you, and add the prices you see. Version one covers Ibadan, Lagos and Abuja markets, built to scale city by city.",
    problem:
      "Market prices change week to week and differ between markets a few kilometres apart. Most people only find out at the stall, and crowdsourced price apps fail when anyone can post anything.",
    solution:
      "A consensus engine instead of a free-for-all: recent reports only, robust outlier removal, a recency- and trust-weighted median, confidence levels that need several different people to agree, neighbour confirmations and flags, reporter trust scores, and server-side rules (row-level security, one vote per person, daily report limits).",
    features: [
      "Consensus prices that one wrong report can't move",
      "\"Verified\" only when 3+ people agree within 3 days",
      "Add today's price in seconds; confirm or flag others",
      "Per-market and area-wide prices with ranges",
      "Supabase email sign-in and row-level security",
    ],
    tech: ["React Native", "Expo SDK 58", "TypeScript", "Supabase", "PostgreSQL"],
    categories: ["mobile"],
    status: "in-development",
    icon: "/projects/howmarket/icon.svg",
    color: "#EA580C",
    colorTo: "#B91C1C",
    screenshots: [
      "/projects/howmarket/screen-1-prices.png",
      "/projects/howmarket/screen-2-item.png",
      "/projects/howmarket/screen-3-add-price.png",
      "/projects/howmarket/screen-4-login.png",
    ],
    links: { github: "https://github.com/tejHacks/howmarket-mobile" },
  },
  {
    slug: "mocho",
    name: "Mocho",
    eyebrow: "Flutter · Music · Offline",
    tagline: "Your music, offline, beautifully.",
    overview:
      "Mocho is an offline music player for the songs already on your phone. It finds your music folders, lets you import any audio file, and plays it with a clean library, search, a mini player, and a full Now Playing screen — then lets you share any track in one tap. No data, no streaming, no ads.",
    problem:
      "Data is expensive and a lot of people's music lives as MP3s on their phones. Default players are cluttered, and many free ones are drowning in ads.",
    solution:
      "A focused Flutter player: device scan and folder import, fast search, gapless queue playback with shuffle and repeat, and native sharing of the audio file itself.",
    features: [
      "Scans your music folders and imports any audio file",
      "Play, pause, seek, next, shuffle and repeat",
      "Share any MP3 straight to WhatsApp and more",
      "Search across your whole library",
      "Works with no internet at all",
    ],
    tech: ["Flutter", "Dart", "just_audio", "share_plus", "file_picker"],
    categories: ["mobile"],
    status: "in-development",
    icon: "/projects/mocho/icon.svg",
    color: "#F97316",
    colorTo: "#7C2D12",
    screenshots: [
      "/projects/mocho/screen-1-library.png",
      "/projects/mocho/screen-2-add-music.png",
      "/projects/mocho/screen-3-empty.png",
      "/projects/mocho/screen-4-onboarding.png",
    ],
    links: {},
  },
  {
    slug: "ajo",
    name: "Ajo",
    eyebrow: "Flutter · Fintech · Community savings",
    tagline: "Run your ajo without the notebook.",
    overview:
      "Ajo keeps rotating savings groups (ajo / esusu) honest and simple. Set the contribution, the frequency and the payout order, and Ajo shows whose turn it is to collect, how much is in the pot, who has paid and who is still owing — with a ledger you can share to the group chat.",
    problem:
      "Millions of people save through ajo, but most groups still run on a notebook and memory. Disputes start when nobody is sure who paid, or whose turn it is.",
    solution:
      "An offline-first tracker: weekly or monthly cycles, drag-to-reorder payout order, per-cycle payment checklists, pot progress, a full schedule, and a shareable ledger.",
    features: [
      "Weekly or monthly groups with a clear payout order",
      "Whose turn it is, the pot, and who still owes",
      "Tick off payments and mark each pot as collected",
      "Full schedule of every collection date",
      "Share the ledger to WhatsApp in one tap",
    ],
    tech: ["Flutter", "Dart", "shared_preferences", "intl"],
    categories: ["mobile"],
    status: "in-development",
    icon: "/projects/ajo/icon.svg",
    color: "#16A34A",
    colorTo: "#14532D",
    screenshots: [
      "/projects/ajo/screen-1-groups.png",
      "/projects/ajo/screen-2-group.png",
      "/projects/ajo/screen-3-new-group.png",
      "/projects/ajo/screen-4-onboarding.png",
    ],
    links: {},
  },
  {
    slug: "selah",
    name: "Selah",
    eyebrow: "Flutter · Faith · Prayer",
    tagline: "Pause. Breathe. Pray.",
    overview:
      "Selah is a small, quiet prayer companion. It reminds you to pray at the times you choose, with a gentle chime, then guides you through a calm session — praise, confession, thanksgiving, requests, and stillness — with a breathing, glowing animation and an ambient sound of your choice, including your own.",
    problem:
      "Most of us intend to pray more than we do. Big devotional apps can feel heavy when all you need is a nudge and a quiet space.",
    solution:
      "Daily reminders with a custom chime, timed sessions (5–30 minutes) that flow through the ACTS pattern, built-in soundscapes plus your own audio, and a gentle streak.",
    features: [
      "Daily prayer reminders with a soft chime",
      "Guided flow: Praise, Confess, Thank, Ask, Selah",
      "Breathing orb animation with gentle ripples",
      "Built-in soundscapes — or add your own sound",
      "Streaks and minutes in prayer",
    ],
    tech: ["Flutter", "Dart", "flutter_local_notifications", "just_audio", "CustomPainter"],
    categories: ["mobile", "faith"],
    status: "in-development",
    icon: "/projects/selah/icon.svg",
    color: "#4338CA",
    colorTo: "#0F172A",
    screenshots: [
      "/projects/selah/screen-1-home.png",
      "/projects/selah/screen-2-session.png",
      "/projects/selah/screen-3-onboarding.png",
      "/projects/selah/screen-4-onboarding-reminders.png",
    ],
    links: {},
  },
  {
    slug: "cribnest",
    name: "CribNest",
    eyebrow: "Mobile · Health · Pregnancy",
    tagline: "A calm companion for pregnant moms.",
    overview:
      "A gentle pregnancy companion: your week on a progress ring, how big the baby is, what’s happening for baby and for you, a checklist for each trimester, appointments, danger signs and a kick counter. Calm design, no account, everything on the phone.",
    problem:
      "Pregnancy comes with a lot to keep track of, and much of the guidance out there is noisy, scary or written for a different health system. Many mothers miss antenatal visits or don't know which symptoms need urgent care.",
    solution:
      "A calm, focused companion: week-by-week progress, trimester tips, a checklist of antenatal milestones, a kick counter, and WHO-style danger signs — designed to be reviewed with midwives and localised for Nigerian mothers.",
    features: [
      "Set up from a due date or the first day of the last period",
      "Today: week ring, baby's size, days to go and this week for baby and for you",
      "Journey timeline, trimester checklists with progress, appointments",
      "Danger signs with a one-tap emergency call",
      "Kick counter with a progress ring and history",
      "3-page onboarding; calm dusty-rose and sage design",
      "8 Jest tests for the pregnancy maths and main flows",
    ],
    tech: ["React Native", "Expo SDK 58", "TypeScript", "Expo Router", "React Native SVG", "Jest"],
    categories: ["mobile"],
    status: "in-development",
    icon: "/projects/cribnest/icon.svg",
    color: "#B4536A",
    colorTo: "#7FA38A",
    screenshots: [
      "/projects/cribnest/screen-1-today.png",
      "/projects/cribnest/screen-2-onboarding.png",
      "/projects/cribnest/screen-3-setup.png",
      "/projects/cribnest/screen-4-journey.png",
      "/projects/cribnest/screen-5-checklist.png",
      "/projects/cribnest/screen-6-care.png",
      "/projects/cribnest/screen-7-kicks.png",
    ],
    links: {},
  },
  {
    slug: "dogwalk",
    name: "DogWalk",
    eyebrow: "Mobile · Lifestyle · Marketplace",
    tagline: "Book a trusted walker, or earn as one.",
    overview:
      "A two-sided dog-walking app for Nigerian cities. Owners find a nearby walker who handles their dog’s size, book a 30 or 60-minute walk and follow it live. Walkers set their own price and area, go online, accept requests and track their earnings.",
    problem:
      "Finding someone you trust with your dog is hard, and once they leave with the lead you have no idea how the walk went — or whether it happened at all.",
    solution:
      "Full sign-up for both roles (email code verification, log in, forgot and reset password, field-level errors), onboarding, dog and walker profile setup with an ID-check step, and the booking lifecycle requested → accepted → walking → done. Auth runs against a Laravel Sanctum API when one is configured, and a local demo mode until then; the whole API contract is documented for the backend.",
    features: [
      "Sign up, log in, email verification and password reset for walkers and owners",
      "4-page onboarding and a role choice on welcome",
      "Owners: dog profile, walker search by size and area, booking with day and time chips",
      "Walkers: profile with rate, sizes and ID check; online switch, requests, earnings",
      "Live walk timer and walker notes, from both sides",
      "Laravel Sanctum client with a written API contract",
      "17 Jest tests covering validation, auth, booking rules and both user journeys",
    ],
    tech: ["React Native", "Expo SDK 58", "TypeScript", "Expo Router", "Laravel Sanctum", "SecureStore", "Jest"],
    categories: ["mobile"],
    status: "in-development",
    icon: "/projects/dogwalk/icon.svg",
    color: "#0EA5E9",
    colorTo: "#84CC16",
    screenshots: [
      "/projects/dogwalk/screen-1-onboarding.png",
      "/projects/dogwalk/screen-2-welcome.png",
      "/projects/dogwalk/screen-3-signup.png",
      "/projects/dogwalk/screen-4-verify.png",
      "/projects/dogwalk/screen-5-find-walker.png",
      "/projects/dogwalk/screen-6-book.png",
      "/projects/dogwalk/screen-7-live-walk.png",
      "/projects/dogwalk/screen-8-walker-today.png",
    ],
    links: {},
  },
  {
    slug: "watch-face",
    name: "Watch Face",
    eyebrow: "Apple Watch · Wearables",
    tagline: "A custom face for your wrist.",
    overview:
      "My first step into wearable design. An iPhone companion app lets you design a face — analog, digital or an Ankara-inspired dial, with your accent colour, date, seconds and a complication like activity or next prayer time — and preview it live. The watchOS side ships those designs as WidgetKit complications.",
    problem:
      "Wearables are a completely different canvas: glanceable, tiny and always on. Every pixel and every second of attention counts — and watchOS only lets Apple make full watch faces.",
    solution:
      "Design on the phone, wear it as complications: an Expo companion with a live, ticking preview, and a native Swift/SwiftUI watch target that renders the chosen style as WidgetKit complications on Apple's faces.",
    features: [
      "Analog, digital and Ankara-inspired styles",
      "Six accent colours, date and seconds options",
      "Complications: activity, battery, next prayer",
      "Live, ticking preview on the iPhone",
      "Native SwiftUI + WidgetKit on the watch",
    ],
    tech: ["Swift", "SwiftUI", "WidgetKit", "Expo (iPhone companion)"],
    categories: ["mobile"],
    status: "in-development",
    icon: "/projects/watch-face/icon.svg",
    color: "#64748B",
    colorTo: "#F97316",
    screenshots: [
      "/projects/watch-face/screen-1-analog.png",
      "/projects/watch-face/screen-2-ankara.png",
      "/projects/watch-face/screen-3-digital.png",
      "/projects/watch-face/screen-4-onboarding.png",
    ],
    links: {},
  },
  {
    slug: "pawfit",
    name: "PawFit",
    eyebrow: "Mobile · Pets · Health",
    tagline: "Calorie tracking for your pet.",
    overview:
      "PawFit helps owners keep their dogs and cats at a healthy weight. Add your pet's species, weight and life stage, and PawFit calculates a daily calorie target using the standard veterinary formula, then lets you log meals against it with a simple progress ring.",
    problem:
      "Pet weight creeps up quietly. Feeding guides on food bags are rough guesses, and most owners have no easy way to see how much their pet is actually eating each day.",
    solution:
      "Daily targets from RER (70 × kg^0.75) and a life-stage factor — with weight-loss plans calculated from the target weight — plus a fast food log, a daily ring, and weight updates over time.",
    features: [
      "Dogs and cats, with life stages from puppy/kitten to weight-loss",
      "Daily calorie target from standard veterinary formulas",
      "Food log with a daily progress ring",
      "Weight tracking toward a target",
      "Multiple pets per household",
    ],
    tech: ["React Native", "Expo SDK 58", "TypeScript", "Expo Router", "AsyncStorage"],
    categories: ["mobile"],
    status: "in-development",
    icon: "/projects/pawfit/icon.svg",
    color: "#14B8A6",
    colorTo: "#FACC15",
    screenshots: [
      "/projects/pawfit/screen-1-home.png",
      "/projects/pawfit/screen-2-pet.png",
      "/projects/pawfit/screen-3-add-pet.png",
      "/projects/pawfit/screen-4-onboarding.png",
    ],
    links: {},
  },
];

/* ---------------------------------------------------------------- helpers */

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Home-page carousel. */
export const featuredProjects = ["cribdoc", "ankara-blocks", "flow"]
  .map((slug) => getProject(slug))
  .filter((p): p is Project => Boolean(p));

export function filterProjects(filter: (typeof filters)[number]["id"]) {
  if (filter === "all") return projects;
  return projects.filter((p) => p.categories.includes(filter));
}

/** How the "All" view is grouped, after the featured three. Archived work is folded at the end. */
export const sections: { eyebrow: string; title: string; slugs: string[] }[] = [
  { eyebrow: "Health & care", title: "Apps that look after people", slugs: ["aidnow", "lumicare", "cribnest", "pawfit"] },
  { eyebrow: "Games & music", title: "Made to play", slugs: ["periodica", "ayo-arena", "beatpd"] },
  { eyebrow: "Faith", title: "Prayer, scripture and reflection", slugs: ["kairos", "hagah", "psalm", "scribe", "selah"] },
  { eyebrow: "Everyday tools", title: "Useful every day", slugs: ["howmarket", "kudi", "ajo", "mocho", "dogwalk", "watch-face"] },
];

/** Top of the Projects page — the strongest three. */
export const spotlightSlugs = ["cribdoc", "ankara-blocks", "flow"];

/** Projects that list a given technology — used for "shipped with this" hints. */
export function projectsUsing(tech: string) {
  const needle = tech.toLowerCase();
  return projects.filter(
    (p) => p.tech.some((t) => t.toLowerCase().includes(needle)),
  );
}
