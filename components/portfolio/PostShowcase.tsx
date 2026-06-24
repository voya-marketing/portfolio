import { useEffect, useState } from "react";
import { posts } from "@/data/posts";

export default function PostShowcase() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % posts.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const post = posts[idx];

  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl border border-voya-border shadow-[0_22px_60px_rgba(0,85,255,0.14)]">
      <img
        src={post.image}
        alt={post.alt}
        className="h-full w-full object-cover"
        style={{ opacity: fade ? 1 : 0, transition: "opacity 0.4s ease" }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/70 to-transparent" />
      <div
        className="absolute inset-x-3 bottom-3"
        style={{ opacity: fade ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        <p className="truncate text-[10px] font-semibold leading-tight text-white drop-shadow-lg">
          {post.title}
        </p>
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
          {post.category}
        </p>
      </div>
    </div>
  );
}
