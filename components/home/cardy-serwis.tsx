"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "markdown-to-jsx";


interface Feature {
  category: string;
  title: string;
  bgColor: string;
  image: string;
  buttonText: string;
  link: string;
}

export default function OptimizedCardComponent() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const features: Feature[] = [
    {
      category: "Wsparcie dla dzieci",
      title: "Rozwój od najmłodszych lat",
      bgColor: "bg-zinc-100",
      image: "/assets/card-component-winter/winter-card-1.png",
      buttonText: "WWR, TUS, Logopeda i więcej",
      link: "/wsparcie-dla-dzieci",
    },
    {
      category: "Wsparcie dla dorosłych",
      title: "Pomoc na kazdym etapie zycia",
      bgColor: "bg-[#E6D5CC]",
      image: "/assets/card-component-winter/winter-card-2.png",
      buttonText: "Terapia par, psycholog i więcej",
      link: "/wsparcie-dla-doroslych",
    },
    {
      category: "Terapia uzaleznień",
      title: "Siła, by zacząć od&nbsp;nowa",
      bgColor: "bg-[#E6F0F9]",
      image: "/assets/card-component-winter/winter-card-3.png",
      buttonText: "E-uzależnienia, diagnoza i więcej",
      link: "/centrum-uzaleznien",
    },
    {
      category: "Terapia VR",
      title: "Realne wsparcie w wirtualnym świecie",
      bgColor: "bg-[#E6F9CC]",
      image: "/assets/card-component-winter/winter-card-4.png",
      buttonText: "Odkryj terapię VR",
      link: "/terapia-vr",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      const currentScroll = container.scrollLeft;
      container.scrollTo({
        left:
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold mb-8 sm:mb-12`}
        >
          Wsparcie dostosowane <br />
          do Twoich potrzeb.
        </h2>
      </div>
      <div className="relative w-full">
        <ScrollArea className="w-full" ref={scrollContainerRef}>
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 pb-8 pl-4 sm:pl-8 md:pl-28 snap-x snap-mandatory py-2 pr-4 sm:pr-8 md:pr-28">
            {features.map((feature, index) => (
              <div
                key={index}
                className="transition-transform duration-300 ease-in-out hover:scale-[1.02]"
              >
                <Card
                  className={cn(
                    "flex-none w-[280px] sm:w-[320px] md:w-[372px] h-[480px] sm:h-[580px] md:h-[680px] rounded-2xl sm:rounded-[32px] border-none overflow-hidden snap-start relative",
                    feature.bgColor
                  )}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={feature.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 372px"
                      className="object-cover"
                      priority={index < 2}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 z-10">
                    <div className="space-y-2">
                      <div className="text-base sm:text-lg md:text-xl font-semibold text-white/70">
                        {feature.category}
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-white">
                        <Markdown>{feature.title}</Markdown>
                      </h3>
                    </div>
                    <Link
                      href={feature.link}
                      className="self-end text-sm sm:text-base font-semibold rounded-full py-1 sm:py-2 px-3 sm:px-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white transition-colors duration-300 inline-flex items-center whitespace-nowrap"
                    >
                      {feature.buttonText}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
        <div className="flex justify-end mt-2 mb-4 pr-4 sm:pr-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90 mr-2 sm:mr-4"
            onClick={() => scroll("left")}
            disabled={!showLeftArrow}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Scroll left</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90"
            onClick={() => scroll("right")}
            disabled={!showRightArrow}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
