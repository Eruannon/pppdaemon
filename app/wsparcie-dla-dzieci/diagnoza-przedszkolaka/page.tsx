"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import Markdown from "markdown-to-jsx";

interface SectionData {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt: string;
  accordionItems?: { title: string; content: string }[];
  listItems?: string[];
  ctaText?: string;
  ctaLink?: string;
}

const SectionComponent: React.FC<SectionData & { index: number }> = ({
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
  const isEven = index % 2 === 0;

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
              <div className="relative w-full overflow-hidden rounded-2xl h-96">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          )}
          <div
            className={`w-full ${imageSrc ? "lg:w-1/2" : "lg:w-full"} ${
              isEven ? "lg:pl-12" : "lg:pr-12"
            } flex flex-col justify-center`}
          >
            <h2
              className={`text-left font-semibold mb-6 font-display ${headerFontSizeClass}`}
            >
              {title}
            </h2>
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
              <ul className="text-gray-700 text-base text-left mb-6 list-disc ml-6">
                {listItems.map((item, idx) => (
                  <li key={idx}>
                    <Markdown>{item}</Markdown>
                  </li>
                ))}
              </ul>
            )}
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="text-slate-800 flex justify-start"
              >
                <button
                  className={`p-2 rounded-md border flex items-center justify-center gap-2 ${
                    highContrast
                      ? "bg-gray-600 border-gray-400"
                      : "bg-blue-300 border-blue-800"
                  }`}
                >
                  {ctaText}
                  <FaCircleArrowRight className="rotate-[-45deg]" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const DiagnozaPrzedszkolaka = () => {
  const sections: SectionData[] = [
    {
      title: "Diagnoza Przedszkolaka",
      description: `
Etap przedszkolny jest momentem, w&nbsp;którym rodzice i&nbsp;nauczyciele zaczynają dostrzegać potencjalne trudności rozwojowe u&nbsp;dzieci. Dlaczego właśnie wtedy? Przedszkolak, nawet jeśli wcześniej uczęszczał do&nbsp;żłobka, teraz trafia pod opiekę wykwalifikowanych nauczycieli, którzy mogą dokładniej ocenić jego możliwości i&nbsp;ewentualne problemy.
      `,
      imageSrc: "/assets/diagnozaP.jpg",
      imageAlt: "dziecko",
    },
    {
      title: "Dwa wymiary diagnozy",
      description: `Diagnoza dziecka w&nbsp;wieku przedszkolnym może przebiegać na&nbsp;dwa sposoby:`,
      accordionItems: [
        {
          title: "Ocena gotowości do&nbsp;podjęcia nauki szkolnej",
          content:
            "Procedura diagnozowania gotowości szkolnej jest dobrze opisana w&nbsp;dostępnej literaturze specjalistycznej. Wciąż jednak wiele wątpliwości budzi diagnoza w&nbsp;sytuacjach trudnych, kiedy rodzice dostrzegają problem, kiedy dziecko wzbrania się przed chodzeniem do&nbsp;przedszkola.",
        },
        {
          title: "Analiza psycho-fizycznego funkcjonowania dziecka",
          content:
            "Jak przeprowadzić diagnozę, aby była rzetelna? Jakimi narzędziami posłużyć się podczas diagnozowania i czy narzędzie diagnostyczne to jedyna ścieżka diagnostyczna? To tylko niektóre z pytań, które często stają przed nauczycielami.",
        },
      ],
      imageSrc: "/assets/diagnozaP2.jpg",
      imageAlt: "dziecko",
    },
    
    {
      title: "Skontaktuj się z nami",
      description: `
Zapraszamy na diagnozę przedszkolaka, gdzie specjaliści pomogą w ocenie rozwoju Twojego dziecka. Koszt diagnozy zaczyna się od 500 zł.
      `,
      ctaText: "Umów wizytę",
      ctaLink: "/Kontakt",
      imageSrc: "",
      imageAlt: "",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {sections.map((section, index) => (
        <SectionComponent key={index} {...section} index={index} />
      ))}
    </div>
  );
};

export default DiagnozaPrzedszkolaka;
