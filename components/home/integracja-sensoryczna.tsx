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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
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
          <div>
            <h4 className="py-1 text-xl font-semibold">
              Główne procesy zachodzące podczas integracji sensorycznej to:
            </h4>
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
      </div>
    </section>
  );
};

export function IntegracjaSensoryczna() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Terapia Integracji Sensorycznej (SI)",
      description:
        "Integracja sensoryczna to&nbsp;skomplikowany proces, w&nbsp;którym układ nerwowy odbiera, przetwarza i&nbsp;organizuje bodźce ze&nbsp;zmysłów, aby&nbsp;umożliwić właściwe reakcje na&nbsp;otaczające środowisko. Prawidłowa integracja sensoryczna jest&nbsp;kluczowa dla&nbsp;prawidłowego rozwoju motorycznego, emocjonalnego i&nbsp;poznawczego dziecka.<br/><br/> Gdy bodźce sensoryczne nie&nbsp;są&nbsp;właściwie opracowywane przez układ nerwowy, pojawia się&nbsp;chaos informacyjny, który&nbsp;skutkuje niejednokrotnie trudnościami w&nbsp;harmonijnym rozwoju psychofizycznym dziecka, niepokojem, nieodpowiednim zachowaniem oraz&nbsp;obniżoną zdolnością do&nbsp;uczenia się. <br/><br/> Dzieciom z zaburzeniami SI przykleja się często łatkę niegrzecznych, nadpobudliwych lub mniej zdolnych. Z pomocą przychodzi diagnoza i terapia SI.",
      imageSrc: "/assets/oferta-dla-dzieci/integracja-sensoryczna.jpg",
      imageAlt: "Dziecko podczas terapii integracji sensorycznej",
      accordionItems: [
        {
          title: "Odbiór bodźców",
          content:
            "Informacje napływają do układu nerwowego z różnych zmysłów: wzroku, słuchu, dotyku, propriocepcji (czucia głębokiego), równowagi (układ przedsionkowy), smaku i węchu.",
        },
        {
          title: "Przekazywanie bodźców do mózgu",
          content:
            "Bodźce są przesyłane do mózgu przez receptory zmysłowe i nerwy czuciowe. Sygnały te docierają do różnych struktur mózgowych odpowiedzialnych za ich interpretację.",
        },
        {
          title: "Przetwarzanie i organizacja bodźców",
          content:
            "Mózg analizuje napływające informacje, porównuje je z wcześniejszymi doświadczeniami i organizuje je w logiczną całość. Ważną rolę odgrywa tu pień mózgu, który filtruje bodźce i pozwala skupić się na tych najważniejszych, oraz kora mózgowa, która odpowiada za świadome reakcje.",
        },
        {
          title: "Reakcja adaptacyjna",
          content:
            "Na podstawie przetworzonych informacji organizm podejmuje odpowiednią reakcję, np. unikanie gorącego przedmiotu, utrzymanie równowagi podczas chodzenia, precyzyjne chwytanie przedmiotów czy skupienie uwagi na danej czynności.",
        },
        {
          title: "Uczenie się i rozwój kompetencji sensorycznych",
          content:
            "Powtarzanie doświadczeń sensorycznych pozwala na doskonalenie reakcji i rozwój zdolności motorycznych, koordynacji, koncentracji czy kontrolowanie emocji.",
        },
      ],
      ctaText: "Dowiedz się więcej o integracji sensorycznej",
      ctaLink: "/wsparcie-dla-dzieci/diagnoza-si",
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
