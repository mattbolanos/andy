"use client";

import { ExternalLinkIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { navigationLinks, socialLinks } from "@/app/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          size="sm"
          className="md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="relative flex size-6 items-center justify-center">
            {isOpen ? <XIcon className="size-6" /> : <span>Menu</span>}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="p-6 pt-0 md:hidden">
        <SheetHeader className="p-0">
          <SheetTitle className="sr-only">Andy Steiner</SheetTitle>
        </SheetHeader>
        <div className="-mx-3 flex flex-col space-y-6">
          {navigationLinks.map((link) => (
            <SheetClose
              key={link.href}
              className="hover:bg-main/60 rounded-base px-2 py-1 text-left"
              onClick={handleClose}
            >
              <Link
                prefetch
                href={link.href}
                target={link.blank ? "_blank" : undefined}
                className="flex items-center gap-1"
              >
                {link.label}
                {link.blank && (
                  <ExternalLinkIcon className="text-muted-foreground size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </Link>
            </SheetClose>
          ))}
        </div>

        <SheetFooter>
          <div className="mb-4 grid grid-cols-4 items-center gap-8">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                prefetch
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src={`/${link.label.toLowerCase()}.svg`}
                  alt={link.label}
                  width={28}
                  height={28}
                />
              </Link>
            ))}
          </div>
          <SheetClose asChild>
            <Button size="sm" variant="neutral">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
