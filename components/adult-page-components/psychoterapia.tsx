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
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-zinc-700 font-medium tracking-tight">
                <Markdown>{description}</Markdown>
              </div>
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

export function Psychoterapia() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Psychoterapia",
      description: `W odróżnieniu od poradnictwa psychologicznego psychoterapia jest formą leczenia. Jej celem jest złagodzenie lub całkowite wyeliminowanie objawów zaburzenia.
<br/><br/>
W psychoterapii kluczowym elementem jest zbudowanie odpowiednio szczerej i pełnej zaufania relacji pacjenta z psychoterapeutą. To właśnie terapeuta towarzyszy pacjentowi podczas zmiany, pomaga w modyfikacji jego postaw lub w zmianie negatywnych wzorców zachowania, a także wspiera w radzeniu sobie z różnymi trudnościami.<br/><br/> Nie bez znaczenia jest również otoczenie w którym prowadzona jest terapia. Bezpieczna atmosfera gabinetu powinna tworzyć właściwe warunki do pracy nad sobą, pozwalając na odzyskanie harmonii, prawidłowego funkcjonowania psychicznego i społecznego osoby podejmującej proces psychoterapii. Dobrze prowadzona psychoterapia oprócz walorów zdrowotnych owocuje zwykle szeroko rozumianym rozwojem osobistym pacjenta.
<br/><br/>
Psychoterapia nie jest oznaką słabości – to inwestycja w siebie i swój dobrostan psychiczny.
`,
      imageSrc: "/assets/oferta-dla-doroslych/psychoterapia-image.jpg", 

      imageAlt: "Psychoterapia – przykładowa ilustracja",
      ctaText: "Umów wizytę",
      ctaLink: "/kontakt",
      accordionItems: [
        {
          title: "Osoby, które mogą potrzebować psychoterapii",
          content: `
<ol>
  <li>
    <strong>Osoby z zaburzeniami psychicznymi</strong>
    <ul>
      <li>Depresja</li>
      <li>Zaburzenia lękowe (np. fobie, ataki paniki, zaburzenia obsesyjno-kompulsyjne)</li>
      <li>Zaburzenia osobowości</li>
      <li>PTSD (zespół stresu pourazowego)</li>
      <li>Zaburzenia odżywiania (anoreksja, bulimia, kompulsywne objadanie się)</li>
      <li>Schizofrenia i inne psychozy (w połączeniu z leczeniem farmakologicznym)</li>
    </ul>
  </li>
  <li>
    <strong>Osoby przeżywające kryzys lub trudności życiowe</strong>
    <ul>
      <li>Żałoba po stracie bliskiej osoby</li>
      <li>Rozwód, rozstanie, problemy w relacjach</li>
      <li>Stres związany z pracą, wypalenie zawodowe</li>
      <li>Problemy rodzinne, konflikty w związku</li>
      <li>Doświadczenie traumy, przemocy, zaniedbania</li>
    </ul>
  </li>
  <li>
    <strong>Osoby zmagające się z niską samooceną i trudnościami emocjonalnymi</strong>
    <ul>
      <li>Chroniczny smutek, brak motywacji</li>
      <li>Trudności w radzeniu sobie ze stresem</li>
      <li>Niezdolność do odczuwania radości (anhedonia)</li>
      <li>Nadmierna samokrytyka, poczucie bezwartościowości</li>
    </ul>
  </li>
  <li>
    <strong>Osoby mające problemy z relacjami międzyludzkimi</strong>
    <ul>
      <li>Trudności w budowaniu i utrzymywaniu bliskich relacji</li>
      <li>Problemy z komunikacją i wyrażaniem emocji</li>
      <li>Powtarzające się konflikty w rodzinie lub pracy</li>
    </ul>
  </li>
  <li>
    <strong>Osoby pragnące samorozwoju</strong>
    <ul>
      <li>Lepsze poznanie siebie, swoich emocji i schematów myślowych</li>
      <li>Chęć poprawy jakości życia i dobrostanu psychicznego</li>
      <li>Rozwijanie umiejętności radzenia sobie z trudnościami</li>
    </ul>
  </li>
</ol>
          `,
        },
        {
          title: "Kiedy warto rozważyć psychoterapię?",
          content: `
<ul>
  <li>Gdy trudności emocjonalne trwają dłużej i nie mijają samoistnie</li>
  <li>Gdy objawy (np. lęk, smutek, napięcie) utrudniają codzienne życie</li>
  <li>Gdy masz wrażenie, że „utknąłeś” i nie wiesz, jak sobie poradzić</li>
  <li>Gdy bliscy sugerują, że coś jest nie tak i warto poszukać pomocy</li>
  <li>Gdy pojawiają się myśli samobójcze lub autoagresywne</li>
</ul>
          `,
        },
        {
          title: "Realizowane rodzaje psychoterapii",
          content: `
<p>
  <strong>Terapia psychodynamiczna/psychoanalityczna</strong><br/>
  Polega na odkrywaniu i analizowaniu nieświadomych konfliktów, które leżą u podstaw problemów i trudności psychicznych. Stosowana jest najczęściej w leczeniu zaburzeń osobowości, nastroju czy stresu pourazowego (PTSD).
</p>

<p>
  <strong>Terapia behawioralno-poznawcza</strong><br/>
  Ma na celu zmianę negatywnych wzorców zachowań i myślenia, utrudniających codzienne funkcjonowanie. Tą formę terapii stosuje się najczęściej przy leczeniu zaburzeń odżywiania czy uzależnień.
</p>

<p>
    <strong>Terapia systemowa</strong><br/> Koncentruje się na rozumienia funkcjonowania ludzkiego podczas interakcji z innymi członkami systemów, takich jak np. rodzina. Problemy, z jakimi się zmagamy, często są wynikiem trudności w komunikacji lub napięć wewnątrz systemu (np. rodzinnego), dlatego warto przyjrzeć się bliżej mechanizmom w nim zachodzącym.
    Jeśli masz wątpliwości jakiego typu pomocy potrzebujesz to zapisz się na nasze konsultacje psychologiczne. W razie potrzeby psychoterapię można połączyć razem ze współpracą z innymi specjalistami (psychiatra, seksuolog, itp.)
</p>
          `,
        },
      ],
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
