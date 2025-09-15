import type { Route } from "next";

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

type InterviewFeature = {
  publication: string;
  title: string;
  url: Route;
  image: string;
};

export type PublicationFeature = {
  publication: string;
  features: Omit<InterviewFeature, "image" | "publication">[];
};

export const navigationLinks: NavigationLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Interviews",
    href: "/interviews",
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
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andy-steiner-08a49b179/",
  },
  {
    label: "Mail",
    href: "mailto:andysteiner2@gmail.com",
  },
];

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

export const recentWork: InterviewFeature[] = [
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

export const interviewFeatures: PublicationFeature[] = [
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
        url: "https://www.undertheradarmag.com",
      },
      {
        title: "Mannequin Pussy @ Brooklyn Steel",
        url: "https://www.undertheradarmag.com",
      },
      {
        title: "Interview with Cameron Winter of Geese",
        url: "https://www.undertheradarmag.com",
      },
      {
        title: "Interview with Cory Hanson",
        url: "https://www.undertheradarmag.com",
      },
      {
        title: "Profile of Alex Lahey",
        url: "https://www.undertheradarmag.com",
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
        url: "https://theneedledrop.com",
      },
      {
        title: "Full News Coverage at The Needle Drop",
        url: "https://theneedledrop.com",
      },
    ],
  },
  {
    publication: "Chartmetric",
    features: [
      {
        title: "Does Indie Sleaze Actually Exist?",
        url: "https://hmc.chartmetric.com",
      },
      {
        title: "Do Non-Televised Grammys Mean Anything Anymore?",
        url: "https://hmc.chartmetric.com",
      },
    ],
  },
];
