export default function ResultsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
            Interpretacja wyników
          </span>
          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Co daje wynik ADOS-2 – czy to diagnoza?
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Wynik ADOS-2 to bardzo ważna część procesu diagnostycznego, ale sam w sobie nie jest pełną diagnozą
            medyczną. To standaryzowana obserwacja, która pokazuje, czy i w jakim stopniu występują cechy ze spektrum
            autyzmu – oraz w jakich obszarach są najbardziej widoczne.
          </p>
        </div>

        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
              <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-500 to-purple-500 py-1"></div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-indigo-600 mr-3"
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
                  Co dokładnie zawiera wynik?
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 transition-transform hover:scale-[1.02]">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-700">
                        punktację w określonych obszarach (komunikacja, interakcje społeczne, zachowania powtarzalne)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 transition-transform hover:scale-[1.02]">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
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
                    <div>
                      <p className="text-slate-700">
                        wynik ogólny – czy mieści się w zakresie charakterystycznym dla spektrum autyzmu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 transition-transform hover:scale-[1.02]">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-700">
                        w wielu przypadkach tzw. wynik porównawczy (skala nasilenia cech ASD od 1 do 10)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 transition-transform hover:scale-[1.02]">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-700">
                        opis jakościowy – co dokładnie zaobserwowano u dziecka i jak to rozumieć
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
              <div className="border-b border-slate-100 bg-gradient-to-r from-blue-500 to-indigo-500 py-1"></div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
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
                  Czy to oznacza diagnozę autyzmu?
                </h3>

                <div className="mb-8 rounded-xl bg-blue-50 p-6 border-l-4 border-blue-500">
                  <p className="text-slate-700 flex items-start">
                    <span className="inline-block mr-3 text-blue-600 font-bold">🔸</span>
                    <span>
                      Nie zawsze. Diagnoza zaburzeń ze spektrum autyzmu powinna być postawiona na podstawie kilku źródeł
                      informacji.
                    </span>
                  </p>
                </div>

                <p className="text-slate-700 mb-6">Pełna diagnoza powinna uwzględniać:</p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">wywiad z rodzicami</span>
                  </li>

                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">obserwacje w różnych sytuacjach</span>
                  </li>

                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">testy rozwoju poznawczego i językowego</span>
                  </li>

                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">
                      często również konsultacje lekarskie (np. psychiatra dziecięcy)
                    </span>
                  </li>
                </ul>

                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                  <p className="text-slate-700 flex items-start mb-4">
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
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">
                      ADOS-2 jest jednak kluczowym narzędziem, które bardzo mocno wspiera decyzję diagnostyczną. W
                      praktyce – jeśli wynik wskazuje na spektrum, to zazwyczaj jest to zgodne z ostateczną diagnozą.
                      Ale ostateczne rozpoznanie stawia specjalista, biorąc pod uwagę pełny obraz funkcjonowania
                      dziecka.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl">
            <div className="p-8 md:p-10">
              <div className="flex items-start mb-8">
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

              <p className="text-indigo-100 mb-8 text-lg">
                Po badaniu ADOS-2 rodzic otrzymuje szczegółową opinię, w której:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-transform hover:scale-[1.03]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mb-4">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-white">opisujemy obserwacje i wynik punktowy</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-transform hover:scale-[1.03]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mb-4">
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
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-white">wyjaśniamy, co on oznacza w praktyce</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-transform hover:scale-[1.03]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mb-4">
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
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <p className="text-white">
                    sugerujemy dalsze kroki – np. poszerzoną diagnozę, konsultację psychiatryczną lub rozpoczęcie
                    terapii
                  </p>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-indigo-700 transition-transform hover:scale-[1.02] shadow-md">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Skontaktuj się, aby uzyskać więcej informacji
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

