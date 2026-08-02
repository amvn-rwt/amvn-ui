import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

// 0.875em keeps inline code one step smaller than surrounding copy:
// 16px body → 14px, 14px (text-sm) → 12px.
function InlineCode({ className, ...props }: ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "rounded bg-muted p-1 font-mono text-[0.875em] text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { InlineCode };
