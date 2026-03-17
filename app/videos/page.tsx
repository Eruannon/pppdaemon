import type { Metadata } from "next";
import { VideosPageClient } from "@/components/videos/videos-page-client";
import type { VideoSection } from "@/components/videos/types";
import sectionsData from "@/data/generated/video-gallery.json";

export const metadata: Metadata = {
  title: "Galeria Video | Poradnia MAGNOLIA",
  description: "Galeria Video Poradnii Magnolia",
};

export default function VideosPage() {
  return (
    <VideosPageClient sections={sectionsData as VideoSection[]} />
  );
}