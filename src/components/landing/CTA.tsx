import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready to transform your workflow?
          <br />
          <span className="text-primary">Start your free trial today.</span>
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button size="lg">Get started</Button>
          <Button variant="outline" size="lg">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
