"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "/assets/gallery/image1.jpg", width: 4, height: 3 },
  { src: "/assets/gallery/image2.jpg", width: 3, height: 4 },
  { src: "/assets/gallery/image3.jpg", width: 4, height: 3 },
  { src: "/assets/gallery/image4.jpg", width: 3, height: 4 },
  { src: "/assets/gallery/image5.jpg", width: 4, height: 3 },
  { src: "/assets/gallery/image6.jpg", width: 3, height: 3 },
  { src: "/assets/gallery/image7.jpg", width: 4, height: 3 },
  { src: "/assets/gallery/image8.jpg", width: 3, height: 4 },
];

export default function CreativeGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-8 sm:mb-12 md:mb-16"
          style={{ wordSpacing: "0.2rem" }}
        >
          Nasza galeria
        </h2>
        <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-4 relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[32px] shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={400 * (image.height / image.width)}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged gallery image"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} className="sm:w-8 sm:h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
