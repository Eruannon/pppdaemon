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

export function DiagnozaDysleksji() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza dysleksji",
      description:
        "Dysleksja to&nbsp;specyficzne zaburzenia przetwarzania informacji językowych w&nbsp;umyśle człowieka. Nie są&nbsp;one związane z&nbsp;poziomem inteligencji, wadami wzroku czy&nbsp;słuchu, ale&nbsp;mają podłoże neurobiologiczne. Często osoby z&nbsp;dysleksją są&nbsp;wybitnie uzdolnione w&nbsp;innych dziedzinach nauki, jednakże mają duże trudności w&nbsp;opanowaniu umiejętności czytania i&nbsp;pisania, a&nbsp;także trwałego zapamiętania zasad pisowni ortograficznej.<br/><br/>Dysleksja to&nbsp;nie tylko trudności w&nbsp;zakresie językowym, ale także specyficzne trudności w&nbsp;orientacji w&nbsp;przestrzeni, określaniu kierunków prawo-lewo, zapamiętywaniu symboli graficznych czy&nbsp;odtwarzaniu sekwencji.<br/><br/>Uczniowi przejawiającemu objawy dysleksji z pomocą przychodzi poddanie się diagnozie, która wyjaśnia powód niepowodzeń szkolnych, daje wskazówki do dalszych działań zarówno rodzicom, jak i nauczycielom, oraz zaleca zajęcia terapeutyczne odpowiednie do napotykanych trudności.<br/><br/>Diagnoza dysleksji uprawnia ucznia do skorzystania z dostosowania formy nauczania do jego potrzeb, takich jak wydłużenie czasu podczas sprawdzianów, testów czy egzaminów, stosowanie alternatywnych form sprawdzania wiedzy oraz daje możliwość korzystania z zajęć korekcyjno-kompensacyjnych w szkole. Zajęcia rewalidacyjne wspierające ucznia z dysleksją obejmują zwykle ćwiczenia percepcji słuchowej i wzrokowej, trening koncentracji uwagi czy poznanie różnorodnych technik czytania i zapamiętywania.<br/><br/>Dzięki diagnozie i zajęciom wspomagającym uczniów z dysleksją dzieci łatwiej pokonują szkolne trudności, zachowując wiarę w swój potencjał i możliwość osiągnięcia sukcesu.",

      imageSrc: "/assets/diagnozy/dysleksja.jpg",
      imageAlt: "dziecko ubierające maskę",
      accordionItems: [
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      ],
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
