"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { motion, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";

// Snappy enough to feel immediate, damped enough to avoid modal bounce.
const popupSpring = {
  type: "spring",
  stiffness: 420,
  damping: 28,
  mass: 0.8,
} as const;

const backdropSpring = {
  type: "spring",
  stiffness: 500,
  damping: 40,
  mass: 0.8,
} as const;

function AlertDialog<Payload>(props: AlertDialogPrimitive.Root.Props<Payload>) {
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
        // isolate + z-50 keep the overlay above preview chrome (e.g. View Code at z-20)
        "fixed inset-0 z-50 isolate bg-black/20 dark:bg-black/muted",
        className,
      )}
      {...props}
      render={(backdropProps, state) => (
        <motion.div
          {...(backdropProps as HTMLMotionProps<"div">)}
          // Opacity stays in the animation so Base UI can await getAnimations() before unmount.
          initial={{ opacity: 0 }}
          animate={{ opacity: state.open ? 1 : 0 }}
          transition={backdropSpring}
        />
      )}
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
        // Centering uses Motion x/y so scale doesn't fight Tailwind translate transforms.
        "fixed top-1/2 left-1/2 z-50 w-full max-w-md rounded-4xl border border-border bg-background p-5 shadow-lg max-h-[calc(100vh-3rem)] overflow-y-auto",
        className,
      )}
      {...props}
      render={(popupProps, state) => (
        <motion.div
          {...(popupProps as HTMLMotionProps<"div">)}
          initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
          animate={{
            opacity: state.open ? 1 : 0,
            scale: state.open ? 1 : 0.95,
            x: "-50%",
            y: "-50%",
          }}
          transition={popupSpring}
        />
      )}
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

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogClose,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  createAlertDialogHandle,
};
