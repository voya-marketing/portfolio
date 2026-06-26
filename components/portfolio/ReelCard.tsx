import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ReelItem } from "@/data/reels";
import { useInView } from "@/components/shared/useInView";

// ── Coordinate playback so only one reel plays at a time ────────────────────
type ReelPlayEvent = CustomEvent<{ slug: string }>;

function announcePlay(slug: string) {
  window.dispatchEvent(new CustomEvent("voya-reel-play", { detail: { slug } }));
}

const controlButton =
  "inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white";

export default function ReelCard({ reel }: Readonly<{ reel: ReelItem }>) {
  const [boxRef, inView] = useInView<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    function onOther(e: Event) {
      const slug = (e as ReelPlayEvent).detail.slug;
      if (slug !== reel.slug) {
        videoRef.current?.pause();
        setIsPlaying(false);
      }
    }
    window.addEventListener("voya-reel-play", onOther);
    return () => window.removeEventListener("voya-reel-play", onOther);
  }, [reel.slug]);

  // Scrolled out of view → the <video> below unmounts, so reset play state.
  useEffect(() => {
    if (!inView) setIsPlaying(false);
  }, [inView]);

  async function play() {
    announcePlay(reel.slug);
    if (!videoRef.current) return;
    videoRef.current.muted = isMuted;
    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      /* autoplay/availability errors are non-fatal */
    }
  }

  function pause() {
    videoRef.current?.pause();
    setIsPlaying(false);
  }

  function toggleMute() {
    const next = !isMuted;
    setIsMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  }

  return (
    <article id={reel.slug} className="group">
      <div
        ref={boxRef}
        className="relative aspect-[9/16] overflow-hidden rounded-xl border border-voya-border bg-voya-panel shadow-[0_18px_50px_rgba(0,85,255,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:border-voya-electric/80 group-hover:shadow-[0_22px_60px_rgba(0,85,255,0.16)]"
      >
        {inView ? (
          <>
            {/* Mounted only while near the viewport; preload="metadata" + #t=0.1 loads just the first frame. */}
            <video
              ref={videoRef}
              src={`${reel.src}#t=0.1`}
              className="h-full w-full bg-slate-100 object-cover"
              playsInline
              preload="metadata"
              poster={reel.poster || undefined}
              aria-label={`${reel.title} reel video`}
              onPlay={() => { announcePlay(reel.slug); setIsPlaying(true); }}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />

            {!isPlaying ? (
              <button
                type="button"
                onClick={() => void play()}
                className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-transparent"
                aria-label={`Play ${reel.title}`}
              >
                <span className={controlButton}>
                  <Play aria-hidden="true" size={22} fill="currentColor" />
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => pause()}
                className="absolute inset-0 z-10 cursor-pointer bg-transparent"
                aria-label={`Pause ${reel.title}`}
              />
            )}

            <div className="absolute inset-x-4 bottom-4 z-30 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); isPlaying ? pause() : void play(); }}
                className={controlButton}
                aria-label={isPlaying ? `Pause ${reel.title}` : `Play ${reel.title}`}
              >
                {isPlaying ? <Pause aria-hidden="true" size={22} /> : <Play aria-hidden="true" size={22} fill="currentColor" />}
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                className={controlButton}
                aria-label={isMuted ? `Unmute ${reel.title}` : `Mute ${reel.title}`}
              >
                {isMuted ? <VolumeX aria-hidden="true" size={22} /> : <Volume2 aria-hidden="true" size={22} />}
              </button>
            </div>
          </>
        ) : (
          // Off-screen: no <video>, no network — just a lightweight placeholder.
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
            <span className={controlButton}>
              <Play aria-hidden="true" size={22} fill="currentColor" />
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
