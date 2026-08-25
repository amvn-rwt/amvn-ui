import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { InlineCode } from "@/components/docs/inline-code";
import { JsonLd } from "@/components/seo/json-ld";
import { highlightCode } from "@/lib/highlight-code";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

import {
  BorderlessDemo,
  DefaultDemo,
  DisabledDemo,
  MultipleDemo,
} from "./demos";

export const metadata = createPageMetadata({
  title: "Accordion",
  description:
    "Accordion for amvn.ui: collapsible FAQ-style panels built with Base UI and Tailwind CSS.",
  path: "/components/accordion",
});

const anatomyCode = `import { Accordion } from "@/components/ui/accordion"

<Accordion.Root>
  <Accordion.Item>
    <Accordion.Trigger />
    <Accordion.Panel />
  </Accordion.Item>
</Accordion.Root>`;

const defaultCode = `import { Accordion } from "@/components/ui/accordion"

export default function Example() {
  return (
    <div className="flex w-full justify-center">
      <Accordion.Root defaultValue={["shipping"]} className="w-full max-w-13">
        <Accordion.Item value="shipping">
          <Accordion.Trigger>Do you ship internationally?</Accordion.Trigger>
          <Accordion.Panel>
            Yes. We ship to 140 countries as long as your customs form doesn't
            say "definitely not a rocket".
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="returns">
          <Accordion.Trigger>What's your return policy?</Accordion.Trigger>
          <Accordion.Panel>
            30 days, no questions asked. Slightly burnt rocket fuel residue is
            still considered "like new".
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="warranty">
          <Accordion.Trigger>Is there a warranty?</Accordion.Trigger>
          <Accordion.Panel>
            Lifetime coverage against spontaneous combustion. Atmospheric
            re-entry scratches not included.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="support">
          <Accordion.Trigger>How do I reach support?</Accordion.Trigger>
          <Accordion.Panel>
            Ping us anytime. Response times range from "instant" to "after we
            land" depending on orbital position.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}`;

const multipleCode = `import { Accordion } from "@/components/ui/accordion"

export default function Example() {
  return (
    <div className="flex w-full justify-center">
      <Accordion.Root multiple defaultValue={["shipping"]} className="w-full max-w-13">
        <Accordion.Item value="shipping">
          <Accordion.Trigger>Do you ship internationally?</Accordion.Trigger>
          <Accordion.Panel>
            Yes. We ship to 140 countries as long as your customs form doesn't
            say "definitely not a rocket".
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="returns">
          <Accordion.Trigger>What's your return policy?</Accordion.Trigger>
          <Accordion.Panel>
            30 days, no questions asked. Slightly burnt rocket fuel residue is
            still considered "like new".
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="warranty">
          <Accordion.Trigger>Is there a warranty?</Accordion.Trigger>
          <Accordion.Panel>
            Lifetime coverage against spontaneous combustion. Atmospheric
            re-entry scratches not included.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="support">
          <Accordion.Trigger>How do I reach support?</Accordion.Trigger>
          <Accordion.Panel>
            Ping us anytime. Response times range from "instant" to "after we
            land" depending on orbital position.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}`;

const disabledCode = `import { Accordion } from "@/components/ui/accordion"

export default function Example() {
  return (
    <div className="flex w-full justify-center">
      <Accordion.Root defaultValue={["shipping"]} className="w-full max-w-13">
        <Accordion.Item value="shipping">
          <Accordion.Trigger>Do you ship internationally?</Accordion.Trigger>
          <Accordion.Panel>
            Yes. We ship to 140 countries as long as your customs form doesn't
            say "definitely not a rocket".
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="classified" disabled>
          <Accordion.Trigger>Where is the secret launch pad?</Accordion.Trigger>
          <Accordion.Panel>
            Nice try. This one's classified until you clear the background check.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="support">
          <Accordion.Trigger>How do I reach support?</Accordion.Trigger>
          <Accordion.Panel>
            Ping us anytime. Response times range from "instant" to "after we
            land" depending on orbital position.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}`;

