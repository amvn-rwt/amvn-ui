import Link from "next/link";

const components = [
  {
    name: "Button",
    href: "/components/button",
    description: "Displays a button or a component that looks like a button.",
  },
] as const;

export default function ComponentsPage() {
  return (
    <main className="mx-auto max-w-16 px-2 py-10">
      <h1 className="text-3xl font-bold">Components</h1>
      <p className="mt-2 text-muted-foreground">
        Building blocks for your interface.
      </p>

      <ul className="mt-8 space-y-3">
        {components.map((component) => (
          <li key={component.href}>
            <Link
              href={component.href}
              className="block rounded-lg border border-border px-4 py-3 transition-colors hover:bg-muted"
            >
              <span className="font-medium">{component.name}</span>
              <p className="mt-1 text-sm text-muted-foreground">
                {component.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
