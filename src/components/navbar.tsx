"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2Icon, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <Link
        href="/"
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
      >
        About
      </Link>
    </>
  );

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Code2Icon className="h-6 w-6" />
            <span className="font-bold inline-block">NextApp</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <NavItems />
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:block">
            <ThemeToggle />
            <SignedOut>
              <SignInButton mode="modal">
                <Button>Sign in</Button>
              </SignInButton>
            </SignedOut>
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Link
                      href="/"
                      className="flex items-center space-x-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <Code2Icon className="h-6 w-6" />
                      <span className="font-bold">NextApp</span>
                    </Link>
                    <ThemeToggle />
                  </div>
                  {/* <SheetClose asChild>
                  <Button
                    variant="outline"
                    size="icon"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                  </SheetClose> */}
                </div>
                <nav className="flex flex-col gap-4">
                  <NavItems />
                </nav>
                <div className="mt-auto">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign in
                      </Button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <Button className="w-full" onClick={() => setIsOpen(false)}>
                      Dashboard
                    </Button>
                  </SignedIn>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
