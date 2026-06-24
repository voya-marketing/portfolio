import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReelItem } from "@/data/reels";

type ReelPlayEvent = CustomEvent<{ slug: string }>;

export default function ReelCard({ reel }: Readonly<{ reel: ReelItem }>) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    function handleOtherReelPlay(event: Event) {
      const activeSlug = (event as ReelPlayEvent).detail.slug;
      if (activeSlug !== reel.slug) setPlaying(false);
    }
    window.addEventListener("voya-reel-play", handleOtherReelPlay);
    return () => window.removeEventListener("voya-reel-play", handleOtherReelPlay);
  }, [reel.slug]);

  function handlePlay() {
    window.dispatchEvent(new CustomEvent("voya-reel-play", { detail: { slug: reel.slug } }));
    setPlaying(true);
  }

  return (
    <article id={reel.slug} className="group">
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-voya-border bg-voya-panel shadow-[0_18px_50px_rgba(0,85,255,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:border-voya-electric/80 group-hover:shadow-[0_22px_60px_rgba(0,85,255,0.16)]">
        {playing ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={reel.title}
            />
            <button
              type="button"
              onClick={() => setPlaying(false)}
              className="absolute right-2 top-2 z-20 inline-flex size-7 items-center justify-center rounded-full bg-slate-950/60 text-white backdrop-blur-sm transition hover:bg-slate-950"
              aria-label="Close video"
            >
              <X size={13} aria-hidden="true" />
            </button>
          </>
        ) : (
          <>
            <img
              src={reel.thumbnail}
              alt={reel.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />

            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-transparent"
              aria-label={`Play ${reel.title}`}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white">
                <Play aria-hidden="true" size={22} fill="currentColor" />
              </span>
            </button>

            <div className="pointer-events-none absolute inset-x-4 bottom-4 z-20">
              <p className="truncate text-sm font-semibold text-white drop-shadow-lg">{reel.title}</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">{reel.duration}</p>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
