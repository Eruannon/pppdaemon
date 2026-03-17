"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function DlaDzieciIMlodziezySection() {
  return (
    <section className="max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8 bg-transparent text-gray-800 relative">
      <h2
        style={{ wordSpacing: "0.2rem" }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-8 sm:mb-16"
      >
        Wsparcie
        <br />
        dla dzieci i młodzieży.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-8 h-full flex flex-col">
          <div className="relative flex-grow rounded-[32px] overflow-hidden aspect-video sm:aspect-square lg:aspect-auto lg:h-full">
            <Image
              src="/assets/o-poradni/dla-dzieci.jpg"
              alt="Wsparcie dla dzieci i młodzieży"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
              <h3 className="text-4xl tracking-tight font-semibold text-white mb-2">
                Rozwój i edukacja
              </h3>
              <p className="text-white font-semibold">
                Kompleksowe wsparcie dla młodego pokolenia
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div
            style={{ wordSpacing: "0.1em", lineHeight: "1.6" }}
            className="space-y-4 sm:space-y-6 text-sm sm:text-base text-zinc-700 font-medium tracking-tight"
          >
            <p>
              Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to placówka bliska
              problemom dzieci, młodzieży oraz osób dorosłych. Realizujemy
              darmowe zajęcia Wczesnego Wspomagania Rozwoju Dziecka na podstawie
              opinii o potrzebie WWRD. Oferujemy szeroki wachlarz zajęć
              dydaktycznych, terapeutycznych oraz warsztatów wspierających
              wszechstronny rozwój dzieci i młodzieży.
            </p>
            <p>
              Wspieramy psychologicznie młodzież w problemach wieku dorastania.
              Co roku organizujemy zajęcia przygotowujące do egzaminów
              ósmoklasisty. Dla najmłodszych oferujemy spotkania w gronie dzieci
              do 3 roku życia nie uczęszczających jeszcze do przedszkola na
              zajęcia ogólnorozwojowe z elementami bajkoterapii.
            </p>
          </div>
          <div className="flex flex-col sm:flex-col gap-4 mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#921d7f] hover:bg-[#921d7f]/90 text-white rounded-full"
            >
              <Link href="/wsparcie-dla-dzieci">
                Wsparcie dla dzieci i młodzieży
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group text-gray-600 hover:text-[#921d7f] hover:bg-[#921d7f]/5 rounded-full"
            >
              <Link
                href="/wsparcie-dla-dzieci/jak-uzyskac-darmowe-zajecia-wwrd"
                className="flex items-center"
              >
                Jak uzyskać darmowe zajęcia WWR
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
