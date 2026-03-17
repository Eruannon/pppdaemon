







































































































import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HighlightedText = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 text-white bg-[#921d7f]/90 rounded-full text-sm font-medium">
    {children}
  </span>
);

export default function WelcomeSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-800" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tighter text-gray-900 sm:text-6xl mb-4">
            Witaj w Poradni <span className="text-[#921d7f]">Magnolia</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Miejsce, gdzie profesjonalna pomoc łączy się z empatią i
            zrozumieniem
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 mt-16">
          <div className="space-y-8">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-semibold text-gray-900">
                O Poradni
              </h2>
              <p className="text-gray-600 pt-10 leading-relaxed">
                Poradnia Psychologiczno-Pedagogiczna MAGNOLIA, to placówka
                bliska problemom <HighlightedText>dzieci</HighlightedText>,{" "}
                <HighlightedText>młodzieży</HighlightedText> oraz{" "}
                <HighlightedText>osób dorosłych</HighlightedText>.
              </p>
              <p className="text-gray-600 leading-relaxed pt-8">
                Realizujemy <HighlightedText>darmowe zajęcia</HighlightedText>{" "}
                Wczesnego Wspomagania Rozwoju Dziecka na podstawie opinii o
                potrzebie WWRD.
                <br />
                <br /> Oferujemy szeroki wachlarz zajęć dydaktycznych i
                terapeutycznych dla dzieci i młodzieży. Prowadzimy wsparcie
                psychologiczne osób dorosłych.
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed">
              Z pasją i oddaniem realizujemy zadania z zakresu pomocy rodzinie,
              parom planującym wspólną przyszłość lub już ją tworzących, a także
              osobom zmagającym się z uzależnieniami behawioralnymi
              (uzależnienie od gier komputerowych/sieciowych, mediów
              społecznościowych, portali randkowych/sex chatów, gier losowych,
              zakupów). <br />
              <br /> Prowadzimy terapie psychologiczne zarówno stacjonarnie jak
              i on-line. Przeprowadzamy diagnozy psychologiczne osób w każdym
              wieku.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#921d7f] hover:bg-[#921d7f]/90 text-white rounded-full"
          >
            <Link href="/galeria">Zobacz naszą placówkę</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="ghost"
            className="group text-gray-600 hover:text-[#921d7f] hover:bg-[#921d7f]/5 rounded-full"
          >
            <Link href="/kadra" className="flex items-center">
              Poznaj naszych specjalistów
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
