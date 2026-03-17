

import Image from "next/image";
import { useState } from "react";
import { MediaItem as MediaItemType } from "./types";

interface MediaItemProps {
  item: MediaItemType;
}

export function MediaItem({ item }: MediaItemProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const togglePlayPause = () => {
    if (item.type === "video") {
      const videoElement = document.getElementById(
        `video-${item.id}`
      ) as HTMLVideoElement;
      if (videoElement) {
        if (videoElement.paused) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
        setIsVideoPlaying(!isVideoPlaying);
      }
    }
    
  };

  if (item.type === "image") {
    return (
      <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
        <Image
          src={item.src}
          alt={item.alt}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    );
  } else if (item.type === "video") {
    return (
      <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="relative">
          <video
            id={`video-${item.id}`}
            src={item.src}
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => setIsVideoPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlayPause}
          >
            {!isVideoPlaying && (
              <svg
                className="w-16 h-16 text-white opacity-75"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    );
  } else if (item.type === "youtube") {
    return (
      <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
        <iframe
          width="400"
          height="300"
          src={`https://www.youtube.com/embed/${item.src}?controls=0&modestbranding=1&rel=0`}
          title={item.alt}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    );
  }
  return null;
}
