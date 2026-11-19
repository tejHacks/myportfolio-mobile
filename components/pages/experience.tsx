"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Calendar, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { useRef } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, TechPill, buttonVariants } from "@/components/shared/ui";
import { education, experiences } from "@/data/experience";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function ExperiencePage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 24 });

  return (
    <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 md:pt-20">
      <PageHeader
        page="experience"
        eyebrow="Experience & growth"
        title={<>I didn&apos;t just learn <span className="text-subtle">how to code.</span> I learned how to build.</>}
        intro={
          <>
            <p>Every role has taught me something different — shipping under pressure, working with other developers, explaining difficult concepts, leading people, and turning an idea that exists on paper into software that exists in the real world.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Mobile-first", "Product-minded", "Comfortable under pressure"].map((t) => (
                <span key={t} className="rounded-full border border-line bg-card px-4 py-1.5 text-sm text-fg">{t}</span>
              ))}
            </div>
          </>
        }
      />

      {/* Line-draw timeline */}
      <section ref={ref} className="relative">
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-1/2" aria-hidden />
        <motion.div style={{ scaleY }} className="bg-gradient-accent absolute bottom-0 left-[7px] top-0 w-[2px] origin-top md:left-1/2 md:-translate-x-[0.5px]" aria-hidden />

        <ol className="space-y-10 md:space-y-16">
          {experiences.map((e, i) => (
            <li key={`${e.company}-${e.period}`} className="relative">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={cn("absolute left-0 top-8 z-10 h-[15px] w-[15px] rounded-full border-[3px] border-bg md:left-1/2 md:-translate-x-1/2", e.current ? "bg-emerald" : "bg-blue")}
                aria-hidden
              />
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={cn("pl-8 md:w-1/2 md:pl-0", i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12")}
              >
                <article className="card rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <h2 className="text-xl font-bold tracking-tight">{e.company}</h2>
                        {e.type && <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-subtle">{e.type}</span>}
                        {e.current && (
                          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-emerald-text">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald" /> Current
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-muted">{e.role}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-subtle" />
                  </div>
                  <div className="mb-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] text-subtle">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {e.period}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {e.location}</span>
                  </div>
                  <p className="mb-5 text-sm leading-7 text-muted">{e.description}</p>
                  <ul className="mb-5 space-y-1.5">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm"><span className="bg-gradient-accent mt-2 h-1 w-1 shrink-0 rounded-full" /> {h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 border-t border-line pt-4">
                    {e.tags.map((t) => <TechPill key={t}>{t}</TechPill>)}
                  </div>
                </article>
              </motion.div>
            </li>
          ))}
        </ol>
      </section>

      <Reveal as="section" className="my-24 text-center md:my-32">
        <Sparkles className="mx-auto mb-5 h-5 w-5 text-blue" />
        <p className="mx-auto max-w-2xl text-2xl font-semibold leading-snug md:text-3xl">
          The common thread?<span className="text-subtle"> I keep moving closer to the product.</span>
        </p>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
          Not just writing the code. Understanding the problem, working with people, making trade-offs, shipping the thing, and learning from what happens after it ships.
        </p>
      </Reveal>

      <Reveal as="section">
        <div className="mb-7 flex items-center gap-3">
          <span className="card grid h-10 w-10 place-items-center rounded-2xl"><GraduationCap className="h-5 w-5" /></span>
          <div>
            <Eyebrow>Foundation</Eyebrow>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
        </div>
        <div className="card rounded-3xl p-6 md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h3 className="text-xl font-bold">{education.degree}</h3>
              <p className="mt-1 text-muted">{education.school}</p>
            </div>
            <p className="flex items-center gap-2 font-mono text-sm text-subtle"><Calendar className="h-4 w-4" /> {education.period}</p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <Eyebrow className="mb-4">Leadership</Eyebrow>
              <ul className="space-y-2.5">
                {education.achievements.map((a) => <li key={a} className="flex items-start gap-3 text-sm text-muted"><span className="mt-2 h-1 w-1 rounded-full bg-subtle" />{a}</li>)}
              </ul>
            </div>
            <div>
              <Eyebrow className="mb-4">Coursework</Eyebrow>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => <TechPill key={c} className="text-xs">{c}</TechPill>)}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href={site.resume} download="Olateju_Olamide_Emmanuel_Resume.pdf" className={buttonVariants.secondary}>
            Download full résumé <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
