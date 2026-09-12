"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import { cn } from "@/lib/utils";

function TabsRoot({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("grid grid-cols-1 grid-rows-[auto_auto] gap-4", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "relative isolate col-start-1 row-start-1 flex items-end border-b border-border",
        className,
      )}
      {...props}
    />
  );
}

function Tab({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={cn(
        "relative flex h-7 shrink-0 items-center justify-center gap-2 px-3 text-sm font-medium whitespace-nowrap text-muted-foreground select-none outline-none transition-colors duration-fast",
        "data-active:text-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-disabled",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    />
  );
}

function TabsIndicator({ className, ...props }: TabsPrimitive.Indicator.Props) {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      className={cn(
        "absolute bottom-0 left-0 -z-10 h-0.5 w-(--active-tab-width) translate-x-(--active-tab-left) bg-foreground transition-[translate,width] duration-normal ease-out",
        className,
      )}
      {...props}
    />
  );
}

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn(
        "col-start-1 row-start-2 w-full text-sm text-muted-foreground outline-none transition-[opacity,translate] duration-normal ease-out",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-starting-style:opacity-0 data-ending-style:opacity-0",
        "motion-safe:data-starting-style:data-[activation-direction=left]:translate-x-[-10%]",
        "motion-safe:data-starting-style:data-[activation-direction=right]:translate-x-[10%]",
        "motion-safe:data-ending-style:data-[activation-direction=left]:translate-x-[10%]",
        "motion-safe:data-ending-style:data-[activation-direction=right]:translate-x-[-10%]",
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
