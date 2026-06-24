import PostCard from "@/components/portfolio/PostCard";
import { postCategories, posts, type PostCategory } from "@/data/posts";

function categoryId(category: PostCategory) {
  return `posts-${category.toLowerCase()}`;
}

export default function PostsGrid() {
  return (
    <div className="space-y-20">
      {postCategories.map((category, index) => {
        const categoryPosts = posts.filter((post) => post.category === category);

        if (categoryPosts.length === 0) {
          return null;
        }

        return (
          <section key={category} id={categoryId(category)} className="scroll-mt-32">
            <div className="mb-8 flex flex-col gap-3 border-t border-blue-100 pt-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-voya-royal">
                  {String(index + 1).padStart(2, "0")} / Posts
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  {category}
                </h3>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                {categoryPosts.length} creatives
              </p>
            </div>

            <div className="columns-1 gap-6 sm:columns-2 xl:columns-3">
              {categoryPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
