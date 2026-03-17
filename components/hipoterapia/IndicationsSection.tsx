import { useAccessibility } from "@/lib/providers/accessibility-context";
import {
  getFontSizeClass,
  getHeaderFontSizeClass,
} from "@/lib/font-size-utils";

import React from "react";

import { GiCheckMark } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const IndicationsSection = () => {
  const { fontSizeLevel } = useAccessibility();
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <section className="py-6 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="items-center flex-col md:flex-row">
          <div className="flex-col justify-center items-center">
            <h2
              className={`font-display mb-8 font-semibold text-left ${headerFontSizeClass} text-green-900`}
            >
              Wskazania do hipoterapii
            </h2>
            <h4
              className={`font-display mb-6 font-semibold text-left ${fontSizeClass}`}
            >
              Dzieci
            </h4>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Zespoły neurologiczne</AccordionTrigger>
                <AccordionContent>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Mózgowe porażenie dziecięce: kontrola głowy i czynna pozycja
                    siedząca.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Stany po urazach czaszkowo-mózgowych.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Minimalne uszkodzenia mózgu (ADHD).
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Choroby mięśni min. 3 w skali Lovetta.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Dzieci niedowidzące i niewidome.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Choroby psychiczne.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Zespoły ortopedyczne</AccordionTrigger>
                <AccordionContent>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Wady postawy.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Skoliozy I stopnia wg Coba.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Stany po amputacji i wady rozwojowe kończyn.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Inne</AccordionTrigger>
                <AccordionContent>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Zespoły genetyczne, np. Zespół Down`a (z obowiązkowym
                    zdjęciem rtg – bocznym i czynnościowym odcinka szyjnego
                    kręgosłupa).
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Przepukliny oponowo-rdzeniowe, w zależności od wysokości
                    uszkodzenia, obrazu klinicznego, współwystępowania
                    wodogłowia.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Zespoły psychologiczne: zaburzenia emocjonalne, upośledzenia
                    umysłowe, niedostosowanie społeczne.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h4
                    className={`font-display mb-6 font-semibold text-left ${fontSizeClass}`}
                  >
                    Dorośli
                  </h4>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Stwardnienie rozsiane.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Stany po udarze.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Stany po urazach czaszkowo-mózgowych.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Uzależnienia.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <GiCheckMark className="text-2xl font-semibold text-green-500" />
                    Patologie społeczne.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h4
                    className={`font-display mb-6 text-left text-red-700 font-semibold ${fontSizeClass}`}
                  >
                    Przeciwwskazania do hipoterapii
                  </h4>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    uczulenie na sierść, pot lub zapach konia,
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    niewygojone rany,
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    nietolerancja formy leczenia przez pacjenta, np.
                    niepohamowany lęk,
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    schorzenia okulistyczne – wymagana konsultacja,
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    pogorszenie stanu w zespołach neurologicznych, stanach po
                    urazach czaszkowo-mózgowych, ADHD, chorobach mięśni,
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    brak kontroli głowy w rozwoju motorycznym,
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    podwyższona temperatura,
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    ostre choroby infekcyjne.
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    padaczka,
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    upośledzenia umysłowe w stopniu głębokim,
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    zaburzenia mineralizacji kości (osteoporoza),
                  </p>
                  <p className="flex items-center gap-3 text-left mb-6">
                    <IoMdClose className="text-2xl font-semibold text-red-500" />
                    utrwalone deformacje i zniekształcenia, przykurcze,
                    ograniczenia zakresu ruchu kostno-stawowego, np. zwichnięcia
                    w stawach biodrowych.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndicationsSection;
