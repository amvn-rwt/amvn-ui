import type { Metadata } from "next";

import { site } from "@/lib/site";

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

function absoluteUrl(path: string) {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  return new URL(canonical, site.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
}: CreatePageMetadataOptions): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const url = absoluteUrl(canonical);

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

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@type": "SoftwareApplication",
    name: site.name,
    description: site.description,
    url: site.url,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [websiteJsonLd(), softwareApplicationJsonLd()],
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
