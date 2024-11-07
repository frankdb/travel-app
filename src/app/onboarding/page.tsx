import Navbar from "@/components/shared/Navbar";
import Container from "@/components/shared/Container";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      <Navbar />
      <Container size="sm" className="py-16">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-center">
            Welcome to NomadPortal
          </h1>
          <p className="text-muted-foreground text-center">
            Let&apos;s get your account set up
          </p>

          <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
            <p className="text-center text-muted-foreground">
              Onboarding form will go here
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
