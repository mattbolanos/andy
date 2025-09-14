import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Contact } from "@/components/contact";
import { HeroButton } from "@/components/home/hero-button";
import { QuickLinks } from "@/components/home/quick-links";
import {
  RecentTracks,
  RecentTracksSkeleton,
} from "@/components/home/recent-tracks";
import { RecentWork } from "@/components/home/recent-work";
import { Button } from "@/components/ui/button";
import { RecentTracksSchema } from "@/lib/schemas";
import Andy from "@/public/andy.jpeg";
import { socialLinks } from "./constants";

async function RecentTracksWrapper() {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?` +
      new URLSearchParams({
        method: "user.getrecenttracks",
        user: "nofinersteiner",
        api_key: process.env.LASTFM_API_KEY ?? "",
        format: "json",
        limit: "3",
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
    <div className="space-y-10 md:space-y-16">
      {/* hero */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          NO FINER STEINER
        </h1>
        <div className="space-y-4 leading-relaxed md:text-lg">
          <p>
            <strong>Andy Steiner</strong> is a writer, music critic, and
            producer from Deerfield, IL. He is currently based in Brooklyn, NY.
          </p>
          <p>
            You can find his work in <em>The Ringer</em>,{" "}
            <em>Paste Magazine</em>, <em>Variety</em>, <em>Amazon Prime</em>,{" "}
            <em>Artists Den Entertainment</em>, his <em>Substack</em>,
            <em> Under the Radar</em>, among other places.
          </p>
          <p>He loves his morning bagel.</p>
          <HeroButton />
        </div>
        {/* recent tracks + image */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch md:gap-4">
          <Image
            src={Andy}
            priority
            quality={100}
            alt="Andy Steiner"
            className="rounded-base border-border shadow-shadow aspect-video h-full w-full border-2 object-cover object-[75%_center]"
          />
          <Suspense fallback={<RecentTracksSkeleton />}>
            <div className="h-full">
              <RecentTracksWrapper />
            </div>
          </Suspense>
        </div>
      </div>
      {/* recent work */}
      <div className="space-y-4" id="work">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Recent Work</h2>
          <QuickLinks />
        </div>
        <RecentWork />
      </div>
    </div>
  );
}
