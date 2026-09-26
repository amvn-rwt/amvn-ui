"use client";

import * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { motion, type HTMLMotionProps } from "motion/react";

import { usePanelMotion } from "@/lib/use-motion";
import { cn } from "@/lib/utils";

const menuItemClassName =
  "flex h-8 cursor-default select-none items-center gap-2 rounded-xl px-3 text-sm outline-none transition-colors duration-fast data-highlighted:bg-muted data-disabled:pointer-events-none data-disabled:opacity-disabled [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground";

const menuItemVariants = cva(menuItemClassName, {
  variants: {
    variant: {
      default: "",
      danger: "text-danger data-highlighted:bg-danger/10 [&_svg]:text-danger",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function MenuRoot<Payload>(props: MenuPrimitive.Root.Props<Payload>) {
  return <MenuPrimitive.Root data-slot="menu" {...props} />;
}

function MenuTrigger<Payload>(props: MenuPrimitive.Trigger.Props<Payload>) {
  return <MenuPrimitive.Trigger data-slot="menu-trigger" {...props} />;
}

function MenuPortal(props: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="menu-portal" {...props} />;
}

function MenuBackdrop({
  className,
  ...props
}: MenuPrimitive.Backdrop.Props) {
  return (
    <MenuPrimitive.Backdrop
      data-slot="menu-backdrop"
      className={cn("fixed inset-0 z-50", className)}
      {...props}
    />
  );
}

function MenuPositioner({
  className,
  sideOffset = 6,
  ...props
}: MenuPrimitive.Positioner.Props) {
  return (
    <MenuPrimitive.Positioner
      data-slot="menu-positioner"
      sideOffset={sideOffset}
      className={cn("z-50 outline-none", className)}
      {...props}
    />
  );
}

function MenuPopup({ className, ...props }: MenuPrimitive.Popup.Props) {
  return (
    <MenuPrimitive.Popup
      data-slot="menu-popup"
      className={cn(
        "min-w-40 max-h-(--available-height) overflow-y-auto rounded-xl border border-border bg-background p-1 shadow-lg outline-none",
        className,
      )}
      {...props}
      render={(popupProps, state) => (
        <MenuPopupMotion popupProps={popupProps} open={state.open} />
      )}
    />
  );
}

function MenuPopupMotion({
  popupProps,
  open,
}: {
  popupProps: React.HTMLAttributes<HTMLDivElement>;
  open: boolean;
}) {
  const panel = usePanelMotion(open, { spring: "menu" });

  return (
    <motion.div
      {...(popupProps as HTMLMotionProps<"div">)}
      style={{
        ...(popupProps.style as React.CSSProperties | undefined),
        transformOrigin: "var(--transform-origin)",
      }}
      initial={panel.initial}
      animate={panel.animate}
      transition={panel.transition}
    />
  );
}

function MenuArrow({ className, ...props }: MenuPrimitive.Arrow.Props) {
  return (
    <MenuPrimitive.Arrow
      data-slot="menu-arrow"
      className={cn(
        "size-2.5 rotate-45 rounded-xs border border-border bg-background data-[side=bottom]:-top-1 data-[side=left]:-right-1 data-[side=right]:-left-1 data-[side=top]:-bottom-1",
        className,
      )}
      {...props}
    />
  );
}

function MenuViewport({
  className,
  ...props
}: MenuPrimitive.Viewport.Props) {
  return (
    <MenuPrimitive.Viewport
      data-slot="menu-viewport"
      className={className}
      {...props}
    />
  );
}

function MenuItem({
  className,
  variant,
  ...props
}: MenuPrimitive.Item.Props & VariantProps<typeof menuItemVariants>) {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      className={cn(menuItemVariants({ variant }), className)}
      {...props}
    />
  );
}

function MenuLinkItem({
  className,
  ...props
}: MenuPrimitive.LinkItem.Props) {
  return (
    <MenuPrimitive.LinkItem
      data-slot="menu-link-item"
      className={cn(menuItemClassName, className)}
      {...props}
    />
  );
}

function MenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot="menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

function MenuGroup({ className, ...props }: MenuPrimitive.Group.Props) {
  return (
    <MenuPrimitive.Group
      data-slot="menu-group"
      className={className}
      {...props}
    />
  );
}

function MenuGroupLabel({
  className,
  ...props
}: MenuPrimitive.GroupLabel.Props) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="menu-group-label"
      className={cn(
        "px-3 py-1.5 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function MenuRadioGroup({
  className,
  ...props
}: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="menu-radio-group"
      className={className}
      {...props}
    />
  );
}

function MenuRadioItem({
  className,
  ...props
}: MenuPrimitive.RadioItem.Props) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menu-radio-item"
      className={cn(menuItemClassName, "relative pl-8", className)}
      {...props}
    />
  );
}

function MenuRadioItemIndicator({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItemIndicator.Props) {
  return (
    <MenuPrimitive.RadioItemIndicator
      data-slot="menu-radio-item-indicator"
      className={cn(
        "absolute left-3 flex h-full items-center justify-center",
        className,
      )}
      {...props}
    >
      {children ?? (
        <span className="size-1.5 rounded-full bg-foreground" />
      )}
    </MenuPrimitive.RadioItemIndicator>
  );
}

function MenuCheckboxItem({
  className,
  ...props
}: MenuPrimitive.CheckboxItem.Props) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menu-checkbox-item"
      className={cn(menuItemClassName, "relative pl-8", className)}
      {...props}
    />
  );
}

function MenuCheckboxItemIndicator({
  className,
  children,
  ...props
}: MenuPrimitive.CheckboxItemIndicator.Props) {
  return (
    <MenuPrimitive.CheckboxItemIndicator
      data-slot="menu-checkbox-item-indicator"
      className={cn(
        "absolute left-3 flex h-full items-center justify-center",
        className,
      )}
      {...props}
    >
      {children ?? <CheckIcon />}
    </MenuPrimitive.CheckboxItemIndicator>
  );
}

function MenuSubmenuRoot(props: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="menu-submenu" {...props} />;
}

function MenuSubmenuTrigger({
  className,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menu-submenu-trigger"
      className={cn(
        menuItemClassName,
        "data-popup-open:bg-muted",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function MenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menu-shortcut"
      className={cn(
        "ml-auto text-xs text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

const createMenuHandle = MenuPrimitive.createHandle;

const Menu = Object.assign(MenuRoot, {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Portal: MenuPortal,
  Backdrop: MenuBackdrop,
  Positioner: MenuPositioner,
  Popup: MenuPopup,
  Arrow: MenuArrow,
  Viewport: MenuViewport,
  Item: MenuItem,
  LinkItem: MenuLinkItem,
  Separator: MenuSeparator,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  RadioGroup: MenuRadioGroup,
  RadioItem: MenuRadioItem,
  RadioItemIndicator: MenuRadioItemIndicator,
  CheckboxItem: MenuCheckboxItem,
  CheckboxItemIndicator: MenuCheckboxItemIndicator,
  SubmenuRoot: MenuSubmenuRoot,
  SubmenuTrigger: MenuSubmenuTrigger,
  Shortcut: MenuShortcut,
  createHandle: createMenuHandle,
});

export { Menu };
