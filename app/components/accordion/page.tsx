import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { InlineCode } from "@/components/docs/inline-code";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Accordion",
  description:
    "Accordion component for amvn.ui. Collapsible FAQ-style panels built with Base UI and Tailwind CSS.",
  path: "/components/accordion",
});

const defaultCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Example() {
  return (
    <div className="flex w-full justify-center">
      <Accordion defaultValue={["shipping"]} className="w-full max-w-13">
        <AccordionItem value="shipping">
          <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
          <AccordionContent>
            Yes. We ship to 140 countries as long as your customs form doesn't
            say "definitely not a rocket".
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>What's your return policy?</AccordionTrigger>
          <AccordionContent>
            30 days, no questions asked. Slightly burnt rocket fuel residue is
            still considered "like new".
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="warranty">
          <AccordionTrigger>Is there a warranty?</AccordionTrigger>
          <AccordionContent>
            Lifetime coverage against spontaneous combustion. Atmospheric
            re-entry scratches not included.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>How do I reach support?</AccordionTrigger>
          <AccordionContent>
            Ping us anytime. Response times range from "instant" to "after we
            land" depending on orbital position.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}`;

const multipleCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Example() {
  return (
    <div className="flex w-full justify-center">
      <Accordion multiple defaultValue={["shipping"]} className="w-full max-w-13">
        <AccordionItem value="shipping">
          <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
          <AccordionContent>
            Yes. We ship to 140 countries as long as your customs form doesn't
            say "definitely not a rocket".
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>What's your return policy?</AccordionTrigger>
          <AccordionContent>
            30 days, no questions asked. Slightly burnt rocket fuel residue is
            still considered "like new".
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="warranty">
          <AccordionTrigger>Is there a warranty?</AccordionTrigger>
          <AccordionContent>
            Lifetime coverage against spontaneous combustion. Atmospheric
            re-entry scratches not included.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>How do I reach support?</AccordionTrigger>
          <AccordionContent>
            Ping us anytime. Response times range from "instant" to "after we
            land" depending on orbital position.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}`;

const disabledCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Example() {
  return (
    <div className="flex w-full justify-center">
      <Accordion defaultValue={["shipping"]} className="w-full max-w-13">
        <AccordionItem value="shipping">
          <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
          <AccordionContent>
            Yes. We ship to 140 countries as long as your customs form doesn't
            say "definitely not a rocket".
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="classified" disabled>
          <AccordionTrigger>Where is the secret launch pad?</AccordionTrigger>
          <AccordionContent>
            Nice try. This one's classified until you clear the background check.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>How do I reach support?</AccordionTrigger>
          <AccordionContent>
            Ping us anytime. Response times range from "instant" to "after we
            land" depending on orbital position.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}`;

const borderlessCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Example() {
  return (
    <div className="flex w-full justify-center">
      <Accordion bordered={false} defaultValue={["shipping"]} className="w-full max-w-13">
        <AccordionItem value="shipping">
          <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
          <AccordionContent>
            Yes. We ship to 140 countries as long as your customs form doesn't
            say "definitely not a rocket".
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>What's your return policy?</AccordionTrigger>
          <AccordionContent>
            30 days, no questions asked. Slightly burnt rocket fuel residue is
            still considered "like new".
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="warranty">
          <AccordionTrigger>Is there a warranty?</AccordionTrigger>
          <AccordionContent>
            Lifetime coverage against spontaneous combustion. Atmospheric
            re-entry scratches not included.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>How do I reach support?</AccordionTrigger>
          <AccordionContent>
            Ping us anytime. Response times range from "instant" to "after we
            land" depending on orbital position.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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

export default function AccordionPage() {
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
        A set of collapsible panels for FAQs and progressive disclosure.
        Accessible by default. Base UI handles{" "}
        <InlineCode>aria-expanded</InlineCode>
        , heading semantics and keyboard navigation.
      </p>

      <section className="mt-8 space-y-8">
        <div className="space-y-3">
          <h2 id="default" className="scroll-mt-10 text-lg font-medium">
            Default
          </h2>
          <ComponentPreview code={defaultCode}>
            <div className="flex w-full justify-center">
              <Accordion
                defaultValue={["shipping"]}
                className="w-full max-w-13"
              >
                <AccordionItem value="shipping">
                  <AccordionTrigger>
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. We ship to 140 countries as long as your customs form
                    doesn&apos;t say &quot;definitely not a rocket&quot;.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                  <AccordionTrigger>
                    What&apos;s your return policy?
                  </AccordionTrigger>
                  <AccordionContent>
                    30 days, no questions asked. Slightly burnt rocket fuel
                    residue is still considered &quot;like new&quot;.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="warranty">
                  <AccordionTrigger>Is there a warranty?</AccordionTrigger>
                  <AccordionContent>
                    Lifetime coverage against spontaneous combustion.
                    Atmospheric re-entry scratches not included.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                  <AccordionTrigger>How do I reach support?</AccordionTrigger>
                  <AccordionContent>
                    Ping us anytime. Response times range from
                    &quot;instant&quot; to &quot;after we land&quot; depending
                    on orbital position.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="multiple" className="scroll-mt-10 text-lg font-medium">
            Multiple
          </h2>
          <ComponentPreview code={multipleCode}>
            <div className="flex w-full justify-center">
              <Accordion
                multiple
                defaultValue={["shipping"]}
                className="w-full max-w-13"
              >
                <AccordionItem value="shipping">
                  <AccordionTrigger>
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. We ship to 140 countries as long as your customs form
                    doesn&apos;t say &quot;definitely not a rocket&quot;.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                  <AccordionTrigger>
                    What&apos;s your return policy?
                  </AccordionTrigger>
                  <AccordionContent>
                    30 days, no questions asked. Slightly burnt rocket fuel
                    residue is still considered &quot;like new&quot;.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="warranty">
                  <AccordionTrigger>Is there a warranty?</AccordionTrigger>
                  <AccordionContent>
                    Lifetime coverage against spontaneous combustion.
                    Atmospheric re-entry scratches not included.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                  <AccordionTrigger>How do I reach support?</AccordionTrigger>
                  <AccordionContent>
                    Ping us anytime. Response times range from
                    &quot;instant&quot; to &quot;after we land&quot; depending
                    on orbital position.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="disabled" className="scroll-mt-10 text-lg font-medium">
            Disabled
          </h2>
          <ComponentPreview code={disabledCode}>
            <div className="flex w-full justify-center">
              <Accordion
                defaultValue={["shipping"]}
                className="w-full max-w-13"
              >
                <AccordionItem value="shipping">
                  <AccordionTrigger>
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. We ship to 140 countries as long as your customs form
                    doesn&apos;t say &quot;definitely not a rocket&quot;.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="classified" disabled>
                  <AccordionTrigger>
                    Where is the secret launch pad?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nice try. This one&apos;s classified until you clear the
                    background check.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                  <AccordionTrigger>How do I reach support?</AccordionTrigger>
                  <AccordionContent>
                    Ping us anytime. Response times range from
                    &quot;instant&quot; to &quot;after we land&quot; depending
                    on orbital position.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="borderless" className="scroll-mt-10 text-lg font-medium">
            Borderless
          </h2>
          <ComponentPreview code={borderlessCode}>
            <div className="flex w-full justify-center">
              <Accordion
                bordered={false}
                defaultValue={["shipping"]}
                className="w-full max-w-13"
              >
                <AccordionItem value="shipping">
                  <AccordionTrigger>
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. We ship to 140 countries as long as your customs form
                    doesn&apos;t say &quot;definitely not a rocket&quot;.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                  <AccordionTrigger>
                    What&apos;s your return policy?
                  </AccordionTrigger>
                  <AccordionContent>
                    30 days, no questions asked. Slightly burnt rocket fuel
                    residue is still considered &quot;like new&quot;.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="warranty">
                  <AccordionTrigger>Is there a warranty?</AccordionTrigger>
                  <AccordionContent>
                    Lifetime coverage against spontaneous combustion.
                    Atmospheric re-entry scratches not included.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                  <AccordionTrigger>How do I reach support?</AccordionTrigger>
                  <AccordionContent>
                    Ping us anytime. Response times range from
                    &quot;instant&quot; to &quot;after we land&quot; depending
                    on orbital position.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <h2 id="props" className="scroll-mt-10 text-lg font-medium">
            Props
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Accordion</h3>
            <PropsTable props={rootProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">AccordionItem</h3>
            <PropsTable props={itemProps} />
          </div>
        </div>
      </section>
    </>
  );
}
