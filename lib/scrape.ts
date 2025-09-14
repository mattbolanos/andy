import * as cheerio from "cheerio";

export type ReviewItem = {
  title: string;
  imageUrl: string;
  href: string;
  publication?: string;
};

const BASE_URL = "https://andysteiner2.wixsite.com" as const;
const REVIEWS_URL = `${BASE_URL}/nofinersteiner/music-reviews` as const;

function toAbsoluteUrl(url: string | undefined): string | "" {
  if (!url) return "";
  try {
    const absolute = new URL(url, REVIEWS_URL);
    return absolute.toString();
  } catch {
    return "";
  }
}

function extractSrc($img: cheerio.Cheerio<cheerio.Element>): string {
  const src = $img.attr("src")?.trim();
  const dataSrc = $img.attr("data-src")?.trim();
  const srcset = $img.attr("srcset")?.trim();
  const bestFromSrcset = srcset ? srcset.split(",")[0]?.trim().split(" ")[0] : "";
  return toAbsoluteUrl(src || dataSrc || bestFromSrcset || "");
}

export async function getWixReviews(): Promise<ReviewItem[]> {
  const res = await fetch(REVIEWS_URL, {
    // Cache on the server to avoid hammering Wix; revalidate hourly
    next: { revalidate: 60 * 60 },
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127 Safari/537.36",
    },
  });

  if (!res.ok) return [];

  const html = await res.text();
  const $ = cheerio.load(html);

  const items: ReviewItem[] = [];

  // Strategy: Each section is headed by an h2 (e.g., "Paste Magazine").
  // Collect all anchors with images until the next h2, and tag them with the section title.
  $("h2").each((_, h2) => {
    const publication = $(h2).text().trim();
    if (!publication) return;
    const $section = $(h2).nextUntil("h2");
    const $anchors = $section.find("a:has(img)");

    $anchors.each((__, a) => {
      const href = toAbsoluteUrl($(a).attr("href"));
      const $img = $(a).find("img").first();
      const imageUrl = extractSrc($img);
      const title = $img.attr("alt")?.trim() || publication;
      if (!href || !imageUrl) return;
      items.push({ title, imageUrl, href, publication });
    });
  });

  // Fallback: In case anchors are outside the h2 delimited sections, grab any remaining image links
  if (items.length === 0) {
    $("a:has(img)").each((_, a) => {
      const href = toAbsoluteUrl($(a).attr("href"));
      const $img = $(a).find("img").first();
      const imageUrl = extractSrc($img);
      const title = $img.attr("alt")?.trim() || "Review";
      if (href && imageUrl) items.push({ title, imageUrl, href });
    });
  }

  // Deduplicate by href
  const uniqueByHref = new Map<string, ReviewItem>();
  for (const item of items) {
    if (!uniqueByHref.has(item.href)) {
      uniqueByHref.set(item.href, item);
    }
  }

  return Array.from(uniqueByHref.values());
}

