import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Ear } from "lucide-react";

export default function LogopedycznaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <section className="relative bg-indigo-900 py-20 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?key=speech-pattern"
            alt="Tło Diagnoza Logopedyczna"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <Link
            href="/"
            className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do strony głównej
          </Link>

          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 text-indigo-900 md:h-24 md:w-24">
              <Ear className="h-10 w-10 md:h-12 md:w-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Diagnoza Logopedyczna
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-indigo-100">
                Kompleksowa ocena rozwoju mowy i komunikacji, identyfikacja
                zaburzeń artykulacyjnych oraz planowanie terapii.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-xl bg-indigo-50 p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">
                Czym jest diagnoza logopedyczna?
              </h2>
              <p className="text-gray-700">
                Diagnoza logopedyczna to kompleksowa ocena rozwoju mowy i
                komunikacji dziecka. Podczas diagnozy logopeda ocenia
                artykulację, rozumienie mowy, zasób słownictwa, budowę i
                sprawność narządów mowy oraz inne aspekty komunikacji. Na
                podstawie diagnozy logopeda określa, czy rozwój mowy przebiega
                prawidłowo, a jeśli występują zaburzenia, planuje odpowiednią
                terapię.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-indigo-900">
                Jak przebiega diagnoza logopedyczna?
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-gray-700">
                    Diagnoza logopedyczna rozpoczyna się od wywiadu z rodzicami,
                    podczas którego logopeda zbiera informacje o rozwoju
                    dziecka, jego historii medycznej i ewentualnych problemach z
                    mową.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Następnie logopeda przeprowadza badanie, które obejmuje
                    ocenę budowy i sprawności narządów mowy, ocenę artykulacji
                    głosek, badanie słuchu fonematycznego, ocenę rozumienia mowy
                    i zdolności komunikacyjnych.
                  </p>
                  <p className="text-gray-700">
                    Po zakończeniu badania, logopeda omawia wyniki z rodzicami,
                    przedstawia diagnozę i proponuje plan terapii, jeśli jest
                    ona konieczna.
                  </p>
                </div>
                <div className="relative h-64 overflow-hidden rounded-xl md:h-auto">
                  <Image
                    src="/placeholder.svg?key=speech-therapy-session"
                    alt="Sesja diagnozy logopedycznej"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-indigo-900">
                Kiedy warto zgłosić się na diagnozę logopedyczną?
              </h2>
              <div className="grid gap-4">
                {indications.map((indication, index) => (
                  <div
                    key={index}
                    className="flex items-start rounded-lg bg-gray-50 p-4 shadow-sm"
                  >
                    <CheckCircle className="mr-4 h-6 w-6 flex-shrink-0 text-green-500" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {indication.title}
                      </h3>
                      <p className="text-gray-700">{indication.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 rounded-xl bg-indigo-900 p-8 text-white">
              <h2 className="mb-4 text-2xl font-bold">
                Umów diagnozę logopedyczną
              </h2>
              <p className="mb-6">
                Skontaktuj się z nami, aby umówić diagnozę logopedyczną dla
                Twojego dziecka. Nasi specjaliści odpowiedzą na wszystkie Twoje
                pytania i pomogą w wyborze najlepszego terminu.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  size="lg"
                  className="bg-amber-400 text-indigo-900 hover:bg-amber-500"
                >
                  Umów wizytę
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Skontaktuj się z nami
                </Button>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-indigo-900">
                Często zadawane pytania
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 p-6"
                  >
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-indigo-950 py-10 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold">Centrum Integra</h3>
              <p className="mt-1 text-indigo-200">
                Wspieramy rozwój dzieci z pasją
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/" className="transition-colors hover:text-amber-400">
                Strona główna
              </Link>
              <Link href="#" className="transition-colors hover:text-amber-400">
                O nas
              </Link>
              <Link href="#" className="transition-colors hover:text-amber-400">
                Usługi
              </Link>
              <Link href="#" className="transition-colors hover:text-amber-400">
                Kontakt
              </Link>
            </div>
          </div>
          <div className="mt-10 border-t border-indigo-900 pt-6 text-center text-sm text-indigo-300">
            <p>
              © {new Date().getFullYear()} Centrum Integra. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const indications = [
  {
    title: "Opóźniony rozwój mowy",
    description:
      "Dziecko nie gaworzy, nie wypowiada pierwszych słów lub zdań w odpowiednim wieku.",
  },
  {
    title: "Nieprawidłowa wymowa głosek",
    description:
      "Dziecko nieprawidłowo wymawia głoski lub zastępuje je innymi.",
  },
  {
    title: "Trudności z rozumieniem mowy",
    description: "Dziecko ma problemy z rozumieniem poleceń lub pytań.",
  },
  {
    title: "Jąkanie lub niepłynność mowy",
    description:
      "Dziecko powtarza sylaby, przedłuża głoski lub ma bloki w mowie.",
  },
  {
    title: "Problemy z budową lub funkcjonowaniem narządów mowy",
    description:
      "Dziecko ma nieprawidłową budowę języka, podniebienia lub inne anomalie anatomiczne.",
  },
];

const faqs = [
  {
    question: "W jakim wieku najlepiej zgłosić się na diagnozę logopedyczną?",
    answer:
      "Pierwszą diagnozę logopedyczną warto przeprowadzić już około 2-3 roku życia, jeśli zauważamy jakiekolwiek niepokojące objawy. Jednak w przypadku wyraźnych problemów z rozwojem mowy, można zgłosić się wcześniej. Regularne kontrole logopedyczne są zalecane dla wszystkich dzieci w wieku przedszkolnym.",
  },
  {
    question: "Jak długo trwa diagnoza logopedyczna?",
    answer:
      "Pierwsza wizyta diagnostyczna trwa zwykle około 45-60 minut. W niektórych przypadkach, szczególnie u dzieci z bardziej złożonymi problemami, diagnoza może wymagać kilku spotkań.",
  },
  {
    question: "Czy rodzice powinni być obecni podczas diagnozy?",
    answer:
      "Tak, obecność rodziców podczas diagnozy logopedycznej jest wskazana, szczególnie w przypadku młodszych dzieci. Rodzice mogą dostarczyć ważnych informacji o dziecku oraz obserwować, jak logopeda pracuje z dzieckiem, co może być pomocne w późniejszej terapii domowej.",
  },
  {
    question: "Co zabrać ze sobą na diagnozę logopedyczną?",
    answer:
      "Warto zabrać ze sobą dokumentację medyczną dziecka, szczególnie jeśli dziecko było diagnozowane przez innych specjalistów lub ma zdiagnozowane inne zaburzenia. Przydatne mogą być również wyniki badań słuchu, jeśli takie były przeprowadzane.",
  },
];
