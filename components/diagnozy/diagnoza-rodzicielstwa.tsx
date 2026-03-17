"use client";

import type React from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import Markdown from "markdown-to-jsx";

interface ParentTestSection {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
}

const ParentTestSectionComponent: React.FC<
  ParentTestSection & { index: number }
> = ({ title, description, imageSrc, imageAlt, ctaText, ctaLink, index }) => {
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
          
        </div>
      </div>
    </section>
  );
};

export function DiagnozaRodzicielstwa() {
  const sections: ParentTestSection[] = [
    {
      title: "Diagnoza mocnych i słabych stron rodzicielstwa",
      description: `Diagnoza mocnych i słabych stron rodzicielstwa to ocena umiejętności, unikalnych zdolności, postaw i zachowań rodziców w kontekście wychowania dzieci. Dostarcza cennych informacji na temat tego, jak rodzice radzą sobie z różnymi wyzwaniami wychowawczymi, jakie są ich mocne strony, a także jakie obszary wymagają poprawy.<br/><br/>Test kompetencji rodzicielskich jest wartościowym narzędziem diagnostycznym, które może dostarczyć głębokiego wglądu w umiejętności i postawy rodziców. Jest szczególnie przydatny w kontekście pracy z dziećmi przejawiającymi trudne zachowania, sprawiającymi trudności wychowawcze, a także z dziećmi mierzącymi się z rozwojem o nieharmonijnym przebiegu. <br/><br/>Wykonanie testu może pomóc rodzicom w lepszym zrozumieniu własnych zachowań i ich wpływu na dzieci, a także w rozwijaniu skuteczniejszych metod wychowawczych. Natomiast osobom szukającym w kwestiach wychowawczych pomocy u psychologów i psychoterapeutów przeprowadzenie diagnozy umożliwia dobranie skutecznej metody terapii w zakresie opieki i wychowania potomstwa
      `,
      imageSrc: "/assets/diagnozy/rodzicielstwo.jpg",
      imageAlt: "Diagnoza mocnych i słabych stron rodzicielstwa",
      ctaText: "Umów wizytę",
      ctaLink: "/test-kompetencji-rodzicielskich",
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <ParentTestSectionComponent key={index} {...section} index={index} />
      ))}
    </div>
  );
}
