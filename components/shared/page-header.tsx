"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { BookOpen } from "lucide-react";
import { pageScriptures, type PageKey } from "@/data/greetings";
import { ease } from "@/lib/motion";

/**
 * Shared page header: eyebrow, big heading, intro, and the page's own
 * scripture tucked underneath as a quiet, elegant reminder.
 */
export function PageHeader({ page, eyebrow, title, intro }: { page: PageKey; eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  const s = pageScriptures[page];
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.outExpo } },
  };
  return (
    <motion.header initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }} className="mb-14 max-w-3xl md:mb-20">
      <motion.p variants={item} className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-subtle">
        <span className="bg-gradient-accent h-px w-8" /> {eyebrow}
      </motion.p>
      <motion.h1 variants={item} className="text-balance text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
        {title}
      </motion.h1>
      {intro && (
        <motion.div variants={item} className="mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {intro}
        </motion.div>
      )}
      <motion.figure variants={item} className="mt-8 flex max-w-xl gap-3 border-l-2 border-emerald/50 pl-4">
        <BookOpen className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-text" aria-hidden />
        <div>
          <blockquote className="text-sm italic leading-relaxed text-muted">“{s.text}”</blockquote>
          <figcaption className="mt-1 font-mono text-[11px] text-subtle">
            {s.label} · {s.reference}
          </figcaption>
        </div>
      </motion.figure>
    </motion.header>
  );
}
