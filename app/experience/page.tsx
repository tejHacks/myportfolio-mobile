import type { Metadata } from "next";
import { ExperiencePage } from "@/components/pages/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles, teams and lessons — from teaching to shipping mobile products.",
};

export default function Page() {
  return <ExperiencePage />;
}
