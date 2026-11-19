/**
 * Motion tokens — mirror of the CSS easing/duration tokens in app/globals.css.
 * Everything animates transform/opacity only so it stays on the compositor.
 */
import type { Transition, Variants } from "framer-motion";

export const ease = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  smooth: [0.22, 1, 0.36, 1] as const,
};

export const duration = {
  fast: 0.15,
  base: 0.3,
  slow: 0.6,
  page: 0.5,
};

export const spring: Transition = { type: "spring", stiffness: 380, damping: 32 };
export const softSpring: Transition = { type: "spring", stiffness: 160, damping: 20, mass: 0.6 };

/** Parent that staggers its children. */
export const stagger = (gap = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren } },
});

/** Generic fade-up child. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.outExpo } },
};

/** Bento "pop-in" child. */
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: ease.outExpo } },
};
