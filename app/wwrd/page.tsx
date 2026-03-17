"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, ChevronRight } from "lucide-react";


import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/**
 * Strona WWRD (Wczesne Wspomaganie Rozwoju Dziecka)
 * — układ identyczny jak w podstronach innych diagnoz,
 * — responsywna siatka + Tailwind,
 * — brak zewnętrznych zapytań → czysty statyczny komponent.
 */
export default function WWRDPage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <section className="relative bg-emerald-700 py-40 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/assets/oferta-dla-dzieci/wwrd.jpg"
            alt="Tło — WWRD"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do strony głównej
          </Link>

          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Wczesne Wspomaganie Rozwoju Dziecka
              </h1>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-12 leading-relaxed text-gray-700">
            
            <div>
              <h2 className="mb-4 text-2xl font-bold text-emerald-700">
                Na czym polega WWRD?
              </h2>
              <p>
                Ideą zajęć Wczesnego Wspomagania Rozwoju Dziecka jest wspieranie
                dzieci w pokonywaniu różnorodnych trudności i zaburzeń
                rozwojowych o podłożu logopedycznym, neurologopedycznym,
                fizjologicznym, ruchowym, sensorycznym, emocjonalnym,
                społecznym, czy poznawczym. Kluczową sprawą jest wczesna
                diagnoza i uzyskanie opinii o potrzebie WWRD, a następnie jak
                najwcześniejsze rozpoczęcie terapii.
              </p>
              <p className="mt-4">
                W Poradni Psychologiczno-Pedagogicznej MAGNOLIA rozumiemy, że
                dobro dziecka nie może czekać, dlatego rozpoczęcie zajęć w
                ramach WWRD jest możliwe bezzwłocznie, bez oczekiwania w
                kolejkach. Z nami każde dziecko rozwinie skrzydła i osiągnie
                pełnię swojego potencjału.
              </p>
            </div>

            
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                
                <AccordionItem value="logopeda">
                  <AccordionTrigger className="font-medium">
                    Czym zajmuje się Logopeda na zajęciach WWRD?
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p>
                      Logopeda na zajęciach Wczesnego Wspomagania Rozwoju
                      Dziecka (WWRD) diagnozuje i terapeutycznie wspiera dzieci
                      z opóźnieniami w rozwoju mowy. Logopeda uczy prawidłowej
                      artykulacji dźwięków i wszechstronnie wspiera rozwój
                      umiejętności komunikacyjnych, zarówno werbalnych jak i
                      niewerbalnych (tj. gesty, mimika, postawa ciała).
                    </p>
                    <p>
                      Zajęcia z logopedą nastawione są na wzbogacanie słownictwa
                      dziecka i trenowanie umiejętność formułowania wypowiedzi.
                      Rolą logopedy pozostaje także ćwiczenie analizy i syntezy
                      słuchowej, będącej podstawą nauki czytania i pisania.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="neurologopeda">
                  <AccordionTrigger className="font-medium">
                    Czym zajmuje się Neurologopeda na zajęciach WWRD?
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p>
                      Neurologopeda na zajęciach Wczesnego Wspomagania Rozwoju
                      Dziecka diagnozuje i terapeutycznie wspiera dzieci z
                      opóźnieniami w rozwoju mowy. Pracuje przede wszystkim z
                      dziećmi wykazującymi zaburzenia mowy spowodowane
                      występowaniem chorób neurologicznych, wad genetycznych lub
                      uszkodzeń mózgu.
                    </p>
                    <p>
                      Jego działania ukierunkowane są na stymulację pracy mózgu
                      i układu nerwowego w kontekście rozwoju mowy.
                      Neurologopeda zajmuje się również terapią funkcji
                      pokarmowych i oddechowych.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="fizjoterapeuta">
                  <AccordionTrigger className="font-medium">
                    Czym zajmuje się Fizjoterapeuta na zajęciach WWRD?
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p>
                      Fizjoterapeuta na zajęciach Wczesnego Wspomagania Rozwoju
                      koncentruje się na wspieraniu prawidłowego rozwoju
                      ruchowego dziecka w zakresie motoryki dużej. Trenuje z
                      dzieckiem równowagę, koordynację ruchową i siłę mięśniową.
                    </p>
                    <p>
                      Fizjoterapeuta dba także o rozwój motoryki małej, czyli
                      precyzyjnych ruchów ręki, pozwalających na chwytanie i
                      manipulowanie przedmiotami. Terapeuta rehabilitant zajmuje
                      się korygowaniem wad postawy dziecka, poprzez prowadzenie
                      ćwiczeń korekcyjnych.
                    </p>
                    <p>
                      Jeśli dziecko zmaga się z zaburzeniami neurologicznymi,
                      fizjoterapeuta wykorzystuje specjalistyczne metody
                      ćwiczeń, takie jak terapia metodą NDT-Bobath czy terapię
                      metodą Vojty, w celu poprawy funkcji motorycznych.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="integracja">
                  <AccordionTrigger className="font-medium">
                    Jaki jest cel Integracji Sensorycznej w ramach WWRD?
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p>
                      Zajęcia integracji sensorycznej mają na celu poprawę
                      przetwarzania bodźców sensorycznych (dotykowych,
                      wzrokowych, słuchowych, proprioceptywnych i
                      przedsionkowych) w mózgu, co przekłada się na bardziej
                      harmonijny rozwój motoryczny, emocjonalny i społeczny
                      dziecka.
                    </p>
                    <p>
                      Dzięki pracy z terapeutą SI dziecko uczy się adekwatnie
                      reagować na bodźce (np. przestaje unikać dotyku, hałasu),
                      zyskuje lepszą koordynację ruchową i równowagę ciała,
                      poprawia się jego zdolność do koncentracji uwagi, zyskuje
                      zdolność planowania motorycznego i kontrolowania odruchów.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                
                <AccordionItem value="terapia-reki">
                  <AccordionTrigger className="font-medium">
                    Jaki jest cel Terapii ręki w ramach WWRD?
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p>
                      Terapia ręki ma na celu poprawę sprawności manualnej
                      dziecka, uczy precyzyjnych ruchów dłoni i palców oraz
                      koordynacji wzrokowo-ruchowej. Jest skierowana do dzieci,
                      które mają trudności z czynnościami wymagającymi
                      precyzyjnych ruchów dłoni, takich jak pisanie, rysowanie,
                      zapinanie guzików, wycinanie czy manipulowanie drobnymi
                      przedmiotami.
                    </p>
                    <p>
                      Terapia ręki skupia się na wzmacnianiu mięśni dłoni i
                      palców, usprawnianieniu chwytu i siły rąk, usprawnienie
                      zdolności do precyzyjnych ruchów w oparciu o kontrolę
                      wzroku, usprawnienie ruchów naprzemiennych i współpracy
                      rąk podczas zadań wymagających ich koordynacji.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            
            <div>
              <h2 className="mb-2 text-2xl font-bold text-emerald-700">
                Dla kogo są zajęcia WWRD?
              </h2>
              <ul className=" list-none space-y-2">
                <li className=" flex gap-1">
                  <ChevronRight className=" w-4 text-emerald-700" />
                  Dzieci od 0 do 7 lat z opóźnieniami w rozwoju.
                </li>
                <li className=" flex gap-1">
                  <ChevronRight className=" w-4 text-emerald-700" />
                  Dzieci z zaburzeniami mowy i komunikacji.
                </li>
                <li className=" flex gap-1">
                  <ChevronRight className=" w-4 text-emerald-700" />
                  Dzieci z trudnościami ruchowymi i motorycznymi.
                </li>
                <li className=" flex gap-1">
                  <ChevronRight className=" w-4 text-emerald-700" />
                  Dzieci z zaburzeniami integracji sensorycznej.
                </li>
                <li className=" flex gap-1">
                  <ChevronRight className=" w-4 text-emerald-700" />
                  Dzieci z trudnościami emocjonalno-społecznymi.
                </li>
                <li className=" flex gap-1">
                  <ChevronRight className=" w-4 text-emerald-700" />
                  Dzieci z niepełnosprawnościami i chorobami genetycznymi.
                </li>
              </ul>
            </div>

            
            <div id="jak-uzyskac-darmowe-zajecia-wwrd">
              <h2 className="mb-4 text-2xl font-bold text-emerald-700">
                Jak uzyskać darmowe zajęcia WWRD?
              </h2>
              <p className="mb-6">
                W celu skorzystania z bezpłatnej Terapii Wczesnego Wspomagania
                Rozwoju Dziecka (WWRD) w Poradni Psychologiczno-Pedagogicznej
                MAGNOLIA, należy postępować zgodnie z poniższymi krokami:
              </p>

              <div className="space-y-6">
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                    1. Wizyta u lekarza:
                  </h3>
                  <p className="mb-3">
                    Pierwszym krokiem jest wizyta u lekarza pediatry lub lekarza
                    specjalisty.{" "}
                    <span className="font-semibold text-emerald-700">
                      Lekarz musi wydać zaświadczenie lekarskie
                    </span>
                    , które potwierdza opóźnienie, zaburzenie lub
                    niepełnosprawność u dziecka.
                  </p>

                  <h4 className="font-semibold text-emerald-700 mt-4 mb-2">
                    Ważne jest, aby lekarz dokładnie określił rodzaj zaburzenia
                    lub niepełnosprawności oraz stwierdził potrzebę wczesnego
                    wspomagania rozwoju z uwagi na konkretne przyczyny, takie
                    jak:
                  </h4>
                  <ul className="list-disc ml-6 space-y-1 text-sm">
                    <li>
                      opóźniony lub zaburzony rozwój psychoruchowy (częsty i
                      skuteczny argument!!)
                    </li>
                    <li>niepełnosprawność ruchowa w tym z afazją,</li>
                    <li>niepełnosprawność intelektualną,</li>
                    <li>
                      niepełnosprawność sprzęgającą (kilka niepełnosprawności
                      równocześnie)
                    </li>
                    <li>autyzm i Zespół Aspergera,</li>
                    <li>zaburzenia wzroku, słuchu, mowy.</li>
                  </ul>
                </div>

                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                    2. Wizyta w poradni publicznej
                  </h3>
                  <p>
                    Następnie udaj się do publicznej Poradni
                    Psychologiczno-Pedagogicznej, która obsługuje Twój rejon,{" "}
                    <span className="text-emerald-600">
                      (rejonizacja – sprawdź pod opieką, której poradni
                      Publicznej znajduje się przedszkole Twojego dziecka)
                    </span>
                  </p>
                </div>

                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                    3. Zgłoś się z dzieckiem na diagnozę i wypełnij wniosek o
                    wydanie opinii o potrzebie wczesnego wspomagania rozwoju.
                  </h3>
                  <p>
                    Do wniosku dołącz dokumenty, takie jak zaświadczenie
                    lekarskie, wcześniejsze opinie psychologiczne lub
                    pedagogiczne oraz dokumenty medyczne. Poradnia ma obowiązek
                    wydać opinię w ciągu 30 dni od złożenia wniosku.
                  </p>
                </div>

                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                    4. Odbierz opinię:
                  </h3>
                  <p>
                    Po otrzymaniu opinii o potrzebie wczesnego wspomagania
                    rozwoju z publicznej Poradni Psychologiczno-Pedagogicznej,
                    przyjdź z nią do poradni Psychologiczno-Pedagogicznej
                    MAGNOLIA.
                  </p>
                </div>
              </div>

              
              <div className="mt-8 bg-emerald-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-700 mb-4">
                  Poradnia Psychologiczno-Pedagogiczna MAGNOLIA:
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Kontakt Telefoniczny:</p>
                    <p>+48 690 515 224</p>
                    <p>+48 503 192 950</p>
                    <p className="font-semibold mt-3">e-mail:</p>
                    <p>poradniamagnolia@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">Godziny otwarcia:</p>
                    <p>Poniedziałek - Piątek 7:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
