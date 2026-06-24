import { useEffect, useRef, useState } from "react";
import { reels } from "@/data/reels";

const OUTRO_CUT = 3; // seconds trimmed from the end of every reel

export default function ReelShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const advancedRef = useRef(false);
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(reels[0].title);
  const [visible, setVisible] = useState(true);

  function advance() {
    if (advancedRef.current) return;
    advancedRef.current = true;

    // fade out title, then switch
    setVisible(false);
    setTimeout(() => {
      setIndex((i) => (i + 1) % reels.length);
    }, 300);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    advancedRef.current = false;
    const reel = reels[index];
    setTitle(reel.title);
    setVisible(true);

    video.src = reel.videoUrl;
    video.load();
    video.play().catch(() => {});

    function onTimeUpdate() {
      if (
        !isNaN(video!.duration) &&
        video!.duration > OUTRO_CUT &&
        video!.currentTime >= video!.duration - OUTRO_CUT
      ) {
        advance();
      }
    }

    function onEnded() {
      advance();
    }

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, [index]);

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-voya-border bg-voya-panel shadow-[0_32px_80px_rgba(0,85,255,0.18)]">
      <video
        ref={videoRef}
        muted
        playsInline
        className="h-full w-full object-cover"
        aria-label={`Reel: ${title}`}
      />

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/80 to-transparent" />

      {/* Title + counter */}
      <div
        className="absolute inset-x-4 bottom-5 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <p className="truncate text-sm font-semibold text-white drop-shadow-lg">{title}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
          {String(index + 1).padStart(2, "0")} / {String(reels.length).padStart(2, "0")}
        </p>
      </div>

      {/* Progress dots (shows current reel position in a compact strip) */}
      <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col gap-1">
        {reels.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Jump to reel ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 w-1 rounded-full transition-all duration-300 ${
              i === index ? "scale-150 bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
