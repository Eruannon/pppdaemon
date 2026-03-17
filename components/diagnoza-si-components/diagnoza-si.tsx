"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRightOutline, TiArrowForwardOutline } from "react-icons/ti";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import Markdown from "markdown-to-jsx";

interface ServiceSection {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  accordionItems?: { title: string; content: string }[];
  listItems?: string[];
  ctaText?: string;
  ctaLink?: string;
}

interface ServiceCard {
  title: string;
  content: string;
  footerText?: string;
  footerLink?: string;
  footerLinkText?: string;
  type?: "blue" | "green";
}



const ServiceSectionComponent: React.FC<ServiceSection & { index: number }> = ({
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
                    alt={imageAlt || "brak opisu obrazu"}
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
                    <TiArrowForwardOutline className="mt-1 mr-2" />
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
                className="text-slate-800 flex justify-start mt-4"
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
                  <TiArrowRightOutline className="ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCardsSection: React.FC<{ cards: ServiceCard[] }> = ({ cards }) => {
  const { highContrast } = useAccessibility();

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`border ${
                card.type === "green"
                  ? highContrast
                    ? "border-green-500 bg-gray-800"
                    : "border-green-500 bg-green-100"
                  : highContrast
                  ? "border-blue-500 bg-gray-800"
                  : "border-blue-500 bg-blue-100"
              }`}
            >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Markdown>{card.content}</Markdown>
              </CardContent>
              {card.footerLink && card.footerLinkText && (
                <CardFooter>
                  <Link
                    href={card.footerLink}
                    className={`p-2 rounded-md border flex items-center justify-center gap-2 ${
                      highContrast
                        ? "bg-gray-600 border-gray-400 text-yellow-400"
                        : card.type === "green"
                        ? "bg-green-300 border-green-800"
                        : "bg-blue-300 border-blue-800"
                    }`}
                  >
                    {card.footerLinkText}
                    <TiArrowRightOutline className="rotate-[-45deg]" />
                  </Link>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};



export default function TerapiaSIComponent() {
  const { highContrast, fontSizeLevel } = useAccessibility();

  const headerFontSizeClass =
    ["text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"][
      fontSizeLevel
    ] || "text-3xl";

  const serviceSections: ServiceSection[] = [
    {
      title: "Terapia SI",
      description: `
Na co dzień rzadko zastanawiamy się nad olbrzymią pracą naszego umysłu wykonywaną w celu odbioru, przesyłu, uporządkowania i wykorzystania informacji płynących z narządów zmysłu.

Układ nerwowy człowieka w każdej sekundzie bombardowany jest milionami impulsów nerwowych niosących informację o tym, co dzieje się z naszym ciałem oraz otoczeniem, w którym się znajdujemy.

W ułamku sekundy informacje te muszą zostać zarejestrowane, ocenione pod względem ważności, wyciszone lub zintensyfikowane.

Niezwykle istotne jest również połączenie informacji odbieranych różnymi zmysłami w jedną całość. Gdy bodźce sensoryczne nie są właściwie opracowywane przez układ nerwowy, pojawia się chaos informacyjny, który skutkuje niejednokrotnie trudnościami w harmonijnym rozwoju psychofizycznym dziecka, niepokojem, nieodpowiednim zachowaniem oraz obniżoną zdolnością do uczenia się.
      `,
      imageSrc: "/assets/terapia-si/1.mp4",
      imageAlt: "Terapia SI Video",
    },
    {
      title: "Nie tylko 5 zmysłów",
      description: `
Wpływ na efektywną pracę układu nerwowego mają nie tylko informacje pochodzące ze zmysłu wzroku, słuchu, dotyku czy smaku, ale również ze zmysłu przedsionkowego, dostarczającego informacji o ruchu człowieka, oraz zmysłu czucia proprioceptywnego, odpowiedzialnego za rejestrowanie zmian w pozycji ciała.

Z działania tych ostatnich na co dzień nie zdajemy sobie sprawy, a to właśnie propriocepcja i zmysł przedsionkowy, łącznie ze zmysłem dotyku, stanowią punkt odniesienia do właściwego uporządkowania innych informacji sensorycznych. Zmysł przedsionkowy jest tym, który rozwija się najwcześniej, bo już w życiu płodowym człowieka. Kołyszący ruch doświadczany podczas poruszania się przyszłej mamy jest pierwszym treningiem integracji sensorycznej maluszka.
      `,
      imageSrc: "/assets/terapia-si/2.mp4",
      imageAlt: "Terapia SI Video",
    },
    {
      title: "W labiryncie zmysłów",
      description: `
Zaburzenie przetwarzania informacji płynących ze zmysłów doprowadza do różnych dysfunkcji - od zmniejszonej sprawności fizycznej po zaburzenia zachowania i uczenia się. Wśród najczęstszych objawów zaburzeń SI wymienia się nadmierną lub niedostateczną wrażliwość na bodźce dotykowe, słuchowe czy ruchowe, wyższy niż przeciętny lub obniżony poziom aktywności ruchowej, problemy z koordynacją, impulsywność czy trudności w nauce.

Zaburzenia SI bardzo często powodują duży niepokój u niemowląt i dzieci starszych, pojawiają się problemy ze snem, wybiórczość pokarmowa, rozchwianie emocjonalne, trudności w komunikacji werbalnej. Mówi się, że dzieci z poważnymi dysfunkcjami integracji sensorycznej czują się ciągle jak na karuzeli pędzącej w takt głośnej muzyki, oświetlonej milionem świateł, na której nie potrafią utrzymać równowagi. W konsekwencji ich zachowanie odbiega od oczekiwań społecznych, trudno im spełnić wymagania szkolne, a nawet pokonać „kroki milowe” w rozwoju psychofizycznym. Dzieciom z zaburzeniami SI przykleja się często łatkę niegrzecznych, nadpobudliwych lub mniej zdolnych.

Z pomocą przychodzi diagnoza i terapia SI.
      `,
      imageSrc: "/assets/terapia-si/3.mp4",
      imageAlt: "Terapia SI Video",
    },
    {
      title: "Terapia SI ☞ terapia inna niż wszystkie",
      description: `
Terapia integracji sensorycznej polega na ćwiczeniach, w których dziecko doświadcza zróżnicowanych bodźców sensorycznych podczas ruchu, rozwiązując jednocześnie proste zadania logiczne lub kreujące spostrzegawczość.

Aktywność ta, prowadzona w atmosferze zabawy, w sposób atrakcyjny i budzący zaangażowanie dziecka, prowadzi do przeorganizowania pracy mózgu i lepszego porządkowania i wykorzystywania informacji płynących ze zmysłów.

Terapia SI różni się od wielu innych działań rewalidacyjnych, gdyż sama w sobie nie uczy konkretnych umiejętności, takich jak liczenie, zapamiętywanie, rysowanie czy różnicowanie dźwięków, a jedynie stymuluje układ nerwowy do właściwej pracy, tak aby sprawna i precyzyjna nauka stała się możliwa. Terapia SI przygotowuje grunt pod przyszłe wyzwania, którym sprostać musi dziecko w trybie nauki szkolnej.

Terapia jest tym skuteczniejsza, im większe zaangażowanie wzbudzimy w działaniu ćwiczącego. Zajęcia integracji sensorycznej powinny zawsze odpowiadać potrzebom i aktualnym możliwościom dziecka. Trudność i intensywność ćwiczeń jest stopniowana, a postępy monitorowane przez terapeutę. W terapii SI kluczową rolę odgrywa jednak powtarzalność i regularność ćwiczeń zarówno na sali SI, jak i w domu.
      `,
      imageSrc: "/assets/terapia-si/3.mp4",
      imageAlt: "Terapia SI Video",
    },
    {
      title: "Magia sali integracji sensorycznej",
      description: `
Podczas zajęć integracji sensorycznej eksplorujemy otoczenie, dostarczając młodym umysłom odpowiednich bodźców zmysłowych. Tworząc ścieżki i pomoce sensoryczne, bazujemy na materiałach naturalnych. Stymulujemy zmysł dotyku, organizując zabawę w różnorodnych substancjach, takich jak piasek, ryż, groch, orzechy, kisiel, pianka, masa solna, slime, ciecz newtonowska. Dostarczamy wrażeń związanych z temperaturą, odkrywając zimno metalowych przedmiotów, kamieni czy lodu, a także ciepło nagrzanych pestek czereśni.

Ćwiczymy zmysł słuchu, doświadczając dźwięków o różnej głośności, natężeniu, intensywności. Szukamy źródeł dźwięków, przeprowadzamy aktywny trening słuchowy. Stymulujemy zmysł przedsionkowy i propriocepcję, proponując aktywność ruchową dostosowaną do zdiagnozowanych potrzeb dzieci. Ćwiczenia odbywają się na równoważni lub huśtawkach, przynosząc doświadczenia w sposobie odbioru ruchu liniowego i obrotowego. Balansujemy na piłkach, platformach, deskorolkach, aby poczuć zmiany w ułożeniu ciała w przestrzeni.

Pokonujemy tory przeszkód, aby trenować umiejętność wyboru, planowania i wykonania precyzyjnego ruchu. Ćwiczymy koordynację ręka-oko, rzucając do celu. Uczymy się schematu własnego ciała, odczytywania sygnałów płynących z mięśni i ścięgien podczas przetaczania i przepychania ciężkich przedmiotów, „walki” z workiem treningowym, przeciągania liny.

Wszystkie te zabiegi przyczyniają się do usprawnienia odbioru, przesyłania i opracowania informacji przez układ nerwowy dziecka. W przypadku nadwrażliwości lub podwrażliwości sensorycznej dostosowana zostaje reakcja organizmu w stosunku do intensywności bodźca.
      `,
      imageSrc: "/assets/terapia-si/5.mp4",
      imageAlt: "Terapia SI Video",
    },
    {
      title: "Kiedy na diagnozę? Kiedy na terapię?",
      description: `
Zaburzenia integracji sensorycznej mogą przejawiać nawet najmłodsze niemowlęta, jednak ze względu na trudność w jednoznacznej ocenie przyczyn zachowań tak małego dziecka, diagnozę integracji sensorycznej przeprowadza się najwcześniej u dzieci, które ukończyły 12 miesiąc życia. Pełną diagnozę SI przeprowadza się u dzieci czteroletnich. Rodziców zainteresowanych uzyskaniem porady, jak dbać o prawidłowy rozwój integracji sensorycznej niemowlaka, zapraszamy na krótki instruktaż ukazujący techniki ćwiczeń integracji sensorycznej podczas codziennej aktywności.

Terapia integracji sensorycznej jest najbardziej skuteczna w przypadku dzieci przed ukończeniem 7 roku życia. W tym czasie plastyczność układu nerwowego jest największa, tym samym stymulowanie rozwoju połączeń nerwowych przebiega najsprawniej. Zwykle terapię integracji sensorycznej zaleca się dzieciom do 12 roku życia. Warto też zauważyć, że w każdym wieku możliwa jest praca nad sprawnym działaniem układu nerwowego ze względu na możliwości naprawcze organizmu.

Z zaburzeń integracji sensorycznej nie wyrasta się. Trudności w przetwarzaniu sensorycznym nie znikają samoistnie bez właściwej stymulacji układu nerwowego, raczej pogłębiają się lub zmienia się sposób manifestacji problemu przez organizm człowieka, dlatego warto jak najwcześniej zadbać o prawidłowy rozwój dziecka.
      `,
    },
  ];

  const diagnosisCards: ServiceCard[] = [
    {
      title: "Zebranie wywiadu",
      content: `
Diagnoza SI składa się z kilku etapów. Pierwszy z nich obejmuje zebranie wywiadu dotyczącego okoliczności porodu, przebytych przez dziecko chorób, wykrytych dysfunkcji czy trudności rozwojowych.
      `,
      type: "blue",
    },
    {
      title: "Kwestionariusz wywiadu sensomotorycznego dziecka",
      content: `
Drugi etap to wypełnienie przez rodzica Kwestionariusza Wywiadu Sensomotorycznego Dziecka. W kwestionariuszu znajdą się pytania dotyczące poszczególnych etapów rozwoju dziecka, preferencji podczas zabawy, reakcji na bodźce, aktualnych umiejętności, intensywności reakcji emocjonalnych, otwartości w kontaktach międzyludzkich itp.
      `,
      type: "green",
    },
    {
      title: "Testy i obserwacje",
      content: `
Trzeci etap to testy w postaci ćwiczeń, prób i obserwacji dziecka podczas swobodnej aktywności na sali integracji sensorycznej.
      `,
      type: "blue",
    },
    {
      title: "Analiza wyników",
      content: `
Po przeprowadzeniu badań diagnosta dokonuje analizy wyników kwestionariuszy i prób testowych. Analiza prowadzi do postawienia diagnozy i rozpoznania charakterystycznych zaburzeń integracji sensorycznej.
      `,
      type: "green",
    },
  ];

  const pricingCards: ServiceCard[] = [
    {
      title: "Terapia SI - Integracja Sensoryczna w ramach WWR",
      content: `
Terapia SI w ramach zajęć WWR jest darmowa. Zapraszamy do skorzystania z naszej oferty darmowych zajęć WWR dla twojego dziecka.
      `,
      footerLink: "/wsparcie-dla-dzieci/jak-uzyskac-darmowe-zajecia-wwrd",
      footerLinkText: "Jak zapisać dziecko na darmowe zajęcia WWR?",
      type: "blue",
    },
    {
      title: "Usługa komercyjna",
      content: `
Skontaktuj się z nami, aby umówić się na sesję.

**Diagnoza SI - 500zł**

**Terapia SI - 150zł** *(50 minut)*
      `,
      footerLink: "/kontakt",
      footerLinkText: "Kontakt",
      type: "green",
    },
  ];

  return (
    <div
      className={`font-sans overflow-x-hidden ${
        highContrast ? "bg-black text-yellow-400" : "bg-white"
      }`}
    >
      {serviceSections.map((section, index) => (
        <ServiceSectionComponent key={index} {...section} index={index} />
      ))}

      
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2
            className={`font-display mb-2 font-semibold text-left ${headerFontSizeClass}`}
          >
            Diagnoza SI
          </h2>
          <ServiceCardsSection cards={diagnosisCards} />
        </div>
      </section>

      
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2
            className={`font-display mb-8 font-semibold text-left ${headerFontSizeClass}`}
          >
            Cennik
          </h2>
          <ServiceCardsSection cards={pricingCards} />
        </div>
      </section>
    </div>
  );
}
