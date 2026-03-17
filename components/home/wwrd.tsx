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

export function WWRD() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Darmowe zajęcia Wczesnego <br/> Wspomagania Rozwoju Dziecka",
      description:
        "Ideą zajęć Wczesnego Wspomagania Rozwoju Dziecka jest wspieranie dzieci w&nbsp;pokonywaniu różnorodnych trudności i zaburzeń rozwojowych o podłożu logopedycznym, neurologopedycznym, fizjologicznym, ruchowym, sensorycznym, emocjonalnym, społecznym, czy&nbsp;poznawczym. Kluczową sprawą jest wczesna diagnoza i uzyskanie opinii o potrzebie WWRD, a&nbsp;następnie jak najwcześniejsze rozpoczęcie terapii.<br/><br/> W&nbsp;Poradni Psychologiczno-Pedagogicznej MAGNOLIA rozumiemy, że&nbsp;dobro dziecka nie może czekać, dlatego rozpoczęcie zajęć w&nbsp;ramach WWRD jest możliwe bezzwłocznie, bez&nbsp;oczekiwania w&nbsp;kolejkach. Z&nbsp;nami każde dziecko rozwinie skrzydła i&nbsp;osiągnie pełnię swojego&nbsp;potencjału.",
      imageSrc: "/assets/oferta-dla-dzieci/wwrd.jpg",
      imageAlt: "Dziecko podczas zajęć WWRD",
      accordionItems: [
        {
          title: "Czym zajmuje się Logopeda na zajęciach WWRD?",
          content:
            "Logopeda na zajęciach Wczesnego Wspomagania Rozwoju Dziecka (WWRD) diagnozuje i&nbsp;terapeutycznie wspiera dzieci z&nbsp;opóźnieniami w&nbsp;rozwoju mowy. Logopeda uczy prawidłowej artykulacji dźwięków i&nbsp;wszechstronnie wspiera rozwój umiejętności komunikacyjnych, zarówno werbalnych jak i&nbsp;niewerbalnych (tj.&nbsp;gesty, mimika, postawa&nbsp;ciała). Zajęcia z&nbsp;logopedą nastawione są na wzbogacanie słownictwa dziecka i&nbsp;trenowanie umiejętność formułowania wypowiedzi. Rolą logopedy pozostaje także ćwiczenie analizy i&nbsp;syntezy słuchowej, będącej podstawą nauki czytania i&nbsp;pisania.",
        },
        {
          title: "Czym zajmuje się Neurologopeda na zajęciach WWRD?",
          content:
            "Neurologopeda na zajęciach Wczesnego Wspomagania Rozwoju Dziecka diagnozuje i&nbsp;terapeutycznie wspiera dzieci z&nbsp;opóźnieniami w&nbsp;rozwoju mowy. Pracuje przede wszystkim z&nbsp;dziećmi wykazującymi zaburzenia mowy spowodowane występowaniem chorób neurologicznych, wad genetycznych lub&nbsp;uszkodzeń mózgu. Jego działania ukierunkowane są na stymulację pracy mózgu i&nbsp;układu nerwowego w&nbsp;kontekście rozwoju mowy. Neurologopeda zajmuje się również terapią funkcji pokarmowych i&nbsp;oddechowych.",
        },
        {
          title: "Czym zajmuje się Fizjoterapeuta na zajęciach WWRD?",
          content:
            "Fizjoterapeuta na zajęciach Wczesnego Wspomagania Rozwoju koncentruje się na wspieraniu prawidłowego rozwoju ruchowego dziecka w&nbsp;zakresie motoryki dużej. Trenuje z&nbsp;dzieckiem równowagę, koordynację ruchową i&nbsp;siłę mięśniową. Fizjoterapeuta dba także o&nbsp;rozwój motoryki małej, czyli precyzyjnych ruchów ręki, pozwalających na chwytanie i&nbsp;manipulowanie przedmiotami. Umiejętności te są niezbędne do rozwoju umiejętności pisania i&nbsp;wykonywania prac manualnych. Terapeuta rehabilitant zajmuje się korygowaniem wad postawy dziecka, poprzez prowadzenie ćwiczeń korekcyjnych. Dba także o&nbsp;rozwój integracji sensorycznej pacjenta. Jeśli dziecko zmaga się z&nbsp;zaburzeniami neurologicznymi, fizjoterapeuta wykorzystuje specjalistyczne metody ćwiczeń, takie jak terapia metodą NDT-Bobath czy&nbsp;terapię metodą Vojty, w&nbsp;celu poprawy funkcji&nbsp;motorycznych.",
        },
        {
          title: "Jaki jest cel Integracji Sensorycznej w ramach WWRD?",
          content:
            "Zajęcia integracji sensorycznej mają na celu poprawę przetwarzania bodźców sensorycznych (dotykowych, wzrokowych, słuchowych, proprioceptywnych i&nbsp;przedsionkowych) w&nbsp;mózgu, co&nbsp;przekłada się na bardziej harmonijny rozwój motoryczny, emocjonalny i&nbsp;społeczny dziecka. Dzięki pracy z&nbsp;terapeutą SI dziecko uczy się adekwatnie reagować na bodźce (np.&nbsp;przestaje unikać dotyku, hałasu), zyskuje lepszą koordynację ruchową i&nbsp;równowagę ciała, poprawia się jego zdolność do koncentracji uwagi, zyskuje zdolność planowania motorycznego i&nbsp;kontrolowania&nbsp;odruchów.",
        },
        {
          title: "Jaki jest cel Terapi ręki w ramach WWRD?",
          content:
            "Terapia ręki ma na celu poprawę sprawności manualnej dziecka,uczy  precyzyjnych ruchów dłoni i palców oraz koordynacji wzrokowo-ruchowej. Jest skierowana do dzieci, które mają trudności z czynnościami wymagającymi precyzyjnych ruchów dłoni, takich jak pisanie, rysowanie, zapinanie guzików, wycinanie czy manipulowanie drobnymi przedmiotami. Terapia ręki skupia się na wzmacnianiu mięśni dłoni i palców, usprawnianieniu chwytu i siły rąk, usprawnianie zdolności do precyzyjnych ruchów w oparciu o kontrolę wzroku, usprawnienie ruchów naprzemiennych i współpracy rąk podczas zadań wymagających ich koordynacji.",
        },
      ],
      ctaText: "Sprawdź jak uzyskać darmowe zajęcia WWRD",
      ctaLink: "/wsparcie-dla-dzieci/jak-uzyskac-darmowe-zajecia-wwrd",
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
