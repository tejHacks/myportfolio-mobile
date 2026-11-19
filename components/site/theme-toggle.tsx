"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Sun ⇄ moon morph: a circle whose mask slides in to carve a crescent,
 * while the rays rotate and scale away.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Unique per instance: the header and the mobile menu can both render a toggle.
  const maskId = `moon-mask-${useId().replace(/:/g, "")}`;
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const t = { type: "spring" as const, stiffness: 260, damping: 22 };

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative grid h-9 w-9 place-items-center rounded-full border border-line bg-card text-fg transition-colors hover:border-line-strong",
        className,
      )}
    >
      <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" animate={{ rotate: isDark ? 40 : 90 }} transition={t} aria-hidden>
        <mask id={maskId}>
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <motion.circle r="9" fill="black" initial={false} cx={isDark ? 17 : 33} cy={isDark ? 6 : 0} animate={{ cx: isDark ? 17 : 33, cy: isDark ? 6 : 0 }} transition={t} />
        </mask>
        <motion.circle cx="12" cy="12" r={isDark ? 9 : 5} fill="currentColor" stroke="none" mask={`url(#${maskId})`} initial={false} animate={{ r: isDark ? 9 : 5 }} transition={t} />
        <motion.g animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.4 : 1 }} transition={t} style={{ transformOrigin: "12px 12px" }}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </motion.svg>
    </button>
  );
}
