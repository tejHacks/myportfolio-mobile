/**
 * Work history and education (wording preserved from the previous site).
 */
export interface Experience {
  company: string;
  type?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    company: "LumiCare",
    type: "MTN PachiPanda Challenge 3.0 · 1st place",
    role: "Mobile Developer",
    period: "2026",
    location: "Nigeria",
    description:
      "Built LumiCare with Favour Oni — an offline-first newborn care app for caregivers and community health workers — for the MTN PachiPanda Challenge, and won. I developed the mobile app: the Expo app, the guided eye-photo workflow, on-device records, and integrating the ONNX model so every scan runs on the phone.",
    highlights: [
      "1st place, MTN PachiPanda Challenge 3.0 (₦5 million team prize)",
      "On-device ONNX Runtime inference (YOLOv8 sclera segmentation)",
      "Offline-first records, PDF exports and follow-up reminders",
      "Language selector with 20 options, including Yoruba, Igbo and Hausa",
    ],
    tags: ["React Native", "Expo", "TypeScript", "ONNX", "SQLite"],
    current: false,
  },
  {
    company: "CSMTech",
    type: "NYSC",
    role: "Software Engineer",
    period: "NYSC service year",
    location: "Nigeria",
    description:
      "Served my NYSC year as an engineer at CSMTech, where I built a repair marketplace mobile app — designing and shipping more than 50 screens across the customer and technician journeys.",
    highlights: [
      "Built a repair marketplace mobile app",
      "50+ app screens designed and implemented",
      "End-to-end mobile engineering",
    ],
    tags: ["React Native", "Expo", "TypeScript", "Mobile UI/UX"],
    current: false,
  },
  {
    company: "MamaCare",
    type: "Startup",
    role: "Frontend & Mobile Developer",
    period: "Mar 2025 — Present",
    location: "Remote",
    description:
      "Building a pregnancy and postpartum companion designed around real everyday needs. I work across the mobile experience, product interface, and integrations — turning ideas into features people can actually use.",
    highlights: ["Pregnancy & fetal development tracking", "Health reminders and weekly guidance", "BMI and wellness tools", "React Native, Expo & Firebase"],
    tags: ["React Native", "Expo", "TypeScript", "Firebase"],
    current: true,
  },
  {
    company: "Kairos Initiative",
    role: "Mobile Developer",
    period: "Oct 2025 — Aug 2026",
    location: "Remote",
    description:
      "Led mobile development for a prayer reminder application built around consistency, offline access, and timely notifications. Worked through the less glamorous parts of mobile engineering — background tasks, state, notifications, and production behaviour.",
    highlights: ["Scheduled prayer notifications", "Background task handling", "Offline-first architecture", "Bible verse integration"],
    tags: ["React Native", "Expo", "TypeScript", "Notifications"],
    current: false,
  },
  {
    company: "HNG Internship",
    role: "Mobile Developer Intern",
    period: "Oct 2025 — Dec 2025",
    location: "Remote",
    description:
      "Worked inside a fast-moving remote engineering environment where shipping mattered. Built multiple mobile projects while collaborating through Git, code reviews, agile workflows, and team-based delivery.",
    highlights: ["Bible quiz application", "Crypto wallet prototype", "Wallpaper application", "Remote team collaboration"],
    tags: ["React Native", "Git", "Agile", "Teamwork"],
    current: false,
  },
  {
    company: "Exodox",
    role: "Frontend & Mobile Developer",
    period: "Jun 2025 — Mar 2026",
    location: "Remote",
    description:
      "Built and maintained interfaces across web and mobile products. Worked with reusable components, responsive interfaces, performance improvements, and Android delivery.",
    highlights: ["React & React Native development", "Reusable component systems", "UI implementation", "Performance optimisation"],
    tags: ["React", "React Native", "UI Systems"],
    current: false,
  },
  {
    company: "Midas-Tech Training Institute",
    role: "Programming Instructor & Lead Frontend Mentor",
    period: "Jun 2024 — Oct 2024",
    location: "Nigeria",
    description:
      "Taught and mentored developers through frontend and backend fundamentals, while helping students move from tutorials into actually building software.",
    highlights: ["Mentored 20+ students", "React & JavaScript instruction", "Laravel & backend fundamentals", "Project-based learning"],
    tags: ["Teaching", "React", "Laravel", "JavaScript"],
    current: false,
  },
  {
    company: "ATC Africa",
    role: "Community Lead",
    period: "Feb 2024 — Dec 2024",
    location: "Remote",
    description:
      "Led developer-focused community initiatives, helping beginners learn by doing through technical sessions, code-alongs, mentorship, and open-source activities.",
    highlights: ["Developer workshops", "Code-along sessions", "Mentorship programmes", "50+ developers reached"],
    tags: ["Leadership", "Community", "Mentorship", "Open Source"],
    current: false,
  },
  {
    company: "Ntech Systems",
    role: "Junior Web Developer Trainer",
    period: "Jun 2023 — Oct 2023",
    location: "Nigeria",
    description:
      "Helped junior developers strengthen their foundations in web development and Git while developing the communication and review skills that come from teaching other people to write code.",
    highlights: ["HTML, CSS & JavaScript", "Git workflows", "Code reviews", "Developer training"],
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    current: false,
  },
];

export const education = {
  school: "Achievers University, Owo",
  degree: "B.Sc. Computer Science",
  period: "2021 — 2025",
  achievements: ["President, Computer Science Department", "SRC Lead", "Class Representative", "Lead & Mentor at ATC Africa"],
  coursework: ["Software Engineering", "Data Structures & Algorithms", "Artificial Intelligence", "Object-Oriented Programming", "Cybersecurity", "Human-Computer Interaction"],
};
