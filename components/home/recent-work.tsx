import Image from "next/image";
import Link from "next/link";
import { recentArticles } from "@/app/constants";
import { Card, CardContent } from "@/components/ui/card";

export function RecentWork() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch md:gap-4">
      {recentArticles.map((work) => (
        <Link
          href={work.url}
          key={work.url}
          target="_blank"
          prefetch
          rel="noopener noreferrer"
        >
          <Card className="hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-transform hover:shadow-none">
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
