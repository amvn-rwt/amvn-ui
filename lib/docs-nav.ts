export type DocsNavItem = {
  title: string;
  href: string;
};

export type DocsNavSection = {
  title: string;
  items: DocsNavItem[];
};

export const components: DocsNavItem[] = [
  { title: "Button", href: "/components/button" },
];

export const docsNav: DocsNavSection[] = [
  {
    title: "Components",
    items: [
      { title: "Overview", href: "/components" },
      ...components,
    ],
  },
];
