"use client";

import { Tabs } from "@/components/ui/tabs";

// ---------------------------------------------------------------------------
// Default demo — underline indicator, no panel animation
// ---------------------------------------------------------------------------

function DefaultDemo() {
  return (
    <div className="flex w-full justify-center p-4">
      <Tabs.Root defaultValue="flight" className="w-full max-w-sm">
        <Tabs.List className="border-b border-border">
          <Tabs.Tab value="flight">Flight Log</Tabs.Tab>
          <Tabs.Tab value="systems">Systems</Tabs.Tab>
          <Tabs.Tab value="crew">Crew</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="flight" className="mt-4 text-sm text-muted-foreground">
          Mission elapsed time: 14 days, 6 hours, 42 minutes. All nominal.
        </Tabs.Panel>
        <Tabs.Panel value="systems" className="mt-4 text-sm text-muted-foreground">
          Oxygen: 98% · Power: 94% · Thermal: nominal · Propulsion: standby.
        </Tabs.Panel>
        <Tabs.Panel value="crew" className="mt-4 text-sm text-muted-foreground">
          3 crew members active. Sleep cycles staggered. Morale: high.
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Animated demo — panels slide in from the activation direction
// ---------------------------------------------------------------------------

function AnimatedDemo() {
  return (
    <div className="flex w-full justify-center p-4">
      {/*
       * overflow-hidden on the wrapper clips outgoing panels mid-slide
       * so they don't peek outside the content area.
       */}
      <Tabs.Root defaultValue="flight" className="w-full max-w-sm">
        <Tabs.List className="border-b border-border">
          <Tabs.Tab value="flight">Flight Log</Tabs.Tab>
          <Tabs.Tab value="systems">Systems</Tabs.Tab>
          <Tabs.Tab value="crew">Crew</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <div className="relative overflow-hidden">
          <Tabs.Panel
            value="flight"
            keepMounted
            className="mt-4 text-sm text-muted-foreground"
          >
            Mission elapsed time: 14 days, 6 hours, 42 minutes. All nominal.
          </Tabs.Panel>
          <Tabs.Panel
            value="systems"
            keepMounted
            className="mt-4 text-sm text-muted-foreground"
          >
            Oxygen: 98% · Power: 94% · Thermal: nominal · Propulsion: standby.
          </Tabs.Panel>
          <Tabs.Panel
            value="crew"
            keepMounted
            className="mt-4 text-sm text-muted-foreground"
          >
            3 crew members active. Sleep cycles staggered. Morale: high.
          </Tabs.Panel>
        </div>
      </Tabs.Root>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Disabled demo
// ---------------------------------------------------------------------------

function DisabledDemo() {
  return (
    <div className="flex w-full justify-center p-4">
      <Tabs.Root defaultValue="flight" className="w-full max-w-sm">
        <Tabs.List className="border-b border-border">
          <Tabs.Tab value="flight">Flight Log</Tabs.Tab>
          <Tabs.Tab value="classified" disabled>
            Classified
          </Tabs.Tab>
          <Tabs.Tab value="crew">Crew</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="flight" className="mt-4 text-sm text-muted-foreground">
          Mission elapsed time: 14 days, 6 hours, 42 minutes. All nominal.
        </Tabs.Panel>
        <Tabs.Panel
          value="classified"
          className="mt-4 text-sm text-muted-foreground"
        >
          You don&apos;t have clearance for this.
        </Tabs.Panel>
        <Tabs.Panel value="crew" className="mt-4 text-sm text-muted-foreground">
          3 crew members active. Sleep cycles staggered. Morale: high.
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
}

export { DefaultDemo, AnimatedDemo, DisabledDemo };
