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

const Daisy = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <Card className="flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image
            src="/assets/pupile/piesek.jpg"
            alt="Daisy the therapy dog"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold tracking-tighter mb-2">
              Poznaj Daisy
            </CardTitle>
            <CardDescription className="text-lg mb-4 tracking-tighter">
              Nasz wyjątkowy piesek terapeutyczny
            </CardDescription>
          </CardHeader>
          <CardContent className=" font-medium tracking-tight">
            <p className="mb-4">
              Daisy to nasza ukochana suczka, która pełni rolę psa
              terapeutycznego. Jej łagodne usposobienie i empatyczna natura
              sprawiają, że jest idealnym towarzyszem w sesjach terapeutycznych.
            </p>
            <p className="mb-4">Jako pies terapeutyczny, Daisy pomaga w:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Redukcji stresu i lęku</li>
              <li>Poprawie nastroju i samopoczucia</li>
              <li>Zwiększeniu motywacji do ćwiczeń</li>
              <li>Rozwijaniu umiejętności społecznych</li>
            </ul>
            <Link href={"/#dogoterapia"}>
              <Button className="bg-[#F48467] hover:bg-[#F48467]/80 text-white">
                Dowiedz się więcej o Dogoterapii
              </Button>
            </Link>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Daisy;
