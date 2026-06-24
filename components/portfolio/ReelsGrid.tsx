import ReelCard from "@/components/portfolio/ReelCard";
import { reelCategories, reels } from "@/data/reels";

function categoryId(category: string) {
  return category.toLowerCase().replaceAll(" ", "-");
}

export default function ReelsGrid() {
  const groupedReels = reelCategories
    .map((category) => ({
      category,
      items: reels.filter((reel) => reel.category === category)
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="space-y-24">
      {groupedReels.map((group, index) => (
        <section key={group.category} id={categoryId(group.category)} className="scroll-mt-28">
          <div className="mb-8 grid gap-5 border-b border-voya-border pb-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-voya-electric">
                {String(index + 1).padStart(2, "0")} / Reel Section
              </p>
              <h3 className="mt-2 font-display text-3xl font-black text-slate-950 md:text-4xl">
                {group.category}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-16 bg-voya-royal/40" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-voya-muted">
                {group.items.length} videos
              </p>
            </div>
          </div>

          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {group.items.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
