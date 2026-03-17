import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Ear, FileSearch, Stethoscope } from "lucide-react";
import React from "react";

/* ------------------------------  STRONA GŁÓWNA  ----------------------------- */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      
      
      
      <section className="relative h-screen w-full overflow-hidden">
        
        <Image
          src="/assets/diagnozy/diagnozy-bg.jpg"
          alt="Tło – diagnozy"
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 to-indigo-900/40" />

        
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
          <h1 className="text-5xl font-semibold tracking-tighter text-white md:text-7xl">
            <span className="text-amber-400">DIAGNOZY</span>
            <br />
            ZABURZEŃ ROZWOJOWYCH
          </h1>
        </div>

        
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0, 0 100%)" }}
        />
      </section>

      
      
      
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Oferta <span className="text-indigo-600">Diagnoz</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded bg-amber-400" />
          </div>

          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <DiagnosisCard
              title="Diagnoza spektrum autyzmu"
              description="ADOS‑2 – złoty standard oceny cech ASD w kontrolowanych interakcjach i zabawie."
              icon={<Brain className="h-6 w-6" />}
              imageUrl="/assets/diagnozy/ados.jpg"
              href="/diagnoza-ados-2"
            />

            <DiagnosisCard
              title="Diagnoza Logopedyczna"
              description="Kompleksowa ocena mowy, artykulacji i komunikacji z planem terapii."
              icon={<Ear className="h-6 w-6" />}
              imageUrl="/assets/diagnozy/diagnoza-logopedyczna.jpg"
              href="/diagnozy/logopedyczna"
            />

            <DiagnosisCard
              title="Diagnoza ADHD"
              description="Test MOXO i wywiad kliniczny – rzetelna ocena uwagi, impulsywności i nadruchliwości."
              icon={<FileSearch className="h-6 w-6" />}
              imageUrl="/assets/diagnozy/inne-adhd.jpg"
              href="/diagnoza-adhd"
            />

            <DiagnosisCard
              title="Diagnoza integracji sensorycznej"
              description="Badanie SI – szczegółowy profil odbioru bodźców i wskazówki do terapii."
              icon={<Stethoscope className="h-6 w-6" />}
              imageUrl="/assets/diagnozy/diagnoza-si.jpg"
              href="/integracja-sensoryczna-diagnoza"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  INTERFEJS PROPSÓW + KOMPONENT KARTY                                       */
/* -------------------------------------------------------------------------- */
interface DiagnosisCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  href: string;
}

function DiagnosisCard({
  title,
  description,
  icon,
  imageUrl,
  href,
}: DiagnosisCardProps) {
  return (
    <Link href={href} className="block h-full">
      <Card className="group h-full overflow-hidden rounded-xl border-0 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
        
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-indigo-900">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
          </div>
        </div>

        
        <CardContent className="flex flex-col justify-between p-6">
          <p className="text-gray-700">{description}</p>
          <div className="mt-4 flex items-center justify-end text-magenta">
            <span className="mr-2 font-medium">Dowiedz się więcej</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
