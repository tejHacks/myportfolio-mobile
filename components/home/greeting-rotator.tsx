"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { greetingForHour, languageGreetings, splitGreeting } from "@/data/greetings";

const INTERVAL = 2800;

/**
 * Rotates through every multilingual greeting with a per-character blur
 * morph. The salutation gets the accent gradient. Hover/focus pauses it.
 * Reduced motion: shows the first greeting, statically.
 */
export function GreetingRotator() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [hour, setHour] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => setHour(new Date().getHours()), []);

  useEffect(() => {
    if (reduce || paused) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % languageGreetings.length), INTERVAL);
    return () => window.clearInterval(t);
  }, [reduce, paused]);

  const lang = languageGreetings[reduce ? 0 : i];
  const { key, rest } = splitGreeting(greetingForHour(lang, hour ?? 9));

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      aria-live="polite"
      className="group relative rounded-lg outline-none"
    >
      {/* Badge and greeting share one key, so they always change together. */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={`${lang.code}-${hour}`}>
          <motion.div
            className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-subtle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <span className="rounded border border-line px-1.5 py-0.5 text-fg">{lang.code}</span>
            <span>{lang.name}</span>
            <span className="opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">· paused</span>
          </motion.div>
          {/* One line at every width (sized so the longest greeting fits), so nothing jumps or leaves a gap. */}
          <p
            className="min-h-[1.15em] whitespace-nowrap text-[clamp(1.45rem,7vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.04em]"
            aria-label={`${key} ${rest}`.trim()}
          >
            <Words text={key} gradient />
            {rest && (
              <>
                {" "}
                <Words text={rest} offset={key.split(" ").length} className="text-muted" />
              </>
            )}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/**
 * Word-by-word blur morph. Each word is its own animated box and carries its
 * own slice of the blue → emerald gradient, so the colour stays continuous
 * across words and renders in Safari (which drops background-clip:text from a
 * parent onto transformed inline-block children).
 */
function Words({ text, gradient, className, offset = 0 }: { text: string; gradient?: boolean; className?: string; offset?: number }) {
  const words = text.split(" ").filter(Boolean);
  const n = words.length;
  return (
    <span className={className} aria-hidden>
      {words.map((word, i) => {
        const from = Math.round((i / n) * 100);
        const to = Math.round(((i + 1) / n) * 100);
        const style = gradient
          ? {
              backgroundImage: `linear-gradient(100deg, color-mix(in oklab, var(--accent-emerald) ${from}%, var(--accent-blue)), color-mix(in oklab, var(--accent-emerald) ${to}%, var(--accent-blue)))`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }
          : undefined;
        return (
          <span key={i}>
            <motion.span
              className="inline-block"
              style={style}
              initial={{ opacity: 0, y: "0.3em", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, delay: (offset + i) * 0.08, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, y: "-0.25em", filter: "blur(6px)", transition: { duration: 0.25, delay: (offset + i) * 0.03 } }}
            >
              {word}
            </motion.span>
            {i < n - 1 && " "}
          </span>
        );
      })}
    </span>
  );
}
