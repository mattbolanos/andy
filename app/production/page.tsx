import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { publicationProductions } from "../constants";

export const metadata: Metadata = {
  title: "Production | Andy Steiner",
  description: "Andy Steiner's production",
};

export default function Production() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        Production
      </h2>
      <div className="space-y-10 md:space-y-16">
        {publicationProductions
          .filter((publication) => publication.linkType === "youtube")
          .map((publication) => (
            <div key={publication.publication + publication.description}>
              <div className="mb-4 flex flex-col">
                {publication.href ? (
                  <Link
                    href={publication.href}
                    target="_blank"
                    prefetch
                    rel="noopener noreferrer"
                    className="hover:text-main text-2xl font-normal italic underline hover:underline-offset-4"
                  >
                    {publication.publication}
                  </Link>
                ) : (
                  <h3 className="text-2xl font-normal italic">
                    {publication.publication}
                  </h3>
                )}
                <p className="text-muted-foreground">
                  {publication.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
                {publication.productions?.map((production) => (
                  <div key={production} className="col-span-1 aspect-video">
                    <iframe
                      src={production}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-base border-border h-full w-full border-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        {publicationProductions
          .filter((publication) => publication.linkType === "link")
          .map((publication) => (
            <div key={publication.publication + publication.description}>
              <div className="mb-4 flex flex-col">
                <h3 className="text-2xl font-normal italic">
                  {publication.publication}
                </h3>
                <p className="text-muted-foreground">
                  {publication.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-4">
                {publication.links?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    prefetch
                    rel="noopener noreferrer"
                    className="group hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY col-span-1 cursor-pointer transition-all duration-250"
                  >
                    <Image
                      src={`/productions/${link.image}`}
                      alt={link.href}
                      width={306}
                      height={170}
                      className="border-border rounded-base group-hover:shadow-shadow aspect-video h-full w-full border-2 object-cover"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
