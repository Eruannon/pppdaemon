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

export function NdtBobath() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Rehabilitacja niemowląt metodą<br/>NDT-Bobath",
      description:
        "Rehabilitacja niemowląt metodą NDT-Bobath (Neurodevelopmental Treatment – Bobath) to&nbsp;podejście terapeutyczne stosowane u&nbsp;dzieci z&nbsp;zaburzeniami neurologicznymi, a&nbsp;także nierównomiernym napięciem mięśniowym czy opóźnionym rozwojem ruchowym.<br/><br/>Rehabilitację tą&nbsp;metodą zaleca zwykle pediatra, neurolog lub&nbsp;fizjoterapeuta widząc, że&nbsp;dziecko nie osiąga kamieni milowych rozwoju ruchowego w&nbsp;odpowiednim dla siebie czasie.<br/><br/>Częstym problemem wskazującym na&nbsp;potrzebę rozpoczęcia rehabilitacji są&nbsp;trudności w&nbsp;podnoszeniu głowy w&nbsp;leżeniu na&nbsp;brzuszku, obroty na&nbsp;boki, raczkowanie, siadanie, czy później chodzenie. Celem metody jest więc wspieranie naturalnego rozwoju dziecka poprzez stymulację odpowiednich wzorców ruchowych i&nbsp;eliminowanie pojawienia się nieprawidłowych kompensacji.<br/><br/>Skuteczność tej metody oparta jest na&nbsp;założeniu neuroplastyczności mózgu dziecka. Rehabilitant stosuje podczas zajęć delikatne techniki wspomagające ruch, mobilizując dziecko do aktywnego angażowania mięśni, co&nbsp;z&nbsp;kolei ułatwia wykonanie dziecku ruchu zgodnie z pożądanym wzorcem. Terapię dostosowuje się zawsze do&nbsp; aktualnych możliwości i potrzeb dziecka.<br/><br/>Podczas zajęć również opiekunowie uczą się, jak wspierać rozwój dziecka na&nbsp;co&nbsp;dzień poprzez odpowiednie podnoszenie dziecka, noszenie, trzymanie podczas karmienia i&nbsp;pielęgnacji.",
      imageSrc: "/assets/oferta-dla-dzieci/ndt-bobath.jpg",
      imageAlt: "Rehabilitacja metodą NDT-Bobath",
      accordionItems: [],
      ctaText: "Zarezerwuj termin rehabilitacji",
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
