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

/** Right-rail "On this page" nav. Renders whatever the current page set via SetDocsToc. */
export function DocsToc() {
  const { items } = useDocsTocContext();

  return (
    <aside className="sticky top-8 hidden h-[calc(100vh-var(--spacing-7))] w-64 shrink-0 overflow-y-auto xl:block">
      {items.length > 0 ? (
        <nav className="px-4 py-8" aria-label="On this page">
          <p className="mb-3 px-2 text-sm font-medium tracking-wide">
            On this page
          </p>
          <ul className="space-y-0.5">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                    (item.level ?? 2) === 3 && "pl-4",
                  )}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </aside>
  );
}
