import Link from "next/link";
import { interviewFeatures, type PublicationFeature } from "@/app/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function InterviewGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 md:gap-4">
      {/* ringer */}
      {interviewFeatures
        .filter((feature) => feature.publication === "The Ringer")
        .map((publicationFeature) => (
          <PublicationCard
            key={publicationFeature.publication}
            publicationFeature={publicationFeature}
          />
        ))}
      {/* paste magazine */}
      {interviewFeatures
        .filter((feature) => feature.publication === "Paste Magazine")
        .map((publicationFeature) => (
          <PublicationCard
            key={publicationFeature.publication}
            publicationFeature={publicationFeature}
            gridClass="row-span-2"
          />
        ))}
      {/* northern transmissions */}
      {interviewFeatures
        .filter((feature) => feature.publication === "Northern Transmissions")
        .map((publicationFeature) => (
          <PublicationCard
            key={publicationFeature.publication}
            publicationFeature={publicationFeature}
            gridClass="row-span-2"
          />
        ))}
      {/* the daily beast */}
      {interviewFeatures
        .filter((feature) => feature.publication === "The Daily Beast")
        .map((publicationFeature) => (
          <PublicationCard
            key={publicationFeature.publication}
            publicationFeature={publicationFeature}
          />
        ))}
    </div>
  );
}

function PublicationCard({
  publicationFeature,
  gridClass = "row-span-1",
}: {
  publicationFeature: PublicationFeature;
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
