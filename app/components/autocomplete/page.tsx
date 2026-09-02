import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { InlineCode } from "@/components/docs/inline-code";
import { JsonLd } from "@/components/seo/json-ld";
import { highlightCode } from "@/lib/highlight-code";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

import {
  AsyncDemo,
  AutoHighlightDemo,
  DefaultDemo,
  DisabledDemo,
  EmptyStatusDemo,
  GroupedDemo,
  InlineDemo,
  InputGroupDemo,
} from "./demos";

export const metadata = createPageMetadata({
  title: "Autocomplete",
  description:
    "Autocomplete for amvn.ui: an input that suggests options as you type, built with Base UI and Tailwind CSS.",
  path: "/components/autocomplete",
});

const anatomyCode = `import { Autocomplete } from "@/components/ui/autocomplete"

<Autocomplete.Root>
  <Autocomplete.InputGroup>
    <Autocomplete.Input />
    <Autocomplete.Trigger />
    <Autocomplete.Icon />
    <Autocomplete.Clear />
    <Autocomplete.Value />
  </Autocomplete.InputGroup>

  <Autocomplete.Portal>
    <Autocomplete.Backdrop />
    <Autocomplete.Positioner>
      <Autocomplete.Popup>
        <Autocomplete.Arrow />

        <Autocomplete.Status />
        <Autocomplete.Empty />

        <Autocomplete.List>
          <Autocomplete.Row>
            <Autocomplete.Item />
          </Autocomplete.Row>

          <Autocomplete.Separator />

          <Autocomplete.Group>
            <Autocomplete.GroupLabel />
          </Autocomplete.Group>

          <Autocomplete.Collection />
        </Autocomplete.List>
      </Autocomplete.Popup>
    </Autocomplete.Positioner>
  </Autocomplete.Portal>
</Autocomplete.Root>`;

const defaultCode = `import { Autocomplete } from "@/components/ui/autocomplete"

const tags = [
  { value: "rocket", label: "Rocket" },
  { value: "orbit-bike", label: "Orbit Bike" },
  { value: "lunar-car", label: "Lunar Car" },
  { value: "telemetry", label: "Telemetry" },
]

export default function Example() {
  return (
    <Autocomplete.Root items={tags}>
      <label className="flex w-64 flex-col gap-2 text-sm font-medium">
        Search the hangar
        <Autocomplete.Input placeholder="E.g. rocket" />
      </label>
      <Autocomplete.Portal>
        <Autocomplete.Positioner>
          <Autocomplete.Popup>
            <Autocomplete.Empty>Nothing in the hangar matches.</Autocomplete.Empty>
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
  )
}`;

const inputGroupCode = `import { SearchIcon } from "lucide-react"
import { Autocomplete } from "@/components/ui/autocomplete"

const tags = [
  { value: "rocket", label: "Rocket" },
  { value: "orbit-bike", label: "Orbit Bike" },
  { value: "lunar-car", label: "Lunar Car" },
]

export default function Example() {
  return (
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
            <Autocomplete.Empty>Nothing in the hangar matches.</Autocomplete.Empty>
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
  )
}`;

const groupedCode = `import { Autocomplete } from "@/components/ui/autocomplete"

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
]

export default function Example() {
  return (
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
                  <Autocomplete.GroupLabel>{group.value}</Autocomplete.GroupLabel>
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
  )
}`;

const autoHighlightCode = `import { Autocomplete } from "@/components/ui/autocomplete"

const tags = [
  { value: "rocket", label: "Rocket" },
  { value: "orbit-bike", label: "Orbit Bike" },
  { value: "lunar-car", label: "Lunar Car" },
]

export default function Example() {
  return (
    <Autocomplete.Root items={tags} autoHighlight>
      <label className="flex w-64 flex-col gap-2 text-sm font-medium">
        Auto highlight on type
        <Autocomplete.Input placeholder="E.g. rocket" />
      </label>
      <Autocomplete.Portal>
        <Autocomplete.Positioner>
          <Autocomplete.Popup>
            <Autocomplete.Empty>Nothing in the hangar matches.</Autocomplete.Empty>
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
  )
}`;

