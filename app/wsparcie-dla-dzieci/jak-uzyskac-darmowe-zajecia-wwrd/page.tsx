"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useAccessibility } from "@/lib/providers/accessibility-context";

const getFontSizeClass = (level: number) => {
  const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
  return sizes[level] || "text-base";
};

const getHeaderFontSizeClass = (level: number) => {
  const sizes = ["text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl"];
  return sizes[level] || "text-xl";
};

export default function WWRDInfoPage() {
  const { fontSizeLevel, highContrast } = useAccessibility();
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <div
      className={`max-w-6xl mx-auto my-20 px-4 sm:px-6 lg:px-8 ${
        highContrast ? "bg-black text-yellow-400" : "bg-white text-gray-800"
      }`}
    >
      <h1
        className={`font-bold mb-10 ${
          highContrast ? "text-yellow-400" : "text-[#921d7f]"
        } ${headerFontSizeClass}`}
      >
        Bezpłatna Terapia Wczesnego Wspomagania Rozwoju Dziecka (WWRD) w Poradni
        Psychologiczno-Pedagogicznej MAGNOLIA:
      </h1>

      <p className={`${fontSizeClass} leading-relaxed mb-6`}>
        W celu skorzystania z bezpłatnej Terapii Wczesnego Wspomagania Rozwoju
        Dziecka (WWRD) w Poradni Psychologiczno-Pedagogicznej MAGNOLIA, należy
        postępować zgodnie z poniższymi krokami:
      </p>

      <Card
        className={`mb-8 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle className={headerFontSizeClass}>
            1. Wizyta u lekarza:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`${fontSizeClass} leading-relaxed mb-4`}>
            Pierwszym krokiem jest wizyta u lekarza pediatry lub lekarza
            specjalisty.{" "}
            <span
              className={`font-semibold ${
                highContrast ? "text-yellow-400" : "text-[#921d7f]"
              }`}
            >
              Lekarz musi wydać zaświadczenie lekarskie
            </span>
            , które potwierdza opóźnienie, zaburzenie lub niepełnosprawność u
            dziecka.
          </p>

          <h3
            className={`font-semibold ${headerFontSizeClass} ${
              highContrast ? "text-yellow-400" : "text-[#921d7f]"
            } mt-6 mb-4`}
          >
            Ważne jest, aby lekarz dokładnie określił rodzaj zaburzenia lub
            niepełnosprawności oraz stwierdził potrzebę wczesnego wspomagania
            rozwoju z uwagi na konkretne przyczyny, takie jak:
          </h3>
          <ul
            className={`list-disc ml-6 my-3 mb-6 space-y-2 ${
              highContrast ? "text-yellow-400" : ""
            } ${fontSizeClass}`}
          >
            <li>
              opóźniony lub zaburzony rozwój psychoruchowy (częsty i skuteczny
              argument!!)
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
        </CardContent>
      </Card>

      <Card
        className={`mb-8 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle className={headerFontSizeClass}>
            2. Wizyta w poradni publicznej
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`${fontSizeClass} leading-relaxed mb-4`}>
            Następnie udaj się do publicznej Poradni
            Psychologiczno-Pedagogicznej, która obsługuje Twój rejon,{" "}
            <span
              className={`${
                highContrast ? "text-yellow-400" : "text-[#921d7f]"
              }`}
            >
              (rejonizacja – sprawdź pod opieką, której poradni Publicznej
              znajduje się przedszkole Twojego dziecka)
            </span>
          </p>
        </CardContent>
      </Card>

      <Card
        className={`mb-8 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`${headerFontSizeClass} ${
              highContrast ? "text-yellow-400" : "text-[#921d7f]"
            }`}
          >
            3. Zgłoś się z dzieckiem na diagnozę i wypełnij wniosek o wydanie
            opinii o potrzebie wczesnego wspomagania rozwoju.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`${fontSizeClass} leading-relaxed mb-4`}>
            Do wniosku dołącz dokumenty, takie jak zaświadczenie lekarskie,
            wcześniejsze opinie psychologiczne lub pedagogiczne oraz dokumenty
            medyczne. Poradnia ma obowiązek wydać opinię w ciągu 30 dni od
            złożenia wniosku.
          </p>
        </CardContent>
      </Card>

      <Card
        className={`mb-8 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle className={headerFontSizeClass}>
            4. Odbierz opinię:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`${fontSizeClass} leading-relaxed mb-4`}>
            Po otrzymaniu opinii o potrzebie wczesnego wspomagania rozwoju z
            publicznej Poradni Psychologiczno-Pedagogicznej, przyjdź z nią do
            poradni Psychologiczno-Pedagogicznej MAGNOLIA.
          </p>
        </CardContent>
      </Card>

      <Card
        className={`mb-8 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`${headerFontSizeClass} ${
              highContrast ? "text-yellow-400" : "text-[#921d7f]"
            }`}
          >
            Poradnia Psychologiczno-Pedagogiczna MAGNOLIA:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className={`${fontSizeClass} space-y-2`}>
            <li className="font-semibold">Kontakt Telefoniczny:</li>
            <li>+48 690 515 224</li>
            <li>+48 503 192 950</li>
            <li className="font-semibold mt-4">e-mail:</li>
            <li>poradniamagnolia@gmail.com</li>
            <li className="font-semibold mt-4">Godziny otwarcia:</li>
            <li>Poniedziałek - Piątek 7:00 - 21:00</li>
          </ul>
        </CardContent>
      </Card>


    </div>
  );
}
