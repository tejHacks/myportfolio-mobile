"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectMockup } from "./project-mockup";

/** Horizontal screenshot strip; click any shot to open the lightbox. */
export function Gallery({ project }: { project: Project }) {
  const shots = project.screenshots;
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + shots.length) % shots.length)), [shots.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  if (shots.length === 0) {
    return (
      <div className="card flex flex-col items-center gap-6 rounded-3xl p-10 md:flex-row md:justify-center" style={{ background: `radial-gradient(80% 80% at 50% 0%, ${project.color}22, transparent)` }}>
        <ProjectMockup project={project} className="mx-0 w-40" />
        <p className="max-w-xs text-center text-sm text-muted md:text-left">
          Screenshots for this project aren&apos;t published yet.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4">
        {shots.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpen(i)}
            className="group relative aspect-[9/19] w-44 shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-card md:w-52"
            aria-label={`Open screenshot ${i + 1} of ${shots.length}`}
          >
            <Image src={src} alt={`${project.name} screenshot ${i + 1}`} fill sizes="210px" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} screenshot viewer`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={open}
                className="relative h-[82vh] w-full max-w-[420px]"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={shots[open]} alt={`${project.name} screenshot ${open + 1}`} fill sizes="420px" className="object-contain" />
              </motion.div>
            </AnimatePresence>
            <button onClick={close} aria-label="Close" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
            {shots.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous screenshot" className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next screenshot" className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            <p className="absolute bottom-5 font-mono text-xs text-white/60">{open + 1} / {shots.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
