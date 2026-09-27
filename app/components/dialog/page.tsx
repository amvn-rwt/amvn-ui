import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { InlineCode } from "@/components/docs/inline-code";
import { JsonLd } from "@/components/seo/json-ld";
import { highlightCode } from "@/lib/highlight-code";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

import {
  CloseConfirmationDemo,
  DefaultDemo,
  FormDemo,
  LongContentDemo,
  NestedDemo,
  OpenFromMenuDemo,
  PayloadDemo,
  ScrollableBodyDemo,
} from "./demos";

export const metadata = createPageMetadata({
  title: "Dialog",
  description:
    "Dialog for amvn.ui: a modal overlay for forms, details, and focused tasks, built with Base UI and Tailwind CSS.",
  path: "/components/dialog",
});

const anatomyCode = `import { Dialog } from "@/components/ui/dialog"

<Dialog.Root>
  <Dialog.Trigger />
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Viewport>
      <Dialog.Popup>
        <Dialog.CloseButton />
        <Dialog.Header>
          <Dialog.Title />
          <Dialog.Description />
        </Dialog.Header>
        <Dialog.Body />
        <Dialog.Footer>
          <Dialog.Close />
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog.Viewport>
  </Dialog.Portal>
</Dialog.Root>`;

const defaultCode = `import { FileTextIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"

export default function Example() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={
          <Button variant="outline">
            <FileTextIcon />
            Mission Brief
          </Button>
        }
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Viewport>
          <Dialog.Popup>
            <Dialog.CloseButton />
            <Dialog.Header>
              <Dialog.Title>Mission brief</Dialog.Title>
              <Dialog.Description>
                Orbit insertion burn starts at 14:22 UTC. Review the objectives
                before you leave the hangar.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <dl className="grid gap-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Window</dt>
                  <dd className="font-medium text-foreground">14:22-14:40 UTC</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Altitude</dt>
                  <dd className="font-medium text-foreground">410 km</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Inclination</dt>
                  <dd className="font-medium text-foreground">51.6°</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Crew</dt>
                  <dd className="font-medium text-foreground">3 on station</dd>
                </div>
              </dl>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close
                render={<Button variant="secondary">Got it</Button>}
              />
            </Dialog.Footer>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  )
}`;

const formCode = `import * as React from "react"
import { UserIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"

export default function Example() {
  const [open, setOpen] = React.useState(false)
  const callsignRef = React.useRef<HTMLInputElement>(null)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        render={
          <Button variant="outline">
            <UserIcon />
            Edit Crew Profile
          </Button>
        }
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Viewport>
          <Dialog.Popup initialFocus={callsignRef}>
            <Dialog.CloseButton />
            <Dialog.Header>
              <Dialog.Title>Edit crew profile</Dialog.Title>
              <Dialog.Description>
                Update the callsign and role shown on the roster before the next
                briefing.
              </Dialog.Description>
            </Dialog.Header>
            <form
              className="flex min-h-0 flex-1 flex-col"
              onSubmit={(event) => {
                event.preventDefault()
                setOpen(false)
              }}
            >
              <Dialog.Body className="flex flex-col gap-4">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">Callsign</span>
                  <input
                    ref={callsignRef}
                    name="callsign"
                    defaultValue="Comet"
                    className="h-8 w-full rounded-full border border-border bg-muted/faint px-3 text-sm outline-none"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">Role</span>
                  <input
                    name="role"
                    defaultValue="Flight Commander"
                    className="h-8 w-full rounded-full border border-border bg-muted/faint px-3 text-sm outline-none"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">Notes</span>
                  <textarea
                    name="notes"
                    rows={3}
                    defaultValue="Prefers night-side docking approaches."
                    className="min-h-24 w-full resize-y rounded-2xl border border-border bg-muted/faint px-3 py-2 text-sm outline-none"
                  />
                </label>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.Close
                  render={<Button variant="secondary">Cancel</Button>}
                />
                <Button type="submit">Save</Button>
              </Dialog.Footer>
            </form>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  )
}`;

