"use client";

import { useReducedMotion } from "motion/react";

import {
  createIconRotateMotion,
  createOverlayMotion,
  createPanelMotion,
  createPressMotion,
} from "@/lib/motion";

function usePrefersReducedMotion() {
  return Boolean(useReducedMotion());
}

/** Overlay fade (backdrop). Respects prefers-reduced-motion. */
export function useOverlayMotion(open: boolean) {
  return createOverlayMotion({
    open,
    reducedMotion: usePrefersReducedMotion(),
  });
}

/** Popup / dialog enter-exit. Respects prefers-reduced-motion. */
export function usePanelMotion(
  open: boolean,
  options?: { fromScale?: number; center?: boolean },
) {
  return createPanelMotion({
    open,
    reducedMotion: usePrefersReducedMotion(),
    ...options,
  });
}

/** Button hover/press. Respects prefers-reduced-motion. */
export function usePressMotion(disabled = false) {
  return createPressMotion({
    reducedMotion: usePrefersReducedMotion(),
    disabled,
  });
}

/** Icon rotate (accordion chevron). Respects prefers-reduced-motion. */
export function useIconRotateMotion(open: boolean) {
  return createIconRotateMotion({
    open,
    reducedMotion: usePrefersReducedMotion(),
  });
}

export { useReducedMotion };
