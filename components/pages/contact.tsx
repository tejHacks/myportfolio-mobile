"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Check, Copy, FileText, Github, Linkedin, Mail, MapPin, MessageSquare, Phone, Send, Twitter } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { buttonVariants } from "@/components/shared/ui";
import { site, socials } from "@/data/site";
import { cn } from "@/lib/utils";

const icons = { mail: Mail, github: Github, linkedin: Linkedin, twitter: Twitter, medium: MessageSquare } as const;

/**
 * Form delivery: if NEXT_PUBLIC_FORMSPREE_ID is set, messages are POSTed to
 * Formspree. Otherwise the visitor's mail app opens with everything prefilled.
 */
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const float = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] as const } },
});

function Field({ i, label, children }: { i: number; label: string; children: React.ReactNode }) {
  return (
    <motion.label {...float(i)} className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{label}</span>
      {children}
    </motion.label>
  );
}

const inputCls = "w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-sm outline-none transition-[border-color,box-shadow] placeholder:text-subtle focus:border-blue focus:shadow-[0_0_0_4px_rgb(37_99_235/0.15)]";

export function ContactPage() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    setState("sending");

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { method: "POST", headers: { Accept: "application/json" }, body: data });
        setState(res.ok ? "sent" : "error");
      } catch {
        setState("error");
      }
      return;
    }

    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => setState("sent"), 400);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 md:pt-20">
      <PageHeader
        page="contact"
        eyebrow="Contact"
        title={<>Let&apos;s build <span className="text-gradient">something useful.</span></>}
        intro={
          <>
            <p>Have an idea, a product to build, or an interesting problem worth solving? I&apos;m always open to conversations around mobile development, software engineering, and new products.</p>
          </>
        }
      />

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Form */}
        <div className="card relative overflow-hidden rounded-3xl p-6 md:p-8">
          <AnimatePresence mode="wait">
            {state === "sent" ? (
              <motion.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
                <motion.svg width="88" height="88" viewBox="0 0 88 88" aria-hidden>
                  <motion.circle cx="44" cy="44" r="40" fill="none" stroke="var(--accent-emerald)" strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} />
                  <motion.path d="M28 45 L40 57 L61 34" fill="none" stroke="var(--accent-emerald)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45, delay: 0.5, ease: "easeOut" }} />
                </motion.svg>
                <h2 className="mt-6 text-2xl font-bold tracking-tight">{FORMSPREE_ID ? "Message sent." : "Your mail app is ready."}</h2>
                <p className="mt-2 max-w-sm text-sm text-muted">{FORMSPREE_ID ? "Thank you — I usually reply within 24 hours." : "Just hit send there and it lands straight in my inbox. I usually reply within 24 hours."}</p>
                <button onClick={() => setState("idle")} className="mt-6 text-sm text-muted underline-offset-4 hover:text-fg hover:underline">Send another</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -10 }} className="space-y-5">
                <motion.h2 {...float(0)} className="text-2xl font-bold tracking-tight">Tell me what you&apos;re building.</motion.h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field i={1} label="Name"><input name="name" required autoComplete="name" placeholder="Your name" className={inputCls} /></Field>
                  <Field i={2} label="Email"><input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputCls} /></Field>
                </div>
                <Field i={3} label="Message">
                  <textarea name="message" required rows={6} placeholder="Whether it's an MVP, mobile application, technical collaboration, or something completely experimental — send it my way." className={cn(inputCls, "resize-y")} />
                </Field>
                <motion.div {...float(4)} className="flex flex-wrap items-center gap-4">
                  <Magnetic>
                    <button type="submit" disabled={state === "sending"} className={cn(buttonVariants.primary, "disabled:opacity-60")}>
                      <Send className="h-4 w-4" /> {state === "sending" ? "Sending…" : "Send message"}
                    </button>
                  </Magnetic>
                  {state === "error" && <p className="text-sm text-red-500" role="alert">Something went wrong. Email me directly at {site.email}.</p>}
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Details */}
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
            { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
            { icon: MapPin, label: "Based in", value: site.location },
            { icon: Send, label: "Response time", value: "Usually within 24 hours" },
          ].map((d, i) => {
            const inner = (
              <>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-bg"><d.icon className="h-4 w-4 text-blue" /></span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-subtle">{d.label}</span>
                  <span className="block truncate text-sm">{d.value}</span>
                </span>
              </>
            );
            return (
              <motion.div key={d.label} {...float(i + 1)}>
                {d.href ? (
                  <a href={d.href} className="card flex items-center gap-4 rounded-2xl p-4 hover:border-line-strong">{inner}</a>
                ) : (
                  <div className="card flex items-center gap-4 rounded-2xl p-4">{inner}</div>
                )}
              </motion.div>
            );
          })}
          <motion.div {...float(5)} className="card rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <BriefcaseBusiness className="mt-0.5 h-5 w-5 text-emerald-text" />
              <div>
                <p className="text-sm font-semibold">Currently available</p>
                <p className="mt-1 text-sm text-muted">Open to new projects, collaborations and interesting technical problems.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Socials */}
      <Reveal as="section" className="mt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Find me online</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">Around the web</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {socials.map((s) => {
            const Icon = icons[s.icon];
            return (
              <div key={s.name} className="flex gap-2">
                <a href={s.href} {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="card group flex min-w-0 flex-1 items-center gap-4 rounded-2xl p-4 hover:border-line-strong">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-bg"><Icon className="h-4 w-4" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{s.name}</span>
                    <span className="block truncate text-xs text-muted">{s.username}</span>
                    <span className="hidden truncate text-[11px] text-subtle sm:block">{s.description}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                {s.copyable && (
                  <button onClick={() => copy(s.username, s.name)} aria-label={`Copy ${s.name}`} className={cn("card grid w-14 shrink-0 place-items-center rounded-2xl", copied === s.name ? "text-emerald-text" : "text-subtle hover:text-fg")}>
                    {copied === s.name ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                )}
              </div>
            );
          })}
          <a href={site.resume} download="Olateju_Olamide_Resume.pdf" className="card group flex items-center gap-4 rounded-2xl p-4 hover:border-line-strong">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-bg"><FileText className="h-4 w-4" /></span>
            <span className="flex-1 text-sm font-medium">Résumé (PDF)</span>
            <ArrowUpRight className="h-4 w-4 text-subtle" />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
