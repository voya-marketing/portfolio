export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  id: number;
  index: string;
  slug: string;
  client: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  services: string[];
  metric: CaseStudyMetric;
  order: number;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    index: "01",
    slug: "sbr-prime-grand-opening",
    client: "SBR Prime",
    title: "A grand opening that sold out week one",
    summary:
      "A full launch system — teaser reels, countdown stories, and opening-day montage — engineered to turn a new venue into a city-wide conversation before the doors opened.",
    image: "/reels/thumbnails/grand-opening/grand-opening-sbr-grand-opening.webp",
    alt: "SBR Prime grand opening reel thumbnail",
    services: ["Grand Opening", "Reels", "Stories"],
    metric: { value: "1.4M", label: "Launch reach" },
    order: 1
  },
  {
    id: 2,
    index: "02",
    slug: "dhankuber-launch-campaign",
    client: "Dhankuber",
    title: "From soft launch to a packed-house opening",
    summary:
      "A high-frequency content cadence built around hooks and platform-native pacing, designed to compound attention day over day into opening weekend.",
    image: "/reels/thumbnails/grand-opening/grand-opening-grand-opening-dhankuber.webp",
    alt: "Dhankuber grand opening reel thumbnail",
    services: ["Reels", "Branding", "Paid Ads"],
    metric: { value: "+212%", label: "Profile visits" },
    order: 2
  },
  {
    id: 3,
    index: "03",
    slug: "mahendra-thal-montage",
    client: "Mahendra Thal",
    title: "A signature thali, framed cinematically",
    summary:
      "Cinematic montage and speed-ramp edits that translate the experience of a heritage thali into scroll-stopping, appetite-driving short form.",
    image: "/reels/thumbnails/montage/montage-mahendra-thal.webp",
    alt: "Mahendra Thal cinematic montage reel thumbnail",
    services: ["Cinematic", "Reels", "Food Styling"],
    metric: { value: "3.2M", label: "Video views" },
    order: 3
  },
  {
    id: 4,
    index: "04",
    slug: "verve-story-series",
    client: "Verve",
    title: "A daily story sequence that kept the brand top-of-mind",
    summary:
      "A repeatable 9:16 story framework for announcements and daily touchpoints — consistent, on-brand, and built to be produced at volume.",
    image: "/stories/verve-stories-1.jpg",
    alt: "Verve story sequence still",
    services: ["Stories", "Branding", "Content System"],
    metric: { value: "38%", label: "Story completion" },
    order: 4
  },
  {
    id: 5,
    index: "05",
    slug: "pazz-coming-soon",
    client: "Pazz",
    title: "A coming-soon push that built a waitlist",
    summary:
      "A suspense-led teaser sequence that turned an unopened venue into demand — momentum captured and converted the moment the brand went live.",
    image: "/reels/thumbnails/grand-opening/grand-opening-pazz-coming-soon.webp",
    alt: "Pazz coming soon teaser reel thumbnail",
    services: ["Teaser Campaign", "Reels", "Paid Ads"],
    metric: { value: "9.1K", label: "Pre-launch follows" },
    order: 5
  },
  {
    id: 6,
    index: "06",
    slug: "twilight-brew-reviews",
    client: "Twilight Brew",
    title: "Turning real reviews into social proof",
    summary:
      "A feed system that reframes customer reviews as polished, shareable proof points — building trust and recall across the menu.",
    image: "/posts/reviews/review-twilight-brew.webp",
    alt: "Twilight Brew review post design",
    services: ["Posts", "Social Proof", "Feed Design"],
    metric: { value: "4.7x", label: "Saves vs. baseline" },
    order: 6
  }
];

export const sortedCaseStudies = [...caseStudies].sort((a, b) => a.order - b.order);
