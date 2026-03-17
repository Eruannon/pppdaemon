

import { ArrowLeft } from "lucide-react";
import { MediaItem } from "./gallery-item";
import { MusicPlayer } from "./music-player";
import { getMediaForTheme, themes } from "./types";

interface ThemeGalleryProps {
  theme: string;
  onBack: () => void;
}

export function ThemeGallery({ theme, onBack }: ThemeGalleryProps) {
  const mediaItems = getMediaForTheme(theme);
  const images = mediaItems.filter((item) => item.type === "image");
  
  const videos = mediaItems.filter(
    (item) => item.type === "video" || item.type === "youtube"
  );
  const currentTheme = themes.find((t) => t.id === theme);

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <ArrowLeft className="mr-2" />
        Wróć do głównej galerii
      </button>
      <h1 className="text-5xl font-semibold text-zinc-800 tracking-tight mb-8 text-center capitalize">
        {theme}
      </h1>

      {images.length > 0 && (
        <>
          <h2 className="text-4xl tracking-tighter font-semibold mb-4">
            Fotografie
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <MediaItem key={image.id} item={image} />
            ))}
          </div>
        </>
      )}

      {videos.length > 0 && (
        <>
          <h2 className="text-4xl tracking-tighter font-semibold mb-4 mt-20">
            Nagrania
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {videos.map((video) => (
              <MediaItem key={video.id} item={video} />
            ))}
          </div>
        </>
      )}

      {currentTheme && <MusicPlayer src={currentTheme.music} />}
    </div>
  );
}
