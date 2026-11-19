"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp, Trophy } from "lucide-react";
import type { Project } from "@/data/projects";
import { TiltCard } from "@/components/motion/tilt-card";
import { StatusBadge, TechPill } from "@/components/shared/ui";
import { AppIcon, ProjectMockup } from "./project-mockup";
import { cn } from "@/lib/utils";

/**
 * Project card: gradient stage with phone mockup, title, tagline, tech pills,
 * status, and "Explore" → detail page.
 */
export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <TiltCard glow={project.color} className="rounded-3xl">
      <Link
        href={`/projects/${project.slug}`}
        className={cn("card group relative flex h-full flex-col overflow-hidden rounded-3xl hover:border-line-strong", large && "md:flex-row")}
        aria-label={`Explore ${project.name}`}
      >
        {/* Stage */}
        <div
          className={cn("relative flex items-start justify-center overflow-hidden pt-12", large ? "h-64 md:h-auto md:w-[46%]" : "h-56")}
          style={{ background: `radial-gradient(120% 90% at 50% 0%, ${project.color}33, transparent 70%), linear-gradient(180deg, ${project.color}14, transparent)` }}
        >
          <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
          <ProjectMockup project={project} className={cn("transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2", large && "md:w-[52%] md:max-w-[210px]")} />
          <StatusBadge status={project.status} className="absolute left-4 top-4 backdrop-blur" />
        </div>

        {/* Body */}
        <div className={cn("flex flex-1 flex-col p-5 md:p-6", large && "md:p-9")}>
          <div className="mb-3 flex items-center gap-3">
            <AppIcon project={project} size={large ? 48 : 38} />
            <div className="min-w-0">
              <p className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">{project.eyebrow}</p>
              <h3 className={cn("font-bold tracking-tight", large ? "text-3xl" : "text-xl")}>
                {project.name}
              </h3>
            </div>
          </div>

          <p className={cn("leading-relaxed text-muted", large ? "text-lg" : "line-clamp-3 text-sm")}>{project.tagline}</p>
          {large && <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.overview}</p>}

          {project.metrics && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {project.metrics.map((m) => (
                <span key={m} className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-text">
                  <TrendingUp className="h-3 w-3" aria-hidden /> {m}
                </span>
              ))}
            </div>
          )}


          {project.competitions && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Trophy className="h-3.5 w-3.5 text-amber" aria-hidden />
              {project.competitions.map((c) => (
                <span key={c.name} className="rounded-full border border-amber/30 bg-amber/10 px-2.5 py-0.5 font-mono text-[10px] text-amber">{c.name}</span>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.slice(0, large ? 6 : 3).map((t) => (
              <TechPill key={t}>{t}</TechPill>
            ))}
            {project.tech.length > (large ? 6 : 3) && <TechPill>+{project.tech.length - (large ? 6 : 3)}</TechPill>}
          </div>

          <div className="mt-auto flex items-center justify-between pt-6">
            <span className="text-sm font-semibold">Explore</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-fg group-hover:text-bg">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
