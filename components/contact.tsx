import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/app/constants";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <div className="space-y-4 pb-6">
      <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
      <div className="grid grid-cols-3 gap-6 md:gap-4">
        {socialLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            target="_blank"
            prefetch
            rel="noopener noreferrer"
          >
            <Button
              variant="neutral"
              className="w-full gap-2 transition-transform"
            >
              <Image
                src={`/${link.label.toLowerCase()}.svg`}
                alt={link.label}
                width={24}
                height={24}
                className="size-4 md:size-6"
              />
              {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
