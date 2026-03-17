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

export function DiagnozaUzaleznieniaOdHazardu() {
  const serviceSections: ServiceSection[] = [
    {
      title: "Diagnoza uzależnień - uzależnienie od hazardu",
      description:
        "Hazard ma wiele twarzy. Pozornie niewinna rozrywka przeradza się czasem w poważny problem. Czynnikami ryzyka w przypadku patologicznego hazardu jest jego dostępność. Początki hazardu związane są często z nagminnym angażowaniem się w różnego rodzaju loterie, grę na automatach, grę w internecie czy bukmacherskie zakłady sportowe. Uzależnienie od hazardu jest tym prostsze, im mniejsze kwoty wchodzą w grę. Wszystko to tworzy iluzję nieszkodliwej zabawy. <br/><br/> Jednym z sygnałów świadczących o rozwoju uzależnienia jest nadmierna ekscytacja grą, zmniejszone zainteresowanie dotychczasowymi formami relaksu, a w dalszym etapie zaniedbywanie obowiązków i zerwanie kontaktów towarzyskich czy osłabienie więzi rodzinnych. Warto zwrócić uwagę na kilka sygnałów ostrzegawczych, które powinny zapalić czerwoną lampkę zarówno naszym bliskim jak i osobie uzależnionej.",
      imageSrc: "/assets/diagnozy/hazard.jpg",
      imageAlt: "Obraz przedstawiający uzależnienie od hazardu",
      accordionItems: [
        {
          title: "Sygnały ostrzegawcze uzależnienia",
          content:
            "1. Głód grania.<br/>2. Czas, intensywność gry i wysokość sum, które ryzykujemy.<br/>3. Złe samopoczucie, gdy gra jest niemożliwa.<br/>4. Niemożność odmówienia sobie gry.<br/>5. Zaniedbywanie obowiązków z powodu hazardu.<br/>6. Granie za pożyczone pieniądze.",
        },
        {
          title:
            "Mini Test – sprawdź czy należy udać się na diagnozę uzależnienia od hazardu",
          content:
            "Proszę przeczytać wszystkie wypowiedzi i odnieść się do nich, wybierając tylko jedną z podanych możliwości wypowiedzi. Jeśli obecnie Pan/Pani nie gra, proszę odnieść się do minionych okresów grania. Następnie proszę zsumować punkty.<br/><br/> - w ogóle mnie nie dotyczy – 0 pkt<br/>- raczej mnie nie dotyczy – 1 pkt<br/>- raczej mnie dotyczy – 2 pkt<br/> - dokładnie mnie dotyczy – 3 pkt<br/><br/>1. Przeważnie grałem, żeby się odegrać.<br/>2. Nie potrafię już kontrolować mojego grania.<br/>3. Moi bliscy i przyjaciele nie mogą się dowiedzieć, ile przegrywam.<br/>4. W porównaniu z graniem codzienność jest nudna.<br/>5. Później (po grze) mam często wyrzuty sumienia.<br/>6. Używam wymówek, żeby móc iść zagrać.<br/>7. Nie udaje mi się przestać grać na dłuższy czas.<br/>8. Gram o pieniądze prawie codziennie.<br/>9. Z powodu grania mam trudności w pracy.<br/>10. W grze szukam dreszczyku emocji.<br/>11. Ciągle myślę o graniu.<br/>12. Żeby móc grać często zaopatrywałem się w pieniądze nielegalnie.<br/>13. Główną część mojego wolnego czasu poświęcam na grę.<br/>14. Przegrałem już czyjeś lub pożyczone pieniądze.<br/>15. Leczyłem się już z powodu moich problemów z hazardem.<br/>16. Często musiałem przestać grać, bo nie miałem już więcej pieniędzy.<br/>17. Ponieważ tyle gram, straciłem już wielu przyjaciół.<br/>18. Żeby móc grać często pożyczam pieniądze od innych.<br/>19. W moich fantazjach jestem tym, który wygrał.<br/>20. Z powodu grania byłem już często tak zrozpaczony, że chciałem odebrać sobie życie.<br/><br/> Interpretacja wyników:<br/> 16 – 25 pkt – można mówić o rozpoczynającym się problemie uzależnienia od hazardu.<br/> 26 – 45 pkt – wskazuje na średnio zaawansowane uzależnienie od hazardu.<br/> Powyżej 45 pkt – wskazuje na zaawansowane uzależnienie od hazardu. <br/><br/>Źródło: “Gdy hazard staje się problemem. Czy jestem uzależniony?”, Barbara Wojewódzka, Fundacja ETOH, KBPN, Warszawa 2014",
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
