import { RocketIcon } from "lucide-react";

import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { Button } from "@/components/ui/button";

const examples = [
  { title: "Primary", variant: "primary", label: "Launch The Rocket" },
  { title: "Secondary", variant: "secondary", label: "Maybe Later" },
  { title: "Outline", variant: "outline", label: "Learn More If You Want" },
  { title: "Ghost", variant: "ghost", label: "I'm Barely Here" },
  { title: "Danger", variant: "danger", label: "Delete The Bank Account" },
  { title: "Success", variant: "success", label: "Withdraw $10,000" },
] as const;

const iconCode = `import { RocketIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-8 w-full items-center justify-center gap-3">
      <Button variant="primary" size="icon" aria-label="Launch the rocket">
        <RocketIcon />
      </Button>
      <Button variant="secondary" size="icon" aria-label="Launch the rocket">
        <RocketIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Launch the rocket">
        <RocketIcon />
      </Button>
      <Button variant="ghost" size="icon" aria-label="Launch the rocket">
        <RocketIcon />
      </Button>
    </div>
  )
}`;

const toc = [
  ...examples.map((example) => ({
    id: example.variant,
    title: example.title,
  })),
  { id: "icon", title: "Icon" },
];

function exampleCode(
  variant: (typeof examples)[number]["variant"],
  label: string,
) {
  return `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-8 w-full items-center justify-center">
      <Button variant="${variant}">${label}</Button>
    </div>
  )
}`;
}

export default function ButtonPage() {
  return (
    <>
      <SetDocsToc items={toc} />

      <h1 className="text-3xl font-bold">Button</h1>
      <p className="mt-2 text-muted-foreground">
        The Button component triggers actions, submits forms, or acts as a
        styled button.
      </p>

      <section className="mt-8 space-y-8">
        {examples.map((example) => (
          <div key={example.variant} className="space-y-3">
            <h2
              id={example.variant}
              className="scroll-mt-10 text-lg font-medium"
            >
              {example.title}
            </h2>
            <ComponentPreview
              code={exampleCode(example.variant, example.label)}
            >
              <div className="flex h-8 w-full items-center justify-center">
                <Button variant={example.variant}>{example.label}</Button>
              </div>
            </ComponentPreview>
          </div>
        ))}

        <div className="space-y-3">
          <h2 id="icon" className="scroll-mt-10 text-lg font-medium">
            Icon
          </h2>
          <ComponentPreview code={iconCode}>
            <div className="flex h-8 w-full items-center justify-center gap-3">
              <Button
                variant="primary"
                size="icon"
                aria-label="Launch the rocket"
              >
                <RocketIcon />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                aria-label="Launch the rocket"
              >
                <RocketIcon />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Launch the rocket"
              >
                <RocketIcon />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Launch the rocket"
              >
                <RocketIcon />
              </Button>
            </div>
          </ComponentPreview>
        </div>
      </section>
    </>
  );
}
