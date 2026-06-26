import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyCard({
  item
}: Readonly<{
  item: CaseStudy;
}>) {
  return (
    <article
      id={item.slug}
      className="group flex h-full flex-col border border-voya-border bg-voya-panel shadow-[0_18px_50px_rgba(0,85,255,0.08)] transition duration-500 hover:-translate-y-1 hover:border-voya-electric/80 hover:shadow-[0_22px_60px_rgba(0,85,255,0.16)]"
    >
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-voya-surface">
        <div className="media-shine absolute inset-0 z-10" />
        <img
          alt={item.alt}
          src={item.image}
          loading="lazy"
          className="h-full w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/5 to-transparent" />

        {/* Metric badge */}
        <div className="absolute left-4 top-4 flex items-baseline gap-1.5 border border-voya-border bg-white/85 px-3 py-2 backdrop-blur-md">
          <span className="font-display text-base font-black leading-none text-voya-royal">
            {item.metric.value}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-voya-muted">
            {item.metric.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-voya-muted">
          {item.index} // {item.client}
        </p>
        <h3 className="mt-3 font-display text-2xl font-black leading-tight text-slate-950">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-voya-muted">{item.summary}</p>

        {/* Service chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {item.services.map((service) => (
            <span
              key={service}
              className="border border-voya-border bg-voya-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-voya-royal"
            >
              {service}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="mt-7 inline-flex w-fit items-center gap-2 border border-voya-royal bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-voya-royal transition hover:border-voya-electric hover:text-voya-electric"
        >
          View Case Study
          <ArrowUpRight aria-hidden="true" size={15} />
        </button>
      </div>
    </article>
  );
}
