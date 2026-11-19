import { marqueeTech } from "@/data/skills";

/** Infinite CSS marquee of the stack. Pauses on hover. */
export function TechMarquee() {
  const row = [...marqueeTech, ...marqueeTech];
  return (
    <div className="mask-fade-x group flex overflow-hidden py-1" aria-label="Technologies I work with">
      <ul className="animate-marquee flex shrink-0 gap-3 pr-3 group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= marqueeTech.length} className="shrink-0 rounded-full border border-line bg-bg px-4 py-2 font-mono text-xs text-muted">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
