import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="flex h-8 w-full items-center px-5">
        <Link
          href="/"
          aria-label="amvn.ui"
          className="inline-flex items-center text-xl font-semibold tracking-tight"
        >
          <span aria-hidden="true" className="inline-flex items-center">
            <span>amvn</span>
            <span className="mx-[0.2em] size-[0.22em] rounded-full bg-current" />
            <span>uı</span>
          </span>
        </Link>
      </nav>
    </header>
  );
}
