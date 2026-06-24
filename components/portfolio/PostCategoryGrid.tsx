import { Folder } from "lucide-react";
import { postCategories, type PostCategory } from "@/data/posts";

const categoryEffects: Record<PostCategory, string[]> = {
  Food: ["🍕", "🍽️", "🔥"],
  Festive: ["🎉", "🎊", "✨"],
  Reviews: ["⭐", "👍", "💬"],
  Trends: ["📈", "🔥", "💡"],
  Quiz: ["❓", "🧠", "💭"],
  Thoughts: ["💭", "✍️", "💡"]
};

const iconPositions = [
  "left-8 -top-2",
  "left-[48%] -top-5 [animation-delay:110ms]",
  "right-10 -top-2 [animation-delay:220ms]"
];

function categoryId(category: PostCategory) {
  return `posts-${category.toLowerCase()}`;
}

export default function PostCategoryGrid() {
  return (
    <div className="mb-14 grid gap-x-6 gap-y-7 overflow-visible sm:grid-cols-2 lg:grid-cols-3">
      {postCategories.map((category) => (
        <a
          key={category}
          href={`#${categoryId(category)}`}
          className="post-category-card group relative flex min-h-20 items-center overflow-visible rounded-lg border border-blue-100 bg-slate-100 px-6 text-slate-950 grayscale transition duration-300 hover:grayscale-0 hover:-translate-y-1 hover:border-voya-royal hover:bg-blue-50 hover:shadow-[0_14px_35px_rgba(0,85,255,0.12)]"
        >
          {categoryEffects[category].map((icon, index) => (
            <span
              key={`${category}-${icon}`}
              aria-hidden="true"
              className={`post-pop-icon pointer-events-none absolute z-20 text-4xl opacity-0 drop-shadow-[0_10px_18px_rgba(0,85,255,0.24)] saturate-200 ${iconPositions[index]}`}
            >
              {icon}
            </span>
          ))}

          <span className="relative z-10 flex min-w-0 items-center gap-4">
            <span className="inline-flex size-8 shrink-0 items-center justify-center text-slate-700 transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-voya-royal">
              <Folder aria-hidden="true" size={26} fill="currentColor" strokeWidth={1.5} />
            </span>
            <span className="text-base font-semibold leading-tight md:text-lg">{category}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
