import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function AnimalTherapyPage() {
  const popularTerapies = [
    {
      name: "Dogoterapia",
      description:
        "Terapia z udziałem psów. Wspiera rozwój emocjonalny i fizyczny, szczególnie u dzieci i osób z niepełnosprawnościami.",
      image: "/assets/animaloterapia/pies-animal.jpg",
    },
    {
      name: "Królikoterapia",
      description:
        "Terapia z udziałem królików, która pomaga w redukcji stresu oraz rozwijaniu empatii.",
      image: "/assets/animaloterapia/krolik-animal.jpg",
    },

    {
      name: "Alpakoterapia",
      description:
        "Terapia z udziałem alpak. Wspiera relaksację, budowanie zaufania oraz poprawę samopoczucia.",
      image: "/assets/animaloterapia/alpaka.jpg",
    },
    {
      name: "Hipoterapia",
      description:
        "Praca z końmi, która wspiera równowagę, koordynację ruchową i rozwój sensoryczny.",
      image: "/assets/animaloterapia/kon-animal.jpg",
    },
    {
      name: "Felinoterapia",
      description:
        "Terapia z kotami, często stosowana dla redukcji stresu i poprawy samopoczucia psychicznego.",
      image: "/assets/animaloterapia/kot-animal.jpg",
    },
    {
      name: "Delfinoterapia",
      description:
        "Terapia z delfinami, stosowana głównie przy zaburzeniach neurologicznych i emocjonalnych.",
      image: "/assets/animaloterapia/delfin-animal.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <main>
          
          
          <section className="mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
                  Animaloterapia – skąd ten pomysł
                </h2>
                <p className="text-lg mb-4">
                  Prekursorem animaloterapii był amerykański psycholog i
                  psychoterapeuta Boris Levinson, a głównym bohaterem jego
                  przypadkowego odkrycia był autystyczny chłopiec oraz pies o
                  imieniu Jingles.
                </p>
                <p className="text-lg mb-4">
                  Levinson zaobserwował terapeutyczny wpływ zwierząt
                  przypadkowo, gdy podczas sesji z dzieckiem z autyzmem u stóp
                  psychoterapeuty leżał jego pies.
                </p>
              </div>
              <div className="flex-1">
                <video
                  src="/assets/animaloterapia/krolik.mp4"
                  width={400}
                  height={300}
                  autoPlay
                  muted
                  loop
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>

          
          <section className="mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <video
                  src="/assets/animaloterapia/krolik2.mp4"
                  width={400}
                  height={300}
                  autoPlay
                  muted
                  loop
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1">
                {/* <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
                  Animaloterapia – skąd ten pomysł (część 2)
                </h2> */}
                <p className="text-lg mb-4">
                  Nagle chłopiec, który wcześniej nie nawiązywał kontaktu z
                  terapeutą, był zamknięty na wszelkie bodźce płynące z
                  otoczenia, zaczął niespodziewanie, spontanicznie rozmawiać i
                  bawić się z psem.
                </p>
                <p className="text-lg mb-4">
                  Jingles nie był żadnym specjalnym czworonogiem, nie przeszedł
                  specjalistycznego szkolenia, nie był też psem rasowym. Był
                  najzwyklejszym przyjaznym kundelkiem o wielkim sercu.
                </p>
                <p className="text-lg mb-4">
                  Levinson bardzo szybko zrozumiał, że w przypadku chłopca pies
                  działa jak „pomost komunikacyjny” i na sobie tylko znany
                  sposób pomaga dziecku w przełamywaniu barier emocjonalnych i
                  społecznych.
                </p>
              </div>
            </div>
          </section>

          
          <section className="mb-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                {/* <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
                  Animaloterapia – skąd ten pomysł (część 3)
                </h2> */}
                <p className="text-lg mb-4">
                  Po tym odkryciu dziecięcy psychoterapeuta zaczął celowo
                  wykorzystywać obecność zwierząt w terapii dzieci z
                  trudnościami emocjonalnymi i społecznymi. Przeprowadzał też
                  liczne obserwacje i eksperymenty w pracy z dziećmi z autyzmem,
                  lękiem, depresją i zaburzeniami zachowania. Zwykle z ogromnym
                  powodzeniem.
                </p>
                <p className="text-lg">
                  Levinson przekonywał więc, że zwierzęta mogą zmniejszać opór
                  terapeutyczny, zwłaszcza u dzieci z trudnościami w
                  komunikacji. Psycholog wkrótce też wprowadził termin „pet
                  therapy” (terapia z udziałem zwierząt), który stał się
                  początkiem szerzej zakrojonych badań nad wpływem zwierząt na
                  zdrowie psychiczne.
                </p>
              </div>
              <div className="flex-1">
                <video
                  src="/assets/animaloterapia/krolik3.mp4"
                  width={400}
                  height={300}
                  autoPlay
                  muted
                  loop
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>

          <Separator className="my-16" />

          
          <section className="mb-24">
            <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
              Popularne animaloterapie
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {popularTerapies.map((therapy, index) => (
                <div key={index} className="border rounded-lg p-4 shadow-md">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={therapy.image || "/placeholder.svg"}
                      alt={therapy.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-700 tracking-tighter">
                    {therapy.name}
                  </h3>
                  <p className=" font-medium tracking-tight">
                    {therapy.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-16" />

          <section className="mb-24">
            <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
              Dla kogo jest przeznaczona?
            </h2>
            <ul className="list-disc list-inside text-lg space-y-4">
              <li>Dzieci z autyzmem, ADHD lub zaburzeniami sensorycznymi</li>
              <li>Osoby starsze cierpiące na demencję lub depresję</li>
              <li>Pacjenci w procesie rehabilitacji ruchowej</li>
              <li>Osoby doświadczające silnego stresu, lęków czy traumy</li>
            </ul>
          </section>

          <Separator className="my-16" />

          <section className="mb-24">
            <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
              Korzyści animaloterapii
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Fizyczne",
                  benefits: [
                    "Poprawa koordynacji",
                    "Równowaga",
                    "Wzmocnienie siły mięśni",
                  ],
                },
                {
                  title: "Emocjonalne",
                  benefits: [
                    "Redukcja stresu",
                    "Poprawa nastroju",
                    "Budowanie poczucia bezpieczeństwa",
                  ],
                },
                {
                  title: "Społeczne",
                  benefits: [
                    "Rozwój umiejętności komunikacyjnych",
                    "Budowanie relacji z otoczeniem",
                  ],
                },
                {
                  title: "Psychiczne",
                  benefits: [
                    "Obniżenie poziomu lęku i depresji",
                    "Wsparcie w radzeniu sobie z emocjami",
                  ],
                },
              ].map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-700 tracking-tighter">
                    {category.title}
                  </h3>
                  <ul className="list-disc list-inside">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-16" />
          {/* 
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-zinc-800 tracking-tighter">
              Jak działa animaloterapia?
            </h2>
            <p className="text-lg">
              Zwierzęta wprowadzają atmosferę akceptacji, która sprzyja
              relaksowi i otwartości. Działania terapeutyczne są dostosowywane
              do indywidualnych potrzeb pacjenta. Sam kontakt ze zwierzęciem,
              głaskanie, zabawa czy wspólne ćwiczenia aktywują mechanizmy
              relaksacji i motywacji.
            </p>
          </section> */}
        </main>
      </div>
    </div>
  );
}
