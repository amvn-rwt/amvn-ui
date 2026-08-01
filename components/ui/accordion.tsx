"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const chevronSpring = {
  type: "spring",
  stiffness: 400,
  damping: 22,
  mass: 0.6,
} as const;

type AccordionProps = AccordionPrimitive.Root.Props & {
  /** Show dividers between items. @default true */
  bordered?: boolean;
};

function Accordion({
  className,
  bordered = true,
  ...props
}: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        "group/accordion w-full",
        bordered &&
          "**:data-[slot=accordion-item]:border-b **:data-[slot=accordion-item]:border-border **:data-[slot=accordion-item]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "transition-opacity duration-200 ease-out",
        // Sibling mute — only interactive items brighten on their own hover.
        "not-data-disabled:group-hover/accordion:opacity-disabled not-data-disabled:hover:opacity-100!",
        // Disabled stays muted and never “wins” the hover highlight.
        "data-disabled:cursor-not-allowed data-disabled:opacity-disabled",
        className,
      )}
      {...props}
    />
  );
}

type AccordionTriggerProps = Omit<
  AccordionPrimitive.Trigger.Props,
  "className" | "render"
> & {
  className?: string;
};

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-4 text-left text-sm font-medium text-foreground outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-disabled:cursor-not-allowed data-disabled:text-muted-foreground disabled:pointer-events-none",
          className,
        )}
        {...props}
        render={(triggerProps, state) => (
          <button {...triggerProps} type="button">
            {children}
            <motion.span
              aria-hidden
              className="inline-flex shrink-0"
              initial={false}
              animate={{ rotate: state.open ? 180 : 0 }}
              transition={chevronSpring}
            >
              <ChevronDownIcon className="size-4 text-muted-foreground" />
            </motion.span>
          </button>
        )}
      />
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      className={cn(
        // Base UI only awaits CSS transitions before unmounting on close.
        "h-(--accordion-panel-height) overflow-hidden text-sm text-muted-foreground transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0",
        className,
      )}
      {...props}
    >
      <div className="pb-4">{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export type { AccordionProps, AccordionTriggerProps };
