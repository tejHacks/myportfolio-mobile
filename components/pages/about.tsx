"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Brain, Layers3, Rocket, Smartphone, Users } from "lucide-react";
import { useRef } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { Magnetic } from "@/components/motion/magnetic";
import { ButtonLink, Eyebrow } from "@/components/shared/ui";
import { site } from "@/data/site";
import { workReminder } from "@/data/greetings";

const stats = [
  { value: 4, suffix: "+", label: "Years building" },
  { value: 12, suffix: "+", label: "Technical articles" },
  { value: 9, suffix: "+", label: "Mobile projects" },
  { value: 2025, suffix: "", label: "Computer Science graduate" },
];

const capabilities = [
  { icon: Smartphone, number: "01", title: "Mobile products", description: "I build mobile experiences with React Native, Expo and TypeScript—from the first screen to the uncomfortable details that appear when real users start using the product." },
  { icon: Layers3, number: "02", title: "Systems behind them", description: "A mobile app is rarely the whole product. I work across APIs, authentication, databases, integrations and backend services so the pieces actually talk to each other." },
  { icon: Brain, number: "03", title: "Intelligent products", description: "I've worked with computer vision and on-device machine learning, including TensorFlow Lite and medical-image classification. I enjoy the difficult space where software meets messy real-world problems." },
  { icon: Rocket, number: "04", title: "From idea to something real", description: "I don't want to be handed a Figma file and disappear into a ticket queue. I want to understand the problem, challenge assumptions, build, test, ship and improve." },
];

export function AboutPage() {
  const timeline = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timeline, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-20">
      <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <PageHeader
          page="about"
          eyebrow="About the engineer"
          title={<>I like building <span className="text-subtle">things that matter.</span></>}
          intro={
            <>
              <p>
                I&apos;m Olateju, a mobile-focused software engineer who enjoys taking an idea from <span className="text-fg">“what if?”</span> to{" "}
                <span className="text-fg">“it&apos;s working.”</span>
              </p>
              <p className="mt-4 text-base text-subtle">
                I care about the product, not just the pull request. Who is using it? What problem are we solving? Can it scale? Can someone maintain it six months from now? And, perhaps most importantly, is it worth building in the first place?
              </p>
            </>
          }
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
          className="relative mx-auto mb-14 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-line md:mb-20"
        >
          <Image src="/profile-photo.jpeg" alt={site.name} fill sizes="380px" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 flex items-center gap-2 text-xs text-white/85">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald" /> Building from {site.location}
          </p>
        </motion.div>
      </div>

      {/* Philosophy */}
      <Reveal as="section" className="grid gap-10 border-t border-line py-20 md:grid-cols-[0.35fr_0.65fr]">
        <Eyebrow>The short version</Eyebrow>
        <div>
          <p className="text-2xl leading-tight tracking-tight md:text-4xl">I&apos;m not interested in being the developer who simply receives requirements and turns them into code.</p>
          <p className="mt-8 leading-relaxed text-muted md:text-lg">
            I want to understand the business behind the build, the people behind the numbers, and the constraints behind the decisions. Sometimes that means writing code. Sometimes it means asking uncomfortable questions before writing any.
          </p>
        </div>
      </Reveal>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="card rounded-3xl p-6 md:p-8">
            <p className="text-3xl font-bold tracking-tight md:text-5xl"><Counter to={s.value} suffix={s.suffix} /></p>
            <p className="mt-2 font-mono text-xs text-subtle">{s.label}</p>
          </Reveal>
        ))}
      </section>

      {/* Capabilities — timeline draw-in */}
      <section className="py-24">
        <Reveal className="mb-14">
          <Eyebrow className="mb-5">What I bring</Eyebrow>
          <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">More than writing code.</h2>
        </Reveal>
        <div ref={timeline} className="relative pl-10 md:pl-16">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-line md:left-[19px]" aria-hidden />
          <motion.div style={{ scaleY }} className="bg-gradient-accent absolute bottom-0 left-[11px] top-0 w-px origin-top md:left-[19px]" aria-hidden />
          <div className="space-y-6">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.number} delay={i * 0.05} className="relative">
                  <span className="absolute -left-10 top-6 grid h-6 w-6 place-items-center rounded-full border border-line bg-bg md:-left-16 md:h-10 md:w-10">
                    <Icon className="h-3 w-3 text-blue md:h-4 md:w-4" />
                  </span>
                  <div className="card grid gap-4 rounded-3xl p-6 md:grid-cols-[60px_1fr_1.3fr] md:gap-8 md:p-8">
                    <span className="font-mono text-xs text-subtle">{c.number}</span>
                    <h3 className="text-2xl font-semibold tracking-tight">{c.title}</h3>
                    <p className="leading-relaxed text-muted">{c.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working style */}
      <Reveal as="section" className="grid gap-12 border-t border-line py-20 lg:grid-cols-2">
        <div>
          <Eyebrow className="mb-5">How I work</Eyebrow>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Give me a hard problem.</h2>
          <figure className="mt-8 max-w-md border-l-2 border-emerald/50 pl-4">
            <blockquote className="italic text-muted">“{workReminder.text}”</blockquote>
            <figcaption className="mt-1 font-mono text-xs text-emerald-text">— {workReminder.reference}</figcaption>
          </figure>
        </div>
        <div className="space-y-6 leading-relaxed text-muted">
          <p>I&apos;ve learned that real software development isn&apos;t always comfortable. APIs break. Requirements change. The deadline moves closer. A library suddenly stops behaving. Production finds the bug your emulator never did.</p>
          <p>That&apos;s part of the job.</p>
          <p>I enjoy learning under pressure, figuring things out, and staying with a problem long enough to understand it properly. I&apos;m still growing—and I think that&apos;s a strength when it&apos;s paired with curiosity, discipline and the willingness to take responsibility.</p>
        </div>
      </Reveal>

      {/* Closing */}
      <Reveal as="section" className="py-20 text-center">
        <Users className="mx-auto mb-8 h-7 w-7 text-subtle" />
        <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
          Maybe you&apos;re building something.
          <br />
          <span className="text-gradient">Maybe we should build it together.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl leading-relaxed text-muted">
          Whether you&apos;re a founder with an idea, a team with a difficult mobile problem, or another developer who wants to build something ambitious—I like good problems and good people.
        </p>
        <Magnetic className="mt-9 inline-block">
          <ButtonLink href="/contact">Start a conversation <ArrowRight className="h-4 w-4" /></ButtonLink>
        </Magnetic>
      </Reveal>
    </div>
  );
}
