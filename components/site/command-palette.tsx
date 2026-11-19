"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, FolderKanban, Search } from "lucide-react";
import { nav } from "@/data/site";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

interface Item {
  id: string;
  label: string;
  hint: string;
  href: string;
}

/** ⌘K / Ctrl+K palette: jump to any page or project. */
export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(
    () => [
      ...nav.map((n) => ({ id: n.href, label: n.label, hint: "Page", href: n.href })),
      ...projects.map((p) => ({ id: p.slug, label: p.name, hint: "Project", href: `/projects/${p.slug}` })),
    ],
    [],
  );

  const results = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  const go = (item?: Item) => {
    if (!item) return;
    setOpen(false);
    router.push(item.href);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[95]" role="dialog" aria-modal="true" aria-label="Command palette">
          <motion.div className="absolute inset-0 bg-bg/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
          <motion.div
            className="card relative mx-auto mt-[15vh] w-[calc(100%-2rem)] max-w-lg overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 34 }}
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
              <Search className="h-4 w-4 text-subtle" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") { e.preventDefault(); setIndex((i) => Math.min(i + 1, results.length - 1)); }
                  if (e.key === "ArrowUp") { e.preventDefault(); setIndex((i) => Math.max(i - 1, 0)); }
                  if (e.key === "Enter") go(results[index]);
                }}
                placeholder="Search or jump to..."
                aria-label="Search pages and projects"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-subtle"
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-subtle">ESC</kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
              {results.length === 0 && <li className="px-3 py-8 text-center text-sm text-subtle">No results found</li>}
              {results.map((item, i) => (
                <li key={item.id} role="option" aria-selected={i === index}>
                  <button
                    type="button"
                    onMouseEnter={() => setIndex(i)}
                    onClick={() => go(item)}
                    className={cn("flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm", i === index ? "bg-bg text-fg" : "text-muted")}
                  >
                    {item.hint === "Project" ? <FolderKanban className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                    <span className="flex-1">{item.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">{item.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
