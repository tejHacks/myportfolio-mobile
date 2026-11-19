import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/site/providers";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { PageTransition } from "@/components/site/page-transition";
import { ScriptureIntro } from "@/components/site/scripture-intro";
import { CommandPalette } from "@/components/site/command-palette";
import { site } from "@/data/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-jakarta", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.role}`, template: `%s · ${site.name}` },
  description: site.description,
  keywords: ["Mobile Developer", "React Native", "Expo", "ML Engineer", "On-device AI", "ONNX", "Technical Writer", "Full Stack Developer"],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.statement,
  },
  twitter: { card: "summary_large_image", creator: "@OlatejuOlamid10", title: `${site.name} | ${site.role}`, description: site.statement },
  icons: { apple: "/apple-icon.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  width: "device-width",
  initialScale: 1,
  // Draw edge-to-edge on notch / Dynamic Island iPhones; the header pads itself
  // with env(safe-area-inset-*) so nothing sits under the island or camera.
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh overflow-x-hidden">
        <Providers>
          <div className="grain" aria-hidden />
          <ScriptureIntro />
          <CommandPalette />
          <Navbar />
          <main id="main" className="relative">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </Providers>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
