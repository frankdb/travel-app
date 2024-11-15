/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import Link from "next/link";
import { Globe2, Menu, User } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [user, setUser] = React.useState<any>(true);
  const router = useRouter();

  // React.useEffect(() => {
  //   const getUser = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     setUser(user);
  //     console.log("USER===", user);
  //   };

  //   getUser();

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setUser(session?.user ?? null);
  //   });

  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [supabase]);

  const publicLinks = (
    <>
      <Link
        href="/contact"
        className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
      >
        Contact
      </Link>
    </>
  );

  const privateLinks = (
    <>
      <Link
        href="/dashboard"
        className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
      >
        Dashboard
      </Link>
      <Link
        href="/account"
        className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
      >
        Account
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-border/40 bg-gradient-to-r from-background from-50% via-accent/5 to-primary/5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <div className="flex flex-row items-center">
                <Globe2 className="w-6 h-6 mr-2 text-primary" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  NomadPortal
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            {user ? privateLinks : publicLinks}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative">
                    <span className="sr-only">Open user menu</span>
                    <User className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/account">Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    {/* <form action={signOut}> */}
                    <button className="w-full text-left">Sign out</button>
                    {/* </form> */}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => router.push("/login")}>Sign In</Button>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-accent focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href="/account"
                  className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  Account
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </>
            )}
          </div>
          {user ? (
            <div className="pt-4 pb-3 border-t border-accent">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <User className="h-10 w-10 rounded-full" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-foreground">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {/* <form action={signOut}> */}
                <Button
                  variant="ghost"
                  type="submit"
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
                >
                  Sign out
                </Button>
                {/* </form> */}
              </div>
            </div>
          ) : (
            <div className="px-2 pt-2 pb-3 border-t border-accent">
              <Button onClick={() => router.push("/login")} className="w-full">
                Sign In
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
