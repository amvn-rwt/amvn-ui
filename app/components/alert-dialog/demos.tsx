"use client";

import {
  BanIcon,
  CircleAlertIcon,
  DropletsIcon,
  FilePenLineIcon,
  LogOutIcon,
  OctagonXIcon,
  RocketIcon,
  Trash2Icon,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AlertDialog } from "@/components/ui/alert-dialog";

type ActionPayload = {
  title: string;
  description: string;
  confirmLabel: string;
};

const payloadActions: {
  label: string;
  icon: LucideIcon;
  payload: ActionPayload;
}[] = [
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
      description:
        "Every drop vents to atmosphere. Refueling takes another two orbits.",
      confirmLabel: "Purge",
    },
  },
  {
    label: "Sign Out Of Mission Control",
    icon: LogOutIcon,
    payload: {
      title: "Sign out of mission control?",
      description:
        "Unsaved telemetry notes will be lost the moment you log off.",
      confirmLabel: "Sign Out",
    },
  },
];

// AlertDialog.createHandle() is client-only, so these live demos (and their
// module-scope handles) live in a client component, separate from the
// server-rendered docs page shell.
const detachedTriggerHandle = AlertDialog.createHandle();
const payloadHandle = AlertDialog.createHandle<ActionPayload>();

function DefaultDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
              This mission data can&apos;t be recovered once you leave orbit.
            </AlertDialog.Description>
            <div className="mt-6 flex justify-end gap-2">
              <AlertDialog.Close
                render={<Button variant="secondary">Cancel</Button>}
              />
              <AlertDialog.Close
                render={<Button variant="danger">Discard</Button>}
              />
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}

function WithIconDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
              <AlertDialog.Close
                render={<Button variant="secondary">Cancel</Button>}
              />
              <AlertDialog.Close
                render={<Button variant="danger">Purge</Button>}
              />
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}

function WithTertiaryDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
                render={<Button variant="outline">Remind me later</Button>}
              />
              <div className="flex gap-2">
                <AlertDialog.Close
                  render={<Button variant="secondary">Cancel</Button>}
                />
                <AlertDialog.Close
                  render={<Button variant="danger">Overwrite</Button>}
                />
              </div>
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}

function WithBlurredBackdropDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
              <AlertDialog.Close
                render={<Button variant="secondary">Cancel</Button>}
              />
              <AlertDialog.Close
                render={<Button variant="danger">Scrub</Button>}
              />
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}

function DetachedTriggerDemo() {
  return (
    <div className="flex w-full items-center justify-center">
      <AlertDialog.Trigger
        handle={detachedTriggerHandle}
        render={
          <Button variant="danger">
            <OctagonXIcon />
            Abort Mission
          </Button>
        }
      />
      <AlertDialog.Root handle={detachedTriggerHandle}>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            <AlertDialog.Title>Abort the mission?</AlertDialog.Title>
            <AlertDialog.Description>
              The countdown stops immediately. Ground control will need a full
              resync before the next attempt.
            </AlertDialog.Description>
            <div className="mt-6 flex justify-end gap-2">
              <AlertDialog.Close
                render={<Button variant="secondary">Stand Down</Button>}
              />
              <AlertDialog.Close
                render={<Button variant="danger">Abort</Button>}
              />
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}

function PayloadDemo() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-3">
      {payloadActions.map((action) => {
        const Icon = action.icon;
        return (
          <AlertDialog.Trigger
            key={action.label}
            handle={payloadHandle}
            payload={action.payload}
            render={
              <Button variant="outline">
                <Icon />
                {action.label}
              </Button>
            }
          />
        );
      })}
      <AlertDialog.Root<ActionPayload> handle={payloadHandle}>
        {({ payload }) => (
          <AlertDialog.Portal>
            <AlertDialog.Backdrop />
            <AlertDialog.Popup>
              <AlertDialog.Title>{payload?.title}</AlertDialog.Title>
              <AlertDialog.Description>
                {payload?.description}
              </AlertDialog.Description>
              <div className="mt-6 flex justify-end gap-2">
                <AlertDialog.Close
                  render={<Button variant="secondary">Cancel</Button>}
                />
                <AlertDialog.Close
                  render={
                    <Button variant="danger">{payload?.confirmLabel}</Button>
                  }
                />
              </div>
            </AlertDialog.Popup>
          </AlertDialog.Portal>
        )}
      </AlertDialog.Root>
    </div>
  );
}

export {
  DefaultDemo,
  WithIconDemo,
  WithTertiaryDemo,
  WithBlurredBackdropDemo,
  DetachedTriggerDemo,
  PayloadDemo,
};
