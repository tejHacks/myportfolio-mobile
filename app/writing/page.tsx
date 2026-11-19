import type { Metadata } from "next";
import { WritingPage } from "@/components/pages/writing";

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical deep dives, lessons from building software, and thoughts on engineering.",
};

export default function Page() {
  return <WritingPage />;
}
