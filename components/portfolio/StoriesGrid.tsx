import StoryCard from "@/components/portfolio/StoryCard";
import { storyCategories, stories, type StoryCategory } from "@/data/stories";

function categoryId(category: StoryCategory) {
  return `stories-${category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`;
}

export default function StoriesGrid() {
  const groupedStories = storyCategories
    .map((category) => ({
      category,
      items: stories.filter((story) => story.category === category)
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="space-y-24">
      {groupedStories.map((group, index) => (
        <section key={group.category} id={categoryId(group.category)} className="scroll-mt-28">
          <div className="mb-8 grid gap-5 border-b border-voya-border pb-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-voya-electric">
                {String(index + 1).padStart(2, "0")} / Story Section
              </p>
              <h3 className="mt-2 font-display text-3xl font-black text-slate-950 md:text-4xl">
                {group.category}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-16 bg-voya-royal/40" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-voya-muted">
                {group.items.length} {group.items.length === 1 ? "story" : "stories"}
              </p>
            </div>
          </div>

          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {group.items.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
