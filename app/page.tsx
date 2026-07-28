import { Button } from "@/components/ui/button";

const variants = ["solid", "outline", "ghost"] as const;
const sizes = [
  { label: "Extra Small", value: "xs" },
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
] as const;

export default function Home() {
  return (
    <div>
      <main className="mx-auto max-w-16 px-2 py-10">
        <h1 className="text-3xl font-bold">Button</h1>
        <p className="mt-2 text-muted-foreground">
          Variant × size gallery. Tab to a button to see the focus ring.
        </p>

        <section className="mt-8 space-y-6">
          {variants.map((variant) => (
            <div key={variant} className="space-y-3">
              <h2 className="text-sm font-medium capitalize text-muted-foreground">
                {variant}
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant={variant}>Button</Button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
