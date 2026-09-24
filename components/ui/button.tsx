"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";
import { motion } from "motion/react";

import { usePressMotion } from "@/lib/use-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-disabled data-disabled:pointer-events-none data-disabled:opacity-disabled [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/intense",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/strong",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        danger: "bg-danger text-danger-foreground hover:bg-danger/intense",
        success: "bg-success text-success-foreground hover:bg-success/intense",
      },
      size: {
        sm: "h-6 px-2 text-xs",
        md: "h-8 px-3 text-sm",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = Omit<ButtonPrimitive.Props, "render"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

function Button({
  className,
  variant,
  size,
  type = "button",
  loading = false,
  disabled,
  focusableWhenDisabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(disabled || loading);
  const press = usePressMotion(isDisabled);

  return (
    <ButtonPrimitive
      data-slot="button"
      data-loading={loading ? "" : undefined}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
      disabled={isDisabled}
      focusableWhenDisabled={focusableWhenDisabled ?? loading}
      aria-busy={loading || undefined}
      render={
        <motion.button
          whileHover={press.whileHover}
          whileTap={press.whileTap}
          transition={press.transition}
        />
      }
    >
      {loading ? <Loader2Icon className="animate-spin" aria-hidden /> : null}
      {size === "icon" && loading ? null : children}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
