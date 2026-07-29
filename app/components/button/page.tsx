import { ComponentPreview } from "@/components/docs/component-preview";
import { Button } from "@/components/ui/button";

const primaryCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-8 w-full items-center justify-center">
      <Button variant="primary">Button</Button>
    </div>
  )
}`;

const secondaryCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-8 w-full items-center justify-center">
      <Button variant="secondary">Button</Button>
    </div>
  )
}`;

const outlineCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-8 w-full items-center justify-center">
      <Button variant="outline">Button</Button>
    </div>
  )
}`;

const ghostCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-8 w-full items-center justify-center">
      <Button variant="ghost">Button</Button>
    </div>
  )
}`;

const dangerCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-8 w-full items-center justify-center">
      <Button variant="danger">Button</Button>
    </div>
  )
}`;

const successCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-8 w-full items-center justify-center">
      <Button variant="success">Button</Button>
    </div>
  )
}`;

export default function ButtonPage() {
  return (
    <div>
      <main className="mx-auto max-w-15 py-10">
        <h1 className="text-3xl font-bold">Button</h1>
        <p className="mt-2 text-muted-foreground">
          The Button component triggers actions, submits forms, or acts as a
          styled button.
        </p>

        <section className="mt-8 space-y-8">
          <div className="space-y-3">
            <h2 className="text-lg font-medium">Primary</h2>
            <ComponentPreview code={primaryCode}>
              <div className="flex h-8 w-full items-center justify-center">
                <Button variant="primary">Button</Button>
              </div>
            </ComponentPreview>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-medium">Secondary</h2>
            <ComponentPreview code={secondaryCode}>
              <div className="flex h-8 w-full items-center justify-center">
                <Button variant="secondary">Button</Button>
              </div>
            </ComponentPreview>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-medium">Outline</h2>
            <ComponentPreview code={outlineCode}>
              <div className="flex h-8 w-full items-center justify-center">
                <Button variant="outline">Button</Button>
              </div>
            </ComponentPreview>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-medium">Ghost</h2>
            <ComponentPreview code={ghostCode}>
              <div className="flex h-8 w-full items-center justify-center">
                <Button variant="ghost">Button</Button>
              </div>
            </ComponentPreview>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-medium">Danger</h2>
            <ComponentPreview code={dangerCode}>
              <div className="flex h-8 w-full items-center justify-center">
                <Button variant="danger">Button</Button>
              </div>
            </ComponentPreview>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-medium">Success</h2>
            <ComponentPreview code={successCode}>
              <div className="flex h-8 w-full items-center justify-center">
                <Button variant="success">Button</Button>
              </div>
            </ComponentPreview>
          </div>
        </section>
      </main>
    </div>
  );
}
