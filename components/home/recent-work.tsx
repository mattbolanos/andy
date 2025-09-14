import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

type RecentWork = {
  publication: string;
  title: string;
  url: Route;
  image: string;
};

const recentWork: RecentWork[] = [
  {
    publication: "The Ringer",
    title: "The Gamification of Pop Music",
    image: "ringer_pop-gamification.jpeg",
    url: "https://www.theringer.com/2025/01/03/music/gamification-of-pop-music-billboard-hot-100-challenge-justin-bieber-bts-chart-data-streaming",
  },
  {
    publication: "The Daily Beast",
    title: "This Was the End of Coachella - As We Knew It",
    image: "daily-beast_end-coachella.jpg",
    url: "https://www.thedailybeast.com/this-was-the-end-of-coachellaas-we-knew-it/?ref=author",
  },
  {
    publication: "The Daily Beast",
    title: "Is This the End of Coachella?",
    image: "daily-beast_is_end_of_coachella.jpg",
    url: "https://www.thedailybeast.com/is-this-the-end-of-coachella/?ref=author",
  },
  {
    publication: "Paste Magazine",
    title: "Shame Are All Gas, No Brakes",
    image: "paste_shame-gas-brakes.jpeg",
    url: "https://www.pastemagazine.com/music/shame/shame-are-all-gas-no-brakes",
  },
];

export function RecentWork() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch md:gap-4">
      {recentWork.map((work) => (
        <Link href={work.url} key={work.url} target="_blank" prefetch>
          <Card className="hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all hover:shadow-none">
            <CardContent>
              <div className="flex min-w-0 items-center gap-2">
                <Image
                  src={`/articles/${work.image}`}
                  alt={work.title}
                  width={52}
                  height={52}
                  className="rounded-base aspect-square object-cover"
                />
                <div className="min-w-0 space-y-0.5">
                  <h3 className="truncate">{work.title}</h3>
                  <p className="text-muted-foreground truncate text-sm italic">
                    {work.publication}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