const inlineCode = `import { Autocomplete } from "@/components/ui/autocomplete"

const tags = [
  { value: "rocket", label: "Rocket" },
  { value: "orbit-bike", label: "Orbit Bike" },
  { value: "lunar-car", label: "Lunar Car" },
]

export default function Example() {
  return (
    // mode="both" filters the list and fills the input from the highlighted item.
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
  )
}`;

const emptyStatusCode = `import * as React from "react"
import { Autocomplete } from "@/components/ui/autocomplete"

const tags = [
  { value: "rocket", label: "Rocket" },
  { value: "orbit-bike", label: "Orbit Bike" },
  { value: "lunar-car", label: "Lunar Car" },
]

export default function Example() {
  const [value, setValue] = React.useState("")
  const { contains } = Autocomplete.useFilter({ sensitivity: "base" })

  const trimmed = value.trim()
  const matchCount = trimmed
    ? tags.filter((tag) => contains(tag.label, trimmed)).length
    : tags.length

  return (
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
                ? \`\${matchCount} result\${matchCount === 1 ? "" : "s"}\`
                : null}
            </Autocomplete.Status>
            <Autocomplete.Empty>
              {trimmed ? \`"\${value}" is not cleared for launch.\` : null}
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
  )
}`;

const disabledCode = `import { Autocomplete } from "@/components/ui/autocomplete"

const tags = [
  { value: "rocket", label: "Rocket" },
  { value: "orbit-bike", label: "Orbit Bike" },
  { value: "classified", label: "Secret Payload", disabled: true },
  { value: "lunar-car", label: "Lunar Car" },
]

export default function Example() {
  return (
    <div className="flex w-full flex-col items-center gap-6">
      {/* Disable a single item by passing disabled to Autocomplete.Item */}
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

      {/* Disable the whole field with disabled on Root */}
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
  )
}`;

const asyncCode = `import * as React from "react"
import { SearchIcon } from "lucide-react"
import { Autocomplete } from "@/components/ui/autocomplete"

const ALL_TAGS = [
  { value: "rocket", label: "Rocket" },
  { value: "orbit-bike", label: "Orbit Bike" },
  { value: "lunar-car", label: "Lunar Car" },
  { value: "telemetry", label: "Telemetry" },
  { value: "fuel-tank", label: "Fuel Tank" },
  { value: "ground-control", label: "Ground Control" },
]

export default function Example() {
  const [inputValue, setInputValue] = React.useState("")
  const [filteredItems, setFilteredItems] = React.useState(ALL_TAGS)
  const [loading, setLoading] = React.useState(false)
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  function handleValueChange(value: string) {
    setInputValue(value)
    clearTimeout(timerRef.current)
    if (!value.trim()) {
      setFilteredItems(ALL_TAGS)
      setLoading(false)
      return
    }
    setLoading(true)
    // Simulate a remote fetch with a 400 ms debounce.
    timerRef.current = setTimeout(() => {
      const lower = value.toLowerCase()
      setFilteredItems(ALL_TAGS.filter((t) => t.label.toLowerCase().includes(lower)))
      setLoading(false)
    }, 400)
  }

  React.useEffect(() => () => clearTimeout(timerRef.current), [])

  return (
    <Autocomplete.Root
      // Pass filter={null} to disable built-in filtering — your filteredItems drive the list.
      filter={null}
      filteredItems={filteredItems}
      items={ALL_TAGS}
      value={inputValue}
      onValueChange={handleValueChange}
    >
      <label className="flex w-64 flex-col gap-2 text-sm font-medium">
        Search the hangar (async)
        <Autocomplete.InputGroup>
          <SearchIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden />
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
  )
}`;

