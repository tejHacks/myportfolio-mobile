/**
 * Published articles. `date` is ISO (YYYY-MM) so lists sort correctly;
 * `dateLabel` keeps the original display wording.
 */
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  dateLabel: string;
  category: string;
  claps?: number;
  featured?: boolean;
  url: string;
  platform: "Medium" | "Substack";
}

export const articles: Article[] = [
  { id: "1", title: "Machine Learning: An Introduction to the Basics (Without the Hype)", excerpt: "Machine Learning has a reputation problem. Let me break it down without the buzzwords.", readTime: "8 min read", date: "2026-02", dateLabel: "Feb 2026", category: "ML / AI", claps: 30, featured: true, platform: "Medium", url: "https://medium.com/@olateju202/machine-learning-an-introduction-to-the-basics-without-the-hype-3a3d19c4310e" },
  { id: "2", title: "Node.js: Protecting your Backend like a Pro", excerpt: "Your backend is like your home — Node.js gives you the keys, but a strong door without a lock invites trouble.", readTime: "10 min read", date: "2025-10", dateLabel: "Oct 2025", category: "Backend", claps: 24, featured: true, platform: "Medium", url: "https://medium.com/@olateju202/node-js-protecting-your-backend-like-a-pro-ce702304c842" },
  { id: "3", title: "10 Lessons from a Computer Science Student in a Private Nigerian University", excerpt: "I signed out of school on Friday, June 27th, 2025 — the same day I wrote my final paper. After years of navigating the private university maze...", readTime: "12 min read", date: "2025-06", dateLabel: "Jun 2025", category: "Personal", claps: 89, featured: true, platform: "Medium", url: "https://medium.com/@olateju202/10-lessons-from-a-computer-science-student-in-a-private-nigerian-university-ed756457c671" },
  { id: "4", title: "How to Start JavaScript and Solidify Your Learning Process", excerpt: "Starting with JavaScript and solidifying your learning process requires a balance of theory, practice, repetition, and real projects.", readTime: "7 min read", date: "2023-11", dateLabel: "Nov 2023", category: "JavaScript", claps: 3, platform: "Medium", url: "https://medium.com/@olateju202/how-to-start-javascript-and-solidify-your-learning-process-1c042692b287" },
  { id: "5", title: "React Native vs Flutter in 2026: What Actually Matters for Startups", excerpt: "A practical comparison for startup founders and developers choosing their mobile stack.", readTime: "9 min read", date: "2026-04", dateLabel: "Apr 2026", category: "Mobile", platform: "Medium", url: "https://medium.com/@olateju202/react-native-vs-flutter-in-2026-what-actually-matters-for-startups-1f3635cb308b" },
  { id: "6", title: "Linux vs Windows for Developers: I Switched — Here's the Truth", excerpt: "I got tired of fighting my development environment more than my actual code. So I switched.", readTime: "8 min read", date: "2026-04", dateLabel: "Apr 2026", category: "Linux", platform: "Medium", url: "https://medium.com/@olateju202/linux-vs-windows-for-developers-i-switched-heres-the-truth-7bce96b91581" },
  { id: "7", title: "25 Christian Software & Faith Based Tech Apps We Can Build in 2026", excerpt: "Technology is one of the most powerful tools for spreading ideas across the world. Here are 25 ways we can build for the Kingdom.", readTime: "15 min read", date: "2026-03", dateLabel: "Mar 2026", category: "Faith Tech", claps: 2, platform: "Medium", url: "https://medium.com/@olateju202/25-christian-software-fath-based-tech-apps-we-can-build-in-2026-for-the-kingdom-of-god-812e5367ff97" },
  { id: "8", title: "25 C++ Project Ideas for Developers", excerpt: "From console games to high-performance tools — build these to strengthen your portfolio, master modern C++, and stand out in interviews.", readTime: "12 min read", date: "2026-02", dateLabel: "Feb 2026", category: "C++", claps: 3, platform: "Medium", url: "https://medium.com/stackademic/25-c-project-ideas-for-developers-601743920236" },
  { id: "9", title: "C++: The Language Of The Millennium", excerpt: "Some languages arrive quietly and solve a problem. Others arrive loudly, burn bright, and fade.", readTime: "10 min read", date: "2026-02", dateLabel: "Feb 2026", category: "C++", claps: 20, platform: "Medium", url: "https://medium.com/@olateju202/c-the-language-of-the-millenium-16e8635615ec" },
  { id: "10", title: "Overplanning, Comparison, and Emotional Hoarding: What Being A Developer's Actually Like", excerpt: "Software development isn't hard because of code.", readTime: "6 min read", date: "2026-02", dateLabel: "Feb 2026", category: "Personal", claps: 2, platform: "Medium", url: "https://medium.com/@olateju202/overplanning-comparison-and-emotional-hoarding-what-being-a-developer-s-actually-like-543d696be7cb" },
  { id: "11", title: "Speaker Diarization: Teaching Machines Who Spoke When", excerpt: "Speech recognition learned how to hear. Speaker diarization learned how to pay attention.", readTime: "8 min read", date: "2026-02", dateLabel: "Feb 2026", category: "ML / AI", claps: 4, platform: "Medium", url: "https://medium.com/@olateju202/speaker-diarization-teaching-machines-who-spoke-when-b3ea70cf9dcd" },
  { id: "12", title: "PHP: The Right Tool, at the Right Time", excerpt: "There's a strange ritual in tech: we declare tools dead long before checking whether they're still doing their jobs.", readTime: "7 min read", date: "2026-02", dateLabel: "Feb 2026", category: "Backend", claps: 1, platform: "Medium", url: "https://medium.com/stackademic/php-the-right-tool-at-the-right-time-c7f1519ab585" },
];

export const latestArticles = (n = 3) => [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, n);
export const writingProfiles = [{ name: "Medium", href: "https://medium.com/@olateju202/" }];
