import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
              Take the trip of your dreams
            </span>{" "}
            🌍
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Generate your dream itinerary with our AI-powered platform.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              Get started
            </Button>
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
