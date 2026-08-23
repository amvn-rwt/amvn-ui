import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { InlineCode } from "@/components/docs/inline-code";
import { JsonLd } from "@/components/seo/json-ld";
import { highlightCode } from "@/lib/highlight-code";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

import {
  AutoHighlightDemo,
  DefaultDemo,
  EmptyStatusDemo,
  GroupedDemo,
  InlineDemo,
  InputGroupDemo,
  Command,
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
      <label className="flex w-12 flex-col gap-2 text-sm font-medium">
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
      <label className="flex w-12 flex-col gap-2 text-sm font-medium">
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

const commandCode = `import {
  CompassIcon,
  RadioIcon,
  RocketIcon,
  SearchIcon,
  SparklesIcon,
} from "lucide-react"
import { Autocomplete } from "@/components/ui/autocomplete"

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
]

export default function Example() {
  return (
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
                const Icon = item.icon
                return (
                  <Autocomplete.Item
                    key={item.value}
                    value={item}
                    className="flex items-center justify-between gap-3 px-3 py-2.5"
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted/faint text-info">
                        <Icon className="size-3.5" />
                      </div>
                      <div className="flex min-w-0 flex-col">
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
                )
              }}
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
  },
  {
    name: "value",
    type: "string | number | string[]",
    defaultValue: "—",
  },
  {
    name: "defaultValue",
    type: "string | number | string[]",
    defaultValue: "—",
  },
  {
    name: "onValueChange",
    type: "(value: string, eventDetails) => void",
    defaultValue: "—",
  },
  {
    name: "open",
    type: "boolean",
    defaultValue: "—",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean, eventDetails) => void",
    defaultValue: "—",
  },
  {
    name: "mode",
    type: "'list' | 'both' | 'inline' | 'none'",
    defaultValue: "'list'",
  },
  {
    name: "autoHighlight",
    type: "boolean | 'always'",
    defaultValue: "false",
  },
  {
    name: "keepHighlight",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "highlightItemOnHover",
    type: "boolean",
    defaultValue: "true",
  },
  {
    name: "filter",
    type: "((itemValue, query, itemToString?) => boolean) | null",
    defaultValue: "—",
  },
  {
    name: "filteredItems",
    type: "any[] | Group[]",
    defaultValue: "—",
  },
  {
    name: "itemToStringValue",
    type: "(itemValue: ItemValue) => string",
    defaultValue: "—",
  },
  {
    name: "limit",
    type: "number",
    defaultValue: "-1",
  },
  {
    name: "grid",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "inline",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "virtualized",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "openOnInputClick",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "loopFocus",
    type: "boolean",
    defaultValue: "true",
  },
  {
    name: "modal",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "submitOnItemClick",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "name",
    type: "string",
    defaultValue: "—",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "readOnly",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
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
  },
] as const;

const toc = [
  { id: "default", title: "Default" },
  { id: "guidelines", title: "Usage guidelines" },
  { id: "anatomy", title: "Anatomy" },
  { id: "input-group", title: "With icon and clear button" },
  { id: "grouped", title: "Grouped items" },
  { id: "auto-highlight", title: "Auto highlight" },
  { id: "inline", title: "Inline autocomplete" },
  { id: "empty-status", title: "Empty state and status" },
  { id: "command", title: "Command palette" },
  { id: "props", title: "Props" },
];

function PropsTable({
  props,
}: {
  props: readonly {
    name: string;
    type: string;
    defaultValue: string;
  }[];
}) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-border">
      <table className="w-full min-w-14 text-left text-sm">
        <thead className="border-b border-border bg-muted/muted">
          <tr>
            <th className="px-4 py-3 font-medium">Prop</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Default</th>
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
            Usage guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">
                Need a remembered selection?
              </span>{" "}
              Use Combobox instead: Autocomplete keeps free-form text, and
              suggestions are optional.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Command pickers work here
              </span>
              : the input can filter actions inside the popup, and clicking an
              item runs that action.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Give it an accessible name
              </span>{" "}
              by wrapping the input in a <InlineCode>{"<label>"}</InlineCode>,
              or use Field when you add forms later.
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
            <h2 id="command" className="scroll-mt-10 text-lg font-medium">
              Command palette
            </h2>
            <p className="text-base text-muted-foreground">
              Rich items work well for command pickers: pair a leading icon with
              a title and description, and add a trailing badge when an action
              needs extra context.
            </p>
          </div>
          <ComponentPreview code={commandCode}>
            <Command />
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
