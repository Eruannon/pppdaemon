export type VideoSectionLayout = "portrait" | "landscape";

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  thumbnail: string | null;
  embedUrl: string;
  watchUrl: string;
  publishedAt: string | null;
  duration: string | null;
  playlistItemPosition: number;
};

export type VideoSection = {
  id: string;
  title: string;
  layout: VideoSectionLayout;
  videos: VideoItem[];
};