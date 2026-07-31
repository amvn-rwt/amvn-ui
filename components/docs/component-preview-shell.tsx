"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ComponentPreviewShellProps = {
  children: React.ReactNode;
  code: string;
  highlightedHtml: string;
  className?: string;
  previewClassName?: string;
};

const COLLAPSED_HEIGHT = 96;
const EXPANDED_MAX_HEIGHT = 320; // 20rem — scroll beyond this

const heightTransition = {
  type: "spring",
  stiffness: 380,
  damping: 36,
  mass: 0.8,
} as const;

const fadeTransition = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1],
} as const;

function ComponentPreviewShell({
  children,
  code,
  highlightedHtml,
  className,
  previewClassName,
}: ComponentPreviewShellProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [contentHeight, setContentHeight] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const copyTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  React.useLayoutEffect(() => {
    const node = contentRef.current;
    if (!node) return;

    const measure = () => {
      setContentHeight(node.scrollHeight);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [highlightedHtml]);

  React.useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable; ignore.
    }
  }

  const expandedHeight = Math.min(
    Math.max(contentHeight, COLLAPSED_HEIGHT),
    EXPANDED_MAX_HEIGHT,
  );
  const isScrollable = contentHeight > EXPANDED_MAX_HEIGHT;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-border",
        className,
      )}
    >
      <div className={cn("bg-background p-8", previewClassName)}>
        {children}
      </div>

      <div className="relative border-t border-border bg-muted/90">
        <motion.div
          initial={false}
          animate={{ height: expanded ? expandedHeight : COLLAPSED_HEIGHT }}
          transition={heightTransition}
          className={cn(
            "outline-none",
            expanded && isScrollable ? "overflow-y-auto" : "overflow-hidden",
          )}
        >
          <div
            ref={contentRef}
            className={cn(
              "overflow-x-auto p-4 pb-8 font-mono text-sm outline-none [&_pre]:m-0 [&_pre]:bg-transparent! [&_pre]:p-0",
              !expanded && "pointer-events-none select-none",
            )}
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: expanded ? 0 : 1 }}
          transition={fadeTransition}
          className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-linear-to-t from-muted via-muted/80 to-transparent"
          style={{ height: COLLAPSED_HEIGHT }}
          aria-hidden="true"
        />

        <motion.div
          initial={false}
          animate={{ opacity: expanded ? 1 : 0 }}
          transition={fadeTransition}
          className={cn(
            "absolute top-2 right-2 z-20",
            !expanded && "pointer-events-none",
          )}
        >
          <Button
            type="button"
            variant="ghost"
            size="md"
            className="hover:bg-transparent"
            onClick={handleCopy}
            tabIndex={expanded ? 0 : -1}
            aria-hidden={!expanded}
            aria-label={copied ? "Copied" : "Copy Code"}
          >
            {copied ? (
              <CheckIcon size={14} aria-hidden="true" />
            ) : (
              <CopyIcon size={14} aria-hidden="true" />
            )}
            {copied ? "Copied" : "Copy"}
          </Button>
        </motion.div>

        <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="md"
            className="bg-background shadow-sm"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Hide Code" : "View Code"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export { ComponentPreviewShell };
export type { ComponentPreviewShellProps };
