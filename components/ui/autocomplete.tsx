"use client";

import * as React from "react";
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { motion, type HTMLMotionProps } from "motion/react";

import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

const AutocompleteOpenContext = React.createContext(false);

function AutocompleteRoot<ItemValue>(
  props: AutocompletePrimitive.Root.Props<ItemValue>,
) {
  // Root is overloaded for flat vs grouped `items`; cast keeps the public generic API.
  return (
    <AutocompletePrimitive.Root
      data-slot="autocomplete"
      {...(props as React.ComponentProps<typeof AutocompletePrimitive.Root>)}
    />
  );
}

function AutocompleteInput({
  className,
  ...props
}: AutocompletePrimitive.Input.Props) {
  return (
    <AutocompletePrimitive.Input
      data-slot="autocomplete-input"
      className={cn(
        "h-6 w-full min-w-0 rounded-full border border-border bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-disabled:opacity-disabled",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteInputGroup({
  className,
  ...props
}: AutocompletePrimitive.InputGroup.Props) {
  return (
    <AutocompletePrimitive.InputGroup
      data-slot="autocomplete-input-group"
      className={cn(
        "flex h-6 w-full min-w-0 items-center gap-1 rounded-full border border-border bg-background px-2 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background data-disabled:opacity-disabled",
        "**:data-[slot=autocomplete-input]:h-auto **:data-[slot=autocomplete-input]:flex-1 **:data-[slot=autocomplete-input]:border-0 **:data-[slot=autocomplete-input]:bg-transparent **:data-[slot=autocomplete-input]:px-1 **:data-[slot=autocomplete-input]:shadow-none **:data-[slot=autocomplete-input]:focus-visible:ring-0 **:data-[slot=autocomplete-input]:focus-visible:ring-offset-0",
        className,
      )}
      {...props}
      render={(groupProps, state) => (
        <AutocompleteOpenContext.Provider value={state.open}>
          <div {...groupProps} />
        </AutocompleteOpenContext.Provider>
      )}
    />
  );
}

function AutocompleteTrigger({
  className,
  children,
  ...props
}: AutocompletePrimitive.Trigger.Props) {
  return (
    <AutocompletePrimitive.Trigger
      data-slot="autocomplete-trigger"
      className={cn(
        "inline-flex size-4 shrink-0 items-center justify-center rounded-full text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-disabled:pointer-events-none data-disabled:opacity-disabled data-popup-open:text-foreground",
        className,
      )}
      {...props}
      render={(triggerProps, state) => (
        <AutocompleteOpenContext.Provider value={state.open}>
          <button {...triggerProps} type="button">
            {children}
          </button>
        </AutocompleteOpenContext.Provider>
      )}
    />
  );
}

function AutocompleteIcon({
  className,
  children,
  ...props
}: AutocompletePrimitive.Icon.Props) {
  const open = React.useContext(AutocompleteOpenContext);

  return (
    <AutocompletePrimitive.Icon
      data-slot="autocomplete-icon"
      className={cn("inline-flex shrink-0 text-muted-foreground", className)}
      {...props}
      render={(iconProps) => (
        <motion.span
          {...(iconProps as HTMLMotionProps<"span">)}
          initial={false}
          animate={{ rotate: open ? 180 : 0 }}
          transition={spring.micro}
        >
          {children ?? <ChevronDownIcon className="size-4" />}
        </motion.span>
      )}
    />
  );
}

function AutocompleteClear({
  className,
  children,
  ...props
}: AutocompletePrimitive.Clear.Props) {
  return (
    <AutocompletePrimitive.Clear
      data-slot="autocomplete-clear"
      className={cn(
        "inline-flex size-4 shrink-0 items-center justify-center rounded-full text-muted-foreground outline-none transition-[color,opacity] duration-fast hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-disabled:opacity-disabled data-starting-style:opacity-0 data-ending-style:opacity-0",
        className,
      )}
      {...props}
    >
      {children ?? <XIcon className="size-3" />}
    </AutocompletePrimitive.Clear>
  );
}

function AutocompleteValue(props: AutocompletePrimitive.Value.Props) {
  return <AutocompletePrimitive.Value {...props} />;
}

function AutocompletePortal(props: AutocompletePrimitive.Portal.Props) {
  return (
    <AutocompletePrimitive.Portal data-slot="autocomplete-portal" {...props} />
  );
}

function AutocompleteBackdrop({
  className,
  ...props
}: AutocompletePrimitive.Backdrop.Props) {
  return (
    <AutocompletePrimitive.Backdrop
      data-slot="autocomplete-backdrop"
      className={cn("fixed inset-0 z-50", className)}
      {...props}
    />
  );
}

function AutocompletePositioner({
  className,
  sideOffset = 4,
  ...props
}: AutocompletePrimitive.Positioner.Props) {
  return (
    <AutocompletePrimitive.Positioner
      data-slot="autocomplete-positioner"
      sideOffset={sideOffset}
      className={cn("z-50 outline-none", className)}
      {...props}
    />
  );
}

function AutocompletePopup({
  className,
  ...props
}: AutocompletePrimitive.Popup.Props) {
  return (
    <AutocompletePrimitive.Popup
      data-slot="autocomplete-popup"
      className={cn(
        "w-(--anchor-width) max-w-(--available-width) rounded-3xl border border-border bg-background p-1 shadow-lg",
        className,
      )}
      {...props}
      render={(popupProps, state) => (
        <motion.div
          {...(popupProps as HTMLMotionProps<"div">)}
          style={{
            ...(popupProps.style as React.CSSProperties | undefined),
            transformOrigin: "var(--transform-origin)",
          }}
          // Opacity/scale stay in the animation so Base UI can await getAnimations() before unmount.
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: state.open ? 1 : 0,
            scale: state.open ? 1 : 0.95,
          }}
          transition={spring.panel}
        />
      )}
    />
  );
}

function AutocompleteArrow({
  className,
  ...props
}: AutocompletePrimitive.Arrow.Props) {
  return (
    <AutocompletePrimitive.Arrow
      data-slot="autocomplete-arrow"
      className={cn(
        "size-2.5 rotate-45 rounded-[2px] border border-border bg-background",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteList({
  className,
  ...props
}: AutocompletePrimitive.List.Props) {
  return (
    <AutocompletePrimitive.List
      data-slot="autocomplete-list"
      className={cn(
        "max-h-[min(20rem,var(--available-height))] overflow-y-auto overscroll-contain scroll-py-1 outline-none data-empty:hidden",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteItem({
  className,
  ...props
}: AutocompletePrimitive.Item.Props) {
  return (
    <AutocompletePrimitive.Item
      data-slot="autocomplete-item"
      className={cn(
        "cursor-default select-none rounded-full px-3 py-2 text-sm outline-none data-highlighted:bg-muted data-disabled:pointer-events-none data-disabled:opacity-disabled",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteGroup({
  className,
  ...props
}: AutocompletePrimitive.Group.Props) {
  return (
    <AutocompletePrimitive.Group
      data-slot="autocomplete-group"
      className={cn(className)}
      {...props}
    />
  );
}

function AutocompleteGroupLabel({
  className,
  ...props
}: AutocompletePrimitive.GroupLabel.Props) {
  return (
    <AutocompletePrimitive.GroupLabel
      data-slot="autocomplete-group-label"
      className={cn(
        "select-none px-3 py-1.5 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteCollection(props: AutocompletePrimitive.Collection.Props) {
  return <AutocompletePrimitive.Collection {...props} />;
}

function AutocompleteRow({
  className,
  ...props
}: AutocompletePrimitive.Row.Props) {
  return (
    <AutocompletePrimitive.Row
      data-slot="autocomplete-row"
      className={cn("flex gap-1", className)}
      {...props}
    />
  );
}

// Empty/Status must stay mounted for screen reader announcements — conditionally
// render their children, not these elements. Pad only when content is present
// so an empty root does not leave a gap above the list.
function AutocompleteEmpty({
  className,
  ...props
}: AutocompletePrimitive.Empty.Props) {
  return (
    <AutocompletePrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn(
        "p-0 text-sm text-muted-foreground not-empty:px-3 not-empty:py-2",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteStatus({
  className,
  ...props
}: AutocompletePrimitive.Status.Props) {
  return (
    <AutocompletePrimitive.Status
      data-slot="autocomplete-status"
      className={cn(
        "p-0 text-sm text-muted-foreground not-empty:px-3 not-empty:py-2",
        className,
      )}
      {...props}
    />
  );
}

function AutocompleteSeparator({
  className,
  ...props
}: AutocompletePrimitive.Separator.Props) {
  return (
    <AutocompletePrimitive.Separator
      data-slot="autocomplete-separator"
      className={cn("my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

const useAutocompleteFilter = AutocompletePrimitive.useFilter;
const useAutocompleteFilteredItems = AutocompletePrimitive.useFilteredItems;

const Autocomplete = Object.assign(AutocompleteRoot, {
  Root: AutocompleteRoot,
  Input: AutocompleteInput,
  InputGroup: AutocompleteInputGroup,
  Icon: AutocompleteIcon,
  Clear: AutocompleteClear,
  Trigger: AutocompleteTrigger,
  Value: AutocompleteValue,
  Portal: AutocompletePortal,
  Backdrop: AutocompleteBackdrop,
  Positioner: AutocompletePositioner,
  Popup: AutocompletePopup,
  Arrow: AutocompleteArrow,
  List: AutocompleteList,
  Item: AutocompleteItem,
  Group: AutocompleteGroup,
  GroupLabel: AutocompleteGroupLabel,
  Collection: AutocompleteCollection,
  Row: AutocompleteRow,
  Empty: AutocompleteEmpty,
  Status: AutocompleteStatus,
  Separator: AutocompleteSeparator,
  useFilter: useAutocompleteFilter,
  useFilteredItems: useAutocompleteFilteredItems,
});

export {
  Autocomplete,
  AutocompleteRoot,
  AutocompleteInput,
  AutocompleteInputGroup,
  AutocompleteIcon,
  AutocompleteClear,
  AutocompleteTrigger,
  AutocompleteValue,
  AutocompletePortal,
  AutocompleteBackdrop,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteArrow,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteCollection,
  AutocompleteRow,
  AutocompleteEmpty,
  AutocompleteStatus,
  AutocompleteSeparator,
  useAutocompleteFilter,
  useAutocompleteFilteredItems,
};
