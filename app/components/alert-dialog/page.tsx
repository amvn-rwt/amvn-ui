import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { InlineCode } from "@/components/docs/inline-code";
import { JsonLd } from "@/components/seo/json-ld";
import { highlightCode } from "@/lib/highlight-code";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

import {
  DefaultDemo,
  DetachedTriggerDemo,
  PayloadDemo,
  WithBlurredBackdropDemo,
  WithIconDemo,
  WithTertiaryDemo,
} from "./demos";

export const metadata = createPageMetadata({
  title: "Alert Dialog",
  description:
    "Alert Dialog for amvn.ui: a modal confirmation dialog that interrupts until the user confirms or cancels, built with Base UI and Tailwind CSS.",
  path: "/components/alert-dialog",
});

const anatomyCode = `import { AlertDialog } from "@/components/ui/alert-dialog"

<AlertDialog.Root>
  <AlertDialog.Trigger />
  <AlertDialog.Portal>
    <AlertDialog.Backdrop />
    <AlertDialog.Popup>
      <AlertDialog.Title />
      <AlertDialog.Description />
      <AlertDialog.Close />
    </AlertDialog.Popup>
  </AlertDialog.Portal>
</AlertDialog.Root>`;

const defaultCode = `import { Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AlertDialog } from "@/components/ui/alert-dialog"

export default function Example() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        render={
          <Button variant="danger">
            <Trash2Icon />
            Discard Flight Log
          </Button>
        }
      />
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Popup>
          <AlertDialog.Title>Discard flight log?</AlertDialog.Title>
          <AlertDialog.Description>
            This mission data can't be recovered once you leave orbit.
          </AlertDialog.Description>
          <div className="mt-6 flex justify-end gap-2">
            <AlertDialog.Close render={<Button variant="outline">Cancel</Button>} />
            <AlertDialog.Close render={<Button variant="danger">Discard</Button>} />
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}`;

const withIconCode = `import { CircleAlertIcon, DropletsIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AlertDialog } from "@/components/ui/alert-dialog"

export default function Example() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        render={
          <Button variant="danger">
            <DropletsIcon />
            Purge Fuel Tank
          </Button>
        }
      />
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Popup>
          <div className="flex items-start gap-3">
            <CircleAlertIcon
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-danger"
            />
            <div>
              <AlertDialog.Title>Purge the fuel tank?</AlertDialog.Title>
              <AlertDialog.Description>
                Every drop vents to atmosphere. Refueling takes another two
                orbits.
              </AlertDialog.Description>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <AlertDialog.Close render={<Button variant="outline">Cancel</Button>} />
            <AlertDialog.Close render={<Button variant="danger">Purge</Button>} />
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}`;

const withTertiaryCode = `import { FilePenLineIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AlertDialog } from "@/components/ui/alert-dialog"

export default function Example() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        render={
          <Button variant="danger">
            <FilePenLineIcon />
            Overwrite Telemetry
          </Button>
        }
      />
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Popup>
          <AlertDialog.Title>Overwrite telemetry notes?</AlertDialog.Title>
          <AlertDialog.Description>
            The previous draft is replaced if you continue. You can postpone
            and come back later.
          </AlertDialog.Description>
          <div className="mt-6 flex items-center justify-between gap-2">
            <AlertDialog.Close
              render={<Button variant="ghost">Remind me later</Button>}
            />
            <div className="flex gap-2">
              <AlertDialog.Close
                render={<Button variant="outline">Cancel</Button>}
              />
              <AlertDialog.Close
                render={<Button variant="danger">Overwrite</Button>}
              />
            </div>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}`;

