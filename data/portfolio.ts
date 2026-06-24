export type PortfolioItem = {
  id: number;
  index: string;
  title: string;
  slug: string;
  category: "Reels" | "Posts" | "Stories";
  format: string;
  description: string;
  image: string;
  video?: string;
  alt: string;
  aspect: "vertical" | "wide" | "square";
  featured?: boolean;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    index: "01",
    title: "Reels",
    slug: "reels",
    category: "Reels",
    format: "Short form",
    description:
      "High-retention social edits with strong hooks, precise captions, pacing, color, and platform-native framing.",
    image: "/reels/thumbnails/meme-based/meme-based-trend-husho-haiy.webp",
    video: "/reels/videos/meme-based/meme-based-trend-husho-haiy.mp4",
    alt: "Meme Based - Trend Husho Haiy reel thumbnail",
    aspect: "vertical",
    featured: true
  },
  {
    id: 2,
    index: "02",
    title: "Posts",
    slug: "posts",
    category: "Posts",
    format: "Feed",
    description:
      "Campaign-ready layouts for carousels, offer posts, launch creatives, quotes, proof points, and product pushes.",
    image: "/posts/food/food-peri-peri-fries.webp",
    alt: "Peri Peri Fries post design",
    aspect: "square",
    featured: true
  },
  {
    id: 3,
    index: "03",
    title: "Stories",
    slug: "stories",
    category: "Stories",
    format: "9:16 Series",
    description:
      "Sequential story videos built for launches, announcements, daily campaigns, and high-frequency brand touchpoints.",
    image: "/stories/cappuccino.jpg",
    video: "/stories/blue-lagoon.mp4",
    alt: "Blue Lagoon mojito story",
    aspect: "vertical",
    featured: true
  }
];

export const featuredPortfolioItems = portfolioItems.filter((item) => item.featured);

export const portfolioCategories = ["All", "Reels", "Posts", "Stories"] as const;

export const portfolioStats = [
  { label: "Categories", value: "03" },
  { label: "Reels", value: "9:16" },
  { label: "Posts", value: "1:1" },
  { label: "Stories", value: "9:16" }
];
