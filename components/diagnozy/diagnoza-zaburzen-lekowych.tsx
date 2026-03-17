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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12  mb-12">
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

export function DiagnozaZaburzenLekowych() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza zaburzeń lękowych",
      description:
        "Diagnoza zaburzeń lękowych Codzienne funkcjonowanie wielu z&nbsp;nas  bywa trudne i&nbsp;poważnie zaburzone przez przewlekły stres i&nbsp;napięcie.<br/><br/> Doświadczając nadmiernego lęku często czujemy się przytłoczeni i&nbsp;wyczerpani. W&nbsp;rezultacie unikamy sytuacji stresogennych, tracąc niejednokrotnie szasnę na&nbsp;zawodowy rozwój lub latami borykajmy się z&nbsp;problemami w&nbsp;nawiązywaniu nowych  znajomości i&nbsp;zacieśnianiu relacji towarzyskich.<br/><br/> Nadmierny poziom lęku odczuwany  latami  wywołuje też szereg negatywnych skutków dla zdrowia, zarówno fizycznego, jak i&nbsp;psychicznego. Prowadzi do problemów ze&nbsp;strony układu sercowo-naczyniowego, pokarmowego, mięśniowo-szkieletowego oraz nerwowego. <br/><br/>Diagnoza zaburzeń lękowych pozwala „zmierzyć” poziom lęku z&nbsp;jakim zmaga się dana osoba oraz określić tendencję do&nbsp;przeżywania lęku w&nbsp;dłuższym okresie czasu. <br/><br/>Diagnoza stanowi też podstawę do&nbsp;podjęcia i&nbsp;realizacji terapii psychologicznej, a&nbsp;także wykluczenia lub potwierdzenia psychosomatycznych przyczyn odczuwania dolegliwości. <br/><br/>Świadomość podatności na&nbsp;stres może stanowić również kryterium wyboru ścieżki zawodowej korelującej z&nbsp;predyspozycjami do&nbsp;przeżywania sytuacji obciążających psychicznie.",
      imageSrc: "/assets/diagnozy/diagnoza-zaburzen-lekowych.jpg",
      imageAlt: "dziecko ubierające maskę",
      accordionItems: [
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
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
