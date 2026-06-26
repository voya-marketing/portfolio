import { useEffect, useRef, useState } from "react";
import { reels } from "@/data/reels";

const CYCLE_INTERVAL = 4000;

export default function ReelShowcase() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.load();
      v.play().catch(() => {});
    }

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % reels.length);
        setVisible(true);
      }, 300);
    }, CYCLE_INTERVAL);

    return () => clearTimeout(timer);
  }, [index]);

  const reel = reels[index];

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-voya-border bg-voya-panel shadow-[0_32px_80px_rgba(0,85,255,0.18)]">
      <video
        ref={videoRef}
        src={reel.src}
        muted
        loop
        playsInline
        autoPlay
        className="h-full w-full object-cover"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/80 to-transparent" />

      <div
        className="absolute inset-x-4 bottom-5 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <p className="truncate text-sm font-semibold text-white drop-shadow-lg">{reel.title}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
          {String(index + 1).padStart(2, "0")} / {String(reels.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
