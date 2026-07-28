import { codeToHtml, type BundledLanguage } from "shiki";

const supportedLangs = ["tsx", "typescript", "jsx", "javascript"] as const;

type HighlightLanguage = (typeof supportedLangs)[number];

export async function highlightCode(
  code: string,
  lang: HighlightLanguage = "tsx",
): Promise<string> {
  return codeToHtml(code, {
    lang: lang as BundledLanguage,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
  });
}
