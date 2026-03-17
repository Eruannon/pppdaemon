"use client";

import type React from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface ServiceSection {
  title: string;
  description: string;
  description1: string;
  imageSrc: string;
  imageAlt: string;
  accordionItems: { title: string; content: string }[];
  ctaText: string;
  ctaLink: string;
}

const ServiceSectionComponent: React.FC<ServiceSection & { index: number }> = ({
  title,
  description,
  description1,
  imageSrc,
  imageAlt,
  accordionItems,
  ctaText,
  ctaLink,
  index,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12">
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
            <div
              ref={contentRef}
              className="lg:col-span-7 flex flex-col items-center"
            >
              <p className="space-y-4 sm:space-y-6 text-sm sm:text-base text-zinc-700 font-medium tracking-tight">
                <Markdown>{description1}</Markdown>
              </p>
              <Accordion type="single" collapsible className="w-full py-4">
                <AccordionItem value="red-flags">
                  <AccordionTrigger>
                    Czerwone flagi - zanim przyjdziesz na diagnozę
                  </AccordionTrigger>
                  <AccordionContent>
                    <Markdown>
                      Czerwone flagi sygnalizujące możliwość występowania
                      zaburzeń ze spektrum autyzmu u najmłodszych dzieci to
                      m.in. brak kontaktu wzrokowego z mamą, brak reakcji na
                      imię, brak dzielenia wspólnego pola uwagi,
                      niewykształcenie się gestu wskazywania palcem. Na uwagę
                      zasługuje też silne przywiązanie do rutyny i schematów
                      dnia codziennego. Częstym objawem zachowań autystycznych
                      jest występowanie powtarzalnych ruchów ciała, takich jak
                      machanie rękami, kołysanie się lub kręcenie się wokół
                      własnej osi. W rozwoju dzieci ze spektrum autyzmu
                      pojawiają się deficyty integracji sensorycznej, zwłaszcza
                      nadwrażliwość lub niedowrażliwość na dźwięki, dotyk lub
                      światło. Znamiennym jest również opóźniony rozwój mowy lub
                      nietypowy sposób komunikacji dziecka z otoczeniem.
                      Spektrum autyzmu niejednokrotnie charakteryzuje się
                      trudnością w zrozumieniu żartów, metafor, emocji innych
                      osób. Wszystko to może rodzić trudności w interakcjach
                      społecznych – dziecko będące w spektrum autyzmu nie bawi
                      się zgodnie z innymi dziećmi i nie dzieli się
                      zainteresowaniami z rówieśnikami.
                    </Markdown>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="space-y-4 sm:space-y-6 text-sm sm:text-base text-zinc-700 font-medium tracking-tight">
                <Markdown>{description}</Markdown>
              </p>
            </div>
          </div>
          <div>
            <h2 className=" text-xl tracking-tight font-semibold mb-2">
              Proces diagnozy przebiega następująco:
            </h2>
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

export function DiagnozaAutyzmu() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza Autyzmu (ADOS-2)",
      description1:
        "Spektrum autyzmu (ASD – Autism Spectrum Disorder) to&nbsp;szeroki zbiór zaburzeń neurorozwojowych, które w&nbsp;istotny sposób wpływają na&nbsp;jakość komunikacji człowieka z&nbsp;otoczeniem, łatwość nawiązywania relacji społecznych i&nbsp;efektywność przetwarzania bodźców. Zaburzenie to&nbsp;jest definiowane jako spektrum, co&nbsp;oznacza, że&nbsp;jego objawy mogą być bardzo różne – od&nbsp;łagodnych trudności po&nbsp;łębokie zaburzenia rozwojowe. Z&nbsp;tego względu też bardzo trudno określić typowe zachowania osób będących w&nbsp;spektrum autyzmu. Niemniej na&nbsp;przestrzeni lat powstała lista tzw. czerwonych flag sygnalizujących możliwość występowania u&nbsp;dzieci ASD.",
      description:
        "Statystycznie autyzm można zaobserwować już w&nbsp;pierwszym roku życia dziecka, ale oficjalna diagnoza zazwyczaj stawiana jest między 2. a&nbsp;5. rokiem życia. Wczesne rozpoznanie pozwala na&nbsp;szybsze wdrożenie terapii, co&nbsp;znacznie poprawia późniejsze funkcjonowanie dziecka.",
      imageSrc: "/assets/diagnozy/autyzm.jpg",
      imageAlt: "Specjalista obserwujący dziecko",
      accordionItems: [
        {
          title: "1. Wywiad z rodzicami",
          content:
            "Podczas wywiadu dotyczącego przebiegu rozwoju dziecka zalecana jest obecność obojga rodziców, ze względu na różnorodność spostrzeżeń będących udziałem zarówno matki jak i ojca dziecka. Zwykle dopiero odpowiedzi obojga rodziców tworzą cały i spójny obraz zachowań i preferencji dziecka. Specjalista pyta opiekunów m.in. o wiek w którym dziecko osiągało kamienie milowe swego rozwoju, ulubiony sposób zabawy, reakcje na bodźce, czy interakcje z innymi. Wywiad z rodzicami może być wspomagany specjalnym kwestionariuszem.",
        },
        {
          title: "2. Obserwacja dziecka",
          content:
            "Podczas obserwacji specjalista ocenia zachowanie dziecka w różnych sytuacjach. Przygląda się jak reaguje ono na kontakt z osobą dorosłą i rówieśnikami, w jaki sposób realizuje polecenia terapeuty oraz jak przebiega proces zabawy. Podczas tych spostrzeżeń diagnosta analizuje m.in. kontakt wzrokowy, poziom umiejętności społecznych, definiowany częstością inicjowania interakcji oraz odwzajemnianie uśmiechu rozmówcy. Specjalista zwraca również uwagę na sposób komunikacji prezentowany przez dziecko. Sprawdza czy dziecko używa gestów, rozumie mimikę twarzy, czy naśladuje ruchy oraz w jaki sposób formułuje zdania.",
        },
        {
          title: "3. Testy diagnostyczne",
          content:
            "Najczęściej stosowanym testem diagnostycznym jest ADOS-2 (Autism Diagnostic Observation Schedule, Second Edition) nazywany złotym standardem w diagnozie autyzmu. Poszczególne moduły testu dostosowane są do wieku i poziomu mowy dziecka.",
        },
        {
          title: "4. Konsultacje dodatkowe",
          content:
            "Aby wykluczyć inne przyczyny trudności dziecka, może zaistnieć potrzeba wykonania badań neurologicznych takich jak EEG, czy rezonans magnetyczny, badania słuchu aby wykluczyć trudności w rozwoju mowy i interakcji społecznych spowodowane niedosłuchem, ocena logopedyczna analizująca rozwój językowy dziecka oraz badanie psychologiczne mające na celu ocenę inteligencji i funkcji poznawczych. Potwierdzenie diagnozy wykonuje zawsze lekarz psychiatra dziecięcy.",
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
