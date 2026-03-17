"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FastForward,
  Maximize,
  Minimize,
  Pause,
  Play,
  Rewind,
  Volume2,
  VolumeX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";


const videos = [
  {
    id: 1,
    title: "Florentynka - gdy TAK zamienia się w NIE",
    description: "Bajkoterapia dla dzieci",
    src: "/assets/bajkoterapia/Florentynka-gdy-TAK-zamienia-się-w-NIE.mp4",
    thumbnail: "/assets/bajkoterapia/florentynka.png",
    duration: "10:00",
  },
  {
    id: 2,
    title: "Legenda - Szczęście czy Pech",
    description: "Bajkoterapia dla dzieci",
    src: "/assets/bajkoterapia/Legenda-Szczęście-czy-Pech.mp4",
    thumbnail: "/assets/bajkoterapia/legenda.png",
    duration: "10:00",
  },
  {
    id: 3,
    title: "Samo się... czy mieszka z nami ktoś jeszcze",
    description: "Bajkoterapia dla dzieci",
    src: "/assets/bajkoterapia/Samo się...-czy-mieszka-znami-ktoś-jeszcze.mp4",
    thumbnail: "/assets/bajkoterapia/samo-sie.png",
    duration: "10:00",
  },
  {
    id: 4,
    title: "Zupa z kamienia czyli razem możemy wszystko",
    description: "Bajkoterapia dla dzieci",
    src: "/assets/bajkoterapia/Zupa-z-kamienia-czyli-razem-możemy-wszystko.mp4",
    thumbnail: "/assets/bajkoterapia/zupa-z-kamienia.png",
    duration: "10:00",
  },
];

export default function VideoPlayerWithGain() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);
  
  const [gainValue, setGainValue] = useState(1.15);
  const [isMuted, setIsMuted] = useState(false);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  
  
  const initAudioContext = () => {
    if (!audioContext && videoRef.current) {
      const newAudioContext = new AudioContext();
      const source = newAudioContext.createMediaElementSource(videoRef.current);
      const newGainNode = newAudioContext.createGain();

      
      source.connect(newGainNode).connect(newAudioContext.destination);

      
      newGainNode.gain.value = gainValue;

      setAudioContext(newAudioContext);
      setGainNode(newGainNode);
    }
  };

  
  const togglePlay = () => {
    if (!videoRef.current) return;

    
    initAudioContext();

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  
  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  
  const handleGainChange = (value: number[]) => {
    const newGain = value[0];
    setGainValue(newGain);

    if (gainNode) {
      gainNode.gain.value = newGain;
    }
  };

  
  const toggleMute = () => {
    if (!gainNode) {
      
      
      initAudioContext();
    }

    setIsMuted(!isMuted);

    if (gainNode) {
      gainNode.gain.value = !isMuted ? 0 : gainValue;
    }
  };

  
  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  
  const toggleFullscreen = () => {
    if (videoContainerRef.current) {
      if (!document.fullscreenElement) {
        videoContainerRef.current.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable fullscreen: ${err.message}`
          );
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  
  const changeVideo = (video: (typeof videos)[0]) => {
    setCurrentVideo(video);
    setIsPlaying(false);
    setCurrentTime(0);

    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("durationchange", handleDurationChange);
    video.addEventListener("ended", handleEnded);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("durationchange", handleDurationChange);
      video.removeEventListener("ended", handleEnded);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  
  useEffect(() => {
    const hideControls = () => {
      if (isPlaying) {
        setShowControls(false);
      }
    };

    const resetControlsTimeout = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      if (isPlaying) {
        controlsTimeoutRef.current = setTimeout(hideControls, 3000);
      }
    };

    const container = videoContainerRef.current;
    if (container) {
      container.addEventListener("mousemove", resetControlsTimeout);
      container.addEventListener("mouseenter", resetControlsTimeout);
      container.addEventListener("mouseleave", hideControls);
    }

    resetControlsTimeout();

    return () => {
      if (container) {
        container.removeEventListener("mousemove", resetControlsTimeout);
        container.removeEventListener("mouseenter", resetControlsTimeout);
        container.removeEventListener("mouseleave", hideControls);
      }
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div
            ref={videoContainerRef}
            className="relative overflow-hidden rounded-lg bg-black aspect-video"
            onDoubleClick={toggleFullscreen}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              className="w-full h-full cursor-pointer"
              src={currentVideo.src}
              
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
            />

            
            <div
              className={`absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent transition-opacity duration-300 ${
                showControls ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2 className="text-white font-medium text-lg">
                {currentVideo.title}
              </h2>
            </div>

            
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 ${
                showControls ? "opacity-100" : "opacity-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              
              <div className="mb-2">
                <Slider
                  value={[currentTime]}
                  min={0}
                  max={duration || 100}
                  step={0.01}
                  onValueChange={handleSeek}
                  className="cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={togglePlay}
                    className="text-white hover:bg-white/20 h-9 w-9"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </Button>

                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => skip(-10)}
                    className="text-white hover:bg-white/20 h-9 w-9"
                  >
                    <Rewind className="h-5 w-5" />
                  </Button>

                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => skip(10)}
                    className="text-white hover:bg-white/20 h-9 w-9"
                  >
                    <FastForward className="h-5 w-5" />
                  </Button>

                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMute}
                      className="text-white hover:bg-white/20 h-9 w-9"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </Button>
                    <div className="w-20 hidden sm:block">
                      
                      <Slider
                        value={[isMuted ? 0 : gainValue]}
                        min={0}
                        max={2}
                        step={0.01}
                        onValueChange={handleGainChange}
                      />
                    </div>
                  </div>

                  
                  <div className="text-white text-sm ml-2">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="text-white hover:bg-white/20 h-9 w-9"
                >
                  {isFullscreen ? (
                    <Minimize className="h-5 w-5" />
                  ) : (
                    <Maximize className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{currentVideo.title}</h2>
            <p className="text-muted-foreground">{currentVideo.description}</p>
          </div>
        </div>

        
        <div className="md:col-span-1">
          <div className="bg-card rounded-lg p-4 border">
            <h3 className="font-medium text-lg mb-4">Wybierz film</h3>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className={`flex gap-3 p-2 rounded-lg cursor-pointer hover:bg-muted transition-colors ${
                    currentVideo.id === video.id ? "bg-muted" : ""
                  }`}
                  onClick={() => changeVideo(video)}
                >
                  <div className="relative flex-shrink-0">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={120}
                      height={68}
                      className="rounded-md object-cover w-[120px] h-[68px]"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
