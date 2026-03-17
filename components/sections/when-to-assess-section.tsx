export default function WhenToAssessSection() {
  return (
    <div className="py-24 bg-gradient-to-b from-slate-50 to-indigo-50">
      
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
          Wskazania do badania
        </span>
        <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
          <span className="inline-block">🧩 Kiedy warto wykonać ADOS-2?</span>
        </h2>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Nie każde opóźnienie rozwoju oznacza autyzm. Ale są sytuacje, w których warto wykonać ADOS-2, by zyskać
          jasność i – jeśli potrzeba – szybko rozpocząć odpowiednie wsparcie.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Warto rozważyć badanie, jeśli:
            </h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start rounded-lg bg-slate-50 p-4 transition-colors hover:bg-indigo-50">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <span className="text-slate-700">dziecko nie reaguje na imię, unika kontaktu wzrokowego</span>
                </div>

                <div className="flex items-start rounded-lg bg-slate-50 p-4 transition-colors hover:bg-indigo-50">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <span className="text-slate-700">mówi mało lub wcale, albo przestało mówić</span>
                </div>

                <div className="flex items-start rounded-lg bg-slate-50 p-4 transition-colors hover:bg-indigo-50">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <span className="text-slate-700">nie wskazuje palcem, nie pokazuje, czym się interesuje</span>
                </div>

                <div className="flex items-start rounded-lg bg-slate-50 p-4 transition-colors hover:bg-indigo-50">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <span className="text-slate-700">ma trudności z naśladowaniem, nie inicjuje wspólnej zabawy</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start rounded-lg bg-slate-50 p-4 transition-colors hover:bg-indigo-50">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <span className="text-slate-700">
                    bawi się nietypowo – np. układa zabawki w rządku, nie odgrywa scenek
                  </span>
                </div>

                <div className="flex items-start rounded-lg bg-slate-50 p-4 transition-colors hover:bg-indigo-50">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <span className="text-slate-700">nie interesuje się rówieśnikami, woli bawić się samo</span>
                </div>

                <div className="flex items-start rounded-lg bg-slate-50 p-4 transition-colors hover:bg-indigo-50">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <span className="text-slate-700">
                    występują powtarzalne ruchy (np. machanie rękami, kręcenie przedmiotami)
                  </span>
                </div>

                <div className="flex items-start rounded-lg bg-slate-50 p-4 transition-colors hover:bg-indigo-50">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                  </div>
                  <span className="text-slate-700">reaguje bardzo silnie na zmiany lub ma trudności sensoryczne</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-indigo-50 p-6 border-l-4 border-indigo-500">
              <p className="text-slate-700">
                To tylko przykłady – nawet jeśli pojawia się tylko część z nich, warto skonsultować się ze specjalistą.
                Czasem objawy są łagodne, ale utrudniają dziecku funkcjonowanie w grupie lub naukę nowych rzeczy.
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Badanie można wykonać:
              </h3>

              <div className="space-y-6">
                <div className="flex items-center p-4 rounded-lg bg-blue-50 transition-colors hover:bg-blue-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mr-4 shadow-md">
                    <span className="text-xl font-bold text-white">12m+</span>
                  </div>
                  <p className="text-slate-700">już od 12. miesiąca życia</p>
                </div>

                <div className="flex items-center p-4 rounded-lg bg-blue-50 transition-colors hover:bg-blue-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mr-4 shadow-md">
                    <span className="text-xl font-bold text-white">3-12</span>
                  </div>
                  <p className="text-slate-700">u dzieci przedszkolnych i szkolnych</p>
                </div>

                <div className="flex items-center p-4 rounded-lg bg-blue-50 transition-colors hover:bg-blue-100">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mr-4 shadow-md">
                    <span className="text-xl font-bold text-white">13+</span>
                  </div>
                  <p className="text-slate-700">
                    u nastolatków i dorosłych – zwłaszcza gdy diagnoza nie została wcześniej postawiona
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Wczesna interwencja ma znaczenie</h3>
              </div>

              <p className="text-indigo-100 mb-8 text-lg">
                Im wcześniej wykryte trudności, tym szybciej można pomóc dziecku rozwinąć jego potencjał. ADOS-2 to
                pierwszy krok – nie diagnozuje "na zapas", ale wtedy, gdy pojawiają się konkretne sygnały.
              </p>

              <div className="mt-6">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-indigo-700 transition-colors hover:bg-indigo-50 shadow-md">
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
                  Umów konsultację
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-16 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
          <div className="border-b border-slate-100 bg-gradient-to-r from-purple-500 to-pink-500 py-1"></div>
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600"
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
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Masz wątpliwości?</h3>
                <p className="text-slate-700 text-lg mb-6">
                  Jeśli nie jesteś pewien/pewna, czy Twoje dziecko potrzebuje badania ADOS-2, możesz skorzystać z
                  bezpłatnej konsultacji wstępnej. Nasi specjaliści pomogą ocenić, czy istnieją przesłanki do
                  przeprowadzenia pełnej diagnostyki.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">Bez zobowiązań</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">Profesjonalna porada</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">Szybki termin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

