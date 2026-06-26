import { Folder } from "lucide-react";
import { reelCategories } from "@/data/reels";

const categoryEffects: Record<(typeof reelCategories)[number], string[]> = {
  "Grand Opening": ["\uD83C\uDF89", "\uD83D\uDCE3", "\u2728"],
  Montage: ["\uD83C\uDFAC", "\u2702", "\uD83C\uDF9E"],
  Cinematic: ["\uD83C\uDFA5", "\uD83C\uDF9E", "\uD83C\uDFAD"],
  Conceptual: ["\uD83D\uDCA1", "\uD83E\uDDE0", "\uD83D\uDCD0"],
  Funny: ["\uD83D\uDE02", "\uD83E\uDD23", "\uD83D\uDE04"],
  "Meme Based": ["\uD83D\uDE06", "\uD83D\uDD25", "\uD83D\uDCAC"],
  "Speed Ramp": ["\u26A1", "\uD83D\uDE80", "\uD83D\uDCA8"],
  "AI Based": ["\uD83E\uDD16", "\u2699", "\u2728"],
  "Music Based": ["\uD83C\uDFB5", "\uD83C\uDFA7", "\uD83D\uDD0A"],
  Product: ["\uD83D\uDCE6", "\uD83D\uDED2", "\u2B50"],
  Review: ["\u2B50", "\uD83D\uDCDD", "\uD83D\uDC4D"],
  Informative: ["\uD83D\uDCDA", "\u2139", "\uD83E\uDDFE"],
  "Marketing Concept": ["\uD83D\uDCC8", "\uD83C\uDFAF", "\uD83D\uDCA1"]
};

const iconPositions = [
  "left-8 -top-2",
  "left-[48%] -top-5 [animation-delay:110ms]",
  "right-10 -top-2 [animation-delay:220ms]"
];

export default function ReelCategoryGrid() {
  return (
    <div className="mb-14 grid gap-x-6 gap-y-7 overflow-visible sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {reelCategories.map((category) => (
        <a
          key={category}
          href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
          className="reel-category-card group relative flex min-h-20 items-center overflow-visible rounded-lg border border-blue-100 bg-slate-100 px-6 text-slate-950 transition duration-300 hover:-translate-y-1 hover:border-voya-royal hover:bg-blue-50 hover:shadow-[0_14px_35px_rgba(0,85,255,0.12)]"
        >
          {categoryEffects[category].map((icon, index) => (
            <span
              key={`${category}-${icon}`}
              aria-hidden="true"
              className={`reel-pop-icon pointer-events-none absolute z-20 text-4xl opacity-0 drop-shadow-[0_10px_18px_rgba(0,85,255,0.24)] saturate-200 ${iconPositions[index]}`}
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
