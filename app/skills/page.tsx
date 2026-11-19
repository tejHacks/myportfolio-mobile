import type { Metadata } from "next";
import { SkillsPage } from "@/components/pages/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Mobile engineering, AI & machine vision, backend and systems.",
};

export default function Page() {
  return <SkillsPage />;
}
