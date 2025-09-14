import Image from "next/image";
import { Suspense } from "react";
import { HeroButton } from "@/components/home/hero-button";
import { RecentTracks } from "@/components/home/recent-tracks";
import { RecentTracksSchema } from "@/lib/schemas";

async function RecentTracksWrapper() {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?` +
      new URLSearchParams({
        method: "user.getrecenttracks",
        user: "nofinersteiner",
        api_key: process.env.LASTFM_API_KEY ?? "",
        format: "json",
        limit: "4",
      }),
  ).then((res) => res.json());
  const tracks = RecentTracksSchema.safeParse(res);

  if (!tracks.success) {
    return <RecentTracks tracks={[]} />;
  }

  return <RecentTracks tracks={tracks.data?.recenttracks.track ?? []} />;
}

export default function Home() {
  return (
    <div className="space-y-8">
      {/* hero */}
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        NO FINER STEINER
      </h1>
      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          <strong>Andy Steiner</strong> is a writer, music critic, and producer
          from Deerfield, IL. He is currently based in Brooklyn, NY.
        </p>
        <p>
          You can find his work in <em>The Ringer</em>, <em>Paste Magazine</em>,{" "}
          <em>Variety</em>, <em>Amazon Prime</em>,{" "}
          <em>Artists Den Entertainment</em>, his <em>Substack</em>,
          <em> Under the Radar</em>, among other places.
        </p>
        <p>He loves his morning bagel.</p>
        <HeroButton />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Image
          src="/andy.jpeg"
          alt="Andy Steiner"
          width={550}
          height={550}
          quality={100}
          className="rounded-base border-border shadow-shadow border-2 object-cover"
        />
        <Suspense>
          <RecentTracksWrapper />
        </Suspense>
      </div>
    </div>
  );
}
