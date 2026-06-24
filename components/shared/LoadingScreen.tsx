import { useEffect, useRef, useState } from "react";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const calledDone = useRef(false);

  useEffect(() => {
    const DURATION = 2200;
    const TICK = 16;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(step);
      } else if (!calledDone.current) {
        calledDone.current = true;
        setFading(true);
        setTimeout(onDone, 600);
      }
    }

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1, pointerEvents: fading ? "none" : "auto" }}
    >
      <img
        src="/voya_logo_blue.svg"
        alt="VOYA Marketing"
        className="h-20 w-auto object-contain drop-shadow-md"
      />

      <div className="mt-10 w-56 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-1 rounded-full bg-gradient-to-r from-voya-royal to-voya-electric transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
        {progress}%
      </p>
    </div>
  );
}
