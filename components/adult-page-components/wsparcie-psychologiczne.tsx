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
              <p className="space-y-4 sm:space-y-6 text-sm sm:text-base text-zinc-700 font-medium tracking-tight">
                <Markdown>{description}</Markdown>
              </p>
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

export function WsparciePsychologiczne() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Wsparcie psychologiczne",
      description: `Oferowane wsparcie psychologiczne jest jedną z form profesjonalnej pomocy psychologicznej mającej na celu poprawę funkcjonowania oraz samopoczucia osoby dorosłej. W odróżnieniu od psychoterapii, wsparcie psychologiczne jest z założenia doraźną pomocą udzielaną przez specjalistę w trudniejszym okresie życia pacjenta.
<br/><br/>
Warto zauważyć, że pomoc, jaką udziela specjalista w ramach wsparcia psychologiczego, znacząco różni się od wsparcia, którego może udzielić rodzina, czy przyjaciele osoby w potrzebie. Psycholog przede wszystki zachowuje potrzebną w tej sytuacji obiektywność i profesjonalny dystans w stosuku do pacjenta, co pozwala mu skutecznie pomagać w długofalowy i skuteczny sposób. Specjalista analizuje problem bez osobistych uprzedzeń, koncentrując się na jego rzeczywistych przyczynach i dobiera odpowiedni do problemu rodzaj terapii.
<br/><br/>
Obok pomocy w radzeniu sobie z problemami natury psychicznej, celem wsparcia psychologicznego może być też szeroko rozumiany rozwój osobisty.
<br/><br/>
Wsparcie psychologiczne może przybierać więc różne formy. W zależności od potrzeb klienta, wsparcie może obejmować: interwencję kryzysową, psychoedukację czy profilaktykę zdrowia psychicznego.`,
      imageSrc: "/assets/oferta-dla-doroslych/wsparcie-psychologiczne.jpg", 

      imageAlt:
        "Wsparcie psychologiczne – zdjęcie symbolizujące pomoc drugiej osobie",
      accordionItems: [
        {
          title: "Interwencja kryzysowa",
          content: `Interwencja kryzysowa może pomóc w odzyskaniu równowagi psychicznej oraz zdolności samodzielnego radzenia sobie w trudniejszych okresach życia czy sytuacjach kryzysowych takich jak śmierć bliskiego, ciężka choroba, trauma, przewlekły stres czy nagłe zmiany życiowe. W trakcie interwencji stosowane są techniki wsparcia emocjonalnego oraz narzędzia pomagające odbudować poczucie bezpieczeństwa oraz zdolności radzenia sobie w oparciu o wewnętrzne i zewnętrzne zasoby pacjenta.`,
        },
        {
          title: "Psychoedukacja",
          content: `Psychoedukacja jest formą pomocy mającej na celu wyposażenie pacjenta zmagającego się z różnymi długotrwałymi trudnościami psychicznymi w taką wiedzę psychologiczną, która przyczyni się do życia w sposób spokojny i satysfakcjonujący, pomimo istniejących zaburzeń.

Psychoedukacja jest często stosowana w terapii, np. u osób zmagających się z depresją, lękiem czy schizofrenią, a także w pracy z rodzinami tych osób. Psychoedukacja pomaga zawsze w lepszym zrozumieniu swojej aktualnej sytuacji, rozpoznawaniu symptomów nadchodzących problemów, a także w kształtowaniu zdrowych nawyków i skutecznemu zarządzaniu emocjami.

Psychoedukacja obejmuje zazwyczaj treningi umiejętności społecznych, treningi rodzicielskie czy też treningi radzenia sobie z konfliktami. W rezultacie psychoedukacja sprzyja większej samoświadomości, proaktywnej postawie oraz braniu odpowiedzialności za własne życie.`,
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
