import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const PLAYLISTS_CONFIG_PATH = path.join(ROOT, "data", "video-playlists.json");
const OUTPUT_PATH = path.join(ROOT, "data", "generated", "video-gallery.json");

const apiKey = process.env.YOUTUBE_API_KEY;

if (!apiKey) {
  console.error(
    "[video-gallery] Missing YOUTUBE_API_KEY in environment."
  );
  process.exit(1);
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function youtube(endpoint, params) {
  const url = new URL(`https://www.googleapis.com/youtube/v3/${endpoint}`);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }

  url.searchParams.set("key", apiKey);

  const response = await fetch(url);

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `[video-gallery] YouTube API error for ${endpoint} (${response.status}): ${body}`
    );
  }

  return response.json();
}

function chunk(array, size) {
  const result = [];
  for (let index = 0; index < array.length; index += size) {
    result.push(array.slice(index, index + size));
  }
  return result;
}

function pickThumbnail(thumbnails, videoId) {
  return (
    thumbnails?.maxres?.url ??
    thumbnails?.standard?.url ??
    thumbnails?.high?.url ??
    thumbnails?.medium?.url ??
    thumbnails?.default?.url ??
    (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null)
  );
}

async function getAllPlaylistItems(playlistId) {
  const items = [];
  let pageToken = undefined;

  do {
    const data = await youtube("playlistItems", {
      part: "snippet,contentDetails,status",
      playlistId,
      maxResults: 50,
      pageToken,
    });

    items.push(...(data.items ?? []));
    pageToken = data.nextPageToken;
  } while (pageToken);

  return items;
}

async function getVideoDetails(videoIds) {
  const detailsMap = new Map();

  for (const group of chunk(videoIds, 50)) {
    const data = await youtube("videos", {
      part: "snippet,status,contentDetails",
      id: group.join(","),
    });

    for (const item of data.items ?? []) {
      detailsMap.set(item.id, item);
    }
  }

  return detailsMap;
}

function normalizeVideo(playlistItem, detailsMap) {
  const videoId = playlistItem?.contentDetails?.videoId;

  if (!videoId) {
    return null;
  }

  const details = detailsMap.get(videoId);

  if (!details) {
    return null;
  }

  if (details?.status?.privacyStatus === "private") {
    return null;
  }

  if (details?.status?.embeddable === false) {
    return null;
  }

  const title =
    details?.snippet?.title ??
    playlistItem?.snippet?.title ??
    "Untitled video";

  if (title === "Deleted video" || title === "Private video") {
    return null;
  }

  return {
    id: videoId,
    title,
    description:
      details?.snippet?.description ??
      playlistItem?.snippet?.description ??
      "",
    thumbnail: pickThumbnail(
      details?.snippet?.thumbnails ?? playlistItem?.snippet?.thumbnails,
      videoId
    ),
    embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
    watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
    publishedAt: details?.snippet?.publishedAt ?? null,
    duration: details?.contentDetails?.duration ?? null,
    playlistItemPosition:
      typeof playlistItem?.snippet?.position === "number"
        ? playlistItem.snippet.position
        : 0,
  };
}

async function buildSection(sectionConfig) {
  const playlistItems = await getAllPlaylistItems(sectionConfig.playlistId);

  const videoIds = playlistItems
    .map((item) => item?.contentDetails?.videoId)
    .filter(Boolean);

  const detailsMap = await getVideoDetails(videoIds);

  const videos = playlistItems
    .map((item) => normalizeVideo(item, detailsMap))
    .filter(Boolean)
    .sort((a, b) => a.playlistItemPosition - b.playlistItemPosition);

return {
  id: sectionConfig.id,
  title: sectionConfig.title,
  layout:
    sectionConfig.layout === "landscape" ? "landscape" : "portrait",
  playlistId: sectionConfig.playlistId,
  videos,
};
}

async function main() {
  const sectionsConfig = await readJson(PLAYLISTS_CONFIG_PATH);

  if (!Array.isArray(sectionsConfig)) {
    throw new Error("[video-gallery] data/video-playlists.json must be an array.");
  }

  const output = [];

  for (const sectionConfig of sectionsConfig) {
    if (!sectionConfig?.id || !sectionConfig?.title || !sectionConfig?.playlistId) {
      throw new Error(
        `[video-gallery] Invalid section config: ${JSON.stringify(sectionConfig)}`
      );
    }

    const section = await buildSection(sectionConfig);
    output.push(section);
  }

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");

  console.log(
    `[video-gallery] Generated ${output.length} sections in ${OUTPUT_PATH}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});