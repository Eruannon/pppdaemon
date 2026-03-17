import { useAccessibility } from "@/lib/providers/accessibility-context";
import {
  getFontSizeClass,
  getHeaderFontSizeClass,
} from "@/lib/font-size-utils";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const WhyHorsesSection = () => {
  const { fontSizeLevel, highContrast } = useAccessibility();
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  const cardData = [
    {
      title: "Dają wrażenie chodu ludzkiego",
      content:
        "Trójwymiarowy ruch grzbietu końskiego w stępie przekazywany miednicy jeźdźca jest identyczny z ruchami miednicy prawidłowo kroczącego człowieka. W tym samym czasie barki oraz luźno zwisające kończyny dolne również zachowują się tak, jak u idącego człowieka. Daje to możliwość nauki chodzenia 'bez chodzenia'. Hipoterapia może stanowić pierwszy etap tej nauki, bądź stać się jej przełomowym momentem.",
      color: "yellow",
    },
    {
      title: "Hamują rozwój wad postawy",
      content:
        "Nieprawidłowe, mimowolne odruchy towarzyszące niektórym postaciom mózgowego porażenia dziecięcego utrudniają usprawnianie. Hipoterapia stwarza możliwość stopniowego eliminowania tych automatyzmów dzięki łagodnym, kołyszącym ruchom w stępie, dysocjacji biodra – barki oraz trójzgięciu i odwiedzeniu kończyn dolnych.",
      color: "lime",
    },
    {
      title: "Przywracają zaburzone w symetrii mięśnie tułowia",
      content:
        "Łagodne, rytmiczne, równomierne kołysanie w stępie, na przemian napina i rozluźnia mięśnie posturalne prawej i lewej strony ciała. Mięśnie napięte i przykurczone ulegają stopniowemu rozluźnieniu i rozciągnięciu. Mięśnie słabszej wiotkiej strony ulegają wzmocnieniu.",
      color: "yellow",
    },
    {
      title: "Korygują postawę ciała",
      content:
        "Konieczność utrzymania prawidłowego dosiadu zmusza do aktywnego prostowania się. Wzmocnieniu ulegają mięśnie grzbietu, brzucha i obręczy biodrowej. Prowadzi to do zmniejszenia przodopochylenia miednicy. Dzięki wzmocnieniu mięśni kształtuje się nowa, prawidłowa postawa ciała.",
      color: "lime",
    },
    {
      title: "Zapobiegają przykurczom i ograniczeniom ruchomości w stawach",
      content:
        "Wspomniany łańcuch ruchów 'grzbiet konia – miednica – kręgosłup – barki, kończyny jeźdźca' uruchamia rytmicznie i łagodnie kolejno wszystkie mięśnie i stawy. Hipoterapia i jazda konna zmniejsza przede wszystkim przykurcze przywodzicieli ud i ograniczenia ruchomości obręczy biodrowej.",
      color: "yellow",
    },
    {
      title: "Zwiększają możliwości lokomocyjne",
      content:
        "Osoby niepełnosprawne cierpią na ogół z powodu ograniczonych możliwości ruchowych. Siedząc na koniu, popędzając go pracą bioder, kręgosłupa – odbierają wrażenie prawidłowego chodu i mogą go ćwiczyć. Koń oddaje do dyspozycji osoby niepełnosprawnej swoje cztery, zdrowe nogi stwarzając tym samym nieograniczone możliwości lokomocyjne.",
      color: "lime",
    },
    {
      title: "Łagodnie usprawniają ruchy człowieka",
      content:
        "Jest to możliwe dzięki jego specyficznej budowie i łagodnemu oddziaływaniu ruchu konia w stępie. W hipoterapii istnieje cały szereg odpowiednich ułożeń, podporów i technik asekuracji, regulujących stopień uruchamiania, wysiłku i bodźcowania organizmu. Dzięki temu hipoterapię można zaoferować nawet pacjentom ze znacznymi deficytami fizycznymi i psychicznymi.",
      color: "yellow",
    },
    {
      title: "Są źródłem bodźców równoważnych",
      content:
        "Hipoterapia daje nieograniczone możliwości stopniowania i różnicowania bodźców równoważnych. Dzięki przyspieszeniom poziomym i pionowym: kołysaniu, zmianom kierunku jazdy, zatrzymaniu się, ruszaniu, przyspieszaniu i zwalnianiu tempa jazdy, zastosowaniu specjalnych ułożeń, odpowiednich ćwiczeń i zabaw – ruch konia staje się potężnym generatorem bodźców równoważnych.",
      color: "lime",
    },
    {
      title: "Uaktywniają",
      content:
        "Rytmiczne pobudzające ruchy towarzyszące jeździe konnej wzmagają wydzielanie hormonów, (szczególnie adrenaliny) stymulujących układ wegetatywny. Następuje wyraźny wzrost aktywności ruchowej, koncentracji uwagi i dobrego samopoczucia. Ma to szczególne znaczenie w terapii osób niepełnosprawnych.",
      color: "yellow",
    },
    {
      title: "Usprawniają pracę organów wewnętrznych",
      content:
        "Dzięki stymulacji układu hormonalnego i wegetatywnego, jazda konna poprawia krążenie, oddychanie, pracę jelit a nawet pracę układu odpornościowego. Działanie to jest szczególnie aktywne podczas jazdy stępem.",
      color: "lime",
    },
    {
      title: "Mobilizują",
      content:
        "Kontakt z koniem, poddanie się jego łagodnym, kołyszącym ruchom sprzyja relaksowi i odprężeniu. Świat widziany z końskiego grzbietu jest większy i piękniejszy. Obcowanie z tym dużym, imponującym, przyjacielskim zwierzęciem ma wpływ na równowagę emocjonalną i powoduje osłabienie reakcji nerwicowych.",
      color: "yellow",
    },
    {
      title: "Angażują w terapię",
      content:
        "Podczas zajęć z hipoterapii pacjent dzięki aktywizacji i pozytywnemu nastawieniu do współpracy z terapeutą może opanować szereg umiejętności i pojęć. Koń jest pomocny w pracy pedagoga specjalnego, psychologa, logopedy. Obcowanie z koniem i jego otoczeniem nie tylko wzbogaca wiedzę pacjenta o świecie, ale uczy go również samodzielności, odpowiedzialności i współpracy z innymi.",
      color: "lime",
    },
    {
      title: "Relaksują",
      content:
        "Kontakt z koniem, poddanie się jego łagodnym, kołyszącym ruchom sprzyja relaksowi i odprężeniu. Świat widziany z końskiego grzbietu jest większy i piękniejszszy. Obcowanie z tym dużym, imponującym, przyjacielskim zwierzęciem ma wpływ na równowagę emocjonalną i powoduje osłabienie reakcji nerwicowych.",
      color: "yellow",
    },
  ];

  return (
    <section className="py-6 md:py-12">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`font-display mb-8 font-semibold text-left ${headerFontSizeClass}`}
        >
          Dlaczego konie?
        </h2>
      </div>
      <div className="max-w-7xl mx-auto flex gap-6 justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className={`${
                highContrast ? "bg-gray-800" : `bg-${card.color}-100`
              } border-${card.color}-500`}
            >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`${
                    highContrast ? "text-yellow-400" : "text-gray-700"
                  } ${fontSizeClass} text-left mb-6`}
                >
                  {card.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHorsesSection;
