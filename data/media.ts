// ── Hostinger media host ─────────────────────────────────────────────────
// Single source of truth for where reels / stories / posts are streamed from.
// Swap this ONE line to your real domain and every media URL updates.
export const MEDIA_BASE = "https://veolve.com/voya-portfolio";

/** Build a reel URL, e.g. reelUrl("ai_based_reels", 1) → .../reels/ai_based_reels/1.mp4 */
export const reelUrl = (folder: string, n: number) =>
  `${MEDIA_BASE}/reels/${folder}/${n}.mp4`;

/** Build a URL for any media path, e.g. mediaUrl("stories/1.mp4"). */
export const mediaUrl = (path: string) => `${MEDIA_BASE}/${path}`;