const rootProps = [
  {
    name: "items",
    type: "ItemValue[] | { items: any[] }[]",
    defaultValue: "—",
    description: "Flat array of item values, or grouped array where each entry has an items array.",
  },
  {
    name: "value",
    type: "string",
    defaultValue: "—",
    description: "Controlled text value of the input. Use with onValueChange.",
  },
  {
    name: "defaultValue",
    type: "string",
    defaultValue: "—",
    description: "Uncontrolled initial text value.",
  },
  {
    name: "onValueChange",
    type: "(value: string, eventDetails) => void",
    defaultValue: "—",
    description: "Called when the input text changes. For object items the string is produced by itemToStringValue.",
  },
  {
    name: "open",
    type: "boolean",
    defaultValue: "—",
    description: "Controlled open state of the popup.",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the popup starts open in uncontrolled mode.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean, eventDetails) => void",
    defaultValue: "—",
    description: "Called when the popup opens or closes.",
  },
  {
    name: "mode",
    type: "'list' | 'both' | 'inline' | 'none'",
    defaultValue: "'list'",
    description: "Controls filtering and inline fill. 'list' filters only. 'both' filters and fills input from the highlighted item. 'inline' fills without filtering. 'none' does neither.",
  },
  {
    name: "autoHighlight",
    type: "boolean | 'always'",
    defaultValue: "false",
    description: "Highlight the first matching item automatically. Use 'always' when the list is always visible (e.g. inside a dialog).",
  },
  {
    name: "keepHighlight",
    type: "boolean",
    defaultValue: "false",
    description: "Keep the current highlight when the query changes instead of resetting it.",
  },
  {
    name: "highlightItemOnHover",
    type: "boolean",
    defaultValue: "true",
    description: "Highlight items on mouse hover. Disable if you prefer keyboard-only highlight.",
  },
  {
    name: "filter",
    type: "((itemValue, query, itemToString?) => boolean) | null",
    defaultValue: "—",
    description: "Custom filter function. Pass null to disable built-in filtering entirely — required for async/server-side search.",
  },
  {
    name: "filteredItems",
    type: "any[] | Group[]",
    defaultValue: "—",
    description: "Externally filtered items. Use with filter={null} for async search — set this from your server results instead of letting the component filter.",
  },
  {
    name: "itemToStringValue",
    type: "(itemValue: ItemValue) => string",
    defaultValue: "—",
    description: "Converts an item object to the string shown in the input on selection. Required when items are objects, not plain strings.",
  },
  {
    name: "limit",
    type: "number",
    defaultValue: "-1",
    description: "Maximum number of items shown in the list. -1 means unlimited.",
  },
  {
    name: "grid",
    type: "boolean",
    defaultValue: "false",
    description: "Enable grid navigation (horizontal + vertical arrow keys). Use with Autocomplete.Row to lay items in a grid.",
  },
  {
    name: "inline",
    type: "boolean",
    defaultValue: "false",
    description: "Render the list inline instead of inside a portal popup.",
  },
  {
    name: "virtualized",
    type: "boolean",
    defaultValue: "false",
    description: "Enable virtual scrolling for very large lists (thousands of items). Requires fixed item heights.",
  },
  {
    name: "openOnInputClick",
    type: "boolean",
    defaultValue: "false",
    description: "Open the popup when the input is clicked, even if it is empty.",
  },
  {
    name: "loopFocus",
    type: "boolean",
    defaultValue: "true",
    description: "Wrap focus from last item back to first (and vice versa) when navigating with arrow keys.",
  },
  {
    name: "modal",
    type: "boolean",
    defaultValue: "false",
    description: "Trap focus inside the popup, making it behave like a modal dialog.",
  },
  {
    name: "submitOnItemClick",
    type: "boolean",
    defaultValue: "false",
    description: "Submit the nearest parent form automatically when an item is selected.",
  },
  {
    name: "name",
    type: "string",
    defaultValue: "—",
    description: "Name of the hidden input submitted with a form.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disable the entire autocomplete field.",
  },
  {
    name: "readOnly",
    type: "boolean",
    defaultValue: "false",
    description: "Make the input read-only — popup still opens but the value cannot be changed.",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
    description: "Mark the field as required for form validation.",
  },
] as const;

