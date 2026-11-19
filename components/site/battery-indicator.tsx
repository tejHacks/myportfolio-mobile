"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Live device battery: level, charging state and time remaining.
 *
 * Uses the Battery Status API (Chromium browsers: Chrome, Edge, Opera,
 * Samsung Internet, Android). It fires an event the moment the charger is
 * connected or removed and on every 1% change. Safari and Firefox don't
 * expose battery information, so the indicator simply doesn't render there
 * rather than showing a made-up value.
 */

interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
}

declare global {
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }
}

interface BatteryState {
  level: number; // 0–100
  charging: boolean;
  chargingTime: number; // seconds until full, Infinity if unknown
  dischargingTime: number; // seconds until empty, Infinity if unknown
}

const EVENTS = ["levelchange", "chargingchange", "chargingtimechange", "dischargingtimechange"] as const;

function read(b: BatteryManager): BatteryState {
  return {
    level: Math.round(b.level * 100),
    charging: b.charging,
    chargingTime: b.chargingTime,
    dischargingTime: b.dischargingTime,
  };
}

function useBattery() {
  const [state, setState] = useState<BatteryState | null>(null);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.getBattery) {
      setSupported(false);
      return;
    }
    let battery: BatteryManager | null = null;
    let alive = true;
    // One stable handler, so removeEventListener actually removes it.
    const sync = () => {
      if (alive && battery) setState(read(battery));
    };
    const onVisible = () => document.visibilityState === "visible" && sync();

    navigator
      .getBattery()
      .then((b) => {
        if (!alive) return;
        battery = b;
        sync();
        EVENTS.forEach((e) => b.addEventListener(e, sync));
      })
      .catch(() => alive && setSupported(false));

    // Re-read when the tab comes back, in case the OS batched events while hidden.
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", sync);

    return () => {
      alive = false;
      if (battery) EVENTS.forEach((e) => battery!.removeEventListener(e, sync));
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", sync);
    };
  }, []);

  return { state, supported };
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return null;
  const h = Math.floor(seconds / 3600);
  const m = Math.round((seconds % 3600) / 60);
  return h ? `${h}h ${m}m` : `${m}m`;
}

function levelColor(level: number, charging: boolean) {
  if (charging) return "var(--accent-emerald)";
  if (level <= 10) return "#EF4444";
  if (level <= 20) return "#F59E0B";
  return "var(--fg)";
}

export function BatteryIndicator({ className }: { className?: string }) {
  const { state, supported } = useBattery();
  const reduce = useReducedMotion();
  const [flash, setFlash] = useState<string | null>(null);
  const prevCharging = useRef<boolean | null>(null);

  // Brief "Charging" / "On battery" message whenever the charger is connected or removed.
  useEffect(() => {
    if (!state) return;
    if (prevCharging.current !== null && prevCharging.current !== state.charging) {
      setFlash(state.charging ? "Charging" : "On battery");
      const t = window.setTimeout(() => setFlash(null), 2200);
      prevCharging.current = state.charging;
      return () => window.clearTimeout(t);
    }
    prevCharging.current = state.charging;
  }, [state]);

  if (!supported || !state) return null;

  const { level, charging } = state;
  const color = levelColor(level, charging);
  const remaining = charging ? formatTime(state.chargingTime) : formatTime(state.dischargingTime);
  const full = charging && level >= 100;
  const title = full
    ? "Battery full"
    : `Battery ${level}%${charging ? ", charging" : ""}${remaining ? ` · ${remaining} ${charging ? "to full" : "left"}` : ""}`;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={title}
      title={title}
      className={cn("flex h-9 items-center gap-1.5 rounded-full border border-line bg-card px-2.5 font-mono text-xs tabular-nums", className)}
    >
      <AnimatePresence mode="wait" initial={false}>
        {flash ? (
          <motion.span
            key={flash}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="hidden text-[11px] font-semibold sm:inline"
            style={{ color }}
          >
            {flash}
          </motion.span>
        ) : (
          <motion.span key="pct" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} style={{ color }}>
            {level}%
          </motion.span>
        )}
      </AnimatePresence>

      {/* Battery body */}
      <span aria-hidden className="relative flex items-center">
        <span className="relative block h-[11px] w-[22px] overflow-hidden rounded-[3px] border" style={{ borderColor: "var(--fg-muted)" }}>
          <motion.span
            className="absolute inset-y-[1.5px] left-[1.5px] rounded-[1.5px]"
            style={{ backgroundColor: color }}
            initial={false}
            animate={{ width: `calc(${Math.max(level, 4)}% - 3px)` }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
          />
          {charging && !full && !reduce ? (
            <motion.span
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ x: ["-120%", "220%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
          ) : null}
        </span>
        <span className="ml-[1px] block h-[5px] w-[2px] rounded-r-sm" style={{ backgroundColor: "var(--fg-muted)" }} />

        {/* Charging bolt */}
        <AnimatePresence>
          {charging ? (
            <motion.svg
              key="bolt"
              viewBox="0 0 10 14"
              className="absolute left-1/2 top-1/2 h-[10px] w-[8px] -translate-x-[60%] -translate-y-1/2"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              <path d="M6 0 L0 8 H4 L3 14 L10 5 H6 Z" fill="white" stroke="var(--accent-emerald)" strokeWidth="1" strokeLinejoin="round" />
            </motion.svg>
          ) : null}
        </AnimatePresence>
      </span>
    </div>
  );
}
