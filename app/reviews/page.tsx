import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Andy Steiner",
  description: "Andy Steiner's reviews",
};

export default function Reviews() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
      </div>
    </div>
  );
}
