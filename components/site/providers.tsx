"use client";

import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * - next-themes: class-based theme, defaults to system, persisted in
 *   localStorage ("theme"), and injects a blocking script so there is no flash.
 * - MotionConfig reducedMotion="user": Framer Motion drops transform
 *   animations automatically when the OS asks for reduced motion.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
