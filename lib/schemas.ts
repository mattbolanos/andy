import { z } from "zod";

const ImageSchema = z.object({
  size: z.string(),
  "#text": z.string().url().optional(),
});

const ArtistSchema = z.object({
  mbid: z.string(),
  "#text": z.string(),
});

const AlbumSchema = z.object({
  mbid: z.string(),
  "#text": z.string(),
});

const DateSchema = z.object({
  uts: z.string(),
  "#text": z.string(),
});

const TrackSchema = z.object({
  artist: ArtistSchema,
  streamable: z.string(),
  image: z.array(ImageSchema),
  mbid: z.string(),
  album: AlbumSchema,
  name: z.string(),
  url: z.string().url(),
  date: DateSchema.optional(),
});

export const RecentTracksSchema = z.object({
  recenttracks: z.object({
    track: z.array(TrackSchema),
    "@attr": z.object({
      user: z.string(),
      totalPages: z.string(),
      page: z.string(),
      total: z.string(),
      perPage: z.string(),
    }),
  }),
});
