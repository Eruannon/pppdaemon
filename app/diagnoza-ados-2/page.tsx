"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Stethoscope } from "lucide-react";


import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function DiagnozaAdosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <section className="relative bg-indigo-900 py-40 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/assets/diagnozy/ados.jpg" 
            alt="Tło Diagnoza ADOS-2"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <Link
            href="/"
            className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do strony głównej
          </Link>

          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 text-indigo-900 md:h-24 md:w-24">
              <Stethoscope className="h-10 w-10 md:h-12 md:w-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Diagnoza ADOS-2
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-indigo-100">
                Najbardziej wiarygodna diagnoza spektrum autyzmu i zespołu
                Aspergera.
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
                Czym jest ADOS-2?
              </h2>
              <p>
                ADOS-2, to obecnie najbardziej wiarygodne narzędzie, które
                pozwala zbadać stopień nasilenia cech spektrum autyzmu. Badanie
                polega na podejmowaniu różnych interakcji z
                dzieckiem/nastolatkiem/osobą dorosłą, w formie zabaw i dialogów,
                według ściśle przestrzeganego scenariusza. Każde zachowanie jest
                skrupulatnie opisywane i oceniane według kryteriów
                diagnostycznych. Dzięki temu rodzice (lub osoba dorosła w
                przypadku osoby pełnoletniej) otrzymują szczegółowy raport,
                opisujący zakres i nasilenie cech spektrum autyzmu.
              </p>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Diagnoza spektrum autyzmu
              </h2>
              <p>
                Zgodnie z najnowszymi klasyfikacjami psychiatrycznymi zaburzenia
                ze spektrum autyzmu obejmują schorzenia, które niegdyś uważano
                za odrębne – autyzm, zespół Aspergera, dziecięce zaburzenie
                dezintegracyjne i nieokreśloną formę całościowych zaburzeń
                rozwojowych. Niektóre osoby ze względu na wieloletnie
                przyzwyczajenie nadal używają terminu „zespół Aspergera”, który
                wśród ogółu uważany jest za łagodną formę zaburzeń ze spektrum
                autyzmu.
              </p>
            </div>

            
            <div>
              <h2 className="mb-2 text-xl font-semibold text-indigo-900">
                Kogo diagnozujemy?
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>Dzieci od 36. miesiąca życia.</li>
                <li>Dzieci w wieku przedszkolnym i szkolnym.</li>
                <li>Nastolatków i młodzież.</li>
                <li>
                  Dorosłych – w tym osoby, które nigdy wcześniej nie były
                  diagnozowane, a dziś podejrzewają u siebie spektrum autyzmu.
                </li>
              </ul>
              <p className="mt-4">
                W naszej placówce do Państwa dyspozycji jest czterech diagnostów
                spektrum autyzmu, wyróżniają nas krótkie terminy oczekiwania na
                badanie.
              </p>
            </div>

            
            <div>
              <h2 className="mb-2 text-xl font-semibold text-indigo-900">
                Badania prowadzimy w:
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                {/* <li>
                  Rybniku centrum, kampus, ulica Rudzka 13c, budynek B, trzecie
                  piętro, gabinet 3.3,
                </li> */}
                <li>
                  Rybniku – Golejów Poradnia Psychologiczno–Pedagogiczna
                  MAGNOLIA, ul. Magnolii 25,
                </li>
                
              </ul>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Jak przebiega proces diagnostyczny?
              </h2>
              <ol className="ml-6 list-decimal space-y-2">
                <li>Umówienie daty badania.</li>
                <li>
                  Wywiad z rodzicem/opiekunem prawnym w przypadku osoby
                  niepełnoletniej.
                </li>
                <li>Wywiad z osobą badaną.</li>
                <li>Badanie narzędziem ADOS–2.</li>
                <li>Przygotowanie raportu z badania z opisem.</li>
                <li>Odebranie dokumentacji z badania.</li>
              </ol>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Narzędzia diagnostyczne diagnozujące spektrum autyzmu
              </h2>
              <p>
                Oto tzw. „złota trójka” narzędzi, które zapewniają najbardziej
                rzetelny proces diagnozy:
              </p>
              <ul className="mt-4 ml-6 list-disc space-y-2">
                <li>
                  <strong>ADOS-2</strong> (Autism Diagnostic Observation
                  Schedule – Second Edition)
                </li>
                <li>
                  <strong>ASRS</strong> (Autism Spectrum Rating Scales)
                </li>
                <li>
                  <strong>ADI-R</strong> (Autism Diagnostic Interview – Revised)
                </li>
              </ul>
            </div>

            
            <div className="space-y-6 rounded-xl bg-indigo-50 p-6 shadow-md">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  1. ADOS-2 – obserwacja kliniczna
                </h3>
                <p>
                  To złoty standard diagnozy spektrum autyzmu, wykorzystywany na
                  całym świecie. Polega na bezpośredniej obserwacji osoby
                  badanej w trakcie wykonywania zadań dobranych do jej wieku i
                  poziomu rozwoju językowego.
                </p>
                <p className="mt-2">
                  <strong>Co mierzy?</strong> Zachowania komunikacyjne (werbalne
                  i niewerbalne), jakość relacji społecznych, styl zabawy,
                  elastyczność zachowań i obecność cech typowych dla spektrum
                  autyzmu.
                </p>
                <p className="mt-2">
                  <strong>Dla kogo?</strong> Dzieci od 36 miesiąca życia,
                  młodzież i osoby dorosłe. Narzędzie zawiera różne moduły
                  dopasowane do wieku i poziomu językowego.
                </p>
                <p className="mt-2">
                  <strong>Dlaczego jest ważne?</strong> Pozwala zaobserwować w
                  warunkach kontrolowanych, jak osoba nawiązuje kontakt, reaguje
                  na bodźce społeczne, czy inicjuje i podtrzymuje relacje.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  2. ASRS – Autism Spectrum Rating Scales
                </h3>
                <p>
                  Wystandaryzowany kwestionariusz przeznaczony do wypełnienia
                  przez rodziców/opiekunów (lub samego badanego, jeśli to osoba
                  dorosła).
                </p>
                <p className="mt-2">
                  <strong>Co mierzy?</strong> Ocena codziennego funkcjonowania,
                  komunikacji, interakcji społecznych, sztywności zachowań,
                  nadwrażliwości sensorycznej i trudności adaptacyjnych.
                </p>
                <p className="mt-2">
                  <strong>Dla kogo?</strong> Dzieci, młodzież i dorośli w wieku
                  od 2 do 18 lat (w wersji dla rodzica/nauczyciela) oraz osoby
                  dorosłe (w wersji samoopisowej).
                </p>
                <p className="mt-2">
                  <strong>Dlaczego jest ważne?</strong> Pokazuje, jak osoba
                  funkcjonuje w naturalnym środowisku – w domu, przedszkolu,
                  szkole, pracy – i jakie trudności zauważają bliscy.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  3. ADI-R – pogłębiony wywiad diagnostyczny
                </h3>
                <p>Wywiad kliniczny przeprowadzany z rodzicem lub opiekunem.</p>
                <p className="mt-2">
                  <strong>Co mierzy?</strong> Historię rozwoju dziecka, przebieg
                  rozwoju mowy i komunikacji, zachowania społeczne i wzorce
                  sztywnych zainteresowań od wczesnego dzieciństwa do chwili
                  badania.
                </p>
                <p className="mt-2">
                  <strong>Dla kogo?</strong> Najczęściej stosowany w diagnozie
                  dzieci i młodzieży. Kluczowe jest, aby opiekun znał szczegóły
                  rozwoju dziecka od najwcześniejszych lat.
                </p>
                <p className="mt-2">
                  <strong>Dlaczego jest ważne?</strong> Dostarcza danych
                  historycznych, których nie można uzyskać w badaniu
                  bezpośrednim – np. jak dziecko rozwijało mowę, kiedy pojawiły
                  się pierwsze niepokojące objawy, jak przebiegał kontakt
                  wzrokowy, zabawa czy relacje z rówieśnikami.
                </p>
              </div>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Możesz uzyskać trzy niezależne raporty diagnostyczne
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Raport z <strong>ASRS</strong> – ze szczegółowym profilem
                  funkcjonowania
                </li>
                <li>
                  Raport z <strong>ADI-R</strong> – z opisem rozwoju i trudności
                  od wczesnego dzieciństwa
                </li>
                <li>
                  Raport z <strong>ADOS-2</strong> – z obserwacji klinicznej i
                  analizą zachowań społecznych
                </li>
              </ul>
              <p className="mt-4">
                Każdy raport zawiera szczegółowy opis objawów, wyniki w skali
                klinicznej, interpretację psychologiczną oraz indywidualne
                rekomendacje – zarówno terapeutyczne, jak i wychowawcze,
                edukacyjne, a także – jeśli to konieczne – medyczne.
              </p>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Najczęstsze pytania i obserwacje
              </h2>

              <Accordion type="multiple" className="space-y-4">
                
                <AccordionItem value="warning-signs">
                  <AccordionTrigger className="text-lg font-semibold">
                    Co powinno mnie zaniepokoić u mojego dziecka?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-semibold mt-2">
                      Wczesne sygnały ostrzegawcze (0–3 r.ż.)
                    </p>
                    <div className="mt-2 space-y-4">
                      <div>
                        <h4 className="font-semibold">Komunikacja i język:</h4>
                        <ul className="ml-6 list-disc space-y-1 mt-1">
                          <li>
                            Brak gaworzenia społecznego do 12. miesiąca życia
                            (brak wymiany dźwięków z dorosłym).
                          </li>
                          <li>
                            Brak gestów wskazujących (wskazywanie palcem w celu
                            pokazania czegoś) do 12. miesiąca.
                          </li>
                          <li>
                            Brak reakcji na imię, brak kontaktu wzrokowego lub
                            kontakt bardzo przelotny.
                          </li>
                          <li>
                            Brak reakcji na mowę kierowaną do dziecka – dziecko
                            wydaje się „jakby nie słyszało”.
                          </li>
                          <li>
                            Opóźniony rozwój mowy (brak słów do 16. miesiąca
                            życia, brak zdań dwuwyrazowych do 24. miesiąca).
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold">Relacje społeczne:</h4>
                        <ul className="ml-6 list-disc space-y-1 mt-1">
                          <li>
                            Brak zainteresowania twarzą opiekuna, rzadkie
                            uśmiechy społeczne.
                          </li>
                          <li>
                            Brak podążania wzrokiem za kierunkiem spojrzenia
                            dorosłego.
                          </li>
                          <li>
                            Brak naśladowania mimiki, gestów, prostych
                            czynności.
                          </li>
                          <li>
                            Obojętność wobec obecności innych dzieci lub
                            unikanie kontaktu z nimi.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Zachowania i zainteresowania:
                        </h4>
                        <ul className="ml-6 list-disc space-y-1 mt-1">
                          <li>
                            Silna potrzeba powtarzalności i rytuałów – silny
                            niepokój lub złość przy zmianie rutyny.
                          </li>
                          <li>
                            Długotrwałe przyglądanie się przedmiotom w nietypowy
                            sposób (np. obracanie kółek).
                          </li>
                          <li>
                            Nietypowe przywiązanie do nietypowych obiektów (np.
                            klamka, kawałek sznurka).
                          </li>
                          <li>
                            Nietypowe reakcje na bodźce sensoryczne (np.
                            niepokój przy głośnych dźwiękach).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="preschool-behaviors">
                  <AccordionTrigger className="text-lg font-semibold">
                    Zachowania obserwowane u dzieci w wieku przedszkolnym
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-semibold mt-2">
                      (3–6 r.ż.) Komunikacja i język:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 mt-1">
                      <li>
                        Mowa może się pojawić, ale jest niewłaściwie używana –
                        echolalia, powtarzanie dialogów z bajek.
                      </li>
                      <li>
                        Trudności z prowadzeniem dialogu – dziecko mówi „do
                        siebie”, nie dostosowuje wypowiedzi do rozmówcy.
                      </li>
                      <li>
                        Brak umiejętności zadawania pytań w celu zdobycia
                        informacji.
                      </li>
                      <li>
                        Dosłowne rozumienie języka (brak rozumienia metafor,
                        żartów).
                      </li>
                    </ul>
                    <p className="font-semibold mt-4">Relacje społeczne:</p>
                    <ul className="ml-6 list-disc space-y-1 mt-1">
                      <li>
                        Trudności z inicjowaniem i podtrzymywaniem relacji
                        rówieśniczych.
                      </li>
                      <li>
                        Zabawa samotna, schematyczna, brak zabawy „na niby”.
                      </li>
                      <li>
                        Trudność w rozpoznawaniu emocji u innych – brak reakcji
                        na smutek, płacz.
                      </li>
                    </ul>
                    <p className="font-semibold mt-4">
                      Zachowania stereotypowe i sztywność:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 mt-1">
                      <li>
                        Powtarzalne ruchy (machanie rękami, kręcenie się),
                        przywiązanie do rutyn.
                      </li>
                      <li>
                        Silne, zawężone zainteresowania (np. obsesyjne układanie
                        pociągów).
                      </li>
                      <li>
                        Trudności z adaptacją do zmian, napady złości przy
                        zmianie planów.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="school-age">
                  <AccordionTrigger className="text-lg font-semibold">
                    Objawy u dzieci w wieku szkolnym (7 lat i więcej)
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-semibold mt-2">
                      Komunikacja i interakcje społeczne:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 mt-1">
                      <li>
                        Wypowiedzi nienaturalne – monotonna intonacja, brak
                        dostosowania treści do sytuacji.
                      </li>
                      <li>
                        Trudność w zrozumieniu intencji innych, ironii,
                        sarkazmu.
                      </li>
                      <li>
                        Brak elastyczności w rozmowie – dziecko narzuca temat.
                      </li>
                      <li>
                        Trudność z rozpoznawaniem i wyrażaniem emocji (własnych
                        i cudzych).
                      </li>
                    </ul>
                    <p className="font-semibold mt-4">
                      Funkcjonowanie społeczne:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 mt-1">
                      <li>
                        Izolowanie się od grupy, niezrozumienie zasad
                        współpracy.
                      </li>
                      <li>
                        Problemy z przestrzeganiem reguł społecznych – zbyt
                        bliskie podchodzenie do innych, nadmierna szczerość.
                      </li>
                      <li>
                        Dziecko może być odbierane jako „niesforne” lub
                        „ekscentryczne”.
                      </li>
                    </ul>
                    <p className="font-semibold mt-4">
                      Sposób spędzania czasu i zachowania:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 mt-1">
                      <li>
                        Pochłonięcie specyficznymi tematami (np. astronomia,
                        liczby pierwsze).
                      </li>
                      <li>
                        Silna potrzeba przewidywalności – lęk przed
                        spontanicznością.
                      </li>
                      <li>
                        Trudności z generalizowaniem wiedzy do nowych sytuacji.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="sensory-reactions">
                  <AccordionTrigger className="text-lg font-semibold">
                    Nietypowe reakcje sensoryczne
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2">
                      Mogą występować na każdym etapie rozwoju:
                    </p>
                    <ul className="ml-6 list-disc space-y-1 mt-2">
                      <li>
                        Nadwrażliwość słuchowa (zasłanianie uszu przy
                        odkurzaczu).
                      </li>
                      <li>
                        Nadwrażliwość dotykowa (niechęć do przytulania,
                        obcinania paznokci).
                      </li>
                      <li>
                        Podwrażliwość sensoryczna (dziecko szuka intensywnych
                        doznań, np. gryzienie, skakanie).
                      </li>
                      <li>
                        Wybiórczość pokarmowa (ograniczenie do konkretnych
                        konsystencji, kolorów).
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="teachers">
                  <AccordionTrigger className="text-lg font-semibold">
                    ZESTAWIENIE OBJAWÓW ZABURZEŃ ZE SPEKTRUM AUTYZMU – DLA
                    NAUCZYCIELI
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2">
                      Poniższe objawy nie muszą występować jednocześnie. Ich
                      nasilenie i konfiguracja mogą się znacznie różnić.
                    </p>
                    <p>
                      <strong>
                        OBSZAR I: KOMUNIKACJA WERBALNA I NIEWERBALNA
                      </strong>
                    </p>
                    <ul className="ml-6 list-disc mb-4">
                      <li>
                        Uczeń nie inicjuje rozmowy, nie odwzajemnia mimiki,
                        uśmiechu.
                      </li>
                      <li>Nietypowa intonacja – monotonna, śpiewna.</li>
                      <li>Echolalia – powtarzanie bez zrozumienia.</li>
                      <li>
                        Dosłowne rozumienie języka – brak rozumienia metafor,
                        przenośni.
                      </li>
                    </ul>
                    <p>
                      <strong>OBSZAR II: INTERAKCJE SPOŁECZNE</strong>
                    </p>
                    <ul className="ml-6 list-disc mb-4">
                      <li>
                        Brak spontanicznego wchodzenia w relacje z rówieśnikami.
                      </li>
                      <li>
                        Trudności w rozumieniu emocji i potrzeb innych, brak
                        empatii.
                      </li>
                      <li>
                        Zachowania „niewłaściwe” – zbyt bliskie podchodzenie,
                        nadmierna szczerość.
                      </li>
                    </ul>
                    <p>
                      <strong>
                        OBSZAR III: ZACHOWANIA STEREOTYPOWE I SZTYWNOŚĆ
                      </strong>
                    </p>
                    <ul className="ml-6 list-disc mb-4">
                      <li>
                        Reakcja złości lub niepokoju na zmiany w planie dnia.
                      </li>
                      <li>
                        Powtarzalne ruchy – machanie rękami, kręcenie się.
                      </li>
                      <li>
                        Przywiązanie do rutyn i rytuałów, schematyczna zabawa.
                      </li>
                    </ul>
                    <p>
                      <strong>
                        OBSZAR IV: FUNKCJONOWANIE POZNAWCZE I ZABAWA
                      </strong>
                    </p>
                    <ul className="ml-6 list-disc mb-4">
                      <li>
                        Brak zabawy symbolicznej („na niby”), brak wyobraźni
                        społecznej.
                      </li>
                      <li>
                        Trudności w elastycznym myśleniu, dziecko „utkwi” w
                        jednym schemacie.
                      </li>
                    </ul>
                    <p>
                      <strong>OBSZAR V: REAKCJE SENSORYCZNE</strong>
                    </p>
                    <ul className="ml-6 list-disc mb-4">
                      <li>
                        Zasłanianie uszu przy hałasie, unikanie kontaktu
                        fizycznego.
                      </li>
                      <li>
                        Wyraźne upodobania sensoryczne – intensywne wąchanie,
                        lizanie.
                      </li>
                    </ul>
                    <p>
                      <strong>
                        OBSZAR VI: TRUDNOŚCI W ORGANIZACJI, UWADZE I REGULACJI
                        EMOCJI
                      </strong>
                    </p>
                    <ul className="ml-6 list-disc mb-4">
                      <li>
                        Łatwe wpada w stan silnego pobudzenia emocjonalnego.
                      </li>
                      <li>Trudności w przewidywaniu skutków działań.</li>
                      <li>
                        Uczeń nie potrafi dostosować się do zasad grupy mimo
                        prób.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="when-to-report">
                  <AccordionTrigger className="text-lg font-semibold">
                    KIEDY ZGŁOSIĆ OBAWY?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2">
                      Zaleca się, aby nauczyciel przekazał swoje obserwacje
                      rodzicom lub zespołowi specjalistów w placówce (pedagog,
                      psycholog, logopeda), gdy:
                    </p>
                    <ul className="ml-6 list-disc mt-2 space-y-1">
                      <li>
                        Trudności są utrwalone i występują w różnych sytuacjach.
                      </li>
                      <li>
                        Objawy utrudniają funkcjonowanie dziecka w grupie lub
                        realizację programu edukacyjnego.
                      </li>
                      <li>
                        Próby wsparcia dziecka nie przynoszą oczekiwanych
                        rezultatów.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Czym wyróżnia się ADOS-2 na tle innych narzędzi?
              </h2>
              <p>
                ADOS-2 (Autism Diagnostic Observation Schedule – Second Edition)
                uznawany jest obecnie za najbardziej rzetelne i precyzyjne
                narzędzie służące do diagnozowania zaburzeń ze spektrum autyzmu.
                Ze względu na swoją wysoką trafność diagnostyczną oraz spójność
                procedur badawczych, na całym świecie określany jest mianem
                „złotego standardu diagnozy autyzmu”.
              </p>
              <p className="mt-4">
                Narzędzie to opiera się na zestawie ściśle ustrukturyzowanych
                zadań i sytuacji diagnostycznych, które pozwalają na obserwację
                zachowań dziecka w kluczowych obszarach funkcjonowania:
                komunikacji werbalnej i niewerbalnej, interakcji społecznych,
                wyobraźni, zabawy symbolicznej oraz obecności ograniczonych i
                powtarzalnych wzorców zachowań. Co istotne, zadania te są
                starannie dostosowane do wieku rozwojowego, poziomu językowego i
                kompetencji poznawczych osoby badanej, co pozwala na uzyskanie
                trafnych i adekwatnych danych niezależnie od wieku czy poziomu
                funkcjonowania.
              </p>
              <p className="mt-4">
                W odróżnieniu od wielu innych metod, ADOS-2 charakteryzuje się
                wysokim poziomem standaryzacji zarówno w zakresie procedury
                badania, jak i sposobu oceny. Diagnoza przebiega według
                jednolitego, ściśle określonego protokołu (scenariusza), który
                zapewnia spójność i powtarzalność warunków diagnostycznych.
              </p>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Zaburzenia ze spektrum autyzmu (ASD)
              </h2>
              <p>
                Zaburzenia ze spektrum autyzmu (ASD, ang. Autism Spectrum
                Disorder) należą do grupy zaburzeń neurorozwojowych, których
                etiologia wiąże się z odmiennym, atypowym rozwojem mózgu. Termin
                „spektrum” podkreśla ogromną różnorodność w zakresie
                funkcjonowania osób z autyzmem – zarówno w sferze poznawczej,
                jak i społecznej, komunikacyjnej oraz behawioralnej.
              </p>
              <p className="mt-4">
                Początek objawów ASD przypada zazwyczaj na wczesne dzieciństwo.
                U większości dzieci pierwsze symptomy są zauważalne w pierwszym
                roku życia, choć czasem pojawiają się między 18. a 24. miesiącem
                życia.
              </p>
              <p className="mt-4">
                Chociaż obecnie nie istnieje leczenie farmakologiczne
                przyczynowe, które mogłoby całkowicie wyeliminować objawy
                zaburzeń ze spektrum autyzmu, liczne badania naukowe wskazują na
                ogromne znaczenie wczesnej, intensywnej i wieloaspektowej
                interwencji terapeutycznej. W szczególności skuteczność wykazują
                programy oparte na zasadach terapii behawioralnej, które –
                dostosowane indywidualnie do potrzeb i możliwości dziecka – mogą
                znacząco poprawić jakość jego funkcjonowania w różnych obszarach
                życia.
              </p>
            </div>

            
            <div className="rounded-xl bg-indigo-900 p-8 text-white">
              <h2 className="mb-4 text-2xl font-bold">
                Umów badanie diagnostyczne ADOS-2
              </h2>
              <p className="mb-6">
                Chcesz uzyskać precyzyjną diagnozę w kierunku spektrum autyzmu?
                Skontaktuj się z nami, aby ustalić termin badania. Nasi
                specjaliści odpowiedzą na Twoje pytania i pomogą w wyborze
                najlepszego modułu ADOS-2.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link href={"/kontakt"}>
                  <Button
                    size="lg"
                    className="bg-amber-400 text-indigo-900 hover:bg-amber-500"
                  >
                    Umów wizytę
                  </Button>
                </Link>
                <Link href={"/kontakt"}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-black hover:bg-white/90"
                  >
                    Skontaktuj się z nami
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          
          <div className="mx-auto mt-16 max-w-5xl">
            <h2 className="mb-6 text-3xl font-bold text-indigo-900">
              Cennik badań diagnostycznych
            </h2>
            <p className="mb-8 text-gray-700">
              Oferujemy pakiety diagnostyczne obejmujące różne kombinacje
              narzędzi (ADOS-2, ADI-R, ASRS). Wybierz opcję, która najlepiej
              odpowiada Twoim potrzebom.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              
              <div className="rounded-xl border p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  ADOS-2
                </h3>
                <p className="text-2xl font-bold text-amber-500">600 zł</p>
              </div>
              <div className="rounded-xl border p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  ADI-R
                </h3>
                <p className="text-2xl font-bold text-amber-500">350 zł</p>
              </div>
              <div className="rounded-xl border p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  ASRS
                </h3>
                <p className="text-2xl font-bold text-amber-500">200 zł</p>
              </div>

              
              <div className="rounded-xl border p-6 shadow-sm sm:col-span-2 lg:col-span-1">
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  ADOS–2 + ADI-R
                </h3>
                <p className="text-2xl font-bold text-amber-500">800 zł</p>
              </div>
              <div className="rounded-xl border p-6 shadow-sm sm:col-span-2 lg:col-span-1">
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  ADOS - 2 + MOXO
                </h3>
                <p className="text-2xl font-bold text-amber-500">800 zł</p>
              </div>

              
              <div className="rounded-xl border p-6 shadow-sm sm:col-span-2 lg:col-span-1">
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  ADOS–2 + ADI-R + ASRS
                </h3>
                <p className="text-2xl font-bold text-amber-500">900 zł</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-indigo-950 py-10 text-white mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold">Centrum Integra</h3>
              <p className="mt-1 text-indigo-200">
                Wspieramy rozwój dzieci z pasją
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/" className="transition-colors hover:text-amber-400">
                Strona główna
              </Link>
              <Link href="#" className="transition-colors hover:text-amber-400">
                O nas
              </Link>
              <Link href="#" className="transition-colors hover:text-amber-400">
                Usługi
              </Link>
              <Link href="#" className="transition-colors hover:text-amber-400">
                Kontakt
              </Link>
            </div>
          </div>
          <div className="mt-10 border-t border-indigo-900 pt-6 text-center text-sm text-indigo-300">
            <p>
              © {new Date().getFullYear()} Centrum Integra. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
