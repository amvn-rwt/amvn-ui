import { ComponentCard } from "@/components/docs/component-card";
import { JsonLd } from "@/components/seo/json-ld";
import { components } from "@/lib/docs-nav";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Components",
  description:
    "Browse amvn.ui components: accessible elemental React building blocks built with Base UI and Tailwind CSS.",
  path: "/components",
});

export default function ComponentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: site.name, path: "/" },
          { name: "Components", path: "/components" },
        ])}
      />
      <h1 className="text-3xl font-bold">Components</h1>
      <p className="mt-2 text-muted-foreground">
        Building blocks for your interface.
      </p>

      <ul className="mt-8 grid list-none gap-4 sm:grid-cols-2">
        {components.map((component) => (
          <li key={component.href}>
            <ComponentCard component={component} />
          </li>
        ))}
      </ul>
    </>
  );
}
