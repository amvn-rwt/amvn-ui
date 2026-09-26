import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { InlineCode } from "@/components/docs/inline-code";
import { JsonLd } from "@/components/seo/json-ld";
import { highlightCode } from "@/lib/highlight-code";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

import {
  ArrowDemo,
  CheckboxItemsDemo,
  DefaultDemo,
  DetachedTriggerPayloadDemo,
  GroupLabelsDemo,
  LinkItemsDemo,
  OpenDialogDemo,
  OpenOnHoverDemo,
  RadioItemsDemo,
  SubmenuDemo,
} from "./demos";

export const metadata = createPageMetadata({
  title: "Menu",
  description:
    "Menu for amvn.ui: a dropdown list of actions with keyboard navigation, nested submenus, and checkbox or radio items, built with Base UI and Tailwind CSS.",
  path: "/components/menu",
});

const anatomyCode = `import { Menu } from "@/components/ui/menu"

<Menu.Root>
  <Menu.Trigger />
  <Menu.Portal>
    <Menu.Backdrop />
    <Menu.Positioner>
      <Menu.Popup>
        <Menu.Arrow />
        <Menu.Item>
          <Menu.Shortcut />
        </Menu.Item>
        <Menu.LinkItem />
        <Menu.Separator />

        <Menu.SubmenuRoot>
          <Menu.SubmenuTrigger />
        </Menu.SubmenuRoot>

        <Menu.Group>
          <Menu.GroupLabel />
        </Menu.Group>

        <Menu.RadioGroup>
          <Menu.GroupLabel />
          <Menu.RadioItem>
            <Menu.RadioItemIndicator />
          </Menu.RadioItem>
        </Menu.RadioGroup>

        <Menu.CheckboxItem>
          <Menu.CheckboxItemIndicator />
        </Menu.CheckboxItem>

        <Menu.Viewport />
      </Menu.Popup>
    </Menu.Positioner>
  </Menu.Portal>
</Menu.Root>`;

const defaultCode = `import {
  CopyIcon,
  PencilIcon,
  ShareIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function Example() {
  return (
    <Menu.Root>
      <Menu.Trigger render={<Button variant="outline">Song</Button>} />
      <Menu.Portal>
        <Menu.Positioner align="start">
          <Menu.Popup>
            <Menu.Item>
              <PencilIcon />
              Rename
              <Menu.Shortcut>⌘R</Menu.Shortcut>
            </Menu.Item>
            <Menu.Item>
              <CopyIcon />
              Duplicate
              <Menu.Shortcut>⌘D</Menu.Shortcut>
            </Menu.Item>
            <Menu.Item>
              <StarIcon />
              Favorite
              <Menu.Shortcut>⌘F</Menu.Shortcut>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              <ShareIcon />
              Share
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item variant="danger">
              <Trash2Icon />
              Delete
              <Menu.Shortcut>⌘⌫</Menu.Shortcut>
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}`;

const openOnHoverCode = `import { FolderPlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function Example() {
  return (
    <Menu.Root>
      <Menu.Trigger
        openOnHover
        render={<Button variant="outline">Add to playlist</Button>}
      />
      <Menu.Portal>
        <Menu.Positioner align="start">
          <Menu.Popup>
            <Menu.Item>Get Up!</Menu.Item>
            <Menu.Item>Inside Out</Menu.Item>
            <Menu.Item>Night Beats</Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              <FolderPlusIcon />
              New playlist…
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}`;

const checkboxItemsCode = `"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function Example() {
  const [showMinimap, setShowMinimap] = React.useState(true)
  const [showSearch, setShowSearch] = React.useState(true)
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <Menu.Root>
      <Menu.Trigger render={<Button variant="outline">Workspace</Button>} />
      <Menu.Portal>
        <Menu.Positioner align="start">
          <Menu.Popup>
            <Menu.CheckboxItem
              checked={showMinimap}
              onCheckedChange={setShowMinimap}
            >
              <Menu.CheckboxItemIndicator />
              Minimap
            </Menu.CheckboxItem>
            <Menu.CheckboxItem
              checked={showSearch}
              onCheckedChange={setShowSearch}
            >
              <Menu.CheckboxItemIndicator />
              Search
            </Menu.CheckboxItem>
            <Menu.CheckboxItem
              checked={showSidebar}
              onCheckedChange={setShowSidebar}
            >
              <Menu.CheckboxItemIndicator />
              Sidebar
            </Menu.CheckboxItem>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}`;

