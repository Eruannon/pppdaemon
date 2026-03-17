import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HiCursorClick } from "react-icons/hi";
import Link from "next/link";
import LazyVideo from "@/components/ui/lazy-video";

export default function ThreeCardsRow() {
  const cards = [
    {
      video: "/assets/animaloterapia/kroliki.mp4",
      poster: "/assets/animaloterapia/krolik-animal.jpg",
    },
    {
      video: "/assets/galeria-hipoterapia/hipoterapia-filmik-3.mp4",
      poster: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-1.JPG",
    },
    {
      video: "/assets/galeria-dogoterapia/dogoterapia-filmik-1.mp4",
      poster: "/assets/galeria-dogoterapia/dogoterapia-zdjecie-1.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h2 className="text-center font-semibold text-5xl tracking-tighter text-zinc-800 mb-8 mt-6">
        To co nas wyróżnia
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col rounded-xl overflow-hidden relative"
          >
            
            <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
              <LazyVideo
                src={card.video}
                poster={card.poster}
                className="absolute inset-0 min-w-full min-h-full w-auto h-auto object-cover scale-[1.5]"
                autoPlay
              />
            </div>

            <div className="flex flex-col h-full relative z-10 bg-white/20 transition-all duration-300 ease-out">
              <CardContent className="flex-grow min-h-[180px] order-1">
                
              </CardContent>
              <div className="mt-auto order-2 bg-zinc-700/70">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl tracking-tight text-white">
                    {index === 0
                      ? "Animaloterapia - Lusia i Trusia"
                      : index === 1
                      ? "Hipoterapia"
                      : "Dogoterapia - Daisy"}
                  </CardTitle>
                  <CardDescription className="mb-[-30px] text-white font-semibold">
                    {index === 0
                      ? "Nasze króliczki terapeutyczne"
                      : index === 1
                      ? "Pod Magnolią"
                      : "Nasz pies terapeutyczny"}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <div className="relative w-full">
                    <HiCursorClick className="absolute -bottom-3 left-20 text-white z-20 text-2xl" />
                    <Link
                      href={
                        index === 0
                          ? "/lusia-i-trusia"
                          : index === 1
                          ? "/hipoterapia"
                          : "/daisy"
                      }
                    >
                      <Button className="w-fit text-sm py-2 px-4 rounded-full bg-[#A84A97] hover:bg-[#c869b7] tracking-tighter font-semibold text-white z-10 relative">
                        {index === 0
                          ? "Poznaj Lusię i Trusię"
                          : index === 1
                          ? "Dowiedz się więcej o hipoterapii"
                          : "Poznaj Daisy"}
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
