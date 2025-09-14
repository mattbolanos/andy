import type { Metadata } from "next";
import { AlbumReviews } from "@/components/album-reviews";

export const metadata: Metadata = {
  title: "Reviews | Andy Steiner",
  description: "Andy Steiner's reviews",
};

export default function Reviews() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        Album Reviews
      </h2>
      <AlbumReviews />
    </div>
  );
}
