export const storyCategories = [
  "Food & Drink",
  "Cafe Stories",
  "Turf Stories"
] as const;

export type StoryCategory = (typeof storyCategories)[number];

export type StoryItem = {
  id: number;
  title: string;
  slug: string;
  category: StoryCategory;
  type: "video" | "image";
  src: string;
  thumbnail?: string;
  alt: string;
};

export const stories: StoryItem[] = [
  {
    id: 1,
    title: "Cappuccino",
    slug: "cappuccino",
    category: "Food & Drink",
    type: "image",
    src: "/stories/cappuccino.jpg",
    alt: "Cappuccino story design"
  },
  {
    id: 2,
    title: "Mexican Hot Pot",
    slug: "mexican-hotpot",
    category: "Food & Drink",
    type: "image",
    src: "/stories/mexican-hotpot.jpg",
    alt: "Mexican Hot Pot story design"
  },
  {
    id: 3,
    title: "Blue Lagoon",
    slug: "blue-lagoon",
    category: "Food & Drink",
    type: "video",
    src: "/stories/blue-lagoon.mp4",
    alt: "Blue Lagoon story video"
  },
  {
    id: 4,
    title: "Verve Stories",
    slug: "verve-stories-1",
    category: "Food & Drink",
    type: "image",
    src: "/stories/verve-stories-1.jpg",
    alt: "Verve lifestyle story 1"
  },
  {
    id: 5,
    title: "Verve Stories",
    slug: "verve-stories-2",
    category: "Food & Drink",
    type: "image",
    src: "/stories/verve-stories-2.jpg",
    alt: "Verve lifestyle story 2"
  },
  {
    id: 6,
    title: "Story 14",
    slug: "story-14",
    category: "Food & Drink",
    type: "video",
    src: "/stories/story-14.mp4",
    alt: "Food & Drink story 14"
  },
  {
    id: 7,
    title: "Story 20",
    slug: "story-20",
    category: "Food & Drink",
    type: "video",
    src: "/stories/story-20.mp4",
    alt: "Food & Drink story 20"
  },
  {
    id: 8,
    title: "Cafe en Route",
    slug: "cafe-en-route-1",
    category: "Cafe Stories",
    type: "video",
    src: "/stories/cafe-en-route-1.mp4",
    alt: "Cafe en Route story video 1"
  },
  {
    id: 9,
    title: "Cafe en Route",
    slug: "cafe-en-route-2",
    category: "Cafe Stories",
    type: "video",
    src: "/stories/cafe-en-route-2.mp4",
    alt: "Cafe en Route story video 2"
  },
  {
    id: 10,
    title: "SBR Prime Story",
    slug: "sbr-prime-story",
    category: "Turf Stories",
    type: "video",
    src: "/stories/sbr-prime-story.mp4",
    alt: "SBR Prime turf story video"
  },
  {
    id: 11,
    title: "SBR Prime Story 2",
    slug: "sbr-prime-story-2",
    category: "Turf Stories",
    type: "video",
    src: "/stories/sbr-prime-story-2.mp4",
    alt: "SBR Prime turf story video 2"
  }
];
