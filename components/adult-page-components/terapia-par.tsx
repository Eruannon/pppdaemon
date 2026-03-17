"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import Markdown from "markdown-to-jsx";

interface ServiceSection {
  title: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt: string;
  accordionItems: { title: string; content: string }[];
  ctaText: string;
  ctaLink: string;
  id: string;
}

const ServiceSectionComponent: React.FC<ServiceSection & { index: number }> = ({
  id,
  title,
  description,
  imageSrc,
  videoSrc,
  imageAlt,
  accordionItems,
  ctaText,
  ctaLink,
  index,
}) => {
  const { fontSizeLevel, highContrast } = useAccessibility();
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

  const getFontSizeClass = (level: number) => {
    const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
    return sizes[level] || "text-base";
  };

  const getHeaderFontSizeClass = (level: number) => {
    const sizes = ["text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"];
    return sizes[level] || "text-3xl";
  };

  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  const isEven = index % 2 === 0;

  return (
    <section className="py-12 md:py-24">
      <div id={id} className="max-w-7xl mx-auto px-4 sm:px-0">
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
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={imageSrc || ""}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              )}
            </div>
          </div>
          <div
            ref={contentRef}
            className={`w-full lg:w-1/2 ${
              isEven ? "lg:pl-12" : "lg:pr-12"
            } flex flex-col justify-center`}
          >
            <h2
              className={`font-display mb-6 tracking-tight font-semibold text-left ${headerFontSizeClass}`}
            >
              {title}
            </h2>
            <p
              className={`${
                highContrast ? "text-yellow-400" : "text-gray-700"
              } ${fontSizeClass} text-left mb-2`}
            >
              <Markdown>{description}</Markdown>
            </p>
            <Accordion type="single" collapsible className="w-full mb-6">
              {accordionItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx + 1}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <Markdown>{item.content}</Markdown>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Link href={ctaLink} className="text-slate-800 flex justify-start">
              <Button
                variant="outline"
                className={`flex items-center justify-center ${
                  highContrast
                    ? "bg-gray-700 border-gray-600 text-yellow-400"
                    : "bg-slate-50/80 border-slate-700"
                }`}
              >
                {ctaText}
                <TiArrowRightOutline />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export function TerapiaDlaParComponent() {
  const { highContrast } = useAccessibility();

  
  const serviceSections: ServiceSection[] = [
    {
      id: "terapia-par",
      title: "Terapia dla Par",
      description:
        "Terapia par to proces, w którym dwoje ludzi pracuje nad poprawą jakości swojego związku poprzez rozwój wzorców komunikacji i interakcji, naukę rozwiązywania konfliktów oraz komunikowania własnych uczuć i potrzeb oraz zrozumienie partnera. <br /><br />Terapia skierowana jest zarówno do osób znajdujących się w związkach formalnych i nieformalnych, do osób znajdujących się w związkach partnerskich lub jednopłciowych.<br /><br />Podczas terapii osoby uczą się skutecznej komunikacji, ustalania przyczyn konfliktów oraz sposobów na ich rozwiązywanie z korzyścią dla obu stron. Ponadto, jednym z jej celów jest ogólna poprawa relacji oraz zwiększenie poczucia bliskości emocjonalnej.",
      videoSrc: "/assets/terapia-dla-par/terapiadlapar.mp4",
      imageAlt: "Video przedstawiające terapię dla par",
      accordionItems: [],
      ctaText: "Kiedy rozważać terapię dla par?",
      ctaLink: "/wsparcie-dla-doroslych/terapia-dla-par",
    },
  ];

  return (
    <div
      className={`font-sans overflow-x-hidden ${
        highContrast ? "bg-black text-yellow-400" : "bg-gray-100/20"
      }`}
    >
      {serviceSections.map((section, index) => (
        <ServiceSectionComponent key={index} {...section} index={index} />
      ))}
    </div>
  );
}
