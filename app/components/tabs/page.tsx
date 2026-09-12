import { ComponentPreview } from "@/components/docs/component-preview";
import { SetDocsToc } from "@/components/docs/docs-toc";
import { InlineCode } from "@/components/docs/inline-code";
import { JsonLd } from "@/components/seo/json-ld";
import { highlightCode } from "@/lib/highlight-code";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

import { DefaultDemo, DisabledDemo } from "./demos";

export const metadata = createPageMetadata({
  title: "Tabs",
  description:
    "Tabs for amvn.ui: related views on one page with a sliding indicator, built with Base UI and Tailwind CSS.",
  path: "/components/tabs",
});

const anatomyCode = `import { Tabs } from "@/components/ui/tabs"

<Tabs.Root>
  <Tabs.List>
    <Tabs.Tab value="…" />
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Panel value="…" />
</Tabs.Root>`;

const defaultCode = `import { Tabs } from "@/components/ui/tabs"

export default function Example() {
  return (
    <Tabs.Root defaultValue="flight" className="w-full max-w-sm">
      <Tabs.List>
        <Tabs.Tab value="flight">Flight Log</Tabs.Tab>
        <Tabs.Tab value="systems">Systems</Tabs.Tab>
        <Tabs.Tab value="crew">Crew</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="flight">
        Mission elapsed time: 14 days, 6 hours, 42 minutes. All nominal.
      </Tabs.Panel>
      <Tabs.Panel value="systems">
        Oxygen: 98% · Power: 94% · Thermal: nominal · Propulsion: standby.
      </Tabs.Panel>
      <Tabs.Panel value="crew">
        3 crew members active. Sleep cycles staggered. Morale: high.
      </Tabs.Panel>
    </Tabs.Root>
  )
}`;

const disabledCode = `import { Tabs } from "@/components/ui/tabs"

export default function Example() {
  return (
    <Tabs.Root defaultValue="flight" className="w-full max-w-sm">
      <Tabs.List>
        <Tabs.Tab value="flight">Flight Log</Tabs.Tab>
        <Tabs.Tab value="classified" disabled>Classified</Tabs.Tab>
        <Tabs.Tab value="crew">Crew</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="flight">
        Mission elapsed time: 14 days, 6 hours, 42 minutes. All nominal.
      </Tabs.Panel>
      <Tabs.Panel value="crew">
        3 crew members active. Sleep cycles staggered. Morale: high.
      </Tabs.Panel>
    </Tabs.Root>
  )
}`;

const rootProps = [
  { name: "defaultValue", type: "Tabs.Tab.Value", defaultValue: "0" },
  { name: "value", type: "Tabs.Tab.Value", defaultValue: "—" },
  {
    name: "onValueChange",
    type: "(value, eventDetails) => void",
    defaultValue: "—",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
  },
] as const;

const tabProps = [
  { name: "value*", type: "Tabs.Tab.Value", defaultValue: "—" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
] as const;

const panelProps = [
  { name: "value*", type: "Tabs.Tab.Value", defaultValue: "—" },
  {
    name: "keepMounted",
    type: "boolean",
    defaultValue: "false",
  },
] as const;

const indicatorProps = [
  {
    name: "renderBeforeHydration",
    type: "boolean",
    defaultValue: "false",
  },
] as const;

const toc = [
  { id: "default", title: "Default" },
  { id: "anatomy", title: "Anatomy" },
  { id: "disabled", title: "Disabled" },
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

export default async function TabsPage() {
  const anatomyHtml = await highlightCode(anatomyCode);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: site.name, path: "/" },
          { name: "Components", path: "/components" },
          { name: "Tabs", path: "/components/tabs" },
        ])}
      />
      <SetDocsToc items={toc} />

      <h1 className="text-3xl font-bold">Tabs</h1>
      <p className="mt-2 text-muted-foreground">
        Related views on the same page. The indicator follows the active tab,
        and panels fade in from the direction you came from.
      </p>

      <section className="mt-8 space-y-8">
        <div className="space-y-3">
          <h2 id="default" className="scroll-mt-10 text-lg font-medium">
            Default
          </h2>
          <p className="text-base text-muted-foreground">
            Pass <InlineCode>defaultValue</InlineCode> to select the initial
            tab. Drop <InlineCode>Tabs.Indicator</InlineCode> inside{" "}
            <InlineCode>Tabs.List</InlineCode> and it tracks the active tab.
          </p>
          <ComponentPreview code={defaultCode} previewClassName="p-5 sm:p-8">
            <DefaultDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h2 id="anatomy" className="scroll-mt-10 text-lg font-medium">
            Anatomy
          </h2>
          <p className="text-base text-muted-foreground">
            <InlineCode>Tabs.List</InlineCode> holds the triggers. Each{" "}
            <InlineCode>Tabs.Panel</InlineCode> matches a tab{" "}
            <InlineCode>value</InlineCode>.
          </p>
          <div
            className="overflow-x-auto rounded-3xl border border-border bg-muted/intense p-4 font-mono text-sm [&_pre]:m-0 [&_pre]:bg-transparent! [&_pre]:p-0"
            dangerouslySetInnerHTML={{ __html: anatomyHtml }}
          />
        </div>

        <div className="space-y-3">
          <h2 id="disabled" className="scroll-mt-10 text-lg font-medium">
            Disabled
          </h2>
          <p className="text-base text-muted-foreground">
            Set <InlineCode>disabled</InlineCode> on a{" "}
            <InlineCode>Tabs.Tab</InlineCode> to prevent activation while
            keeping the label visible.
          </p>
          <ComponentPreview code={disabledCode} previewClassName="p-5 sm:p-8">
            <DisabledDemo />
          </ComponentPreview>
        </div>

        <div className="space-y-6">
          <h2 id="props" className="scroll-mt-10 text-lg font-medium">
            Props
          </h2>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Tabs.Root</h3>
            <PropsTable props={rootProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Tabs.Tab</h3>
            <PropsTable props={tabProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Tabs.Panel</h3>
            <PropsTable props={panelProps} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-medium">Tabs.Indicator</h3>
            <PropsTable props={indicatorProps} />
          </div>

          <p className="text-base text-muted-foreground">
            This covers the parts used above. See the{" "}
            <a
              href="https://base-ui.com/react/components/tabs"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Base UI Tabs docs
            </a>{" "}
            for <InlineCode>render</InlineCode>,{" "}
            <InlineCode>activateOnFocus</InlineCode>,{" "}
            <InlineCode>loopFocus</InlineCode>, event details, CSS variables and
            data attributes.
          </p>
        </div>
      </section>
    </>
  );
}
