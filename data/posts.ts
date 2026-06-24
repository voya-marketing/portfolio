export const postCategories = [
  "Food",
  "Festive",
  "Reviews",
  "Trends",
  "Quiz",
  "Thoughts"
] as const;

export type PostCategory = (typeof postCategories)[number];

export type PostItem = {
  id: number;
  title: string;
  slug: string;
  category: PostCategory;
  image: string;
  alt: string;
};

export const posts: PostItem[] = [
  {
    id: 1,
    title: "Mexican Hot Pot",
    slug: "mexican-hot-pot",
    category: "Food",
    image: "/posts/food/food-mexican-hot-pot.webp",
    alt: "Food post design for Mexican Hot Pot"
  },
  {
    id: 2,
    title: "Peri Peri Fries",
    slug: "peri-peri-fries",
    category: "Food",
    image: "/posts/food/food-peri-peri-fries.webp",
    alt: "Food post design for peri peri fries"
  },
  {
    id: 3,
    title: "Cheesy Toast",
    slug: "cheesy-toast",
    category: "Food",
    image: "/posts/food/food-enroute-toast.jpg",
    alt: "Food post design for cheesy toast"
  },
  {
    id: 4,
    title: "Dal Baati",
    slug: "dal-baati",
    category: "Food",
    image: "/posts/food/food-hariom-dal-baati.webp",
    alt: "Food post design for dal baati"
  },
  {
    id: 5,
    title: "Alfredo Pasta",
    slug: "alfredo-pasta",
    category: "Food",
    image: "/posts/food/food-alfredo-pasta.webp",
    alt: "Food post design for alfredo pasta"
  },
  {
    id: 6,
    title: "Valentines Day",
    slug: "valentines-day",
    category: "Festive",
    image: "/posts/festive/festive-valentines-day.webp",
    alt: "Festive post design for Valentines Day"
  },
  {
    id: 7,
    title: "Maha Shivaratri",
    slug: "maha-shivaratri",
    category: "Festive",
    image: "/posts/festive/festive-maha-shivaratri.webp",
    alt: "Festive post design for Maha Shivaratri"
  },
  {
    id: 8,
    title: "Cafe En Route Review",
    slug: "cafe-en-route-review",
    category: "Reviews",
    image: "/posts/reviews/review-enroute.webp",
    alt: "Review post design for Cafe En Route"
  },
  {
    id: 9,
    title: "Twilight Brew Review",
    slug: "twilight-brew-review",
    category: "Reviews",
    image: "/posts/reviews/review-twilight-brew.webp",
    alt: "Customer review post design for Twilight Brew"
  },
  {
    id: 10,
    title: "Cafe Cold Coffee Trend",
    slug: "cafe-cold-coffee-trend",
    category: "Trends",
    image: "/posts/trends/trend-cafe-cold-coffee.webp",
    alt: "Trend post design for Cafe En Route cold coffee"
  },
  {
    id: 11,
    title: "Football Trend",
    slug: "football-trend",
    category: "Trends",
    image: "/posts/trends/trend-sbr-football.webp",
    alt: "Football trend post design for SBR Prime"
  },
  {
    id: 12,
    title: "Football Quiz",
    slug: "football-quiz",
    category: "Quiz",
    image: "/posts/quiz/quiz-football.webp",
    alt: "Football quiz post design for SBR Prime"
  },
  {
    id: 13,
    title: "Football Thought",
    slug: "football-thought",
    category: "Thoughts",
    image: "/posts/thoughts/thought-football.webp",
    alt: "Football thought post design for SBR Prime"
  }
];

export const postCategorySummaries: Record<PostCategory, string> = {
  Food: "Menu highlights and product-led creatives.",
  Festive: "Seasonal greetings and occasion campaigns.",
  Reviews: "Social proof designs and testimonial posts.",
  Trends: "Timely culture-led creative concepts.",
  Quiz: "Engagement posts made for comments.",
  Thoughts: "Brand-building statements and quotes."
};
