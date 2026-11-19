// Render resume/resume.html to public/resume.pdf with headless Chrome.
// Usage: node resume/build.mjs   (needs Google Chrome and puppeteer-core: npx -y -p puppeteer-core node resume/build.mjs)
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const here = path.dirname(fileURLToPath(import.meta.url));
const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new" });
const page = await browser.newPage();
await page.goto(`file://${path.join(here, "resume.html")}`, { waitUntil: "networkidle0" });
await page.pdf({ path: path.join(here, "..", "public", "resume.pdf"), format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log("wrote public/resume.pdf");
