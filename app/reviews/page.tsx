import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { getWixReviews } from "@/lib/scrape";

export const metadata: Metadata = {
  title: "Reviews | Andy Steiner",
  description: "Andy Steiner's reviews",
};

export default async function Reviews() {
  const items = await getWixReviews();

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
        <p className="text-muted-foreground">A selection of album reviews from around the web.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch md:gap-4">
        {items.map((item) => (
          <Link href={item.href} key={item.href} target="_blank" prefetch>
            <Card className="hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all hover:shadow-none">
              <CardContent>
                <div className="flex min-w-0 items-center gap-2">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={52}
                    height={52}
                    className="rounded-base aspect-square object-cover"
                  />
                  <div className="min-w-0 space-y-0.5">
                    <h3 className="truncate">{item.title}</h3>
                    {item.publication ? (
                      <p className="text-muted-foreground truncate text-sm italic">
                        {item.publication}
                      </p>
                    ) : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
        {items.length === 0 && (
          <Card>
            <CardContent>
              <p className="text-muted-foreground py-8 text-center">No reviews found.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
