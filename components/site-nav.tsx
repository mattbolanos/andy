import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { navigationLinks } from "@/app/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

export default function SiteNav() {
  return (
    <header className="bg-background fixed top-0 z-50 w-full border-b px-4 md:px-6">
      <div className="mx-auto flex h-[var(--nav)] w-full max-w-[1400px] items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* Main nav */}
          <div className="flex items-center gap-12">
            <Link href="/" className="hover:text-main text-lg font-semibold">
              Andy Steiner
            </Link>
          </div>
        </div>
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="gap-2">
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    "hover:text-main flex items-center gap-1 py-1.5 font-medium",
                    link.blank && "group",
                  )}
                  blank={link.blank}
                >
                  {link.label}
                  {link.blank && (
                    <ExternalLinkIcon className="group-hover:text-main size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <MobileMenu />
      </div>
    </header>
  );
}
