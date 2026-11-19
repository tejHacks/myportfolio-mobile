import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have an idea, a product to build, or an interesting problem worth solving? Let's talk.",
};

export default function Page() {
  return <ContactPage />;
}