const scrollableBodyCode = `import { ClipboardListIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"

const checklistItems = [
  "Confirm propellant pressure within launch band",
  "Verify range safety uplink and abort tones",
  "Seal crew hatch and check cabin differential",
  // ...more items
]

export default function Example() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={
          <Button variant="outline">
            <ClipboardListIcon />
            Pre-Launch Checklist
          </Button>
        }
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Viewport>
          <Dialog.Popup>
            <Dialog.CloseButton />
            <Dialog.Header>
              <Dialog.Title>Pre-launch checklist</Dialog.Title>
              <Dialog.Description>
                Work through each station call before you arm the auto-sequence.
                The list scrolls while the header and footer stay put.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <ol className="list-decimal space-y-3 pl-5 text-sm text-foreground">
                {checklistItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close
                render={<Button variant="secondary">Close</Button>}
              />
              <Dialog.Close render={<Button>Mark Complete</Button>} />
            </Dialog.Footer>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  )
}`;

const longContentCode = `import { ScrollTextIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"

const missionLogParagraphs = [
  "T-00:42:18 Pad cameras show vapor venting from the LOX feedline as expected.",
  "T-00:31:05 Navigation computers finished the final ephemeris load.",
  // ...more paragraphs
]

export default function Example() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={
          <Button variant="outline">
            <ScrollTextIcon />
            Mission Log
          </Button>
        }
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Viewport>
          <Dialog.Popup className="max-h-none max-w-2xl">
            <Dialog.CloseButton />
            <Dialog.Header>
              <Dialog.Title>Mission log</Dialog.Title>
              <Dialog.Description>
                Full countdown transcript for Flight 47. Scroll the page-like
                dialog to review every milestone through liftoff.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body className="space-y-4">
              {missionLogParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm text-foreground">
                  {paragraph}
                </p>
              ))}
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close
                render={<Button variant="secondary">Close</Button>}
              />
            </Dialog.Footer>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  )
}`;

const nestedCode = `import { BellIcon, SettingsIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"

export default function Example() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={
          <Button variant="outline">
            <SettingsIcon />
            Crew Settings
          </Button>
        }
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Viewport>
          <Dialog.Popup>
            <Dialog.CloseButton />
            <Dialog.Header>
              <Dialog.Title>Crew settings</Dialog.Title>
              <Dialog.Description>
                Manage how the station surfaces alerts and shift reminders.
                Opening preferences nests a second dialog on top.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-border px-4 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    Notification preferences
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Choose which channels reach the crew during flight.
                  </p>
                </div>
                <Dialog.Root>
                  <Dialog.Trigger
                    render={
                      <Button variant="outline" size="sm">
                        <BellIcon />
                        Open
                      </Button>
                    }
                  />
                  <Dialog.Portal>
                    <Dialog.Backdrop />
                    <Dialog.Viewport>
                      <Dialog.Popup>
                        <Dialog.CloseButton />
                        <Dialog.Header>
                          <Dialog.Title>Notification preferences</Dialog.Title>
                          <Dialog.Description>
                            Toggle the channels that wake the duty officer during
                            a hold.
                          </Dialog.Description>
                        </Dialog.Header>
                        <Dialog.Body>{/* preference rows */}</Dialog.Body>
                        <Dialog.Footer>
                          <Dialog.Close
                            render={<Button variant="secondary">Cancel</Button>}
                          />
                          <Dialog.Close render={<Button>Save</Button>} />
                        </Dialog.Footer>
                      </Dialog.Popup>
                    </Dialog.Viewport>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Close
                render={<Button variant="secondary">Close</Button>}
              />
            </Dialog.Footer>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  )
}`;

