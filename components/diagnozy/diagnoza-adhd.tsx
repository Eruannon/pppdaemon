"use client";

import type React from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import Markdown from "markdown-to-jsx";

interface ServiceSection {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
}

const ServiceSectionComponent: React.FC<ServiceSection & { index: number }> = ({
  title,
  description,
  imageSrc,
  imageAlt,
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
        </div>
      </div>
    </section>
  );
};

export function DiagnozaADHD() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza ADHD",
      description:
        "ADHD (Zespół Nadpobudliwości Psychoruchowej z&nbsp;Deficytem Uwagi) to&nbsp;zaburzenie neurorozwojowe, które objawia się trudnościami w&nbsp;koncentracji, nadmierną impulsywnością i&nbsp;nadpobudliwością. Wystąpienie u&nbsp;dziecka objawów ADHD nie ma&nbsp;nic wspólnego ze&nbsp;sposobem wychowania. ADHD to&nbsp;zaburzenie związane z&nbsp;funkcjonowaniem mózgu, głównie układu dopaminergicznego. <br/><br/> Diagnoza ADHD u&nbsp;dzieci to&nbsp;wielostopniowy proces, który w&nbsp;pierwszej kolejności obejmuje obserwację dziecka pod kątem jego ruchliwości, zdolności do&nbsp;koncentracji na&nbsp;wykonywanym zadaniu, podatności na&nbsp;rozproszenie uwagi, stopnia impulsywności, poziomu emocjonalności oraz zdolności do&nbsp;podporządkowania się zasadom obowiązującym w&nbsp;grupie społecznej. <br/><br/> W&nbsp;kolejnym etapie diagnozy przeprowadza się wywiad z&nbsp;rodzicami i&nbsp;nauczycielami. Ostatnim elementem badania są specjalistyczne testy psychologiczne wypełniane przez osoby z&nbsp;różnych środowisk, w&nbsp;których dziecko spędza znaczną część czasu. W&nbsp;praktyce najczęściej test wypełniają rodzice dziecka, wychowawca oraz samo dziecko, jeżeli pozwala na&nbsp;to&nbsp;jego wiek. <br/><br/> Stwierdzenie u&nbsp;dziecka występowania zespołu nadpobudliwości psychoruchowej z&nbsp;deficytem uwagi jest możliwe tylko wtedy, jeżeli objawy ADHD występują przez długi czas, niezależnie od&nbsp;miejsca, w którym przebywa dziecko. Diagnozę wykonaną przez psychologa potwierdza psychiatra dziecięcy. <br/><br/> Diagnoza ADHD pomaga w&nbsp;podjęciu decyzji o&nbsp;sposobie wsparcia dziecka w&nbsp;jego trudnościach. Najczęściej dzieci zmagające się z&nbsp;objawami zespołu nadpobudliwości psychoruchowej z&nbsp;deficytem uwagi kierowane są&nbsp;na&nbsp;terapię behawioralną uczącą krok po&nbsp;kroku jak radzić sobie z&nbsp;impulsywnością oraz zarządzać swoim czasem i&nbsp;organizować swoje działanie. Pomocą służy również trening umiejętności społecznych rozwijający kompetencje potrzebne w&nbsp;kontaktach międzyludzkich. Na&nbsp;podstawie diagnozy o&nbsp;ADHD, szkoła lub&nbsp;przedszkole dostosowuje do&nbsp;ucznia metody edukacji i&nbsp;sposoby sprawdzania wiedzy. Jeżeli objawy występują z&nbsp;intensywnością uniemożliwiającą codzienne funkcjonowanie dziecka, wdrażane jest wsparcie farmakologiczne.",
      imageSrc: "/assets/diagnozy/adhd.jpg",
      imageAlt: "Obraz przedstawiający dziecko w trakcie terapii",
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
