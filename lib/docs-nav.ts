export type DocsNavItem = {
  title: string;
  href: string;
};

export type DocsNavSection = {
  title: string;
  items: DocsNavItem[];
};

const componentsUnsorted: DocsNavItem[] = [
  { title: "Button", href: "/components/button" },
  { title: "Accordion", href: "/components/accordion" },
  { title: "Alert Dialog", href: "/components/alert-dialog" },
];

/** Alphabetically sorted — used by sidebar (after Overview) and the overview gallery. */
export const components: DocsNavItem[] = [...componentsUnsorted].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export const docsNav: DocsNavSection[] = [
  {
    title: "Components",
    items: [
      { title: "Overview", href: "/components" },
      ...components,
    ],
  },
];
