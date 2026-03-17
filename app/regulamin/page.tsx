"use client";

import React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/lib/providers/accessibility-context";

interface DocumentLink {
  href: string;
  title: string;
  filename: string;
}

const documents: DocumentLink[] = [
  {
    href: "/assets/Zgłoszenie_dziecka_na_zajęcia_WWR.pdf",
    title: "Zgłoszenie na zajęcia WWRD",
    filename: "Zgłoszenie_dziecka_na_zajecia",
  },
  {
    href: "/assets/Oświadczenie-o-zapoznaniu-się-z-regulaminem-zajęć-WWR.jpg",
    title: "Oświadczenie o zapoznaniu się z regulaminem zajęć WWRD",
    filename: "Oświadczenie_o_zapoznaniu_się_z_regulaminem_zajęć_WWRD",
  },
  {
    href: "/assets/regulamin-zajec-wwrd.pdf",
    title: "Regulamin zajęć WWRD",
    filename: "Regulamin_zajęć_WWRD",
  },
];

export default function Regulamin() {
  const { fontSizeLevel, highContrast } = useAccessibility();

  const getFontSizeClass = (level: number) => {
    const sizes = ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl"];
    return sizes[level] || "text-base";
  };

  const fontSizeClass = getFontSizeClass(fontSizeLevel);

  return (
    <div
      className={
        highContrast ? "bg-black text-yellow-400" : "bg-white text-slate-800"
      }
    >
      <div className="max-w-6xl mx-auto px-4 grid gap-6 my-20">
        <h2 className=" text-3xl font-semibold tracking-tight">Regulamin</h2>
        {documents.map((doc, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <Button
                variant={highContrast ? "outline" : "default"}
                className={`w-full justify-between ${fontSizeClass} ${
                  highContrast
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-white text-slate-800 hover:bg-slate-100"
                }`}
                asChild
              >
                <Link href={doc.href} download={doc.filename}>
                  <span>{doc.title}</span>
                  <Download className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent
              className={
                highContrast ? "bg-gray-800 text-yellow-400" : "bg-white"
              }
            >
              Kliknij aby pobrać plik.
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
