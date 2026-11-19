"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Bell, Check, Download, ExternalLink, Github, Hammer, History, MessageCircle, TrendingUp, Trophy } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";
import { StatusBadge, TechPill, buttonVariants } from "@/components/shared/ui";
import { AppIcon, ProjectMockup } from "./project-mockup";
import { Gallery } from "./gallery";
import { ProjectCard } from "./project-card";
import { ease } from "@/lib/motion";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const linkMeta = {
  live: { label: "Live", icon: ExternalLink },
  playStore: { label: "Google Play", icon: ExternalLink },
  appStore: { label: "App Store", icon: ExternalLink },
  apkPure: { label: "APKPure", icon: ExternalLink },
  apk: { label: "Download APK", icon: Download },
  github: { label: "GitHub", icon: Github },
  caseStudy: { label: "Case study", icon: ArrowUpRight },
} as const;

export function ProjectDetail({ project, related }: { project: Project; related: Project[] }) {
  const links = (Object.keys(linkMeta) as (keyof typeof linkMeta)[]).filter((k) => project.links[k]);
  const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.outExpo } } };

  return (
    <article className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 md:pt-12">
      <Link href="/projects" className="group mb-10 inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> All projects
      </Link>

      {/* Hero */}
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          <motion.div variants={item} className="mb-6 flex flex-wrap items-center gap-3">
            <AppIcon project={project} size={56} />
            <StatusBadge status={project.status} />
          </motion.div>
          <motion.p variants={item} className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">{project.eyebrow}</motion.p>
          <motion.h1 variants={item} className="mt-3 text-5xl font-bold tracking-[-0.04em] md:text-7xl">
            {project.name}
          </motion.h1>
          <motion.p variants={item} className="mt-5 max-w-xl text-xl leading-snug text-muted md:text-2xl">{project.tagline}</motion.p>

          {project.metrics && (
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {project.metrics.map((m) => (
                <span key={m} className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-text">
                  <TrendingUp className="h-3.5 w-3.5" aria-hidden /> {m}
                </span>
              ))}
            </motion.div>
          )}

          {project.competitions && (
            <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-subtle"><Trophy className="h-3.5 w-3.5 text-amber" /> Recognition</span>
              {project.competitions.map((c) => (
                <span key={c.name} className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 font-mono text-xs text-amber">{c.name}</span>
              ))}
            </motion.div>
          )}

          {links.length > 0 && (
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              {links.map((k, i) => {
                const { label, icon: Icon } = linkMeta[k];
                return (
                  <a key={k} href={project.links[k]} target="_blank" rel="noopener noreferrer" className={cn(i === 0 ? buttonVariants.primary : buttonVariants.secondary)}>
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: 0, transition: { duration: 1, delay: 0.2, ease: ease.outExpo } }}
          className="relative flex justify-center py-6"
        >
          <div aria-hidden className="absolute inset-0 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${project.color}40, transparent 65%)` }} />
          <ProjectMockup project={project} className="w-56 max-w-none" priority />
        </motion.div>
      </div>

      <InProgressBanner project={project} />

      {/* Story */}
      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {[
          { t: "Overview", c: project.overview },
          { t: "The problem", c: project.problem },
          { t: "What I built", c: project.solution },
        ].map((s, i) => (
          <Reveal key={s.t} delay={i * 0.08} className="card rounded-3xl p-6 md:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">0{i + 1} · {s.t}</p>
            <p className="mt-4 leading-relaxed text-muted">{s.c}</p>
          </Reveal>
        ))}
      </div>

      {/* Features + stack */}
      <div className="mt-5 grid gap-5 md:grid-cols-[1.3fr_1fr]">
        <Reveal className="card rounded-3xl p-6 md:p-8">
          <h2 className="text-xl font-bold tracking-tight">Key features</h2>
          <ul className="mt-5 space-y-3">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-muted">
                <span className="bg-gradient-accent mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white"><Check className="h-3 w-3" /></span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08} className="card rounded-3xl p-6 md:p-8">
          <h2 className="text-xl font-bold tracking-tight">Tech stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => <TechPill key={t} className="px-2.5 py-1 text-xs">{t}</TechPill>)}
          </div>
          {project.origins && (
            <div className="mt-8 rounded-2xl border border-dashed border-line-strong p-4">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle"><History className="h-3.5 w-3.5" /> Origins</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.origins}</p>
            </div>
          )}
        </Reveal>
      </div>

      {/* Gallery */}
      <Reveal className="mt-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">Screens</h2>
        <Gallery project={project} />
      </Reveal>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Keep exploring</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}><ProjectCard project={p} /></Reveal>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

/** Shown on in-development projects: what's happening and how to follow it. */
function InProgressBanner({ project }: { project: Project }) {
  if (project.status !== "in-development") return null;
  const notify = `mailto:${site.email}?subject=${encodeURIComponent(`Notify me when ${project.name} launches`)}&body=${encodeURIComponent(
    `Hi Olateju,\n\nPlease let me know when ${project.name} is ready to try.\n\nThanks!`,
  )}`;

  return (
    <Reveal className="mt-14">
      <div className="card relative overflow-hidden rounded-3xl p-6 md:p-8" style={{ borderColor: `${project.color}55` }}>
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl" style={{ background: `${project.color}30` }} />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              <Hammer className="h-3.5 w-3.5" style={{ color: project.color }} aria-hidden /> In active development
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{project.name} is being built right now.</h2>
            <p className="mt-3 leading-relaxed text-muted">
              {project.links.github
                ? `It runs today in development builds, and the screenshots here come from it. The source code is on GitHub; a public download is next.`
                : `It runs today in development builds and is being tested on real devices. The source code and a public download are next.`}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
            <a href={notify} className={buttonVariants.primary}>
              <Bell className="h-4 w-4" /> Get notified
            </a>
            <Link href="/contact" className={buttonVariants.secondary}>
              <MessageCircle className="h-4 w-4" /> Ask about it
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
