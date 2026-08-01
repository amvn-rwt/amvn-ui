import type { Metadata } from "next";

import { site } from "@/lib/site";

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: CreatePageMetadataOptions): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(canonical, site.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
