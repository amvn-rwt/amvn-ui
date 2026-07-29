import { codeToHtml, type BundledLanguage } from "shiki";

const supportedLangs = ["tsx", "typescript", "jsx", "javascript"] as const;

type HighlightLanguage = (typeof supportedLangs)[number];

export async function highlightCode(
  code: string,
  lang: HighlightLanguage = "tsx",
): Promise<string> {
  const html = await codeToHtml(code, {
    lang: lang as BundledLanguage,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
  });

  // Shiki adds tabindex="0" for keyboard access; docs use Copy/View Code
  // instead, and the default focus ring is unwanted on the template.
  return html.replace(/ tabindex="0"/, "");
}
