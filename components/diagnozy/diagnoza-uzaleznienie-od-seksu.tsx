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

export function DiagnozaKompulsywnychZachowanSeksualnych() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza uzależnień - kompulsywne zachowania seksualne",
      description:
        "Przez lata seks był absolutnym tematem tabu. Rewolucja kulturalna i emancypacja kobiet zmieniła jednak podejście współczesnego człowieka do seksualności. Jest to niewątpliwie zjawisko pozytywne, ze względu na szereg problemów natury zdrowia fizycznego i psychicznego, które nie miały prawa niegdyś ujrzeć światła dziennego. Dziś osoby z uświadomionym problemem bez przeszkód znajdują pomoc i wsparcie. <br/><br/> Akceptacja własnej seksualności i potrzeb z tym związanych jest ważnym elementem rozwoju człowieka. Jednocześnie zauważa się przeniesienie środka ciężkości tego tematu. Aktualnie współczesna kultura promuje seksualność. Wszystko, co podszyte seksem, staje się bardziej atrakcyjne. Seks bywa pewnym atrybutem, narzędziem manipulacji. <br/><br/> Kiedy poszukiwanie doświadczeń seksualnych zaczyna przybierać formę przymusowych i wymykających się spod kontroli zachowań, mówimy już o uzależnieniu. Uzależnienie może przybierać różne formy, wśród których wymieniane są nie tylko uwodzenie i kontakty fizyczne, ale także oglądanie pornografii, cyberseks, fantazjowanie na tematy erotyczne.",
      imageSrc: "/assets/diagnozy/płcie.jpg",
      imageAlt: "Osoba otoczona symbolami związanymi z seksualnością",
      accordionItems: [
        {
          title: "O hiperseksualności",
          content:
            "Hiperseksualność charakteryzuje się nadmiernymi, trudnymi do kontrolowania myślami, fantazjami i aktywnościami seksualnymi, które negatywnie wpływają na codzienne funkcjonowanie, relacje i samopoczucie.<br/><br/> Mogą objawiać się kompulsywnym podejmowaniem zachowań seksualnych, trudnością w ograniczeniu impulsów, czy poczuciem braku kontroli nad własną seksualnością.<br/><br/> Hiperseksualność bywa powiązana z czynnikami psychologicznymi, biologicznymi lub społecznymi i często wymaga profesjonalnej diagnozy oraz odpowiedniego wsparcia terapeutycznego.<br/><br/> Nasi doświadczeni psychologowie i pedagodzy stosują nowoczesne narzędzia diagnostyczne, aby:<br/> - Zidentyfikować przyczyny i mechanizmy powstawania trudności,<br/> - Zrozumieć indywidualny kontekst problemu,<br/> - Opracować spersonalizowany plan wsparcia i terapii. Dzięki indywidualnemu podejściu, proces diagnostyczny odbywa się w atmosferze pełnej zrozumienia, szacunku i dyskrecji.",
        },
        {
          title:
            "Mini Test 1 – sprawdź czy należy udać się na diagnozę uzależnienia od seksu",
          content:
            "Jeśli w okresie roku przynajmniej trzy z poniżej wymienionych objawów wystąpiły u ciebie, najprawdopodobniej cierpisz z powodu uzależnienia od seksu:<br/><br/>- Silna potrzeba lub poczucie przymusu realizowania kompulsywnych zachowań związanych z seksem.<br/>- Subiektywne przekonanie o mniejszej możliwości kontrolowania zachowań związanych z seksem, tj. upośledzenie kontroli nad powstrzymywaniem się od kompulsywnych zachowań.<br/>- Występowanie, przy próbach ograniczenia możliwości realizowania kompulsywnych zachowań związanych z seksem, niepokoju, rozdrażnienia czy gorszego samopoczucia.<br/>- Poświęcanie coraz większej ilości czasu na kompulsywne zachowania w celu uzyskania zadowolenia.<br/>- Postępujące zaniedbywanie alternatywnych źródeł przyjemności.<br/>- Kontynuowanie kompulsywnych zachowań pomimo szkodliwych następstw.",
        },
        {
          title:
            "Mini Test 2 – sprawdź czy należy udać się na diagnozę uzależnienia od seksu",
          content:
            '- Czy ukrywa Pan/i zachowania seksualne lub uczucie pożądania przed bliskimi osobami?<br/>- Czy prowadzi Pan/i "podwójne życie"?<br/>- Czy pociąga Panią/Pana uprawianie seksu w nieodpowiednich do tego miejscach lub sytuacjach?<br/>- Czy chętnie ogląda Pan/i podniecające zdjęcia i sceny w gazetach, pismach, na filmach?<br/>- Czy fantazje seksualne wpływają niekorzystnie na Pani/Pana intymne związki lub stanowią ucieczkę od problemów?<br/>- Czy po akcie seksualnym stara się Pan/i możliwie szybko opuścić partnera?<br/>- Czy wstydzi się Pan/i swojego ciała i swojej seksualności?<br/>- Czy w każdym kolejnym intymnym związku pojawiają się te same problemy?<br/>- Czy potrzeba kontaktów seksualnych się nasila?<br/>- Czy Pani/Pana zachowania seksualne były powodem aresztowania?<br/>- Czy zachowania seksualne stoją w sprzeczności z sumieniem?<br/>- Czy zachowania seksualne wiążą się z ryzykiem?<br/>- Czy Pani/Pana zachowania seksualne wywoływały poczucie beznadziejności lub myśli samobójcze?<br/><br/> Źródło: http://psychiatria.mp.pl/uzaleznienia/73113,seksoholizm-uzaleznienie-od-seksu',
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
