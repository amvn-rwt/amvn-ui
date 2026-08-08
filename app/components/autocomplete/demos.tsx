"use client";

import * as React from "react";
import { SearchIcon } from "lucide-react";

import {
  Autocomplete,
  AutocompleteClear,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteInputGroup,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePortal,
  AutocompletePopup,
  AutocompletePositioner,
  AutocompleteStatus,
  useAutocompleteFilter,
} from "@/components/ui/autocomplete";

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
      <Autocomplete items={tags}>
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Search tags
          <AutocompleteInput placeholder="e.g. feature" />
        </label>
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.value} value={tag}>
                    {tag.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </Autocomplete>
    </div>
  );
}

function InputGroupDemo() {
  return (
    <div className="flex w-full justify-center">
      <Autocomplete items={tags}>
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Search tags
          <AutocompleteInputGroup>
            <SearchIcon
              className="size-4 shrink-0 text-muted-foreground"
              aria-hidden
            />
            <AutocompleteInput placeholder="e.g. feature" />
            <AutocompleteClear />
          </AutocompleteInputGroup>
        </label>
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.value} value={tag}>
                    {tag.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </Autocomplete>
    </div>
  );
}

function GroupedDemo() {
  return (
    <div className="flex w-full justify-center">
      <Autocomplete items={groupedTags}>
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Select a tag
          <AutocompleteInput placeholder="e.g. feature" />
        </label>
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
              <AutocompleteList>
                {(group: TagGroup) => (
                  <AutocompleteGroup
                    key={group.value}
                    items={group.items}
                    className="pb-1 last:pb-0"
                  >
                    <AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
                    <AutocompleteCollection>
                      {(tag: Tag) => (
                        <AutocompleteItem key={tag.value} value={tag}>
                          {tag.label}
                        </AutocompleteItem>
                      )}
                    </AutocompleteCollection>
                  </AutocompleteGroup>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </Autocomplete>
    </div>
  );
}

function AutoHighlightDemo() {
  return (
    <div className="flex w-full justify-center">
      <Autocomplete items={tags} autoHighlight>
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Auto highlight on type
          <AutocompleteInput placeholder="e.g. feature" />
        </label>
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              <AutocompleteEmpty>No tags found.</AutocompleteEmpty>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.value} value={tag}>
                    {tag.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </Autocomplete>
    </div>
  );
}

function InlineDemo() {
  return (
    <div className="flex w-full justify-center">
      {/* mode="both" filters the list and fills the input from the highlighted item. */}
      <Autocomplete items={tags} mode="both">
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Search tags
          <AutocompleteInput placeholder="e.g. feature" />
        </label>
        <AutocompletePortal>
          <AutocompletePositioner className="data-empty:hidden">
            <AutocompletePopup>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.value} value={tag}>
                    {tag.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </Autocomplete>
    </div>
  );
}

function EmptyStatusDemo() {
  const [value, setValue] = React.useState("");
  const { contains } = useAutocompleteFilter({ sensitivity: "base" });

  const trimmed = value.trim();
  const matchCount = trimmed
    ? tags.filter((tag) => contains(tag.label, trimmed)).length
    : tags.length;

  return (
    <div className="flex w-full justify-center">
      <Autocomplete items={tags} value={value} onValueChange={setValue}>
        <label className="flex w-12 flex-col gap-1 text-sm font-medium text-foreground">
          Search tags
          <AutocompleteInput placeholder="e.g. feature" />
        </label>
        <AutocompletePortal>
          <AutocompletePositioner>
            <AutocompletePopup>
              {/* Keep Empty/Status mounted; swap children so screen readers still announce. */}
              <AutocompleteStatus>
                {matchCount > 0
                  ? `${matchCount} result${matchCount === 1 ? "" : "s"}`
                  : null}
              </AutocompleteStatus>
              <AutocompleteEmpty>
                {trimmed ? `No tags match "${value}".` : null}
              </AutocompleteEmpty>
              <AutocompleteList>
                {(tag: Tag) => (
                  <AutocompleteItem key={tag.value} value={tag}>
                    {tag.label}
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </Autocomplete>
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
