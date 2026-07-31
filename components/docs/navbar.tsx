import Link from "next/link";

import { ThemeToggle } from "@/components/docs/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="flex h-8 w-full items-center justify-between px-5">
        <Link
          href="/"
          aria-label="amvn.ui"
          className="inline-flex items-center text-xl font-semibold tracking-tight"
        >
          <span aria-hidden="true" className="inline-flex items-center">
            <span>amvn.uı</span>
          </span>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
