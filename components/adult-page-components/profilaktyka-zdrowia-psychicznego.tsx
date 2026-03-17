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

export function ProfilaktykaZdrowiaPsychicznego() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Profilaktyka zdrowia psychicznego",
      description: `Psychoprofilaktyka to działanie zapobiegawcze, które warto zastosować zawsze wtedy, gdy zauważamy wczesne objawy utrudniające nasze dotychczasowe codzienne funkcjonowanie.<br/><br/> Objawy, które mogą stanowić sygnał do rozpoczęcia psychoprofilaktyki to chroniczny lęk i niepokój, zwiększone napięcie wewnętrzne, przewlekły stres, czy też objawy somatyczne takie jak np. częste bóle głowy, bóle mięśniowe, przyśpieszona akcja serca, czy bóle brzucha.
<br/><br/>
Działania prowadzone w ramach profilaktyki zdrowia psychicznego zmierzają ku odzyskaniu równowagi psychicznej i emocjonalnej, zanim negatywne symptomy urosną do rangi problemów wymagających długotrwałej psychoterapii.<br/><br/> W odróżnieniu od psychoedukacji, która skierowana jest do osób świadomych swoich trudności i szukających wiedzy na temat sposobów radzenia sobie w różnych sytuacjach życiowych, profilaktyka zdrowia psychicznego podaje pomocną dłoń osobom, które ze względu na nieodpowiednie zarządzanie swoim czasem, przekonaniami czy stylem życia zaczynają odczuwać niepokojące objawy ze strony psychiki i ciała.`,
      imageSrc:
        "/assets/oferta-dla-doroslych/profilaktyka-zdrowia-psychicznego.jpg", 
      imageAlt: "Profilaktyka zdrowia psychicznego – przykładowa ilustracja",
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