const radioItemsCode = `"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function Example() {
  const [value, setValue] = React.useState("date")

  return (
    <Menu.Root>
      <Menu.Trigger render={<Button variant="outline">Sort</Button>} />
      <Menu.Portal>
        <Menu.Positioner align="start">
          <Menu.Popup>
            <Menu.RadioGroup value={value} onValueChange={setValue}>
              <Menu.RadioItem value="date">
                <Menu.RadioItemIndicator />
                Date
              </Menu.RadioItem>
              <Menu.RadioItem value="name">
                <Menu.RadioItemIndicator />
                Name
              </Menu.RadioItem>
              <Menu.RadioItem value="type">
                <Menu.RadioItemIndicator />
                Type
              </Menu.RadioItem>
            </Menu.RadioGroup>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}`;

const groupLabelsCode = `"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function Example() {
  const [value, setValue] = React.useState("date")
  const [showMinimap, setShowMinimap] = React.useState(true)
  const [showSearch, setShowSearch] = React.useState(true)
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <Menu.Root>
      <Menu.Trigger render={<Button variant="outline">View</Button>} />
      <Menu.Portal>
        <Menu.Positioner align="start">
          <Menu.Popup>
            <Menu.RadioGroup value={value} onValueChange={setValue}>
              <Menu.GroupLabel>Sort</Menu.GroupLabel>
              <Menu.RadioItem value="date">
                <Menu.RadioItemIndicator />
                Date
              </Menu.RadioItem>
              <Menu.RadioItem value="name">
                <Menu.RadioItemIndicator />
                Name
              </Menu.RadioItem>
              <Menu.RadioItem value="type">
                <Menu.RadioItemIndicator />
                Type
              </Menu.RadioItem>
            </Menu.RadioGroup>

            <Menu.Separator />

            <Menu.Group>
              <Menu.GroupLabel>Workspace</Menu.GroupLabel>
              <Menu.CheckboxItem
                checked={showMinimap}
                onCheckedChange={setShowMinimap}
              >
                <Menu.CheckboxItemIndicator />
                Minimap
              </Menu.CheckboxItem>
              <Menu.CheckboxItem
                checked={showSearch}
                onCheckedChange={setShowSearch}
              >
                <Menu.CheckboxItemIndicator />
                Search
              </Menu.CheckboxItem>
              <Menu.CheckboxItem
                checked={showSidebar}
                onCheckedChange={setShowSidebar}
              >
                <Menu.CheckboxItemIndicator />
                Sidebar
              </Menu.CheckboxItem>
            </Menu.Group>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}`;

const submenuCode = `import {
  FolderPlusIcon,
  ShareIcon,
  StarIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

function getSubmenuOffset({
  side,
}: {
  side?: "top" | "bottom" | "left" | "right" | "inline-end" | "inline-start"
}) {
  return side === "top" || side === "bottom" ? 4 : -4
}

export default function Example() {
  return (
    <Menu.Root>
      <Menu.Trigger render={<Button variant="outline">Song</Button>} />
      <Menu.Portal>
        <Menu.Positioner align="start">
          <Menu.Popup>
            <Menu.Item>
              <StarIcon />
              Add to Library
            </Menu.Item>

            <Menu.SubmenuRoot>
              <Menu.SubmenuTrigger>Add to Playlist</Menu.SubmenuTrigger>
              <Menu.Portal>
                <Menu.Positioner
                  sideOffset={getSubmenuOffset}
                  alignOffset={getSubmenuOffset}
                >
                  <Menu.Popup>
                    <Menu.Item>Get Up!</Menu.Item>
                    <Menu.Item>Inside Out</Menu.Item>
                    <Menu.Item>Night Beats</Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>
                      <FolderPlusIcon />
                      New playlist…
                    </Menu.Item>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.SubmenuRoot>

            <Menu.Separator />
            <Menu.Item>Play Next</Menu.Item>
            <Menu.Item>Play Last</Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              <ShareIcon />
              Share
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}`;

const linkItemsCode = `import { LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function Example() {
  return (
    <Menu.Root>
      <Menu.Trigger render={<Button variant="outline">Navigate</Button>} />
      <Menu.Portal>
        <Menu.Positioner align="start">
          <Menu.Popup>
            <Menu.LinkItem href="/components/alert-dialog">
              <LinkIcon />
              Alert Dialog
            </Menu.LinkItem>
            <Menu.LinkItem href="/components/autocomplete">
              <LinkIcon />
              Autocomplete
            </Menu.LinkItem>
            <Menu.LinkItem href="/components/tabs">
              <LinkIcon />
              Tabs
            </Menu.LinkItem>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}`;

