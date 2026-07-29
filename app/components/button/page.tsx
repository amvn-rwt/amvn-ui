import { ComponentPreview } from "@/components/docs/component-preview";
import { Button } from "@/components/ui/button";

const solidCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-6 w-full items-center justify-center">
      <Button variant="solid">Button</Button>
    </div>
  )
}`;

const outlineCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-6 w-full items-center justify-center">
      <Button variant="outline">Button</Button>
    </div>
  )
}`;

const ghostCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-6 w-full items-center justify-center">
      <Button variant="ghost">Button</Button>
    </div>
  )
}`;

export default function ButtonPage() {
  return (
    <div>
      <main className="mx-auto max-w-16 px-2 py-10">
        <h1 className="text-3xl font-bold">Button</h1>
        <p className="mt-2 text-muted-foreground">
          Displays a button or a component that looks like a button. Tab to a
          button to see the focus ring.
        </p>

        <section className="mt-8 space-y-6">
          <ComponentPreview code={solidCode}>
            <div className="flex h-6 w-full items-center justify-center">
              <Button variant="solid">Button</Button>
            </div>
          </ComponentPreview>

          <ComponentPreview code={outlineCode}>
            <div className="flex h-6 w-full items-center justify-center">
              <Button variant="outline">Button</Button>
            </div>
          </ComponentPreview>

          <ComponentPreview code={ghostCode}>
            <div className="flex h-6 w-full items-center justify-center">
              <Button variant="ghost">Button</Button>
            </div>
          </ComponentPreview>
        </section>
      </main>
    </div>
  );
}
