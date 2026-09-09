"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

function TabsRoot({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// List — the tab button row
// ---------------------------------------------------------------------------

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        // Relative so the Indicator can use absolute positioning within it.
        "relative flex items-end gap-0.5",
        className,
      )}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// Tab — individual trigger button
// ---------------------------------------------------------------------------

function Tab({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={cn(
        // Layout
        "relative flex h-9 shrink-0 items-center justify-center gap-2 px-3",
        // Typography
        "text-sm font-medium whitespace-nowrap select-none",
        // Colors — muted by default, foreground when active
        "text-muted-foreground transition-colors duration-fast",
        "data-active:text-foreground",
        // Disabled
        "data-disabled:pointer-events-none data-disabled:opacity-disabled",
        // Focus ring — consistent with our other components
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// Indicator — the sliding active-tab highlight
//
// Base UI injects CSS custom properties onto this element:
//   --active-tab-left   translateX target
//   --active-tab-width  width target
//
// A CSS transition on `translate` + `width` is the right tool here:
// it is hardware-accelerated, interruptible mid-animation, and requires
// no JavaScript. We match our `--duration-normal` timing token.
// ---------------------------------------------------------------------------

function TabsIndicator({ className, ...props }: TabsPrimitive.Indicator.Props) {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      className={cn(
        // Positioned under all tabs in the list
        "absolute bottom-0 left-0 -z-10",
        // Height matches a 2px underline
        "h-0.5 w-(--active-tab-width)",
        // Slide to the active tab position
        "translate-x-(--active-tab-left)",
        // Smooth transition — interruptible CSS, no JS overhead
        "bg-foreground transition-[translate,width] duration-normal ease-out",
        className,
      )}
      {...props}
    />
  );
}

// ---------------------------------------------------------------------------
// Panel — the content area shown when the corresponding Tab is active
//
// Directional slide + fade on activation:
//   data-activation-direction=left  → panel slides in from the left (−10%)
//   data-activation-direction=right → panel slides in from the right (+10%)
// `data-starting-style` / `data-ending-style` are set by Base UI to trigger
// the CSS transitions at the correct moments (entry / exit).
// `motion-safe:` ensures transforms are suppressed for users who prefer
// reduced motion while preserving the opacity fade.
// ---------------------------------------------------------------------------

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn(
        // Focus ring
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Transitions — opacity fast, translate slower (more spatial feel)
        "transition-[opacity,translate] duration-normal ease-out",
        // Hidden panels use `[hidden]` attribute from Base UI
        "[[hidden]]:hidden",
        // --- Entry (data-starting-style) ---
        "data-starting-style:opacity-0",
        "motion-safe:data-starting-style:data-[activation-direction=left]:-translate-x-2",
        "motion-safe:data-starting-style:data-[activation-direction=right]:translate-x-2",
        // --- Exit (data-ending-style) ---
        "data-ending-style:opacity-0",
        "motion-safe:data-ending-style:data-[activation-direction=left]:translate-x-2",
        "motion-safe:data-ending-style:data-[activation-direction=right]:-translate-x-2",
        className,
      )}
      {...props}
    />
  );
}

const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  List: TabsList,
  Tab,
  Indicator: TabsIndicator,
  Panel: TabsPanel,
});

export { Tabs };
