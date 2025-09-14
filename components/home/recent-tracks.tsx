import type z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RecentTracksSchema } from "@/lib/schemas";

type RecentTracks = z.infer<
  typeof RecentTracksSchema
>["recenttracks"]["track"][number];

export function RecentTracks({ tracks }: { tracks: RecentTracks[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What is Andy listening to?</CardTitle>
      </CardHeader>
      <CardContent>
        {tracks.length === 0 ? (
          <p className="text-muted-foreground text-center text-lg">
            No tracks found
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {tracks.map((track) => (
              <div key={track.mbid + track.date?.uts}>
                <h3>{track.name}</h3>
                <p>{track.artist["#text"]}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
