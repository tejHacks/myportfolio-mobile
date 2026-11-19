"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock, ExternalLink, Heart, TrendingUp } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { articles } from "@/data/writing";
import { cn } from "@/lib/utils";

export function WritingPage() {
  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];
  const [cat, setCat] = useState("All");
  const totalClaps = articles.reduce((s, a) => s + (a.claps ?? 0), 0);
  const sorted = [...articles].sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || b.date.localeCompare(a.date));
  const list = cat === "All" ? sorted : sorted.filter((a) => a.category === cat);

  return (
    <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 md:pt-20">
      <PageHeader
        page="writing"
        eyebrow="Writing"
        title={<>Things I&apos;ve <span className="text-subtle">learned, built &amp; questioned.</span></>}
        intro={<p>Technical deep dives, lessons from building software, thoughts on engineering, and the occasional rabbit hole I probably should have left alone.</p>}
      />

      <div className="mb-12 grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { icon: BookOpen, value: <Counter to={articles.length} />, label: "Articles" },
          { icon: Heart, value: <Counter to={totalClaps} />, label: "Claps" },
          { icon: TrendingUp, value: <><Counter to={10} />K+</>, label: "Reads" },
        ].map((s) => (
          <div key={s.label} className="card rounded-2xl p-4 sm:p-5">
            <s.icon className="mb-3 h-4 w-4 text-blue" />
            <p className="text-2xl font-bold tracking-tight">{s.value}</p>
            <p className="mt-1 font-mono text-[11px] text-subtle">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="hide-scrollbar -mx-4 mb-6 flex gap-2 overflow-x-auto px-4" role="tablist" aria-label="Filter by topic">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={cn("relative shrink-0 rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors", cat === c ? "text-bg" : "border border-line text-muted hover:text-fg")}>
            {cat === c && <motion.span layoutId="writing-pill" className="absolute inset-0 rounded-full bg-fg" />}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>

      {/* List slide-up */}
      <motion.ul layout className="space-y-3">
        <AnimatePresence mode="popLayout" initial>
          {list.map((a, i) => (
            <motion.li
              key={a.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: Math.min(i, 10) * 0.05, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
            >
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="card group flex flex-col gap-4 rounded-2xl p-5 hover:border-line-strong sm:flex-row sm:items-center sm:gap-8 sm:p-6">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">{a.category}</span>
                    {a.featured && <span className="rounded-md bg-blue/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-blue">Featured</span>}
                    <span className="font-mono text-[11px] text-subtle">{a.platform}</span>
                  </div>
                  <h2 className={cn("font-semibold leading-snug tracking-tight transition-colors group-hover:text-blue", a.featured ? "text-lg md:text-xl" : "text-base")}>{a.title}</h2>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                </div>
                <div className="flex shrink-0 items-center justify-between gap-5 font-mono text-[11px] text-subtle sm:flex-col sm:items-end">
                  <span>{a.dateLabel}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {a.readTime}</span>
                  {a.claps !== undefined && <span className="flex items-center gap-1.5"><Heart className="h-3.5 w-3.5" /> {a.claps}</span>}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <Reveal className="card relative mt-16 overflow-hidden rounded-3xl p-6 sm:p-10">
        <div aria-hidden className="absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl" style={{ background: "var(--aurora-1)" }} />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Keep reading</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">There&apos;s more on Medium.</h2>
            <p className="mt-2 text-sm leading-6 text-muted">I write about software engineering, mobile development, Linux, AI, faith-based technology, and the lessons hiding between the commits.</p>
          </div>
          <a href="https://medium.com/@olateju202/" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg">
            Read on Medium <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
      <p className="mt-8 text-center text-xs text-subtle">Written from the intersection of curiosity, code, and experience.</p>
    </div>
  );
}
