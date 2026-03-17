import React from "react";
import {
  getFontSizeClass,
  getHeaderFontSizeClass,
} from "@/lib/font-size-utils";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useAccessibility } from "@/lib/providers/accessibility-context";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";

const PricingSection = () => {
  const { fontSizeLevel, highContrast } = useAccessibility();
  const fontSizeClass = getFontSizeClass(fontSizeLevel);
  const headerFontSizeClass = getHeaderFontSizeClass(fontSizeLevel);

  return (
    <section className="py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2
          className={`font-display mb-8 font-semibold text-left ${headerFontSizeClass}`}
        >
          Cennik
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card
            className={`${
              highContrast ? "bg-gray-800" : "bg-blue-100"
            } border-blue-500`}
          >
            <CardHeader>
              <CardTitle>Hipoterapia w ramach WWR</CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Hipoterapia w ramach zajęć WWR jest darmowa. Zapraszamy do
                skorzystania z naszej oferty darmowych zajęć WWR dla twojego
                dziecka.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/wsparcie-dla-dzieci/jak-uzyskac-darmowe-zajecia-wwrd"
                className="p-2 rounded-md border border-blue-800 bg-blue-300 flex items-center justify-center gap-2"
              >
                Jak zapisać dziecko na darmowe zajęcia WWR?
                <FaCircleArrowRight className="rotate-[-45deg]" />
              </Link>
            </CardFooter>
          </Card>
          <Card
            className={`${
              highContrast ? "bg-gray-800" : "bg-green-100"
            } border-green-500`}
          >
            <CardHeader>
              <CardTitle>Usługa komercyjna</CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className={`${
                  highContrast ? "text-yellow-400" : "text-gray-700"
                } ${fontSizeClass} text-left mb-6`}
              >
                Cena za komercyjną hipoterapię wynosi 60zł za 45 minut.
                Skontaktuj się z nami, aby umówić się na sesję.
              </p>
              <p className="text-2xl font-semibold">60zł / 45 minut</p>
            </CardContent>
            <CardFooter>
              <Link
                href="/kontakt"
                className="p-2 rounded-md border border-green-800 bg-green-300 flex items-center justify-center gap-2"
              >
                Kontakt
                <FaCircleArrowRight className="rotate-[-45deg]" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
