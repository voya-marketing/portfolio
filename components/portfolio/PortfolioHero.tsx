import { ArrowDown } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";
import ReelShowcase from "@/components/portfolio/ReelShowcase";
import PostShowcase from "@/components/portfolio/PostShowcase";
import StoryShowcase from "@/components/portfolio/StoryShowcase";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-20 md:px-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,85,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,85,255,0.06)_1px,transparent_1px)] bg-[size:96px_96px] opacity-60" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-voya-royal/10 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] items-center gap-10 py-20 md:grid-cols-[1fr_auto]">
        {/* Left — text + CTA */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-voya-electric">
            VOYA Marketing Portfolio
          </p>
          <h1 className="mt-7 max-w-5xl font-display text-5xl font-black leading-[0.9] tracking-normal sm:text-6xl md:text-8xl lg:text-9xl">
            Cinematic marketing assets.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-voya-muted">
            A premium portfolio for short-form reels, social posts, and story
            sequences built for modern brand attention.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 [&>a]:w-full [&>a]:justify-center [&>a]:gap-2 [&>a]:whitespace-nowrap [&>a]:px-3 [&>a]:text-[10px] [&>a]:tracking-[0.1em] sm:flex sm:flex-row sm:gap-4 sm:[&>a]:w-auto sm:[&>a]:gap-3 sm:[&>a]:whitespace-normal sm:[&>a]:px-6 sm:[&>a]:text-[11px] sm:[&>a]:tracking-[0.2em]">
            <MagneticButton href="#selects">Explore Selects</MagneticButton>
            <MagneticButton href="/portfolio/reels" variant="secondary">
              View Library
            </MagneticButton>
          </div>
        </div>

        {/* Right — 3 media cards */}
        <div className="hidden md:flex md:gap-5">
          {/* Reel showcase — cycles all 39 reels */}
          <div className="w-[185px] shrink-0 md:w-[220px]">
            <div className="mt-16">
              <ReelShowcase />
            </div>
          </div>

          {/* Posts + Stories stacked */}
          <div className="flex w-[185px] shrink-0 flex-col gap-4 md:w-[220px]">
            <PostShowcase />
            <StoryShowcase />
          </div>
        </div>
      </div>

      <a
        href="#selects"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500 transition hover:text-voya-royal md:inline-flex"
      >
        Scroll
        <ArrowDown aria-hidden="true" size={15} />
      </a>
    </section>
  );
}
