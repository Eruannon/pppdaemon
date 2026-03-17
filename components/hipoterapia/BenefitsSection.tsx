import React from "react";
import {
  getFontSizeClass,
  getHeaderFontSizeClass,
} from "@/lib/font-size-utils";
import { GiCheckMark } from "react-icons/gi";
import { useAccessibility } from "@/lib/providers/accessibility-context";

const BenefitsSection = () => {
  const { fontSizeLevel, highContrast } = useAccessibility();
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
          <div className="flex flex-col justify-center items-start mx-6">
            <h2
              className={`font-display mb-6 font-semibold text-left ${headerFontSizeClass}`}
            >
              Potężne zwierzę może być „stanowiskiem" terapeutycznym
            </h2>
            <p className={`flex items-center gap-3 text-left mb-6`}>
              <GiCheckMark className="text-xl font-semibold text-green-500" />
              Koń może zastępować materac (szeroki zad)
            </p>
            <p className={`flex items-center gap-3 text-left mb-6`}>
              <GiCheckMark className="text-xl font-semibold text-green-500" />
              Terapeutyczną piłkę, lub wałek (kłoda)
            </p>
            <p className={`flex items-center gap-3 text-left mb-6`}>
              <GiCheckMark className="text-xl font-semibold text-green-500" />
              Klin (szyja)
            </p>
            <p className={`flex items-center gap-3 text-left mb-6`}>
              <GiCheckMark className="text-xl font-semibold text-green-500" />
              Drabinkę do podciągania (grzywa)
            </p>
            <p
              className={`${
                highContrast ? "text-yellow-400" : "text-gray-700"
              } ${fontSizeClass} text-left mb-6`}
            >
              Idąc stępem wprowadza pacjenta leżącego na nim na brzuchu – w
              ruchy zbliżone do pełzania. Pacjenta opartego na łokciach i
              kolanach – w ruchy zbliżone do czworakowania, pacjenta siedzącego
              – w ruchy zbliżone do chodzenia. Nie ma innego "przyrządu", który
              byłby tak uniwersalny. Siedząc na koniu łatwiej opanować pojęcia
              przestrzenne, schemat własnego ciała, nauczyć się liczyć do
              czterech (patrz nogi konia), wymawiać trudne głoski oraz wyrazy.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-3xl h-0 pb-[56.25%] md:pb-[75%] overflow-hidden rounded-2xl">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/hipoterapia/hipoterapiaFilm2.mp4"
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
  );
};

export default BenefitsSection;
