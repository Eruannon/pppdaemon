




















































































































import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function DlaDoroslychSection() {
  return (
    <section className="max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8 bg-transparent text-gray-800 relative">
      <h2
        style={{ wordSpacing: "0.2rem" }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8 sm:mb-16"
      >
        Wsparcie
        <br />
        dla dorosłych.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-8 h-full flex flex-col">
          <div className="relative flex-grow rounded-[32px] overflow-hidden aspect-video sm:aspect-square lg:aspect-auto lg:h-full">
            <Image
              src="/assets/o-poradni/dla-doroslych.jpg"
              alt="Terapia dla dorosłych"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 sm:p-8 bg-gradient-to-t from-black to-transparent w-full">
              <h3 className="text-2xl sm:text-4xl tracking-tight font-semibold text-white mb-2">
                Wsparcie psychologiczne
              </h3>
              <p className="text-sm sm:text-base text-white font-semibold">
                Profesjonalna pomoc w trudnych sytuacjach życiowych
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <div
            style={{ wordSpacing: "0.1em", lineHeight: "1.6" }}
            className="space-y-4 sm:space-y-6 text-sm sm:text-base text-zinc-700 font-medium tracking-tight"
          >
            <p>
              Gdy życie stawia wyzwania, którym trudno sprostać, zapraszamy
              Państwa do Poradni Psychologiczno-Pedagogicznej MAGNOLIA, która
              wspiera osoby dorosłe w rozwiązywaniu trudnych sytuacji rodzinnych
              i osobistych. Prowadzimy terapię par mierzących się z trudnościami
              w związku, wspieramy rodziców w ich dylematach wychowawczych,
              oferujemy konsultacje psychologiczne oraz psychoterapię osób
              zmagających się z depresją.
            </p>
            <p>
              Właśnie w MAGNOLI mogą Państwo sprawdzić swoje predyspozycje do
              pełnienia roli rodziców wypełniając test kompetencji
              rodzicielskich, sprawdzić swoje preferencje zawodowe wykonując
              test osobowości, przeprowadzić diagnozę ADHD będąc osobą dorosłą.
            </p>
            <p>
              Wspieramy Państwa w zmaganiach z uzależnieniami behawioralnymi
              związanymi z nadmiernym korzystaniem z internetu i mediów
              społecznościowych, korzystaniem z solarium, kompulsywnymi
              zakupami, grami hazardowymi, czy objadaniem się prowadzącym do
              otyłości.
            </p>
          </div>
          <div className="flex flex-col sm:flex-col gap-4 mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#921d7f] hover:bg-[#921d7f]/90 text-white rounded-full"
            >
              <Link href="/wsparcie-dla-doroslych">
                Dowiedz się więcej o wsparciu dla dorosłych
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group text-gray-600 hover:text-[#921d7f] hover:bg-[#921d7f]/5 rounded-full"
            >
              <Link
                href="/wsparcie-dla-doroslych/terapia-dla-par"
                className="flex items-center"
              >
                Terapia dla par
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
