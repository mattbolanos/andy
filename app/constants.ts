import type { Route } from "next";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type SocialLink = {
  label: string;
  href: Route;
};

type NavigationLink = {
  label: string;
  href: Route;
  blank?: boolean;
};

type AlbumReview = {
  imageUrl: string;
  href: Route;
};

type AlbumPublication = {
  publication: string;
  reviews: AlbumReview[];
};

type Article = {
  publication: string;
  title: string;
  url: Route;
  image: string;
};

export type Features = {
  publication: string;
  features: Omit<Article, "image" | "publication">[];
};

type YouTubeProduction = {
  publication: string;
  description: string;
  href?: Route;
  productions: string[];
};

type LinkProduction = {
  publication: string;
  description: string;
  links: Array<{
    image: string;
    href: Route;
  }>;
};

// ============================================================================
// NAVIGATION & SOCIAL LINKS
// ============================================================================

export const navigationLinks: NavigationLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Production",
    href: "/production",
  },
  {
    label: "Substack",
    href: "https://andysteiner.substack.com/",
    blank: true,
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/no_finer_steiner/",
  },
  {
    label: "Twitter",
    href: "https://x.com/nofinersteiner",
  },
  {
    label: "Mail",
    href: "mailto:andysteiner2@gmail.com",
  },
];

// ============================================================================
// HOMEPAGE CONTENT
// ============================================================================

/**
 * Recent articles that appear on the homepage
 * To add a new article:
 * 1. Add the image to public/articles/
 * 2. Add the article here
 * 3. Also add it to the interviews section below
 */
export const recentArticles: Article[] = [
  {
    publication: "The Ringer",
    image: "ringer_pop-gamification.jpeg",
    title: "The Gamification of Pop Music",
    url: "https://www.theringer.com/2025/01/03/music/gamification-of-pop-music-billboard-hot-100-challenge-justin-bieber-bts-chart-data-streaming",
  },
  {
    publication: "The Daily Beast",
    image: "daily-beast_end-coachella.jpg",
    title: "This Was the End of Coachella - As We Knew It",
    url: "https://www.thedailybeast.com/this-was-the-end-of-coachellaas-we-knew-it/?ref=author",
  },
  {
    publication: "The Daily Beast",
    image: "daily-beast_is_end_of_coachella.jpg",
    title: "Is This the End of Coachella?",
    url: "https://www.thedailybeast.com/is-this-the-end-of-coachella/?ref=author",
  },
  {
    publication: "Paste Magazine",
    image: "paste_shame-gas-brakes.jpeg",
    title: "Shame Are All Gas, No Brakes",
    url: "https://www.pastemagazine.com/music/shame/shame-are-all-gas-no-brakes",
  },
];

// ============================================================================
// ALBUM REVIEWS
// ============================================================================

/**
 * Album reviews organized by publication
 * To add a new review:
 * 1. Add the album cover image to public/albums/
 * 2. Add the review to the appropriate publication below
 * 3. To add a new publication, create a new object with publication name and reviews array
 */
