import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { albumReviews } from "@/app/constants";

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
      <div className="space-y-10 md:space-y-16">
        {albumReviews.map((publication) => (
          <div key={publication.publication}>
            <h3 className="mb-4 text-2xl font-normal italic">
              {publication.publication}
            </h3>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:items-stretch md:gap-4 lg:grid-cols-6">
              {publication.reviews.map((review) => (
                <Link
                  href={review.href}
                  key={review.href}
                  target="_blank"
                  prefetch
                  rel="noopener noreferrer"
                  aria-label={review.title ?? review.imageUrl}
                  className="group hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY col-span-1 transition-transform duration-250"
                >
                  {review.imageUrl ? (
                    <Image
                      alt={review.title ?? review.imageUrl}
                      src={`/albums/${review.imageUrl}`}
                      width={140}
                      height={140}
                      className="border-border rounded-base group-hover:shadow-shadow aspect-square border-2 object-cover"
                    />
                  ) : (
                    <div className="border-border bg-secondary-background rounded-base group-hover:shadow-shadow flex aspect-square min-h-0 flex-col items-center justify-center overflow-hidden border-2 p-2 text-center sm:p-3">
                      <span className="text-muted-foreground text-[8px] tracking-[0.12em] uppercase sm:text-[10px]">
                        Cover image coming soon
                      </span>
                      <span className="mt-2 line-clamp-3 max-w-full break-all text-[10px] leading-tight font-semibold sm:text-xs">
                        {review.title}
                      </span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
