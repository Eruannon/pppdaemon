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

export function DiagnozaUzaleznieniaOdInternetu() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza uzależnień – uzależnienie od sieci internetowej",
      description:
        "Sieć internetowa wkroczyła w niemal wszystkie obszary życia współczesnego człowieka. Tym samym bardzo trudno rozpoznać samemu uzależnienie od bycia on-line. Jako, że znaczną część spraw przenieśliśmy do świata wirtualnego, łatwo zatracić rozeznanie pomiędzy koniecznością funkcjonowania w sieci a psychiczną niemożnością oddalenia się internetu. <br/><br/> Z pewnością coraz częściej pod płaszczykiem wygody i realnej potrzeby kryje się uzależnienie. Jak rozpoznać, że wygodne życie w sieci to ukryty potwór? Jednym z symptomów popadania w uzależnienie jest obserwacja, że czas poświęcony w internecie nie przekłada się na żadną konkretną czynność. Skrolujemy media społecznościowe, po raz kolejny przeglądamy wiadomości szukając nie wiadomo czego, oglądamy memy czy zabawne filmiki zatracając poczucie czasu. Innym sygnałem ostrzegawczym jest poczucie lęku i zagubienia, gdy jesteśmy poza zasięgiem. Coraz częściej bez dostępu do internetu nie potrafimy znaleźć sobie miejsca, wymyślić innej formy rozrywki, czujemy pustkę, której nie sposób zapełnić.",
      imageSrc: "/assets/diagnozy/internet.jpg",
      imageAlt: "Osoba używająca laptopa, otoczona cyfrowymi elementami",
      accordionItems: [
        {
          title:
            "Mini Test – sprawdź czy należy udać się na diagnozę uzależnienia od multimediów",
          content:
            "Kimberly Young, psycholog z University of Pittsbourgh (USA) przedstawiła propozycję pytań ułatwiających postawienie diagnozy uzależnienia od internetu (Internet Addiction Disorder). Zdaniem autorki, udzielenie twierdzącej odpowiedzi na pięć spośród ośmiu pytań przemawia za istnieniem patologicznego uzależnienia od internetu. Oto pytania:<br/><br/>1. Czy czuje się Pan/i zaabsorbowana/y internetem do tego stopnia, że ciągle rozmyśla o odbytych sesjach internetowych i/lub nie może doczekać się kolejnych sesji)?<br/>2. Czy odczuwa Pan/i potrzebę zwiększenia ilości czasu spędzanego przy internecie, aby uzyskać większe zadowolenie (mieć więcej satysfakcji)?<br/>3. Czy podejmował/a Pan/i wielokrotnie, nieudane próby kontrolowania, ograniczania lub zaprzestania korzystania z internetu?<br/>4. Czy odczuwał Pan/i wewnętrzny niepokój, miał/a nastrój depresyjny albo był/a rozdrażniona/y wówczas, kiedy próbował Pan/i ograniczać lub przerwać korzystanie z internetu?<br/>5. Czy zdarza się Pani/Panu spędzać przy internecie więcej czasu niż pierwotnie planowałaś/eś?<br/>6. Czy kiedykolwiek ryzykował/a Pan/i utratą bliskiej osoby, ważnych relacji z innymi ludźmi, pracy, nauki albo kariery zawodowej w związku z ze spędzaniem zbyt dużej ilości czasu w internecie?<br/>7. Czy kiedykolwiek skłamał/a Pan/i swoim bliskim, terapeutom albo komuś innemu w celu ukrycia twojego nadmiernego zainteresowania internetem?<br/>8. Czy używa Pan/i internetu w celu ucieczki od problemów, albo w celu uniknięcia nieprzyjemnych uczuć (np. poczucia bezradności, poczucia winy, niepokoju lub depresji)? <br/><br/> Źródło: https://www.uzaleznieniabehawioralne.pl/category/siecioholizm/testy-diagnostyczne-siecioholizm/",
        },
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
