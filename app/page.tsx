import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-15 flex-col">
        <h1>
          <Link
            href="/"
            aria-label="amvn.ui"
            className="inline-flex items-center text-3xl font-semibold tracking-tight"
          >
            <span aria-hidden="true" className="inline-flex items-center">
              <span>amvn.uı</span>
            </span>
          </Link>
        </h1>
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
      </div>
    </main>
  );
}
