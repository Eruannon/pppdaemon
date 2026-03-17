import type { Metadata } from "next";

import { VideosPageClient } from "@/components/videos/videos-page-client";
import { getVideoGallery } from "@/lib/youtube/video-gallery";

export const metadata: Metadata = {
  title: "Galeria Video | Poradnia MAGNOLIA",
  description: "Galeria Video Poradnii Magnolia",
};

export const revalidate = 300;

export default async function VideosPage() {
  const sections = await getVideoGallery();

  return <VideosPageClient sections={sections} />;
}