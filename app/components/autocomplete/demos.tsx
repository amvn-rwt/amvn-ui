"use client";

import * as React from "react";
import { SearchIcon } from "lucide-react";

import { Autocomplete } from "@/components/ui/autocomplete";

type Tag = {
  value: string;
  label: string;
};

type TagGroup = {
  value: string;
  items: Tag[];
};

// Base UI treats `{ value, label }` as a first-class item shape, so demos can
// skip `itemToStringValue` and still filter/display against `label`.
const tags: Tag[] = [
  { value: "feature", label: "feature" },
  { value: "fix", label: "fix" },
  { value: "bug", label: "bug" },
  { value: "docs", label: "docs" },
  { value: "internal", label: "internal" },
  { value: "mobile", label: "mobile" },
  { value: "accordion", label: "component: accordion" },
  { value: "alert-dialog", label: "component: alert dialog" },
  { value: "autocomplete", label: "component: autocomplete" },
  { value: "avatar", label: "component: avatar" },
  { value: "button", label: "component: button" },
  { value: "checkbox", label: "component: checkbox" },
  { value: "combobox", label: "component: combobox" },
  { value: "dialog", label: "component: dialog" },
  { value: "menu", label: "component: menu" },
  { value: "select", label: "component: select" },
  { value: "tabs", label: "component: tabs" },
  { value: "tooltip", label: "component: tooltip" },
];

const groupedTags: TagGroup[] = [
  {
    value: "Type",
    items: tags.filter((tag) => !tag.label.startsWith("component:")),
  },
  {
    value: "Component",
    items: tags.filter((tag) => tag.label.startsWith("component:")),
  },
];

function DefaultDemo() {
  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={tags}>
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Search tags
          <Autocomplete.Input placeholder="e.g. feature" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
            <Autocomplete.Popup>
              <Autocomplete.Empty>No tags found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(tag: Tag) => (
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
  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={tags}>
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Search tags
          <Autocomplete.InputGroup>
            <SearchIcon
              className="size-4 shrink-0 text-muted-foreground"
              aria-hidden
            />
            <Autocomplete.Input placeholder="e.g. feature" />
            <Autocomplete.Clear />
          </Autocomplete.InputGroup>
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
            <Autocomplete.Popup>
              <Autocomplete.Empty>No tags found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(tag: Tag) => (
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
  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={groupedTags}>
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Select a tag
          <Autocomplete.Input placeholder="e.g. feature" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
            <Autocomplete.Popup>
              <Autocomplete.Empty>No tags found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(group: TagGroup) => (
                  <Autocomplete.Group
                    key={group.value}
                    items={group.items}
                    className="pb-1 last:pb-0"
                  >
                    <Autocomplete.GroupLabel>
                      {group.value}
                    </Autocomplete.GroupLabel>
                    <Autocomplete.Collection>
                      {(tag: Tag) => (
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
  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={tags} autoHighlight>
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Auto highlight on type
          <Autocomplete.Input placeholder="e.g. feature" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner>
            <Autocomplete.Popup>
              <Autocomplete.Empty>No tags found.</Autocomplete.Empty>
              <Autocomplete.List>
                {(tag: Tag) => (
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
  return (
    <div className="flex w-full justify-center">
      {/* mode="both" filters the list and fills the input from the highlighted item. */}
      <Autocomplete.Root items={tags} mode="both">
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Search tags
          <Autocomplete.Input placeholder="e.g. feature" />
        </label>
        <Autocomplete.Portal>
          <Autocomplete.Positioner className="data-empty:hidden">
            <Autocomplete.Popup>
              <Autocomplete.List>
                {(tag: Tag) => (
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
  const [value, setValue] = React.useState("");
  const { contains } = Autocomplete.useFilter({ sensitivity: "base" });

  const trimmed = value.trim();
  const matchCount = trimmed
    ? tags.filter((tag) => contains(tag.label, trimmed)).length
    : tags.length;

  return (
    <div className="flex w-full justify-center">
      <Autocomplete.Root items={tags} value={value} onValueChange={setValue}>
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Search tags
          <Autocomplete.Input placeholder="e.g. feature" />
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
                {trimmed ? `No tags match "${value}".` : null}
              </Autocomplete.Empty>
              <Autocomplete.List>
                {(tag: Tag) => (
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
};
