import React from "react";
import {
  getFontSizeClass,
  getHeaderFontSizeClass,
} from "@/lib/font-size-utils";
import { GiCheckMark } from "react-icons/gi";
import { useAccessibility } from "@/lib/providers/accessibility-context";

const TherapyProcessSection = () => {
  const { fontSizeLevel, highContrast } = useAccessibility();
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/hipoterapia/hipoterapia4.mp4"
                title="Hipoterapia Video"
                loop
                muted
                autoPlay
                controls={false}
              ></video>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start mx-6 md:ml-16">
            <h2
              className={`font-display mb-6 font-semibold text-left ${headerFontSizeClass}`}
            >
              Koń zmniejsza spastyczność mięśni
            </h2>
            <p
              className={`${
                highContrast ? "text-yellow-400" : "text-gray-700"
              } ${fontSizeClass} text-left mb-6`}
            >
              Uszkodzenie ośrodkowego układu nerwowego może spowodować wzmożone
              napięcie mięśni (spastyczność), szczególnie kończyn górnych i
              dolnych. Podstawowym warunkiem usprawniania jest obniżenie
              spastyczności. Podczas hipoterapii dzieje się to automatycznie i
              jest możliwe dzięki:
            </p>
            <p className={`flex items-center gap-3 text-left mb-6`}>
              <GiCheckMark className="text-3xl font-semibold text-green-500" />
              rozgrzaniu mięśni (temperatura ciała konia jest wyższa od
              temperatury ciała ludzkiego),
            </p>
            <p className={`flex items-center gap-3 text-left mb-6`}>
              <GiCheckMark className="text-2xl font-semibold text-green-500" />
              rytmicznemu kołysaniu w stępie,
            </p>
            <p className={`flex items-center gap-3 text-left mb-6`}>
              <GiCheckMark className="text-3xl font-semibold text-green-500" />
              przeciwstawnym skrętom biodra-barki (dysocjacji) spowodowanym
              ruchem konia,
            </p>
            <p className={`flex items-center gap-3 text-left mb-6`}>
              <GiCheckMark className="text-3xl font-semibold text-green-500" />
              ułożeniu kończyn dolnych w trójzgięciu i odwiedzeniu podczas
              dosiadania konia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapyProcessSection;
