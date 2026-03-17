import React from "react";
import {
  getFontSizeClass,
  getHeaderFontSizeClass,
} from "@/lib/font-size-utils";
import { useAccessibility } from "@/lib/providers/accessibility-context";

const IntroSection = () => {
  const { fontSizeLevel, highContrast } = useAccessibility();
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8">
          <div className="relative mb-4 md:mb-0 flex justify-center items-center">
            <div className="relative w-[670px] h-[670px] overflow-hidden hidden md:flex justify-center items-center rounded-3xl">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/hipoterapia/hipoterapia1.mp4"
                title="Hipoterapia Video"
                loop
                muted
                autoPlay
                controls={false}
              ></video>
            </div>
          </div>
          <div className="mx-6 md:mr-16 ml-14 flex-col justify-center items-center">
            <h2
              className={`font-display mb-6 font-semibold text-left ${headerFontSizeClass}`}
            >
              Hipoterapia
            </h2>
            <p
              className={`${
                highContrast ? "text-yellow-400" : "text-gray-700"
              } ${fontSizeClass} text-left mb-6`}
            >
              Hipoterapia, nazywana również terapią wspomaganą udziałem koni,
              jest formą terapii wykorzystującą interakcję z tymi pięknymi i
              łagodnymi zwierzętami do celów rehabilitacyjnych oraz rozwojowych.
              Hipoterapia jest nieoceniona przy leczeniu osób z dysfunkcjami
              fizycznymi, emocjonalnymi oraz rozwojowymi. W świecie koni możesz
              przełamać lęki i pokonać własne słabości. Dzięki przebywaniu w
              towarzystwie tych majestatycznych zwierząt, obcowaniu z nimi,
              dotykaniu, a także poruszaniu się na ich grzbiecie poczujesz moc
              do zmian swojego życia na lepsze.
            </p>
            <p
              className={`${
                highContrast ? "text-yellow-400" : "text-gray-700"
              } ${fontSizeClass} text-left mb-6`}
            >
              Hipoterapia opiera się na wykorzystaniu ruchu zwierzęcia jako
              "narzędzia" terapeutycznego. Koń poprzez swój rytmiczny i
              powtarzalny ruch imituje ludzki chód aktywizując organizm jeźdźca
              do pracy, pobudzone zostają również receptory czucia głębokiego w
              ciele człowieka poddanego terapii. Postawa siedząca jeźdźca
              przyjmowana podczas jazdy wymaga dobrej stabilizacji tułowia oraz
              utrzymania równowagi dynamicznej, co angażuje do wytężonej pracy
              wiele różnych grup mięśniowych. Terapia odbywa się pod nadzorem
              wykwalifikowanego terapeuty hipoterapii, który dostosowuje zajęcia
              do indywidualnych potrzeb pacjenta, nadzorując zarówno
              bezpieczeństwo, jak i skuteczność terapii.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
