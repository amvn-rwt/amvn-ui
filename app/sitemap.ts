import type { MetadataRoute } from "next";

import { docsNav } from "@/lib/docs-nav";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const docPaths = docsNav.flatMap((section) =>
    section.items.map((item) => item.href),
  );

  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...docPaths.map((path) => ({
      url: new URL(path, site.url).toString(),
      changeFrequency: "weekly" as const,
      priority: path === "/components" ? 0.8 : 0.7,
    })),
  ];
}
