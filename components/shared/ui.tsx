import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Mono tech pill. */
export function TechPill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-[11px] text-muted", className)}>
      {children}
    </span>
  );
}


export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("font-mono text-[11px] uppercase tracking-[0.25em] text-subtle", className)}>{children}</p>;
}

/** Availability badge with a live pulse. */
export function AvailabilityBadge({ text, className }: { text: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 rounded-full border border-emerald/30 bg-emerald/10 px-3.5 py-1.5 text-xs font-medium text-emerald-text", className)}>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
      </span>
      {text}
    </span>
  );
}

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,background-color,border-color,box-shadow] duration-300 active:scale-[0.98]";
export const buttonVariants = {
  primary: cn(buttonBase, "bg-fg text-bg shadow-[0_10px_30px_-10px_rgb(37_99_235/0.55)] hover:shadow-[0_14px_40px_-10px_rgb(16_185_129/0.6)]"),
  secondary: cn(buttonBase, "border border-line bg-card text-fg hover:border-line-strong"),
};

export function ButtonLink({ variant = "primary", className, ...props }: ComponentProps<typeof Link> & { variant?: keyof typeof buttonVariants }) {
  return <Link className={cn(buttonVariants[variant], className)} {...props} />;
}
