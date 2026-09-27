"use client";

import * as React from "react";
import {
  BellIcon,
  ClipboardListIcon,
  EyeIcon,
  FileTextIcon,
  PencilIcon,
  ScrollTextIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Menu } from "@/components/ui/menu";

// Native inputs until Field/Input land. Styled to match Autocomplete.
const fieldClassName =
  "h-8 w-full min-w-0 rounded-full border border-border bg-muted/faint px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const textareaClassName =
  "min-h-24 w-full min-w-0 resize-y rounded-2xl border border-border bg-muted/faint px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

type CrewMember = {
  name: string;
  role: string;
  callsign: string;
  status: string;
};

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
];

const checklistItems = [
  "Confirm propellant pressure within launch band",
  "Verify range safety uplink and abort tones",
  "Seal crew hatch and check cabin differential",
  "Arm flight termination system and report ready",
  "Cross-check navigational ephemeris against ground",
  "Run final battery thermal soak measurement",
  "Confirm weather hold is clear through T+10",
  "Lock payload fairing separation safeties",
  "Validate voice loop between pad and MCC",
  "Acknowledge go/no-go from each station lead",
  "Arm auto-sequence and remove hold keys",
  "Report crew seated and restraints verified",
];

const missionLogParagraphs = [
  "T-00:42:18 Pad cameras show vapor venting from the LOX feedline as expected. Ground control confirms the chill-down sequence is on schedule and the crew reports green boards across the board.",
  "T-00:31:05 Navigation computers finished the final ephemeris load. Drift against the backup inertial unit is within tolerance, and the range has cleared the northeast corridor for ascent.",
  "T-00:18:40 Crew completed the suit integrity check. Cabin pressure is holding, and the commander confirmed the abort modes for the first-stage burn with the flight director.",
  "T-00:09:12 Auto-sequence armed. Hold keys are removed, and every station has called go. The vehicle is now under computer control for the terminal countdown.",
  "T-00:02:55 Main engines start sequence begins. Chamber pressures climb in lockstep, and the stack settles against the hold-downs as thrust builds toward commit.",
  "T+00:00:04 Liftoff confirmed. Telemetry shows clean roll and pitch programs, and the tower is clear. Next milestone is max-Q at T+00:01:12.",
];

// Dialog.createHandle() is client-only, so these live demos (and their
// module-scope handles) live in a client component, separate from the
// server-rendered docs page shell.
const payloadHandle = Dialog.createHandle<CrewMember>();

function DefaultDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
                  Orbit insertion burn starts at 14:22 UTC. Review the
                  objectives before you leave the hangar.
                </Dialog.Description>
              </Dialog.Header>
              <Dialog.Body>
                <dl className="grid gap-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Window</dt>
                    <dd className="font-medium text-foreground">
                      14:22–14:40 UTC
                    </dd>
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
                    <dd className="font-medium text-foreground">
                      3 on station
                    </dd>
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
    </div>
  );
}

function FormDemo() {
  const [open, setOpen] = React.useState(false);
  const callsignRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="flex w-full items-center justify-center">
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
                  Update the callsign and role shown on the roster before the
                  next briefing.
                </Dialog.Description>
              </Dialog.Header>
              <form
                className="flex min-h-0 flex-1 flex-col"
                onSubmit={(event) => {
                  event.preventDefault();
                  setOpen(false);
                }}
              >
                <Dialog.Body className="flex flex-col gap-4">
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-foreground">
                      Callsign
                    </span>
                    <input
                      ref={callsignRef}
                      name="callsign"
                      defaultValue="Comet"
                      className={fieldClassName}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-foreground">Role</span>
                    <input
                      name="role"
                      defaultValue="Flight Commander"
                      className={fieldClassName}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-foreground">Notes</span>
                    <textarea
                      name="notes"
                      rows={3}
                      defaultValue="Prefers night-side docking approaches."
                      className={textareaClassName}
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
    </div>
  );
}

function ScrollableBodyDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
                  Work through each station call before you arm the
                  auto-sequence. The list scrolls while the header and footer
                  stay put.
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
    </div>
  );
}

function LongContentDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
    </div>
  );
}

function NestedDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
                            <Dialog.Title>
                              Notification preferences
                            </Dialog.Title>
                            <Dialog.Description>
                              Toggle the channels that wake the duty officer
                              during a hold.
                            </Dialog.Description>
                          </Dialog.Header>
                          <Dialog.Body>
                            <ul className="space-y-3 text-sm text-foreground">
                              <li className="flex justify-between gap-4">
                                <span>Pad abort tones</span>
                                <span className="text-muted-foreground">
                                  On
                                </span>
                              </li>
                              <li className="flex justify-between gap-4">
                                <span>Telemetry dropouts</span>
                                <span className="text-muted-foreground">
                                  On
                                </span>
                              </li>
                              <li className="flex justify-between gap-4">
                                <span>Shift handoff pings</span>
                                <span className="text-muted-foreground">
                                  Off
                                </span>
                              </li>
                            </ul>
                          </Dialog.Body>
                          <Dialog.Footer>
                            <Dialog.Close
                              render={
                                <Button variant="secondary">Cancel</Button>
                              }
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
    </div>
  );
}

function CloseConfirmationDemo() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [confirmationOpen, setConfirmationOpen] = React.useState(false);
  const [draft, setDraft] = React.useState("");

  return (
    <div className="flex w-full items-center justify-center">
      <Dialog.Root
        open={dialogOpen}
        onOpenChange={(open) => {
          if (!open && draft.trim()) {
            setConfirmationOpen(true);
          } else {
            if (!open) {
              setDraft("");
            }
            setDialogOpen(open);
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
                  Draft a note for the flight log. Closing with unsaved text
                  asks you to confirm first.
                </Dialog.Description>
              </Dialog.Header>
              <form
                className="flex min-h-0 flex-1 flex-col"
                onSubmit={(event) => {
                  event.preventDefault();
                  setDraft("");
                  setDialogOpen(false);
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
                      className={textareaClassName}
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
                    setConfirmationOpen(false);
                    setDraft("");
                    setDialogOpen(false);
                  }}
                >
                  Discard
                </AlertDialog.Action>
              </AlertDialog.Footer>
            </AlertDialog.Popup>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </Dialog.Root>
    </div>
  );
}

function OpenFromMenuDemo() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <div className="flex w-full items-center justify-center">
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
              <Dialog.Body>
                <dl className="grid gap-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Duration</dt>
                    <dd className="font-medium text-foreground">1h 12m</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Shared with</dt>
                    <dd className="font-medium text-foreground">
                      Flight crew
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Format</dt>
                    <dd className="font-medium text-foreground">Lossless</dd>
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
      </Dialog.Root>
    </div>
  );
}

function PayloadDemo() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <div className="flex w-full max-w-sm flex-col gap-2">
        {crewRoster.map((member) => (
          <div
            key={member.callsign}
            className="flex items-center justify-between gap-3 rounded-2xl border border-border px-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                {member.name}
              </p>
              <p className="truncate text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
            <Dialog.Trigger
              handle={payloadHandle}
              payload={member}
              render={
                <Button variant="outline" size="sm">
                  <UsersIcon />
                  View
                </Button>
              }
            />
          </div>
        ))}
      </div>

      <Dialog.Root<CrewMember> handle={payloadHandle}>
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
    </div>
  );
}

export {
  DefaultDemo,
  FormDemo,
  ScrollableBodyDemo,
  LongContentDemo,
  NestedDemo,
  CloseConfirmationDemo,
  OpenFromMenuDemo,
  PayloadDemo,
};
