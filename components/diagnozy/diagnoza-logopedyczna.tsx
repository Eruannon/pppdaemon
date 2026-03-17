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

export function DiagnozaLogopedyczna() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza logopedyczna",
      description:
        "Zajęcia z&nbsp;logopedą dla dzieci i&nbsp;młodzieży są&nbsp;skoncentrowane na&nbsp;diagnozowaniu i&nbsp;terapii różnorodnych trudności komunikacyjnych. Logopeda pracuje z&nbsp;dziećmi nad&nbsp;poprawą wymowy, rozwojem mowy i&nbsp;języka, a&nbsp;także nad&nbsp;komunikacją niewerbalną. <br/><br/> Dzięki indywidualnemu podejściu oraz zastosowaniu różnorodnych metod i&nbsp;technik, terapia logopedyczna pomaga w&nbsp;przezwyciężaniu barier komunikacyjnych, wspierając rozwój językowy i&nbsp;umiejętności społeczne uczestników.",
      imageSrc: "/assets/diagnozy/diagnoza-logopedyczna.jpg",
      imageAlt: "dziecko ubierające maskę",
      accordionItems: [
        {
          title: "Kiedy udać się do logopedy?",
          content:
            '<ul><li><strong>Grupa Wiekowa: Niemowlęta (Do 1 Roku Życia):</strong><ul><li>Jeśli po ukończeniu roku życia dziecko nie wydaje żadnych dźwięków.</li><li>Jeśli zauważasz, że dziecko nie reaguje na dźwięki lub nie wydaje dźwięków w odpowiedzi.</li></ul></li><li><strong>Grupa Wiekowa: Małe Dzieci (1-3 Lata):</strong><ul><li>Jeśli dziecko w wieku 2 lat nie próbuje wypowiadać pierwszych słów.</li><li>Jeśli dziecko ma problemy z wymawianiem niektórych dźwięków, takich jak "p," "b," lub "m."</li></ul></li><li><strong>Grupa Wiekowa: Przedszkolaki (3-5 Lat):</strong><ul><li>Jeśli dziecko w wieku 3 lat nadal nie jest w stanie tworzyć prostych zdań.</li><li>Jeśli trudności w wymawianiu głosek, takich jak "l," "f," "w," "k," "g," "h," lub "ł," są widoczne.</li><li>Jeśli zauważasz, że dziecko utyka językiem podczas mówienia.</li></ul></li><li><strong>Grupa Wiekowa: Młodsza Szkoła Podstawowa (6-10 Lat):</strong><ul><li>Jeśli dziecko nadal ma trudności z wymawianiem głosek, takich jak "s," "z," "c," lub "dz."</li><li>Jeśli dziecko modyfikuje sylaby w wyrazach lub skraca wyrazy w sposób nieadekwatny do wieku.</li></ul></li><li><strong>Grupa Wiekowa: Starsze Dzieci i Młodzież (11-18 Lat):</strong><ul><li>Jeśli po osiągnięciu 11 roku życia dziecko nadal ma trudności z wymawianiem głosek, takich jak "sz," "ż," "cz," lub "dż."</li><li>Jeśli wymowa głoski "r" jest nadal problemem, a dziecko ma trudności z poprawnym jej wypowiadaniem.</li></ul></li><li><strong>Grupa Wiekowa: Dorośli (18+ Lat):</strong><ul><li>Jeśli dorośli doświadczają trudności z mową, takie jak chrypa, utrata głosu lub problemy z wymawianiem niektórych dźwięków.</li></ul></li></ul>',
        },
        {
          title: "Zalety terapii logopedycznej",
          content:
            "<ul><li><strong>Poprawa komunikacji:</strong> Terapia logopedyczna pomaga poprawić zdolności komunikacyjne, co ma kluczowe znaczenie w codziennym życiu, pracy i relacjach społecznych.</li><li><strong>Wspieranie rozwoju językowego:</strong> Dla dzieci terapia logopedyczna jest szczególnie korzystna, pomagając w rozwijaniu umiejętności mówienia, słuchania, czytania i pisania.</li><li><strong>Przezwyciężanie wad wymowy:</strong> Terapia logopedyczna pomaga w eliminowaniu wad wymowy, co może być istotne dla zdrowego rozwoju dziecka i pewności siebie.</li><li><strong>Leczenie zaburzeń głosu:</strong> Osoby z zaburzeniami głosu, takimi jak chrypa czy afonia, mogą skorzystać z terapii logopedycznej, aby przywrócić zdrowy i wyraźny głos.</li><li><strong>Wsparcie dla osób z autyzmem:</strong> Terapia logopedyczna może pomóc osobom z autyzmem w rozwijaniu umiejętności komunikacji i interakcji społecznych.</li><li><strong>Pomoc osobom po udarach i urazach mózgu:</strong> Osoby po udarach lub urazach mózgu często potrzebują terapii logopedycznej do przywrócenia funkcji mowy i komunikacji.</li><li><strong>Wsparcie osób starszych:</strong> Terapia logopedyczna może pomóc osobom starszym w utrzymaniu zdrowej komunikacji i uniknięciu problemów związanych z zaburzeniami mowy związanymi z wiekiem.</li><li><strong>Podniesienie pewności siebie:</strong> Poprawa umiejętności komunikacyjnych dzięki terapii logopedycznej może znacząco podnieść pewność siebie pacjentów.</li><li><strong>Indywidualne podejście:</strong> Terapeuci logopedyczni dostosowują terapię do indywidualnych potrzeb każdego pacjenta, co zapewnia efektywną pomoc.</li><li><strong>Zwiększenie jakości życia:</strong> Ogólnie rzecz biorąc, terapia logopedyczna pomaga pacjentom poprawić jakość swojego życia i rozwoju językowego.</li></ul>",
        },
        {
          title: "Dietetyk dziecięcy w leczeniu logopedycznym u dzieci",
          content:
            "<ul><li>Każdy rodzic pragnie, aby jego dziecko rozwijało się zdrowo i harmonijnie. Czasami jednak pojawiają się wyzwania, takie jak problemy z prawidłową artykulacją czy inne trudności w zakresie mowy, które wymagają wsparcia logopedycznego. Co ciekawe, coraz częściej podkreśla się znaczenie holistycznego podejścia do leczenia, w ramach którego istotną rolę odgrywa współpraca logopedy z dietetykiem dziecięcym. Dlaczego jest to tak ważne?</li><li><strong>Rozwój narządów artykulacyjnych:</strong> Jak podkreśla wielu ekspertów, w tym logopedzi, sposób odżywiania i rodzaj spożywanych pokarmów mają bezpośredni wpływ na rozwój narządów artykulacyjnych, takich jak język, wargi, szczęka czy żuchwa. Twarde, wymagające gryzienia i żucia pokarmy, wspomagają trening mięśni niezbędnych do artykulacji. Dietetyk dziecięcy może pomóc dobrać dietę, która będzie wspierać rozwój tych struktur.</li><li><strong>Poprawa nawyków żywieniowych:</strong> Nieprawidłowe nawyki żywieniowe, takie jak ciągłe korzystanie z butelek zamiast nauka picia z kubka, mogą negatywnie wpłynąć na rozwój mowy u dzieci. Dietetyk dziecięcy może doradzić, jak stopniowo wprowadzać zmiany w sposobie odżywiania, aby wspomagały one leczenie logopedyczne.</li><li><strong>Wsparcie sensoryczne:</strong> Niektóre dzieci z trudnościami w zakresie mowy mogą również doświadczać problemów sensorycznych, w tym oporu przed nowymi teksturami czy smakami pokarmów. Dietetyk dziecięcy może współpracować z logopedą i rodzicami, aby pomóc dziecku stopniowo przyzwyczajać się do różnorodnych pokarmów, co może mieć pozytywny wpływ nie tylko na rozwój mowy, ale również na ogólny rozwój sensoryczny.</li><li><strong>Indywidualne potrzeby żywieniowe:</strong> Każde dziecko jest inne i może mieć indywidualne potrzeby żywieniowe, wynikające na przykład z alergii pokarmowych, nietolerancji czy innych stanów zdrowotnych. Dietetyk dziecięcy może pomóc dostosować dietę dziecka w taki sposób, aby nie tylko wspierała ona jego rozwój mowy, ale również ogólny stan zdrowia.</li><li>Włączenie dietetyka dziecięcego do procesu leczenia logopedycznego pozwala na całościowe podejście do zdrowia i rozwoju dziecka. Poprzez skoordynowaną współpracę specjalistów, rodzice mogą uzyskać wsparcie nie tylko w zakresie mowy, ale także w kwestiach żywieniowych, co ma kluczowe znaczenie dla zdrowia i dobrego samopoczucia każdego dziecka.</li></ul>",
        },
        {
          title: "Ortodonta dziecięcy w leczeniu logopedycznym u dzieci",
          content:
            "<ul><li>Kiedy myślimy o pracy logopedy, skupiamy się przede wszystkim na rozwoju i korygowaniu mowy oraz funkcji artykulacyjnych. Jednak w wielu przypadkach, dla pełnej skuteczności terapii logopedycznej, niezbędna jest współpraca z innymi specjalistami, w tym z ortodontą. Jakie są powody tej multidyscyplinarnej współpracy?</li><li><strong>Strukturalne podstawy prawidłowej artykulacji:</strong> Logopeda pracujący nad korekcją mowy i funkcji artykulacyjnych często napotyka na bariery, które mają podłoże strukturalne. Wady zgryzu czy nieprawidłowości w budowie szczęk mogą znacząco utrudniać lub nawet uniemożliwiać osiągnięcie celów terapii logopedycznej. W takich przypadkach interwencja ortodontyczna może być kluczowa dla umożliwienia prawidłowej pracy narządów artykulacyjnych.</li><li><strong>Nieprawidłowe funkcje a struktura szczęk:</strong> Logopeda identyfikuje nieprawidłowości takie jak nieprawidłowy typ połykania, nieszczelność warg czy oddychanie przez usta, które nie tylko wpływają na mowę, ale również mogą przyczyniać się do powstawania wad zgryzu. Współpraca z ortodontą umożliwia nie tylko leczenie istniejących wad, ale także zapobieganie dalszym nieprawidłowościom.</li><li><strong>Współpraca w diagnozie i planowaniu terapii:</strong> Zrozumienie zależności między strukturą a funkcją jest kluczowe dla skutecznego leczenia. Logopeda, współpracując z ortodontą, może lepiej zrozumieć indywidualne przypadki pacjentów, co pozwala na precyzyjniejsze planowanie terapii logopedycznej oraz dostosowanie jej do możliwości strukturalnych pacjenta po interwencji ortodontycznej.</li></ul>",
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
