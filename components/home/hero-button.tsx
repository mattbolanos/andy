"use client";

import { Button } from "@/components/ui/button";

export function HeroButton() {
  const handleScrollDown = () => {
    const section = document.getElementById("work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Button
      size="lg"
      className="mt-4 text-base font-medium"
      onMouseDown={handleScrollDown}
    >
      View Work
    </Button>
  );
}
