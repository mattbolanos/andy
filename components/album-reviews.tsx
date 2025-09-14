import Image from "next/image";
import Link from "next/link";
import { albumReviews } from "@/app/constants";

export function AlbumReviews() {
  return (
    <div className="space-y-4">
      {["Paste Magazine"].map((publication) => (
        <div key={publication}>
          <h3 className="mb-4 text-2xl font-normal italic">{publication}</h3>
          <div className="grid grid-cols-2 gap-6 md:items-stretch md:gap-4 lg:grid-cols-6">
            {albumReviews
              .filter((review) => review.publication === publication)
              .map((review) => (
                <Link
                  href={review.href}
                  key={review.href}
                  target="_blank"
                  prefetch
                  className="group hover:translate-x-boxShadowX hover:translate-y-boxShadowY col-span-1 transition-all hover:shadow-none"
                >
                  <Image
                    src={`/albums/${review.imageUrl}`}
                    width={140}
                    height={140}
                    className="border-border rounded-base shadow-shadow aspect-square border-2 object-cover group-hover:shadow-none"
                    alt={review.publication}
                  />
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
