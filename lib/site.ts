function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}

export const site = {
  name: "amvn.uı",
  title: "amvn.ui — accessible elemental components",
  description:
    "Aman Rawat's UI library — accessible elemental components built with Base UI and Tailwind CSS.",
  url: getSiteUrl(),
  locale: "en_US",
  creator: "Aman Rawat",
} as const;
