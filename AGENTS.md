# Agent notes

Base UI + Tailwind component library on Next.js 16 App Router.

- Style wrappers in `components/ui` only. Behavior comes from `@base-ui/react/*`.
- Spacing tokens are custom (see `.cursor/rules/spacing-tokens.mdc`). Do not assume default Tailwind sizes.
- Open `node_modules/next/dist/docs/` only when the task is routing, caching, or a Next API you are unsure about. Do not read Next docs for routine UI styling.
