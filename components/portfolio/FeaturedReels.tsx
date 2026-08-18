import ReelCard from "@/components/portfolio/ReelCard";
import { featuredReels } from "@/data/reels";

// A curated 3×3 grid of the best reels, shown at the top of the Reels view
// (above the category folders). These are duplicates of reels that also appear
// in the grouped sections below, so each copy gets a "-top" slug to keep DOM ids
// unique and its playback independent. Edit `featuredReelSlugs` in data/reels.ts.
export default function FeaturedReels() {
  if (featuredReels.length === 0) return null;

  return (
    <section className="mb-14">
      <div className="mb-6 flex items-center gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-voya-electric">
          Featured Reels
        </p>
        <span className="h-px flex-1 bg-voya-border" />
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-voya-muted">
          {featuredReels.length} reels
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-6">
        {featuredReels.map((reel) => (
          <ReelCard key={`${reel.slug}-top`} reel={{ ...reel, slug: `${reel.slug}-top` }} />
        ))}
      </div>
    </section>
  );
}
