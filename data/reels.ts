export const reelCategories = [
  "Grand Opening",
  "Montage",
  "Funny",
  "Music Based",
  "AI Based Reel",
  "Meme Based",
  "Conceptual reels",
  "Speed Ramp",
  "Cinematic"
] as const;

export type ReelCategory = (typeof reelCategories)[number];

export type ReelItem = {
  id: number;
  title: string;
  slug: string;
  category: ReelCategory;
  duration: string;
  thumbnail: string;
  youtubeId?: string;
  localUrl?: string;
  alt: string;
};

function yt(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export const reels: ReelItem[] = [
  {
    id: 1,
    title: "Grand Opening DHANKUBER",
    slug: "grand-opening-grand-opening-dhankuber",
    category: "Grand Opening",
    duration: "0:27",
    youtubeId: "YPdLDPKuyZ4",
    thumbnail: yt("YPdLDPKuyZ4"),
    alt: "Grand Opening DHANKUBER reel thumbnail"
  },
  {
    id: 2,
    title: "PAZZ Coming Soon",
    slug: "grand-opening-pazz-coming-soon",
    category: "Grand Opening",
    duration: "0:26",
    youtubeId: "5U-b6m13UWA",
    thumbnail: yt("5U-b6m13UWA"),
    alt: "PAZZ Coming Soon reel thumbnail"
  },
  {
    id: 3,
    title: "SBR Grand Opening",
    slug: "grand-opening-sbr-grand-opening",
    category: "Grand Opening",
    duration: "0:27",
    youtubeId: "w3MvZ-Trq_Y",
    thumbnail: yt("w3MvZ-Trq_Y"),
    alt: "SBR Grand Opening reel thumbnail"
  },
  {
    id: 4,
    title: "FEEL EXHAUSTED",
    slug: "montage-feel-exhausted",
    category: "Montage",
    duration: "0:28",
    youtubeId: "n1Q2uXR7RlM",
    thumbnail: yt("n1Q2uXR7RlM"),
    alt: "FEEL EXHAUSTED reel thumbnail"
  },
  {
    id: 5,
    title: "JAMMING EVENT",
    slug: "montage-jamming-event",
    category: "Montage",
    duration: "0:34",
    youtubeId: "83IroDbG4M8",
    thumbnail: yt("83IroDbG4M8"),
    alt: "JAMMING EVENT reel thumbnail"
  },
  {
    id: 6,
    title: "Mahendra Thal",
    slug: "montage-mahendra-thal",
    category: "Montage",
    duration: "0:10",
    youtubeId: "ggIkd-iKh9E",
    thumbnail: yt("ggIkd-iKh9E"),
    alt: "Mahendra Thal reel thumbnail"
  },
  {
    id: 7,
    title: "SBR FINALDAY",
    slug: "montage-sbr-finalday",
    category: "Montage",
    duration: "0:43",
    youtubeId: "nuqLGKPfvLQ",
    thumbnail: yt("nuqLGKPfvLQ"),
    alt: "SBR FINALDAY reel thumbnail"
  },
  {
    id: 8,
    title: "Aiyo Ruk ja",
    slug: "funny-aiyo-ruk-ja",
    category: "Funny",
    duration: "0:31",
    youtubeId: "QYxqaG8oNZ0",
    thumbnail: yt("QYxqaG8oNZ0"),
    alt: "Aiyo Ruk ja reel thumbnail"
  },
  {
    id: 9,
    title: "BAAL REEL",
    slug: "funny-baal-reel",
    category: "Funny",
    duration: "0:18",
    youtubeId: "oHfs0wfEFZk",
    thumbnail: yt("oHfs0wfEFZk"),
    alt: "BAAL REEL reel thumbnail"
  },
  {
    id: 10,
    title: "MOMOS ME FILLING",
    slug: "funny-momos-me-filling",
    category: "Funny",
    duration: "0:33",
    youtubeId: "zNq5OPo2FeQ",
    thumbnail: yt("zNq5OPo2FeQ"),
    alt: "MOMOS ME FILLING reel thumbnail"
  },
  {
    id: 11,
    title: "NAHI HAR BAAT PE NAHI",
    slug: "funny-nahi-har-baat-pe-nahi",
    category: "Funny",
    duration: "0:17",
    youtubeId: "tOevTFpBdEk",
    thumbnail: yt("tOevTFpBdEk"),
    alt: "NAHI HAR BAAT PE NAHI reel thumbnail"
  },
  {
    id: 12,
    title: "Zero civic sense",
    slug: "funny-zero-civic-sense",
    category: "Funny",
    duration: "0:17",
    youtubeId: "Y2Hs3hjZbrE",
    thumbnail: yt("Y2Hs3hjZbrE"),
    alt: "Zero civic sense reel thumbnail"
  },
  {
    id: 13,
    title: "JAKHMO PE MARHAM",
    slug: "music-based-jakhmo-pe-marham",
    category: "Music Based",
    duration: "0:22",
    youtubeId: "i-YgtkVyBoc",
    thumbnail: yt("i-YgtkVyBoc"),
    alt: "JAKHMO PE MARHAM reel thumbnail"
  },
  {
    id: 14,
    title: "Video 363",
    slug: "ai-based-reel-video-363",
    category: "AI Based Reel",
    duration: "0:33",
    youtubeId: "kFwUPoEQRIQ",
    thumbnail: yt("kFwUPoEQRIQ"),
    alt: "AI Based Reel video 363 thumbnail"
  },
  {
    id: 15,
    title: "Video 652",
    slug: "ai-based-reel-video-652",
    category: "AI Based Reel",
    duration: "0:21",
    youtubeId: "Z-JyRigsyc4",
    thumbnail: yt("Z-JyRigsyc4"),
    alt: "AI Based Reel video 652 thumbnail"
  },
  {
    id: 16,
    title: "Video 940",
    slug: "ai-based-reel-video-940",
    category: "AI Based Reel",
    duration: "0:18",
    youtubeId: "McIOAtGuYB0",
    thumbnail: yt("McIOAtGuYB0"),
    alt: "AI Based Reel video 940 thumbnail"
  },
  {
    id: 17,
    title: "BAT JO HAI USME",
    slug: "meme-based-bat-jo-hai-usme",
    category: "Meme Based",
    duration: "0:22",
    youtubeId: "jUXChwUlU54",
    thumbnail: yt("jUXChwUlU54"),
    alt: "BAT JO HAI USME reel thumbnail"
  },
  {
    id: 18,
    title: "HOOK BASED",
    slug: "meme-based-hook-based",
    category: "Meme Based",
    duration: "0:28",
    youtubeId: "2SvHkgkCTI4",
    thumbnail: yt("2SvHkgkCTI4"),
    alt: "HOOK BASED reel thumbnail"
  },
  {
    id: 19,
    title: "Munna bhai MBBS",
    slug: "meme-based-munna-bhai-mbbs",
    category: "Meme Based",
    duration: "0:46",
    youtubeId: "dKsy-XUbXbM",
    thumbnail: yt("dKsy-XUbXbM"),
    alt: "Munna bhai MBBS reel thumbnail"
  },
  {
    id: 20,
    title: "PHIR HERA PHERI",
    slug: "meme-based-phir-hera-pheri",
    category: "Meme Based",
    duration: "0:19",
    youtubeId: "NC-AyadCtB4",
    thumbnail: yt("NC-AyadCtB4"),
    alt: "PHIR HERA PHERI reel thumbnail"
  },
  {
    id: 21,
    title: "TOM AND JERRY",
    slug: "meme-based-tom-and-jerry",
    category: "Meme Based",
    duration: "0:15",
    youtubeId: "Nk573hoP9lw",
    thumbnail: yt("Nk573hoP9lw"),
    alt: "TOM AND JERRY reel thumbnail"
  },
  {
    id: 22,
    title: "TREND HUSHO HAIY",
    slug: "meme-based-trend-husho-haiy",
    category: "Meme Based",
    duration: "0:20",
    youtubeId: "f0Zn17CqRAg",
    thumbnail: yt("f0Zn17CqRAg"),
    alt: "TREND HUSHO HAIY reel thumbnail"
  },
  {
    id: 23,
    title: "2025 Ends",
    slug: "conceptual-reels-2025-ends",
    category: "Conceptual reels",
    duration: "0:37",
    youtubeId: "4fWm_i8PMXA",
    thumbnail: yt("4fWm_i8PMXA"),
    alt: "2025 Ends reel thumbnail"
  },
  {
    id: 24,
    title: "Crispy Veg Describe",
    slug: "conceptual-reels-crispy-veg-describe",
    category: "Conceptual reels",
    duration: "0:36",
    youtubeId: "HQP6CoO-Vf4",
    thumbnail: yt("HQP6CoO-Vf4"),
    alt: "Crispy Veg Describe reel thumbnail"
  },
  {
    id: 25,
    title: "Healthy Eating goes wrong",
    slug: "conceptual-reels-healthy-eating-goes-wrong",
    category: "Conceptual reels",
    duration: "0:28",
    youtubeId: "yktxJHIHgGk",
    thumbnail: yt("yktxJHIHgGk"),
    alt: "Healthy Eating goes wrong reel thumbnail"
  },
  {
    id: 26,
    title: "Pizza in diffrent style",
    slug: "conceptual-reels-pizza-in-diffrent-style",
    category: "Conceptual reels",
    duration: "0:38",
    youtubeId: "YBmXRAFk_og",
    thumbnail: yt("YBmXRAFk_og"),
    alt: "Pizza in diffrent style reel thumbnail"
  },
  {
    id: 27,
    title: "SNAP CONCEPT",
    slug: "conceptual-reels-snap-concept",
    category: "Conceptual reels",
    duration: "1:10",
    youtubeId: "G0KRCT2y5Uo",
    thumbnail: yt("G0KRCT2y5Uo"),
    alt: "SNAP CONCEPT reel thumbnail"
  },
  {
    id: 28,
    title: "That One Customer",
    slug: "conceptual-reels-that-one-customer",
    category: "Conceptual reels",
    duration: "0:26",
    youtubeId: "T8Q8oClHMBE",
    thumbnail: yt("T8Q8oClHMBE"),
    alt: "That One Customer reel thumbnail"
  },
  {
    id: 29,
    title: "This One Is My Fav.",
    slug: "conceptual-reels-this-one-is-my-fav",
    category: "Conceptual reels",
    duration: "0:27",
    youtubeId: "2SKIUFnedPM",
    thumbnail: yt("2SKIUFnedPM"),
    alt: "This One Is My Fav. reel thumbnail"
  },
  {
    id: 30,
    title: "Ur frnd can wait burger can t",
    slug: "conceptual-reels-ur-frnd-can-wait-burger-can-t",
    category: "Conceptual reels",
    duration: "0:26",
    youtubeId: "lk9R13-wYa4",
    thumbnail: yt("lk9R13-wYa4"),
    alt: "Ur frnd can wait burger can t reel thumbnail"
  },
  {
    id: 31,
    title: "FOOTBALL INTENSE",
    slug: "speed-ramp-football-intense",
    category: "Speed Ramp",
    duration: "0:26",
    youtubeId: "KCcv8QIE87s",
    thumbnail: yt("KCcv8QIE87s"),
    alt: "FOOTBALL INTENSE reel thumbnail"
  },
  {
    id: 32,
    title: "NEW MENU",
    slug: "speed-ramp-new-menu",
    category: "Speed Ramp",
    duration: "0:34",
    youtubeId: "xmDqOrY08UA",
    thumbnail: yt("xmDqOrY08UA"),
    alt: "NEW MENU reel thumbnail"
  },
  {
    id: 33,
    title: "Malasian RIce Cinematic",
    slug: "cinematic-malasian-rice-cinematic",
    category: "Cinematic",
    duration: "0:38",
    youtubeId: "Wy0X1lwJYNs",
    thumbnail: yt("Wy0X1lwJYNs"),
    alt: "Malasian RIce Cinematic reel thumbnail"
  },
  {
    id: 34,
    title: "Trending Ration Cinematic",
    slug: "cinematic-trending-ration-cinematic",
    category: "Cinematic",
    duration: "0:26",
    youtubeId: "kZQ-F8gp7F4",
    thumbnail: yt("kZQ-F8gp7F4"),
    alt: "Trending Ration Cinematic reel thumbnail"
  },
  {
    id: 35,
    title: "DHURANDHAR",
    slug: "meme-based-dhurandhar",
    category: "Meme Based",
    duration: "0:28",
    localUrl: "/reels/videos/meme-based/meme-based-dhurandhar.mp4",
    thumbnail: "",
    alt: "DHURANDHAR reel thumbnail"
  },
  {
    id: 36,
    title: "Old Song Cinematic",
    slug: "cinematic-old-song-cinematic",
    category: "Cinematic",
    duration: "0:18",
    localUrl: "/reels/videos/cinematic/cinematic-old-song-cinematic.mp4",
    thumbnail: "",
    alt: "Old Song Cinematic reel thumbnail"
  },
  {
    id: 37,
    title: "Text Trend Plus Trending",
    slug: "cinematic-text-trend-plus-trending",
    category: "Cinematic",
    duration: "0:23",
    localUrl: "/reels/videos/cinematic/cinematic-text-trend-plus-trending.mp4",
    thumbnail: "",
    alt: "Text Trend Plus Trending reel thumbnail"
  },
  {
    id: 38,
    title: "Valentine Cinematic",
    slug: "cinematic-valentine-cinematic",
    category: "Cinematic",
    duration: "0:22",
    localUrl: "/reels/videos/cinematic/cinematic-valentine-cinematic.mp4",
    thumbnail: "",
    alt: "Valentine Cinematic reel thumbnail"
  }
];
