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
  videoUrl: string;
  alt: string;
};

export const reels: ReelItem[] = [
  {
    "id": 1,
    "title": "Grand Opening DHANKUBER",
    "slug": "grand-opening-grand-opening-dhankuber",
    "category": "Grand Opening",
    "duration": "0:27",
    "thumbnail": "/reels/thumbnails/grand-opening/grand-opening-grand-opening-dhankuber.webp",
    "videoUrl": "/reels/videos/grand-opening/grand-opening-grand-opening-dhankuber.mp4",
    "alt": "Grand Opening DHANKUBER reel thumbnail"
  },
  {
    "id": 2,
    "title": "PAZZ Coming Soon",
    "slug": "grand-opening-pazz-coming-soon",
    "category": "Grand Opening",
    "duration": "0:26",
    "thumbnail": "/reels/thumbnails/grand-opening/grand-opening-pazz-coming-soon.webp",
    "videoUrl": "/reels/videos/grand-opening/grand-opening-pazz-coming-soon.mp4",
    "alt": "PAZZ Coming Soon reel thumbnail"
  },
  {
    "id": 3,
    "title": "SBR Grand Opening",
    "slug": "grand-opening-sbr-grand-opening",
    "category": "Grand Opening",
    "duration": "0:27",
    "thumbnail": "/reels/thumbnails/grand-opening/grand-opening-sbr-grand-opening.webp",
    "videoUrl": "/reels/videos/grand-opening/grand-opening-sbr-grand-opening.mp4",
    "alt": "SBR Grand Opening reel thumbnail"
  },
  {
    "id": 4,
    "title": "FEEL EXHAUSTED",
    "slug": "montage-feel-exhausted",
    "category": "Montage",
    "duration": "0:28",
    "thumbnail": "/reels/thumbnails/montage/montage-feel-exhausted.webp",
    "videoUrl": "/reels/videos/montage/montage-feel-exhausted.mp4",
    "alt": "FEEL EXHAUSTED reel thumbnail"
  },
  {
    "id": 5,
    "title": "JAMMING EVENT",
    "slug": "montage-jamming-event",
    "category": "Montage",
    "duration": "0:34",
    "thumbnail": "/reels/thumbnails/montage/montage-jamming-event.webp",
    "videoUrl": "/reels/videos/montage/montage-jamming-event.mp4",
    "alt": "JAMMING EVENT reel thumbnail"
  },
  {
    "id": 6,
    "title": "Mahendra Thal",
    "slug": "montage-mahendra-thal",
    "category": "Montage",
    "duration": "0:10",
    "thumbnail": "/reels/thumbnails/montage/montage-mahendra-thal.webp",
    "videoUrl": "/reels/videos/montage/montage-mahendra-thal.mp4",
    "alt": "Mahendra Thal reel thumbnail"
  },
  {
    "id": 7,
    "title": "SBR FINALDAY",
    "slug": "montage-sbr-finalday",
    "category": "Montage",
    "duration": "0:43",
    "thumbnail": "/reels/thumbnails/montage/montage-sbr-finalday.webp",
    "videoUrl": "/reels/videos/montage/montage-sbr-finalday.mp4",
    "alt": "SBR FINALDAY reel thumbnail"
  },
  {
    "id": 8,
    "title": "Aiyo Ruk ja",
    "slug": "funny-aiyo-ruk-ja",
    "category": "Funny",
    "duration": "0:31",
    "thumbnail": "/reels/thumbnails/funny/funny-aiyo-ruk-ja.webp",
    "videoUrl": "/reels/videos/funny/funny-aiyo-ruk-ja.mp4",
    "alt": "Aiyo Ruk ja reel thumbnail"
  },
  {
    "id": 9,
    "title": "BAAL REEL",
    "slug": "funny-baal-reel",
    "category": "Funny",
    "duration": "0:18",
    "thumbnail": "/reels/thumbnails/funny/funny-baal-reel.webp",
    "videoUrl": "/reels/videos/funny/funny-baal-reel.mp4",
    "alt": "BAAL REEL reel thumbnail"
  },
  {
    "id": 10,
    "title": "MOMOS ME FILLING",
    "slug": "funny-momos-me-filling",
    "category": "Funny",
    "duration": "0:33",
    "thumbnail": "/reels/thumbnails/funny/funny-momos-me-filling.webp",
    "videoUrl": "/reels/videos/funny/funny-momos-me-filling.mp4",
    "alt": "MOMOS ME FILLING reel thumbnail"
  },
  {
    "id": 11,
    "title": "NAHI HAR BAAT PE NAHI",
    "slug": "funny-nahi-har-baat-pe-nahi",
    "category": "Funny",
    "duration": "0:17",
    "thumbnail": "/reels/thumbnails/funny/funny-nahi-har-baat-pe-nahi.webp",
    "videoUrl": "/reels/videos/funny/funny-nahi-har-baat-pe-nahi.mp4",
    "alt": "NAHI HAR BAAT PE NAHI reel thumbnail"
  },
  {
    "id": 12,
    "title": "Zero civic sense",
    "slug": "funny-zero-civic-sense",
    "category": "Funny",
    "duration": "0:17",
    "thumbnail": "/reels/thumbnails/funny/funny-zero-civic-sense.webp",
    "videoUrl": "/reels/videos/funny/funny-zero-civic-sense.mp4",
    "alt": "Zero civic sense reel thumbnail"
  },
  {
    "id": 13,
    "title": "JAKHMO PE MARHAM",
    "slug": "music-based-jakhmo-pe-marham",
    "category": "Music Based",
    "duration": "0:22",
    "thumbnail": "/reels/thumbnails/music-based/music-based-jakhmo-pe-marham.webp",
    "videoUrl": "/reels/videos/music-based/music-based-jakhmo-pe-marham.mp4",
    "alt": "JAKHMO PE MARHAM reel thumbnail"
  },
  {
    "id": 14,
    "title": "Video 363",
    "slug": "ai-based-reel-video-363",
    "category": "AI Based Reel",
    "duration": "0:33",
    "thumbnail": "/reels/thumbnails/ai-based-reel/ai-based-reel-video-363.webp",
    "videoUrl": "/reels/videos/ai-based-reel/ai-based-reel-video-363.mp4",
    "alt": "Video 363 reel thumbnail"
  },
  {
    "id": 15,
    "title": "Video 652",
    "slug": "ai-based-reel-video-652",
    "category": "AI Based Reel",
    "duration": "0:21",
    "thumbnail": "/reels/thumbnails/ai-based-reel/ai-based-reel-video-652.webp",
    "videoUrl": "/reels/videos/ai-based-reel/ai-based-reel-video-652.mp4",
    "alt": "Video 652 reel thumbnail"
  },
  {
    "id": 16,
    "title": "Video 940",
    "slug": "ai-based-reel-video-940",
    "category": "AI Based Reel",
    "duration": "0:18",
    "thumbnail": "/reels/thumbnails/ai-based-reel/ai-based-reel-video-940.webp",
    "videoUrl": "/reels/videos/ai-based-reel/ai-based-reel-video-940.mp4",
    "alt": "Video 940 reel thumbnail"
  },
  {
    "id": 17,
    "title": "BAT JO HAI USME",
    "slug": "meme-based-bat-jo-hai-usme",
    "category": "Meme Based",
    "duration": "0:22",
    "thumbnail": "/reels/thumbnails/meme-based/meme-based-bat-jo-hai-usme.webp",
    "videoUrl": "/reels/videos/meme-based/meme-based-bat-jo-hai-usme.mp4",
    "alt": "BAT JO HAI USME reel thumbnail"
  },
  {
    "id": 18,
    "title": "DHURANDHAR",
    "slug": "meme-based-dhurandhar",
    "category": "Meme Based",
    "duration": "0:28",
    "thumbnail": "/reels/thumbnails/meme-based/meme-based-dhurandhar.webp",
    "videoUrl": "/reels/videos/meme-based/meme-based-dhurandhar.mp4",
    "alt": "DHURANDHAR reel thumbnail"
  },
  {
    "id": 19,
    "title": "HOOK BASED",
    "slug": "meme-based-hook-based",
    "category": "Meme Based",
    "duration": "0:28",
    "thumbnail": "/reels/thumbnails/meme-based/meme-based-hook-based.webp",
    "videoUrl": "/reels/videos/meme-based/meme-based-hook-based.mp4",
    "alt": "HOOK BASED reel thumbnail"
  },
  {
    "id": 20,
    "title": "Munna bhai MBBS",
    "slug": "meme-based-munna-bhai-mbbs",
    "category": "Meme Based",
    "duration": "0:46",
    "thumbnail": "/reels/thumbnails/meme-based/meme-based-munna-bhai-mbbs.webp",
    "videoUrl": "/reels/videos/meme-based/meme-based-munna-bhai-mbbs.mp4",
    "alt": "Munna bhai MBBS reel thumbnail"
  },
  {
    "id": 21,
    "title": "PHIR HERA PHERI",
    "slug": "meme-based-phir-hera-pheri",
    "category": "Meme Based",
    "duration": "0:19",
    "thumbnail": "/reels/thumbnails/meme-based/meme-based-phir-hera-pheri.webp",
    "videoUrl": "/reels/videos/meme-based/meme-based-phir-hera-pheri.mp4",
    "alt": "PHIR HERA PHERI reel thumbnail"
  },
  {
    "id": 22,
    "title": "TOM AND JERRY",
    "slug": "meme-based-tom-and-jerry",
    "category": "Meme Based",
    "duration": "0:15",
    "thumbnail": "/reels/thumbnails/meme-based/meme-based-tom-and-jerry.webp",
    "videoUrl": "/reels/videos/meme-based/meme-based-tom-and-jerry.mp4",
    "alt": "TOM AND JERRY reel thumbnail"
  },
  {
    "id": 23,
    "title": "TREND HUSHO HAIY",
    "slug": "meme-based-trend-husho-haiy",
    "category": "Meme Based",
    "duration": "0:20",
    "thumbnail": "/reels/thumbnails/meme-based/meme-based-trend-husho-haiy.webp",
    "videoUrl": "/reels/videos/meme-based/meme-based-trend-husho-haiy.mp4",
    "alt": "TREND HUSHO HAIY reel thumbnail"
  },
  {
    "id": 24,
    "title": "2025 Ends",
    "slug": "conceptual-reels-2025-ends",
    "category": "Conceptual reels",
    "duration": "0:37",
    "thumbnail": "/reels/thumbnails/conceptual-reels/conceptual-reels-2025-ends.webp",
    "videoUrl": "/reels/videos/conceptual-reels/conceptual-reels-2025-ends.mp4",
    "alt": "2025 Ends reel thumbnail"
  },
  {
    "id": 25,
    "title": "Crispy Veg Describe",
    "slug": "conceptual-reels-crispy-veg-describe",
    "category": "Conceptual reels",
    "duration": "0:36",
    "thumbnail": "/reels/thumbnails/conceptual-reels/conceptual-reels-crispy-veg-describe.webp",
    "videoUrl": "/reels/videos/conceptual-reels/conceptual-reels-crispy-veg-describe.mp4",
    "alt": "Crispy Veg Describe reel thumbnail"
  },
  {
    "id": 26,
    "title": "Healthy Eating goes wrong",
    "slug": "conceptual-reels-healthy-eating-goes-wrong",
    "category": "Conceptual reels",
    "duration": "0:28",
    "thumbnail": "/reels/thumbnails/conceptual-reels/conceptual-reels-healthy-eating-goes-wrong.webp",
    "videoUrl": "/reels/videos/conceptual-reels/conceptual-reels-healthy-eating-goes-wrong.mp4",
    "alt": "Healthy Eating goes wrong reel thumbnail"
  },
  {
    "id": 27,
    "title": "Pizza in diffrent style",
    "slug": "conceptual-reels-pizza-in-diffrent-style",
    "category": "Conceptual reels",
    "duration": "0:38",
    "thumbnail": "/reels/thumbnails/conceptual-reels/conceptual-reels-pizza-in-diffrent-style.webp",
    "videoUrl": "/reels/videos/conceptual-reels/conceptual-reels-pizza-in-diffrent-style.mp4",
    "alt": "Pizza in diffrent style reel thumbnail"
  },
  {
    "id": 28,
    "title": "SNAP CONCEPT",
    "slug": "conceptual-reels-snap-concept",
    "category": "Conceptual reels",
    "duration": "1:10",
    "thumbnail": "/reels/thumbnails/conceptual-reels/conceptual-reels-snap-concept.webp",
    "videoUrl": "/reels/videos/conceptual-reels/conceptual-reels-snap-concept.mp4",
    "alt": "SNAP CONCEPT reel thumbnail"
  },
  {
    "id": 29,
    "title": "That One Customer",
    "slug": "conceptual-reels-that-one-customer",
    "category": "Conceptual reels",
    "duration": "0:26",
    "thumbnail": "/reels/thumbnails/conceptual-reels/conceptual-reels-that-one-customer.webp",
    "videoUrl": "/reels/videos/conceptual-reels/conceptual-reels-that-one-customer.mp4",
    "alt": "That One Customer reel thumbnail"
  },
  {
    "id": 30,
    "title": "This One Is My Fav.",
    "slug": "conceptual-reels-this-one-is-my-fav",
    "category": "Conceptual reels",
    "duration": "0:27",
    "thumbnail": "/reels/thumbnails/conceptual-reels/conceptual-reels-this-one-is-my-fav.webp",
    "videoUrl": "/reels/videos/conceptual-reels/conceptual-reels-this-one-is-my-fav.mp4",
    "alt": "This One Is My Fav. reel thumbnail"
  },
  {
    "id": 31,
    "title": "Ur frnd can wait burger can t",
    "slug": "conceptual-reels-ur-frnd-can-wait-burger-can-t",
    "category": "Conceptual reels",
    "duration": "0:26",
    "thumbnail": "/reels/thumbnails/conceptual-reels/conceptual-reels-ur-frnd-can-wait-burger-can-t.webp",
    "videoUrl": "/reels/videos/conceptual-reels/conceptual-reels-ur-frnd-can-wait-burger-can-t.mp4",
    "alt": "Ur frnd can wait burger can t reel thumbnail"
  },
  {
    "id": 32,
    "title": "FOOTBALL INTENSE",
    "slug": "speed-ramp-football-intense",
    "category": "Speed Ramp",
    "duration": "0:26",
    "thumbnail": "/reels/thumbnails/speed-ramp/speed-ramp-football-intense.webp",
    "videoUrl": "/reels/videos/speed-ramp/speed-ramp-football-intense.mp4",
    "alt": "FOOTBALL INTENSE reel thumbnail"
  },
  {
    "id": 33,
    "title": "NEW MENU",
    "slug": "speed-ramp-new-menu",
    "category": "Speed Ramp",
    "duration": "0:34",
    "thumbnail": "/reels/thumbnails/speed-ramp/speed-ramp-new-menu.webp",
    "videoUrl": "/reels/videos/speed-ramp/speed-ramp-new-menu.mp4",
    "alt": "NEW MENU reel thumbnail"
  },
  {
    "id": 34,
    "title": "Malasian RIce Cinematic",
    "slug": "cinematic-malasian-rice-cinematic",
    "category": "Cinematic",
    "duration": "0:38",
    "thumbnail": "/reels/thumbnails/cinematic/cinematic-malasian-rice-cinematic.webp",
    "videoUrl": "/reels/videos/cinematic/cinematic-malasian-rice-cinematic.mp4",
    "alt": "Malasian RIce Cinematic reel thumbnail"
  },
  {
    "id": 35,
    "title": "Old Song Cinematic",
    "slug": "cinematic-old-song-cinematic",
    "category": "Cinematic",
    "duration": "0:18",
    "thumbnail": "/reels/thumbnails/cinematic/cinematic-old-song-cinematic.webp",
    "videoUrl": "/reels/videos/cinematic/cinematic-old-song-cinematic.mp4",
    "alt": "Old Song Cinematic reel thumbnail"
  },
  {
    "id": 36,
    "title": "Text Trend Plus Trending",
    "slug": "cinematic-text-trend-plus-trending",
    "category": "Cinematic",
    "duration": "0:23",
    "thumbnail": "/reels/thumbnails/cinematic/cinematic-text-trend-plus-trending.webp",
    "videoUrl": "/reels/videos/cinematic/cinematic-text-trend-plus-trending.mp4",
    "alt": "Text Trend Plus Trending reel thumbnail"
  },
  {
    "id": 37,
    "title": "Trend Plus Cinematic",
    "slug": "cinematic-trend-plus-cinematic",
    "category": "Cinematic",
    "duration": "0:26",
    "thumbnail": "/reels/thumbnails/cinematic/cinematic-trend-plus-cinematic.webp",
    "videoUrl": "/reels/videos/cinematic/cinematic-trend-plus-cinematic.mp4",
    "alt": "Trend Plus Cinematic reel thumbnail"
  },
  {
    "id": 38,
    "title": "Trending Ration Cinematic",
    "slug": "cinematic-trending-ration-cinematic",
    "category": "Cinematic",
    "duration": "0:26",
    "thumbnail": "/reels/thumbnails/cinematic/cinematic-trending-ration-cinematic.webp",
    "videoUrl": "/reels/videos/cinematic/cinematic-trending-ration-cinematic.mp4",
    "alt": "Trending Ration Cinematic reel thumbnail"
  },
  {
    "id": 39,
    "title": "Valentine Cinematic",
    "slug": "cinematic-valentine-cinematic",
    "category": "Cinematic",
    "duration": "0:22",
    "thumbnail": "/reels/thumbnails/cinematic/cinematic-valentine-cinematic.webp",
    "videoUrl": "/reels/videos/cinematic/cinematic-valentine-cinematic.mp4",
    "alt": "Valentine Cinematic reel thumbnail"
  }
];