export const albumReviews: AlbumPublication[] = [
  {
    publication: "Paste Magazine",
    reviews: [
      {
        imageUrl: "brat-but-different.jpeg",
        href: "https://www.pastemagazine.com/music/charli-xcx/brat-and-its-completely-different-but-also-still-brat-charli-xcx-review",
      },
      {
        imageUrl: "manning-fireworks.jpeg",
        href: "https://www.pastemagazine.com/music/mj-lenderman/mj-lenderman-croons-through-faults-and-grace-on-manning-fireworks",
      },
      {
        imageUrl: "spelling-portrait-heart.jpeg",
        href: "https://www.pastemagazine.com/music/spellling/spelllings-portrait-of-my-heart-cooks-with-gas-until-it-burns-out",
      },
      {
        imageUrl: "samia-bloodless.jpeg",
        href: "https://www.pastemagazine.com/music/samia/samia-gets-existential-on-bloodless",
      },
      {
        imageUrl: "diiv-frog.jpeg",
        href: "https://www.pastemagazine.com/music/diiv/diiv-provide-a-soundtrack-for-when-the-heat-starts-to-rise-on-frog-in-boiling-water",
      },
      {
        imageUrl: "been-stellear-scream-ny.jpeg",
        href: "https://www.pastemagazine.com/music/been-stellar/been-stellar-examine-frustration-and-nostalgia-on-scream-from-new-york-ny",
      },
      {
        imageUrl: "fat-dog-woof.jpeg",
        href: "https://www.pastemagazine.com/music/fat-dog/fat-dog-bark-their-debut-album-into-a-circus",
      },
      {
        imageUrl: "dutch-interior-moneyball.jpg",
        href: "https://www.pastemagazine.com/music/dutch-interior/dutch-interior-give-old-tricks-new-life-on-moneyball",
      },
      {
        imageUrl: "pinkpantheress-heaven-knows.jpeg",
        href: "https://www.pastemagazine.com/music/pinkpantheress/pinkpantheress-heaven-knows-review",
      },
      {
        imageUrl: "sports-team-boys-these-days.jpeg",
        href: "https://www.pastemagazine.com/music/sports-team/sports-team-turn-away-from-their-strengths-on-boys-these-days",
      },
      {
        imageUrl: "mamalarky-hex-key.jpeg",
        href: "https://www.pastemagazine.com/music/mamalarky/mamalarky-hex-key-album-review",
      },
      {
        imageUrl: "kacy-hill-bug.jpeg",
        href: "https://www.pastemagazine.com/music/kacy-hill/kacy-hills-bug-is-garden-grown-indie-pop",
      },
      {
        imageUrl: "a-place-to-bury-strangers-synthesizer.jpeg",
        href: "https://www.pastemagazine.com/music/a-place-to-bury-strangers/a-place-to-bury-strangers-synthesizer-review",
      },
      {
        imageUrl: "courting-new-last-name.jpeg",
        href: "https://www.pastemagazine.com/music/courting/courting-new-last-name-review",
      },
      {
        imageUrl: "wishy-paradise.jpeg",
        href: "https://www.pastemagazine.com/music/wishy/wishy-paradise-ep-review",
      },
      {
        imageUrl: "mgmt-loss-of-life.jpeg",
        href: "https://www.pastemagazine.com/music/mgmt/mgmt-revel-in-the-vibrancy-of-their-influences-on-loss-of-life",
      },
      {
        imageUrl: "idles-tangk.jpeg",
        href: "https://www.pastemagazine.com/music/idles/idles-search-for-love-on-tangk-but-lose-their-footing",
      },
      {
        imageUrl: "hotline-tnt-cartwheel.jpeg",
        href: "https://www.pastemagazine.com/music/hotline-tnt/album-of-the-week-hotline-tnt-cartwheel-review",
      },
      {
        imageUrl: "deeper-careful.jpeg",
        href: "https://www.pastemagazine.com/music/deeper/deeper-careful-review",
      },
      {
        imageUrl: "wild-nothing-hold.jpeg",
        href: "https://www.pastemagazine.com/music/wild-nothing/wild-nothing-hold-review",
      },
      {
        imageUrl: "omni-souvenir.jpeg",
        href: "https://www.pastemagazine.com/music/omni/on-souvenir-onmi-fine-tune-their-formula",
      },
    ],
  },
  {
    publication: "Under The Radar",
    reviews: [
      {
        imageUrl: "nation-of-language-strange-disciple.jpeg",
        href: "https://www.undertheradarmag.com/reviews/strange_disciple_nation_of_language",
      },
      {
        imageUrl: "feeble-little-horse-girl-with-fish.jpeg",
        href: "https://www.undertheradarmag.com/reviews/girl_with_fish_feeble_little_horse",
      },
      {
        imageUrl: "kevin-morby-more-photographs-a-continuum.jpeg",
        href: "https://www.undertheradarmag.com/reviews/more_photographs_a_continuum_kevin_morby",
      },
      {
        imageUrl: "westerman-an-inbuilt-fault.jpeg",
        href: "https://www.undertheradarmag.com/reviews/an_inbuilt_fault_westerman",
      },
      {
        imageUrl: "jessie-ware-that-feels-good.jpeg",
        href: "https://www.undertheradarmag.com/reviews/that_feels_good_jessie_ware",
      },
      {
        imageUrl: "unknown-mortal-orchestra-v.jpeg",
        href: "https://www.undertheradarmag.com/reviews/v_unknown_mortal_orchestra",
      },
      {
        imageUrl: "yves-tumor-praise-a-lord-who-chews.jpeg",
        href: "https://www.undertheradarmag.com/reviews/praise_a_lord_who_chews_but_which_does_not_consume_or_simply_hot_yves_tumor",
      },
      {
        imageUrl: "gorillaz-cracker-island.jpeg",
        href: "https://www.undertheradarmag.com/reviews/cracker_island_gorillaz",
      },
    ],
  },
  {
    publication: "The Line of Best Fit",
    reviews: [
      {
        imageUrl: "andy-shauf-norm.jpeg",
        href: "https://www.thelineofbestfit.com/albums/andy-shauf-norm-playing-god",
      },
      {
        imageUrl: "hudson-mohawke-cry-sugar.jpeg",
        href: "https://www.thelineofbestfit.com/albums/hudson-mohawke-cry-sugar-deliver-ecstasy",
      },
    ],
  },
  {
    publication: "Staged Haze",
    reviews: [
      {
        imageUrl: "wednesday-rat-saw-god.jpeg",
        href: "https://stagedhaze.com/2023/04/07/wednesdays-rat-saw-god-finds-cohesion-in-the-chaos/",
      },
      {
        imageUrl: "samia-honey.jpeg",
        href: "https://stagedhaze.com/2023/01/26/samia-lets-her-emotions-roar-on-tenacious-sophomore-album-honey/",
      },
      {
        imageUrl: "1975-being-funny-in-a-foreign-language.jpeg",
        href: "https://stagedhaze.com/2022/10/19/on-being-funny-in-a-foreign-language-the-1975-are-more-confident-than-ever/",
      },
      {
        imageUrl: "rina-sawayama-hold-the-girl.jpeg",
        href: "https://stagedhaze.com/2022/09/22/rina-sawayamas-sophomore-album-hold-the-girl-pushes-the-limits-of-pop-music-but-still-feels-safe/",
      },
      {
        imageUrl: "marlon-williams-my-boy.jpeg",
        href: "https://stagedhaze.com/2022/09/08/marlon-williams-my-boy-is-a-loose-collection-of-70s-fragments/",
      },
      {
        imageUrl: "perfume-genius-ugly-season.jpeg",
        href: "https://stagedhaze.com/2022/06/17/on-ugly-season-perfume-genius-is-more-abstract-than-ever/",
      },
      {
        imageUrl: "king-gizzard-omnium-gatherum.jpeg",
        href: "https://stagedhaze.com/2022/04/22/king-gizzard-bring-the-best-of-their-mosaic-discography-on-omnium-gatherum/",
      },
      {
        imageUrl: "wet-leg.jpeg",
        href: "https://stagedhaze.com/2022/04/08/wet-legs-highly-anticipated-debut-album-is-absurd-funny-and-disarming/",
      },
      {
        imageUrl: "christian-lee-hutson-quitters.jpeg",
        href: "https://stagedhaze.com/2022/04/06/christian-lee-hutsons-quitters-process-21st-century-overload-in-real-time/",
      },
      {
        imageUrl: "charli-xcx-crash.jpeg",
        href: "https://stagedhaze.com/2022/03/18/on-fifth-studio-album-charli-xcx-stages-the-perfect-crash/",
      },
      {
        imageUrl: "nilufer-yanya-painless.jpeg",
        href: "https://stagedhaze.com/2022/03/14/nilufer-yanya-tackles-feeling-on-sophomore-album-painless/",
      },
      {
        imageUrl: "leon-circles.jpeg",
        href: "https://stagedhaze.com/2022/03/04/leons-third-album-circles-takes-a-different-approach-to-the-pop-music-of-her-peers/",
      },
    ],
  },
];

