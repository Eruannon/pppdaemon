"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface PetSection {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
}

interface PetSectionComponentProps extends PetSection {
  isEven: boolean;
}

const PetSectionComponent: React.FC<PetSectionComponentProps> = ({
  id,
  title,
  description,
  imageSrc,
  videoSrc,
  imageAlt,
  isEven,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="py-12 md:py-24" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div
          className={`flex flex-col lg:flex-row items-stretch ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ height: contentHeight ? `${contentHeight}px` : "500px" }}
            >
              {videoSrc ? (
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              ) : (
                imageSrc && (
                  <Image
                    src={imageSrc}
                    alt={imageAlt || ""}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )
              )}
            </div>
          </div>
          
          <div
            ref={contentRef}
            className={`w-full lg:w-1/2 ${
              isEven ? "lg:pl-12" : "lg:pr-12"
            } flex flex-col justify-center`}
          >
            <h2 className="font-display mb-6 tracking-tight font-semibold text-left text-3xl">
              {title}
            </h2>
            <p className="text-gray-700 text-base text-left mb-6">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function NaszePupile() {
  const petSections: PetSection[] = [
    {
      id: "piesek",
      title: "Daisy - nasz uroczy Golden retriever",
      description:
        "Tutaj możesz poznać naszych uroczych piesków – wiernych towarzyszy, pełnych energii i miłości, którzy potrafią rozświetlić każdy dzień.",
      imageSrc: "/assets/pupile/piesek.jpg",
      imageAlt: "Uroczy piesek",
    },
    {
      id: "kroliki",
      title: "Trusia i Lusia nasze kicające króliczki",
      description:
        "Nasze króliczki to symbol delikatności i uroku. Są idealnymi kompanami zarówno dla dzieci, jak i dorosłych, przynosząc radość swoim wyglądem i zachowaniem.",
      imageSrc: "/assets/pupile/kroliki.jpg",
      imageAlt: "Urocze króliki",
    },
    {
      id: "rybki",
      title: "Nasze zwariowane rybki",
      description:
        "Rybki w naszych akwariach to oaza spokoju i relaksu. Ich kolorowe łuski i delikatny ruch wody tworzą niesamowity klimat, sprzyjający wyciszeniu.",
      videoSrc: "/assets/pupile/rybki.mp4",
    },
  ];

  return (
    <div>
      {petSections.map((section, index) => (
        <PetSectionComponent
          key={section.id}
          {...section}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
}
