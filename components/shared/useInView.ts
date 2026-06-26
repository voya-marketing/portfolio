import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether the referenced element is in (or near) the viewport, so heavy
 * media can be mounted on approach and unmounted once it scrolls away.
 *
 * `rootMargin` adds a buffer so the element is ready slightly before it's
 * visible (no pop-in). Returns a [ref, inView] tuple.
 */
export function useInView<T extends Element>(rootMargin = "400px 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true); // unsupported environment → just show it
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView] as const;
}