const closeConfirmationCode = `import * as React from "react"
import { PencilIcon } from "lucide-react"
import { AlertDialog } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"

export default function Example() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [confirmationOpen, setConfirmationOpen] = React.useState(false)
  const [draft, setDraft] = React.useState("")

  return (
    <Dialog.Root
      open={dialogOpen}
      onOpenChange={(open) => {
        if (!open && draft.trim()) {
          setConfirmationOpen(true)
        } else {
          if (!open) {
            setDraft("")
          }
          setDialogOpen(open)
        }
      }}
    >
      <Dialog.Trigger
        render={
          <Button variant="outline">
            <PencilIcon />
            New Log Entry
          </Button>
        }
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Viewport>
          <Dialog.Popup>
            <Dialog.CloseButton />
            <Dialog.Header>
              <Dialog.Title>New log entry</Dialog.Title>
              <Dialog.Description>
                Draft a note for the flight log. Closing with unsaved text asks
                you to confirm first.
              </Dialog.Description>
            </Dialog.Header>
            <form
              className="flex min-h-0 flex-1 flex-col"
              onSubmit={(event) => {
                event.preventDefault()
                setDraft("")
                setDialogOpen(false)
              }}
            >
              <Dialog.Body>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">Entry</span>
                  <textarea
                    name="entry"
                    rows={5}
                    required
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder="What happened on station?"
                    className="min-h-24 w-full resize-y rounded-2xl border border-border bg-muted/faint px-3 py-2 text-sm outline-none"
                  />
                </label>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.Close
                  render={<Button variant="secondary">Cancel</Button>}
                />
                <Button type="submit">Post Entry</Button>
              </Dialog.Footer>
            </form>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>

      <AlertDialog.Root
        open={confirmationOpen}
        onOpenChange={setConfirmationOpen}
      >
        <AlertDialog.Portal>
          <AlertDialog.Popup>
            <AlertDialog.Header>
              <AlertDialog.Title>Discard entry?</AlertDialog.Title>
              <AlertDialog.Description>
                Your draft will be lost if you leave without posting.
              </AlertDialog.Description>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>Keep Editing</AlertDialog.Cancel>
              <AlertDialog.Action
                onClick={() => {
                  setConfirmationOpen(false)
                  setDraft("")
                  setDialogOpen(false)
                }}
              >
                Discard
              </AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </Dialog.Root>
  )
}`;

const openFromMenuCode = `import * as React from "react"
import { EyeIcon, PencilIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import { Menu } from "@/components/ui/menu"

export default function Example() {
  const [dialogOpen, setDialogOpen] = React.useState(false)

  return (
    <>
      <Menu.Root>
        <Menu.Trigger render={<Button variant="outline">Track</Button>} />
        <Menu.Portal>
          <Menu.Positioner align="start">
            <Menu.Popup>
              <Menu.Item>
                <PencilIcon />
                Rename track
              </Menu.Item>
              <Menu.Item onClick={() => setDialogOpen(true)}>
                <EyeIcon />
                View details
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item variant="danger">Delete track</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Viewport>
            <Dialog.Popup>
              <Dialog.CloseButton />
              <Dialog.Header>
                <Dialog.Title>Track details</Dialog.Title>
                <Dialog.Description>
                  Night Beats · 24 songs · last updated this orbit.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Body>{/* track metadata */}</Dialog.Body>
              <Dialog.Footer>
                <Dialog.Close
                  render={<Button variant="secondary">Close</Button>}
                />
              </Dialog.Footer>
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}`;

