"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";

import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center rounded-full justify-center gap-2 font-medium whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-disabled [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
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
        sm: "h-5 px-2 text-xs",
        md: "h-6 px-3 text-sm",
        icon: "size-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = Omit<ButtonPrimitive.Props, "className" | "render"> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
      render={
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96, y: 1 }}
          transition={spring.press}
        />
      }
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
