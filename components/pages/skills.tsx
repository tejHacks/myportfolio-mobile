"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Server, Smartphone, Sparkles } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Eyebrow } from "@/components/shared/ui";
import { pillars, toolbox, toolboxCategories, type ToolboxId } from "@/data/skills";
import { projectsUsing } from "@/data/projects";
import { cn } from "@/lib/utils";

const pillarIcons = { mobile: Smartphone, ai: Brain, backend: Server } as const;

/** Skill chip that reveals "shipped with this" on hover/focus. */
function SkillChip({ name, match, hint }: { name: string; match?: string; hint?: string }) {
  const [open, setOpen] = useState(false);
  const shipped = projectsUsing(match ?? name).slice(0, 4);
  const text = hint ?? (shipped.length ? null : "Part of my everyday toolkit");

  return (
    <li className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-expanded={open}
        className="rounded-full border border-line bg-bg px-3.5 py-1.5 font-mono text-xs transition-colors hover:border-line-strong"
      >
        {name}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className="card absolute bottom-full left-0 z-20 mb-2 w-60 rounded-2xl p-3 text-xs"
          >
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-subtle">Shipped with this</p>
            {text ? (
              <p className="text-muted">{text}</p>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {shipped.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="rounded-md bg-bg px-2 py-0.5 text-fg hover:text-blue">{p.name}</Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function SkillsPage() {
  const [active, setActive] = useState<ToolboxId>("mobile");
  const cat = toolboxCategories.find((c) => c.id === active)!;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-20">
      <PageHeader
        page="skills"
        eyebrow="The toolbox"
        title={<>I don&apos;t collect <span className="text-subtle">technologies.</span></>}
        intro={<p>I learn what the problem demands, then use the right tools to build the thing. My strongest territory is mobile development, but I&apos;m comfortable moving across the stack when the product needs it.</p>}
      />

      {/* Pillars — card cascade */}
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => {
          const Icon = pillarIcons[p.id as keyof typeof pillarIcons];
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 60, rotate: -3 + i * 3 }}
              animate={{ opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] } }}
            >
              <TiltCard glow={p.accent} max={5} className="rounded-3xl">
                <div className="card flex h-full flex-col rounded-3xl p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl text-white" style={{ background: p.accent }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-8 text-2xl font-bold tracking-tight">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.skills.map((s) => <SkillChip key={s.name} {...s} />)}
                  </ul>
                  <p className="mt-auto pt-6 font-mono text-[10px] text-subtle">Hover a skill to see what shipped with it</p>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      {/* Full toolbox */}
      <Reveal as="section" className="mt-24">
        <Eyebrow className="mb-3">Current stack</Eyebrow>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Technologies I work with</h2>
        <div role="tablist" className="mt-8 flex flex-wrap gap-2">
          {toolboxCategories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              onClick={() => setActive(c.id)}
              className={cn("relative rounded-full px-4 py-2 text-sm transition-colors", active === c.id ? "text-bg" : "border border-line text-muted hover:text-fg")}
            >
              {active === c.id && <motion.span layoutId="toolbox-pill" className="absolute inset-0 rounded-full bg-fg" />}
              <span className="relative">{c.label} <span className="font-mono text-[10px] opacity-60">{toolbox[c.id].length}</span></span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="card rounded-3xl p-7 md:p-9">
              <Eyebrow>{cat.eyebrow}</Eyebrow>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">{cat.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{cat.description}</p>
            </div>
            <div className="card rounded-3xl p-7 md:p-9">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {toolbox[active].map((s, i) => (
                  <motion.li
                    key={s.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.03 } }}
                    className="flex items-center gap-3 rounded-2xl border border-line bg-bg px-4 py-3 text-sm"
                  >
                    <span className={cn("h-1.5 w-1.5 rounded-full", s.level === "core" ? "bg-emerald" : "bg-line-strong")} />
                    {s.name}
                    {s.level === "core" && <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-emerald-text">Core</span>}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 flex gap-5 border-t border-line pt-5 text-xs text-subtle">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Core</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-line-strong" /> Working knowledge</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Reveal>

      <Reveal as="section" className="mt-24 grid items-end gap-8 border-y border-line py-14 md:grid-cols-[1fr_auto]">
        <div>
          <Eyebrow className="mb-5 flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> More important than the stack</Eyebrow>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Give me a problem worth solving.<span className="text-subtle"> The technology comes after.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted">Good software isn&apos;t a collection of impressive tools. It&apos;s a useful answer to a real problem.</p>
      </Reveal>
    </div>
  );
}
