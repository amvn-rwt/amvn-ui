import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-w-15 max-w-15 flex-col py-10">
      <h1 className="text-3xl font-bold">amvn/ui</h1>
      <p className="mt-2 text-muted-foreground">
        Aman Rawat&apos;s UI library — accessible components built with Base UI
        and Tailwind CSS.
      </p>
      <Link
        href="/components"
        className="mt-8 text-sm font-medium underline-offset-4 hover:underline"
      >
        Browse Components
      </Link>
    </main>
  );
}
