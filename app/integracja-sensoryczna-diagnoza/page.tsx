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

export default function IntegracjaSensorycznaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <section className="relative bg-indigo-900 py-40 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/assets/diagnozy/diagnoza-si.jpg"
            alt="Tło Diagnoza Integracji Sensorycznej"
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
                Diagnoza Integracji Sensorycznej (SI)
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-indigo-100">
                Kompleksowa ocena przetwarzania bodźców zmysłowych u dzieci.
                Wczesne wykrycie trudności i wdrożenie skutecznej terapii
                potrafi diametralnie wpłynąć na rozwój i funkcjonowanie Twojego
                dziecka.
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
                Na czym polega diagnoza SI?
              </h2>
              <p>
                Zaburzenia integracji sensorycznej mogą znacząco wpływać na
                codzienne funkcjonowanie dziecka – jego rozwój motoryczny,
                emocjonalny, społeczny, zdolność uczenia się, a nawet relacje z
                otoczeniem. Prawidłowa diagnoza SI pozwala na wczesne wykrycie
                trudności w przetwarzaniu bodźców sensorycznych (słuchowych,
                wzrokowych, dotykowych, proprioceptywnych i przedsionkowych),
                zrozumienie źródeł niepokojących zachowań oraz wdrożenie
                skutecznej terapii.
              </p>
              <p className="mt-4">
                Badanie SI opiera się na wystandaryzowanych narzędziach
                diagnostycznych, obserwacji klinicznej oraz pogłębionym
                wywiadzie z rodzicem. Na tej podstawie tworzony jest szczegółowy
                raport opisujący profil sensoryczny dziecka, wskazujący na
                obszary nadwrażliwości, podwrażliwości lub poszukiwania
                sensorycznego oraz dający podstawę do planowania terapii.
              </p>
            </div>

            
            <div>
              <h2 className="mb-2 text-xl font-semibold text-indigo-900">
                Kogo diagnozujemy?
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Dzieci od 2. roku życia z podejrzeniem trudności
                  sensorycznych.
                </li>
                <li>
                  Dzieci w wieku przedszkolnym i szkolnym, u których obserwuje
                  się problemy z koncentracją, nadruchliwością, koordynacją lub
                  zachowaniem.
                </li>
                <li>
                  Dzieci z trudnościami w uczeniu się, z opóźnionym rozwojem
                  psychoruchowym, z niepełnosprawnością intelektualną,
                  zaburzeniami ze spektrum autyzmu i ADHD.
                </li>
              </ul>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Co powinno zaniepokoić rodzica?
              </h2>
              <p>
                Wybrane sygnały ostrzegawcze zaburzeń integracji sensorycznej z
                podziałem na wiek dziecka
              </p>

              
              <div className="mt-6 rounded-xl bg-indigo-50 p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  Niemowlęta i dzieci do 3. roku życia
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold">Reakcje na dotyk</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Silny protest przy przewijaniu, ubieraniu, kąpieli (płacz,
                      napinanie ciała).
                    </li>
                    <li>
                      Unikanie przytulania lub przeciwnie – nienasycona potrzeba
                      bycia trzymanym na rękach.
                    </li>
                    <li>
                      Niechęć do chodzenia boso, dotykania różnych faktur
                      (trawa, piasek, jedzenie).
                    </li>
                    <li>
                      Przesadna reakcja na przyklejenie się ubrania, zmoczenie
                      ubranka, metki.
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Reakcje słuchowe</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Lęk lub płacz przy hałasie (np. suszarka, odkurzacz,
                      blender).
                    </li>
                    <li>Zasłanianie uszu przy codziennych dźwiękach.</li>
                    <li>
                      Brak reakcji na dźwięki lub głos opiekuna mimo
                      prawidłowego słuchu – możliwa podwrażliwość słuchowa.
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Reakcje wzrokowe</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Trudności z podążaniem wzrokiem za zabawką lub twarzą.
                    </li>
                    <li>
                      Długotrwałe wpatrywanie się w światło, ruchy wiatraka,
                      cienie – fascynacja wzrokowa.
                    </li>
                    <li>
                      Niepokój przy silnym świetle lub w miejscach o zmiennym
                      oświetleniu.
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Motoryka i ruch</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Opóźniony rozwój motoryczny (siedzenie, raczkowanie,
                      chodzenie).
                    </li>
                    <li>Niezgrabność ruchowa, częste potykanie się.</li>
                    <li>
                      Nadmierna potrzeba ruchu – kręcenie się, huśtanie,
                      skakanie.
                    </li>
                    <li>
                      Trudności z tolerowaniem pozycji na brzuszku lub przy
                      zmianach pozycji.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Jedzenie i karmienie</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Wybiórczość pokarmowa – jedzenie wyłącznie określonych
                      konsystencji, kolorów, temperatur.
                    </li>
                    <li>
                      Silny protest przy wprowadzaniu pokarmów stałych lub
                      nowych smaków.
                    </li>
                    <li>Krztuszenie się, odruch wymiotny przy karmieniu.</li>
                    <li>
                      Nienaturalna niechęć do mycia zębów, szczoteczki, smoczka.
                    </li>
                  </ul>
                </div>
              </div>

              
              <div className="rounded-xl bg-indigo-50 p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  Dzieci w wieku przedszkolnym (3–6 lat)
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold">Dotyk</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Skrajne reakcje: unikanie dotyku albo poszukiwanie silnego
                      kontaktu fizycznego (np. uderzanie się, ściskanie,
                      tarzanie).
                    </li>
                    <li>
                      Dziecko nie lubi zabaw sensorycznych – plasteliny, piasku,
                      farb, mas plastycznych.
                    </li>
                    <li>
                      Wybór tylko określonych ubrań, np. bez szwów, ciasno
                      przylegających, miękkich.
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Ruch i równowaga</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Niechęć do zabaw ruchowych – zjeżdżalni, drabinek, bujaków
                      (możliwa nadwrażliwość przedsionkowa).
                    </li>
                    <li>
                      Ekstremalne poszukiwanie ruchu – bieganie w kółko, ciągłe
                      podskakiwanie, huśtanie się do granic tolerancji.
                    </li>
                    <li>
                      Trudności z utrzymywaniem równowagi, przewracanie się bez
                      wyraźnego powodu.
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">
                    Planowanie motoryczne (praksja)
                  </h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Trudność z wykonywaniem nowych zadań ruchowych, np.
                      sekwencji kroków w zabawie.
                    </li>
                    <li>
                      Problemy z samoobsługą: ubieranie się, zapinanie guzików,
                      wiązanie butów.
                    </li>
                    <li>
                      Złość lub wycofanie w sytuacjach wymagających precyzyjnego
                      działania (np. rysowanie, lepienie).
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Zachowanie i emocje</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Trudność z wyciszeniem się po pobudzeniu (np. po
                      hałaśliwej zabawie, zmianie otoczenia).
                    </li>
                    <li>
                      Niska tolerancja frustracji – napady złości bez wyraźnej
                      przyczyny.
                    </li>
                    <li>
                      Zmienne nastroje, drażliwość w reakcji na bodźce z
                      otoczenia.
                    </li>
                    <li>Trudność z koncentracją i skupieniem uwagi.</li>
                  </ul>
                </div>
              </div>

              
              <div className="rounded-xl bg-indigo-50 p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-indigo-900">
                  Dzieci w wieku szkolnym (7 lat i więcej)
                </h3>
                <div className="mb-4">
                  <h4 className="font-semibold">Zachowania sensoryczne</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Dziecko stale żuje przedmioty (np. rękawy, ołówki), gryzie
                      paznokcie, skórki – możliwe poszukiwanie propriocepcji.
                    </li>
                    <li>
                      Stukanie, pocieranie, manipulowanie przedmiotami –
                      potrzeba stałej stymulacji.
                    </li>
                    <li>
                      Fascynacja specyficznymi bodźcami – np. światłem,
                      zapachami, fakturami.
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Trudności szkolne</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Trudności z pisaniem – zbyt duży lub zbyt mały nacisk na
                      narzędzie pisarskie.
                    </li>
                    <li>
                      Nieczytelne pismo, szybkie męczenie się podczas zadań
                      grafomotorycznych.
                    </li>
                    <li>
                      Problemy z siedzeniem spokojnie, "wiercenie się", potrzeba
                      ruchu w czasie lekcji.
                    </li>
                    <li>
                      Nadwrażliwość na hałas klasowy – zasłanianie uszu,
                      unikanie sytuacji grupowych.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Emocje i funkcjonowanie społeczne
                  </h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      Trudności w regulacji emocjonalnej – wybuchy złości, lęku,
                      nadmierna płaczliwość.
                    </li>
                    <li>
                      Unikanie określonych sytuacji (np. świetlicy, stołówki,
                      lekcji w sali gimnastycznej).
                    </li>
                    <li>
                      Szybkie przeciążenie sensoryczne w nowych lub intensywnych
                      środowiskach.
                    </li>
                    <li>
                      Dziecko sprawia wrażenie „niegrzecznego”,
                      „niezmotywowanego”, „marzyciela”, gdy w rzeczywistości
                      walczy z przebodźcowaniem.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Jak przebiega proces diagnostyczny?
              </h2>
              <ol className="ml-6 list-decimal space-y-2">
                <li>
                  <strong>Umówienie badania.</strong>
                </li>
                <li>
                  <strong>Szczegółowy wywiad</strong> z rodzicem/opiekunem
                  prawnym – obejmujący rozwój dziecka, nawyki, reakcje na
                  bodźce, sposób funkcjonowania w domu, przedszkolu/szkole.
                </li>
                <li>
                  <strong>Obserwacja kliniczna</strong> w trakcie zabaw i zadań
                  ruchowych.
                </li>
                <li>
                  <strong>Badanie testowe narzędziem SI.</strong>
                </li>
                <li>
                  <strong>Opracowanie profilu sensorycznego</strong> oraz
                  przygotowanie indywidualnego raportu z rekomendacjami.
                </li>
                <li>
                  <strong>Przekazanie dokumentacji</strong> z omówieniem wyników
                  diagnozy.
                </li>
              </ol>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Narzędzia wykorzystywane w diagnozie integracji sensorycznej
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Wywiad rozwojowy SI</strong> – szczegółowy formularz
                  diagnostyczny oparty na metodzie J. Ayres.
                </li>
                <li>
                  <strong>Obserwacja kliniczna</strong> – analiza jakości ruchu,
                  planowania motorycznego, reakcji równoważnych, napięcia
                  mięśniowego.
                </li>
                <li>
                  <strong>Testy SI</strong> – wystandaryzowane próby
                  diagnostyczne:
                  <ul className="ml-6 list-disc space-y-1 mt-1">
                    <li>
                      KATIS (certyfikowany ośrodek wykorzystujący ten system)
                    </li>
                    <li>Testy Południowo-Kalifornijskie</li>
                    <li>SCSIT</li>
                    <li>DTVP-2</li>
                    <li>Profil Sensoryczny</li>
                    <li>
                      Skale oceny funkcjonowania dziecka w środowisku
                      (kwestionariusze dla rodziców), np. Sensory Profile,
                      Sensory Processing Measure (SPM)
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4">
                Już jesienią wprowadzamy do diagnozy <strong>EASI</strong> –
                najnowszą na świecie baterię testów do diagnozy zaburzeń
                procesów integracji sensorycznej.
              </p>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Co otrzymują rodzice/opiekunowie?
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Szczegółowy raport z diagnozy SI</strong> – z
                  omówieniem funkcjonowania dziecka w poszczególnych systemach
                  sensorycznych (dotykowym, przedsionkowym, proprioceptywnym
                  itd.).
                </li>
                <li>
                  <strong>Interpretację trudności sensorycznych</strong> w
                  odniesieniu do codziennego funkcjonowania.
                </li>
                <li>
                  <strong>
                    Indywidualne zalecenia terapeutyczne i wychowawcze
                  </strong>
                </li>
                <li>
                  Propozycję form wsparcia – terapii integracji sensorycznej,
                  ćwiczeń w domu, dostosowań w środowisku
                  przedszkolnym/szkolnym.
                </li>
              </ul>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Gdzie prowadzimy diagnozy?
              </h2>
              <ul className="ml-6 list-disc space-y-1">
                {/* <li>
                  Rybnik centrum, kampus, ul. Rudzka 13c, budynek B, III piętro,
                  gabinet 3.3
                </li> */}
                <li>
                  Rybnik – Golejów, Poradnia Psychologiczno–Pedagogiczna
                  MAGNOLIA, ul. Magnolii 25
                </li>
                
              </ul>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Czym są zaburzenia integracji sensorycznej?
              </h2>
              <p>
                Zaburzenia integracji sensorycznej (SI) to trudności w odbiorze,
                przetwarzaniu i organizowaniu bodźców płynących z otoczenia oraz
                z własnego ciała. Dzieci z zaburzeniami SI mogą odbierać świat
                jako chaotyczny, nadmiernie intensywny lub – przeciwnie – zbyt
                słabo stymulujący. Przekłada się to na trudności w zachowaniu,
                nauce, relacjach społecznych i samopoczuciu emocjonalnym.
              </p>
              <p className="mt-4">
                Integracja sensoryczna to proces neurologiczny, dzięki któremu
                mózg odbiera informacje z różnych zmysłów (np. wzroku, słuchu,
                dotyku, równowagi, propriocepcji), łączy je i interpretuje tak,
                by możliwa była adekwatna reakcja. Gdy proces ten jest
                zaburzony, dziecko może reagować w sposób nieadekwatny – np.
                nadmiernie impulsywnie, agresywnie, lękowo lub wycofaniem.
              </p>
            </div>

            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Najczęstsze typy zaburzeń integracji sensorycznej (SI)
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="typ-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    1. Nadwrażliwość sensoryczna
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      (Modulacja o obniżonym progu pobudzenia) Dziecko z
                      nadwrażliwością sensoryczną reaguje na bodźce, które dla
                      innych są neutralne, w sposób przesadny – z lękiem,
                      dyskomfortem, niechęcią lub złością. Jego układ nerwowy
                      interpretuje nawet słabe bodźce jako intensywne i
                      zagrażające.
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        Zatykanie uszu przy codziennych dźwiękach (np.
                        odkurzacz, suszarka, dzwonek w szkole).
                      </li>
                      <li>
                        Unikanie dotyku – nie chce być przytulane, nie toleruje
                        głaskania, drażnią je metki, szorstkie tkaniny.
                      </li>
                      <li>
                        Ostry protest przy myciu głowy, obcinaniu paznokci,
                        noszeniu niektórych ubrań.
                      </li>
                      <li>
                        Lękliwość w nowych miejscach lub przy nagłych zmianach
                        bodźców z otoczenia (np. zmiana światła).
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Skutki w funkcjonowaniu:</strong> wycofanie z
                      aktywności ruchowej, trudności z koncentracją i regulacją
                      emocji, problemy z adaptacją do grupy.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="typ-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    2. Podwrażliwość sensoryczna
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      (Modulacja z podwyższonym progiem pobudzenia) Dziecko z
                      podwrażliwością sensoryczną ma trudności z rejestrowaniem
                      bodźców – potrzebuje silniejszych, dłuższych lub bardziej
                      intensywnych stymulacji, by zauważyć i adekwatnie
                      zareagować.
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        Brak reakcji na imię, polecenia, dźwięki otoczenia mimo
                        prawidłowego słuchu.
                      </li>
                      <li>
                        Opóźniona reakcja na ból, upadek, zimno, gorąco – może
                        nie płakać mimo skaleczenia.
                      </li>
                      <li>
                        Częste dotykanie przedmiotów, pocieranie rąk o
                        powierzchnie, ocieranie się o ludzi lub ściany.
                      </li>
                      <li>
                        Potrzeba mocnego uścisku – przytulanie się „z całej
                        siły”.
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Skutki w funkcjonowaniu:</strong> trudności w
                      uczeniu się przez brak adekwatnego odbioru informacji,
                      problemy w kontaktach społecznych, wysokie ryzyko
                      niebezpiecznych zachowań.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="typ-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    3. Poszukiwanie sensoryczne
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      (Modulacja z potrzebą dodatkowej stymulacji) Dziecko stale
                      poszukuje intensywnych doznań sensorycznych – jego układ
                      nerwowy wymaga nadmiernej stymulacji, by utrzymać
                      optymalny poziom pobudzenia.
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        Ciągłe skakanie, kręcenie się, turlanie, wspinanie się –
                        nawet w nieadekwatnych sytuacjach.
                      </li>
                      <li>
                        Żucie, gryzienie ubrań, ołówków, przedmiotów – silna
                        potrzeba propriocepcji.
                      </li>
                      <li>
                        Wzmożone wąchanie, lizanie, dotykanie różnych
                        powierzchni i przedmiotów.
                      </li>
                      <li>
                        Fascynacja światłem, błyskami, wzorami – np. wpatrywanie
                        się w lampy, ekrany.
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Skutki w funkcjonowaniu:</strong> niepokój w
                      sytuacjach wymagających spokoju, trudność z
                      przestrzeganiem zasad społecznych, brak kontroli nad siłą.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="typ-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    4. Trudności z modulacją sensoryczną
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      (Niestabilność reakcji na bodźce) Zaburzenia modulacji
                      objawiają się niestabilnością reakcji – dziecko raz
                      reaguje zbyt intensywnie, a innym razem zbyt słabo.
                      Brakuje mu stałości w przetwarzaniu bodźców.
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        Skrajnie różne reakcje w tych samych sytuacjach – np.
                        raz panika przy hałasie, innym razem obojętność.
                      </li>
                      <li>
                        Naprzemienne poszukiwanie i unikanie stymulacji – np.
                        dziecko lubi się huśtać, ale boi się schodzenia z
                        drabinek.
                      </li>
                      <li>
                        Nagłe wybuchy emocji – trudne do przewidzenia i
                        wyregulowania.
                      </li>
                      <li>
                        Trudności z dostosowaniem się do zmieniających się
                        warunków otoczenia.
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Skutki w funkcjonowaniu:</strong> niska
                      przewidywalność zachowań, silne przeciążenia sensoryczne i
                      wysoki poziom stresu u dziecka i opiekunów.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="typ-5">
                  <AccordionTrigger className="text-lg font-semibold">
                    5. Zaburzenia praksji
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      (Zaburzenia planowania motorycznego) Praksja to zdolność
                      do zaplanowania i wykonania sekwencji ruchowej – zarówno
                      spontanicznej, jak i celowej. Dzieci z zaburzeniami
                      praksji wiedzą, co chcą zrobić, ale nie potrafią
                      zaplanować, zorganizować i przeprowadzić ruchu.
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        Trudności z wykonywaniem nowych lub złożonych czynności
                        (np. jazda na rowerze).
                      </li>
                      <li>
                        Problemy z ubieraniem się, wiązaniem butów, zapinaniem
                        guzików – mimo znajomości czynności.
                      </li>
                      <li>
                        Wzmożona męczliwość, frustracja przy zadaniach
                        wymagających koordynacji.
                      </li>
                      <li>
                        Unikanie zadań motorycznych – dziecko woli „nic nie
                        robić” niż próbować.
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Skutki w funkcjonowaniu:</strong> niezgrabność
                      ruchowa, trudności szkolne (pisanie, rysowanie), wycofanie
                      społeczne.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="typ-6">
                  <AccordionTrigger className="text-lg font-semibold">
                    6. Zaburzenia różnicowania sensorycznego
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      (Trudność z interpretacją bodźców) Dziecko ma trudność z
                      rozróżnianiem cech bodźców – nie potrafi dokładnie
                      określić, gdzie i jaki bodziec wystąpił, co powoduje
                      dezorientację i opóźnienia w reakcjach.
                    </p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Nie wie, skąd pochodzi dźwięk lub dotyk.</li>
                      <li>
                        Myli podobne litery, kształty, dźwięki – np. „b” z „d”,
                        „p” z „g”.
                      </li>
                      <li>
                        Problemy z oceną odległości i siły – np. uderza za
                        mocno, rzuca za daleko.
                      </li>
                      <li>
                        Trudności z rozpoznawaniem części ciała bez patrzenia
                        (słaba świadomość ciała).
                      </li>
                    </ul>
                    <p className="mt-2">
                      <strong>Skutki w funkcjonowaniu:</strong> opóźnienia w
                      nauce czytania, pisania i liczenia, problemy w zabawach
                      wymagających koordynacji, frustracja z powodu
                      „niewidzialnych” trudności.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            
            <div className="rounded-xl bg-indigo-900 p-8 text-white">
              <h2 className="mb-4 text-2xl font-bold">
                Umów badanie diagnostyczne SI
              </h2>
              <p className="mb-6">
                Masz podejrzenie, że Twoje dziecko zmaga się z zaburzeniami
                integracji sensorycznej? Skontaktuj się z nami, aby umówić
                badanie. Nasi specjaliści odpowiedzą na wszystkie pytania i
                pomogą w wyborze najlepszego terminu.
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

            
            <section className=" py-16">
              <div className="container mx-auto px-4">
                <h2 className="mb-8 text-2xl font-bold text-indigo-900">
                  Cennik usług
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">Diagnoza SI</h3>
                    <p className="text-3xl font-bold text-amber-500">500 zł</p>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      Konsultacja psychologiczna
                    </h3>
                    <p className="text-3xl font-bold text-amber-500">150 zł</p>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">Terapia SI</h3>
                    <p className="text-3xl font-bold text-amber-500">150 zł</p>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      Plan terapii – 50 ćwiczeń opisowych
                    </h3>
                    <p className="text-3xl font-bold text-amber-500">350 zł</p>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      Plan terapii – 25 ćwiczeń z nagraniami
                    </h3>
                    <p className="text-3xl font-bold text-amber-500">590 zł</p>
                  </div>

                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      Plan terapii – 50 ćwiczeń z nagraniami
                    </h3>
                    <p className="text-3xl font-bold text-amber-500">999 zł</p>
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
