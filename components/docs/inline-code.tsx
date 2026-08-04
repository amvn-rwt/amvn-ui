import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function InlineCode({ className, ...props }: ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "rounded bg-muted p-1 font-mono text-[13px] text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { InlineCode };
