"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { filterProjects, filters, projects, sections, spotlightSlugs, type Project } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

type FilterId = (typeof filters)[number]["id"];

/** Grid that shuffles in on load and re-flows with layout animations. */
function Grid({ list, allowLarge = false }: { list: Project[]; allowLarge?: boolean }) {
  return (
    <motion.div layout className="grid grid-flow-dense gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {list.map((p, i) => {
          const large = allowLarge && p.size === "large";
          return (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.94, rotate: i % 2 ? 1.5 : -1.5 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, transition: { duration: 0.6, delay: Math.min(i, 8) * 0.05, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
              className={cn(large && "sm:col-span-2")}
            >
              <ProjectCard project={p} large={large} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="mt-16 first:mt-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">{eyebrow}</p>
      <h2 className="mb-6 mt-1 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

/**
 * Animated category tabs. "All" is curated for skimmers: the three strongest
 * projects first, then one section per kind of work, with older work folded.
 */
export function ProjectsExplorer() {
  const [active, setActive] = useState<FilterId>("all");
  const [showArchive, setShowArchive] = useState(false);

  // Deep-link support: /projects#games
  useEffect(() => {
    const hash = window.location.hash.slice(1) as FilterId;
    if (filters.some((f) => f.id === hash)) setActive(hash);
  }, []);

  const select = (id: FilterId) => {
    setActive(id);
    history.replaceState(null, "", id === "all" ? window.location.pathname : `#${id}`);
  };

  const spotlight = spotlightSlugs.map((s) => projects.find((p) => p.slug === s)).filter((p): p is Project => Boolean(p));
  const bySlug = (slugs: string[]) => slugs.map((s) => projects.find((p) => p.slug === s)).filter((p): p is Project => Boolean(p) && !p!.archived);
  const placed = new Set([...spotlightSlugs, ...sections.flatMap((s) => s.slugs)]);
  // Anything new that hasn't been given a section yet still shows up.
  const unplaced = projects.filter((p) => !placed.has(p.slug) && !p.archived);
  const archive = projects.filter((p) => p.archived);

  return (
    <LayoutGroup>
      <div role="tablist" aria-label="Filter projects" className="hide-scrollbar -mx-4 mb-10 flex gap-1 overflow-x-auto px-4 pb-1">
        {filters.map((f) => {
          const on = f.id === active;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={on}
              onClick={() => select(f.id)}
              className={cn("relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors", on ? "text-bg" : "text-muted hover:text-fg")}
            >
              {on && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-fg" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
              <span className="relative z-10">
                {f.label} <span className="font-mono text-[10px] opacity-60">{filterProjects(f.id).length}</span>
              </span>
            </button>
          );
        })}
      </div>

      {active !== "all" ? (
        <Grid list={filterProjects(active)} />
      ) : (
        <>
          <Section eyebrow="Featured" title="Start here">
            <Grid list={spotlight} />
          </Section>

          {sections.map((s) => (
            <Section key={s.eyebrow} eyebrow={s.eyebrow} title={s.title}>
              <Grid list={bySlug(s.slugs)} />
            </Section>
          ))}

          {unplaced.length > 0 && (
            <Section eyebrow="More" title="Other projects">
              <Grid list={unplaced} />
            </Section>
          )}

          <section className="mt-16">
            <button
              type="button"
              onClick={() => setShowArchive((v) => !v)}
              aria-expanded={showArchive}
              className="card group flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left hover:border-line-strong"
            >
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">Earlier work</span>
                <span className="mt-1 block font-semibold">
                  {showArchive ? "Hide" : "Show"} {archive.length} earlier projects
                </span>
                <span className="mt-0.5 block text-sm text-muted">{archive.map((p) => p.name).join(" · ")}</span>
              </span>
              <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform duration-300", showArchive && "rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
              {showArchive && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                  <div className="pt-6">
                    <Grid list={archive} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </>
      )}
    </LayoutGroup>
  );
}
