import Link from "next/link";
import { type Features, interviewFeatures } from "@/app/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function InterviewGrid() {
  const publicationOrder = [
    { name: "The Ringer" },
    { name: "Paste Magazine", gridClass: "row-span-2" },
    { name: "Northern Transmissions", gridClass: "row-span-2" },
    { name: "The Daily Beast" },
    { name: "Under The Radar" },
    { name: "The Needle Drop" },
    { name: "Chartmetric" },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
      {publicationOrder.map(({ name, gridClass }) => {
        const publicationFeature = interviewFeatures.find(
          (f) => f.publication === name,
        );
        if (!publicationFeature) return null;
        return (
          <PublicationCard
            key={publicationFeature.publication}
            publicationFeature={publicationFeature}
            gridClass={gridClass}
          />
        );
      })}
    </div>
  );
}

function PublicationCard({
  publicationFeature,
  gridClass = "row-span-1",
}: {
  publicationFeature: Features;
  gridClass?: string;
}) {
  return (
    <Card className={cn("gap-4 py-4", gridClass)}>
      <CardHeader className="px-4">
        <CardTitle className="font-semibold">
          {publicationFeature.publication}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex flex-col gap-4">
          {publicationFeature.features.map((feature) => (
            <Link
              href={feature.url}
              key={feature.url}
              prefetch
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-main underline underline-offset-4"
            >
              <h4 className="text-sm font-medium">{feature.title}</h4>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
