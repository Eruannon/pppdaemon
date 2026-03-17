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

export function DiagnozaPracoholizmu() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza uzależnień - pracoholizm",
      description:
        "Obsesja / kompulsja pracy jest rodzajem patologii, która polega na obsesyjnym myśleniu o pracy i kompulsyjnym wykonywaniu czynności związanych z pracą. Stanowi wewnętrzny przymus pracy. Charakteryzuje się niezdolnością do wypracowania zdrowych nawyków pracy, zaniedbywaniem innych aktywności życiowych często ze szkodą dla zdrowia fizycznego, psychicznego i społecznego. <br/><br/> Osoby obsesyjnie zaangażowane w pracę są przeciążone pracą ze względu na styl pracy, który przyjmują, a nie na realny wysiłek, który wkładają w wykonywanie czynności. Styl ten może opierać się na okresach bezustannego zapracowania, naprzemiennych fazach obsesyjnej pracy i unikania pracy, potrzebie ciągłej zmiany aktywności ze względu na braki koncentracji uwagi, skupiania się na detalach pracy i rozkoszowaniu się wykonywaną czynnością, lub też nieustannym oferowaniu pomocy innym. <br/><br/> Uzależnienie od pracy obejmuje emocjonalną potrzebę dążenia do perfekcjonizmu w pracy. Wymagania stawiane samemu sobie są z reguły nierealistyczne i mają kompensować niskie poczucie własnej wartości. Nawet podczas czasu przeznaczonego na relaks osoba uzależniona myślami przebywa w pracy. Z nią też związane jest większość wyobrażeń a nawet marzeń. <br/><br/> Osoba uzależniona od pracy, podobnie jak każda inna osoba zmagająca się z nałogiem, wypiera fakt, że przestała kontrolować swoje życie. Pracoholik pracuje dopóty nie zderzy się z dnem. Niestety, często dnem pracoholików jest utrata rodziny lub zdrowia.",
      imageSrc: "/assets/diagnozy/pracoholizm.jpg",
      imageAlt:
        "Osoba siedząca przy biurku z zegarem w tle, symbolizującym pracoholizm",
      accordionItems: [
        {
          title: "Faza wstępna",
          content:
            '- Poświęcanie coraz większej ilości czasu na pracę.<br/>- Osoba porównuje się z innymi.<br/>- Chęć wykazania się dobrymi wynikami, aby uniknąć niepowodzeń, czyjegoś niezadowolenia.<br/>- Przeżywanie poczucia winy z powodu zaniedbywania rodziny, relacji z bliskimi.<br/>- Relaksujące do tej pory zajęcia są odczuwane jako "coś, co trzeba zrobić".<br/>- Coraz częstsze odczuwanie smutku, niepokoju.<br/>- Objawy somatyczne: bóle głowy, żołądka, problemy naczyniowo-sercowe.',
        },
        {
          title: "Faza krytyczna",
          content:
            "- Poważne skutki zdrowotne i społeczne, np. groźba rozwodu, zawał serca, napady paniki, choroba wrzodowa żołądka.<br/>- Osoba stara się mniej pracować, jednak to jej się nie udaje.<br/>- Trudności z koncentracją.<br/>- Poczucie wyczerpania, problemy ze snem.<br/>- Stany depresyjne i lękowe.<br/>- Może doprowadzić do niezdolności do pracy.",
        },
        {
          title: "Faza chroniczna",
          content:
            "- Funkcjonowanie skupione tylko wokół pracy.<br/>- Mała ilość snu i jedzenia.<br/>- Może doprowadzić do śmierci.",
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
