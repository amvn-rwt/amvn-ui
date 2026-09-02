"use client";

import * as React from "react";
import { SearchIcon } from "lucide-react";

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
        <label className="flex w-64 flex-col gap-2 text-sm font-medium">
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
        <label className="flex w-64 flex-col gap-2 text-sm font-medium">
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
        <label className="flex w-64 flex-col gap-2 text-sm font-medium">
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
        <label className="flex w-64 flex-col gap-2 text-sm font-medium">
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
        <label className="flex w-64 flex-col gap-2 text-sm font-medium">
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
        <label className="flex w-64 flex-col gap-2 text-sm font-medium">
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

const ALL_TAGS = [
  { value: "rocket", label: "Rocket" },
  { value: "orbit-bike", label: "Orbit Bike" },
  { value: "lunar-car", label: "Lunar Car" },
  { value: "telemetry", label: "Telemetry" },
  { value: "fuel-tank", label: "Fuel Tank" },
  { value: "ground-control", label: "Ground Control" },
];

function DisabledDemo() {
  const tags = [
    { value: "rocket", label: "Rocket" },
    { value: "orbit-bike", label: "Orbit Bike" },
    { value: "classified", label: "Secret Payload", disabled: true },
    { value: "lunar-car", label: "Lunar Car" },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <Autocomplete.Root items={tags}>
        <label className="flex w-64 flex-col gap-2 text-sm font-medium">
          Per-item disabled
          <Autocomplete.Input placeholder="E.g. rocket" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
            <Autocomplete.Popup>
              <Autocomplete.Empty>Nothing found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(tag) => (
                  <Autocomplete.Item
                    key={tag.value}
                    value={tag}
                    disabled={tag.disabled}
                  >
                    {tag.label}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>

      <Autocomplete.Root items={tags} disabled>
        <label className="flex w-64 flex-col gap-2 text-sm font-medium">
          Fully disabled
          <Autocomplete.Input placeholder="E.g. rocket" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
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

function AsyncDemo() {
  const [inputValue, setInputValue] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(ALL_TAGS);
  const [loading, setLoading] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  function handleValueChange(value: string) {
    setInputValue(value);

    clearTimeout(timerRef.current);
    if (!value.trim()) {
      setFilteredItems(ALL_TAGS);
      setLoading(false);
      return;
    }

    setLoading(true);
    // Simulate a remote fetch with a 400 ms debounce.
    timerRef.current = setTimeout(() => {
      const lower = value.toLowerCase();
      setFilteredItems(
        ALL_TAGS.filter((t) => t.label.toLowerCase().includes(lower)),
      );
      setLoading(false);
    }, 400);
  }

  React.useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root
        // Disable built-in filtering; results come from the server.
        filter={null}
        filteredItems={filteredItems}
        items={ALL_TAGS}
        value={inputValue}
        onValueChange={handleValueChange}
      >
        <label className="flex w-64 flex-col gap-2 text-sm font-medium">
          Search the hangar (async)
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
              {/* Status is always mounted so screen readers announce changes. */}
              <Autocomplete.Status>
                {loading ? "Searching…" : null}
              </Autocomplete.Status>
              <Autocomplete.Empty>
                {!loading && inputValue.trim() ? "No results found." : null}
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

export {
  DefaultDemo,
  InputGroupDemo,
  GroupedDemo,
  AutoHighlightDemo,
  InlineDemo,
  EmptyStatusDemo,
  DisabledDemo,
  AsyncDemo,
};
