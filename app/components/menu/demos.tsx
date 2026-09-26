"use client";

import * as React from "react";
import {
  CopyIcon,
  EyeIcon,
  FolderPlusIcon,
  LinkIcon,
  PencilIcon,
  ShareIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react";

import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/ui/menu";

// Menu.createHandle() is client-only, so these live demos (and their
// module-scope handles) live in a client component, separate from the
// server-rendered docs page shell.
type MissionPayload = {
  title: string;
  items: string[];
};

const payloadHandle = Menu.createHandle<MissionPayload>();

const missionMenus: {
  label: string;
  payload: MissionPayload;
}[] = [
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
];

function getSubmenuOffset({
  side,
}: {
  side?: "top" | "bottom" | "left" | "right" | "inline-end" | "inline-start";
}) {
  return side === "top" || side === "bottom" ? 4 : -4;
}

function DefaultDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
    </div>
  );
}

function OpenOnHoverDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
    </div>
  );
}

function CheckboxItemsDemo() {
  const [showMinimap, setShowMinimap] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(true);
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <div className="flex w-full items-center justify-center">
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
    </div>
  );
}

function RadioItemsDemo() {
  const [value, setValue] = React.useState("date");

  return (
    <div className="flex w-full items-center justify-center">
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
    </div>
  );
}

function GroupLabelsDemo() {
  const [value, setValue] = React.useState("date");
  const [showMinimap, setShowMinimap] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(true);
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <div className="flex w-full items-center justify-center">
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
    </div>
  );
}

function SubmenuDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
    </div>
  );
}

function LinkItemsDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
    </div>
  );
}

function OpenDialogDemo() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <div className="flex w-full items-center justify-center">
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
                This mission data can&apos;t be recovered once you leave orbit.
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
    </div>
  );
}

function DetachedTriggerPayloadDemo() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-3">
      {missionMenus.map((menu) => (
        <Menu.Trigger
          key={menu.label}
          handle={payloadHandle}
          payload={menu.payload}
          render={<Button variant="outline">{menu.label}</Button>}
        />
      ))}
      <Menu.Root<MissionPayload> handle={payloadHandle}>
        {({ payload }) => (
          <Menu.Portal>
            <Menu.Positioner align="start">
              <Menu.Popup>
                <Menu.Group>
                  <Menu.GroupLabel>{payload?.title}</Menu.GroupLabel>
                  <Menu.Viewport>
                    {(payload?.items ?? []).map((item) => (
                      <Menu.Item key={item}>{item}</Menu.Item>
                    ))}
                  </Menu.Viewport>
                </Menu.Group>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        )}
      </Menu.Root>
    </div>
  );
}

function ArrowDemo() {
  return (
    <div className="flex w-full items-center justify-center">
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
    </div>
  );
}

export {
  DefaultDemo,
  OpenOnHoverDemo,
  CheckboxItemsDemo,
  RadioItemsDemo,
  GroupLabelsDemo,
  SubmenuDemo,
  LinkItemsDemo,
  OpenDialogDemo,
  DetachedTriggerPayloadDemo,
  ArrowDemo,
};
