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
      <div className="flex flex-1">
        <DocsSidebar />
        <main className="mx-auto min-w-0 max-w-15 flex-1 py-8">
          {children}
        </main>
        <DocsToc />
      </div>
    </DocsTocProvider>
  );
}
