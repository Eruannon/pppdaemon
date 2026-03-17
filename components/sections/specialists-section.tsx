export default function SpecialistsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
            Nasi specjaliści
          </span>
          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Kto przeprowadza badanie i jakie ma kwalifikacje?
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            ADOS-2 to narzędzie wymagające specjalistycznej wiedzy i przeszkolenia. Nie każdy psycholog czy terapeuta
            może je przeprowadzać – potrzebne są konkretne kwalifikacje oraz praktyczne umiejętności.
          </p>
        </div>

        
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="border-b border-slate-100 bg-gradient-to-r from-purple-500 to-pink-500 py-1"></div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-purple-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Badanie ADOS-2 może przeprowadzić wyłącznie osoba, która:
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">Certyfikowane szkolenie</h4>
                    <p className="text-slate-600">
                      ukończyła certyfikowane szkolenie ADOS-2 (organizowane przez uprawnione ośrodki)
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-purple-600"
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
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">Wykształcenie kierunkowe</h4>
                    <p className="text-slate-600">
                      ma wykształcenie kierunkowe – psycholog, psychiatra, pedagog specjalny itp.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">Doświadczenie praktyczne</h4>
                    <p className="text-slate-600">posiada doświadczenie w pracy z dziećmi lub osobami w spektrum</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">Umiejętność interpretacji</h4>
                    <p className="text-slate-600">
                      potrafi interpretować wyniki zgodnie ze standardami diagnostycznymi
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-purple-50 p-6 border-l-4 border-purple-500">
                <p className="text-slate-700 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5"
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
                  <span>
                    W praktyce najczęściej są to psycholodzy dziecięcy lub diagności specjalizujący się w ASD.
                  </span>
                </p>
              </div>
            </div>
          </div>

          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
              <div className="border-b border-slate-100 bg-gradient-to-r from-blue-500 to-indigo-500 py-1"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-blue-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Dlaczego to ważne?
                </h3>

                <p className="text-slate-700 mb-6">ADOS-2 opiera się na subtelnych obserwacjach. Specjalista musi:</p>

                <ul className="space-y-4">
                  <li className="flex items-start p-4 rounded-lg bg-slate-50 transition-colors hover:bg-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
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
                    <span className="text-slate-700">wiedzieć, na co zwracać uwagę,</span>
                  </li>

                  <li className="flex items-start p-4 rounded-lg bg-slate-50 transition-colors hover:bg-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                    <span className="text-slate-700">zachować neutralność i obiektywizm,</span>
                  </li>

                  <li className="flex items-start p-4 rounded-lg bg-slate-50 transition-colors hover:bg-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                    <span className="text-slate-700">właściwie dobrać moduł badania,</span>
                  </li>

                  <li className="flex items-start p-4 rounded-lg bg-slate-50 transition-colors hover:bg-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <span className="text-slate-700">
                      dokładnie zinterpretować wynik w odniesieniu do rozwoju dziecka.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-xl">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">W naszej poradni:</h3>
                </div>

                <p className="text-purple-100 mb-8 text-lg">
                  Badania przeprowadzają wyłącznie certyfikowani specjaliści z doświadczeniem w diagnozie spektrum
                  autyzmu. To osoby, które regularnie uczestniczą w szkoleniach, superwizjach i pracują z dziećmi o
                  różnych potrzebach rozwojowych.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                  <p className="text-white">
                    Dbamy o to, by każde badanie było nie tylko rzetelne, ale też prowadzone z uważnością, spokojem i
                    zrozumieniem – zarówno dla dziecka, jak i jego rodziców.
                  </p>
                </div>

                <div className="mt-6">
                  <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-purple-700 transition-transform hover:scale-[1.02] shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                    Poznaj naszych specjalistów
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mt-16 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-500 to-purple-500 py-1"></div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Nasz zespół diagnostyczny</h3>

              <div className="grid gap-8 md:grid-cols-3">
                
                <div className="group relative overflow-hidden rounded-xl bg-slate-50 p-6 transition-all hover:shadow-lg">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-50 transition-transform group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-indigo-100 shadow-md mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-full w-full text-indigo-300 p-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-1 text-center text-xl font-bold text-slate-900">dr Anna Kowalska</h4>
                    <p className="mb-4 text-center text-sm text-slate-500">
                      Psycholog dziecięcy, certyfikowany diagnosta ADOS-2
                    </p>
                    <div className="flex justify-center space-x-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                        10+ lat doświadczenia
                      </span>
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                        Superwizor
                      </span>
                    </div>
                    <p className="text-center text-slate-600">
                      Specjalistka w diagnozie dzieci w wieku przedszkolnym i wczesnoszkolnym.
                    </p>
                  </div>
                </div>

                
                <div className="group relative overflow-hidden rounded-xl bg-slate-50 p-6 transition-all hover:shadow-lg">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-50 transition-transform group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-blue-100 shadow-md mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-full w-full text-blue-300 p-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-1 text-center text-xl font-bold text-slate-900">mgr Piotr Nowak</h4>
                    <p className="mb-4 text-center text-sm text-slate-500">
                      Psycholog kliniczny, certyfikowany diagnosta ADOS-2
                    </p>
                    <div className="flex justify-center space-x-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        8+ lat doświadczenia
                      </span>
                      <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                        Terapeuta
                      </span>
                    </div>
                    <p className="text-center text-slate-600">
                      Specjalista w diagnozie nastolatków i młodych dorosłych.
                    </p>
                  </div>
                </div>

                
                <div className="group relative overflow-hidden rounded-xl bg-slate-50 p-6 transition-all hover:shadow-lg">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-50 transition-transform group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-purple-100 shadow-md mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-full w-full text-purple-300 p-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-1 text-center text-xl font-bold text-slate-900">mgr Joanna Wiśniewska</h4>
                    <p className="mb-4 text-center text-sm text-slate-500">
                      Pedagog specjalny, certyfikowany diagnosta ADOS-2
                    </p>
                    <div className="flex justify-center space-x-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                        12+ lat doświadczenia
                      </span>
                      <span className="inline-flex items-center rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800">
                        Szkoleniowiec
                      </span>
                    </div>
                    <p className="text-center text-slate-600">
                      Specjalistka w diagnozie małych dzieci (12-36 miesięcy).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-medium text-white transition-transform hover:scale-[1.02] shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Umów badanie z wybranym specjalistą
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

