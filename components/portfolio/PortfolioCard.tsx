import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import type { PortfolioItem } from "@/data/portfolio";

export default function PortfolioCard({
  item,
  featured = false
}: Readonly<{
  item: PortfolioItem;
  featured?: boolean;
}>) {
  return (
    <article
      id={item.slug}
      className={`group ${featured ? "md:grid md:grid-cols-12 md:items-center md:gap-10" : ""}`}
    >
      <div
        className={`relative overflow-hidden border border-voya-border bg-voya-panel transition duration-500 shadow-[0_18px_50px_rgba(0,85,255,0.08)] group-hover:border-voya-electric/80 group-hover:shadow-[0_22px_60px_rgba(0,85,255,0.16)] ${
          featured ? "md:col-span-7" : ""
        } ${item.aspect === "vertical" ? "aspect-[9/16]" : item.aspect === "square" ? "aspect-square" : "aspect-[16/9]"}`}
      >
        <div className="media-shine absolute inset-0 z-10" />
        {item.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={item.image}
            aria-label={item.alt}
            className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          >
            <source src={item.video} type="video/mp4" />
          </video>
        ) : (
          <img
            alt={item.alt}
            className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            src={item.image}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 border border-voya-border bg-white/85 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-voya-royal backdrop-blur-md">
          <Play aria-hidden="true" size={12} fill="currentColor" />
          {item.format}
        </div>
      </div>

      <div className={`mt-6 ${featured ? "md:col-span-5 md:mt-0" : ""}`}>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-voya-muted">
          {item.index} // {item.category}
        </p>
        <h3 className="mt-3 font-display text-3xl font-black leading-tight text-slate-950 md:text-5xl">
          {item.title}
        </h3>
        <p className="mt-5 text-base leading-7 text-voya-muted">{item.description}</p>
        <Link
          to={`/portfolio/${item.slug}`}
          className="mt-7 inline-flex items-center gap-3 border border-voya-royal bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-voya-royal transition hover:border-voya-electric hover:text-voya-electric"
        >
          View Category
          <ArrowUpRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </article>
  );
}
