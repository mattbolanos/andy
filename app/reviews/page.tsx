import type { Metadata } from "next";
import { AlbumReviews } from "@/components/album-reviews";

export const metadata: Metadata = {
  title: "Reviews | Andy Steiner",
  description: "Andy Steiner's reviews",
};

export default function Reviews() {
  return <AlbumReviews />;
}
