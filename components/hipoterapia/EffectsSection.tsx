import React from "react";
import {
  getFontSizeClass,
  getHeaderFontSizeClass,
} from "@/lib/font-size-utils";
import Image from "next/image";
import { useAccessibility } from "@/lib/providers/accessibility-context";

const EffectsSection = () => {
  const { fontSizeLevel, highContrast } = useAccessibility();
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <>
      <section className="py-6 md:py-12">
        <div className="mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-r-2xl">
                <Image
                  src="/assets/hipoterapia/hipoterapia.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                  priority={true}
                  alt="child in hipoterapia"
                />
              </div>
            </div>
            <div className="mx-6 md:mr-16 flex-col justify-center items-center">
              <h2
                className={`font-display mb-6 font-semibold text-left ${headerFontSizeClass}`}
              >
                Koń pobudza zmysły
              </h2>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Dotyk końskiej sierści, łaskotanie grzywy, rozmaitość kształtów,
                odgłos kroków, przyjazne parskanie i mile kojarzony zapach
                stymulują zmysły dotyku, słuchu, wzroku i węchu. Towarzyszy temu
                ciągłe wytrącanie z równowagi i konieczność jej natychmiastowego
                odnajdywania, jeżeli nie chcemy zbyt prędko rozstać się z tym
                bogactwem wrażeń.
              </p>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Czucie głębokie (proprioceptywne) jest stymulowane przez
                nieustające przeciwstawne bodźce dopływające z mięśni, ścięgien
                i stawów całego ciała. Wszystko to niezwykle rozwija zaburzoną
                zdolność równoczesnego odbierania bodźców i ich kojarzenia.
                Dzięki temu kształtuje się poczucie własnego ciała i orientacji
                przestrzennej.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-12">
        <div className="mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
            <div className="mx-6 md:ml-16 flex-col justify-center items-center">
              <h2
                className={`font-display mb-6 font-semibold text-left ${headerFontSizeClass}`}
              >
                Zamiast materaca czy piłki
              </h2>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Koń może zastąpić materac (szeroki zad), piłkę, wałek, drabinę
                do podciągania (grzywa). Dla dziecka ciekawsze jest schylanie
                się do ucha konia, klepanie go po łopatce czy kładzenie się na
                plecach na końskim zadzie niż ćwiczenia w sali. Dla niego to
                zabawa, dla rehabilitanta ćwiczenia fizykoterapeutyczne.
              </p>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Kontakt z koniem, ze zwierzęciem pięknym, dużym, imponującym,
                tajemniczym, a jednocześnie przyjaznym i chętnie współpracującym
                pozwala na poprawę poczucia własnej wartości kształtowanie
                poczucia sprawstwa (bycia sprawcą działań) oraz osiąganie coraz
                większej samodzielności przełamywanie lęku i oporów przed
                kontaktem z otoczeniem społecznym, zwiększenie motywacji do
                nawiązywania bliższego kontaktu i poprawy komunikacji ze
                światem, poprawa zachowań społecznych kształtowanie wrażliwości,
                odpowiedzialności, opiekuńczości i innych pożądanych zachowań
                społecznych.
              </p>
            </div>
            <div className="relative mb-4 md:mb-0">
              <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-2xl">
                <video
                  className="w-full h-full object-cover"
                  src="/assets/hipoterapia/hipoterapia6.mp4"
                  title="Hipoterapia Video"
                  loop
                  muted
                  autoPlay
                  controls={false}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EffectsSection;
