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
        imageUrl: "1975 - Being Funny In A Foreign Language.jpg",
        href: "https://stagedhaze.com/2022/10/19/on-being-funny-in-a-foreign-language-the-1975-are-more-confident-than-ever/",
      },
      {
        imageUrl: "Rina-Sawayama.jpg",
        href: "https://stagedhaze.com/2022/09/22/rina-sawayamas-sophomore-album-hold-the-girl-pushes-the-limits-of-pop-music-but-still-feels-safe/",
      },
      {
        imageUrl: "marlon-williams-my-boy-album-artwork-cover-art.jpg",
        href: "https://stagedhaze.com/2022/09/08/marlon-williams-my-boy-is-a-loose-collection-of-70s-fragments/",
      },
      {
        imageUrl: "Perfume-Genius-Ugly-Season.jpeg",
        href: "https://stagedhaze.com/2022/06/17/on-ugly-season-perfume-genius-is-more-abstract-than-ever/",
      },
      {
        imageUrl: "unnamed.jpg",
        href: "https://stagedhaze.com/2022/04/22/king-gizzard-bring-the-best-of-their-mosaic-discography-on-omnium-gatherum/",
      },
      {
        imageUrl: "image003.jpg",
        href: "https://stagedhaze.com/2022/04/08/wet-legs-highly-anticipated-debut-album-is-absurd-funny-and-disarming/",
      },
      {
        imageUrl: "christian-lee-hutson-quitters.jpeg",
        href: "https://stagedhaze.com/2022/04/06/christian-lee-hutsons-quitters-process-21st-century-overload-in-real-time/",
      },
      {
        imageUrl: "Charli-XCX-Crash.jpg",
        href: "https://stagedhaze.com/2022/03/18/on-fifth-studio-album-charli-xcx-stages-the-perfect-crash/",
      },
      {
        imageUrl: "Nilufer-Yanya-Painless.jpeg",
        href: "https://stagedhaze.com/2022/03/14/nilufer-yanya-tackles-feeling-on-sophomore-album-painless/",
      },
      {
        imageUrl: "71wDEaWKt8L._UF1000,1000_QL80_.jpg",
        href: "https://stagedhaze.com/2022/03/04/leons-third-album-circles-takes-a-different-approach-to-the-pop-music-of-her-peers/",
      },
    ],
  },
];
