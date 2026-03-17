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
    <section>
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
            {accordionItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`}>
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

export function OcenaGotowosciEmocjonalnejWejsciaWZwiazek() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Ocena gotowości emocjonalnej do wejścia w związek",
      description: `Nasza poradnia oferuje usługę psychologiczną sprawdzającą gotowość emocjonalną do wejścia w bliskie relacje interpersonalne.<br/><br/>
Ocena gotowości emocjonalnej do wejścia w związek daje możliwość sprawdzenia, czy posiadamy kluczowe cechy umożliwiające prawidłowe funkcjonowanie w związku, takie jak dojrzałość emocjonalna, umiejętność komunikacji, zdolność do kompromisu, samoświadomość oraz stabilność emocjonalną. Ocena ta pomaga także określić, czy jesteśmy psychicznie i emocjonalnie przygotowani na stworzenie tu i teraz zdrowej i satysfakcjonującej relacji z drugą osobą. Ocena gotowości emocjonalnej do wejścia w związek skierowana jest przede wszystkim do osób, które na co dzień mają świadomość swoich trudności w relacjach z innymi i chcą je lepiej zrozumieć. Potrzeba przeprowadzenia badania może pojawić się również wśród osób które w przeszłości doświadczyły trudnych rozstań czy toksycznych relacji. Sprawdzenie stanu swoich emocji w kontekście nowego związku jest zalecana także osobom, które próbują stworzyć nową relację po śmierci współmałżonka.<br/><br/>
Diagnoza gotowości emocjonalnej oparta jest na sdandaryzowanych testach psychologicznych, przeprowadzanych przez specjalistę.`,
      imageSrc: "/assets/oferta-dla-doroslych/ocena-gotowosci-zwiazek.jpg",
      imageAlt: "Ilustracja symbolizująca ocenę gotowości emocjonalnej",
      accordionItems: [],
      ctaText: "Umów wizytę",
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
