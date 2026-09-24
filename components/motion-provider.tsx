"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/**
 * Opt the tree into Motion's prefers-reduced-motion handling.
 * Default MotionConfig is reducedMotion="never"; without this, springs ignore OS settings.
 *
 * Pair with usePanelMotion / usePressMotion / etc. for value-level safety
 * (e.g. omit scale entirely under reduced motion). This provider is the
 * safety net for any motion.* that forgets a helper.
 */
function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export { MotionProvider };
