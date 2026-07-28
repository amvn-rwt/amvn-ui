import * as React from "react";

import { ComponentPreviewShell } from "@/components/docs/component-preview-shell";
import { highlightCode } from "@/lib/highlight-code";

type ComponentPreviewProps = {
  children: React.ReactNode;
  code: string;
  lang?: "tsx" | "typescript" | "jsx" | "javascript";
  className?: string;
  previewClassName?: string;
};

async function ComponentPreview({
  children,
  code,
  lang = "tsx",
  className,
  previewClassName,
}: ComponentPreviewProps) {
  const highlightedHtml = await highlightCode(code, lang);

  return (
    <ComponentPreviewShell
      code={code}
      highlightedHtml={highlightedHtml}
      className={className}
      previewClassName={previewClassName}
    >
      {children}
    </ComponentPreviewShell>
  );
}

export { ComponentPreview };
export type { ComponentPreviewProps };
