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

          <div>
            <h2 className=" text-xl font-semibold tracking-tighter mb-3">
              Jakie korzyści przynosi dogoterapia?
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

export function Dogoterapia() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Dogoterapia (kynoterapia)",
      description:
        "Dogoterapia (kynoterapia) to metoda wspomagająca terapię i rozwój dziecka poprzez bliski kontakt z odpowiednio wyszkolonym czworonogiem. W Magnolii dogoterapię stosujemy w pracy z dziećmi wymagającymi rehabilitacji ruchowej oraz terapii psychologicznej. <br/><br/> Magnoliowa dogoterapia opiera się na spokojnej, pełnej empatii i zrozumienia interakcji człowieka z psem. Pomocną łapką służą dwa psy: suczka Daisy (Golden Retreiver) oraz pies Szaman (Labrador Retriever).<br/><br/> Nasze czworonogi łagodnie motywują swych towarzyszy do aktywności, pomagają w nawiązywaniu relacji i wspierają różne aspekty rozwoju. Dogoterapia przybiera tu formę zabawy, aktywizujących ćwiczeń ruchowych lub relaksacji, przynosząc jednocześnie efekt terapeutyczny i edukacyjny.",
      imageSrc: "/assets/oferta-dla-dzieci/dogoterapia.jpg",
      imageAlt: "Dziecko podczas dogoterapii",
      accordionItems: [
        {
          title: "Rozwój emocjonalny",
          content:
            "• Obecność psa działa uspokajająco, zmniejsza stres, lęk i napięcie emocjonalne.\n• Pomaga w regulacji emocji – dzieci uczą się wyrażania uczuć w bezpieczny sposób.\n• Buduje poczucie bezpieczeństwa i pewności siebie, szczególnie u dzieci z trudnościami adaptacyjnymi.\n• Może pomagać w terapii dzieci z depresją lub lękami, poprawiając ich samopoczucie.",
        },
        {
          title: "Rozwój społeczny i komunikacyjny",
          content:
            "• Pies zachęca do nawiązywania interakcji, co jest szczególnie ważne dla dzieci z autyzmem i trudnościami społecznymi.\n• Uczy empatii i odpowiedzialności – dziecko musi być delikatne wobec psa, co przekłada się na jego relacje z ludźmi.\n• Pomaga przełamywać bariery w komunikacji – dzieci chętniej mówią i nawiązują kontakt werbalny i niewerbalny.\n• Uczy współpracy, np. przy wspólnych zadaniach z psem w grupie.",
        },
        {
          title: "Rozwój fizyczny i motoryczny",
          content:
            "• Ruch związany z interakcją z psem (chodzenie, rzucanie piłki, głaskanie) poprawia koordynację ruchową i równowagę.\n• Głaskanie i karmienie psa rozwijają motorykę małą i precyzję ruchów rąk.\n• Ćwiczenia z psem mogą wzmacniać mięśnie i poprawiać postawę u dzieci z niepełnosprawnością ruchową.",
        },
        {
          title: "Rozwój poznawczy",
          content:
            "• Dzieci uczą się nowych pojęć i słów, np. nazywania części ciała psa, komend.\n• Rozwijają koncentrację i pamięć – muszą zapamiętać zasady pracy z psem.\n• Nauka komend dla psa wspiera rozwój logicznego myślenia i konsekwencji w działaniu.",
        },
      ],
      ctaText: "Zarezerwuj termin na dogoterapię",
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
