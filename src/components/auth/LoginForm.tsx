"use client";

import { useState } from "react";
import { signInWithMagicLink } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Mail } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showMagicLink, setShowMagicLink] = useState(false);
  const supabase = createClient();

  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  const handleMagicLink = async (formData: FormData) => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(null);
      const result = await signInWithMagicLink(formData);
      if (result.error) {
        setError(result.error);
      } else if (result.success) {
        setSuccess(result.success);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container relative flex-col items-center justify-center min-h-screen grid lg:max-w-none lg:grid-cols-1 lg:px-0">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        {error && (
          <div className="px-6 text-sm text-destructive text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="px-6 text-sm text-green-500 text-center">
            {success}
          </div>
        )}
        <CardContent className="grid gap-4">
          <Button
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full"
          >
            <FcGoogle className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>

          {!showMagicLink ? (
            <Button
              variant="outline"
              onClick={() => setShowMagicLink(true)}
              disabled={isLoading}
              className="w-full"
            >
              <Mail className="mr-2 h-4 w-4" />
              Continue with Email
            </Button>
          ) : (
            <form action={handleMagicLink} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                Send Magic Link
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setShowMagicLink(false)}
                className="w-full"
                disabled={isLoading}
              >
                Back to options
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
