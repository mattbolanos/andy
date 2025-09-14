import type { Route } from "next";

type SocialLink = {
  label: string;
  href: Route;
};

type NavigationLink = {
  label: string;
  href: Route;
  blank?: boolean;
};

export const navigationLinks: NavigationLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Interviews",
    href: "/interviews",
  },
  {
    label: "Production",
    href: "/production",
  },
  {
    label: "Substack",
    href: "https://andysteiner.substack.com/",
    blank: true,
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/no_finer_steiner/",
  },
  {
    label: "Twitter",
    href: "https://x.com/nofinersteiner",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andy-steiner-08a49b179/",
  },
  {
    label: "Mail",
    href: "mailto:andysteiner2@gmail.com",
  },
];
