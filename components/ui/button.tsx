"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center rounded-full justify-center gap-2 font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        danger: "bg-danger text-danger-foreground hover:bg-danger/90",
        success: "bg-success text-success-foreground hover:bg-success/90",
      },
      size: {
        md: "h-6 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

const pressSpring = {
  type: "spring",
  stiffness: 500,
  damping: 18,
  mass: 0.5,
} as const;

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
          transition={pressSpring}
        />
      }
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
