import { formatDistanceToNow } from "date-fns";
import { HeadphonesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { RecentTracksSchema } from "@/lib/schemas";
import { Button } from "../ui/button";

type RecentTracks = z.infer<
  typeof RecentTracksSchema
>["recenttracks"]["track"][number];

export function RecentTracks({ tracks }: { tracks: RecentTracks[] }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HeadphonesIcon />
          What&apos;s Andy listening to?
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1">
        {tracks.length === 0 ? (
          <p className="text-muted-foreground flex h-full w-full items-center justify-center text-center text-lg">
            No tracks found
          </p>
        ) : (
          <div className="flex w-full flex-col gap-5">
            <div className="flex flex-col gap-3">
              {tracks.map((track) => {
                const bestImage =
                  track.image.find((image) => image.size === "large")?.[
                    "#text"
                  ] ??
                  track.image.find((image) => image.size === "extralarge")?.[
                    "#text"
                  ] ??
                  track.image[0]["#text"] ??
                  "";

                const timestamp = track.date?.uts
                  ? new Date(Number(track.date.uts) * 1000)
                  : null;

                return (
                  <div
                    key={track.mbid + track.date?.uts}
                    className="flex min-w-0 items-center gap-2"
                  >
                    <Image
                      src={bestImage}
                      alt={track.name}
                      width={40}
                      height={40}
                      className="rounded-base aspect-square object-cover"
                    />
                    <div className="min-w-0">
                      <h3 className="truncate">{track.name}</h3>
                      <p className="text-muted-foreground truncate text-xs">
                        {track.artist["#text"]}
                      </p>
                    </div>
                    {timestamp && (
                      <span className="text-muted-foreground ml-auto text-xs">
                        {formatDistanceToNow(timestamp)} ago
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <Link
              href="https://www.last.fm/user/nofinersteiner"
              prefetch
              target="_blank"
              className="flex w-full cursor-pointer items-center gap-2 font-medium underline-offset-4 hover:underline"
            >
              <Button variant="neutral" className="w-full">
                View full Last.fm profile
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function RecentTracksSkeleton() {
  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HeadphonesIcon />
            What&apos;s Andy listening to?
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1">
          <div className="flex w-full flex-col gap-5">
            <div className="flex flex-col gap-3">
              {["skeleton-1", "skeleton-2", "skeleton-3"].map((key) => (
                <div key={key} className="flex min-w-0 items-center gap-2">
                  <Skeleton className="rounded-base size-10 object-cover" />
                  <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="truncate">
                      <Skeleton className="h-5 w-40" />
                    </h3>
                    <span className="text-muted-foreground truncate text-xs">
                      <Skeleton className="h-3 w-20" />
                    </span>
                  </div>
                  <span className="text-muted-foreground ml-auto text-xs">
                    <Skeleton className="h-4 w-10" />
                  </span>
                </div>
              ))}
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
