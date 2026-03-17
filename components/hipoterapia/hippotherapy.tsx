"use client";

import React from "react";
import IntroSection from "./IntroSection";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import BenefitsSection from "./BenefitsSection";
import EffectsSection from "./EffectsSection";
import IndicationsSection from "./IndicationsSection";
import PricingSection from "./PricingSection";
import TherapyProcessSection from "./TherapyProcessSection";
import WhyHorsesSection from "./WhyHorsesSection";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

const Hippotherapy = () => {
  const { highContrast } = useAccessibility();

  return (
    <div
      className={`font-sans overflow-x-hidden ${
        highContrast ? "bg-black text-yellow-400" : "bg-white"
      }`}
    >
      <IntroSection />
      <BenefitsSection />
      <TherapyProcessSection />
      <IndicationsSection />
      <WhyHorsesSection />
      <EffectsSection />
      <PricingSection />
      <div className="min-h-screen bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <main>
            
            <section className="mb-24">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div>
                  <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
                    Hipoterapia we współpracy z Nibylandią
                  </h2>
                  <p className="text-lg">
                    A co byłoby, gdybyś mógł przenieść się ze swoim dzieckiem
                    choć na chwilę do cudownej krainy Nibyladnii? Do miejsca
                    pełnego zieleni, wypełnionego ciepłem, miękkością,
                    łagodnością i kołysaniem? To nie takie trudne… to tylko
                    świat widziany z perspektywy końskiego grzbietu.
                  </p>
                  <p className="text-lg mt-4">
                    Nie tak daleko stąd znajduje się zupełnie nowa kraina -
                    Ośrodek Jeździecki Nibylandia Szczerbice. To właśnie tam
                    zapraszamy naszych podopiecznych realizujących terapię
                    Wczesnego Wspomagania Rozwoju Dziecka na wyjątkowe
                    doświadczenie, jakim jest spotkanie z mądrością, łagodnością
                    i potęgą spokoju mieszkającą w sercu każdego konia.
                  </p>
                  <p className="text-lg mt-4">
                    Dzięki sile i opanowaniu zwierzęcych gospodarzy Nibylandii,
                    dzieci zmagające się z dolegliwościami ze strony układu
                    ruchu, trudnościami emocjonalnymi, deficytami uwagi czy
                    problemami z komunikacją z otoczeniem, robią olbrzymie kroki
                    w kierunku pokonania własnych słabości. Zarówno dzieci jak i
                    rodzice zdobywają w Nibyladnii motywację do dalszych
                    wysiłków.
                  </p>
                  <Button
                    variant={"outline"}
                    className="mt-4 border-blue-500 bg-blue-50"
                  >
                    <a
                      target="_blank"
                      href="/assets/Regulamin-stadniny-koni-Nibylandia.pdf"
                      className="flex items-center gap-2"
                    >
                      Regulamin Stadniny Koni Nibylandia <Download />
                    </a>
                  </Button>
                </div>
                <video
                  src="/assets/galeria-hipoterapia/hipoterapia-filmik-1.MP4"
                  width={400}
                  height={400}
                  autoPlay
                  loop
                  muted
                  className="rounded-lg shadow-md flex-1"
                />
              </div>
            </section>

            <Separator className="my-16" />

            <section className="mb-24 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto items-center">
              <div className=" col-span-1">
                <Image
                  src={"/assets/galeria-hipoterapia/hipoterapia-zdjecie-16.jpg"}
                  alt="hipoterapia"
                  width={400}
                  height={400}
                />
              </div>
              <div className=" col-span-1">
                <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
                  Jak odbywają się zajęcia?
                </h2>
                <p className="text-lg">
                  Zajęcia hipoterapii w Ośrodku Jeździeckim Nibylandia w
                  Szczerbicach odbywają się cyklicznie. Dzieci uczęszczają na
                  terapię pod okiem wykwalifikowanej kadry doskonale znającej
                  trudności , z jakimi mierzą się nasi podopieczni. W odpowiedzi
                  na potrzeby dzieci organizują serie ćwiczeń rehabilitacyjnych
                  i sesje relaksacji na końskim grzbiecie.
                </p>
              </div>
            </section>

            <Separator className="my-16" />

            <section className="mb-24">
              <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
                Hipoterapia jako zajęcia w ramach WWRD w trakcie ferii zimowych
              </h2>
              <p className="text-lg">
                W okresie ferii zimowych zapraszamy dzieci i młodzież objęte
                Wczesnym Wspomaganiem Rozwoju Dziecka (WWRD) na zajęcia
                hipoterapii. To doskonała okazja, aby w atmosferze zabawy i
                relaksu wspierać rozwój fizyczny i emocjonalny uczestników.
                Program jest dostosowany do indywidualnych potrzeb każdego
                dziecka, a zajęcia odbywają się w bezpiecznym i przyjaznym
                otoczeniu.
              </p>
            </section>

            <Separator className="my-16" />

            {/* <section className="mb-24">
            <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
              Dlaczego warto wybrać hipoterapię?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Fizyczne",
                  benefits: [
                    "Poprawa koordynacji ruchowej",
                    "Wzmocnienie mięśni",
                    "Poprawa równowagi",
                  ],
                },
                {
                  title: "Emocjonalne",
                  benefits: [
                    "Redukcja stresu",
                    "Budowanie poczucia własnej wartości",
                    "Rozwój empatii i zaufania",
                  ],
                },
                {
                  title: "Społeczne",
                  benefits: [
                    "Nauka współpracy i komunikacji",
                    "Budowanie relacji z otoczeniem",
                  ],
                },
                {
                  title: "Sensoryczne",
                  benefits: [
                    "Stymulacja zmysłów",
                    "Poprawa integracji sensorycznej",
                  ],
                },
              ].map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-700 tracking-tighter">
                    {category.title}
                  </h3>
                  <ul className="list-disc list-inside">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section> */}

            

            {/* <section>
              <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
                Jakie korzyści daje hipoterapia?
              </h2>
              <p className="text-lg">
                Hipoterapia wspomaga rozwój fizyczny, emocjonalny i społeczny,
                poprawiając równowagę, koordynację, napięcie mięśniowe oraz
                pewność siebie. Kontakt z końmi sprzyja relaksacji, buduje więź
                i pozytywnie wpływa na samopoczucie. <br />
                <br /> Ale to nie wszystko, więcej informacji znajdziesz tutaj{" "}
                <a className=" text-blue-600" href="/hipoterapia">
                  Hipoterapia
                </a>
              </p>
            </section> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hippotherapy;
