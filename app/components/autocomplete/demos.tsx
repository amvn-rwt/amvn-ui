"use client";

import * as React from "react";
import {
  CompassIcon,
  RadioIcon,
  RocketIcon,
  SearchIcon,
  SparklesIcon,
} from "lucide-react";

import { Autocomplete } from "@/components/ui/autocomplete";

// Each demo's data and JSX mirror the matching code string on the docs page.
// The outer centering div is preview chrome only and is not in those snippets.

function DefaultDemo() {
  const tags = [
    { value: "rocket", label: "Rocket" },
    { value: "orbit-bike", label: "Orbit Bike" },
    { value: "lunar-car", label: "Lunar Car" },
    { value: "telemetry", label: "Telemetry" },
  ];

  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={tags}>
        <label className="flex w-12 flex-col gap-2 text-sm font-medium">
          Search the hangar
          <Autocomplete.Input placeholder="E.g. rocket" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
            <Autocomplete.Popup>
              <Autocomplete.Empty>
                Nothing in the hangar matches.
              </Autocomplete.Empty>
              <Autocomplete.List>
                {(tag) => (
                  <Autocomplete.Item key={tag.value} value={tag}>
                    {tag.label}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    </div>
  );
}

function InputGroupDemo() {
  const tags = [
    { value: "rocket", label: "Rocket" },
    { value: "orbit-bike", label: "Orbit Bike" },
    { value: "lunar-car", label: "Lunar Car" },
  ];

  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={tags}>
        <label className="flex w-12 flex-col gap-2 text-sm font-medium">
          Search the hangar
          <Autocomplete.InputGroup>
            <SearchIcon
              className="size-4 shrink-0 text-muted-foreground"
              aria-hidden
            />
            <Autocomplete.Input placeholder="E.g. rocket" />
            <Autocomplete.Clear />
          </Autocomplete.InputGroup>
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
            <Autocomplete.Popup>
              <Autocomplete.Empty>
                Nothing in the hangar matches.
              </Autocomplete.Empty>
              <Autocomplete.List>
                {(tag) => (
                  <Autocomplete.Item key={tag.value} value={tag}>
                    {tag.label}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    </div>
  );
}

function GroupedDemo() {
  // Groups are objects with an items array. Extra fields like value
  // become the group label when you render GroupLabel.
  const groupedTags = [
    {
      value: "Vehicles",
      items: [
        { value: "rocket", label: "Rocket" },
        { value: "orbit-bike", label: "Orbit Bike" },
        { value: "lunar-car", label: "Lunar Car" },
      ],
    },
    {
      value: "Systems",
      items: [
        { value: "telemetry", label: "Telemetry" },
        { value: "fuel-tank", label: "Fuel Tank" },
        { value: "ground-control", label: "Ground Control" },
      ],
    },
  ];

  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={groupedTags}>
        <label className="flex w-12 flex-col gap-2 text-sm font-medium">
          Pick a mission asset
          <Autocomplete.Input placeholder="E.g. rocket" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
            <Autocomplete.Popup>
              <Autocomplete.Empty>No mission assets found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(group) => (
                  <Autocomplete.Group
                    key={group.value}
                    items={group.items}
                    className="pb-1 last:pb-0"
                  >
                    <Autocomplete.GroupLabel>
                      {group.value}
                    </Autocomplete.GroupLabel>
                    <Autocomplete.Collection>
                      {(tag) => (
                        <Autocomplete.Item key={tag.value} value={tag}>
                          {tag.label}
                        </Autocomplete.Item>
                      )}
                    </Autocomplete.Collection>
                  </Autocomplete.Group>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    </div>
  );
}

function AutoHighlightDemo() {
  const tags = [
    { value: "rocket", label: "Rocket" },
    { value: "orbit-bike", label: "Orbit Bike" },
    { value: "lunar-car", label: "Lunar Car" },
  ];

  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={tags} autoHighlight>
        <label className="flex w-12 flex-col gap-2 text-sm font-medium">
          Auto highlight on type
          <Autocomplete.Input placeholder="E.g. rocket" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
            <Autocomplete.Popup>
              <Autocomplete.Empty>
                Nothing in the hangar matches.
              </Autocomplete.Empty>
              <Autocomplete.List>
                {(tag) => (
                  <Autocomplete.Item key={tag.value} value={tag}>
                    {tag.label}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    </div>
  );
}

function InlineDemo() {
  const tags = [
    { value: "rocket", label: "Rocket" },
    { value: "orbit-bike", label: "Orbit Bike" },
    { value: "lunar-car", label: "Lunar Car" },
  ];

  return (
    <div className="flex w-full justify-center">
      {/* mode="both" filters the list and fills the input from the highlighted item. */}
      <Autocomplete.Root items={tags} mode="both">
        <label className="flex w-12 flex-col gap-2 text-sm font-medium">
          Search the hangar
          <Autocomplete.Input placeholder="E.g. rocket" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner className="data-empty:hidden">
            <Autocomplete.Popup>
              <Autocomplete.List>
                {(tag) => (
                  <Autocomplete.Item key={tag.value} value={tag}>
                    {tag.label}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    </div>
  );
}

function EmptyStatusDemo() {
  const tags = [
    { value: "rocket", label: "Rocket" },
    { value: "orbit-bike", label: "Orbit Bike" },
    { value: "lunar-car", label: "Lunar Car" },
  ];

  const [value, setValue] = React.useState("");
  const { contains } = Autocomplete.useFilter({ sensitivity: "base" });

  const trimmed = value.trim();
  const matchCount = trimmed
    ? tags.filter((tag) => contains(tag.label, trimmed)).length
    : tags.length;

  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={tags} value={value} onValueChange={setValue}>
        <label className="flex w-12 flex-col gap-2 text-sm font-medium">
          Search the hangar
          <Autocomplete.Input placeholder="E.g. rocket" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
            <Autocomplete.Popup>
              {/* Keep Empty/Status mounted; swap children so screen readers still announce. */}
              <Autocomplete.Status>
                {matchCount > 0
                  ? `${matchCount} result${matchCount === 1 ? "" : "s"}`
                  : null}
              </Autocomplete.Status>
              <Autocomplete.Empty>
                {trimmed ? `"${value}" is not cleared for launch.` : null}
              </Autocomplete.Empty>
              <Autocomplete.List>
                {(tag) => (
                  <Autocomplete.Item key={tag.value} value={tag}>
                    {tag.label}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    </div>
  );
}

function Command() {
  const missionItems = [
    {
      value: "orbital-launch",
      label: "Orbital Launch",
      description: "Stage 1 separation sequence",
      icon: RocketIcon,
      badge: "active",
    },
    {
      value: "deep-space-relay",
      label: "Deep Space Relay",
      description: "Laser telemetry uplink",
      icon: RadioIcon,
      badge: "online",
    },
    {
      value: "star-tracker",
      label: "Star Tracker",
      description: "Inertial celestial navigation",
      icon: CompassIcon,
    },
    {
      value: "ai-copilot",
      label: "AI Flight Assistant",
      description: "Autonomous maneuver engine",
      icon: SparklesIcon,
      badge: "new",
    },
  ];

  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={missionItems}>
        <label className="flex w-full max-w-sm flex-col gap-2 text-sm font-medium">
          Command Search
          <Autocomplete.InputGroup>
            <SearchIcon className="size-4 text-muted-foreground" aria-hidden />
            <Autocomplete.Input placeholder="Search commands or telemetry..." />
            <Autocomplete.Clear />
          </Autocomplete.InputGroup>
        </label>

        <Autocomplete.Portal>
          <Autocomplete.Positioner sideOffset={6}>
            <Autocomplete.Popup className="w-(--anchor-width) min-w-72">
              <Autocomplete.Empty>
                No matching telemetry command found.
              </Autocomplete.Empty>

              <Autocomplete.List>
                {(item) => {
                  const Icon = item.icon;
                  return (
                    <Autocomplete.Item
                      key={item.value}
                      value={item}
                      className="flex items-center justify-between gap-3 px-3 py-2.5"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted/faint text-info">
                          <Icon className="size-4.5" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="truncate text-sm font-medium text-foreground">
                            {item.label}
                          </span>
                          <span className="truncate text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        </div>
                      </div>
                      {item.badge && (
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                          {item.badge}
                        </span>
                      )}
                    </Autocomplete.Item>
                  );
                }}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    </div>
  );
}

export {
  DefaultDemo,
  InputGroupDemo,
  GroupedDemo,
  AutoHighlightDemo,
  InlineDemo,
  EmptyStatusDemo,
  Command,
};
