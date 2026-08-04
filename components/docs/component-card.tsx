"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <Accordion defaultValue={["shipping"]} className="w-full text-left">
      <AccordionItem value="shipping">
        <AccordionTrigger className="py-2.5">Shipping</AccordionTrigger>
        <AccordionContent>We ship worldwide.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger className="py-2.5">Returns</AccordionTrigger>
        <AccordionContent>30 days, no questions asked.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// Static mockup, not a real AlertDialog — the card preview well is a
// non-interactive snapshot, so there's no open state to trigger here.
// Mirrors AlertDialogPopup: rounded-4xl, border, shadow-lg, centered.
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
        <span className="rounded-full border border-border px-3 py-1 text-xs text-foreground">
          Cancel
        </span>
        <span className="rounded-full bg-danger px-3 py-1 text-xs text-danger-foreground">
          Discard
        </span>
      </div>
    </div>
  );
}

const previews: Record<string, ReactNode> = {
  "/components/button": <ButtonPreview />,
  "/components/accordion": <AccordionPreview />,
  "/components/alert-dialog": <AlertDialogPreview />,
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
