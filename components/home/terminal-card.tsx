"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

/** Mini terminal that types out what I'm currently focused on. */
export function TerminalCard() {
  const reduce = useReducedMotion();
  const lines = site.currentFocus;
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const full = lines[line];
    if (chars < full.length) {
      const t = window.setTimeout(() => setChars((c) => c + 1), 32);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      setLine((l) => (l + 1) % lines.length);
      setChars(0);
    }, 2200);
    return () => window.clearTimeout(t);
  }, [chars, line, lines, reduce]);

  const text = reduce ? lines[0] : lines[line].slice(0, chars);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#27272a] bg-[#0c0c0f] font-mono text-[13px] text-zinc-300 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-1.5 border-b border-[#27272a] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-zinc-500">olateju@ibadan: ~/now</span>
      </div>
      <div className="flex-1 space-y-2 p-4 leading-relaxed sm:p-5">
        <p><span className="text-emerald-400">$</span> whoami</p>
        <p className="text-zinc-400">{site.role.toLowerCase()}</p>
        <p><span className="text-emerald-400">$</span> cat current_focus.txt</p>
        <p aria-live="polite">
          <span className="text-blue-400">→</span> {text}
          <span className="animate-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-emerald-400" aria-hidden />
        </p>
      </div>
    </div>
  );
}