const openDialogCode = `"use client"

import * as React from "react"
import { EyeIcon, ShareIcon, Trash2Icon } from "lucide-react"
import { AlertDialog } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function Example() {
  const [dialogOpen, setDialogOpen] = React.useState(false)

  return (
    <>
      <Menu.Root>
        <Menu.Trigger render={<Button variant="outline">Mission</Button>} />
        <Menu.Portal>
          <Menu.Positioner align="start">
            <Menu.Popup>
              <Menu.Item>
                <EyeIcon />
                View flight log
              </Menu.Item>
              <Menu.Item>
                <ShareIcon />
                Share telemetry
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item variant="danger" onClick={() => setDialogOpen(true)}>
                <Trash2Icon />
                Discard flight log
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <AlertDialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            <AlertDialog.Header>
              <AlertDialog.Title>Discard flight log?</AlertDialog.Title>
              <AlertDialog.Description>
                This mission data can't be recovered once you leave orbit.
              </AlertDialog.Description>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <AlertDialog.Close
                render={<Button variant="secondary">Cancel</Button>}
              />
              <AlertDialog.Close
                render={<Button variant="danger">Discard</Button>}
              />
            </AlertDialog.Footer>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  )
}`;

const detachedTriggerPayloadCode = `"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

type MissionPayload = {
  title: string
  items: string[]
}

// Created once outside the component. Connects triggers to the menu
// without either one needing to be a descendant of the other.
const handle = Menu.createHandle<MissionPayload>()

const missionMenus = [
  {
    label: "Library",
    payload: {
      title: "Library",
      items: ["Add to hangar", "Add to favorites", "Create playlist"],
    },
  },
  {
    label: "Playback",
    payload: {
      title: "Playback",
      items: ["Play next", "Play last", "Add to queue"],
    },
  },
  {
    label: "Share",
    payload: {
      title: "Share",
      items: ["Copy link", "Share with crew", "Export telemetry"],
    },
  },
]

export default function Example() {
  return (
    <>
      {missionMenus.map((menu) => (
        <Menu.Trigger
          key={menu.label}
          handle={handle}
          payload={menu.payload}
          render={<Button variant="outline">{menu.label}</Button>}
        />
      ))}
      <Menu.Root<MissionPayload> handle={handle}>
        {({ payload }) => (
          <Menu.Portal>
            <Menu.Positioner align="start">
              <Menu.Popup>
                <Menu.GroupLabel>{payload?.title}</Menu.GroupLabel>
                <Menu.Viewport>
                  {(payload?.items ?? []).map((item) => (
                    <Menu.Item key={item}>{item}</Menu.Item>
                  ))}
                </Menu.Viewport>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        )}
      </Menu.Root>
    </>
  )
}`;

const arrowCode = `import {
  FolderPlusIcon,
  ShareIcon,
  StarIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"

export default function Example() {
  return (
    <Menu.Root>
      <Menu.Trigger render={<Button variant="outline">Song</Button>} />
      <Menu.Portal>
        <Menu.Positioner
          align="start"
          sideOffset={({ side }) => (side === "top" ? 12 : 8)}
        >
          <Menu.Popup>
            <Menu.Arrow />
            <Menu.Item>
              <StarIcon />
              Add to Library
            </Menu.Item>
            <Menu.Item>
              <FolderPlusIcon />
              Add to Playlist
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item>Play Next</Menu.Item>
            <Menu.Item>Play Last</Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              <ShareIcon />
              Share
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}`;

const rootProps = [
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
    name: "handle",
    type: "MenuHandle<Payload>",
    defaultValue: "—",
  },
  {
    name: "modal",
    type: "boolean",
    defaultValue: "true",
  },
  {
    name: "loopFocus",
    type: "boolean",
    defaultValue: "true",
  },
  {
    name: "orientation",
    type: "'vertical' | 'horizontal'",
    defaultValue: "'vertical'",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
] as const;

