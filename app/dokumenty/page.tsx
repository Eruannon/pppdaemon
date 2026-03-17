"use client";

import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import ContactForm from "@/components/forms/formularz";

interface FileLink {
  name: string;
  path: string;
}

const files: FileLink[] = [
  { name: "Polityka RODO", path: "/assets/RODO.pdf" },
  { name: "PLIKI cookies", path: "/assets/Cookies.pdf" },
  {
    name: "Tryb postępowania reklamacyjnego",
    path: "/assets/Postepowaniereklamacyjne.pdf",
  },
  { name: "Akredytacja", path: "/assets/Akredytacja.pdf" },
  {
    name: "Certyfikat SUS 2.0 DEKRA",
    path: "/assets/Certyfikat-SUS-DEKRA.pdf",
  },
  { name: "TGLS", path: "/assets/TGLS.pdf" },
  { name: "Opinia sanitarna", path: "/assets/Opinia-sanitarna.pdf" },
];

export default function DownloadsPage() {
  const { fontSizeLevel, highContrast } = useAccessibility();

  const getFontSizeClass = (level: number) => {
    const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
    return sizes[level] || "text-base";
  };

  const fontSizeClass = getFontSizeClass(fontSizeLevel);

  return (
    <div
      className={`py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
        highContrast ? "bg-black text-yellow-400" : "bg-white text-slate-800"
      }`}
    >
      <h1
        className={`text-3xl sm:text-4xl font-semibold mb-8 text-center ${
          highContrast ? "text-yellow-400" : "text-slate-800"
        }`}
      >
        Dokumenty
      </h1>
      <Card className={highContrast ? "bg-gray-800 border-yellow-400" : ""}>
        <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-6">
          {files.map((file, index) => (
            <Button
              key={index}
              variant={highContrast ? "outline" : "default"}
              className={`w-full justify-start ${fontSizeClass} ${
                highContrast
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-white text-slate-800 hover:bg-slate-100"
              }`}
              asChild
            >
              <Link href={file.path} download>
                <Download className="mr-2 h-4 w-4" />
                <span>{file.name}</span>
              </Link>
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card
        className={`mt-12 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`${fontSizeClass} ${
              highContrast ? "text-yellow-400" : "text-slate-800"
            }`}
          >
            Wymagania techniczne dla uczestnictwa w usłudze świadczonej w formie
            zdalnej
          </CardTitle>
        </CardHeader>
        <CardContent>
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
              href="/assets/wymaganiatechniczne.pdf"
              download="Wymagania techniczne dla uczestnictwa w usłudze świadczonej w formie zdalnej"
            >
              <Download className="mr-2 h-4 w-4" />
              <span>Wymagania techniczne</span>
            </Link>
          </Button>
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
            Regulamin
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            variant={highContrast ? "outline" : "default"}
            className={`w-full justify-start ${fontSizeClass} ${
              highContrast
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                : "bg-white text-slate-800 hover:bg-slate-100"
            }`}
            asChild
          >
            <Link href="/assets/REGULAMIN.pdf" download="Regulamin">
              <Download className="mr-2 h-4 w-4" />
              <span>Regulamin</span>
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card
        className={`mt-12 ${
          highContrast ? "bg-gray-800 border-yellow-400" : ""
        }`}
      >
        <CardHeader>
          <CardTitle
            className={`${fontSizeClass} ${
              highContrast ? "text-yellow-400" : "text-slate-800"
            }`}
          >
            Formularz kontaktowy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
