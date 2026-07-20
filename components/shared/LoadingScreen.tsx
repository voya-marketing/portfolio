import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Agency-style intro preloader (ported from the main VOYA website): the VOYA
// mark, a tagline, and a progress counter that fills then lifts the curtain to
// reveal the site. Colors are the main site's exact tokens so both loaders match.
const TAGLINE = "#1 Digital Marketing Agency in Ahmedabad";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 400 : 1900;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setShow(false), reduce ? 0 : 400);
      }
    };

    raf = requestAnimationFrame(tick);
    document.body.style.overflow = "hidden";

    return () => cancelAnimationFrame(raf);
  }, []);

  // Release the scroll lock the moment the curtain starts lifting.
  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#f9f9f9]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(20,24,26,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,24,26,0.06) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 50% 30%, #000 40%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 30%, #000 40%, transparent 100%)"
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#459de0]/10 blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center px-8"
          >
            <img
              src="/voya_logo_black.svg"
              alt="VOYA Marketing"
              className="h-16 w-auto object-contain md:h-20"
            />

            <p className="mt-6 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-[#767a7e]">
              {TAGLINE}
            </p>

            {/* Progress */}
            <div className="mt-9 h-[3px] w-56 overflow-hidden rounded-full bg-[#eeeef0]">
              <div
                className="h-full rounded-full bg-[#459de0]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-3 text-sm font-bold tabular-nums text-[#16181a]">
              {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
