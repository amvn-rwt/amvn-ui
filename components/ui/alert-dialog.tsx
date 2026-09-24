"use client";

import * as React from "react";
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { motion, type HTMLMotionProps } from "motion/react";

import { useOverlayMotion, usePanelMotion } from "@/lib/use-motion";
import { cn } from "@/lib/utils";

function AlertDialogRoot<Payload>(
  props: AlertDialogPrimitive.Root.Props<Payload>,
) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger<Payload>(
  props: AlertDialogPrimitive.Trigger.Props<Payload>,
) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

function AlertDialogClose(props: AlertDialogPrimitive.Close.Props) {
  return (
    <AlertDialogPrimitive.Close data-slot="alert-dialog-close" {...props} />
  );
}

function AlertDialogPortal(props: AlertDialogPrimitive.Portal.Props) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

function AlertDialogBackdrop({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-backdrop"
      className={cn(
        // Above preview chrome (View Code is z-20).
        "fixed inset-0 z-50 isolate bg-overlay",
        className,
      )}
      {...props}
      render={(backdropProps, state) => (
        <AlertDialogBackdropMotion
          backdropProps={backdropProps}
          open={state.open}
        />
      )}
    />
  );
}

function AlertDialogBackdropMotion({
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

function AlertDialogPopup({
  className,
  ...props
}: AlertDialogPrimitive.Popup.Props) {
  return (
    <AlertDialogPrimitive.Popup
      data-slot="alert-dialog-popup"
      className={cn(
        // Motion x/y centers — avoids fighting Tailwind translate with scale.
        "fixed top-1/2 left-1/2 z-50 w-full max-w-md rounded-4xl border border-border bg-background p-6 shadow-lg max-h-[calc(100vh-3rem)] overflow-y-auto",
        className,
      )}
      {...props}
      render={(popupProps, state) => (
        <AlertDialogPopupMotion popupProps={popupProps} open={state.open} />
      )}
    />
  );
}

function AlertDialogPopupMotion({
  popupProps,
  open,
}: {
  popupProps: React.HTMLAttributes<HTMLDivElement>;
  open: boolean;
}) {
  const panel = usePanelMotion(open, { center: true });

  return (
    <motion.div
      {...(popupProps as HTMLMotionProps<"div">)}
      initial={panel.initial}
      animate={panel.animate}
      transition={panel.transition}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: AlertDialogPrimitive.Title.Props) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: AlertDialogPrimitive.Description.Props) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("mt-2 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

const createAlertDialogHandle = AlertDialogPrimitive.createHandle;

const AlertDialog = Object.assign(AlertDialogRoot, {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Close: AlertDialogClose,
  Portal: AlertDialogPortal,
  Backdrop: AlertDialogBackdrop,
  Popup: AlertDialogPopup,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  createHandle: createAlertDialogHandle,
});

export { AlertDialog };
