"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain } from "lucide-react";


import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/**
 * Strona diagnostyki ADHD (dzieci + dorośli)
 * — układ identyczny jak w podstronach innych diagnoz,
 * — responsywna siatka + Tailwind,
 * — brak zewnętrznych zapytań → czysty statyczny komponent.
 */
export default function DiagnozaADHDPage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <section className="relative bg-indigo-900 py-40 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/assets/diagnozy/inne-adhd.jpg"
            alt="Tło — Diagnoza ADHD"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <Link
            href="/"
            className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do strony głównej
          </Link>

          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 text-indigo-900 md:h-24 md:w-24">
              <Brain className="h-10 w-10 md:h-12 md:w-12" />
            </div>

            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Diagnoza ADHD
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-indigo-100">
                Specjalistyczna ocena uwagi, impulsywności i nadruchliwości u
                dzieci, nastolatków oraz osób dorosłych.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-12 leading-relaxed text-gray-700">
            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Na czym polega diagnoza ADHD?
              </h2>
              <p>
                ADHD (Attention Deficit Hyperactivity Disorder) to jedno z
                najczęstszych zaburzeń neurorozwojowych. Obejmuje trzy
                podstawowe obszary trudności: uwagę, impulsywność i
                nadruchliwość. Objawy wykraczają poza typowy rozwój i znacząco
                wpływają na funkcjonowanie w szkole, pracy i relacjach.
              </p>
              <p className="mt-4">
                Nasz proces diagnostyczny łączy obserwację kliniczną, testy
                psychologiczne, standaryzowane kwestionariusze oraz szczegółowy
                wywiad, co pozwala różnicować ADHD z innymi trudnościami (m.in.
                lęk, depresja, ASD, ODD).
              </p>
            </div>

            
            <div>
              <h2 className="mb-2 text-xl font-semibold text-indigo-900">
                Kogo diagnozujemy?
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>Dzieci od 6 r.ż. z podejrzeniem ADHD.</li>
                <li>
                  Uczniów z trudnościami szkolnymi, problemami z koncentracją
                  lub zachowaniem.
                </li>
                <li>
                  Nastolatków, u których objawy utrudniają naukę i relacje.
                </li>
                <li>Dorosłych bez wcześniejszej diagnozy, ale z objawami.</li>
              </ul>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                W jakich sytuacjach warto rozważyć badanie?
              </h2>
              <p>
                Skonsultuj się, jeśli obserwujesz m.in.: trudności z
                koncentracją, częste gubienie rzeczy, impulsywne zachowania,
                „wiercenie się”, konflikty w relacjach czy chroniczne zaległości
                w obowiązkach.
              </p>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Jak przebiega proces diagnostyczny?
              </h2>
              <ol className="ml-6 list-decimal space-y-2">
                <li>Umówienie badania.</li>
                <li>Wywiad rozwojowy z rodzicem / pacjentem dorosłym.</li>
                <li>
                  Obserwacja kliniczna i testy poznawcze z dzieckiem /
                  pacjentem.
                </li>
                <li>
                  Kwestionariusze standaryzowane (Conners 3, MOXO-CPT,
                  Vanderbilt, SWAN, DIVA-5).
                </li>
                <li>Analiza wyników i opracowanie profilu funkcjonowania.</li>
                <li>
                  Omówienie raportu oraz zaleceń terapeutycznych /
                  farmakologicznych.
                </li>
              </ol>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Wykorzystywane narzędzia
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Conners 3</strong> – skale dla rodzica, nauczyciela,
                  dziecka.
                </li>
                <li>
                  <strong>MOXO-CPT</strong> – komputerowy test ciągłej uwagi z
                  realistycznymi dystraktorami.
                </li>
                <li>
                  <strong>DIVA-5</strong> – wywiad kliniczny dla dorosłych.
                </li>
                <li>Kwestionariusze Vanderbilt, SDQ, SNAP-IV, SWAN.</li>
                <li>BRIEF-2 – funkcje wykonawcze.</li>
              </ul>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Co otrzymują rodzice / pacjent?
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>Szczegółowy raport diagnostyczny.</li>
                <li>Indywidualne zalecenia terapeutyczne i edukacyjne.</li>
                <li>
                  W razie potrzeby – rekomendacja konsultacji psychiatrycznej.
                </li>
              </ul>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Gdzie prowadzimy diagnozy?
              </h2>
              <ul className="ml-6 list-disc space-y-1">
                {/* <li>
                  Rybnik – kampus, ul. Rudzka 13c (bud. B, III p., gab. 3.3)
                </li> */}
                <li>Rybnik Golejów – PPP Magnolia, ul. Magnolii 25</li>
                
              </ul>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Typowe sygnały ADHD (wiek → objawy)
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                
                <AccordionItem value="3-6">
                  <AccordionTrigger className="text-lg font-semibold">
                    Przedszkolaki (3–6 lat)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Uwaga</h4>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Trudność skupienia nawet kilku minut.</li>
                        <li>Porzucanie zadań przed ukończeniem.</li>
                        <li>Niewrażliwość na polecenia.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Nadruchliwość</h4>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Stały ruch, bieganie, wspinanie.</li>
                        <li>Brak spokoju przy stole / w kręgu.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Impulsywność</h4>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Przerywanie rozmów, brak czekania na kolej.</li>
                        <li>Szybkie wybuchy złości.</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="7-9">
                  <AccordionTrigger className="text-lg font-semibold">
                    Wczesnoszkolne (7–9 lat)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Uwaga</h4>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Niewykonywanie instrukcji do końca.</li>
                        <li>Gubienie przyborów, zapominanie zadań.</li>
                        <li>Błędy przez nieuwagę.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Nadruchliwość</h4>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Wiercenie się, wstawanie z ławki.</li>
                        <li>Pukanie, stukanie, manipulowanie.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Impulsywność</h4>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Przerywanie, odpowiadanie bez namysłu.</li>
                        <li>Wybuchy frustracji.</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="10-18">
                  <AccordionTrigger className="text-lg font-semibold">
                    Nastolatki (10–18 lat)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Uwaga</h4>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Trudność z organizacją projektów.</li>
                        <li>Kłopoty z terminami i materiałami.</li>
                        <li>Hiperfokus ↔ rozproszenie.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Nadruchliwość</h4>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Poczucie wewnętrznego niepokoju.</li>
                        <li>Bujanie się, kręcenie przedmiotami.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Impulsywność</h4>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Impulsywne decyzje / zakupy.</li>
                        <li>Konflikty z powodu nieprzemyślanych słów.</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            
            <div className="rounded-xl bg-indigo-900 p-8 text-white">
              <h2 className="mb-4 text-2xl font-bold">
                Umów badanie diagnostyczne ADHD
              </h2>
              <p className="mb-6">
                Podejrzewasz ADHD? Skontaktuj się z nami, aby wybrać dogodny
                termin. Nasi specjaliści odpowiedzą na wszystkie pytania.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  size="lg"
                  className="bg-amber-400 text-indigo-900 hover:bg-amber-500"
                >
                  Umów wizytę
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Skontaktuj się z nami
                </Button>
              </div>
            </div>

            
            <section className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="mb-8 text-2xl font-bold text-indigo-900">
                  Cennik usług
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">Conners 3</h3>
                    <p className="text-3xl font-bold text-amber-500">350 zł</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Conners online – 300 zł
                    </p>
                    <p className="text-sm text-gray-600">
                      Konsultacja – 150 zł
                    </p>
                  </div>

                  
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">MOXO-CPT</h3>
                    <p className="text-3xl font-bold text-amber-500">300 zł</p>
                    <p className="mt-2 text-sm text-gray-600">
                      MOXO online – 250 zł
                    </p>
                    <p className="text-sm text-gray-600">
                      Konsultacja – 150 zł
                    </p>
                  </div>

                  
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      Conners 3 + MOXO
                    </h3>
                    <p className="text-3xl font-bold text-amber-500">600 zł</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Konsultacja – 150 zł
                    </p>
                  </div>

                  
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      DIVA-5 online
                    </h3>
                    <p className="text-3xl font-bold text-amber-500">400 zł</p>
                    <p className="mt-2 text-sm text-gray-600">
                      DIVA-5 + konsultacja – 600 zł
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