const payloadCode = `import { UsersIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"

type CrewMember = {
  name: string
  role: string
  callsign: string
  status: string
}

// One handle and one dialog. Each trigger passes its own payload so the
// popup can render the right crew member.
const handle = Dialog.createHandle<CrewMember>()

const crewRoster: CrewMember[] = [
  {
    name: "Mira Chen",
    role: "Flight Commander",
    callsign: "Comet",
    status: "On station",
  },
  {
    name: "Jonah Reyes",
    role: "Systems Engineer",
    callsign: "Relay",
    status: "EVA prep",
  },
  {
    name: "Asha Okonkwo",
    role: "Mission Specialist",
    callsign: "Orbit",
    status: "Rest cycle",
  },
]

export default function Example() {
  return (
    <>
      {crewRoster.map((member) => (
        <Dialog.Trigger
          key={member.callsign}
          handle={handle}
          payload={member}
          render={
            <Button variant="outline" size="sm">
              <UsersIcon />
              View
            </Button>
          }
        />
      ))}
      <Dialog.Root<CrewMember> handle={handle}>
        {({ payload }) => (
          <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Viewport>
              <Dialog.Popup>
                <Dialog.CloseButton />
                <Dialog.Header>
                  <Dialog.Title>{payload?.name}</Dialog.Title>
                  <Dialog.Description>
                    Roster card for callsign {payload?.callsign}.
                  </Dialog.Description>
                </Dialog.Header>
                <Dialog.Body>
                  <dl className="grid gap-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Role</dt>
                      <dd className="font-medium text-foreground">
                        {payload?.role}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Callsign</dt>
                      <dd className="font-medium text-foreground">
                        {payload?.callsign}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Status</dt>
                      <dd className="font-medium text-foreground">
                        {payload?.status}
                      </dd>
                    </div>
                  </dl>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.Close
                    render={<Button variant="secondary">Close</Button>}
                  />
                </Dialog.Footer>
              </Dialog.Popup>
            </Dialog.Viewport>
          </Dialog.Portal>
        )}
      </Dialog.Root>
    </>
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
    name: "modal",
    type: "boolean | 'trap-focus'",
    defaultValue: "true",
  },
  {
    name: "disablePointerDismissal",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "handle",
    type: "DialogHandle<Payload>",
    defaultValue: "—",
  },
] as const;

const triggerProps = [
  {
    name: "handle",
    type: "DialogHandle<Payload>",
    defaultValue: "—",
  },
  {
    name: "payload",
    type: "Payload",
    defaultValue: "—",
  },
  {
    name: "id",
    type: "string",
    defaultValue: "—",
  },
] as const;

const popupProps = [
  {
    name: "initialFocus",
    type: "boolean | RefObject | (openType) => boolean | HTMLElement | null | void",
    defaultValue: "—",
  },
  {
    name: "finalFocus",
    type: "boolean | RefObject | (closeType) => boolean | HTMLElement | null | void",
    defaultValue: "—",
  },
] as const;

const closeButtonProps = [
  {
    name: "aria-label",
    type: "string",
    defaultValue: '"Close"',
  },
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "<XIcon />",
  },
] as const;

const toc = [
  { id: "default", title: "Default" },
  { id: "anatomy", title: "Anatomy" },
  { id: "form", title: "Form" },
  { id: "scrollable-body", title: "Scrollable body" },
  { id: "long-content", title: "Long content" },
  { id: "nested", title: "Nested" },
  { id: "close-confirmation", title: "Close confirmation" },
  { id: "open-from-menu", title: "Open from a menu" },
  { id: "payload", title: "Multiple triggers with payload" },
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

export default async function DialogPage() {
  const anatomyHtml = await highlightCode(anatomyCode);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: site.name, path: "/" },
          { name: "Components", path: "/components" },
          { name: "Dialog", path: "/components/dialog" },
        ])}
      />
      <SetDocsToc items={toc} />

      <h1 className="text-3xl font-bold">Dialog</h1>
      <p className="mt-2 text-muted-foreground">
        A modal overlay for forms, details, and focused tasks. Backdrop clicks,
        Escape, and an explicit close all dismiss it by default.
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
            <h2 id="form" className="scroll-mt-32 text-lg font-medium">
              Form
            </h2>
            <p className="text-base text-muted-foreground">
              Wrap <InlineCode>Body</InlineCode> and{" "}
              <InlineCode>Footer</InlineCode> in a{" "}
              <InlineCode>form</InlineCode>, make Save{" "}
              <InlineCode>type=&quot;submit&quot;</InlineCode>, and close with
              controlled <InlineCode>open</InlineCode>. Point{" "}
              <InlineCode>initialFocus</InlineCode> at the field that matters
              most.
            </p>
          </div>
          <ComponentPreview code={formCode}>
            <FormDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2
              id="scrollable-body"
              className="scroll-mt-32 text-lg font-medium"
            >
              Scrollable body
            </h2>
            <p className="text-base text-muted-foreground">
              The default keeps the popup on screen with{" "}
              <InlineCode>max-h-full</InlineCode> so{" "}
              <InlineCode>Body</InlineCode> scrolls while the header and footer
              stay pinned.
            </p>
          </div>
          <ComponentPreview code={scrollableBodyCode}>
            <ScrollableBodyDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="long-content" className="scroll-mt-32 text-lg font-medium">
              Long content
            </h2>
            <p className="text-base text-muted-foreground">
              Pass <InlineCode>className=&quot;max-h-none&quot;</InlineCode> so
              the whole dialog scrolls inside the viewport. Combine it with a
              wider <InlineCode>max-w-*</InlineCode> when the content needs more
              room.
            </p>
          </div>
          <ComponentPreview code={longContentCode}>
            <LongContentDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="nested" className="scroll-mt-32 text-lg font-medium">
              Nested
            </h2>
            <p className="text-base text-muted-foreground">
              Opening a dialog from another shrinks and dims the parent through
              Base UI&apos;s nested attributes. Keep nesting to one level.
            </p>
          </div>
          <ComponentPreview code={nestedCode}>
            <NestedDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2
              id="close-confirmation"
              className="scroll-mt-32 text-lg font-medium"
            >
              Close confirmation
            </h2>
            <p className="text-base text-muted-foreground">
              Intercept <InlineCode>onOpenChange(false)</InlineCode> while a
              draft exists, then open an{" "}
              <InlineCode>AlertDialog</InlineCode>. That covers the X button,
              Escape, and backdrop clicks in one place.
            </p>
          </div>
          <ComponentPreview code={closeConfirmationCode}>
            <CloseConfirmationDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2
              id="open-from-menu"
              className="scroll-mt-32 text-lg font-medium"
            >
              Open from a menu
            </h2>
            <p className="text-base text-muted-foreground">
              A <InlineCode>Menu.Item</InlineCode>{" "}
              <InlineCode>onClick</InlineCode> can open a controlled dialog that
              lives beside the menu rather than inside it.
            </p>
          </div>
          <ComponentPreview code={openFromMenuCode}>
            <OpenFromMenuDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="payload" className="scroll-mt-32 text-lg font-medium">
              Multiple triggers with payload
            </h2>
            <p className="text-base text-muted-foreground">
              Several triggers can share one handle and dialog, each passing its
              own <InlineCode>payload</InlineCode>. A function child reads it
              back so the dialog can render the matching content.
            </p>
          </div>
          <ComponentPreview code={payloadCode}>
            <PayloadDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="guidelines" className="scroll-mt-32 text-lg font-medium">
            Usage Guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-6 text-base text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">
                Dialog vs. Alert Dialog vs. Popover or Menu
              </span>{" "}
              Use Dialog for forms, details, and focused tasks the user can
              dismiss freely. Use Alert Dialog when the choice must be
              deliberate and backdrop clicks should not dismiss. Prefer a
              Popover or Menu for lightweight actions that stay anchored to a
              trigger.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Always include a visible close
              </span>{" "}
              Ship <InlineCode>CloseButton</InlineCode> or a labeled{" "}
              <InlineCode>Close</InlineCode> in the footer so dismiss is
              discoverable without relying on Escape or the backdrop alone.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Keep forms short
              </span>{" "}
              Limit dialogs to a few fields and give buttons specific labels
              such as Save or Post Entry instead of generic OK.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Required title and description
              </span>{" "}
              Always include <InlineCode>Dialog.Title</InlineCode> and{" "}
              <InlineCode>Dialog.Description</InlineCode>. These wire
              automatically to <InlineCode>aria-labelledby</InlineCode> and{" "}
              <InlineCode>aria-describedby</InlineCode> so assistive
              technologies announce the dialog&apos;s purpose.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Limit nesting
              </span>{" "}
              Nest at most one dialog inside another. Deeper stacks are hard to
              follow and fight the shrink and dim treatment on the parent.
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h2 id="props" className="scroll-mt-32 text-lg font-medium">
            Props
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Dialog.Root</h3>
            <PropsTable props={rootProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Dialog.Trigger</h3>
            <PropsTable props={triggerProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Dialog.Popup</h3>
            <PropsTable props={popupProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Dialog.CloseButton</h3>
            <p className="text-sm text-muted-foreground">
              A ghost icon <InlineCode>Button</InlineCode> that closes the
              dialog. Accepts all Button props. Override{" "}
              <InlineCode>aria-label</InlineCode> and{" "}
              <InlineCode>children</InlineCode> for i18n.
            </p>
            <PropsTable props={closeButtonProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Dialog.Close</h3>
            <p className="text-sm text-muted-foreground">
              An unstyled close primitive. Compose it with{" "}
              <InlineCode>render</InlineCode>, for example{" "}
              <InlineCode>
                {'<Dialog.Close render={<Button variant="secondary">Cancel</Button>} />'}
              </InlineCode>
              .
            </p>
          </div>

          <p className="text-base text-muted-foreground">
            This covers the parts used above. See the{" "}
            <a
              href="https://base-ui.com/react/components/dialog"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Base UI Dialog docs
            </a>{" "}
            for <InlineCode>actionsRef</InlineCode>, event details, CSS
            variables and data attributes.
          </p>
        </div>
      </section>
    </>
  );
}
