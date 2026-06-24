import { useEffect, useRef, useState } from "react";
import { stories } from "@/data/stories";

export default function StoryShowcase() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const story = stories[idx];

    if (story.type === "video") {
      const v = videoRef.current;
      if (v) {
        v.load();
        v.play().catch(() => {});
      }
    }

    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % stories.length);
        setFade(true);
      }, 400);
    }, 3000);

    return () => clearTimeout(timer);
  }, [idx]);

  const story = stories[idx];

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-voya-border shadow-[0_22px_60px_rgba(0,85,255,0.14)]">
      <div
        className="h-full w-full"
        style={{ opacity: fade ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        {story.type === "image" ? (
          <img
            src={story.src}
            alt={story.alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            src={story.src}
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/70 to-transparent" />
      <div
        className="absolute inset-x-3 bottom-3"
        style={{ opacity: fade ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        <p className="truncate text-[10px] font-semibold leading-tight text-white drop-shadow-lg">
          {story.title}
        </p>
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
          {story.category}
        </p>
      </div>
    </div>
  );
}
