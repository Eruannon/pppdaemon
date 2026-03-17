import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const PLAYLISTS_CONFIG_PATH = path.join(ROOT, "data", "video-playlists.json");
const STATE_PATH =
  process.env.VIDEO_PLAYLIST_STATE_PATH ??
  path.join(ROOT, ".cache", "video-playlists-state.json");

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const VIDEO_REVALIDATE_URL = process.env.VIDEO_REVALIDATE_URL;
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

function assertRequiredEnv() {
  if (!YOUTUBE_API_KEY) {
    throw new Error("[video-playlists] Missing YOUTUBE_API_KEY in environment.");
  }

  if (!VIDEO_REVALIDATE_URL) {
    throw new Error("[video-playlists] Missing VIDEO_REVALIDATE_URL in environment.");
  }

  if (!REVALIDATE_SECRET) {
    throw new Error("[video-playlists] Missing REVALIDATE_SECRET in environment.");
  }
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function youtube(endpoint, params) {
  const url = new URL(`${YOUTUBE_API_BASE}/${endpoint}`);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }

  url.searchParams.set("key", YOUTUBE_API_KEY);

  const response = await fetch(url);

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `[video-playlists] YouTube API error for ${endpoint} (${response.status}): ${body}`,
    );
  }

  return response.json();
}

async function getPlaylistSignature(playlistId) {
  const signature = [];
  let pageToken = undefined;

  do {
    const data = await youtube("playlistItems", {
      part: "snippet,contentDetails",
      playlistId,
      maxResults: 50,
      pageToken,
    });

    for (const item of data.items ?? []) {
      const videoId =
        item?.contentDetails?.videoId ?? item?.snippet?.resourceId?.videoId ?? "missing";
      const position =
        typeof item?.snippet?.position === "number" ? item.snippet.position : signature.length;

      signature.push(`${position}:${videoId}`);
    }

    pageToken = data.nextPageToken;
  } while (pageToken);

  return signature;
}

function hashPayload(payload) {
  return createHash("sha256").update(JSON.stringify(payload)).digest("hex");
}

async function loadPreviousState() {
  try {
    return await readJson(STATE_PATH);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

async function saveState(state) {
  await fs.mkdir(path.dirname(STATE_PATH), { recursive: true });
  await fs.writeFile(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

async function triggerRevalidation() {
  const response = await fetch(VIDEO_REVALIDATE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-revalidate-secret": REVALIDATE_SECRET,
    },
    body: JSON.stringify({
      reason: "playlist-change-detected",
    }),
  });

  const body = await response.text();

  if (!response.ok) {
    throw new Error(
      `[video-playlists] Revalidation failed (${response.status}): ${body || "No body returned."}`,
    );
  }

  return body ? JSON.parse(body) : null;
}

async function main() {
  assertRequiredEnv();

  const sectionsConfig = await readJson(PLAYLISTS_CONFIG_PATH);

  if (!Array.isArray(sectionsConfig)) {
    throw new Error("[video-playlists] data/video-playlists.json must be an array.");
  }

  const snapshot = [];

  for (const sectionConfig of sectionsConfig) {
    if (!sectionConfig?.id || !sectionConfig?.playlistId) {
      throw new Error(
        `[video-playlists] Invalid section config: ${JSON.stringify(sectionConfig)}`,
      );
    }

    const signature = await getPlaylistSignature(sectionConfig.playlistId);

    snapshot.push({
      id: sectionConfig.id,
      playlistId: sectionConfig.playlistId,
      signature,
    });
  }

  const fingerprint = hashPayload(snapshot);
  const previousState = await loadPreviousState();

  if (previousState?.fingerprint === fingerprint) {
    console.log("[video-playlists] No playlist changes detected.");
    return;
  }

  const revalidationResult = await triggerRevalidation();

  await saveState({
    fingerprint,
    checkedAt: new Date().toISOString(),
    snapshot,
    revalidationResult,
  });

  console.log("[video-playlists] Playlist change detected. Revalidated /videos.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});