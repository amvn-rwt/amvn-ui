"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { DocsNavItem } from "@/lib/docs-nav";
import { cn } from "@/lib/utils";

function ButtonPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button>Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}

function AccordionPreview() {
  return (
    <Accordion.Root defaultValue={["shipping"]} className="w-full text-left">
      <Accordion.Item value="shipping">
        <Accordion.Trigger className="py-2.5">Shipping</Accordion.Trigger>
        <Accordion.Panel>We ship worldwide.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="returns">
        <Accordion.Trigger className="py-2.5">Returns</Accordion.Trigger>
        <Accordion.Panel>30 days, no questions asked.</Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}

// Static mockup, not a real AlertDialog — the card preview well is a
// non-interactive snapshot, so there's no open state to trigger here.
// Mirrors AlertDialog.Popup: rounded-4xl, border, shadow-lg, centered.
function AlertDialogPreview() {
  return (
    <div className="mx-auto w-full max-w-56 rounded-3xl border border-border bg-background p-4 text-left shadow-lg">
      <p className="text-sm font-semibold text-foreground">
        Discard flight log?
      </p>
      <p className="mt-1.5 text-xs text-muted-foreground">
        This can&apos;t be undone once you leave orbit.
      </p>
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button variant="danger" size="sm">
          Discard
        </Button>
      </div>
    </div>
  );
}

// Static mockup of an open autocomplete: input plus two suggestion rows.
function AutocompletePreview() {
  return (
    <div className="mx-auto w-full max-w-48 text-left">
      <div className="flex h-6 items-center rounded-full border border-border bg-muted/faint px-3 text-xs text-muted-foreground">
        E.g. rocket
      </div>
      <div className="mt-1 rounded-3xl border border-border bg-background p-1 px-1.25 shadow-lg">
        <div className="rounded-full bg-muted px-3 py-2 text-xs text-foreground">
          Rocket
        </div>
        <div className="rounded-full px-3 py-2 text-xs text-foreground">
          Orbit Bike
        </div>
      </div>
    </div>
  );
}

const previews: Record<string, ReactNode> = {
  "/components/button": <ButtonPreview />,
  "/components/accordion": <AccordionPreview />,
  "/components/alert-dialog": <AlertDialogPreview />,
  "/components/autocomplete": <AutocompletePreview />,
};

type ComponentCardProps = {
  component: DocsNavItem;
  className?: string;
};

function ComponentCard({ component, className }: ComponentCardProps) {
  const preview = previews[component.href];

  return (
    <Link
      href={component.href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border outline-none transition-colors hover:bg-muted/disabled focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <div className="flex aspect-4/3 items-center justify-center overflow-hidden bg-muted/faint px-5 py-6">
        <div className="pointer-events-none w-full select-none">{preview}</div>
      </div>
      <div className="border-t border-border px-4 py-3">
        <span className="text-sm font-medium">{component.title}</span>
      </div>
    </Link>
  );
}

export { ComponentCard };
export type { ComponentCardProps };
