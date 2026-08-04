import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { InlineCode } from "@/components/docs/inline-code";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { highlightCode } from "@/lib/highlight-code";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

import { DetachedTriggerDemo, PayloadDemo } from "./demos";

export const metadata = createPageMetadata({
  title: "Alert Dialog",
  description:
    "Alert Dialog component for amvn.ui. A modal confirmation dialog that interrupts the user until they explicitly confirm or cancel. Built with Base UI and Tailwind CSS.",
  path: "/components/alert-dialog",
});

const anatomyCode = `import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger />
  <AlertDialogPortal>
    <AlertDialogBackdrop />
    <AlertDialogPopup>
      <AlertDialogTitle />
      <AlertDialogDescription />
      <AlertDialogClose />
    </AlertDialogPopup>
  </AlertDialogPortal>
</AlertDialog>`;

const defaultCode = `import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="danger">Discard Flight Log</Button>}
      />
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogPopup>
          <AlertDialogTitle>Discard flight log?</AlertDialogTitle>
          <AlertDialogDescription>
            This mission data can't be recovered once you leave orbit.
          </AlertDialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <AlertDialogClose render={<Button variant="outline">Cancel</Button>} />
            <AlertDialogClose render={<Button variant="danger">Discard</Button>} />
          </div>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialog>
  )
}`;

const detachedTriggerCode = `import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  createAlertDialogHandle,
} from "@/components/ui/alert-dialog"

// Created once outside the component. Connects the trigger to the
// dialog without either one needing to be a descendant of the other.
const handle = createAlertDialogHandle()

export default function Example() {
  return (
    <>
      <AlertDialogTrigger
        handle={handle}
        render={<Button variant="danger">Abort Mission</Button>}
      />
      <AlertDialog handle={handle}>
        <AlertDialogPortal>
          <AlertDialogBackdrop />
          <AlertDialogPopup>
            <AlertDialogTitle>Abort the mission?</AlertDialogTitle>
            <AlertDialogDescription>
              The countdown stops immediately. Ground control will need a
              full resync before the next attempt.
            </AlertDialogDescription>
            <div className="mt-6 flex justify-end gap-2">
              <AlertDialogClose render={<Button variant="outline">Stand Down</Button>} />
              <AlertDialogClose render={<Button variant="danger">Abort</Button>} />
            </div>
          </AlertDialogPopup>
        </AlertDialogPortal>
      </AlertDialog>
    </>
  )
}`;

const payloadCode = `import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  createAlertDialogHandle,
} from "@/components/ui/alert-dialog"

type ActionPayload = {
  title: string
  description: string
  confirmLabel: string
}

// One handle and one dialog. Each trigger passes its own payload so the
// popup can render the right copy for whichever action was pressed.
const handle = createAlertDialogHandle<ActionPayload>()

const actions: { label: string; payload: ActionPayload }[] = [
  {
    label: "Abort Launch",
    payload: {
      title: "Abort the launch?",
      description:
        "Fuel drains automatically and the pad resets. This can't be undone mid-sequence.",
      confirmLabel: "Abort",
    },
  },
  {
    label: "Purge Fuel Tank",
    payload: {
      title: "Purge the fuel tank?",
      description: "Every drop vents to atmosphere. Refueling takes another two orbits.",
      confirmLabel: "Purge",
    },
  },
  {
    label: "Sign Out Of Mission Control",
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
      {actions.map((action) => (
        <AlertDialogTrigger
          key={action.label}
          handle={handle}
          payload={action.payload}
          render={<Button variant="outline">{action.label}</Button>}
        />
      ))}
      <AlertDialog<ActionPayload> handle={handle}>
        {({ payload }) => (
          <AlertDialogPortal>
            <AlertDialogBackdrop />
            <AlertDialogPopup>
              <AlertDialogTitle>{payload?.title}</AlertDialogTitle>
              <AlertDialogDescription>{payload?.description}</AlertDialogDescription>
              <div className="mt-6 flex justify-end gap-2">
                <AlertDialogClose render={<Button variant="outline">Cancel</Button>} />
                <AlertDialogClose
                  render={<Button variant="danger">{payload?.confirmLabel}</Button>}
                />
              </div>
            </AlertDialogPopup>
          </AlertDialogPortal>
        )}
      </AlertDialog>
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
        cancels. Backdrop clicks do not dismiss it. Only Escape or an
        explicit action will.
      </p>

      <section className="mt-8 space-y-8">
        <div className="space-y-3">
          <h2 id="default" className="scroll-mt-10 text-lg font-medium">
            Default
          </h2>
          <ComponentPreview code={defaultCode}>
            <div className="flex w-full items-center justify-center">
              <AlertDialog>
                <AlertDialogTrigger
                  render={<Button variant="danger">Discard Flight Log</Button>}
                />
                <AlertDialogPortal>
                  <AlertDialogBackdrop />
                  <AlertDialogPopup>
                    <AlertDialogTitle>Discard flight log?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This mission data can&apos;t be recovered once you
                      leave orbit.
                    </AlertDialogDescription>
                    <div className="mt-6 flex justify-end gap-2">
                      <AlertDialogClose
                        render={<Button variant="outline">Cancel</Button>}
                      />
                      <AlertDialogClose
                        render={<Button variant="danger">Discard</Button>}
                      />
                    </div>
                  </AlertDialogPopup>
                </AlertDialogPortal>
              </AlertDialog>
            </div>
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
            <h2
              id="detached-trigger"
              className="scroll-mt-10 text-lg font-medium"
            >
              Detached trigger
            </h2>
            <p className="text-base text-muted-foreground">
              A handle from{" "}
              <InlineCode>createAlertDialogHandle()</InlineCode>{" "}
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
              Several triggers can share one handle and dialog. Each passes
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
            <h3 className="text-base font-medium">AlertDialog</h3>
            <PropsTable props={rootProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">AlertDialogTrigger</h3>
            <PropsTable props={triggerProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">AlertDialogPopup</h3>
            <PropsTable props={popupProps} />
          </div>

          <p className="text-base text-muted-foreground">
            This covers the parts and props used above. For the full
            reference, including{" "}
            <InlineCode>actionsRef</InlineCode>,{" "}
            <InlineCode>Root.ChangeEventDetails</InlineCode>
            , CSS variables, and data attributes, see the{" "}
            <a
              href="https://base-ui.com/react/components/alert-dialog"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Base UI Alert Dialog documentation
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
