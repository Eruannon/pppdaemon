"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useAccessibility } from "@/lib/providers/accessibility-context";

interface StaffMember {
  id: number;
  name: string;
  specialty: string;
  description: React.ReactNode;
  imageUrl: string;
}

const staffData: StaffMember[] = [
  {
    id: 11,
    name: "Paulina Rosa",
    specialty: "Logopeda",
    description: (
      <p>
        Magister polonistyki, logopeda, egzaminator TELC języka polskiego jako
        obcego, trener języka polskiego jako obcego, czynny nauczyciel
        w&nbsp;szkole podstawowej i&nbsp;ponadpodstawowej, terapeuta sesji
        logopedycznych. Trener z&nbsp;obszaru edukacji włączającej. Wykładowca
        na&nbsp;studiach podyplomowych.
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar-2.svg",
  },

  {
    id: 12,
    name: "Paulina Dąbrowska",
    specialty: "Edukacja wczesnoszkolna i surdopedagogika",
    description: (
      <p>
        Magister pedagogiki specjalnej z&nbsp;zakresu edukacji
        i&nbsp;rehabilitacji osób z&nbsp;niepełnosprawnością intelektualną oraz
        studentka logopedii z&nbsp;neurologopedią. Doświadczona w pracy
        dydaktycznej i&nbsp;pedagogicznej, zarówno w szkołach integracyjnych,
        jak i&nbsp;w ośrodkach dla dzieci słabosłyszących. Ekspertka w obszarze
        edukacji włączającej, z&nbsp;kompetencjami praktycznymi w&nbsp;zakresie
        organizacji i&nbsp;prowadzenia zajęć dydaktyczno-wychowawczych.
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar-2.svg",
  },
  {
    id: 15,
    name: "Justyna Bugdoł",
    specialty: "Edukacja wczesnoszkolna i surdopedagogika",
    description: (
      <p>
        Magister pedagogiki specjalnej, nauczyciel dyplomowany, terapeuta
        edukacji i&nbsp;rewalidacji osób ze&nbsp;spektrum autyzmu, trener TUS,
        pedagog w&nbsp;Zespole Szkół Specjalnych
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar.svg",
  },
  {
    id: 1,
    name: "Wioletta Ginter",
    specialty: "Pedagog",
    description: (
      <p>
        Magister pedagogiki specjalizujący się w&nbsp; poradnictwie
        i&nbsp;pomocy psychopedagogicznej. Jako aktywny pedagog specjalny,
        terapeuta ręki, specjalista w&nbsp; edukacji włączającej
        i&nbsp;wykładowca, posiada bogate doświadczenie, przekazując swoją
        wiedzę zarówno uczniom, jak i&nbsp;nauczycielom w&nbsp; różnych
        instytucjach edukacyjnych. Specjalista ORE w&nbsp; zakresie edukacji
        włączającej.
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar.svg",
  },
  {
    id: 5,
    name: "Anna Ławniczak",
    specialty: "Psycholog",
    description: (
      <p>
        Magister psychologii, specjalizujący się w&nbsp;seksuologii klinicznej
        i&nbsp;psychologii kryminologicznej. Wykładowca studiów podyplomowych
        z&nbsp;obszaru pedagogiki specjalnej, seksuologii, seksuologii
        klinicznej. Terapeuta dzieci, par, rodzin. Aktywnie angażuje się
        w&nbsp;pracę na&nbsp;rzecz dzieci w&nbsp;szkołach i&nbsp;przedszkolach.
        Specjalista ORE w&nbsp;zakresie edukacji włączającej.
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar-2.svg",
  },
  {
    id: 10,
    name: "Monika Kromolan",
    specialty: "Psycholog",
    description: (
      <p>
        Magister psychologii z&nbsp;zakresu neuropsychologii i&nbsp;psychologii
        klinicznej i osobowości. Specjalista w&nbsp;zintegrowanej edukacji
        wczesnoszkolnej, edukacji informatycznej oraz edukacji
        i&nbsp;rehabilitacji osób z&nbsp;niepełnosprawnością intelektualną.
        Terapeuta WWRD i&nbsp;hipoterapii. Specjalista w&nbsp;zakresie
        komunikacji alternatywnej i&nbsp;wspomagającej oraz diagnozy
        alternatywnych i&nbsp;wspomagających metod porozumiewania się,
        oligofrenopedagog. Instruktor masażu shantala. Szkolenia superwizyjne,
        opracowania strategii AAC.
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar-2.svg",
  },
  {
    id: 13,
    name: "Anna Kowalska",
    specialty: "Psycholog",
    description: (
      <p>
        Magister psychologii, psychoonkolog, certyfikowany psychoterapeuta
        Polskiego Towarzystwa Integracyjnej Psychoterapii Doświadczeniowej
        i&nbsp;Edukacji Społecznej, muzykoterapeuta. Psychodietetyk, trener
        nowoczesnego doradztwa zawodowego i&nbsp;edukacyjnego. Teraputa
        z&nbsp;zakresu psychoterapii par, EFT - terapii skoncentrowanej
        na&nbsp;emocjach, pracy z&nbsp;dziećmi i&nbsp;młodzieżą. Specjalista
        edukacji włączającej. Wykładowca studiów podyplomowych z&nbsp;zakresu
        swoich specjalizacji.
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar.svg",
  },
  {
    id: 3,
    name: "Sylwia Cuber",
    specialty: "Pedagog",
    description: (
      <p>
        Magister pedagogiki specjalność: edukacja przedszkolna
        i&nbsp;wczesnoszkolna, oligofrenopedagogika, edukacja elementarna
        z&nbsp;dodatkowym językiem angielskim, czynny pedagog specjalny
        w&nbsp;szkole podstawowej, specjalista ORE w&nbsp;zakresie edukacji
        włączającej, trener treningu umiejętności społecznych (TUS) dzieci
        ze&nbsp;spektrum autyzmu, edukacja i&nbsp;terapia osób ze&nbsp;spektrum
        autyzmu. Wykładowca studiów podyplomowych z&nbsp;zakresu pedagogiki
        specjalnej.
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar-2.svg",
  },
  {
    id: 4,
    name: "Aleksandra Wowra",
    specialty: "Pedagog",
    description: (
      <p>
        Magister pedagogiki – specjalność: opiekuńczo – wychowawczej,
        oligofrenopedagog, specjalista ORE w&nbsp;zakresie edukacji włączającej,
        czynny pedagog specjalny. Wykładowca na&nbsp;kierunkach pedagogiki
        specjalnej na&nbsp;studiach podyplomowych.
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar.svg",
  },
  {
    id: 6,
    name: "Joanna Zawadzka",
    specialty: "Psycholog",
    description: (
      <p>
        Magister języka polskiego, specjalista z&nbsp;zakresu terapii
        pedagogicznej, diagnozy i&nbsp;profilaktyki społecznej. Terapeuta
        z&nbsp;obszaru diagnozy dysleksji rozwojowej, egzaminator OKE,
        nauczyciel języka polskiego jako obcego, prezes Oddziału Towarzystwo
        Dysleksji w&nbsp;Rybniku. Doradca i&nbsp;autor publikacji dla IBE-
        Instytut Badań Edukacyjnych. Pracuje z&nbsp;uczniami uzdolnionymi
        (przygotowanie do&nbsp;egzaminów/olimpiad).
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar-2.svg",
  },
  {
    id: 8,
    name: "Małgorzata Solowska",
    specialty: "Trener",
    description: (
      <p>
        Magister języka angielskiego, magister historii, trener i&nbsp;moderator
        TIK, MIEE Educator, trener dla zagranicznych narodowych agencji Erasmus,
        prelegent konferencji i&nbsp;szkoleń międzynarodowych oraz
        ogólnopolskich. Specjalista ORE w&nbsp;zakresie edukacji włączającej.
        Trener TIK w&nbsp;tym wykorzystania nowych technologii w&nbsp;pracy
        z&nbsp;uczniami ze&nbsp;SPE. Wykładowca studiów podyplomowych
        z&nbsp;zakresu zarządzania oświatą, historii oraz języka angielskiego.
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar.svg",
  },
  {
    id: 9,
    name: "Anna Falkowska",
    specialty: "Pedagog, Socjolog",
    description: (
      <p>
        Doktor nauk społecznych z&nbsp;dziedziny pedagogiki i&nbsp;socjologii.
        Doradca zawodowy oraz specjalista z&nbsp;zakresu prawa ochrony
        środowiska i&nbsp;edukacji ekologicznej. Specjalista ORE z&nbsp;zakresu
        edukacji włączającej. Trener TIK. Specjalista programów
        do&nbsp;interaktywnej&nbsp;edukacji. Wykładowca akademicki
        na&nbsp;uczelniach o&nbsp;profilu przyrodniczym, autorka wielu
        publikacji naukowych i&nbsp;po-konferencyjnych. Ekspert edukacji
        ekologicznej.
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar-2.svg",
  },
  {
    id: 14,
    name: "Natalia Chruściel-Janas",
    specialty: "Logopeda, Neurologopeda",
    description: (
      <p>
        Uniwersytet Medyczny we&nbsp;Wrocławiu: neurologopedia z&nbsp;wczesną
        interwencją logopedyczną, Uniwersytet Wrocławski: logopedia ogólna,
        Uniwersytet Wrocławski: filologia polska, polonista jako lider
        społeczności lokalnej. Certyfikowany Terapeuta Ortodoncji Funkcjonalnej
        MFS, Terapia Integracji Sensorycznej I&nbsp;stopnia (mgr&nbsp;Aleksandra
        Owczarz&nbsp;Jankowska); Innowacyjne metody elektrostymulacji
        zewnętrznej i&nbsp;wewnętrznej w&nbsp;logopedii – podejście praktyczne
        (mgr&nbsp;Ewa Wojewoda, mgr&nbsp;Aleksandra Kaczyńska); Afazja&nbsp;-
        diagnoza i&nbsp;terapia (prof.&nbsp;zw.&nbsp;dr&nbsp;hab.&nbsp;Maria
        Pąchalska); Terapia sensomotoryczna i&nbsp;korekta dysfunkcji
        ustno&nbsp;- twarzowych (dr&nbsp;A&nbsp;Regner) • Trening Umiejętności
        Społecznych (TUS) (mgr&nbsp;E.&nbsp;Łukowska); AAC Wprowadzenie do
        komunikacji alternatywnej i&nbsp;wspomagającej
        (mgr&nbsp;P.&nbsp;Gałczyńska); Terapia logopedyczna dziecka
        z&nbsp;nieprawidłowościami funkcjonowania aparatu ustno&nbsp;-
        twarzowego (Ilona Brzozowska&nbsp;- Misiewicz); O&nbsp;laktacji
        interdyscyplinarnie&nbsp;- warsztat laktacyjny
        (lek&nbsp;med.&nbsp;S.&nbsp;Jeż, dr&nbsp;A.&nbsp;Ptak); Elementy metody
        werbo&nbsp;- tonalnej. Wspomaganie rozwoju mowy i&nbsp;komunikacji
        (mgr&nbsp;A.&nbsp;Dziedzic); Masaż logopedyczny od&nbsp;podstaw –
        podejście praktyczne, (mgr&nbsp;Aleksandra Kaczyńska); ORM kreatywne
        postępowanie logopedyczne (mgr&nbsp;A.&nbsp;Gładowicz&nbsp;- Bojarska);
        Werbogesty (mgr&nbsp;A.&nbsp;Gładowicz&nbsp;- Bojarska); Opóźniony
        rozwój mowy&nbsp;- diagnoza i&nbsp;terapia (mgr&nbsp;Dagmara
        Kalczyńska); Terapia ręki i&nbsp;zaburzeń motoryki małej
        I&nbsp;i&nbsp;II&nbsp;stopnia tytuł: Terapeuta ręki (ProCentrum,
        mgr&nbsp;Katarzyna Gromelska); Logorytmika&nbsp;- ruch, słuch, słowo
        (ProCentrum, mgr&nbsp;Ewa Bombol); Terapia sygmatyzmu międzyzebowego
        (mgr&nbsp;Anna Balewska); Terapia sygmatyzmu bocznego (mgr&nbsp;Anna
        Balewska); Kurs metody „Dyna Lingua MS"; „W&nbsp;świecie elfów". Afazja
        dziecięca i&nbsp;inne zaburzenia komunikacji. Objawy, diagnoza, terapia.
        Diagnoza i&nbsp;terapia ankyloglosji; Uprawnienia pedagogiczne; stopień
        zawodowy nauczyciela kontraktowego; Terapie logopedyczne dzieci
        z&nbsp;zaburzeniami ze&nbsp;spektrum autyzmu, afazją, dyslalią,
        opóźnionym rozwojem mowy; Zespołem Downa; Dziecięcym Porażeniem
        Mózgowym; terapie miofunkcjonalne, elektrostymulacja; ocena
        i&nbsp;terapia funkcji prymarnych; prowadzenie diagnoz logopedycznych;
        terapie logopedyczne młodzieży z&nbsp;zaburzeniami
        z&nbsp;niepełnosprawnością głęboką i&nbsp;sprzężoną. Prowadzenie zajęć
        z&nbsp;terapii ręki, logorytmiki, warsztatów logopedycznych dla dzieci
        i&nbsp;rodziców. Tworzenie indywidualnych programów terapii (IPET,
        Arkusz wyspecjalizowanej oceny ucznia).
      </p>
    ),
    imageUrl: "/assets/kadra-avatary/avatar-2.svg",
  },
];

export default function TeamComponent() {
  const { fontSizeLevel, highContrast } = useAccessibility();

  useEffect(() => {
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-0QW3ZG23F5";
    document.head.appendChild(gtagScript);

    const gtmInlineScript = document.createElement("script");
    gtmInlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0QW3ZG23F5');
    `;
    document.head.appendChild(gtmInlineScript);

    return () => {
      document.head.removeChild(gtagScript);
      document.head.removeChild(gtmInlineScript);
    };
  }, []);

  const getFontSizeClass = (level: number) => {
    const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
    return sizes[level] || "text-base";
  };

  const fontSizeClass = getFontSizeClass(fontSizeLevel);

  return (
    <section
      className={`container mx-auto px-4 py-16 ${
        highContrast ? "bg-black text-yellow-400" : "bg-white text-gray-800"
      }`}
    >
      <h2
        className={`text-4xl font-display font-semibold text-center mb-12 ${
          highContrast ? "text-yellow-400" : "text-gray-800"
        }`}
      >
        Poznaj naszych Specjalistów
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffData.map((person) => (
          <Card
            key={person.id}
            className={`overflow-hidden ${
              highContrast
                ? "bg-gray-800 border-gray-600"
                : "bg-white border-gray-200"
            }`}
          >
            <CardContent className="p-6 flex flex-col items-center space-y-4">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 relative overflow-hidden rounded-full">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text-center">
                <h3
                  className={`text-xl font-semibold font-display mb-2 ${
                    highContrast ? "text-yellow-400" : "text-gray-800"
                  }`}
                >
                  {person.name}
                </h3>
                <p
                  className={`text-sm mb-2 ${
                    highContrast ? "text-yellow-400" : "text-gray-600"
                  }`}
                >
                  {person.specialty}
                </p>
                <div
                  className={`${fontSizeClass} ${
                    highContrast ? "text-yellow-400" : "text-gray-600"
                  }`}
                >
                  {person.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