// ============================================================================
// INTERVIEWS & FEATURES
// ============================================================================

/**
 * Interviews and features organized by publication
 * To add a new feature:
 * 1. Add any images to public/articles/ (if needed)
 * 2. Add the feature to the appropriate publication below
 * 3. If it should appear on homepage, also add it to recentArticles above
 */
export const interviewFeatures: Features[] = [
  {
    publication: "The Ringer",
    features: [
      {
        title: "The Gamification of Pop Music",
        url: "https://www.theringer.com/2025/01/03/music/gamification-of-pop-music-billboard-hot-100-challenge-justin-bieber-bts-chart-data-streaming",
      },
    ],
  },
  {
    publication: "The Daily Beast",
    features: [
      {
        title: "This Was the End of Coachella - As We Knew It",
        url: "https://www.thedailybeast.com/this-was-the-end-of-coachellaas-we-knew-it/?ref=author",
      },
      {
        title: "Is This the End of Coachella?",
        url: "https://www.thedailybeast.com/is-this-the-end-of-coachella/?ref=author",
      },
    ],
  },
  {
    publication: "Paste Magazine",
    features: [
      {
        title: "Shame Are All Gas, No Brakes",
        url: "https://www.pastemagazine.com/music/shame/shame-are-all-gas-no-brakes",
      },
      {
        title: "Geordie Greep Goes Global",
        url: "https://www.pastemagazine.com/music/geordie-greep/geordie-greep-is-ready-to-go-global",
      },
      {
        title: "Magdalena Bay Want To Feel It All",
        url: "https://www.pastemagazine.com/music/magdalena-bay/magdalena-bay-want-to-feel-it-all",
      },
      {
        title: "How 2014 was the Worst Year In Pop Music of the Last Decade",
        url: "https://www.pastemagazine.com/music/scene-report/how-2014-was-the-worst-year-in-pop-music-of-the-last-decade",
      },
      {
        title: "The Uncountable Triumphs of Daneshevskaya",
        url: "https://www.pastemagazine.com/music/daneshevskaya/daneshevskaya-long-is-the-tunnel-interview",
      },
      {
        title: "The 15 Greatest Charli XCX Songs",
        url: "https://www.pastemagazine.com/music/charli-xcx/the-15-greatest-charli-xcx-songs",
      },
      {
        title: "The 20 Greatest Peter Gabriel Songs",
        url: "https://www.pastemagazine.com/music/peter-gabriel/20-greatest-peter-gabriel-songs-of-all-time-2",
      },
    ],
  },
  {
    publication: "Under The Radar",
    features: [
      {
        title: "Review of Governor's Ball 2024",
        url: "https://www.undertheradarmag.com/reviews/governors_ball_day_3_flushing_meadows_corona_park_queens_nyc_june_9_2024",
      },
      {
        title: "Mannequin Pussy @ Brooklyn Steel",
        url: "https://www.undertheradarmag.com/reviews/mannequin_pussy_brooklyn_steel_brooklyn_nyc_may_16_2024",
      },
      {
        title: "Interview with Cameron Winter of Geese",
        url: "https://www.undertheradarmag.com/interviews/geese_on_3d_country",
      },
      {
        title: "Interview with Cory Hanson",
        url: "https://www.undertheradarmag.com/interviews/cory_hanson_on_merging_genres_and_his_new_album_western_cum",
      },
      {
        title: "Profile of Alex Lahey",
        url: "https://www.undertheradarmag.com/interviews/alex_lahey_on_the_answer_is_always_yes",
      },
    ],
  },
  {
    publication: "Northern Transmissions",
    features: [
      {
        title: "Review of Jane Remover @ Music Hall of Williamsburg",
        url: "https://northerntransmissions.com/live-review-jane-remover-at-may-3rd-at-music-hall-of-williamsburg",
      },
      {
        title: "Review of This Is Lorelei @ Knockdown Center",
        url: "https://northerntransmissions.com/live-review-this-is-lorelei-at-knockdown-center",
      },
      {
        title: "Review of Hotline TNT Release Show @ Rough Trade",
        url: "https://northerntransmissions.com/live-review-hotline-tnt-raspberry-moon-release-show-at-rough-trade-nyc",
      },
    ],
  },
  {
    publication: "The Needle Drop",
    features: [
      {
        title: "The Best and Worst of Coachella 2025",
        url: "https://theneedledrop.com/the-best-and-worst-of-coachella-2025",
      },
      {
        title: "Full News Coverage at The Needle Drop",
        url: "https://theneedledrop.com/author/andy-steiner",
      },
    ],
  },
  {
    publication: "Chartmetric",
    features: [
      {
        title: "Does Indie Sleaze Actually Exist?",
        url: "https://hmc.chartmetric.com/indie-sleaze-revival-2024-music-trends",
      },
      {
        title: "Do Non-Televised Grammys Mean Anything Anymore?",
        url: "https://hmc.chartmetric.com/nontelevised-grammys-awards-streaming-impact",
      },
    ],
  },
];

