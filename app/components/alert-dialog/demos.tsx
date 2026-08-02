"use client";

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
  createAlertDialogHandle,
} from "@/components/ui/alert-dialog";

type ActionPayload = {
  title: string;
  description: string;
  confirmLabel: string;
};

const payloadActions: { label: string; payload: ActionPayload }[] = [
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
      description:
        "Every drop vents to atmosphere. Refueling takes another two orbits.",
      confirmLabel: "Purge",
    },
  },
  {
    label: "Sign Out Of Mission Control",
    payload: {
      title: "Sign out of mission control?",
      description:
        "Unsaved telemetry notes will be lost the moment you log off.",
      confirmLabel: "Sign Out",
    },
  },
];

// createAlertDialogHandle() is client-only, so these live demos (and their
// module-scope handles) live in a client component, separate from the
// server-rendered docs page shell.
const detachedTriggerHandle = createAlertDialogHandle();
const payloadHandle = createAlertDialogHandle<ActionPayload>();

function DetachedTriggerDemo() {
  return (
    <div className="flex w-full items-center justify-center">
      <AlertDialogTrigger
        handle={detachedTriggerHandle}
        render={<Button variant="danger">Abort Mission</Button>}
      />
      <AlertDialog handle={detachedTriggerHandle}>
        <AlertDialogPortal>
          <AlertDialogBackdrop />
          <AlertDialogPopup>
            <AlertDialogTitle>Abort the mission?</AlertDialogTitle>
            <AlertDialogDescription>
              The countdown stops immediately. Ground control will need a
              full resync before the next attempt.
            </AlertDialogDescription>
            <div className="mt-6 flex justify-end gap-2">
              <AlertDialogClose
                render={<Button variant="outline">Stand Down</Button>}
              />
              <AlertDialogClose
                render={<Button variant="danger">Abort</Button>}
              />
            </div>
          </AlertDialogPopup>
        </AlertDialogPortal>
      </AlertDialog>
    </div>
  );
}

function PayloadDemo() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-3">
      {payloadActions.map((action) => (
        <AlertDialogTrigger
          key={action.label}
          handle={payloadHandle}
          payload={action.payload}
          render={<Button variant="outline">{action.label}</Button>}
        />
      ))}
      <AlertDialog<ActionPayload> handle={payloadHandle}>
        {({ payload }) => (
          <AlertDialogPortal>
            <AlertDialogBackdrop />
            <AlertDialogPopup>
              <AlertDialogTitle>{payload?.title}</AlertDialogTitle>
              <AlertDialogDescription>
                {payload?.description}
              </AlertDialogDescription>
              <div className="mt-6 flex justify-end gap-2">
                <AlertDialogClose
                  render={<Button variant="outline">Cancel</Button>}
                />
                <AlertDialogClose
                  render={
                    <Button variant="danger">{payload?.confirmLabel}</Button>
                  }
                />
              </div>
            </AlertDialogPopup>
          </AlertDialogPortal>
        )}
      </AlertDialog>
    </div>
  );
}

export { DetachedTriggerDemo, PayloadDemo };
