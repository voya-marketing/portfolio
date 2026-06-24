import { Pause, Play, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ReelItem } from "@/data/reels";

// ── YouTube IFrame API types (subset) ──────────────────────────────────────
declare global {
  interface Window {
    YT: {
      Player: new (
        el: HTMLElement,
        opts: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (e: { target: YTPlayer }) => void;
            onStateChange?: (e: { data: number }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  stopVideo(): void;
  mute(): void;
  unMute(): void;
  destroy(): void;
}

let ytApiPromise: Promise<void> | null = null;
function loadYTApi(): Promise<void> {
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    if (window.YT?.Player) { resolve(); return; }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { prev?.(); resolve(); };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(s);
  });
  return ytApiPromise;
}

// ── Custom event to coordinate playback across cards ──────────────────────
type ReelPlayEvent = CustomEvent<{ slug: string }>;

function announcePlay(slug: string) {
  window.dispatchEvent(new CustomEvent("voya-reel-play", { detail: { slug } }));
}

// ── YouTube player card ────────────────────────────────────────────────────
function YouTubeCard({ reel }: { reel: ReelItem }) {
  const playerDivRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    function onOther(e: Event) {
      const slug = (e as ReelPlayEvent).detail.slug;
      if (slug !== reel.slug) {
        playerRef.current?.pauseVideo();
        setPlaying(false);
      }
    }
    window.addEventListener("voya-reel-play", onOther);
    return () => window.removeEventListener("voya-reel-play", onOther);
  }, [reel.slug]);

  useEffect(() => {
    if (!started || !playerDivRef.current) return;
    let destroyed = false;

    loadYTApi().then(() => {
      if (destroyed || !playerDivRef.current) return;
      playerRef.current = new window.YT.Player(playerDivRef.current, {
        videoId: reel.youtubeId!,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (e) => {
            setReady(true);
            e.target.playVideo();
          },
          onStateChange: (e) => {
            const s = window.YT.PlayerState;
            setPlaying(e.data === s.PLAYING);
          },
        },
      });
    });

    return () => {
      destroyed = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [started, reel.youtubeId]);

  function handleStart() {
    announcePlay(reel.slug);
    setStarted(true);
  }

  function togglePlay() {
    if (playing) playerRef.current?.pauseVideo();
    else playerRef.current?.playVideo();
  }

  function toggleMute() {
    if (muted) { playerRef.current?.unMute(); setMuted(false); }
    else { playerRef.current?.mute(); setMuted(true); }
  }

  function handleClose() {
    setStarted(false);
    setReady(false);
    setPlaying(false);
  }

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-voya-border bg-voya-panel shadow-[0_18px_50px_rgba(0,85,255,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:border-voya-electric/80 group-hover:shadow-[0_22px_60px_rgba(0,85,255,0.16)]">

      {/* YouTube player div (rendered only when started) */}
      {started && (
        <div ref={playerDivRef} className="absolute inset-0 z-0 h-full w-full [&_iframe]:h-full [&_iframe]:w-full" />
      )}

      {/* Thumbnail (shown before started) */}
      {!started && (
        <>
          <img src={reel.thumbnail} alt={reel.alt} className="h-full w-full object-cover" loading="lazy" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />
          <button
            type="button"
            onClick={handleStart}
            className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-transparent"
            aria-label={`Play ${reel.title}`}
          >
            <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white">
              <Play aria-hidden="true" size={22} fill="currentColor" />
            </span>
          </button>
          <div className="pointer-events-none absolute inset-x-4 bottom-4 z-20">
            <p className="truncate text-sm font-semibold text-white drop-shadow-lg">{reel.title}</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">{reel.duration}</p>
          </div>
        </>
      )}

      {/* Custom controls (shown once player is ready) */}
      {started && ready && (
        <div className="absolute inset-x-4 bottom-4 z-30 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white"
            aria-label={playing ? `Pause ${reel.title}` : `Play ${reel.title}`}
          >
            {playing ? <Pause aria-hidden="true" size={22} /> : <Play aria-hidden="true" size={22} fill="currentColor" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white"
            aria-label={muted ? `Unmute ${reel.title}` : `Mute ${reel.title}`}
          >
            {muted ? <VolumeX aria-hidden="true" size={22} /> : <Volume2 aria-hidden="true" size={22} />}
          </button>
        </div>
      )}

      {/* Close button */}
      {started && (
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-2 top-2 z-30 inline-flex size-7 items-center justify-center rounded-full bg-slate-950/60 text-white backdrop-blur-sm transition hover:bg-slate-950"
          aria-label="Close video"
        >
          <X size={13} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

// ── Local video card (original <video> element) ────────────────────────────
function LocalVideoCard({ reel }: { reel: ReelItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    function onOther(e: Event) {
      const slug = (e as ReelPlayEvent).detail.slug;
      if (slug !== reel.slug) {
        videoRef.current?.pause();
        setIsPlaying(false);
      }
    }
    window.addEventListener("voya-reel-play", onOther);
    return () => window.removeEventListener("voya-reel-play", onOther);
  }, [reel.slug]);

  async function play() {
    announcePlay(reel.slug);
    if (!videoRef.current) return;
    videoRef.current.muted = isMuted;
    await videoRef.current.play();
    setIsPlaying(true);
  }

  function pause() {
    videoRef.current?.pause();
    setIsPlaying(false);
  }

  function toggleMute() {
    const next = !isMuted;
    setIsMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  }

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-voya-border bg-voya-panel shadow-[0_18px_50px_rgba(0,85,255,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:border-voya-electric/80 group-hover:shadow-[0_22px_60px_rgba(0,85,255,0.16)]">
      <video
        ref={videoRef}
        className="h-full w-full bg-slate-100 object-cover"
        playsInline
        preload="metadata"
        aria-label={`${reel.title} reel video`}
        onPlay={() => { announcePlay(reel.slug); setIsPlaying(true); }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={reel.localUrl} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />

      <button
        type="button"
        onClick={() => (isPlaying ? pause() : void play())}
        className="absolute inset-0 z-10 cursor-pointer bg-transparent"
        aria-label={isPlaying ? `Pause ${reel.title}` : `Play ${reel.title}`}
      />

      <div className="absolute inset-x-4 bottom-4 z-30 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); isPlaying ? pause() : void play(); }}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white"
          aria-label={isPlaying ? `Pause ${reel.title}` : `Play ${reel.title}`}
        >
          {isPlaying ? <Pause aria-hidden="true" size={22} /> : <Play aria-hidden="true" size={22} fill="currentColor" />}
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); toggleMute(); }}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/88 text-voya-royal shadow-[0_12px_32px_rgba(0,85,255,0.22)] backdrop-blur-xl transition hover:scale-105 hover:bg-voya-royal hover:text-white"
          aria-label={isMuted ? `Unmute ${reel.title}` : `Mute ${reel.title}`}
        >
          {isMuted ? <VolumeX aria-hidden="true" size={22} /> : <Volume2 aria-hidden="true" size={22} />}
        </button>
      </div>
    </div>
  );
}

// ── Public export ──────────────────────────────────────────────────────────
export default function ReelCard({ reel }: Readonly<{ reel: ReelItem }>) {
  return (
    <article id={reel.slug} className="group">
      {reel.youtubeId ? <YouTubeCard reel={reel} /> : <LocalVideoCard reel={reel} />}
    </article>
  );
}
