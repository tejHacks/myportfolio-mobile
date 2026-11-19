import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about";

export const metadata: Metadata = {
  title: "About",
  description: "Mobile-focused software engineer who enjoys taking an idea from “what if?” to “it's working.”",
};

export default function Page() {
  return <AboutPage />;
}
