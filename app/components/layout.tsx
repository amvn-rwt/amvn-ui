import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocsToc, DocsTocProvider } from "@/components/docs/docs-toc";
import { Navbar } from "@/components/docs/navbar";

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DocsTocProvider>
      <Navbar />
      <div className="flex min-w-0 flex-1">
        <DocsSidebar />
        <main className="min-w-0 flex-1 px-6 py-16 sm:px-8">
          <div className="mx-auto w-full max-w-[40rem]">{children}</div>
        </main>
        <DocsToc />
      </div>
    </DocsTocProvider>
  );
}
