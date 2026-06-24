import { execFile } from "node:child_process";
import { copyFile, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import ffprobeStatic from "ffprobe-static";
import sharp from "sharp";

const execFileAsync = promisify(execFile);

const sourceRoot = "E:\\reels for websites";
const projectRoot = process.cwd();
const videosRoot = path.join(projectRoot, "public", "reels", "videos");
const thumbnailsRoot = path.join(projectRoot, "public", "reels", "thumbnails");
const tempRoot = path.join(thumbnailsRoot, "_tmp");
const dataPath = path.join(projectRoot, "data", "reels.ts");

const categoryOrder = [
  "Grand Opening",
  "Montage",
  "Funny",
  "Music Based",
  "AI Based Reel",
  "Meme Based",
  "Conceptual reels",
  "Speed Ramp",
  "Cinematic"
];

const folderToCategory = new Map([
  ["AI Based Reel", "AI Based Reel"],
  ["Cinematic", "Cinematic"],
  ["Conceptual reels", "Conceptual reels"],
  ["Funny", "Funny"],
  ["Grand Opening", "Grand Opening"],
  ["Meme Based", "Meme Based"],
  ["Montage", "Montage"],
  ["Music Based_", "Music Based"],
  ["Speed Ramp", "Speed Ramp"]
]);

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function titleFromFile(fileName) {
  return path
    .parse(fileName)
    .name
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "0:00";
  }

  const total = Math.round(seconds);
  const minutes = Math.floor(total / 60);
  const remainder = String(total % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

async function getDuration(videoPath) {
  const { stdout } = await execFileAsync(ffprobeStatic.path, [
    "-v",
    "error",
    "-show_entries",
    "format=duration",
    "-of",
    "default=noprint_wrappers=1:nokey=1",
    videoPath
  ]);

  return Number.parseFloat(stdout.trim());
}

async function extractFrame(videoPath, framePath, timestamp) {
  await execFileAsync(ffmpegInstaller.path, [
    "-y",
    "-ss",
    String(timestamp),
    "-i",
    videoPath,
    "-frames:v",
    "1",
    "-vf",
    "scale=720:-1",
    "-q:v",
    "3",
    framePath
  ]);
}

async function scoreFrame(framePath) {
  const stats = await sharp(framePath).stats();
  const rgb = stats.channels.slice(0, 3);
  const brightness = rgb.reduce((sum, channel) => sum + channel.mean, 0) / rgb.length;
  const contrast = rgb.reduce((sum, channel) => sum + channel.stdev, 0) / rgb.length;
  const range = rgb.reduce((sum, channel) => sum + (channel.max - channel.min), 0) / rgb.length;
  const exposurePenalty = Math.abs(brightness - 128) * 0.25;

  return contrast * 2 + range * 0.18 - exposurePenalty;
}

async function createBestThumbnail(videoPath, thumbnailPath, slug, duration) {
  const ratios = [0.18, 0.32, 0.5, 0.68, 0.82];
  const candidates = [];

  for (const ratio of ratios) {
    const timestamp = Math.max(0.15, Math.min(duration * ratio, duration - 0.15));
    const framePath = path.join(tempRoot, `${slug}-${Math.round(ratio * 100)}.jpg`);

    try {
      await extractFrame(videoPath, framePath, timestamp);
      candidates.push({
        path: framePath,
        score: await scoreFrame(framePath)
      });
    } catch (error) {
      console.warn(`Could not sample ${videoPath} at ${timestamp}s: ${error.message}`);
    }
  }

  if (candidates.length === 0) {
    throw new Error(`No thumbnail frames could be extracted for ${videoPath}`);
  }

  candidates.sort((a, b) => b.score - a.score);
  await sharp(candidates[0].path)
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(thumbnailPath);
}

async function main() {
  await mkdir(videosRoot, { recursive: true });
  await mkdir(thumbnailsRoot, { recursive: true });
  await rm(tempRoot, { recursive: true, force: true });
  await mkdir(tempRoot, { recursive: true });

  const folders = await readdir(sourceRoot, { withFileTypes: true });
  const items = [];
  const usedSlugs = new Set();

  for (const folder of folders) {
    if (!folder.isDirectory()) {
      continue;
    }

    const category = folderToCategory.get(folder.name);
    if (!category) {
      console.warn(`Skipping unknown folder: ${folder.name}`);
      continue;
    }

    const categorySlug = slugify(category);
    const sourceFolder = path.join(sourceRoot, folder.name);
    const destinationFolder = path.join(videosRoot, categorySlug);
    const thumbnailFolder = path.join(thumbnailsRoot, categorySlug);
    await mkdir(destinationFolder, { recursive: true });
    await mkdir(thumbnailFolder, { recursive: true });

    const files = (await readdir(sourceFolder, { withFileTypes: true }))
      .filter((file) => file.isFile() && [".mp4", ".mov", ".m4v", ".webm"].includes(path.extname(file.name).toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));

    for (const file of files) {
      const sourcePath = path.join(sourceFolder, file.name);
      const title = titleFromFile(file.name);
      const baseSlug = slugify(`${category}-${title}`) || `reel-${items.length + 1}`;
      let slug = baseSlug;
      let counter = 2;

      while (usedSlugs.has(slug)) {
        slug = `${baseSlug}-${counter}`;
        counter += 1;
      }

      usedSlugs.add(slug);

      const extension = path.extname(file.name).toLowerCase();
      const videoFileName = `${slug}${extension}`;
      const thumbnailFileName = `${slug}.webp`;
      const destinationPath = path.join(destinationFolder, videoFileName);
      const thumbnailPath = path.join(thumbnailFolder, thumbnailFileName);
      const durationSeconds = await getDuration(sourcePath);

      console.log(`Importing ${category} / ${title}`);
      await copyFile(sourcePath, destinationPath);
      await createBestThumbnail(sourcePath, thumbnailPath, slug, durationSeconds);

      items.push({
        id: items.length + 1,
        title,
        slug,
        category,
        duration: formatDuration(durationSeconds),
        thumbnail: `/reels/thumbnails/${categorySlug}/${thumbnailFileName}`,
        videoUrl: `/reels/videos/${categorySlug}/${videoFileName}`,
        alt: `${title} reel thumbnail`
      });
    }
  }

  items.sort((a, b) => {
    const categoryDifference = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
    return categoryDifference || a.title.localeCompare(b.title);
  });

  items.forEach((item, index) => {
    item.id = index + 1;
  });

  const dataFile = `export const reelCategories = ${JSON.stringify(categoryOrder, null, 2)} as const;

export type ReelCategory = (typeof reelCategories)[number];

export type ReelItem = {
  id: number;
  title: string;
  slug: string;
  category: ReelCategory;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  alt: string;
};

export const reels: ReelItem[] = ${JSON.stringify(items, null, 2)};
`;

  await writeFile(dataPath, dataFile);
  await rm(tempRoot, { recursive: true, force: true });

  console.log(`Imported ${items.length} reels.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
