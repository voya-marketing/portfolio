import { mediaUrl } from "@/data/media";

// The Hostinger inventory carries no sub-categories (files are just numbered),
// so stories live under a single group.
export const storyCategories = ["Stories"] as const;

export type StoryCategory = (typeof storyCategories)[number];

export type StoryItem = {
  id: number;
  title: string;
  slug: string;
  category: StoryCategory;
  type: "video" | "image";
  /** Hostinger streaming / image URL. */
  src: string;
  /** Optional poster for video stories (none in the current inventory). */
  thumbnail?: string;
  alt: string;
};

// Hostinger inventory: stories/1..11 — type inferred from the file extension.
const files = [
  "1.mp4",
  "2.mp4",
  "3.mp4",
  "4.mp4",
  "5.mp4",
  "6.jpg",
  "7.jpg",
  "8.mp4",
  "9.mp4",
  "10.jpg",
  "11.jpg"
];

export const stories: StoryItem[] = files.map((file, i) => {
  const n = i + 1;
  const isVideo = file.endsWith(".mp4");
  return {
    id: n,
    title: `Story ${String(n).padStart(2, "0")}`,
    slug: `story-${n}`,
    category: "Stories",
    type: isVideo ? "video" : "image",
    src: mediaUrl(`stories/${file}`),
    alt: `Story ${n}`
  };
});
