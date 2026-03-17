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

export function DiagnozaKompulsywnychZakupow() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza uzależnień – kompulsywne kupowanie",
      description:
        "Zakupy są nieodłączną częścią życia. Aby funkcjonować musimy nabywać nie tylko jedzenie, ale też wyposażenie wnętrz, różnego rodzaju sprzęty, czy ubrania. Kupujemy nowe nie tylko dlatego, że stare się zepsuło i nie nadaje się do naprawy ale również dlatego, że po prostu wyszło z mody. I to generalnie też jest w porządku. Zakupy stają się problemem wówczas, gdy czynność kupowania zaczyna nam służyć do poprawy samopoczucia, jest nagrodą, formą pocieszenia lub sposobem na rozładowanie napięcia. <br/><br/> Jak rozpoznać zagrożenie? Nie jest to proste. Generalnie jako ludzie posiadamy cały wachlarz wykrętów i tłumaczeń, dlaczego akurat kolejna rzecz jest nam niezbędna. Co gorsza pozostajemy w szponach marketingu, który niejednokrotnie mami cudownymi reklamami i oszałamiającymi promocjami, na bieżąco usprawiedliwiając zakupowe szaleństwo. Aktualnie brak oficjalnej naukowej definicji kupnoholizmu. <br/><br/> Opis stanu osoby uzależnionej od impulsywnych zakupów:<br/>„Kupnoholizm to stan psychiczny charakteryzujący się przede wszystkim wewnętrznym przymusem (silną potrzebą, trudną do odparcia chęcią) dokonywania zakupów, przymusem myślenia o nich oraz poczuciem dyskomfortu (złego samopoczucia, rozdrażnienia, złości, agresji itp.) w sytuacjach, kiedy realizowanie ich jest utrudnione lub niemożliwe. Dokonywanie zakupów jest często poprzedzone stanem silnego napięcia i niepokoju, które ustępują w trakcie zakupu i zaraz po jego dokonaniu. To zachowanie utrwala się po wielokrotnym jego powtarzaniu, przedkładane jest ponad inne zajęcia i zachowania oraz wykonywane jest pomimo szkodliwych następstw. Charakterystyczne są nieudane próby kontrolowania lub jego zaprzestania.”<br/><br/> Z pewnością do myślenia daje jednak sytuacja, w której wybrane przedmioty wydają nam się niezbędne tylko przed dokonaniem zakupu, a de facto cieszą krótko. Są jak gwiazdka z nieba, która ma nas uczynić szczęśliwszymi, mają stanowić remedium na wszystkie złe sytuacje, które są naszym udziałem. Na drugim biegunie znajduje się z kolei sytuacja, w której kupując rzeczy w ogóle nie kojarzymy ich z naszą sytuacją życiową. Nie analizujemy ich przydaności ani roli jaką mają spełnić. Wrzucamy do koszyka bez zastanowienia bo są ładne. Zachowujemy się jak sroczka widząca błyskotkę. W rezultacie osoba w szponach nałogu kończy z topniejącymi oszczędnościami, długami czy debetem na koncie. Jednocześnie posiadając niezliczoną ilość nieprzydatnych rzeczy. Nie bez znaczenia jest również czas poświęcany na przeglądanie ofert sklepów internetowych i zwiedzanie kolejnych galerii handlowych. Wszystko to w oczywisty sposób może prowadzić do konfliktów rodzinnych, kłopotów finansowych oraz pogłębiać nierozwiązane problemy, zagłuszone szałem zakupomanii.",
      imageSrc: "/assets/diagnozy/kompulsywne-kupowanie.jpg",
      imageAlt: "Osoba otoczona torbami z zakupami",
      accordionItems: [
        {
          title:
            "Mini Test – sprawdź czy należy udać się na diagnozę uzależnienia od zakupów",
          content:
            "Aby określić, czy faktycznie zakupy stanowią problem, warto przeanalizować i szczerze odpowiedzieć na 9 poniższych pytań diagnozujących. Pytania te nie dadzą nam pełnej diagnozy, ale pewien ogląd sytuacji. Z pewnością im więcej odpowiedzi twierdzących, tym większe ryzyko, że nasze wydawanie pieniędzy może być zaburzone:<br/><br/>1. Czy kiedykolwiek odczuwał(a) Pan(i) silną potrzebę robienia zakupów?<br/>2. Czy na samą myśl o zakupach robi się Panu(i) przyjemnie?<br/>3. Czy kiedykolwiek podczas zakupów miał(a) Pan(i) poczucie oderwania się od swoich problemów?<br/>4. Czy podczas zakupów odczuwa Pan(i) euforię i pobudzenie?<br/>5. Czy kiedykolwiek, wkrótce po dokonaniu zakupu, zdarzyło się Panu(i) zapomnieć, dlaczego kupił(a) Pan(i) ten artykuł?<br/>6. Czy kiedykolwiek zdarzyło się Panu(i) kupić niepotrzebne artykuły?<br/>7. Czy po dokonaniu zakupu odczuwa Pan(i) ulgę/odprężenie?<br/>8. Czy kiedykolwiek zdarzyło się Panu(i) wydać wyjątkowo dużą ilość pieniędzy na nieplanowany zakup?<br/>9. Czy kiedykolwiek, po zrobieniu zakupów, miał(a) Pan(i) poczucie winy? <br/><br/>Źródło: broszura “Gdy zakupy stają się problemem. Czy jestem uzależniony”?, Katarzyna Kucewicz, wyd. Fundacja ETOH, KBPN, Warszawa 2014",
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
