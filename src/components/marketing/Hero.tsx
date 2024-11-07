import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[70vh] items-center justify-center",
        "bg-gradient-to-br from-background via-accent/10 to-primary/10",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Moving to your dream destination should be easy
            </span>{" "}
            🌍
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide guides and resources that help make relocating a breeze
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Get started
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-accent/10"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
