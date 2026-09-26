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

export function useOverlayMotion(open: boolean) {
  return createOverlayMotion({
    open,
    reducedMotion: usePrefersReducedMotion(),
  });
}

export function usePanelMotion(
  open: boolean,
  options?: {
    fromScale?: number;
    center?: boolean;
    spring?: "panel" | "menu";
  },
) {
  return createPanelMotion({
    open,
    reducedMotion: usePrefersReducedMotion(),
    ...options,
  });
}

export function usePressMotion(disabled = false) {
  return createPressMotion({
    reducedMotion: usePrefersReducedMotion(),
    disabled,
  });
}

export function useIconRotateMotion(open: boolean) {
  return createIconRotateMotion({
    open,
    reducedMotion: usePrefersReducedMotion(),
  });
}

export { useReducedMotion };
