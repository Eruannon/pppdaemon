"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/lib/providers/accessibility-context";
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
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ height: contentHeight ? `${contentHeight}px` : "500px" }}
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
          <div
            ref={contentRef}
            className={`w-full lg:w-1/2 ${
              isEven ? "lg:pl-12" : "lg:pr-12"
            } flex flex-col justify-center`}
          >
            <h3
              className={`font-display mb-6 tracking-tight font-semibold text-left ${headerFontSizeClass}`}
            >
              {title}
            </h3>
            <p
              className={`${
                highContrast ? "text-yellow-400" : "text-gray-700"
              } ${fontSizeClass} text-left mb-6`}
            >
              {description}
            </p>
            <Accordion type="single" collapsible className="w-full mb-6">
              {accordionItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <Markdown>{item.content}</Markdown>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Link href={ctaLink} className="text-slate-800 flex justify-start">
              <Button
                variant="outline"
                className={`flex items-center justify-center ${
                  highContrast
                    ? "bg-gray-700 border-gray-600 text-yellow-400"
                    : "bg-slate-50/80 border-slate-700"
                }`}
              >
                {ctaText}
                <TiArrowRightOutline />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TerapieVRComponent() {
  const { highContrast } = useAccessibility();

  const serviceSections: ServiceSection[] = [
    {
      title: "Zajęcia dla dzieci z wykorzystaniem wirtualnej rzeczywistości",
      description:
        "Zajęcia z wykorzystaniem wirtualnej rzeczywistości w programie WWRD to innowacyjne narzędzie wspierające rozwój dzieci, które łączy naukę z zabawą, dostarczając unikalnych doświadczeń edukacyjnych i terapeutycznych. Dzięki dostosowanym programom i indywidualnemu podejściu, każde dziecko ma szansę na rozwijanie swoich umiejętności w angażujący i motywujący sposób.",
      imageSrc: "/assets/terapia-vr/vr.mp4",
      imageAlt: "Dziecko korzystające z VR podczas terapii",
      accordionItems: [
        {
          title: "Interaktywne środowisko nauki",
          content:
            "VR tworzy angażujące wirtualne światy, które przyciągają uwagę dzieci i zwiększają ich zaangażowanie w proces terapeutyczny. Dzięki temu dzieci są bardziej skłonne do uczestnictwa w zajęciach i chętniej podejmują nowe wyzwania.",
        },
        {
          title: "Bezpieczna eksploracja",
          content:
            "Wirtualna rzeczywistość pozwala dzieciom eksplorować różne środowiska i sytuacje w bezpieczny sposób, bez ryzyka fizycznego. Daje to możliwość przeżywania nowych doświadczeń, które w rzeczywistym świecie mogłyby być niedostępne lub zbyt ryzykowne.",
        },
        {
          title: "Indywidualne dostosowanie",
          content:
            "Programy VR mogą być łatwo dostosowane do indywidualnych potrzeb i poziomu rozwoju każdego dziecka, co pozwala na precyzyjne dopasowanie terapii do ich unikalnych wymagań.",
        },
        {
          title: "Rozwój umiejętności społecznych",
          content:
            "VR oferuje bogate doświadczenia sensoryczne i motoryczne, które są kluczowe w terapii dzieci z zaburzeniami rozwoju. Dzięki temu dzieci mogą rozwijać swoje zdolności ruchowe i sensoryczne w atrakcyjny sposób.",
        },
        {
          title: "Stymulacja sensoryczna i motoryczna",
          content:
            "VR dostarcza bogatych doświadczeń sensorycznych i motorycznych, które są kluczowe w terapii dzieci z zaburzeniami rozwoju. Dzięki temu dzieci mogą rozwijać swoje zdolności ruchowe i sensoryczne w atrakcyjny i angażujący sposób.",
        },
      ],
      ctaText: "Zapytaj o zajęcia wspomagane VR dla twojego dziecka",
      ctaLink: "/kontakt",
    },
    {
      title: "Terapie wspomagane VR dla osób dorosłych",
      description:
        "Zastosowanie wirtualnej rzeczywistości w terapii i rozwoju dorosłych oferuje zaawansowane metody wsparcia zdrowia psychicznego, fizycznego oraz osobistego rozwoju. Wykorzystanie VR dostarcza unikalnych możliwości, które tradycyjne metody mogą nie być w stanie zaoferować.",
      imageSrc: "/assets/terapia-vr/vr2.mp4",
      imageAlt: "Dorosły korzystający z VR podczas terapii",
      accordionItems: [
        {
          title: "Zanurzenie w relaksujące środowiska",
          content:
            "VR umożliwia przeniesienie się do spokojnych, wirtualnych przestrzeni, które pomagają w redukcji stresu i lęku. Spersonalizowane scenariusze mogą obejmować medytacje, wirtualne spacery po lesie, czy sesje na plaży, wspierając zdrowie psychiczne i emocjonalne.",
        },
        {
          title: "Symulacja i trening umiejętności",
          content:
            "Dzięki wirtualnej rzeczywistości, dorośli mogą trenować i rozwijać różnorodne umiejętności w bezpiecznym środowisku. Od wystąpień publicznych, poprzez symulacje sytuacji zawodowych, aż po treningi interpersonalne – VR oferuje realistyczne scenariusze do praktyki i nauki.",
        },
        {
          title: "Fizjoterapia i rehabilitacja",
          content:
            "VR jest wykorzystywana w fizjoterapii do wspomagania procesu rehabilitacji, oferując ćwiczenia dostosowane do potrzeb pacjenta. Wirtualne ćwiczenia mogą być atrakcyjniejsze i motywujące, co przyczynia się do większej efektywności terapii.",
        },
        {
          title: "Rozwój osobisty i mindfulness",
          content:
            "VR umożliwia praktykowanie mindfulness i technik relaksacyjnych w wirtualnych środowiskach, które sprzyjają skupieniu i wewnętrznej harmonii. Jest to doskonały sposób na odnalezienie wewnętrznego spokoju i zwiększenie świadomości siebie.",
        },
        {
          title: "Wirtualne spotkania i terapia grupowa",
          content:
            "Technologia VR umożliwia uczestnictwo w wirtualnych sesjach terapeutycznych i spotkaniach grupowych, co może być szczególnie korzystne dla osób, które z różnych przyczyn nie mogą uczestniczyć w sesjach stacjonarnych.",
        },
        {
          title: "Treningi pamięci i funkcji poznawczych",
          content:
            "Gry i aplikacje VR mogą wspierać trening pamięci i innych funkcji poznawczych, oferując zabawne i angażujące sposoby na utrzymanie umysłu w dobrej kondycji.",
        },
      ],
      ctaText: "Zapytaj o terapię wspomaganą VR",
      ctaLink: "/kontakt",
    },
    {
      title: "Praca z lękami oraz fobiami wspomagana VR",
      description:
        "Praca z lękami oraz fobiami wspomagana przez wirtualną rzeczywistość to innowacyjne podejście, które umożliwia bezpieczne i kontrolowane stawianie czoła trudnym sytuacjom. Wykorzystanie VR w terapii fobii i lęków pozwala na stopniowe eksponowanie się na obiekty lub sytuacje wywołujące lęk, w sposób, który jest trudny do zreplikowania w warunkach rzeczywistych.",
      imageSrc: "/assets/terapia-vr/vr3.mp4",
      imageAlt: "Terapia lęków z wykorzystaniem VR",
      accordionItems: [
        {
          title: "Stopniowe eksponowanie",
          content:
            "VR umożliwia stworzenie realistycznych scenariuszy, w których pacjenci mogą stopniowo zwiększać poziom ekspozycji na lękotwórcze sytuacje, co jest kluczowe w terapii behawioralnej.",
        },
        {
          title: "Kontrolowane środowisko",
          content:
            "Terapia w VR odbywa się w bezpiecznym i kontrolowanym środowisku, co daje pacjentom poczucie bezpieczeństwa i pozwala na pracę nad lękami bez ryzyka realnych konsekwencji.",
        },
        {
          title: "Realizm doświadczeń",
          content:
            "Wirtualna rzeczywistość oferuje wyjątkowo realistyczne doświadczenia, co jest niezbędne dla skuteczności terapii fobii. Pacjenci mogą odczuwać podobne reakcje emocjonalne, jak w rzeczywistych sytuacjach, co ułatwia pracę nad przyczynami lęku.",
        },
        {
          title: "Bezpośrednia terapia",
          content:
            "VR umożliwia bezpośrednie zastosowanie technik terapeutycznych, takich jak relaksacja czy techniki radzenia sobie, w trakcie ekspozycji na sytuacje wywołujące lęk, co zwiększa efektywność terapii.",
        },
      ],
      ctaText: "Dowiedz się więcej o terapii lęków z VR",
      ctaLink: "/kontakt",
    },
  ];

  return (
    <div
      className={`font-sans overflow-x-hidden ${
        highContrast ? "bg-black text-yellow-400" : "bg-gray-100/20"
      }`}
    >
      {serviceSections.map((section, index) => (
        <ServiceSectionComponent key={index} {...section} index={index} />
      ))}

      <section className="max-w-7xl md:px-0 px-4 mx-auto mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto text-center">
          <h2 className="font-display mb-6 font-semibold text-center text-3xl md:text-4xl">
            Nasza terapia to nie tylko okulary VR - to cała platforma.
          </h2>
          <div className="grid grid-cols-1 row-span-2 md:grid-cols-3 gap-4 mx-auto">
            <div className="relative w-full h-128 md:row-span-2">
              <Image
                src="/assets/terapia-vr/vr.jpeg"
                alt="Platforma VR - widok 1"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative w-full h-128 md:row-span-2">
              <Image
                src="/assets/terapia-vr/vr2.jpeg"
                alt="Platforma VR - widok 2"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative w-full h-64">
              <video
                src="/assets/terapia-vr/vrGrid.mp4"
                className="rounded-lg object-cover w-full h-full"
                loop
                muted
                autoPlay
                playsInline
                onContextMenu={(e) => e.preventDefault()}
                aria-label="Demonstracja platformy VR - część 1"
              />
            </div>
            <div className="relative w-full h-64">
              <video
                src="/assets/terapia-vr/vrGrid2.mp4"
                className="rounded-lg object-cover w-full h-full"
                loop
                muted
                autoPlay
                playsInline
                onContextMenu={(e) => e.preventDefault()}
                aria-label="Demonstracja platformy VR - część 2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 py-6 md:py-24 mb-10">
        <div className="mx-auto text-center">
          <div
            className={`mx-auto w-96 shadow-md ${
              highContrast
                ? "bg-gray-800 border-gray-600"
                : "bg-white border-gray-200"
            } rounded-xl border`}
          >
            <div
              className={`${
                highContrast
                  ? "bg-gray-900 text-yellow-400"
                  : "bg-[#225da5] text-white"
              } rounded-t-xl p-6`}
            >
              <h3 className="text-2xl font-semibold">Cennik</h3>
            </div>
            <div
              className={`${
                highContrast ? "text-yellow-400" : "text-gray-700"
              } text-base p-6`}
            >
              <p>Terapia VR 50 minut - 180zł</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
