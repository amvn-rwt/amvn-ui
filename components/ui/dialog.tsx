"use client";

import * as React from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import { motion, type HTMLMotionProps } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useOverlayMotion, usePanelMotion } from "@/lib/use-motion";
import { cn } from "@/lib/utils";

function DialogRoot<Payload>(props: DialogPrimitive.Root.Props<Payload>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger<Payload>(props: DialogPrimitive.Trigger.Props<Payload>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogClose(props: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogPortal(props: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogBackdrop({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-backdrop"
      className={cn(
        // Above preview chrome (View Code is z-20).
        // iOS Safari: absolute + min-h-dvh avoids the rubber-band gap above
        // the fixed backdrop when the keyboard or URL bar resizes the viewport.
        "fixed inset-0 z-50 min-h-dvh bg-overlay supports-[-webkit-touch-callout:none]:absolute",
        className,
      )}
      {...props}
      render={(backdropProps, state) => (
        <DialogBackdropMotion backdropProps={backdropProps} open={state.open} />
      )}
    />
  );
}

function DialogBackdropMotion({
  backdropProps,
  open,
}: {
  backdropProps: React.HTMLAttributes<HTMLDivElement>;
  open: boolean;
}) {
  const overlay = useOverlayMotion(open);

  return (
    <motion.div
      {...(backdropProps as HTMLMotionProps<"div">)}
      // Animate opacity so Base UI can await getAnimations() before unmount.
      initial={overlay.initial}
      animate={overlay.animate}
      transition={overlay.transition}
    />
  );
}

function DialogViewport({
  className,
  ...props
}: DialogPrimitive.Viewport.Props) {
  return (
    <DialogPrimitive.Viewport
      data-slot="dialog-viewport"
      className={cn(
        // Flex + m-auto on the popup centers without the overflow clip that
        // items-center causes when content is taller than the viewport.
        "fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain p-4 sm:p-6",
        className,
      )}
      {...props}
    />
  );
}

function DialogPopup({ className, ...props }: DialogPrimitive.Popup.Props) {
  return (
    <DialogPrimitive.Popup
      data-slot="dialog-popup"
      className={cn(
        // group: Header pads for CloseButton via :has().
        // Nested scale uses the CSS scale property so it composes with
        // Motion's transform. The after layer dims while a child is open.
        "group relative m-auto flex w-full max-w-lg max-h-full flex-col rounded-4xl border border-border bg-background shadow-lg outline-none transition-[scale] motion-reduce:transition-none data-nested-dialog-open:scale-[calc(1-0.05*var(--nested-dialogs))] data-nested-dialog-open:after:pointer-events-none data-nested-dialog-open:after:absolute data-nested-dialog-open:after:inset-0 data-nested-dialog-open:after:rounded-[inherit] data-nested-dialog-open:after:bg-black/10",
        className,
      )}
      {...props}
      render={(popupProps, state) => (
        <DialogPopupMotion popupProps={popupProps} open={state.open} />
      )}
    />
  );
}

function DialogPopupMotion({
  popupProps,
  open,
}: {
  popupProps: React.HTMLAttributes<HTMLDivElement>;
  open: boolean;
}) {
  // Viewport + m-auto centers; no Motion x/y: -50%.
  const panel = usePanelMotion(open);

  return (
    <motion.div
      {...(popupProps as HTMLMotionProps<"div">)}
      initial={panel.initial}
      animate={panel.animate}
      transition={panel.transition}
    />
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col gap-2 px-6 pt-6 group-has-data-[slot=dialog-close-button]:pr-10",
        className,
      )}
      {...props}
    />
  );
}

function DialogBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-body"
      className={cn("min-h-0 flex-1 overflow-y-auto px-6 py-4", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 px-6 pb-6 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function DialogCloseButton({
  className,
  "aria-label": ariaLabel = "Close",
  children,
  ...props
}: ButtonProps) {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-close-button"
      render={
        <Button
          variant="ghost"
          size="icon"
          aria-label={ariaLabel}
          className={cn("absolute top-4 right-4", className)}
          {...props}
        >
          {children ?? <XIcon />}
        </Button>
      }
    />
  );
}

const createDialogHandle = DialogPrimitive.createHandle;

const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Close: DialogClose,
  CloseButton: DialogCloseButton,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
  Viewport: DialogViewport,
  Popup: DialogPopup,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
  createHandle: createDialogHandle,
});

export { Dialog };