const withBlurredBackdropCode = `import { BanIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AlertDialog } from "@/components/ui/alert-dialog"

export default function Example() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        render={
          <Button variant="danger">
            <BanIcon />
            Scrub Launch
          </Button>
        }
      />
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="backdrop-blur-sm isolation-auto" />
        <AlertDialog.Popup>
          <AlertDialog.Title>Scrub the launch?</AlertDialog.Title>
          <AlertDialog.Description>
            The window closes for this orbit. Ground control will need a new
            clearance before the next attempt.
          </AlertDialog.Description>
          <div className="mt-6 flex justify-end gap-2">
            <AlertDialog.Close render={<Button variant="outline">Cancel</Button>} />
            <AlertDialog.Close render={<Button variant="danger">Scrub</Button>} />
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}`;

const detachedTriggerCode = `import { OctagonXIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AlertDialog } from "@/components/ui/alert-dialog"

// Created once outside the component. Connects the trigger to the
// dialog without either one needing to be a descendant of the other.
const handle = AlertDialog.createHandle()

export default function Example() {
  return (
    <>
      <AlertDialog.Trigger
        handle={handle}
        render={
          <Button variant="danger">
            <OctagonXIcon />
            Abort Mission
          </Button>
        }
      />
      <AlertDialog.Root handle={handle}>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            <AlertDialog.Title>Abort the mission?</AlertDialog.Title>
            <AlertDialog.Description>
              The countdown stops immediately. Ground control will need a
              full resync before the next attempt.
            </AlertDialog.Description>
            <div className="mt-6 flex justify-end gap-2">
              <AlertDialog.Close render={<Button variant="outline">Stand Down</Button>} />
              <AlertDialog.Close render={<Button variant="danger">Abort</Button>} />
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  )
}`;

