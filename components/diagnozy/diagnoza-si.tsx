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
          <h3 className="text-2xl sm:text-xl font-semibold mb-6 tracking-tight">
            Kluczowe sygnały, które powinny skłonić rodziców do zgłoszenia się
            do specjalisty to:
          </h3>
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

export function DiagnozaSi() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza SI",
      description:
        "Diagnoza integracji sensorycznej (SI) to&nbsp;proces oceny, który pozwala określić, czy dziecko prawidłowo przetwarza bodźce zmysłowe, takie jak dotyk, ruch, dźwięk, wzrok, smak i&nbsp;zapach.<br/><br/>Pojawiające się trudności w integracji tych bodźców mogą znacząco wpływać na rozwój dziecka, jego zachowanie, koncentrację, koordynację ruchową i&nbsp;umiejętności szkolne.<br/><br/>Diagnozę SI przeprowadza terapeuta integracji sensorycznej (najczęściej fizjoterapeuta, pedagog lub psycholog specjalizujący się w&nbsp;SI).<br/><br/>Proces diagnozy to&nbsp;zwykle 2&nbsp;spotkania trwające około godziny.<br/><br/>Pierwszy etap diagnozy jest oparty o&nbsp;informacje uzyskane z&nbsp;wywiadu z&nbsp;rodzicami i&nbsp;obejmuje analizę rozwoju dziecka, analizę napotykanych przez nie trudności oraz omówienie specyfiki codziennych zachowań.<br/><br/>Drugi etap diagnozy to tzw. testy kliniczne SI będące obserwacją reakcji na&nbsp;podawane bodźce, ocena stopnia koordynacji ruchowej, umiejętność utrzymania równowagi i&nbsp;prawidłowego rozłożenia napięcia mięśniowego dziecka.",
      imageSrc: "/assets/diagnozy/diagnoza-si.jpg",
      imageAlt: "dziecko ubierające maskę",
      accordionItems: [
        {
          title:
            "1. Problemy z odbiorem i przetwarzaniem bodźców dotykowych (nadwrażliwość lub niedowrażliwość)",
          content:
            "Dziecko nie lubi być dotykane, nie toleruje przytulania. Unika mycia twarzy, czesania włosów, obcinania paznokci. Nie lubi ubrań o określonej fakturze, przeszkadzają mu metki, skarpetki. Ciągle dotyka przedmiotów lub innych osób.",
        },
        {
          title: "2. Trudności z równowagą i koordynacją",
          content:
            "Dziecko często się potyka, przewraca, ma trudności z jazdą na rowerze, skakaniem na jednej nodze. Ma trudności z łapaniem i rzucaniem piłki. Boi się schodów, huśtawek, drabinek na placu zabaw. Ma niezgrabne ruchy, unika aktywności ruchowych.",
        },
        {
          title: "3. Dysfunkcje percepcji słuchowej",
          content:
            "Dziecko nie reaguje na wołanie po imieniu, choć słuch jest prawidłowy. Przeszkadzają mu głośne dźwięki (np. odkurzacz, suszarka, dzwonek). Ma trudności z rozumieniem poleceń wieloetapowych. Często zakrywa uszy przebywając w hałasie.",
        },
        {
          title: "4. Zaburzenia percepcji wzrokowej",
          content:
            "Dziecko myli litery lub cyfry, ma trudności z czytaniem i pisaniem. Ma trudności z oceną odległości, np. obija się o przedmioty. Unika układanek, puzzli, prac plastycznych.",
        },
        {
          title: "5. Nierównomierne napięcie mięśniowe",
          content: "Stwierdzona hipotonia, hipertonia lub napięcie mieszane.",
        },
        {
          title: "6. Zaburzenia odżywiania",
          content:
            "Dziecko jest bardzo wybiórcze w jedzeniu, unika określonych konsystencji. Nie toleruje określonych smaków i zapachów. Je bardzo wolno lub bardzo szybko.",
        },
        {
          title: "7. Trudności emocjonalne i społeczne",
          content:
            "Pojawiają się częste wybuchy złości, problemy z kontrolowaniem emocji. Dziecko unika kontaktu z rówieśnikami, nie lubi nowych sytuacji. Ma trudności z koncentracją, łatwo się rozprasza.",
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
