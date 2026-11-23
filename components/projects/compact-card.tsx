import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { AppIcon } from "./project-mockup";

/** Small tile for secondary work: icon, name, one-line tagline and the main stack. */
export function CompactCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`Explore ${project.name}`}
      className="card group flex h-full flex-col rounded-2xl p-4 transition-colors hover:border-line-strong"
    >
      <div className="flex items-center gap-3">
        <AppIcon project={project} size={40} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold tracking-tight">{project.name}</h3>
          <p className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">{project.tech.slice(0, 2).join(" · ")}</p>
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
      </div>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">{project.tagline}</p>
    </Link>
  );
}