const payloadCode = `import {
  DropletsIcon,
  LogOutIcon,
  RocketIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AlertDialog } from "@/components/ui/alert-dialog"

type ActionPayload = {
  title: string
  description: string
  confirmLabel: string
}

// One handle and one dialog. Each trigger passes its own payload so the
// popup can render the right copy for whichever action was pressed.
const handle = AlertDialog.createHandle<ActionPayload>()

const actions = [
  {
    label: "Abort Launch",
    icon: RocketIcon,
    payload: {
      title: "Abort the launch?",
      description:
        "Fuel drains automatically and the pad resets. This can't be undone mid-sequence.",
      confirmLabel: "Abort",
    },
  },
  {
    label: "Purge Fuel Tank",
    icon: DropletsIcon,
    payload: {
      title: "Purge the fuel tank?",
      description: "Every drop vents to atmosphere. Refueling takes another two orbits.",
      confirmLabel: "Purge",
    },
  },
  {
    label: "Sign Out Of Mission Control",
    icon: LogOutIcon,
    payload: {
      title: "Sign out of mission control?",
      description: "Unsaved telemetry notes will be lost the moment you log off.",
      confirmLabel: "Sign Out",
    },
  },
]

export default function Example() {
  return (
    <>
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <AlertDialog.Trigger
            key={action.label}
            handle={handle}
            payload={action.payload}
            render={
              <Button variant="outline">
                <Icon />
                {action.label}
              </Button>
            }
          />
        )
      })}
      <AlertDialog.Root<ActionPayload> handle={handle}>
        {({ payload }) => (
          <AlertDialog.Portal>
            <AlertDialog.Backdrop />
            <AlertDialog.Popup>
              <AlertDialog.Title>{payload?.title}</AlertDialog.Title>
              <AlertDialog.Description>{payload?.description}</AlertDialog.Description>
              <div className="mt-6 flex justify-end gap-2">
                <AlertDialog.Close render={<Button variant="outline">Cancel</Button>} />
                <AlertDialog.Close
                  render={<Button variant="danger">{payload?.confirmLabel}</Button>}
                />
              </div>
            </AlertDialog.Popup>
          </AlertDialog.Portal>
        )}
      </AlertDialog.Root>
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
    name: "handle",
    type: "AlertDialogHandle<Payload>",
    defaultValue: "—",
  },
] as const;

const triggerProps = [
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
  {
    name: "handle",
    type: "AlertDialogHandle<Payload>",
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

const toc = [
  { id: "default", title: "Default" },
  { id: "anatomy", title: "Anatomy" },
  { id: "with-icon", title: "With icon" },
  { id: "with-tertiary-action", title: "With tertiary action" },
  { id: "with-blurred-backdrop", title: "With blurred backdrop" },
  { id: "detached-trigger", title: "Detached trigger" },
  { id: "payload", title: "Multiple triggers with payload" },
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

export default async function AlertDialogPage() {
  const anatomyHtml = await highlightCode(anatomyCode);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: site.name, path: "/" },
          { name: "Components", path: "/components" },
          { name: "Alert Dialog", path: "/components/alert-dialog" },
        ])}
      />
      <SetDocsToc items={toc} />

      <h1 className="text-3xl font-bold">Alert Dialog</h1>
      <p className="mt-2 text-muted-foreground">
        A confirmation dialog that interrupts until the user accepts or
        cancels. Backdrop clicks do not dismiss it, and only Escape or an
        explicit action closes it.
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
            <h2 id="with-icon" className="scroll-mt-10 text-lg font-medium">
              With icon
            </h2>
            <p className="text-base text-muted-foreground">
              Compose a decorative icon beside the title when the action
              needs a stronger visual cue. Keep severity in the title text
              and hide the icon from assistive tech.
            </p>
          </div>
          <ComponentPreview code={withIconCode}>
            <WithIconDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2
              id="with-tertiary-action"
              className="scroll-mt-10 text-lg font-medium"
            >
              With tertiary action
            </h2>
            <p className="text-base text-muted-foreground">
              Place an optional ghost action on the left, and keep Cancel and
              the primary confirm grouped on the right.
            </p>
          </div>
          <ComponentPreview code={withTertiaryCode}>
            <WithTertiaryDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2
              id="with-blurred-backdrop"
              className="scroll-mt-10 text-lg font-medium"
            >
              With blurred backdrop
            </h2>
            <p className="text-base text-muted-foreground">
              Add{" "}
              <InlineCode>backdrop-blur-sm</InlineCode> and{" "}
              <InlineCode>isolation-auto</InlineCode> on the backdrop so the
              second undoes the default isolate and blur can take effect.
            </p>
          </div>
          <ComponentPreview code={withBlurredBackdropCode}>
            <WithBlurredBackdropDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2
              id="detached-trigger"
              className="scroll-mt-10 text-lg font-medium"
            >
              Detached trigger
            </h2>
            <p className="text-base text-muted-foreground">
              A handle from{" "}
              <InlineCode>AlertDialog.createHandle()</InlineCode>{" "}
              connects a trigger to a dialog anywhere else in the tree so
              neither has to be the other&apos;s descendant.
            </p>
          </div>
          <ComponentPreview code={detachedTriggerCode}>
            <DetachedTriggerDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h2 id="payload" className="scroll-mt-10 text-lg font-medium">
              Multiple triggers with payload
            </h2>
            <p className="text-base text-muted-foreground">
              Several triggers can share one handle and dialog, each passing
              its own{" "}
              <InlineCode>payload</InlineCode>
              . A function child reads it back so the dialog can render the
              matching copy.
            </p>
          </div>
          <ComponentPreview code={payloadCode}>
            <PayloadDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <h2 id="props" className="scroll-mt-10 text-lg font-medium">
            Props
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-medium">AlertDialog.Root</h3>
            <PropsTable props={rootProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">AlertDialog.Trigger</h3>
            <PropsTable props={triggerProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">AlertDialog.Popup</h3>
            <PropsTable props={popupProps} />
          </div>

          <p className="text-base text-muted-foreground">
            This covers the parts used above. See the{" "}
            <a
              href="https://base-ui.com/react/components/alert-dialog"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Base UI Alert Dialog docs
            </a>{" "}
            for <InlineCode>actionsRef</InlineCode>
            , event details, CSS variables and data attributes.
          </p>
        </div>
      </section>
    </>
  );
}
