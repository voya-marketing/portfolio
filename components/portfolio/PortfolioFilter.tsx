import { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import PostCategoryGrid from "@/components/portfolio/PostCategoryGrid";
import PostsGrid from "@/components/portfolio/PostsGrid";
import ReelCategoryGrid from "@/components/portfolio/ReelCategoryGrid";
import ReelsGrid from "@/components/portfolio/ReelsGrid";
import StoriesGrid from "@/components/portfolio/StoriesGrid";
import { portfolioCategories, portfolioItems } from "@/data/portfolio";

type PortfolioCategory = (typeof portfolioCategories)[number];

const slugToCategory: Record<string, PortfolioCategory> = {
  all: "All",
  reels: "Reels",
  posts: "Posts",
  stories: "Stories"
};

export default function PortfolioFilter() {
  const { category: slug } = useParams<{ category: string }>();
  const activeCategory: PortfolioCategory = slugToCategory[slug ?? "reels"] ?? "Reels";

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <nav
        className="mb-12 flex w-full gap-1 rounded-full border border-blue-100 bg-white/85 p-1.5 shadow-[0_18px_48px_rgba(0,85,255,0.1)] backdrop-blur-xl sm:w-fit"
        aria-label="Portfolio filters"
      >
        {portfolioCategories.map((category) => {
          const categorySlug = category.toLowerCase();
          const isActive = activeCategory === category;
          return (
            <Link
              key={category}
              to={`/portfolio/${categorySlug}`}
              className={`flex-1 rounded-full px-2 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.12em] transition sm:flex-none sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.18em] ${
                isActive
                  ? "bg-gradient-to-r from-voya-royal to-voya-electric text-white shadow-[0_12px_28px_rgba(0,85,255,0.22)]"
                  : "text-slate-600 hover:bg-blue-50 hover:text-voya-royal"
              }`}
            >
              {category}
            </Link>
          );
        })}
      </nav>

      {activeCategory === "Reels" ? (
        <>
          <ReelCategoryGrid />
          <ReelsGrid />
        </>
      ) : activeCategory === "Posts" ? (
        <>
          <PostCategoryGrid />
          <PostsGrid />
        </>
      ) : activeCategory === "Stories" ? (
        <StoriesGrid />
      ) : (
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
