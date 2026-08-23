import {
  ArrowRightIcon,
  CoffeeIcon,
  GhostIcon,
  RocketIcon,
  SparklesIcon,
  WalletIcon,
} from "lucide-react";

import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { InlineCode } from "@/components/docs/inline-code";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Button",
  description:
    "Button for amvn.ui with primary, secondary, outline, ghost, danger and success variants, built with Base UI and Tailwind CSS.",
  path: "/components/button",
});

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

const withIconCode = `import {
  ArrowRightIcon,
  CoffeeIcon,
  GhostIcon,
  RocketIcon,
  SparklesIcon,
  WalletIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>
          <RocketIcon />
          Launch The Rocket
        </Button>
        <Button>
          Withdraw $10,000
          <WalletIcon />
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="secondary">
          <CoffeeIcon />
          Maybe Later
        </Button>
        <Button variant="secondary">
          Learn More If You Want
          <ArrowRightIcon />
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="ghost">
          <GhostIcon />
          I&apos;m Barely Here
        </Button>
        <Button variant="ghost">
          Make It Fancy
          <SparklesIcon />
        </Button>
      </div>
    </div>
  )
}`;

const disabledCode = `import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex h-8 w-full items-center justify-center gap-3">
      <Button disabled>Maybe Later</Button>
      <Button variant="danger" disabled>
        Delete The Bank Account
      </Button>
    </div>
  )
}`;

const props = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "outline" | "ghost" | "danger" | "success"',
    defaultValue: '"primary"',
  },
  {
    name: "size",
    type: '"sm" | "md" | "icon"',
    defaultValue: '"md"',
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "type",
    type: '"button" | "submit" | "reset"',
    defaultValue: '"button"',
  },
  {
    name: "focusableWhenDisabled",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "nativeButton",
    type: "boolean",
    defaultValue: "true",
  },
] as const;

const toc = [
  ...examples.map((example) => ({
    id: example.variant,
    title: example.title,
  })),
  { id: "icon", title: "Icon" },
  { id: "with-icon", title: "With Icon" },
  { id: "disabled", title: "Disabled" },
  { id: "guidelines", title: "Usage guidelines" },
  { id: "props", title: "Props" },
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
      <JsonLd
        data={breadcrumbJsonLd([
          { name: site.name, path: "/" },
          { name: "Components", path: "/components" },
          { name: "Button", path: "/components/button" },
        ])}
      />
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

        <div className="space-y-3">
          <h2 id="with-icon" className="scroll-mt-10 text-lg font-medium">
            With Icon
          </h2>
          <ComponentPreview code={withIconCode}>
            <div className="flex w-full flex-col items-center justify-center gap-3">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button>
                  <RocketIcon />
                  Launch The Rocket
                </Button>
                <Button>
                  Withdraw $10,000
                  <WalletIcon />
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button variant="secondary">
                  <CoffeeIcon />
                  Maybe Later
                </Button>
                <Button variant="secondary">
                  Learn More If You Want
                  <ArrowRightIcon />
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button variant="ghost">
                  <GhostIcon />
                  I&apos;m Barely Here
                </Button>
                <Button variant="ghost">
                  Make It Fancy
                  <SparklesIcon />
                </Button>
              </div>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="disabled" className="scroll-mt-10 text-lg font-medium">
            Disabled
          </h2>
          <ComponentPreview code={disabledCode}>
            <div className="flex h-8 w-full flex-wrap items-center justify-center gap-3">
              <Button disabled>Maybe Later</Button>
              <Button variant="danger" disabled>
                Delete The Bank Account
              </Button>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="guidelines" className="scroll-mt-10 text-lg font-medium">
            Usage guidelines
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">
                Form submissions
              </span>{" "}
              Button defaults to <InlineCode>type="button"</InlineCode>, so set{" "}
              <InlineCode>type="submit"</InlineCode> when it should submit a
              parent form.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Loading buttons
              </span>{" "}
              During async submission, pair <InlineCode>disabled</InlineCode>{" "}
              with <InlineCode>focusableWhenDisabled</InlineCode> so focus stays
              on the button instead of jumping elsewhere in the tab order.
            </li>
            <li>
              <span className="font-medium text-foreground">
                Links vs. buttons
              </span>{" "}
              Navigation belongs on a native <InlineCode>{"<a>"}</InlineCode>{" "}
              with an <InlineCode>href</InlineCode>. Do not wrap links in
              Button: links and buttons carry different accessibility semantics.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 id="props" className="scroll-mt-10 text-lg font-medium">
            Props
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-border">
            <table className="w-full min-w-14 text-left text-sm">
              <thead className="border-b border-border bg-muted/muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Prop</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Default</th>
                </tr>
              </thead>
              <tbody>
                {props.map((prop) => (
                  <tr
                    key={prop.name}
                    className="border-b border-border last:border-b-0"
                  >
                    <td className="px-4 py-3 font-mono text-sm">{prop.name}</td>
                    <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                      {prop.type}
                    </td>
                    <td className="px-4 py-3 font-mono text-sm text-muted-foreground">
                      {prop.defaultValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
