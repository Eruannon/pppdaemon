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
          <div>
            <h2 className=" text-xl font-semibold tracking-tighter mb-4">
              Obszary zastosowania oceny kompetencji emocjonalnych:
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {accordionItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx + 1}`}>
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

export function OcenaKompetencjiEmocjonalnych() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Ocena kompetencji emocjonalnych",
      description: `
Kompetencje emocjonalne są nieodzownym elementem skutecznego funkcjonowania w różnych aspektach życia. Jednocześnie uważane są też za kluczowy składnik inteligencji emocjonalnej (EQ). Umiejętności w zakresie skutecznego rozpoznawania, zrozumienia, wykorzystywania a nadto regulacji emocji własnych, a także innych osób są coraz częściej wysoko cenione na rynku pracy. Role przywódcze takie jak funkcja lidera i managera wymagają skutecznego zarządzania emocjami własnymi i innych, dlatego ocena ich kompetencji emocjonalnych może być istotna w procesie rekrutacji na stanowiska kierownicze. <br/><br/>

Ocena kompetencji emocjonalnych ma również duże znaczenie przy wyborze ścieżki zawodowej. Osoby planujące zmianę kariery lub wybierające ścieżkę edukacji mogą skorzystać z oceny swoich kompetencji emocjonalnych, aby lepiej zrozumieć, jak wykonywany w przyszłości zawód może wpływać na ich stan emocjonalny i zdrowie psychiczne. Dotyczy to w szczególności przyszłych lekarzy, psychologów, nauczycieli, pielęgniarzy i sanitariuszy, opiekunów osób starszych, piltów, prawników i mediatorów oraz innych grup zawodowych generujących wysoki poziom stresu i bazujących na stabilności emocjonalnej pracownika. <br/><br/>

Jeśli zatem jesteś osobą poszukującą pracy na stanowisku kierowniczym i pragniesz zaimponować przyszłemu pracodawcy wykonaj ocenę kompetencji emocjonalnych. Twój pozytywny wynik może zadecydować o wyborze Twojej osoby.
Jeśli wahasz się czy wybór określonej ścieżki zawodowej jest dobry dla Twojego dobrostanu psychicznego nie decyduj w ciemno. Wykonaj ocenę kompetencji emocjonalnych.
      `,
      imageSrc: "/assets/diagnozy/ocena-kompetencji-emocjonalnych.jpg",
      imageAlt: "Ocena kompetencji emocjonalnych",
      accordionItems: [
        {
          title: "Rekrutacja i selekcja pracowników",
          content: `
Stanowiska wymagające wysokiej empatii: W zawodach takich jak nauczyciel, pracownik socjalny, psycholog, lekarz, pielęgniarka czy menedżer, gdzie empatia i umiejętności społeczne są kluczowe, ocena kompetencji emocjonalnych może pomóc w wyborze najlepszych kandydatów.
Role przywódcze: Liderzy i menedżerowie muszą skutecznie zarządzać emocjami własnymi i innych, dlatego ocena ich kompetencji emocjonalnych może być istotna w procesie rekrutacji na stanowiska kierownicze.
          `,
        },
        {
          title: "Rozwój zawodowy i szkolenia",
          content: `
Identyfikacja obszarów do rozwoju: Ocena kompetencji emocjonalnych może pomóc w identyfikacji mocnych stron i obszarów wymagających poprawy, co jest kluczowe dla planowania indywidualnych ścieżek rozwoju zawodowego.
Programy szkoleniowe: W organizacjach, które inwestują w rozwój umiejętności miękkich, ocena kompetencji emocjonalnych może stanowić podstawę do opracowania skutecznych programów szkoleniowych.
          `,
        },
        {
          title: "Budowanie zespołów",
          content: `
Optymalizacja dynamiki zespołowej: Ocena kompetencji emocjonalnych członków zespołu może pomóc w lepszym zrozumieniu ich wzajemnych interakcji i poprawie współpracy.
Rozwiązywanie konfliktów: W zespołach, gdzie występują konflikty, ocena kompetencji emocjonalnych może pomóc w identyfikacji źródeł problemów i opracowaniu strategii ich rozwiązania.
          `,
        },
        {
          title: "Planowanie kariery",
          content: `
Doradztwo zawodowe: Osoby planujące zmianę kariery lub szukające nowych ścieżek zawodowych mogą skorzystać z oceny swoich kompetencji emocjonalnych, aby lepiej zrozumieć, jakie role i środowiska pracy będą dla nich najbardziej odpowiednie.
Rozwój osobisty: Ocena może pomóc w lepszym zrozumieniu siebie, swoich emocji i reakcji, co jest kluczowe dla osobistego rozwoju i samorealizacji.
          `,
        },
        {
          title: "Interwencje terapeutyczne i coachingowe",
          content: `
Wsparcie psychologiczne: W przypadku osób doświadczających trudności emocjonalnych, ocena kompetencji emocjonalnych może stanowić punkt wyjścia do opracowania indywidualnego planu terapeutycznego.
Coaching: Coachowie mogą wykorzystać ocenę kompetencji emocjonalnych, aby lepiej zrozumieć potrzeby swoich klientów i dostosować program coachingowy do ich indywidualnych potrzeb.
          `,
        },
        {
          title: "Ocena efektywności programów rozwojowych",
          content: `
Pomiar postępów: Po zakończeniu programów szkoleniowych lub rozwojowych, ocena kompetencji emocjonalnych może pomóc w zmierzeniu, jakie postępy zostały osiągnięte i czy programy te były skuteczne.
Feedback i poprawa: Wyniki oceny mogą dostarczyć cennych informacji zwrotnych, które można wykorzystać do udoskonalenia przyszłych programów rozwojowych.
          `,
        },
        {
          title: "Zarządzanie zmianą w organizacji",
          content: `
Przywództwo w czasach zmian: W okresach transformacji organizacyjnej, liderzy z wysokimi kompetencjami emocjonalnymi są lepiej przygotowani do zarządzania emocjami pracowników i prowadzenia ich przez zmiany.
Wsparcie pracowników: Ocena kompetencji emocjonalnych może pomóc w identyfikacji pracowników, którzy mogą potrzebować dodatkowego wsparcia w okresie zmian.
          `,
        },
        {
          title: "Edukacja i szkolnictwo",
          content: `
Rozwój nauczycieli: Nauczyciele z wysokimi kompetencjami emocjonalnymi są bardziej skuteczni w zarządzaniu klasą i wspieraniu rozwoju emocjonalnego uczniów.
Programy edukacyjne: Ocena kompetencji emocjonalnych uczniów może pomóc w opracowaniu programów edukacyjnych, które lepiej wspierają ich rozwój społeczny i emocjonalny.
          `,
        },
        {
          title: "Zdrowie i dobrostan pracowników",
          content: `
Zapobieganie wypaleniu zawodowemu: Ocena kompetencji emocjonalnych może pomóc w identyfikacji pracowników zagrożonych wypaleniem zawodowym i opracowaniu strategii zapobiegawczych.
Promocja zdrowia psychicznego: Organizacje mogą wykorzystać ocenę kompetencji emocjonalnych do promowania zdrowia psychicznego i dobrostanu pracowników.
          `,
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
