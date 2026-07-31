import Link from "next/link";

import { components } from "@/lib/docs-nav";

export default function ComponentsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Components</h1>
      <p className="mt-2 text-muted-foreground">
        Building blocks for your interface.
      </p>

      <ul className="mt-8 space-y-3">
        {components.map((component) => (
          <li key={component.href}>
            <Link
              href={component.href}
              className="font-medium underline-offset-4 hover:underline"
            >
              {component.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
