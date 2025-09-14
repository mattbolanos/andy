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
  publication: string;
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

export const albumReviews: AlbumReview[] = [
  {
    imageUrl: "brat-but-different.jpeg",
    href: "https://www.pastemagazine.com/music/charli-xcx/brat-and-its-completely-different-but-also-still-brat-charli-xcx-review",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "manning-fireworks.jpeg",
    href: "https://www.pastemagazine.com/music/mj-lenderman/mj-lenderman-croons-through-faults-and-grace-on-manning-fireworks",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "spelling-portrait-heart.jpeg",
    href: "https://www.pastemagazine.com/music/spellling/spelllings-portrait-of-my-heart-cooks-with-gas-until-it-burns-out",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "samia-bloodless.jpeg",
    href: "https://www.pastemagazine.com/music/samia/samia-gets-existential-on-bloodless",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "diiv-frog.jpeg",
    href: "https://www.pastemagazine.com/music/diiv/diiv-provide-a-soundtrack-for-when-the-heat-starts-to-rise-on-frog-in-boiling-water",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "been-stellear-scream-ny.jpeg",
    href: "https://www.pastemagazine.com/music/been-stellar/been-stellar-examine-frustration-and-nostalgia-on-scream-from-new-york-ny",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "fat-dog-woof.jpeg",
    href: "https://www.pastemagazine.com/music/fat-dog/fat-dog-bark-their-debut-album-into-a-circus",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "dutch-interior-moneyball.jpg",
    href: "https://www.pastemagazine.com/music/dutch-interior/dutch-interior-give-old-tricks-new-life-on-moneyball",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "pinkpantheress-heaven-knows.jpeg",
    href: "https://www.pastemagazine.com/music/pinkpantheress/pinkpantheress-heaven-knows-review",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "sports-team-boys-these-days.jpeg",
    href: "https://www.pastemagazine.com/music/sports-team/sports-team-turn-away-from-their-strengths-on-boys-these-days",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "mamalarky-hex-key.jpeg",
    href: "https://www.pastemagazine.com/music/mamalarky/mamalarky-hex-key-album-review",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "kacy-hill-bug.jpeg",
    href: "https://www.pastemagazine.com/music/kacy-hill/kacy-hills-bug-is-garden-grown-indie-pop",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "a-place-to-bury-strangers-synthesizer.jpeg",
    href: "https://www.pastemagazine.com/music/a-place-to-bury-strangers/a-place-to-bury-strangers-synthesizer-review",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "courting-new-last-name.jpeg",
    href: "https://www.pastemagazine.com/music/courting/courting-new-last-name-review",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "wishy-paradise.jpeg",
    href: "https://www.pastemagazine.com/music/wishy/wishy-paradise-ep-review",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "mgmt-loss-of-life.jpeg",
    href: "https://www.pastemagazine.com/music/mgmt/mgmt-revel-in-the-vibrancy-of-their-influences-on-loss-of-life",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "idles-tangk.jpeg",
    href: "https://www.pastemagazine.com/music/idles/idles-search-for-love-on-tangk-but-lose-their-footing",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "hotline-tnt-cartwheel.jpeg",
    href: "https://www.pastemagazine.com/music/hotline-tnt/album-of-the-week-hotline-tnt-cartwheel-review",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "deeper-careful.jpeg",
    href: "https://www.pastemagazine.com/music/deeper/deeper-careful-review",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "Wild-Nothing-Hold.jpg",
    href: "https://www.pastemagazine.com/music/wild-nothing/wild-nothing-hold-review",
    publication: "Paste Magazine",
  },
  {
    imageUrl: "Omni_-_Souvenir.png",
    href: "https://www.pastemagazine.com/music/omni/on-souvenir-onmi-fine-tune-their-formula",
    publication: "Paste Magazine",
  },
  {
    imageUrl:
      "Kevin_Morby_More_Photographs_A_Continuum_album_cover_artwork_review_MR.jpg",
    href: "https://www.undertheradarmag.com/reviews/more_photographs_a_continuum_kevin_morby",
    publication: "Under The Radar",
  },
  {
    imageUrl: "Westerman_An_Inbuilt_Fault_album_cover_artwork_review.jpg",
    href: "https://www.undertheradarmag.com/reviews/an_inbuilt_fault_westerman",
    publication: "Under The Radar",
  },
  {
    imageUrl:
      "Jessie_Ware_That_Feels_Good_Pearls_album_cover_artwork_review.jpg",
    href: "https://www.undertheradarmag.com/reviews/that_feels_good_jessie_ware",
    publication: "Under The Radar",
  },
  {
    imageUrl: "Unknown_Mortal_Orchestra_V_album_cover_artwork_review.jpg",
    href: "https://www.undertheradarmag.com/reviews/v_unknown_mortal_orchestra",
    publication: "Under The Radar",
  },
  {
    imageUrl:
      "Yves_Tumor_Praise_A_Lord_Who_Chews_But_Which_Does_Not_Consume_Or_Simply_Hot_Between_Worlds_album_cover_review.jpg",
    href: "https://www.undertheradarmag.com/reviews/praise_a_lord_who_chews_but_which_does_not_consume_or_simply_hot_yves_tumor",
    publication: "Under The Radar",
  },
  {
    imageUrl: "Gorillaz_Cracker_Island_cover_artwork_review.jpg",
    href: "https://www.undertheradarmag.com/reviews/cracker_island_gorillaz",
    publication: "Under The Radar",
  },
  {
    imageUrl: "andy-shauf-norm-art.jpg",
    href: "https://www.thelineofbestfit.com/albums/andy-shauf-norm-playing-god",
    publication: "The Line of Best Fit",
  },
  {
    imageUrl: "Wednesday-Rat-Saw-God.jpg",
    href: "https://stagedhaze.com/2023/04/07/wednesdays-rat-saw-god-finds-cohesion-in-the-chaos/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "Samia- Honey.jpeg",
    href: "https://stagedhaze.com/2023/01/26/samia-lets-her-emotions-roar-on-tenacious-sophomore-album-honey/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "1975 - Being Funny In A Foreign Language.jpg",
    href: "https://stagedhaze.com/2022/10/19/on-being-funny-in-a-foreign-language-the-1975-are-more-confident-than-ever/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "Rina-Sawayama.jpg",
    href: "https://stagedhaze.com/2022/09/22/rina-sawayamas-sophomore-album-hold-the-girl-pushes-the-limits-of-pop-music-but-still-feels-safe/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "marlon-williams-my-boy-album-artwork-cover-art.jpg",
    href: "https://stagedhaze.com/2022/09/08/marlon-williams-my-boy-is-a-loose-collection-of-70s-fragments/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "Perfume-Genius-Ugly-Season.jpeg",
    href: "https://stagedhaze.com/2022/06/17/on-ugly-season-perfume-genius-is-more-abstract-than-ever/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "unnamed.jpg",
    href: "https://stagedhaze.com/2022/04/22/king-gizzard-bring-the-best-of-their-mosaic-discography-on-omnium-gatherum/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "image003.jpg",
    href: "https://stagedhaze.com/2022/04/08/wet-legs-highly-anticipated-debut-album-is-absurd-funny-and-disarming/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "christian-lee-hutson-quitters.jpeg",
    href: "https://stagedhaze.com/2022/04/06/christian-lee-hutsons-quitters-process-21st-century-overload-in-real-time/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "Charli-XCX-Crash.jpg",
    href: "https://stagedhaze.com/2022/03/18/on-fifth-studio-album-charli-xcx-stages-the-perfect-crash/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "Nilufer-Yanya-Painless.jpeg",
    href: "https://stagedhaze.com/2022/03/14/nilufer-yanya-tackles-feeling-on-sophomore-album-painless/",
    publication: "Staged Haze",
  },
  {
    imageUrl: "71wDEaWKt8L._UF1000,1000_QL80_.jpg",
    href: "https://stagedhaze.com/2022/03/04/leons-third-album-circles-takes-a-different-approach-to-the-pop-music-of-her-peers/",
    publication: "Staged Haze",
  },
];
