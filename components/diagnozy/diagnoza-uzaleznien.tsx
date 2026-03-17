"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";
import { Button } from "@/components/ui/button";

const DiagnozaUzaleznien: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ height: contentHeight ? `${contentHeight}px` : "500px" }}
            >
              <Image
                src="/assets/uzaleznienie/uzaleznienie3.jpg"
                alt="dziecko ubierające maskę"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          
          <div
            ref={contentRef}
            className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-center"
          >
            <h2 className="font-display mb-6 tracking-tight font-semibold text-left text-3xl">
              Diagnoza uzależnień
            </h2>
            <p className="text-gray-700 text-base text-left mb-6">
              Czujesz, że Ty lub ktoś bliski może zmagać się z uzależnieniem?
              <br />
              <br />
              Zapraszamy na rozmowę i profesjonalną diagnozę. Nasi specjaliści
              pomogą zrozumieć problem i zaproponują konkretne kroki, które
              warto podjąć.
              <br />
              <br /> W trakcie diagnozy skupiamy się na szczerej rozmowie,
              analizie sytuacji i wspólnym znalezieniu źródła problemu. <br />
              <br /> Pomagamy zarówno dorosłym, jak i młodzieży – od uzależnień
              od substancji po e-uzależnienia.
              <br />
              <br /> Nie czekaj – im szybciej podejmiesz działanie, tym łatwiej
              będzie wrócić na właściwą drogę. Jesteśmy tutaj, by pomóc.
            </p>
            <Link href="/Kontakt" className="text-slate-800 flex justify-start">
              <Button
                variant="outline"
                className="flex items-center justify-center bg-slate-50/80 border-slate-700"
              >
                Umów diagnozę <TiArrowRightOutline />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnozaUzaleznien;
