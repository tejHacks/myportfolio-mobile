"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { featuredProjects } from "@/data/projects";
import { ProjectMockup } from "@/components/projects/project-mockup";
import { cn } from "@/lib/utils";

/** Auto-advancing featured project card (Hagah, Kairos, CribDoc, AidNow, Ankara Blocks). */
export function FeaturedCarousel() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const p = featuredProjects[i];

  useEffect(() => {
    if (reduce || paused) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % featuredProjects.length), 5000);
    return () => window.clearInterval(t);
  }, [reduce, paused]);

  return (
    <div
      className="card relative flex h-full flex-col overflow-hidden rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={p.slug}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          exit={{ opacity: 0, x: -30, transition: { duration: 0.25 } }}
          className="flex flex-1 flex-col"
        >
          <div className="relative flex h-52 items-start justify-center overflow-hidden pt-10" style={{ background: `radial-gradient(100% 90% at 50% 0%, ${p.color}40, transparent 70%)` }}>
            <ProjectMockup project={p} className="w-28" />
            <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-subtle">Featured</span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
            <p className="mt-1 text-sm text-muted">{p.tagline}</p>
            <Link href={`/projects/${p.slug}`} className="group mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold">
              Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="absolute inset-0" aria-hidden />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 flex gap-1.5 px-5 pb-5" role="tablist" aria-label="Featured projects">
        {featuredProjects.map((fp, idx) => (
          <button
            key={fp.slug}
            role="tab"
            aria-selected={idx === i}
            aria-label={`Show ${fp.name}`}
            onClick={() => setI(idx)}
            className={cn("h-1.5 rounded-full transition-all", idx === i ? "w-7 bg-fg" : "w-1.5 bg-line-strong hover:bg-subtle")}
          />
        ))}
      </div>
    </div>
  );
}
