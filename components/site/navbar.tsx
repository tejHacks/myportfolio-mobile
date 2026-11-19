"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";
import { BatteryIndicator } from "./battery-indicator";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";

export const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openPalette = () => window.dispatchEvent(new Event("open-command-palette"));

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2">
        Skip to content
      </a>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-[border-color,background-color] duration-300",
          scrolled ? "border-b border-line backdrop-blur-xl" : "border-b border-transparent",
        )}
        style={{
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          paddingTop: "env(safe-area-inset-top)",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        }}
      >
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.name}, home`}>
            <span className="bg-gradient-accent grid h-8 w-8 place-items-center rounded-lg font-mono text-xs font-bold text-white shadow-[0_6px_20px_-6px_rgb(37_99_235/0.6)] transition-transform group-hover:rotate-[-6deg]">
              OO
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Olateju</span>
          </Link>

          {/* Desktop links with animated active pill */}
          <ul className="hidden items-center gap-0.5 rounded-full border border-line bg-card/60 p-1 backdrop-blur md:flex">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                      active ? "text-white" : "text-muted hover:text-fg",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="bg-gradient-accent absolute inset-0 rounded-full"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile keeps the centre of the bar clear (Dynamic Island / notch):
              only the battery and the menu sit on the right, like iOS's own status bar. */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openPalette}
              className="hidden h-9 items-center gap-1.5 rounded-full border border-line bg-card px-3 font-mono text-xs text-muted transition-colors hover:text-fg sm:flex"
              aria-label="Open command palette"
            >
              <Command className="h-3.5 w-3.5" /> K
            </button>
            <ThemeToggle className="hidden md:grid" />
            <BatteryIndicator className="order-last md:order-first" />
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-bg/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.ul
              className="relative mx-4 mt-[calc(5rem+env(safe-area-inset-top))] space-y-1 rounded-3xl border border-line bg-card p-3 shadow-[var(--shadow-lift)]"
              initial={{ y: -16, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: ease.outExpo, staggerChildren: 0.04 } }}
              exit={{ y: -12, opacity: 0, transition: { duration: 0.2 } }}
            >
              {nav.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <motion.li key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.05 + i * 0.04 } }}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium",
                        active ? "bg-gradient-accent text-white" : "text-fg hover:bg-bg",
                      )}
                    >
                      {item.label}
                      <span className="font-mono text-xs opacity-60">0{i + 1}</span>
                    </Link>
                  </motion.li>
                );
              })}
              <li className="mt-2 flex items-center justify-between border-t border-line px-4 pt-3 pb-1">
                <span className="text-sm text-muted">Appearance</span>
                <ThemeToggle />
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
