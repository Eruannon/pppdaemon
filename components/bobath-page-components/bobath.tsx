"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useAccessibility } from "@/lib/providers/accessibility-context";

const getFontSizeClass = (level: number) => {
  const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
  return sizes[level] || "text-base";
};

const getHeaderFontSizeClass = (level: number) => {
  const sizes = ["text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"];
  return sizes[level] || "text-3xl";
};

export default function NDTBobath() {
  const { fontSizeLevel, highContrast } = useAccessibility();
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <div
      className={`font-sans overflow-x-hidden ${
        highContrast ? "bg-black text-yellow-400" : "bg-white"
      }`}
    >
      
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/ndt-bobath.jpg"
                  alt="Sesja terapii NDT-Bobath"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start mx-6">
              <h2
                className={`font-display mb-6 font-semibold ${headerFontSizeClass}`}
              >
                Czym jest terapia NDT-Bobath?
              </h2>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Terapia NDT-Bobath (Neuro-Developmental Treatment) to
                kompleksowe podejście terapeutyczne skierowane do osób z
                zaburzeniami układu nerwowego, wpływającymi na ruch i postawę
                ciała. Metoda ta opiera się na neuroplastyczności mózgu i dąży
                do poprawy funkcji ruchowych poprzez stymulację prawidłowych
                wzorców ruchowych.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-6 md:py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            <div className="flex-col justify-center items-start mx-6 order-2 xl:order-1">
              <h2
                className={`font-display mb-6 font-semibold ${headerFontSizeClass}`}
              >
                Historia i rozwój metody
              </h2>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} mb-6`}
              >
                Metoda NDT-Bobath została opracowana w latach 40. XX wieku przez
                małżeństwo Bertę i Karla Bobath. Berta była fizjoterapeutką, a
                Karl neurologiem. Razem stworzyli innowacyjne podejście do
                rehabilitacji osób z uszkodzeniami centralnego układu nerwowego,
                koncentrując się na indywidualnych potrzebach pacjenta i
                holistycznym podejściu do terapii.
              </p>
            </div>
            <div className="relative mb-4 md:mb-0 flex justify-center items-center order-1 xl:order-2">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/history.jpg"
                  alt="Berta i Karl Bobath"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/how-it-works.jpg"
                  alt="Techniki terapii NDT-Bobath"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start mx-6">
              <h2
                className={`font-display mb-6 font-semibold ${headerFontSizeClass}`}
              >
                Jak działa terapia NDT-Bobath?
              </h2>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} mb-6`}
              >
                Terapia opiera się na analizie i poprawie wzorców ruchowych
                poprzez hamowanie nieprawidłowych odruchów i ułatwianie
                prawidłowych ruchów. Terapeuci stosują specjalne techniki
                dotykowe i ruchowe, aby stymulować mięśnie i układ nerwowy
                pacjenta. Celem jest poprawa funkcjonalności w codziennych
                czynnościach i zwiększenie samodzielności.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-6 md:py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2
            className={`font-display mb-8 font-semibold ${headerFontSizeClass}`}
          >
            Kto może skorzystać z terapii NDT-Bobath?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center">
              <div className="relative w-full h-0 pb-[75%] overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/assets/ndt-children.jpg"
                  alt="Terapia NDT-Bobath dla dzieci"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Card
                className={`w-full ${
                  highContrast ? "bg-gray-800" : "bg-yellow-100"
                } border-yellow-500`}
              >
                <CardHeader>
                  <CardTitle>Dzieci</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`${
                      highContrast ? "text-yellow-400" : "text-gray-700"
                    } ${fontSizeClass} mb-6`}
                  >
                    Dzieci z mózgowym porażeniem dziecięcym, opóźnionym rozwojem
                    psychoruchowym czy zaburzeniami genetycznymi mogą znacznie
                    skorzystać z terapii NDT-Bobath.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full h-0 pb-[75%] overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/assets/ndt-adults.jpg"
                  alt="Terapia NDT-Bobath dla dorosłych"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Card
                className={`w-full ${
                  highContrast ? "bg-gray-800" : "bg-purple-100"
                } border-purple-500`}
              >
                <CardHeader>
                  <CardTitle>Dorośli</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`${
                      highContrast ? "text-yellow-400" : "text-gray-700"
                    } ${fontSizeClass} mb-6`}
                  >
                    Osoby po udarach, urazach mózgu, z chorobami
                    neurodegeneracyjnymi czy stwardnieniem rozsianym również
                    mogą odnieść korzyści z tej terapii.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            <div className="flex-col justify-center items-start mx-6 order-2 xl:order-1">
              <h2
                className={`font-display mb-6 font-semibold ${headerFontSizeClass}`}
              >
                Jak przygotować się do terapii?
              </h2>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} mb-6`}
              >
                Przygotowanie do terapii NDT-Bobath nie wymaga specjalnych
                działań. Ważne jest jednak, aby pacjent był ubrany w wygodną
                odzież, która nie krępuje ruchów. W przypadku dzieci warto
                zabrać ulubioną zabawkę, aby zwiększyć komfort podczas sesji.
              </p>
            </div>
            <div className="relative mb-4 md:mb-0 flex justify-center items-center order-1 xl:order-2">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/preparation.jpg"
                  alt="Przygotowanie do terapii"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-6 md:py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            <div className="relative mb-4 md:mb-0 flex justify-center items-center">
              <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/session.jpg"
                  alt="Sesja terapii NDT-Bobath"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start mx-6">
              <h2
                className={`font-display mb-6 font-semibold ${headerFontSizeClass}`}
              >
                Czego oczekiwać podczas sesji?
              </h2>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} mb-6`}
              >
                Każda sesja jest indywidualnie dostosowana do potrzeb pacjenta.
                Terapeuta będzie pracować nad konkretnymi celami, takimi jak
                poprawa równowagi, koordynacji czy zakresu ruchu. Sesje są
                prowadzone w sposób przyjazny i wspierający, często
                przypominający zabawę w przypadku dzieci.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2
            className={`font-display mb-8 font-semibold ${headerFontSizeClass}`}
          >
            Korzyści z terapii NDT-Bobath
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card
              className={`${
                highContrast ? "bg-gray-800" : "bg-blue-100"
              } border-blue-500`}
            >
              <CardHeader>
                <CardTitle>Normalizacja napięcia mięśniowego</CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass} mb-6`}
                >
                  Techniki NDT-Bobath wspomagają regulację napięcia mięśniowego,
                  co pomaga w poprawie kontroli ruchu.
                </p>
              </CardContent>
            </Card>
            <Card
              className={`${
                highContrast ? "bg-gray-800" : "bg-green-100"
              } border-green-500`}
            >
              <CardHeader>
                <CardTitle>Poprawa równowagi i koordynacji</CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass} mb-6`}
                >
                  Ćwiczenia równoważne i koordynacyjne pozwalają na
                  stabilniejsze wykonywanie ruchów.
                </p>
              </CardContent>
            </Card>
            <Card
              className={`${
                highContrast ? "bg-gray-800" : "bg-red-100"
              } border-red-500`}
            >
              <CardHeader>
                <CardTitle>Zwiększenie samodzielności</CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass} mb-6`}
                >
                  Poprawa funkcji motorycznych przekłada się na większą
                  niezależność w codziennych czynnościach.
                </p>
              </CardContent>
            </Card>
            <Card
              className={`${
                highContrast ? "bg-gray-800" : "bg-purple-100"
              } border-purple-500`}
            >
              <CardHeader>
                <CardTitle>Poprawa jakości życia</CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass} mb-6`}
                >
                  Lepsza kontrola nad ciałem i ruchami wpływa pozytywnie na
                  samopoczucie i pewność siebie.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      <section className="py-6 md:py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2
            className={`font-display mb-8 font-semibold ${headerFontSizeClass}`}
          >
            Najczęściej zadawane pytania
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="question1">
              <AccordionTrigger>
                Czy terapia NDT-Bobath jest bolesna?
              </AccordionTrigger>
              <AccordionContent>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass}`}
                >
                  Nie, terapia jest zazwyczaj bezbolesna. Terapeuta dostosowuje
                  intensywność ćwiczeń do możliwości pacjenta, dbając o jego
                  komfort.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question2">
              <AccordionTrigger>
                Ile sesji terapii będzie potrzebnych?
              </AccordionTrigger>
              <AccordionContent>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass}`}
                >
                  Liczba sesji zależy od indywidualnych potrzeb i celów
                  terapeutycznych. Terapeuta opracuje plan terapii po wstępnej
                  ocenie.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question3">
              <AccordionTrigger>
                Czy rodzice mogą uczestniczyć w sesjach?
              </AccordionTrigger>
              <AccordionContent>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass}`}
                >
                  Tak, udział rodziców jest często zachęcany, zwłaszcza w
                  terapii dzieci. Pozwala to na kontynuację ćwiczeń w domu.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2
            className={`font-display mb-6 font-semibold ${headerFontSizeClass}`}
          >
            Skontaktuj się z nami
          </h2>
          <p
            className={`${
              highContrast ? "text-yellow-400" : "text-gray-700"
            } ${fontSizeClass} mb-6`}
          >
            Jeśli masz pytania lub chcesz umówić się na wizytę, zapraszamy do
            kontaktu. Nasz zespół specjalistów jest gotowy, aby pomóc Tobie i
            Twojemu dziecku w osiągnięciu pełnego potencjału.
          </p>
          <Link
            href="/kontakt"
            className={`inline-block px-6 py-3 ${
              highContrast
                ? "bg-yellow-400 text-black"
                : "bg-blue-600 text-white"
            } rounded-full font-semibold`}
          >
            Skontaktuj się
          </Link>
        </div>
      </section>
    </div>
  );
}
