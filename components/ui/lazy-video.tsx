"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

export default function LazyVideo({
  src,
  poster,
  className,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", 
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {poster && !isPlaying && (
        <Image
          src={poster}
          alt="Video thumbnail"
          fill
          className="object-cover z-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
        onPlay={handlePlay}
        {...props}
      >
        {isVisible && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
