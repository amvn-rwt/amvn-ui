export const spring = {
  /** Micro interactions: chevrons, icons */
  micro: { type: "spring", stiffness: 400, damping: 22, mass: 0.6 },
  /** Pressable feedback: buttons */
  press: { type: "spring", stiffness: 500, damping: 18, mass: 0.5 },
  /** Overlays/backdrops — snappy, no bounce */
  overlay: { type: "spring", stiffness: 500, damping: 40, mass: 0.8 },
  /** Panels, dialogs, sheets */
  panel: { type: "spring", stiffness: 420, damping: 28, mass: 0.8 },
  /** Layout size changes (height expand/collapse) */
  layout: { type: "spring", stiffness: 380, damping: 36, mass: 0.8 },
} as const;

export const tween = {
  fade: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const },
} as const;

/** Durations in seconds — keep in sync with --duration-* in globals.css */
export const duration = {
  fast: 0.15,
  normal: 0.2,
  slow: 0.3,
} as const;
