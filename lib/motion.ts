import type { Transition } from "motion/react";

export const spring = {
  /** Micro interactions: chevrons, icons */
  micro: { type: "spring", stiffness: 400, damping: 22, mass: 0.6 },
  /** Pressable feedback: buttons */
  press: { type: "spring", stiffness: 500, damping: 18, mass: 0.5 },
  /** Overlays/backdrops — snappy, no bounce */
  overlay: { type: "spring", stiffness: 500, damping: 40, mass: 0.8 },
  /** Menus, autocomplete lists — snappier than panels */
  menu: { type: "spring", stiffness: 470, damping: 30, mass: 0.7 },
  /** Panels, dialogs, sheets */
  panel: { type: "spring", stiffness: 420, damping: 28, mass: 0.8 },
  /** Layout size changes (height expand/collapse) */
  layout: { type: "spring", stiffness: 380, damping: 36, mass: 0.8 },
} as const satisfies Record<string, Transition>;

export const tween = {
  fade: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const },
} as const satisfies Record<string, Transition>;

/** Durations in seconds — keep in sync with --duration-* in globals.css */
export const duration = {
  fast: 0.15,
  normal: 0.2,
  slow: 0.3,
} as const;

type ReducedMotionInput = {
  reducedMotion: boolean;
};

export function createOverlayMotion({
  open,
  reducedMotion,
}: ReducedMotionInput & { open: boolean }) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: open ? 1 : 0 },
    transition: (reducedMotion ? tween.fade : spring.overlay) as Transition,
  };
}

type PanelMotionInput = ReducedMotionInput & {
  open: boolean;
  fromScale?: number;
  center?: boolean;
  /** Defaults to panel. Use menu for high-frequency popups. */
  spring?: "panel" | "menu";
};

export function createPanelMotion({
  open,
  reducedMotion,
  fromScale = 0.95,
  center = false,
  spring: springToken = "panel",
}: PanelMotionInput) {
  const closedScale = reducedMotion ? 1 : fromScale;
  const centerXY = center ? ({ x: "-50%", y: "-50%" } as const) : {};

  return {
    initial: { opacity: 0, scale: closedScale, ...centerXY },
    animate: {
      opacity: open ? 1 : 0,
      scale: open ? 1 : closedScale,
      ...centerXY,
    },
    transition: (reducedMotion
      ? tween.fade
      : spring[springToken]) as Transition,
  };
}

type PressMotionInput = ReducedMotionInput & {
  disabled?: boolean;
};

export function createPressMotion({
  reducedMotion,
  disabled = false,
}: PressMotionInput) {
  if (reducedMotion || disabled) {
    return {
      whileTap: undefined,
      transition: spring.press as Transition,
    };
  }

  // Tap only. Hover scale changes the bounding box and shifts floating
  // anchors (Menu, Dialog triggers) while the spring is running.
  return {
    whileTap: { scale: 0.96, y: 1 },
    transition: spring.press as Transition,
  };
}

type IconRotateMotionInput = ReducedMotionInput & {
  open: boolean;
};

export function createIconRotateMotion({
  open,
  reducedMotion,
}: IconRotateMotionInput) {
  return {
    animate: { rotate: open ? 180 : 0 },
    transition: (reducedMotion
      ? { type: false as const }
      : spring.micro) as Transition,
  };
}
