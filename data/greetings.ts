/**
 * ============================================================================
 *  GREETINGS — every greeting on the site lives here.
 *  Wording is preserved exactly from the previous version of the portfolio.
 * ============================================================================
 */

export type PageKey =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "writing"
  | "contact";

/* ---------------------------------------------------------------------------
 * 1. Multilingual, time-of-day greetings (hero)
 * ------------------------------------------------------------------------- */

export interface LanguageGreeting {
  name: string;
  code: string;
  morning: string;
  afternoon: string;
  evening: string;
}

export const languageGreetings: LanguageGreeting[] = [
  {
    name: "English",
    code: "EN",
    morning: "Good morning, I am ",
    afternoon: "Good afternoon, I am ",
    evening: "Good evening, I am ",
  },
  {
    name: "Indonesian",
    code: "ID",
    morning: "Selamat pagi, saya ",
    afternoon: "Selamat siang, saya ",
    evening: "Selamat malam, saya ",
  },
  {
    name: "French",
    code: "FR",
    morning: "Bonjour, je suis ",
    afternoon: "Bonjour, je suis ",
    evening: "Bonsoir, je suis ",
  },
  {
    name: "Japanese",
    code: "JA",
    morning: "おはようございます、",
    afternoon: "こんにちは、",
    evening: "こんばんは、",
  },
  {
    name: "Mandarin",
    code: "ZH",
    morning: "早上好，我是 ",
    afternoon: "下午好，我是 ",
    evening: "晚上好，我是 ",
  },
  {
    name: "German",
    code: "DE",
    morning: "Guten Morgen, ich bin ",
    afternoon: "Guten Tag, ich bin ",
    evening: "Guten Abend, ich bin ",
  },
  {
    name: "Spanish",
    code: "ES",
    morning: "Buenos días, soy ",
    afternoon: "Buenas tardes, soy ",
    evening: "Buenas noches, soy ",
  },
];

/** Pick the right greeting for the visitor's local hour. */
export function greetingForHour(language: LanguageGreeting, hour: number) {
  if (hour < 12) return language.morning;
  if (hour < 18) return language.afternoon;
  return language.evening;
}

/**
 * Split a greeting into its key word (the salutation, rendered with the
 * accent gradient) and the remainder ("I am", "je suis", ...).
 */
export function splitGreeting(greeting: string): { key: string; rest: string } {
  const match = greeting.match(/^(.*?[,，、])\s*(.*)$/);
  if (!match) return { key: greeting.trim(), rest: "" };
  return { key: match[1], rest: match[2].trim() };
}

/* ---------------------------------------------------------------------------
 * 2. Daily scripture — "A small reminder"
 * ------------------------------------------------------------------------- */

export interface Scripture {
  text: string;
  reference: string;
  theme: string;
}

export const scriptures: Scripture[] = [
  { text: "In the beginning God created the heaven and the earth.", reference: "Genesis 1:1", theme: "Creation" },
  { text: "I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.", reference: "Psalm 139:14", theme: "Purpose" },
  { text: "This is the day which the LORD hath made; we will rejoice and be glad in it.", reference: "Psalm 118:24", theme: "Joy" },
  { text: "The joy of the LORD is your strength.", reference: "Nehemiah 8:10", theme: "Joy" },
  { text: "The LORD is my shepherd; I shall not want.", reference: "Psalm 23:1", theme: "Comfort" },
  { text: "My help cometh from the LORD, which made heaven and earth.", reference: "Psalm 121:2", theme: "Help" },
  { text: "I will lift up mine eyes unto the hills, from whence cometh my help.", reference: "Psalm 121:1", theme: "Help" },
  { text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.", reference: "Proverbs 3:5", theme: "Wisdom" },
  { text: "In all thy ways acknowledge him, and he shall direct thy paths.", reference: "Proverbs 3:6", theme: "Guidance" },
  { text: "The fear of the LORD is the beginning of wisdom.", reference: "Proverbs 9:10", theme: "Wisdom" },
  { text: "If God be for us, who can be against us?", reference: "Romans 8:31", theme: "Confidence" },
  { text: "For we walk by faith, not by sight.", reference: "2 Corinthians 5:7", theme: "Faith" },
  { text: "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.", reference: "Ephesians 2:10", theme: "Purpose" },
  { text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;", reference: "Colossians 3:23", theme: "Excellence" },
  { text: "Commit thy works unto the LORD, and thy thoughts shall be established.", reference: "Proverbs 16:3", theme: "Purpose" },
  { text: "But his delight is in the law of the LORD; and in his law doth he meditate day and night.", reference: "Psalm 1:2", theme: "The Word" },
  { text: "Thy word is a lamp unto my feet, and a light unto my path.", reference: "Psalm 119:105", theme: "The Word" },
  { text: "Let us not be weary in well doing: for in due season we shall reap, if we faint not.", reference: "Galatians 6:9", theme: "Perseverance" },
  { text: "Every good gift and every perfect gift is from above.", reference: "James 1:17", theme: "Grace" },
  { text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", reference: "Matthew 11:28", theme: "Comfort" },
];

/** Deterministic scripture of the day (same for everyone on a given UTC day). */
export function scriptureOfTheDay(date = new Date()): Scripture {
  return scriptures[Math.floor(date.getTime() / 86_400_000) % scriptures.length];
}

/** The standing Colossians 3:23 reminder (footer + about page). */
export const workReminder: Scripture = scriptures.find((s) => s.reference === "Colossians 3:23")!;

/* ---------------------------------------------------------------------------
 * 3. Page scriptures — the "word before we begin" shown when entering a page
 * ------------------------------------------------------------------------- */

export const pageScriptures: Record<PageKey, { text: string; reference: string; label: string }> = {
  home: { text: "In the beginning God created the heaven and the earth.", reference: "Genesis 1:1", label: "In the beginning" },
  about: { text: "I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.", reference: "Psalm 139:14", label: "Made with intention" },
  skills: { text: "Seest thou a man diligent in his business? he shall stand before kings; he shall not stand before mean men.", reference: "Proverbs 22:29", label: "Diligence" },
  experience: { text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;", reference: "Colossians 3:23", label: "The work" },
  projects: { text: "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.", reference: "Ephesians 2:10", label: "Created for good works" },
  writing: { text: "But his delight is in the law of the LORD; and in his law doth he meditate day and night.", reference: "Psalm 1:2", label: "Meditation" },
  contact: { text: "My help cometh from the LORD, which made heaven and earth.", reference: "Psalm 121:2", label: "My help" },
};
