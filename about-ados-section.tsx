import { Button } from "@/components/ui/button"

export default function AboutAdosSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-yellow-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-800 md:text-4xl lg:text-5xl">
            Czym jest{" "}
            <span className="relative inline-block text-blue-600">
              ADOS-2
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
                height="15"
              >
                <path d="M0,15 C30,5 70,5 100,15" fill="none" stroke="#fde047" strokeWidth="5"></path>
              </svg>
            </span>
            ?
          </h2>
          <p className="text-lg text-slate-600 md:text-xl">
            Poznaj złoty standard w diagnostyce zaburzeń ze spektrum autyzmu
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column - main description */}
          <div className="flex flex-col space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <p className="text-lg leading-relaxed text-slate-700">
                <span className="font-semibold text-blue-600">ADOS-2</span> (Autism Diagnostic Observation Schedule –
                Second Edition) to jedno z najważniejszych narzędzi do diagnozy zaburzeń ze spektrum autyzmu. Zostało
                opracowane z myślą o tym, by w sposób standaryzowany i obiektywny ocenić zachowania charakterystyczne
                dla osób w spektrum – niezależnie od ich wieku czy poziomu komunikacji.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6 shadow-md">
              <h3 className="mb-4 flex items-center text-xl font-bold text-slate-800">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                W praktyce
              </h3>
              <p className="leading-relaxed text-slate-700">
                Badanie ADOS-2 to spotkanie ze specjalistą, podczas którego dziecko (lub dorosły) bierze udział w
                zaplanowanych zabawach lub rozmowach. Diagnosta uważnie obserwuje m.in. sposób porozumiewania się,
                reagowania na drugą osobę, sposób zabawy czy obecność nietypowych zachowań.
              </p>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-6 shadow-md">
              <h3 className="mb-4 flex items-center text-xl font-bold text-slate-800">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                To ważne
              </h3>
              <p className="leading-relaxed text-slate-700">
                ADOS-2 nie polega na „sprawdzaniu wiedzy" ani na testowaniu dziecka. Ma formę swobodnej interakcji,
                która pozwala specjaliście zobaczyć, jak dana osoba funkcjonuje społecznie i komunikacyjnie w sytuacji
                przypominającej codzienne życie.
              </p>
            </div>
          </div>

          {/* Right column - visual and additional info */}
          <div className="flex flex-col space-y-6">
            {/* Visual representation */}
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-6 shadow-md">
              <div className="relative h-[250px] w-full">
                {/* Central element */}
                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-lg">
                  <div className="h-24 w-24 rounded-full bg-blue-500 p-2">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                      <span className="text-2xl font-bold text-blue-600">ADOS-2</span>
                    </div>
                  </div>
                </div>

                {/* Connected elements */}
                <div className="absolute left-1/4 top-1/4 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-green-100 shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute left-3/4 top-1/4 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-yellow-100 shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-1/4 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-red-100 shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-3/4 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-purple-100 shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 250">
                  <line x1="200" y1="125" x2="100" y2="62.5" stroke="#d1fae5" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="200" y1="125" x2="300" y2="62.5" stroke="#fef9c3" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="200" y1="125" x2="100" y2="187.5" stroke="#fee2e2" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="200" y1="125" x2="300" y2="187.5" stroke="#f3e8ff" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>

            {/* Golden standard info */}
            <div className="rounded-2xl bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">„Złoty standard" w diagnozie</h3>
              </div>
              <p className="leading-relaxed text-slate-700">
                ADOS-2 jest nazywane „złotym standardem" w diagnozie autyzmu – bo działa według jasno określonych zasad,
                które pozwalają wychwycić nawet subtelne objawy i porównać je do typowego rozwoju. Badanie może być
                przeprowadzane już od 12. miesiąca życia, a także u młodzieży i dorosłych.
              </p>
            </div>

            {/* Age range info */}
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-slate-800">Dla kogo?</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center rounded-full bg-blue-100 px-4 py-2">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                    1+
                  </span>
                  <span className="text-sm font-medium text-slate-700">Małe dzieci</span>
                </div>

                <div className="flex items-center rounded-full bg-green-100 px-4 py-2">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                    5+
                  </span>
                  <span className="text-sm font-medium text-slate-700">Dzieci w wieku szkolnym</span>
                </div>

                <div className="flex items-center rounded-full bg-purple-100 px-4 py-2">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                    12+
                  </span>
                  <span className="text-sm font-medium text-slate-700">Młodzież</span>
                </div>

                <div className="flex items-center rounded-full bg-orange-100 px-4 py-2">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                    18+
                  </span>
                  <span className="text-sm font-medium text-slate-700">Dorośli</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Button size="lg" className="bg-blue-600 text-lg text-white hover:bg-blue-700">
            Umów badanie ADOS-2
          </Button>
        </div>
      </div>
    </section>
  )
}

