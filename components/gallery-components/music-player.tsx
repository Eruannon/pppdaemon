

import { useState, useEffect, useRef } from "react";
import { Pause, Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  src: string;
}

export function MusicPlayer({ src }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Autoplay was prevented:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="fixed bottom-14 right-4 bg-white rounded-full shadow-lg p-4 flex items-center space-x-4">
      <button onClick={togglePlay} className="focus:outline-none">
        {isPlaying ? <Pause size={24} /> : <Volume2 size={24} />}
      </button>
      <button onClick={toggleMute} className="focus:outline-none">
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
      <audio ref={audioRef} src={src} loop />
    </div>
  );
}
