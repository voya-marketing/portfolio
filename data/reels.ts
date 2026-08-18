import { reelUrl } from "@/data/media";

export const reelCategories = [
  "Grand Opening",
  "Montage",
  "Cinematic",
  "Conceptual",
  "Funny",
  "Meme Based",
  "Speed Ramp",
  "AI Based",
  "Music Based",
  "Product",
  "Review",
  "Informative",
  "Marketing Concept",
  "Personal Branding"
] as const;

export type ReelCategory = (typeof reelCategories)[number];

export type ReelItem = {
  id: number;
  title: string;
  slug: string;
  category: ReelCategory;
  /** Hostinger streaming URL. */
  src: string;
  /** Optional poster image (none in the current inventory). */
  poster?: string;
  alt: string;
};

// Maps each Hostinger folder (files numbered 1..count) to a display category.
const sources: { folder: string; category: ReelCategory; count: number }[] = [
  { folder: "grand_opening_reels", category: "Grand Opening", count: 2 },
  { folder: "montage_reels", category: "Montage", count: 7 },
  { folder: "cinematic_reels", category: "Cinematic", count: 11 },
  { folder: "conceptual_reels", category: "Conceptual", count: 13 },
  { folder: "funny_reels", category: "Funny", count: 13 },
  { folder: "meme_based_reels", category: "Meme Based", count: 8 },
  { folder: "speed_ramp_reels", category: "Speed Ramp", count: 3 },
  { folder: "ai_based_reels", category: "AI Based", count: 4 },
  { folder: "music_based_reels", category: "Music Based", count: 2 },
  { folder: "product_reels", category: "Product", count: 2 },
  { folder: "review_reels", category: "Review", count: 3 },
  { folder: "Informative_reels", category: "Informative", count: 2 },
  { folder: "marketing_concept_reels", category: "Marketing Concept", count: 2 },
  { folder: "personal_branding_reels", category: "Personal Branding", count: 3 }
];

function slugBase(folder: string) {
  return folder.replace(/_reels$/, "").replaceAll("_", "-");
}

let nextId = 0;

export const reels: ReelItem[] = sources.flatMap(({ folder, category, count }) =>
  Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      id: ++nextId,
      title: `${category} ${String(n).padStart(2, "0")}`,
      slug: `${slugBase(folder)}-${n}`,
      category,
      src: reelUrl(folder, n),
      alt: `${category} reel ${n}`
    };
  })
);

// ── Featured "top reels" ────────────────────────────────────────────────────
// The nine reels shown as a grid at the top of the Reels view (above the
// category folders). Each entry is a reel `slug` — pattern: <category>-<number>,
// e.g. "cinematic-3", "funny-2". Edit / reorder this list to change which nine
// feature and in what order. (The Informative folder slugs keep a capital I.)
export const featuredReelSlugs: string[] = [
  "conceptual-1", // Hari Om — animated ringing telephone
  "funny-1", // Twilight Brew — pizza / phone skit
  "meme-based-1", // "Daaru nahi re baba, dawai" text meme
  "cinematic-1", // Café en Route — menu standee
  "ai-based-1", // Pranking our boss with AI (Ranveer)
  "personal-branding-1", // SBR Prime — office cricket matches
  "product-1", // Antique premium-look chocolate
  "montage-1", // Twilight Brew — blender pour
  "Informative-1" // Kids / event moment
];

export const featuredReels: ReelItem[] = featuredReelSlugs
  .map((slug) => reels.find((reel) => reel.slug === slug))
  .filter((reel): reel is ReelItem => Boolean(reel));
