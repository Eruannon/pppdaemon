import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function TherapyAnimalsSection() {
  return (
    <section className="max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8 bg-transparent text-gray-800 relative">
      <h2
        style={{ wordSpacing: "0.2rem" }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8 sm:mb-16"
      >
        Nasze pupile
        <br />w terapii.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-8 h-full flex flex-col">
          <div className="relative flex-grow rounded-[32px] overflow-hidden aspect-video sm:aspect-square lg:aspect-auto lg:h-full">
            <Image
              src="/assets/o-poradni/zimowa-daisy.png"
              alt="Pies terapeutyczny Daisy"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 sm:p-8 bg-gradient-to-t from-black to-transparent w-full">
              <h3 className="text-2xl sm:text-4xl tracking-tight font-semibold text-white mb-2">
                Dogoterapia
              </h3>
              <p className="text-sm sm:text-base text-white font-semibold">
                Daisy, nasz Golden Retriever, pomaga w terapii
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
              Poradnia Psychologiczno-Pedagogiczna MAGNOLIA to również dom dla
              szeregu „braci mniejszych". Na co dzień pracujemy w towarzystwie
              czworonogów: kochanego psiaka o imieniu Daisy rasy Golden
              Retriever oraz króliczków miniaturek Lusi i Trusi.
            </p>
            <p>
              Utrzymujemy bliski kontakt ze staniną koni, umożliwiającą nam
              prowadzenie hipoterapii. Stawiamy na bliski kontakt z naturą, gdyż
              wierzymy, że życie w harmonii z przyrodą i otaczającym nas światem
              korzystnie wpływa na samopoczucie ludzi w każdym wieku.
            </p>
            <p>
              Podczas pobytu w naszej placówce zapewniamy Państwu możliwość
              skorzystania ze strefy relaksu z widokiem na akwarium przy
              dźwiękach odprężającej muzyki. Nasi najmłodsi podopieczni
              uczęszczają na zajęcia w towarzystwie króliczków oraz korzystają z
              dobroczynnego wpływu dogoterapii oraz hipoterapii.
            </p>
          </div>
          <div className="flex flex-col sm:flex-col gap-4 mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#921d7f] hover:bg-[#921d7f]/90 text-white rounded-full"
            >
              <Link
                href="https://www.tiktok.com/@poradnia_magnolia_rybnik"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zajrzyj na naszego TikToka
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group text-gray-600 hover:text-[#921d7f] hover:bg-[#921d7f]/5 rounded-full"
            >
              <Link href="/hipoterapia" className="flex items-center">
                Dowiedz się więcej o hipoterapii
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
