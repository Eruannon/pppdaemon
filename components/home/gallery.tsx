























































//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",





//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",





//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",





//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",





//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",





//           "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",












































































































































































"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Video 1",
    videoUrl: "/assets/galeria-home-page/si_1.mp4",
  },
  {
    id: 2,
    title: "Video 2",
    videoUrl: "/assets/galeria-home-page/si_2.mp4",
  },
  {
    id: 3,
    title: "Video 3",
    videoUrl: "/assets/galeria-home-page/si_3.mp4",
  },
  {
    id: 4,
    title: "Video 4",
    videoUrl: "/assets/galeria-home-page/si_4.mp4",
  },
  {
    id: 5,
    title: "Video 5",
    videoUrl: "/assets/galeria-home-page/si_5.mp4",
  },
  {
    id: 6,
    title: "Video 6",
    videoUrl: "/assets/galeria-home-page/si_6.mp4",
  },
];

export default function VideoGallery() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayAll = () => {
    setIsPlaying(!isPlaying);
    const videoElements = document.querySelectorAll("video");
    videoElements.forEach((video) => {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    });
  };

  return (
    <section className="hidden sm:block container max-w-6xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center mb-8">
        <h2
          style={{ wordSpacing: "0.2rem" }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8 text-center"
        >
          Kadry z zajęć WWRD - przyjdź i sprawdź
        </h2>
        <Button
          onClick={togglePlayAll}
          className="bg-primary text-primary-foreground px-6 py-3 flex items-center gap-2 rounded-3xl bg-[#921d7f] hover:bg-[#921d7f]/90"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
          {isPlaying ? "Zatrzymaj filmiki" : "Odtwórz filmiki"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`relative overflow-hidden rounded-lg shadow-lg ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            } aspect-video`}
          >
            <video
              ref={(el) => {
                if (el) {
                  el.muted = true;
                }
              }}
              src={video.videoUrl}
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}
