"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Phone-frame mockup. Shows the first screenshot when there is one,
 * otherwise a branded gradient "screen" so the card never looks empty.
 */
export function ProjectMockup({ project, className, priority }: { project: Project; className?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const shot = project.screenshots[0];
  const to = project.colorTo ?? "#10B981";

  return (
    <div className={cn("relative mx-auto aspect-[9/19] w-[46%] max-w-[180px] rounded-[1.6rem] border-[5px] border-[#18181b] bg-[#18181b] shadow-[0_30px_60px_-25px_rgb(0_0_0/0.55)]", className)}>
      <div className="absolute left-1/2 top-1.5 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-[#18181b]" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]" style={{ background: `linear-gradient(160deg, ${project.color}, ${to})` }}>
        {shot && !failed ? (
          <Image src={shot} alt={`${project.name} screenshot`} fill sizes="200px" className="object-cover object-top" priority={priority} onError={() => setFailed(true)} />
        ) : (
          <PlaceholderScreen project={project} />
        )}
      </div>
    </div>
  );
}

function PlaceholderScreen({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col justify-between p-3 pt-6 text-white">
      <div className="space-y-1.5">
        <div className="h-1.5 w-10 rounded-full bg-white/40" />
        <div className="text-sm font-bold leading-tight">{project.name}</div>
      </div>
      <div className="space-y-1.5">
        {[80, 60, 70].map((w, i) => (
          <div key={i} className="rounded-lg bg-white/15 p-2 backdrop-blur-sm">
            <div className="h-1.5 rounded-full bg-white/50" style={{ width: `${w}%` }} />
            <div className="mt-1 h-1 w-1/2 rounded-full bg-white/30" />
          </div>
        ))}
      </div>
      <div className="mx-auto h-1 w-10 rounded-full bg-white/60" />
    </div>
  );
}

/** App icon with letter fallback. */
export function AppIcon({ project, size = 44 }: { project: Project; size?: number }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="relative grid shrink-0 place-items-center overflow-hidden rounded-[28%] border border-line text-white"
      style={{ width: size, height: size, background: `linear-gradient(140deg, ${project.color}, ${project.colorTo ?? project.color})` }}
    >
      {project.icon && !failed ? (
        <Image src={project.icon} alt="" fill sizes={`${size}px`} className="object-cover" onError={() => setFailed(true)} />
      ) : (
        <span className="font-bold" style={{ fontSize: size * 0.42 }}>{project.name.charAt(0)}</span>
      )}
    </div>
  );
}
