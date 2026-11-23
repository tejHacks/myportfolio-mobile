"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { scriptureOfTheDay, type Scripture } from "@/data/greetings";
import { latestArticles } from "@/data/writing";
import { projects } from "@/data/projects";
import { Aurora } from "@/components/site/aurora";
import { Magnetic } from "@/components/motion/magnetic";
import { Counter } from "@/components/motion/counter";
import { buttonVariants } from "@/components/shared/ui";
import { popIn, stagger } from "@/lib/motion";
import { GreetingRotator } from "./greeting-rotator";
import { TerminalCard } from "./terminal-card";
import { FeaturedCarousel } from "./featured-carousel";
import { TechMarquee } from "./tech-marquee";

const Cell = motion.div;

/** Home: staggered hero + bento pop-in. */
export function HomeBento() {
  // Scripture of the day is chosen on the client to match the visitor's date.
  const [scripture, setScripture] = useState<Scripture | null>(null);
  useEffect(() => setScripture(scriptureOfTheDay()), []);

  const shipped = projects.length;

  return (
    <section className="relative">
      <Aurora className="-top-16 h-[120vh]" />
      <motion.div
        variants={stagger(0.08, 0.05)}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pt-8 sm:px-6 md:grid-cols-6 md:pt-12 lg:grid-cols-12"
      >
        {/* Greeting / hero */}
        <Cell variants={popIn} className="card glass relative overflow-hidden rounded-3xl p-6 sm:p-9 md:col-span-6 lg:col-span-8 lg:row-span-2">
          <GreetingRotator />
          <h1 className="mt-2 text-[clamp(3.2rem,8vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.055em]">
            Olateju <span className="text-subtle">Olamide.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-2xl leading-[1.15] tracking-[-0.03em] md:text-3xl">
            I build things that move from <span className="text-gradient font-semibold">idea</span> to{" "}
            <span className="text-gradient font-semibold">reality.</span>
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">{site.subStatement}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Magnetic>
              <Link href="/projects" className={buttonVariants.primary}>
                Explore my work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/contact" className={buttonVariants.secondary}>
                <Mail className="h-4 w-4" /> Start a conversation
              </Link>
            </Magnetic>
          </div>
        </Cell>

        {/* Profile */}
        <Cell variants={popIn} className="card relative aspect-[4/5] overflow-hidden rounded-3xl md:col-span-3 md:aspect-auto md:min-h-[380px] lg:col-span-4">
          <Image src="/profile-photo.jpeg" alt={site.name} fill priority sizes="(min-width:1024px) 380px, 100vw" className="object-cover object-[50%_55%]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="absolute bottom-5 left-5 flex items-center gap-1.5 text-xs text-white/90"><MapPin className="h-3.5 w-3.5" /> Building from {site.location}</p>
        </Cell>

        {/* Terminal */}
        <Cell variants={popIn} className="min-h-[220px] md:col-span-3 lg:col-span-4">
          <TerminalCard />
        </Cell>

        {/* Featured carousel */}
        <Cell variants={popIn} className="md:col-span-3 lg:col-span-4">
          <FeaturedCarousel />
        </Cell>

        {/* Scripture reminder */}
        <Cell variants={popIn} className="card relative flex flex-col overflow-hidden rounded-3xl p-6 md:col-span-3 lg:col-span-4">
          <div aria-hidden className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl" style={{ background: "var(--aurora-2)" }} />
          <p className="relative flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
            <BookOpen className="h-3.5 w-3.5 text-emerald-text" /> A small reminder
            {scripture && <span className="rounded-full border border-line px-2 py-0.5 text-[9px]">{scripture.theme}</span>}
          </p>
          <blockquote className="relative mt-5 font-serif text-xl leading-snug tracking-tight md:text-2xl">
            {scripture ? `“${scripture.text}”` : <span className="inline-block h-16" />}
          </blockquote>
          {scripture && <p className="relative mt-auto pt-4 font-mono text-xs text-emerald-text">— {scripture.reference}</p>}
        </Cell>

        {/* Latest writing */}
        <Cell variants={popIn} className="card flex flex-col rounded-3xl p-6 md:col-span-6 lg:col-span-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">Latest writing</p>
            <Link href="/writing" className="text-xs text-muted hover:text-fg">All →</Link>
          </div>
          <ul className="mt-4 divide-y divide-line">
            {latestArticles(3).map((a) => (
              <li key={a.id}>
                <a href={a.url} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-3 py-3">
                  <span>
                    <span className="block text-sm font-medium leading-snug group-hover:text-blue">{a.title}</span>
                    <span className="mt-1 block font-mono text-[11px] text-subtle">{a.dateLabel} · {a.readTime}</span>
                  </span>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </Cell>

        {/* Stats */}
        {[
          { to: 4, suffix: "+", label: "Years building" },
          { to: shipped, suffix: "", label: "Products built" },
          { to: 12, suffix: "+", label: "Technical articles" },
        ].map((s) => (
          <Cell key={s.label} variants={popIn} className="card rounded-3xl p-6 md:col-span-2 lg:col-span-4">
            <p className="text-gradient text-5xl font-bold tracking-tight"><Counter to={s.to} suffix={s.suffix} /></p>
            <p className="mt-2 font-mono text-xs text-subtle">{s.label}</p>
          </Cell>
        ))}

        {/* Marquee */}
        <Cell variants={popIn} className="card overflow-hidden rounded-3xl py-4 md:col-span-6 lg:col-span-12">
          <TechMarquee />
        </Cell>
      </motion.div>
    </section>
  );
}
