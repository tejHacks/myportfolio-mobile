"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { pageScriptures, type PageKey } from "@/data/greetings";

const KEY = "scripture-intro-seen";

export function pageKeyFor(pathname: string): PageKey {
  const seg = pathname.split("/")[1] || "home";
  return (seg in pageScriptures ? seg : "home") as PageKey;
}

/**
 * "A word before we begin" — the page's scripture, shown once per session
 * on the first page a visitor lands on. Click, tap or press any key to skip.
 * (Every page also shows its scripture inline in its header.)
 */
export function ScriptureIntro() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [scripture] = useState(() => pageScriptures[pageKeyFor(pathname)]);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage unavailable — show once for this render */
    }
    if (seen) return;
    setVisible(true);
    const t = window.setTimeout(() => setVisible(false), reduce ? 2200 : 3000);
    return () => window.clearTimeout(t);
  }, [reduce]);

  const dismiss = useCallback(() => setVisible(false), []);

  useEffect(() => {
    if (!visible) return;
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, [visible, dismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Scripture"
          onClick={dismiss}
          className="fixed inset-0 z-[90] grid cursor-pointer place-items-center bg-bg px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, var(--aurora-1), var(--aurora-2) 40%, transparent 70%)" }} />
          <motion.div
            className="relative max-w-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-subtle">{scripture.label}</p>
            <p className="font-serif text-2xl leading-[1.35] tracking-tight md:text-4xl">“{scripture.text}”</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-emerald-text">— {scripture.reference}</p>
            <p className="mt-10 text-[11px] text-subtle">Tap anywhere to continue</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
