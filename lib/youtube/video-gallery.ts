import "server-only";

import type { VideoItem, VideoSection, VideoSectionLayout } from "@/components/videos/types";
import playlistsConfig from "@/data/video-playlists.json";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const VIDEO_GALLERY_CACHE_TAG = "video-gallery";
const VIDEO_GALLERY_REVALIDATE_SECONDS = 300;

type PlaylistConfig = {
  id: string;
  title: string;
  playlistId: string;
  layout?: VideoSectionLayout;
};

type ThumbnailVariant = {
  url?: string;
};

type ThumbnailSet = {
  maxres?: ThumbnailVariant;
  standard?: ThumbnailVariant;
  high?: ThumbnailVariant;
  medium?: ThumbnailVariant;
  default?: ThumbnailVariant;
};

type PlaylistItem = {
  snippet?: {
    title?: string;
    description?: string;
    position?: number;
    thumbnails?: ThumbnailSet;
    resourceId?: {
      videoId?: string;
    };
  };
  contentDetails?: {
    videoId?: string;
  };
};

type PlaylistItemsResponse = {
  items?: PlaylistItem[];
  nextPageToken?: string;
};

type VideoDetails = {
  id: string;
  snippet?: {
    title?: string;
    description?: string;
    publishedAt?: string;
    thumbnails?: ThumbnailSet;
  };
  status?: {
    privacyStatus?: string;
    embeddable?: boolean;
  };
  contentDetails?: {
    duration?: string;
  };
};

type VideosResponse = {
  items?: VideoDetails[];
};

export const videoGalleryCacheTag = VIDEO_GALLERY_CACHE_TAG;
export const videoGalleryRevalidateSeconds = VIDEO_GALLERY_REVALIDATE_SECONDS;

function getYouTubeApiKey(): string {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    throw new Error("[video-gallery] Missing YOUTUBE_API_KEY in environment.");
  }

  return apiKey;
}

function chunk<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];

  for (let index = 0; index < array.length; index += size) {
    result.push(array.slice(index, index + size));
  }

  return result;
}

function pickThumbnail(thumbnails: ThumbnailSet | undefined, videoId: string): string | null {
  return (
    thumbnails?.maxres?.url ??
    thumbnails?.standard?.url ??
    thumbnails?.high?.url ??
    thumbnails?.medium?.url ??
    thumbnails?.default?.url ??
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  );
}

async function youtube<TResponse>(
  endpoint: string,
  params: Record<string, string | number | undefined>,
): Promise<TResponse> {
  const apiKey = getYouTubeApiKey();
  const url = new URL(`${YOUTUBE_API_BASE}/${endpoint}`);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      url.searchParams.set(key, String(value));
    }
  }

  url.searchParams.set("key", apiKey);

  const response = await fetch(url, {
    next: {
      revalidate: VIDEO_GALLERY_REVALIDATE_SECONDS,
      tags: [VIDEO_GALLERY_CACHE_TAG],
    },
  });

  if (!response.ok) {
    const body = await response.text();

    throw new Error(
      `[video-gallery] YouTube API error for ${endpoint} (${response.status}): ${body}`,
    );
  }

  return (await response.json()) as TResponse;
}

async function getAllPlaylistItems(playlistId: string): Promise<PlaylistItem[]> {
  const items: PlaylistItem[] = [];
  let pageToken: string | undefined;

  do {
    const data = await youtube<PlaylistItemsResponse>("playlistItems", {
      part: "snippet,contentDetails",
      playlistId,
      maxResults: 50,
      pageToken,
    });

    items.push(...(data.items ?? []));
    pageToken = data.nextPageToken;
  } while (pageToken);

  return items;
}

async function getVideoDetails(videoIds: string[]): Promise<Map<string, VideoDetails>> {
  const detailsMap = new Map<string, VideoDetails>();
  const uniqueVideoIds = Array.from(new Set(videoIds));

  for (const group of chunk(uniqueVideoIds, 50)) {
    const data = await youtube<VideosResponse>("videos", {
      part: "snippet,status,contentDetails",
      id: group.join(","),
    });

    for (const item of data.items ?? []) {
      detailsMap.set(item.id, item);
    }
  }

  return detailsMap;
}

function normalizeVideo(
  playlistItem: PlaylistItem,
  detailsMap: Map<string, VideoDetails>,
): VideoItem | null {
  const videoId = playlistItem.contentDetails?.videoId ?? playlistItem.snippet?.resourceId?.videoId;

  if (!videoId) {
    return null;
  }

  const details = detailsMap.get(videoId);

  if (!details) {
    return null;
  }

  if (details.status?.privacyStatus === "private") {
    return null;
  }

  if (details.status?.embeddable === false) {
    return null;
  }

  const title = details.snippet?.title ?? playlistItem.snippet?.title ?? "Untitled video";

  if (title === "Deleted video" || title === "Private video") {
    return null;
  }

  return {
    id: videoId,
    title,
    description: details.snippet?.description ?? playlistItem.snippet?.description ?? "",
    thumbnail: pickThumbnail(
      details.snippet?.thumbnails ?? playlistItem.snippet?.thumbnails,
      videoId,
    ),
    embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
    watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
    publishedAt: details.snippet?.publishedAt ?? null,
    duration: details.contentDetails?.duration ?? null,
    playlistItemPosition:
      typeof playlistItem.snippet?.position === "number" ? playlistItem.snippet.position : 0,
  };
}

async function buildSection(sectionConfig: PlaylistConfig): Promise<VideoSection> {
  const playlistItems = await getAllPlaylistItems(sectionConfig.playlistId);

  const videoIds = playlistItems
    .map((item) => item.contentDetails?.videoId ?? item.snippet?.resourceId?.videoId)
    .filter((value): value is string => typeof value === "string" && value.length > 0);

  const detailsMap = await getVideoDetails(videoIds);

  const videos = playlistItems
    .map((item) => normalizeVideo(item, detailsMap))
    .filter((video): video is VideoItem => video !== null)
    .sort((left, right) => left.playlistItemPosition - right.playlistItemPosition);

  return {
    id: sectionConfig.id,
    title: sectionConfig.title,
    layout: sectionConfig.layout === "landscape" ? "landscape" : "portrait",
    videos,
  };
}

export async function getVideoGallery(): Promise<VideoSection[]> {
  if (!Array.isArray(playlistsConfig)) {
    throw new Error("[video-gallery] data/video-playlists.json must be an array.");
  }

  const sections = playlistsConfig as PlaylistConfig[];

  return Promise.all(
    sections.map(async (sectionConfig) => {
      if (!sectionConfig.id || !sectionConfig.title || !sectionConfig.playlistId) {
        throw new Error(
          `[video-gallery] Invalid section config: ${JSON.stringify(sectionConfig)}`,
        );
      }

      return buildSection(sectionConfig);
    }),
  );
}