// ============================================================================
// PRODUCTION WORK
// ============================================================================

/**
 * YouTube productions (embedded videos)
 * To add a new YouTube production:
 * 1. Get the YouTube embed URL (format: https://www.youtube.com/embed/VIDEO_ID?si=EMBED_CODE)
 * 2. Add it to the appropriate production series below
 */
export const youtubeProductions: YouTubeProduction[] = [
  {
    publication: "Live from My Den",
    description:
      "A live music and interview series featuring artists from around the world performing in intimate locations.",
    productions: [
      "https://www.youtube.com/embed/DMPdxlWxCeg?si=jwk-e6vz3FEL1nfT",
      "https://www.youtube.com/embed/RP3rxHXpwQs?si=4BNWtBmehmNOTFfq",
      "https://www.youtube.com/embed/-uTsKBoVHro?si=RWZIE5zGJUZTuFzY",
      "https://www.youtube.com/embed/xlaPt6h5Itc?si=EgNZT7Ox2pFAqNz0",
      "https://www.youtube.com/embed/thW2i-X5YT8?si=WPWFsrKivNYx1wwK",
      "https://www.youtube.com/embed/c8lzs9ijRjI?si=yDW0hvjSkHaJN6-k",
      "https://www.youtube.com/embed/mOVHGMhq6lM?si=ihy5XFReMXADuulH",
      "https://www.youtube.com/embed/FBSufpfhNX4?si=22CkzFc48m-5txJn",
      "https://www.youtube.com/embed/qlITWOriA6E?si=1sVcXATVmwviUpx",
      "https://www.youtube.com/embed/-aKXGGZsQeA?si=ffpvGg7bt0joks7s",
      "https://www.youtube.com/embed/lP9dLjued9Q?si=EfUObvQW44Izubgb",
      "https://www.youtube.com/embed/1YC7yTqoHRQ?si=eiXG4eVUlQhBsEtV",
    ],
  },
  {
    publication: "Monumental: Ellie Goulding at Kew Gardens",
    href: "https://www.amazon.com/gp/video/detail/B0B68QDTWV",
    description:
      "A music performance and interview series featuring artists in iconic locations around the world. Available to stream on Amazon Prime. Winner of the Environmental Media Association award for Variety Television.",
    productions: [
      "https://www.youtube.com/embed/fwjlw2K8vAg?si=FlvcxucmTmIGumDE",
      "https://www.youtube.com/embed/yEy96ePsfN4?si=8-ALqN_JFqJvyEoS",
    ],
  },
];