const borderlessCode = `import { Accordion } from "@/components/ui/accordion"

export default function Example() {
  return (
    <div className="flex w-full justify-center">
      <Accordion.Root bordered={false} defaultValue={["shipping"]} className="w-full max-w-13">
        <Accordion.Item value="shipping">
          <Accordion.Trigger>Do you ship internationally?</Accordion.Trigger>
          <Accordion.Panel>
            Yes. We ship to 140 countries as long as your customs form doesn't
            say "definitely not a rocket".
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="returns">
          <Accordion.Trigger>What's your return policy?</Accordion.Trigger>
          <Accordion.Panel>
            30 days, no questions asked. Slightly burnt rocket fuel residue is
            still considered "like new".
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="warranty">
          <Accordion.Trigger>Is there a warranty?</Accordion.Trigger>
          <Accordion.Panel>
            Lifetime coverage against spontaneous combustion. Atmospheric
            re-entry scratches not included.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="support">
          <Accordion.Trigger>How do I reach support?</Accordion.Trigger>
          <Accordion.Panel>
            Ping us anytime. Response times range from "instant" to "after we
            land" depending on orbital position.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}`;

const rootProps = [
  {
    name: "bordered",
    type: "boolean",
    defaultValue: "true",
  },
  {
    name: "multiple",
    type: "boolean",
    defaultValue: "false",
  },
  {
    name: "value",
    type: "string[]",
    defaultValue: "—",
  },
  {
    name: "defaultValue",
    type: "string[]",
    defaultValue: "—",
  },
  {
    name: "onValueChange",
    type: "(value: string[], eventDetails) => void",
    defaultValue: "—",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
] as const;

const itemProps = [
  {
    name: "value",
    type: "string",
    defaultValue: "auto-generated",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
] as const;

const toc = [
  { id: "default", title: "Default" },
  { id: "anatomy", title: "Anatomy" },
  { id: "multiple", title: "Multiple" },
  { id: "disabled", title: "Disabled" },
  { id: "borderless", title: "Borderless" },
  { id: "props", title: "Props" },
];

function PropsTable({
  props,
}: {
  props: readonly {
    name: string;
    type: string;
    defaultValue: string;
  }[];
}) {
  return (
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
  );
}

export default async function AccordionPage() {
  const anatomyHtml = await highlightCode(anatomyCode);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: site.name, path: "/" },
          { name: "Components", path: "/components" },
          { name: "Accordion", path: "/components/accordion" },
        ])}
      />
      <SetDocsToc items={toc} />

      <h1 className="text-3xl font-bold">Accordion</h1>
      <p className="mt-2 text-muted-foreground">
        A set of collapsible panels for FAQs and progressive disclosure,
        accessible by default. Base UI handles{" "}
        <InlineCode>aria-expanded</InlineCode>
        , heading semantics and keyboard navigation.
      </p>

      <section className="mt-8 space-y-8">
        <div className="space-y-3">
          <h2 id="default" className="scroll-mt-10 text-lg font-medium">
            Default
          </h2>
          <ComponentPreview code={defaultCode}>
            <DefaultDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="anatomy" className="scroll-mt-10 text-lg font-medium">
            Anatomy
          </h2>
          <div
            className="overflow-x-auto rounded-3xl border border-border bg-muted/intense p-4 font-mono text-sm [&_pre]:m-0 [&_pre]:bg-transparent! [&_pre]:p-0"
            dangerouslySetInnerHTML={{ __html: anatomyHtml }}
          />
        </div>

        <div className="space-y-3">
          <h2 id="multiple" className="scroll-mt-10 text-lg font-medium">
            Multiple
          </h2>
          <ComponentPreview code={multipleCode}>
            <MultipleDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="disabled" className="scroll-mt-10 text-lg font-medium">
            Disabled
          </h2>
          <ComponentPreview code={disabledCode}>
            <DisabledDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="borderless" className="scroll-mt-10 text-lg font-medium">
            Borderless
          </h2>
          <ComponentPreview code={borderlessCode}>
            <BorderlessDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <h2 id="props" className="scroll-mt-10 text-lg font-medium">
            Props
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Accordion.Root</h3>
            <PropsTable props={rootProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Accordion.Item</h3>
            <PropsTable props={itemProps} />
          </div>
        </div>
      </section>
    </>
  );
}