const inputProps = [
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "placeholder",
    type: "string",
    defaultValue: "—",
  },
] as const;

const itemProps = [
  {
    name: "value",
    type: "any",
    defaultValue: "null",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "onClick",
    type: "(event) => void",
    defaultValue: "—",
  },
  {
    name: "index",
    type: "number",
    defaultValue: "—",
  },
] as const;

const listProps = [
  {
    name: "children",
    type: "ReactNode | ((item: any, index: number) => ReactNode)",
    defaultValue: "—",
  },
] as const;

const groupProps = [
  {
    name: "items",
    type: "any[]",
    defaultValue: "—",
  },
] as const;

const positionerProps = [
  {
    name: "side",
    type: "'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start'",
    defaultValue: "'bottom'",
  },
  {
    name: "sideOffset",
    type: "number | OffsetFunction",
    defaultValue: "4",
  },
  {
    name: "align",
    type: "'start' | 'center' | 'end'",
    defaultValue: "'center'",
  },
  {
    name: "alignOffset",
    type: "number | OffsetFunction",
    defaultValue: "0",
  },
  {
    name: "collisionPadding",
    type: "Padding",
    defaultValue: "5",
  },
] as const;

const filterHookProps = [
  {
    name: "options",
    type: "AutocompleteFilterOptions",
    defaultValue: "—",
  },
] as const;

const filteredItemsHookProps = [
  {
    name: "(no parameters)",
    type: "returns T[]",
    defaultValue: "—",
    description: "Returns the currently visible item array after filtering is applied. Useful for computing match counts outside the component (see the Empty state and status demo).",
  },
] as const;

const toc = [
  { id: "default", title: "Default" },
  { id: "guidelines", title: "Usage Guidelines" },
  { id: "anatomy", title: "Anatomy" },
  { id: "input-group", title: "With icon and clear button" },
  { id: "grouped", title: "Grouped items" },
  { id: "auto-highlight", title: "Auto highlight" },
  { id: "inline", title: "Inline autocomplete" },
  { id: "empty-status", title: "Empty state and status" },
  { id: "disabled", title: "Disabled" },
  { id: "async", title: "Async suggestions" },
  { id: "props", title: "Props" },
];

