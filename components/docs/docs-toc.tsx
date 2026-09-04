"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type TocItem = {
  id: string;
  title: string;
  level?: 2 | 3;
};

type DocsTocContextValue = {
  items: TocItem[];
  setItems: (items: TocItem[]) => void;
};

const DocsTocContext = React.createContext<DocsTocContextValue | null>(null);

function useDocsTocContext() {
  const context = React.useContext(DocsTocContext);
  if (!context) {
    throw new Error("Docs TOC components must be used within DocsTocProvider");
  }
  return context;
}

/** Holds the active page's TOC items for the right-rail nav in the layout. */
export function DocsTocProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<TocItem[]>([]);
  const value = React.useMemo(() => ({ items, setItems }), [items]);

  return (
    <DocsTocContext.Provider value={value}>{children}</DocsTocContext.Provider>
  );
}

/**
 * Call from a page to publish its section links.
 * Derive `items` from the same data that drives the page headings.
 */
export function SetDocsToc({ items }: { items: TocItem[] }) {
  const { setItems } = useDocsTocContext();

  React.useEffect(() => {
    setItems(items);
    return () => setItems([]);
  }, [items, setItems]);

  return null;
}

/**
 * If the previously active heading is no longer in the list (page changed),
 * fall back to the first heading instead of pointing at nothing.
 */
function resolveActiveId(activeId: string, items: TocItem[]): string {
  const isStillValid = items.some((item) => item.id === activeId);
  if (isStillValid) return activeId;
  return items[0]?.id ?? "";
}

/**
 * Tracks which heading is current as the user scrolls, using an
 * IntersectionObserver over the headings named in `items`.
 */
function useActiveHeading(items: TocItem[]): string {
  const [activeId, setActiveId] = React.useState("");

  React.useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Upper-middle of the viewport counts as the "current" section.
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    for (const heading of headings) {
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, [items]);

  return resolveActiveId(activeId, items);
}

const tocLinkBaseStyles =
  "block rounded-md px-2 py-1.5 text-sm outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** Right-rail "On this page" nav. Renders whatever the current page set via SetDocsToc. */
export function DocsToc() {
  const { items } = useDocsTocContext();
  const activeId = useActiveHeading(items);

  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="sticky top-8 hidden h-[calc(100vh-var(--spacing-8))] w-64 shrink-0 overflow-y-auto xl:block">
      <nav className="px-4 py-8" aria-label="On this page">
        <p className="mb-3 px-2 text-sm font-medium tracking-wide">
          On this page
        </p>
        <ul className="space-y-0.5">
          {items.map((item) => {
            const isActive = activeId === item.id;
            const isSubheading = (item.level ?? 2) === 3;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    tocLinkBaseStyles,
                    isSubheading && "pl-4",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
