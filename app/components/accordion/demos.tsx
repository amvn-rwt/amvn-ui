"use client";

import { PlusIcon } from "lucide-react";
import { motion } from "motion/react";

import { Accordion } from "@/components/ui/accordion";
import { spring } from "@/lib/motion";

function DefaultDemo() {
  return (
    <div className="flex w-full justify-center">
      <Accordion.Root defaultValue={["shipping"]} className="w-full max-w-96">
        <Accordion.Item value="shipping">
          <Accordion.Trigger>Do you ship internationally?</Accordion.Trigger>
          <Accordion.Panel>
            Yes. We ship to 140 countries as long as your customs form
            doesn&apos;t say &quot;definitely not a rocket&quot;.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="returns">
          <Accordion.Trigger>What&apos;s your return policy?</Accordion.Trigger>
          <Accordion.Panel>
            30 days, no questions asked. Slightly burnt rocket fuel residue is
            still considered &quot;like new&quot;.
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
            Ping us anytime. Response times range from &quot;instant&quot; to
            &quot;after we land&quot; depending on orbital position.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

function MultipleDemo() {
  return (
    <div className="flex w-full justify-center">
      <Accordion.Root
        multiple
        defaultValue={["shipping"]}
        className="w-full max-w-96"
      >
        <Accordion.Item value="shipping">
          <Accordion.Trigger>Do you ship internationally?</Accordion.Trigger>
          <Accordion.Panel>
            Yes. We ship to 140 countries as long as your customs form
            doesn&apos;t say &quot;definitely not a rocket&quot;.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="returns">
          <Accordion.Trigger>What&apos;s your return policy?</Accordion.Trigger>
          <Accordion.Panel>
            30 days, no questions asked. Slightly burnt rocket fuel residue is
            still considered &quot;like new&quot;.
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
            Ping us anytime. Response times range from &quot;instant&quot; to
            &quot;after we land&quot; depending on orbital position.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

function DisabledDemo() {
  return (
    <div className="flex w-full justify-center">
      <Accordion.Root defaultValue={["shipping"]} className="w-full max-w-96">
        <Accordion.Item value="shipping">
          <Accordion.Trigger>Do you ship internationally?</Accordion.Trigger>
          <Accordion.Panel>
            Yes. We ship to 140 countries as long as your customs form
            doesn&apos;t say &quot;definitely not a rocket&quot;.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="classified" disabled>
          <Accordion.Trigger>
            Where is the secret launch pad?
          </Accordion.Trigger>
          <Accordion.Panel>
            Nice try. This one&apos;s classified until you clear the background
            check.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="support">
          <Accordion.Trigger>How do I reach support?</Accordion.Trigger>
          <Accordion.Panel>
            Ping us anytime. Response times range from &quot;instant&quot; to
            &quot;after we land&quot; depending on orbital position.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

function BorderlessDemo() {
  return (
    <div className="flex w-full justify-center">
      <Accordion.Root
        bordered={false}
        defaultValue={["shipping"]}
        className="w-full max-w-96"
      >
        <Accordion.Item value="shipping">
          <Accordion.Trigger>Do you ship internationally?</Accordion.Trigger>
          <Accordion.Panel>
            Yes. We ship to 140 countries as long as your customs form
            doesn&apos;t say &quot;definitely not a rocket&quot;.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="returns">
          <Accordion.Trigger>What&apos;s your return policy?</Accordion.Trigger>
          <Accordion.Panel>
            30 days, no questions asked. Slightly burnt rocket fuel residue is
            still considered &quot;like new&quot;.
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
            Ping us anytime. Response times range from &quot;instant&quot; to
            &quot;after we land&quot; depending on orbital position.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

function plusIndicator(open: boolean) {
  return (
    <motion.span
      aria-hidden
      className="inline-flex shrink-0"
      initial={false}
      animate={{ rotate: open ? 45 : 0 }}
      transition={spring.micro}
    >
      <PlusIcon className="size-4 text-muted-foreground" />
    </motion.span>
  );
}

function CustomIndicatorDemo() {
  return (
    <div className="flex w-full justify-center">
      <Accordion.Root defaultValue={["shipping"]} className="w-full max-w-96">
        <Accordion.Item value="shipping">
          <Accordion.Trigger indicator={plusIndicator}>
            Do you ship internationally?
          </Accordion.Trigger>
          <Accordion.Panel>
            Yes. We ship to 140 countries as long as your customs form
            doesn&apos;t say &quot;definitely not a rocket&quot;.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="returns">
          <Accordion.Trigger indicator={plusIndicator}>
            What&apos;s your return policy?
          </Accordion.Trigger>
          <Accordion.Panel>
            30 days, no questions asked. Slightly burnt rocket fuel residue is
            still considered &quot;like new&quot;.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="warranty">
          <Accordion.Trigger indicator={null}>
            Is there a warranty?
          </Accordion.Trigger>
          <Accordion.Panel>
            Lifetime coverage against spontaneous combustion. Atmospheric
            re-entry scratches not included.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="support">
          <Accordion.Trigger indicator={plusIndicator}>
            How do I reach support?
          </Accordion.Trigger>
          <Accordion.Panel>
            Ping us anytime. Response times range from &quot;instant&quot; to
            &quot;after we land&quot; depending on orbital position.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}

export {
  DefaultDemo,
  MultipleDemo,
  DisabledDemo,
  BorderlessDemo,
  CustomIndicatorDemo,
};