function PropsTable({
  props,
}: {
  props: readonly {
    name: string;
    type: string;
    defaultValue: string;
    description?: string;
  }[];
}) {
  const hasDescriptions = props.some((p) => p.description);
  return (
    <div className="overflow-x-auto rounded-3xl border border-border">
      <table className="w-full min-w-14 text-left text-sm [&_td]:align-top [&_th]:align-top">
        <thead className="border-b border-border bg-muted/muted">
          <tr>
            <th className="px-4 py-3 font-medium">Prop</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Default</th>
            {hasDescriptions && (
              <th className="px-4 py-3 font-medium">Description</th>
            )}
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-b border-border last:border-b-0"
            >
              <td className="px-4 py-3 font-mono text-sm">{prop.name}</td>
              <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                {prop.type}
              </td>
              <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                {prop.defaultValue}
              </td>
              {hasDescriptions && (
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {prop.description ?? ""}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function AutocompletePage() {
  const anatomyHtml = await highlightCode(anatomyCode);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: site.name, path: "/" },
          { name: "Components", path: "/components" },
          { name: "Autocomplete", path: "/components/autocomplete" },
        ])}
      />
      <SetDocsToc items={toc} />

      <h1 className="text-3xl font-bold">Autocomplete</h1>
      <p className="mt-2 text-muted-foreground">
        An input that suggests options as you type while keeping free-form text
        in the field. Suggestions stay optional.
      </p>

      <section className="mt-8 space-y-8">
        <div className="space-y-3">
          <h2 id="default" className="scroll-mt-10 text-lg font-medium">
            Default
          </h2>
          <ComponentPreview code={defaultCode}>
            <DefaultDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="guidelines" className="scroll-mt-10 text-lg font-medium">
            Usage Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">
                Need a remembered selection?
              </span>{" "}
              Use Combobox instead. Autocomplete keeps free-form text in the
              field and suggestions are always optional — the user can type
              anything.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Give it an accessible name
              </span>{" "}
              by wrapping the input in a <InlineCode>{"<label>"}</InlineCode>.
              Never leave the input unlabelled.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Keyboard navigation
              </span>{" "}
              is built in. <InlineCode>↓ / ↑</InlineCode> move through items,{" "}
              <InlineCode>Enter</InlineCode> selects,{" "}
              <InlineCode>Escape</InlineCode> closes the popup,{" "}
              <InlineCode>Tab</InlineCode> closes and moves focus. Looping
              wraps from last to first item by default.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Object items need itemToStringValue
              </span>{" "}
              when the value you want in the input on selection is not the
              whole object. For example, if items are{" "}
              <InlineCode>{"{ value, label }"}"</InlineCode> objects, pass{" "}
              <InlineCode>{"itemToStringValue={(item) => item.label}"}</InlineCode>{" "}
              so the label fills the input instead of{" "}
              <InlineCode>[object Object]</InlineCode>.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Async / server-side filtering
              </span>{" "}
              — pass <InlineCode>filter={"{null}"}</InlineCode> to turn off
              built-in filtering, then supply{" "}
              <InlineCode>filteredItems</InlineCode> from your debounced fetch.
              Use <InlineCode>Autocomplete.Status</InlineCode> to announce
              loading state to screen readers.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Custom filter logic
              </span>{" "}
              — pass a function to <InlineCode>filter</InlineCode> to replace
              the default starts-with / contains matching. The function receives
              the item value, the current query string, and an optional{" "}
              <InlineCode>itemToString</InlineCode> helper.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Keep Empty and Status always mounted
              </span>{" "}
              — conditionally render their <em>children</em>, not the elements
              themselves, so screen reader live regions remain in the DOM and
              announcements fire correctly.
            </li>
          </ul>
          <p className="text-base text-muted-foreground">
            More detail in the{" "}
            <a
              href="https://base-ui.com/react/components/autocomplete"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Base UI Autocomplete docs
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          <h2 id="anatomy" className="scroll-mt-10 text-lg font-medium">
            Anatomy
          </h2>
          <div
            className="overflow-x-auto rounded-3xl border border-border bg-muted/intense p-4 font-mono text-sm [&_pre]:m-0 [&_pre]:bg-transparent! [&_pre]:p-0"
            dangerouslySetInnerHTML={{ __html: anatomyHtml }}
          />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="input-group" className="scroll-mt-10 text-lg font-medium">
              With icon and clear button
            </h2>
            <p className="text-base text-muted-foreground">
              Put a search icon and clear control inside{" "}
              <InlineCode>Autocomplete.InputGroup</InlineCode>, which shares one
              focus ring with the input.
            </p>
          </div>
          <ComponentPreview code={inputGroupCode}>
            <InputGroupDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="grouped" className="scroll-mt-10 text-lg font-medium">
              Grouped items
            </h2>
            <p className="text-base text-muted-foreground">
              Pass groups shaped like{" "}
              <InlineCode>{"{ value, items: [] }"}</InlineCode>, and render each
              with <InlineCode>Autocomplete.Group</InlineCode>, a label, and{" "}
              <InlineCode>Autocomplete.Collection</InlineCode> for its items.
            </p>
          </div>
          <ComponentPreview code={groupedCode}>
            <GroupedDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2
              id="auto-highlight"
              className="scroll-mt-10 text-lg font-medium"
            >
              Auto highlight
            </h2>
            <p className="text-base text-muted-foreground">
              Set <InlineCode>autoHighlight</InlineCode> so the first match
              highlights as you type. Use{" "}
              <InlineCode>&quot;always&quot;</InlineCode> when the list stays
              visible, such as inside a dialog.
            </p>
          </div>
          <ComponentPreview code={autoHighlightCode}>
            <AutoHighlightDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="inline" className="scroll-mt-10 text-lg font-medium">
              Inline autocomplete
            </h2>
            <p className="text-base text-muted-foreground">
              With <InlineCode>mode=&quot;both&quot;</InlineCode>, the list
              still filters as you type, and arrowing through options also fills
              the input with the highlighted label. Set{" "}
              <InlineCode>mode</InlineCode> to <InlineCode>list</InlineCode> to
              filter without filling, <InlineCode>inline</InlineCode> to fill
              without filtering, or <InlineCode>none</InlineCode> for neither.
            </p>
          </div>
          <ComponentPreview code={inlineCode}>
            <InlineDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="empty-status" className="scroll-mt-10 text-lg font-medium">
              Empty state and status
            </h2>
            <p className="text-base text-muted-foreground">
              Keep <InlineCode>Autocomplete.Empty</InlineCode> and{" "}
              <InlineCode>Autocomplete.Status</InlineCode> mounted, and swap
              their children rather than the elements themselves so screen
              readers still announce changes.
            </p>
          </div>
          <ComponentPreview code={emptyStatusCode}>
            <EmptyStatusDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="disabled" className="scroll-mt-10 text-lg font-medium">
              Disabled
            </h2>
            <p className="text-base text-muted-foreground">
              Pass <InlineCode>disabled</InlineCode> on{" "}
              <InlineCode>Autocomplete.Root</InlineCode> to disable the entire
              field. Pass <InlineCode>disabled</InlineCode> on an individual{" "}
              <InlineCode>Autocomplete.Item</InlineCode> to block that option
              while keeping the field active.
            </p>
          </div>
          <ComponentPreview code={disabledCode}>
            <DisabledDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="async" className="scroll-mt-10 text-lg font-medium">
              Async suggestions
            </h2>
            <p className="text-base text-muted-foreground">
              For server-side search, pass{" "}
              <InlineCode>filter={"{null}"}</InlineCode> to disable built-in
              filtering and supply <InlineCode>filteredItems</InlineCode> from
              your debounced fetch. Use{" "}
              <InlineCode>Autocomplete.Status</InlineCode> to announce the
              loading state to screen readers while results are in flight.
            </p>
          </div>
          <ComponentPreview code={asyncCode}>
            <AsyncDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <h2 id="props" className="scroll-mt-10 text-lg font-medium">
            Props
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Autocomplete.Root</h3>
            <PropsTable props={rootProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Autocomplete.Input</h3>
            <PropsTable props={inputProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Autocomplete.Item</h3>
            <PropsTable props={itemProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Autocomplete.List</h3>
            <PropsTable props={listProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Autocomplete.Group</h3>
            <PropsTable props={groupProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Autocomplete.Positioner</h3>
            <PropsTable props={positionerProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Autocomplete.useFilter</h3>
            <PropsTable props={filterHookProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">
              Autocomplete.useFilteredItems
            </h3>
            <PropsTable props={filteredItemsHookProps} />
          </div>

          <p className="text-base text-muted-foreground">
            This covers the parts used above. See the{" "}
            <a
              href="https://base-ui.com/react/components/autocomplete"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Base UI Autocomplete docs
            </a>{" "}
            for <InlineCode>Backdrop</InlineCode>,{" "}
            <InlineCode>Arrow</InlineCode>, <InlineCode>Row</InlineCode>,{" "}
            <InlineCode>Value</InlineCode>, event detail reasons, and every data
            attribute and CSS variable.
          </p>
        </div>
      </section>
    </>
  );
}
