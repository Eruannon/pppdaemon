"use client";

import type React from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import Markdown from "markdown-to-jsx";

interface ServiceSection {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  accordionItems: { title: string; content: string }[];
  ctaText: string;
  ctaLink: string;
}

const ServiceSectionComponent: React.FC<ServiceSection & { index: number }> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  accordionItems,
  ctaText,
  ctaLink,
  index,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section className="">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4 text-center">
            <Markdown>{title}</Markdown>
          </h2>
          <Link
            href={ctaLink}
            className="text-slate-800 flex justify-center mb-12 w-full"
          >
            <Button className="rounded-full bg-[#9E368C] hover:bg-[#9E368C]/90">
              {ctaText}
            </Button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={index === 0}
                />
              </div>
            </div>
            <div ref={contentRef} className="lg:col-span-7 flex items-center">
              <p className="space-y-4 sm:space-y-6 text-sm sm:text-base text-zinc-700 font-medium tracking-tight">
                <Markdown>{description}</Markdown>
              </p>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <Markdown>{item.content}</Markdown>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export function GimnastykaKorekcyjna() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Gimnastyka korekcyjna",
      description:
        "Gimnastyka korekcyjna dedykowana jest&nbsp;dzieciom, u&nbsp;których stwierdzone zostały wady postawy lub&nbsp;nieprawidłowości w&nbsp;rozwoju układu ruchu.<br/><br/>Udział w&nbsp;ćwiczeniach gimnastycznych zapobiega pogłębianiu się wad oraz&nbsp;ich&nbsp;stopniową korekcję.<br/><br/>Najczęściej na&nbsp;zajęcia trafiają dzieci z&nbsp;bocznym skrzywieniem kręgosłupa (skoliozą), nadmiernym wygięciem pleców do&nbsp;tyłu („garbieniem się”), nadmiernym wygięciem odcinka lędźwiowego do&nbsp;przodu (lordozą), płaskostopiem czy&nbsp;też&nbsp;koślawością lub&nbsp;szpotawością kolan.<br/><br/>Wsparcia w&nbsp;postaci gimnastyki korekcyjnej wymagają również dzieci z&nbsp;osłabioną siłą mięśni posturalnych i&nbsp;nadmierną masą ciała obciążającą kręgosłup i&nbsp;stawy.<br/><br/>Gimnastyka korekcyjna prowadzona przez doświadczonego rehabilitanta wykorzystuje aktywności lubiane przez dzieci, łącząc przyjemne z&nbsp;pożytecznym.",
      imageSrc: "/assets/oferta-dla-dzieci/gimnastyka-korekcyjna.jpg",
      imageAlt: "Rehabilitacja metodą NDT-Bobath",
      accordionItems: [],
      ctaText: "Zarezerwuj termin na gimnastyke korekcyjną",
      ctaLink: "/kontakt",
    },
  ];

  return (
    <div>
      {serviceSections.map((section, index) => (
        <ServiceSectionComponent key={index} {...section} index={index} />
      ))}
    </div>
  );
}
