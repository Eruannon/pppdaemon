"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowRight, FaCheck } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import Markdown from "markdown-to-jsx";

interface TherapySection {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt: string;
  accordionItems?: { title: string; content: string }[];
  listItems?: string[];
  ctaText?: string;
  ctaLink?: string;
}

const TherapySectionComponent: React.FC<TherapySection & { index: number }> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  accordionItems,
  listItems,
  ctaText,
  ctaLink,
  index,
}) => {
  const { fontSizeLevel, highContrast } = useAccessibility();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const getFontSizeClass = (level: number) => {
    const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
    return sizes[level] || "text-base";
  };

  const getHeaderFontSizeClass = (level: number) => {
    const sizes = ["text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"];
    return sizes[level] || "text-3xl";
  };

  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  const isEven = index % 2 === 0;

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div
          className={`flex flex-col lg:flex-row items-stretch ${
            isEven ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {imageSrc && (
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{
                  height: contentHeight ? `${contentHeight}px` : "500px",
                }}
              >
                {imageSrc.endsWith(".mp4") ? (
                  <video
                    src={imageSrc}
                    title={imageAlt}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loop
                    muted
                    autoPlay
                    controls={false}
                    aria-label={imageAlt}
                  />
                ) : (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                )}
              </div>
            </div>
          )}
          <div
            ref={contentRef}
            className={`w-full ${imageSrc ? "lg:w-1/2" : "lg:w-full"} ${
              isEven ? "lg:pl-12" : "lg:pr-12"
            } flex flex-col justify-center`}
          >
            <h3
              className={`font-display mb-6 tracking-tight font-semibold text-left ${headerFontSizeClass}`}
            >
              {title}
            </h3>
            {description && (
              <Markdown
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                {description}
              </Markdown>
            )}
            {accordionItems && (
              <Accordion type="single" collapsible className="w-full mb-6">
                {accordionItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx + 1}`}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                      <Markdown>{item.content}</Markdown>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
            {listItems && (
              <ul className="mb-6">
                {listItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start mb-2 ${
                      highContrast ? "text-yellow-400" : "text-green-800"
                    }`}
                  >
                    <FaCheck className="mt-1 mr-2" />
                    <Markdown
                      className={`${
                        highContrast ? "text-yellow-400" : "text-gray-700"
                      } ${fontSizeClass} text-left`}
                    >
                      {item}
                    </Markdown>
                  </li>
                ))}
              </ul>
            )}
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="text-slate-800 flex justify-start"
              >
                <Button
                  variant="outline"
                  className={`flex items-center justify-center ${
                    highContrast
                      ? "bg-gray-700 border-gray-600 text-yellow-400"
                      : "bg-slate-50/80 border-slate-700"
                  }`}
                >
                  {ctaText}
                  <FaCircleArrowRight className="ml-2 rotate-[-45deg]" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const TherapyCardsSection: React.FC<{ cards: TherapyCard[] }> = ({ cards }) => {
  const { highContrast } = useAccessibility();

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`border ${
                card.type === "warning"
                  ? highContrast
                    ? "border-orange-500 bg-gray-800"
                    : "border-orange-800 bg-orange-100"
                  : highContrast
                  ? "border-red-500 bg-gray-800"
                  : "border-red-500 bg-red-100"
              }`}
            >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Markdown>{card.content}</Markdown>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

interface TherapyCard {
  title: string;
  content: string;
  type: "warning" | "error";
}

export default function TerapiaPar() {
  const { highContrast } = useAccessibility();



  const therapySections: TherapySection[] = [
    {
      title: "Terapia par",
      description: `
## Kiedy warto rozważyć udział w terapii dla osób będących w związku?

Udział w terapii dla osób będących w związku warto rozważyć w kilku sytuacjach:
        `,
      imageSrc: "/assets/terapia-dla-par/terapiadlapar2.mp4",
      imageAlt: "Terapia par video",
      accordionItems: [
        {
          title: "Komunikacja",
          content:
            "Jeżeli czujesz, że komunikacja w związku jest nieskuteczna, pełna konfliktów lub po prostu brakuje wam zdolności do rozwiązywania problemów razem, terapia może pomóc w nauczeniu się lepszych technik komunikacyjnych.",
        },
        {
          title: "Zmiany w relacji",
          content:
            "Duże zmiany życiowe, takie jak narodziny dziecka, zmiana pracy, przeprowadzka lub śmierć bliskiej osoby, mogą wpłynąć na dynamikę związku. Terapia pomoże wam poradzić sobie z tymi zmianami w zdrowy sposób.",
        },
        {
          title: "Powracające kłótnie lub konflikty",
          content:
            "Jeśli ciągle kłócicie się o te same sprawy lub macie trudności z osiągnięciem kompromisu, terapia może pomóc w identyfikacji korzeni problemów i w znalezieniu sposobów na ich rozwiązanie.",
        },
        {
          title: "Brak bliskości lub intymności",
          content:
            "Gdy odczuwacie, że wasza emocjonalna lub fizyczna bliskość osłabła, a próby jej przywrócenia na własną rękę nie przynoszą rezultatów, terapia może pomóc w odbudowaniu tej intymności.",
        },
        {
          title: "Niewierność lub zaufanie",
          content:
            "Po zdradzie lub innych sytuacjach, które nadszarpnęły zaufanie, terapia może być kluczowa w procesie leczenia i odbudowy relacji.",
        },
        {
          title: "Przygotowanie do małżeństwa",
          content:
            "Dla par planujących ślub, terapia przedmałżeńska może być cennym narzędziem do zrozumienia oczekiwań, ustalenia celów życiowych i wzmocnienia relacji przed zawarciem związku małżeńskiego.",
        },
      ],
    },
    {
      title: "Dlaczego terapia dla par?",
      description: `
**Terapia par to proces**, w którym dwoje ludzi pracuje nad poprawą jakości swojego związku poprzez rozwój wzorców komunikacji i interakcji, naukę rozwiązywania konfliktów oraz komunikowania własnych uczuć i potrzeb oraz zrozumienie partnera.

Terapia skierowana jest zarówno do osób znajdujących się w związkach formalnych i nieformalnych, do osób znajdujących się w związkach partnerskich lub jednopłciowych.
      `,
      imageSrc: "/assets/terapia-dla-par/terapiadlapar3.mp4",
      imageAlt: "Terapia dla par",
    },
    {
      title: "Terapia dla osób tworzących związek daje możliwość:",
      imageSrc: "/assets/terapia-dla-par/terapia_par.jpg",
      imageAlt: "Para w terapii",
      listItems: [
        "spotkania z partnerem na bezpiecznym gruncie, w atmosferze równości i bezstronności,",
        "spojrzenia na swój związek z innej perspektywy,",
        `poprawy komunikacji w relacji bez tak zwanej przemocy słownej, która nie jest tylko:
          - krzykiem,
          - używaniem wulgaryzmów,
          - obrażaniem się,
          - reagowaniem milczeniem,
          - atakami słownymi,`,
        "wyrażania własnych uczuć, potrzeb, oczekiwań, obaw, rozterek,",
        "zrozumienia uczuć oraz potrzeb partnera.",
      ],
    },
    {
      title: "Spróbuj terapii dla par",
      description: `
Podczas terapii osoby uczą się skutecznej komunikacji, ustalania przyczyn konfliktów oraz sposobów na ich rozwiązywanie z korzyścią dla obu stron. Ponadto, jednym z jej celów jest ogólna poprawa relacji oraz zwiększenie poczucia bliskości emocjonalnej.
      `,
      ctaText: "Umów wizytę",
      ctaLink: "/kontakt",
      imageSrc: "",
      imageAlt: "",
    },
  ];

  const therapyCards: TherapyCard[] = [
    {
      title: "Rozważanie rozstania",
      content:
        "Jeżeli myślicie o rozstaniu lub rozwodzie, ale chcielibyście najpierw spróbować rozwiązać problemy i być może dać sobie szansę na kontynuowanie związku, terapia może pomóc w podjęciu decyzji w bardziej świadomy i przemyślany sposób.",
      type: "error",
    },
    {
      title: "Przemoc lub agresja",
      content:
        "Jeżeli w związku pojawiają się zachowania agresywne, manipulacyjne lub zachowania kontrolujące, terapia może pomóc w adresowaniu i nazywaniu tych problemów. Ważne jest jednak, aby zapewnić bezpieczeństwo wszystkim zaangażowanym osobom, a w niektórych przypadkach konieczna może być interwencja specjalistów od bezpieczeństwa lub – nawet – prawników.",
      type: "warning",
    },
    {
      title: "Rodzicielskie wyzwania",
      content:
        "Kiedy macie problemy z ustaleniem wspólnych zasad wychowawczych lub różnice w metodach wychowania dzieci stają się źródłem konfliktów, terapia może pomóc w zharmonizowaniu Waszych podejść i wspieraniu siebie nawzajem jako rodziców.",
      type: "error",
    },
    {
      title: "Problemy seksualne",
      content:
        "Kłopoty w życiu seksualnym, takie jak rozbieżne libido, trudności z funkcjonowaniem seksualnym lub różnice w preferencjach, mogą być trudne do omówienia bez wsparcia. Terapia par może zapewnić bezpieczne środowisko do dyskusji o tych sprawach i szukania rozwiązań, aby Wasze życie intymne sprawiało przyjemność i dawało satysfakcję Wam obojgu.",
      type: "warning",
    },
    {
      title: "Problemy finansowe",
      content:
        "Jeśli pieniądze są źródłem napięcia w związku, co może dotyczyć zarządzania budżetem, długami lub różnic w nawykach wydatkowych, terapia może pomóc w zrozumieniu i zharmonizowaniu waszych finansowych priorytetów i strategii.",
      type: "error",
    },
    {
      title: "Przeżycie traumy lub utraty",
      content:
        "Kiedy jeden lub obaj partnerzy doświadczają traumy lub głębokiej straty, takiej jak śmierć bliskiej osoby, terapia może pomóc w procesie żałoby i adaptacji do nowej sytuacji, jednocześnie wspierając związek.",
      type: "warning",
    },
  ];

  return (
    <div
      className={`font-sans overflow-x-hidden ${
        highContrast ? "bg-black text-yellow-400" : "bg-white"
      }`}
    >
      
      <TherapySectionComponent {...therapySections[0]} index={0} />

      
      <TherapyCardsSection cards={therapyCards} />

      
      {therapySections.slice(1).map((section, index) => (
        <TherapySectionComponent
          key={index + 1}
          {...section}
          index={index + 1}
        />
      ))}
    </div>
  );
}
