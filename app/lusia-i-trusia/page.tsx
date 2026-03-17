import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LusiaITrusia = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <Card className="flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image
            src="/assets/pupile/lusia-i-trusia.jpg"
            alt="Lusia i Trusia - króliczki terapeutyczne"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold tracking-tighter mb-2">
              Poznaj Lusię i Trusię
            </CardTitle>
            <CardDescription className="text-lg mb-4 tracking-tight">
              Nasze wyjątkowe króliczki terapeutyczne
            </CardDescription>
          </CardHeader>
          <CardContent className=" font-medium tracking-tight">
            <p className="mb-4">
              Lusia i Trusia to nasze urocze króliczki, które pełnią rolę
              zwierząt terapeutycznych. Ich łagodność, miękkość i spokojne
              usposobienie sprawiają, że są idealnymi towarzyszami w sesjach
              terapeutycznych.
            </p>
            <p className="mb-4">
              Jako króliczki terapeutyczne, Lusia i Trusia pomagają w:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Redukcji stresu i napięcia</li>
              <li>Poprawie koncentracji i uwagi</li>
              <li>Rozwijaniu empatii i umiejętności opiekuńczych</li>
              <li>Stymulacji sensorycznej poprzez delikatny dotyk</li>
            </ul>
            <p className="mb-4">
              Interakcja z Lusią i Trusią może być szczególnie korzystna dla
              osób z autyzmem, ADHD, lękami lub depresją. Ich obecność tworzy
              spokojną i przyjazną atmosferę, sprzyjającą terapii i relaksacji.
            </p>
            <Link href={"/animaloterapia"}>
              <Button className="bg-[#F48467] hover:bg-[#F48467]/80 text-white font-semibold tracking-tighter">
                Dowiedz się więcej o Animaloterapii
              </Button>
            </Link>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default LusiaITrusia;
