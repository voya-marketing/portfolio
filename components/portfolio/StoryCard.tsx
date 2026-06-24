import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import type { StoryItem } from "@/data/stories";

export default function StoryCard({ story }: Readonly<{ story: StoryItem }>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  function togglePlay() {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.muted = isMuted;
      void videoRef.current.play();
      setIsPlaying(true);
    }
  }

  function toggleMute() {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) videoRef.current.muted = nextMuted;
  }

  return (
    <article id={story.slug} className="group">
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-voya-border bg-voya-panel shadow-[0_18px_50px_rgba(0,85,255,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:border-voya-electric/80 group-hover:shadow-[0_22px_60px_rgba(0,85,255,0.16)]">
        {story.type === "video" ? (
          <>
            <video
              ref={videoRef}
              className="h-full w-full bg-slate-100 object-cover"
              playsInline
              preload="metadata"
              aria-label={story.alt}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={story.src} type="video/mp4" />
            </video>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />

            <button
              type="button"
              onClick={togglePlay}
              className="absolute inset-0 z-10 cursor-pointer bg-transparent"
              aria-label={isPlaying ? `Pause ${story.title}` : `Play ${story.title}`}
            />

            <div className="absolute inset-x-4 bottom-4 z-30 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white"
                aria-label={isPlaying ? `Pause ${story.title}` : `Play ${story.title}`}
              >
                {isPlaying ? <Pause aria-hidden="true" size={22} /> : <Play aria-hidden="true" size={22} fill="currentColor" />}
              </button>

              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white"
                aria-label={isMuted ? `Unmute ${story.title}` : `Mute ${story.title}`}
              >
                {isMuted ? <VolumeX aria-hidden="true" size={22} /> : <Volume2 aria-hidden="true" size={22} />}
              </button>
            </div>
          </>
        ) : (
          <img
            src={story.src}
            alt={story.alt}
            loading="lazy"
            className="h-full w-full bg-slate-100 object-cover transition duration-700 group-hover:scale-[1.015]"
          />
        )}
      </div>
    </article>
  );
}
