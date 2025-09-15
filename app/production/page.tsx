import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production | Andy Steiner",
  description: "Andy Steiner's production",
};

export default function Production() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        Production
      </h2>
    </div>
  );
}
