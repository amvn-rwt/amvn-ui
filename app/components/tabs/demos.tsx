"use client";

import { Tabs } from "@/components/ui/tabs";

function DefaultDemo() {
  return (
    <div className="flex w-full justify-center">
      <Tabs.Root defaultValue="flight" className="w-full max-w-sm">
        <Tabs.List>
          <Tabs.Tab value="flight">Flight Log</Tabs.Tab>
          <Tabs.Tab value="systems">Systems</Tabs.Tab>
          <Tabs.Tab value="crew">Crew</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="flight">
          Mission elapsed time: 14 days, 6 hours, 42 minutes. All nominal.
        </Tabs.Panel>
        <Tabs.Panel value="systems">
          Oxygen: 98% · Power: 94% · Thermal: nominal · Propulsion: standby.
        </Tabs.Panel>
        <Tabs.Panel value="crew">
          3 crew members active. Sleep cycles staggered. Morale: high.
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
}

function DisabledDemo() {
  return (
    <div className="flex w-full justify-center">
      <Tabs.Root defaultValue="flight" className="w-full max-w-sm">
        <Tabs.List>
          <Tabs.Tab value="flight">Flight Log</Tabs.Tab>
          <Tabs.Tab value="classified" disabled>
            Classified
          </Tabs.Tab>
          <Tabs.Tab value="crew">Crew</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel value="flight">
          Mission elapsed time: 14 days, 6 hours, 42 minutes. All nominal.
        </Tabs.Panel>
        <Tabs.Panel value="crew">
          3 crew members active. Sleep cycles staggered. Morale: high.
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
}

export { DefaultDemo, DisabledDemo };
