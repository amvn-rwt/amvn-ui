import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = `${site.name}: accessible elemental components`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/** Exact sRGB from :root tokens in globals.css */
const colors = {
  background: "#fafaf9", // --background
  foreground: "#0c0a09", // --foreground
  mutedForeground: "#575553", // --muted-foreground
} as const;

/** Spacing tokens from globals.css @theme */
const space = {
  4: 16, // --spacing-4 — mt-2 × 2 (keeps gap proportional to ×2 type)
  6: 32, // --spacing-6 — sm:px-6
  10: 128, // --spacing-10 — py-10
} as const;

/** Type tokens ×2 so the share card stays readable at 1200×630 */
const text = {
  base: 32, // --text-base (16) × 2
  "3xl": 60, // --text-3xl (30) × 2
} as const;

export default async function Image() {
  const [satoshiSemibold, satoshiRegular] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/Satoshi-Semibold.ttf")),
    readFile(join(process.cwd(), "app/fonts/Satoshi-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          background: colors.background,
          color: colors.foreground,
          padding: `${space[10]}px ${space[6]}px`,
          fontFamily: "Satoshi",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: text["3xl"],
            fontWeight: 600,
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: space[4],
            fontSize: text.base,
            fontWeight: 400,
            color: colors.mutedForeground,
            lineHeight: 1.5,
            maxWidth: 880,
          }}
        >
          {"Aman Rawat's UI library: accessible components built with Base UI and Tailwind CSS."}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Satoshi",
          data: satoshiSemibold,
          style: "normal",
          weight: 600,
        },
        {
          name: "Satoshi",
          data: satoshiRegular,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
