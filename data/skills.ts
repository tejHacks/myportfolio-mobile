/**
 * Skills. `pillars` are the interactive headline cards; `toolbox` is the
 * full categorised stack (wording preserved from the previous site).
 */
export type Level = "core" | "working" | "familiar";

export interface Pillar {
  id: string;
  title: string;
  blurb: string;
  accent: string;
  /** `match` is what we search projects.ts tech for ("shipped with this"). */
  skills: { name: string; match?: string; hint?: string }[];
}

export const pillars: Pillar[] = [
  {
    id: "mobile",
    title: "Mobile Engineering",
    blurb: "Where I spend most of my time — apps people can actually use.",
    accent: "#2563EB",
    skills: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "TypeScript" },
      { name: "Android", hint: "Android builds & Play Store delivery for Hagah and Kairos" },
      { name: "Flutter", hint: "Mocho, Ajo and Selah" },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Vision",
    blurb: "The difficult space where software meets messy real-world problems.",
    accent: "#10B981",
    skills: [
      { name: "ONNX", match: "onnx" },
      { name: "On-device ML", match: "on-device" },
      { name: "LLM integration", match: "openai" },
      { name: "Speaker diarization", match: "diarization" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    blurb: "The part users never see — APIs, data and the machine underneath.",
    accent: "#8B5CF6",
    skills: [
      { name: "Supabase", match: "supabase" },
      { name: "Node", match: "node" },
      { name: "Linux", hint: "Daily driver — and the subject of TerminalMaster" },
      { name: "SQLite", match: "sqlite" },
    ],
  },
];

export const toolboxCategories = [
  { id: "mobile", label: "Mobile", eyebrow: "Where I spend most of my time", title: "Apps people can actually use.", description: "I build mobile experiences with React Native and Expo, paying attention to the details that make an app feel fast, intentional and production-ready." },
  { id: "web", label: "Web", eyebrow: "Interfaces & products", title: "Interfaces with a reason to exist.", description: "From landing pages to full web applications, I care about clarity, responsiveness and turning complicated ideas into interfaces people understand." },
  { id: "backend", label: "Backend", eyebrow: "Behind the screen", title: "The part users never see.", description: "I connect applications to APIs, databases and services so the beautiful interface actually has something useful happening behind it." },
  { id: "tools", label: "Tools", eyebrow: "The working environment", title: "Tools are only useful when they ship.", description: "Git, Linux, Docker, Postman and the rest of the toolbox help me move from idea to implementation without getting lost in the machinery." },
] as const;

export type ToolboxId = (typeof toolboxCategories)[number]["id"];

export const toolbox: Record<ToolboxId, { name: string; level: Level }[]> = {
  mobile: [
    { name: "React Native", level: "core" }, { name: "Expo", level: "core" }, { name: "TypeScript", level: "core" }, { name: "NativeWind", level: "core" }, { name: "React Navigation", level: "working" }, { name: "Android", level: "working" }, { name: "Kotlin", level: "working" }, { name: "Mobile UI/UX", level: "core" }, { name: "App Performance", level: "working" }, { name: "Firebase", level: "working" },
  ],
  web: [
    { name: "React", level: "core" }, { name: "Next.js", level: "working" }, { name: "TypeScript", level: "core" }, { name: "JavaScript", level: "core" }, { name: "Tailwind CSS", level: "core" }, { name: "HTML / CSS", level: "core" }, { name: "Laravel", level: "working" }, { name: "PHP", level: "working" },
  ],
  backend: [
    { name: "Node.js", level: "working" }, { name: "REST APIs", level: "core" }, { name: "Laravel", level: "working" }, { name: "FastAPI", level: "working" }, { name: "Python", level: "working" }, { name: "MySQL", level: "working" }, { name: "SQLite", level: "core" }, { name: "Firebase", level: "working" },
  ],
  tools: [
    { name: "Git", level: "core" }, { name: "GitHub", level: "core" }, { name: "Linux", level: "core" }, { name: "Docker", level: "working" }, { name: "VS Code", level: "core" }, { name: "Postman", level: "core" }, { name: "Figma", level: "working" }, { name: "NPM", level: "core" }, { name: "Bash", level: "working" }, { name: "Android Studio", level: "working" },
  ],
};

/** Home-page marquee. */
export const marqueeTech = ["React Native", "Expo", "TypeScript", "ONNX Runtime", "Reanimated", "Supabase", "OpenAI API", "SQLite", "Node.js", "Android", "Flutter", "SwiftUI", "Linux", "Next.js", "Python", "RevenueCat"];
