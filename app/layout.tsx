import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Contact } from "@/components/contact";
import SiteNav from "@/components/site-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andy Steiner",
  description: "No Finer Steiner | Andy Steiner's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overscroll-none antialiased`}
      >
        <SiteNav />
        <div className="mx-auto mt-[var(--nav)] w-full max-w-screen-lg space-y-10 px-4 py-12 md:space-y-16 md:px-6 lg:px-8">
          <main>{children}</main>
          <Contact />
        </div>
      </body>
    </html>
  );
}
