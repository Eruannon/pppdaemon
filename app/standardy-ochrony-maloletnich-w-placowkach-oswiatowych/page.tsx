"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useAccessibility } from "@/lib/providers/accessibility-context";

export default function StandardyOchronyMaloletnich() {
  const { fontSizeLevel, highContrast } = useAccessibility();

  const getFontSizeClass = (level: number) => {
    const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
    return sizes[level] || "text-base";
  };

  const fontSizeClass = getFontSizeClass(fontSizeLevel);

  return (
    <div
      className={`py-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
        highContrast ? "bg-black text-yellow-400" : "bg-white text-slate-800"
      }`}
    >
      <h1
        className={`text-3xl sm:text-4xl font-semibold mb-8 text-center ${
          highContrast ? "text-yellow-400" : "text-slate-800"
        }`}
      >
        Standardy ochrony małoletnich
      </h1>

      <Card className={highContrast ? "bg-gray-800 border-yellow-400" : "pt-4"}>
        <CardContent className={`${fontSizeClass} space-y-6`}>
          <p>
            Nowelizacja Kodeksu rodzinnego i opiekuńczego (Dz.U. 2023 poz. 1606)
            określiła warunki skutecznej ochrony małoletnich przed różnymi
            formami przemocy. Wprowadzone zmiany wskazują na potrzebę
            opracowania jasnych i spójnych standardów postępowania w sytuacjach
            podejrzenia krzywdzenia lub krzywdzenia małoletnich.
          </p>
          <p>
            „Standardy ochrony małoletnich" są jednym z elementów systemowego
            rozwiązania ochrony małoletnich przed krzywdzeniem i stanowią formę
            zabezpieczenia ich praw. Należy je traktować jako jedno z narzędzi
            wzmacniających i ułatwiających skuteczniejszą ochronę uczniów przed
            krzywdzeniem.
          </p>
        </CardContent>
      </Card>

      <Card
        className={`mt-8 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`${fontSizeClass} ${
              highContrast ? "text-yellow-400" : "text-slate-800"
            }`}
          >
            W konstruowaniu „Standardów ochrony małoletnich" przyjęto
            następujące założenia:
          </CardTitle>
        </CardHeader>
        <CardContent className={`${fontSizeClass} space-y-4`}>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              W jednostce, która sprawuje ustawowy obowiązek opieki nad
              małoletnimi nie są zatrudniane osoby mogące zagrażać
              bezpieczeństwu małoletnich.
            </li>
            <li>
              Pracownicy potrafią zdiagnozować symptomy krzywdzenia małoletniego
              oraz podejmować interwencje w przypadku podejrzenia, że małoletni
              jest ofiarą przemocy w szkole lub przemocy domowej.
            </li>
            <li>
              Podejmowane w jednostce postępowania nie mogą naruszać praw
              dziecka, praw człowieka, praw ucznia określonych w dokumencie
              statutowym lub innym wewnętrznym regulaminie jednostki, a także
              bezpieczeństwa danych osobowych.
            </li>
            <li>
              Małoletni wiedzą, jak unikać zagrożeń w kontaktach z dorosłymi i
              rówieśnikami.
            </li>
            <li>
              Małoletni wiedzą, do kogo zwracać się o pomoc w sytuacjach dla
              nich trudnych i czynią to, mając świadomość skuteczności
              podejmowanych działań.
            </li>
            <li>
              Rodzice i opiekunowie prawni poszerzają wiedzę i umiejętności o
              metodach wychowania dziecka bez stosowania przemocy oraz potrafią
              je uczyć zasad bezpieczeństwa.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card
        className={`mt-8 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`${fontSizeClass} ${
              highContrast ? "text-yellow-400" : "text-slate-800"
            }`}
          >
            Ponadto przyjęto, że:
          </CardTitle>
        </CardHeader>
        <CardContent className={`${fontSizeClass} space-y-4`}>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Prowadzone w jednostce postępowanie na wypadek krzywdzenia lub
              podejrzenia krzywdzenia małoletnich jest zorganizowane w sposób
              zapewniający im skuteczną ochronę.
            </li>
            <li>
              Działania podejmowane w ramach ochrony małoletnich przed
              krzywdzeniem są dokumentowane oraz monitorowane i poddawane
              okresowej weryfikacji przy udziale wszystkich zainteresowanych
              podmiotów, w szczególności organu nadzorującego.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card
        className={`mt-8 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`${fontSizeClass} text-center ${
              highContrast ? "text-yellow-400" : "text-slate-800"
            }`}
          >
            Prawo zabrania stosowania przemocy i krzywdzenia swoich bliskich!
          </CardTitle>
        </CardHeader>
        <CardContent className={`${fontSizeClass} space-y-6`}>
          <p className="font-semibold">
            Jeżeli Ty lub ktoś z Twoich bliskich jest osobą doznającą przemocy
            domowej, nie wstydź się prosić o pomoc. Wezwij Policję, dzwoniąc na
            numer alarmowy 112. Prawo stoi po Twojej stronie!
          </p>
          <p>
            Masz prawo do złożenia zawiadomienia o popełnieniu przestępstwa z
            użyciem przemocy domowej do Prokuratury, Policji lub Żandarmerii
            Wojskowej. Możesz także zwrócić się po pomoc do podmiotów i
            organizacji realizujących działania na rzecz przeciwdziałania
            przemocy domowej.
          </p>
        </CardContent>
      </Card>

      <Card
        className={`mt-8 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`${fontSizeClass} ${
              highContrast ? "text-yellow-400" : "text-slate-800"
            }`}
          >
            Pomogą Ci:
          </CardTitle>
        </CardHeader>
        <CardContent className={`${fontSizeClass} space-y-4`}>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Ośrodki pomocy społecznej – w sprawach socjalnych, bytowych i
              prawnych.
            </li>
            <li>
              Powiatowe centra pomocy rodzinie – w zakresie prawnym, socjalnym,
              terapeutycznym lub udzielą informacji na temat instytucji lokalnie
              działających w tym zakresie w Twojej miejscowości.
            </li>
            <li>
              Ośrodki interwencji kryzysowej i Ośrodki wsparcia – zapewniając
              schronienie Tobie i Twoim bliskim, gdy doznajesz przemocy domowej,
              udzielą Ci pomocy i wsparcia w przezwyciężeniu sytuacji
              kryzysowej, a także opracują plan pomocy.
            </li>
            <li>
              Specjalistyczne ośrodki wsparcia dla osób doznających przemocy
              domowej – zapewniając bezpłatne całodobowe schronienie Tobie i
              Twoim bliskim, gdy doznajesz przemocy domowej, oraz udzielą Ci
              kompleksowej, specjalistycznej pomocy w zakresie interwencyjnym,
              terapeutyczno-wspomagającym oraz potrzeb bytowych.
            </li>
            <li>
              Okręgowe ośrodki i lokalne punkty działające w ramach Sieci Pomocy
              Pokrzywdzonym Przestępstwem – zapewniając profesjonalną,
              kompleksową i bezpłatną pomoc prawną, psychologiczną,
              psychoterapeutyczną i materialną.
            </li>
            <li>
              Sądy opiekuńcze – w sprawach opiekuńczych i alimentacyjnych.
            </li>
            <li>
              Placówki ochrony zdrowia – np. uzyskać zaświadczenie lekarskie o
              doznanych obrażeniach.
            </li>
            <li>
              Komisje rozwiązywania problemów alkoholowych – podejmując
              działania wobec osoby nadużywającej alkoholu.
            </li>
            <li>
              Punkty nieodpłatnej pomocy prawnej – w zakresie uzyskania pomocy
              prawnej.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card
        className={`mt-8 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`${fontSizeClass} ${
              highContrast ? "text-yellow-400" : "text-slate-800"
            }`}
          >
            Możesz zadzwonić do:
          </CardTitle>
        </CardHeader>
        <CardContent className={`${fontSizeClass} space-y-4`}>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              Ogólnopolskiego Pogotowia dla Ofiar Przemocy w Rodzinie „Niebieska
              Linia" tel. 800 12 00 02 (linia całodobowa i bezpłatna), w
              poniedziałki w godz. 18:00 – 22:00 można rozmawiać z konsultantem
              w języku angielskim, a we wtorki w godz. 18:00 – 22:00 w języku
              rosyjskim. Dyżur prawny (22) 666 28 50 (linia płatna, czynna w
              poniedziałek i wtorek w godzinach 17:00 – 21:00) oraz tel. 800 12
              00 02 (linia bezpłatna, czynna w środę w godzinach 18:00 – 22:00).
            </li>
            <li>
              Poradnia e-mailowa:{" "}
              <Link
                href="mailto:niebieskalinia@niebieskalinia.info"
                className="underline"
              >
                niebieskalinia@niebieskalinia.info
              </Link>
              <br />
              Adres strony:{" "}
              <Link href="https://www.niebieskalinia.pl/" className="underline">
                https://www.niebieskalinia.pl/
              </Link>
              <br />
              Członkowie rodzin z problemem przemocy i problemem alkoholowym
              mogą skonsultować się także przez SKYPE: pogotowie.niebieska.linia
              ze specjalistą z zakresu przeciwdziałania przemocy w rodzinie –
              konsultanci posługują się językiem migowym.
            </li>
            <li>
              Ogólnokrajowej Linii Pomocy Pokrzywdzonym tel. +48 222 309 900
              przez całą dobę można anonimowo uzyskać informacje o możliwości
              uzyskania pomocy, szybką poradę psychologiczną i prawną, a także
              umówić się na spotkanie ze specjalistami w dowolnym miejscu na
              terenie Polski. Możliwe są konsultacje w językach obcych oraz w
              języku migowym
              <br />
              <Link
                href="https://www.gov.pl/web/numer-alarmowy-112/-48-222-309-900-numer-sos-liniapomocy-pokrzywdzonym"
                className="underline"
              >
                https://www.gov.pl/web/numer-alarmowy-112/-48-222-309-900-numer-sos-liniapomocy-pokrzywdzonym
              </Link>
            </li>
            <li>
              Policyjny telefon zaufania dla osób doznających przemocy domowej
              nr 800 120 226 (linia bezpłatna przy połączeniu z telefonów
              stacjonarnych, czynna codziennie w godzinach od 9:30 do 15:30, od
              godz. 15:30 do 9:30 włączony jest automat)
              <br />
              <Link href="https://policja.pl" className="underline">
                https://policja.pl
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8 space-y-4">
        <Button
          variant={highContrast ? "outline" : "default"}
          className={`w-full justify-start ${fontSizeClass} ${
            highContrast
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-white text-slate-800 hover:bg-slate-100"
          }`}
          asChild
        >
          <Link
            href="/assets/Podrecznik-standardy-ochrony-dzieci.pdf"
            download="standardy ochrony dzieci"
          >
            <Download className="mr-2 h-4 w-4" />
            <span>
              Standardy ochrony małoletnich w placówkach oświatowych -
              podręcznik (PDF)
            </span>
          </Link>
        </Button>

        <Button
          variant={highContrast ? "outline" : "default"}
          className={`w-full justify-start ${fontSizeClass} ${
            highContrast
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-white text-slate-800 hover:bg-slate-100"
          }`}
          asChild
        >
          <Link href="/assets/zarzadzenie.pdf" download="Zarządzenie">
            <Download className="mr-2 h-4 w-4" />
            <span>Zarządzenie (PDF)</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
