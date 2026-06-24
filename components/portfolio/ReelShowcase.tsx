import { useEffect, useState } from "react";
import { reels } from "@/data/reels";

const CYCLE_INTERVAL = 3500;

export default function ReelShowcase() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % reels.length);
        setVisible(true);
      }, 300);
    }, CYCLE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const reel = reels[index];

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-voya-border bg-voya-panel shadow-[0_32px_80px_rgba(0,85,255,0.18)]">
      <img
        src={reel.thumbnail}
        alt={reel.alt}
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

      <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col gap-1">
        {reels.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Jump to reel ${i + 1}`}
            onClick={() => {
              setVisible(false);
              setTimeout(() => { setIndex(i); setVisible(true); }, 300);
            }}
            className={`h-1 w-1 rounded-full transition-all duration-300 ${
              i === index ? "scale-150 bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