/**
 * Link productions (external links with thumbnails)
 * To add a new link production:
 * 1. Add the thumbnail image to public/productions/
 * 2. Add the production to the appropriate series below
 */
export const linkProductions: LinkProduction[] = [
  {
    publication: "Variety - Full Production Credits",
    description: "Live from My Den Season 5",
    links: [
      {
        href: "https://variety.com/video/shame-live-from-my-den/",
        image: "shame-s5.png",
      },
      {
        href: "https://variety.com/video/maisie-peters-the-good-witch-live-from-my-den",
        image: "maisie-peters-s5.png",
      },
      {
        href: "https://variety.com/video/the-aces-live-from-my-den",
        image: "the-aces-s5.png",
      },
      {
        href: "https://variety.com/video/chika-samson-live-from-my-den",
        image: "chika-samson-s5.png",
      },
      {
        href: "https://variety.com/video/ryan-beatty-live-from-my-den",
        image: "ryan-beatty-s5.png",
      },
      {
        href: "https://variety.com/video/art-school-girlfriend-live-from-my-den-performance",
        image: "art-school-girlfriend-s5.png",
      },
    ],
  },
  {
    publication: "Variety - Full Production Credits",
    description: "Live from My Den Season 4",
    links: [
      {
        href: "https://variety.com/video/idles-crawler-beachland-ballroom-live-from-my-den/",
        image: "idles-s4.png",
      },
      {
        href: "https://variety.com/video/ingrid-andress-live-from-my-den-nashville",
        image: "ingrid-andress-s4.png",
      },
      {
        href: "https://variety.com/video/muna-silk-chiffon-acoustic-taylor-swift-live-from-my-den",
        image: "muna-s4.png",
      },
      {
        href: "https://variety.com/video/jack-johnson-blake-mills-live-from-my-den",
        image: "jack-johnson-s4.png",
      },
      {
        href: "https://variety.com/video/kota-the-friend-live-from-my-den-upcoming-album-favorite-new-york-rappers",
        image: "kota-the-friend-s4.png",
      },
      {
        href: "https://variety.com/2022/music/news/noah-kahan-stick-season-live-from-my-den-1235463570",
        image: "noah-kahan-s4.png",
      },
      {
        href: "https://variety.com/video/soccer-mommy-sometimes-forever-pushing-past-comfort-zone-live-from-my-den",
        image: "soccer-mommy-s4.png",
      },
    ],
  },
  {
    publication: "Variety - Full Production Credits",
    description: "Live from My Den Season 3",
    links: [
      {
        href: "https://variety.com/video/magdalena-bay-artists-den-performance-interview-video",
        image: "magdalena-bay-s3.png",
      },
      {
        href: "https://variety.com/video/tank-bangas-red-balloon-live-from-my-den",
        image: "tank-bangas-s3.png",
      },
      {
        href: "https://variety.com/video/pinegrove-1111-live-from-my-den",
        image: "pinegrove-s3.png",
      },
      {
        href: "https://variety.com/video/nicole-atkins-memphis-ice-live-from-my-den",
        image: "nicole-atkins-s3.png",
      },
      {
        href: "https://variety.com/video/mxmtoon-rising-live-from-my-den",
        image: "mxmtoon-s3.png",
      },
      {
        href: "https://variety.com/video/kojey-radical-live-from-my-den-performance",
        image: "kojey-radical-s3.png",
      },
      {
        href: "https://variety.com/video/justin-quiles-daddy-yankee-influences",
        image: "justin-quiles-s3.png",
      },
    ],
  },
];
