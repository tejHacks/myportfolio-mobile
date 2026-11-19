import Link from "next/link";
import { nav, site, socials } from "@/data/site";
import { workReminder } from "@/data/greetings";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-subtle">A standing reminder</p>
          <blockquote className="mt-3 max-w-md text-lg leading-snug tracking-tight">
            “{workReminder.text}”
          </blockquote>
          <p className="mt-2 font-mono text-xs text-emerald-text">— {workReminder.reference}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-subtle">Pages</p>
          <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-muted transition-colors hover:text-fg">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-subtle">Elsewhere</p>
          <ul className="mt-3 space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-muted transition-colors hover:text-fg">
                  {s.name}
                </a>
              </li>
            ))}
            <li>
              <a href={site.resume} download="Olateju_Olamide_Emmanuel_Resume.pdf" className="text-muted transition-colors hover:text-fg">Résumé (PDF)</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-10 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} {site.name}. Built from {site.location}.</p>
        <p>Built with React, TypeScript & a questionable amount of coffee.</p>
      </div>
    </footer>
  );
}