const triggerProps = [
  {
    name: "openOnHover",
    type: "boolean",
    defaultValue: "—",
  },
  {
    name: "delay",
    type: "number",
    defaultValue: "100",
  },
  {
    name: "closeDelay",
    type: "number",
    defaultValue: "0",
  },
  {
    name: "payload",
    type: "Payload",
    defaultValue: "—",
  },
  {
    name: "handle",
    type: "MenuHandle<Payload>",
    defaultValue: "—",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
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
    defaultValue: "6",
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

const itemProps = [
  {
    name: "variant",
    type: "'default' | 'danger'",
    defaultValue: "'default'",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "closeOnClick",
    type: "boolean",
    defaultValue: "true",
  },
  {
    name: "label",
    type: "string",
    defaultValue: "—",
  },
] as const;

const checkboxItemProps = [
  {
    name: "checked",
    type: "boolean",
    defaultValue: "—",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean, eventDetails) => void",
    defaultValue: "—",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "closeOnClick",
    type: "boolean",
    defaultValue: "false",
  },
] as const;

const radioItemProps = [
  {
    name: "value",
    type: "any",
    defaultValue: "—",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "closeOnClick",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "label",
    type: "string",
    defaultValue: "—",
  },
] as const;

const toc = [
  { id: "default", title: "Default" },
  { id: "anatomy", title: "Anatomy" },
  { id: "open-on-hover", title: "Open on hover" },
  { id: "checkbox-items", title: "Checkbox items" },
  { id: "radio-items", title: "Radio items" },
  { id: "group-labels", title: "Group labels" },
  { id: "submenu", title: "Submenu" },
  { id: "link-items", title: "Link items" },
  { id: "open-a-dialog", title: "Open a dialog" },
  { id: "detached-trigger", title: "Detached trigger with payload" },
  { id: "arrow", title: "Arrow" },
  { id: "guidelines", title: "Usage Guidelines" },
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
      <table className="w-full min-w-lg text-left text-sm">
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

export default async function MenuPage() {
  const anatomyHtml = await highlightCode(anatomyCode);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: site.name, path: "/" },
          { name: "Components", path: "/components" },
          { name: "Menu", path: "/components/menu" },
        ])}
      />
      <SetDocsToc items={toc} />

      <h1 className="text-3xl font-bold">Menu</h1>
      <p className="mt-2 text-muted-foreground">
        A dropdown list of actions tied to a trigger, with keyboard navigation,
        nested submenus, and optional checkbox or radio items.
      </p>

      <section className="mt-16 space-y-16">
        <div className="space-y-3">
          <h2 id="default" className="scroll-mt-32 text-lg font-medium">
            Default
          </h2>
          <ComponentPreview code={defaultCode}>
            <DefaultDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="anatomy" className="scroll-mt-32 text-lg font-medium">
            Anatomy
          </h2>
          <div
            className="overflow-x-auto rounded-3xl border border-border bg-muted/intense p-4 font-mono text-sm [&_pre]:m-0 [&_pre]:bg-transparent! [&_pre]:p-0"
            dangerouslySetInnerHTML={{ __html: anatomyHtml }}
          />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="open-on-hover" className="scroll-mt-32 text-lg font-medium">
              Open on hover
            </h2>
            <p className="text-base text-muted-foreground">
              Set <InlineCode>openOnHover</InlineCode> on the trigger so the
              menu opens when the pointer rests on it. Tune{" "}
              <InlineCode>delay</InlineCode> and{" "}
              <InlineCode>closeDelay</InlineCode> when the default timing feels
              too eager or too sticky.
            </p>
          </div>
          <ComponentPreview code={openOnHoverCode}>
            <OpenOnHoverDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2
              id="checkbox-items"
              className="scroll-mt-32 text-lg font-medium"
            >
              Checkbox items
            </h2>
            <p className="text-base text-muted-foreground">
              Use <InlineCode>Menu.CheckboxItem</InlineCode> for independent
              on/off settings. The menu stays open by default so people can
              toggle several options in one visit.
            </p>
          </div>
          <ComponentPreview code={checkboxItemsCode}>
            <CheckboxItemsDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="radio-items" className="scroll-mt-32 text-lg font-medium">
              Radio items
            </h2>
            <p className="text-base text-muted-foreground">
              Wrap exclusive choices in{" "}
              <InlineCode>Menu.RadioGroup</InlineCode>. Only one{" "}
              <InlineCode>Menu.RadioItem</InlineCode> can be selected at a time.
            </p>
          </div>
          <ComponentPreview code={radioItemsCode}>
            <RadioItemsDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="group-labels" className="scroll-mt-32 text-lg font-medium">
              Group labels
            </h2>
            <p className="text-base text-muted-foreground">
              <InlineCode>Menu.GroupLabel</InlineCode> names a cluster of
              related items. Place it inside a radio group or a{" "}
              <InlineCode>Menu.Group</InlineCode> so the label is associated
              with those items for assistive tech.
            </p>
          </div>
          <ComponentPreview code={groupLabelsCode}>
            <GroupLabelsDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="submenu" className="scroll-mt-32 text-lg font-medium">
              Submenu
            </h2>
            <p className="text-base text-muted-foreground">
              Nest another menu with <InlineCode>Menu.SubmenuRoot</InlineCode>{" "}
              and reuse <InlineCode>Menu.Portal</InlineCode>,{" "}
              <InlineCode>Menu.Positioner</InlineCode>, and{" "}
              <InlineCode>Menu.Popup</InlineCode>. Pass offset functions to{" "}
              <InlineCode>sideOffset</InlineCode> and{" "}
              <InlineCode>alignOffset</InlineCode> so the nested popup sits
              flush against the parent on every side.
            </p>
          </div>
          <ComponentPreview code={submenuCode}>
            <SubmenuDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="link-items" className="scroll-mt-32 text-lg font-medium">
              Link items
            </h2>
            <p className="text-base text-muted-foreground">
              <InlineCode>Menu.LinkItem</InlineCode> renders an anchor for
              navigation. Use it when the action should change the route instead
              of running a local handler.
            </p>
          </div>
          <ComponentPreview code={linkItemsCode}>
            <LinkItemsDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="open-a-dialog" className="scroll-mt-32 text-lg font-medium">
              Open a dialog
            </h2>
            <p className="text-base text-muted-foreground">
              Destructive menu items can open an{" "}
              <InlineCode>AlertDialog</InlineCode> for confirmation. Keep the
              dialog outside the menu tree and open it from the item{" "}
              <InlineCode>onClick</InlineCode>.
            </p>
          </div>
          <ComponentPreview code={openDialogCode}>
            <OpenDialogDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2
              id="detached-trigger"
              className="scroll-mt-32 text-lg font-medium"
            >
              Detached trigger with payload
            </h2>
            <p className="text-base text-muted-foreground">
              A handle from <InlineCode>Menu.createHandle()</InlineCode>{" "}
              connects triggers that live outside{" "}
              <InlineCode>Menu.Root</InlineCode>. Pass a{" "}
              <InlineCode>payload</InlineCode> on each trigger and read it back
              with a function child so one menu can render different content per
              opener.
            </p>
          </div>
          <ComponentPreview code={detachedTriggerPayloadCode}>
            <DetachedTriggerPayloadDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="arrow" className="scroll-mt-32 text-lg font-medium">
              Arrow
            </h2>
            <p className="text-base text-muted-foreground">
              Add <InlineCode>Menu.Arrow</InlineCode> inside the popup when you
              want a pointing cue toward the trigger. Bump{" "}
              <InlineCode>sideOffset</InlineCode> so the arrow has room to sit
              between the trigger and the panel.
            </p>
          </div>
          <ComponentPreview code={arrowCode}>
            <ArrowDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="guidelines" className="scroll-mt-32 text-lg font-medium">
            Usage Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-base text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">
                Menu vs. Alert Dialog
              </span>{" "}
              Use Menu for lists of actions tied to a control. Reach for Alert
              Dialog when an action needs an interrupting confirmation before it
              runs.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Styled triggers
              </span>{" "}
              The trigger part is unstyled by default. Compose it with{" "}
              <InlineCode>{`render={<Button variant="outline" />}`}</InlineCode>{" "}
              so it matches the rest of the control set.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Destructive actions
              </span>{" "}
              Mark irreversible items with{" "}
              <InlineCode>{`variant="danger"`}</InlineCode>. When the stakes
              are high, follow through with an Alert Dialog instead of acting
              immediately.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h2 id="props" className="scroll-mt-32 text-lg font-medium">
            Props
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Menu.Root</h3>
            <PropsTable props={rootProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Menu.Trigger</h3>
            <PropsTable props={triggerProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Menu.Positioner</h3>
            <PropsTable props={positionerProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Menu.Item</h3>
            <PropsTable props={itemProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Menu.CheckboxItem</h3>
            <PropsTable props={checkboxItemProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Menu.RadioItem</h3>
            <PropsTable props={radioItemProps} />
          </div>

          <p className="text-base text-muted-foreground">
            This covers the parts used above. See the{" "}
            <a
              href="https://base-ui.com/react/components/menu"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Base UI Menu docs
            </a>{" "}
            for <InlineCode>actionsRef</InlineCode>, event details, CSS
            variables and data attributes.
          </p>
        </div>
      </section>
    </>
  );
}
