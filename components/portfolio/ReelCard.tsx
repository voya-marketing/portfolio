import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ReelItem } from "@/data/reels";

type ReelPlayEvent = CustomEvent<{ slug: string }>;

export default function ReelCard({ reel }: Readonly<{ reel: ReelItem }>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    function handleOtherReelPlay(event: Event) {
      const activeSlug = (event as ReelPlayEvent).detail.slug;

      if (activeSlug === reel.slug) {
        return;
      }

      videoRef.current?.pause();
      setIsPlaying(false);
    }

    window.addEventListener("voya-reel-play", handleOtherReelPlay);
    return () => window.removeEventListener("voya-reel-play", handleOtherReelPlay);
  }, [reel.slug]);

  function announcePlayback() {
    window.dispatchEvent(
      new CustomEvent("voya-reel-play", {
        detail: { slug: reel.slug }
      })
    );
  }

  async function playReel() {
    announcePlayback();

    if (!videoRef.current) {
      return;
    }

    videoRef.current.muted = isMuted;
    await videoRef.current.play();
    setIsPlaying(true);
  }

  function pauseReel() {
    videoRef.current?.pause();
    setIsPlaying(false);
  }

  function togglePlay() {
    if (isPlaying) {
      pauseReel();
    } else {
      void playReel();
    }
  }

  function toggleMute() {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  }

  return (
    <article id={reel.slug} className="group">
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-voya-border bg-voya-panel shadow-[0_18px_50px_rgba(0,85,255,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:border-voya-electric/80 group-hover:shadow-[0_22px_60px_rgba(0,85,255,0.16)]">
        <video
          ref={videoRef}
          className="h-full w-full bg-slate-100 object-cover"
          playsInline
          poster={reel.thumbnail}
          preload="metadata"
          aria-label={`${reel.title} reel video`}
          onPlay={() => {
            announcePlayback();
            setIsPlaying(true);
          }}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={reel.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />

        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
          aria-label={isPlaying ? `Pause ${reel.title}` : `Play ${reel.title}`}
        />

        <div className="absolute inset-x-4 bottom-4 z-30 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              togglePlay();
            }}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white"
            aria-label={isPlaying ? `Pause ${reel.title}` : `Play ${reel.title}`}
          >
            {isPlaying ? <Pause aria-hidden="true" size={22} /> : <Play aria-hidden="true" size={22} fill="currentColor" />}
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              toggleMute();
            }}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white"
            aria-label={isMuted ? `Unmute ${reel.title}` : `Mute ${reel.title}`}
          >
            {isMuted ? <VolumeX aria-hidden="true" size={22} /> : <Volume2 aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>
    </article>
  );
}
