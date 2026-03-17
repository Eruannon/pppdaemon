"use client";



import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import type React from "react";



import ThreeCardsRow from "./hero-cards";




const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch((error) => {
      console.error("Autoplay was prevented:", error);
    });
  }, []);

  return (
    <section
      className={`w-full h-fit sm:min-h-screen font-sans relative overflow-hidden pt-10 sm:pt-6 pb-0`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto relative">
        <motion.div
          className="max-w-6xl mx-auto rounded-xl relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          
          
          <HeroVideo videoRef={videoRef} />
        </motion.div>

        {/* <h2 className="text-center mt-10 text-4xl font-semibold tracking-tighter">
          Jesteśmy Poradnią otwartą na zwierzęta
        </h2> */}
        <ThreeCardsRow />
        
      </div>
    </section>
  );
};





















































const HeroVideo = ({
  videoRef,
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
}) => (
  <motion.div
    className="mt-8 sm:mt-12 max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0 }}
  >
    <div className="aspect-video w-full rounded-xl overflow-hidden relative bg-black/10">
      <video
        ref={videoRef}
        src="/assets/hero/hero-o-poradni-krotkie.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        Twoja przeglądarka nie obsługuje tagu video.
      </video>
    </div>
  </motion.div>
);

































export default Hero;
