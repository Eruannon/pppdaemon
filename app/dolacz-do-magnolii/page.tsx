"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAccessibility } from "@/lib/providers/accessibility-context";

export default function JoinTeamPage() {
  const { fontSizeLevel, highContrast } = useAccessibility();

  const getFontSizeClass = (level: number) => {
    const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
    return sizes[level] || "text-base";
  };

  const fontSizeClass = getFontSizeClass(fontSizeLevel);

  return (
    <section
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 ${
        highContrast ? "bg-black text-yellow-400" : "bg-white text-gray-800"
      }`}
    >
      <h1
        className={`text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 ${
          highContrast ? "text-yellow-400" : "text-gray-800"
        }`}
      >
        Dołącz do zespołu MAGNOLII
      </h1>
      <p
        className={`text-center ${fontSizeClass} mb-12 ${
          highContrast ? "text-yellow-400" : "text-gray-500"
        }`}
      >
        Zapraszamy do kontaktu
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card
          className={
            highContrast
              ? "bg-gray-800 border-yellow-400"
              : "bg-[rgb(61,162,117)] border-transparent"
          }
        >
          <CardHeader>
            <CardTitle
              className={`text-2xl sm:text-3xl font-semibold ${
                highContrast ? "text-yellow-400" : "text-white"
              }`}
            >
              Jeżeli jesteś zainteresowany/a?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`${fontSizeClass} ${
                highContrast ? "text-yellow-400" : "text-white"
              }`}
            >
              <p className="font-semibold mb-4">
                Jeżeli jesteś zainteresowany podjęciem pracy w&nbsp;naszej
                Poradni, zapewniamy:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>
                  umowę b2b lub umowę zlecenie lub umowę o pracę - kwestia
                  indywidualna,
                </li>
                <li>atrakcyjne wynagrodzenie,</li>
                <li>możliwość rozwoju zawodowego,</li>
                <li>wyposażony gabinet,</li>
                <li>miłą i życzliwą atmosferę,</li>
                <li>możliwość rozwoju.</li>
              </ul>
              <p className="font-semibold mb-4">Wymagania:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>kwalifikacje zawodowe,</li>
                <li>
                  gotowość/doświadczenie w prowadzeniu terapii indywidualnej z
                  dziećmi i młodzieżą oraz z osobami dorosłymi,
                </li>
                <li>kreatywność i samodzielność w działaniu,</li>
                <li>zaangażowanie w pracę.</li>
              </ul>
              <p className="font-semibold mb-6">
                Jeśli wykonujesz swój zawód z pasją, masz szereg pomysłów z
                obszaru terapii – zapraszamy do zespołu.
              </p>
              <div>
                <p className="font-semibold mb-3">Skontaktuj się z nami.</p>
                <address className="not-italic">
                  <p>
                    Niepubliczna Poradnia Psychologiczno-Pedagogiczna MAGNOLIA
                  </p>
                  <p>ul. Magnolii 25</p>
                  <p>44-207 Rybnik</p>
                  {/* <p>ul. Rudzka 13</p>
                  <p>budynek B, III piętro, pok. 3.3</p>
                  <p>44-200 Rybnik</p> */}
                  <p>
                    Telefon/WhatsApp:{" "}
                    <a href="tel:502162365" className="underline">
                      502 162 365
                    </a>
                  </p>
                </address>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/assets/join.png"
            alt="Zespół MAGNOLII"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
