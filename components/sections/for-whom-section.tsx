export default function ForWhomSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            Dostępność badania
          </span>
          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Dla kogo przeznaczone jest badanie ADOS-2?
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            ADOS-2 można przeprowadzić u osób w bardzo różnym wieku i na różnych etapach rozwoju – od maluchów, które
            dopiero zaczęły chodzić, aż po dorosłych. To możliwe dzięki temu, że badanie występuje w kilku wersjach
            (tzw. modułach), dobieranych nie według wieku, ale według poziomu rozwoju mowy i komunikacji.
          </p>
        </div>

        
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Moduły badania ADOS-2:
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="border-b-4 border-blue-400"></div>
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-xl font-bold text-blue-600">T</span>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">Moduł wczesnodziecięcy</h4>
                    <p className="text-slate-600">
                      Dla dzieci od 12 do 30 miesięcy, które jeszcze nie mówią lub dopiero zaczynają.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="border-b-4 border-indigo-400"></div>
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                      <span className="text-xl font-bold text-indigo-600">1</span>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">Moduł 1</h4>
                    <p className="text-slate-600">Dla dzieci mówiących niewiele lub tylko pojedyncze słowa.</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="border-b-4 border-purple-400"></div>
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <span className="text-xl font-bold text-purple-600">2</span>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">Moduł 2</h4>
                    <p className="text-slate-600">
                      Dla dzieci mówiących prostymi zdaniami, ale jeszcze nie w pełni płynnie.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="border-b-4 border-pink-400"></div>
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                      <span className="text-xl font-bold text-pink-600">3</span>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">Moduł 3</h4>
                    <p className="text-slate-600">Dla dzieci i nastolatków, które mówią płynnie.</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-rose-50 to-orange-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="border-b-4 border-rose-400"></div>
                  <div className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                      <span className="text-xl font-bold text-rose-600">4</span>
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">Moduł 4</h4>
                    <p className="text-slate-600">Dla młodzieży i dorosłych, posługujących się płynnym językiem.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-blue-50 p-6 border-l-4 border-blue-500">
                <p className="text-slate-700 flex items-start">
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Dzięki temu ADOS-2 sprawdza się zarówno u dzieci niemówiących, jak i u osób wysoko funkcjonujących,
                    u których objawy autyzmu są mniej oczywiste.
                  </span>
                </p>
              </div>
            </div>
          </div>

          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
              <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-500 to-purple-500 py-1"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Kto może skorzystać z badania?
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start p-4 rounded-lg bg-slate-50 transition-colors hover:bg-indigo-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">
                      niemowlęta od ok. 12. miesiąca życia (gdy już samodzielnie chodzą),
                    </span>
                  </li>

                  <li className="flex items-start p-4 rounded-lg bg-slate-50 transition-colors hover:bg-indigo-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">dzieci w wieku przedszkolnym i szkolnym,</span>
                  </li>

                  <li className="flex items-start p-4 rounded-lg bg-slate-50 transition-colors hover:bg-indigo-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">
                      nastolatki i osoby dorosłe – także te, które wcześniej nie miały postawionej diagnozy,
                    </span>
                  </li>

                  <li className="flex items-start p-4 rounded-lg bg-slate-50 transition-colors hover:bg-indigo-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">
                      osoby mówiące bardzo mało lub niewerbalne – również kwalifikują się do badania.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-600"
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
                  <h3 className="text-2xl font-bold text-slate-900">Ważne:</h3>
                </div>

                <p className="text-slate-700 text-lg mb-6">
                  ADOS-2 nie jest odpowiednie dla osób z głębokimi zaburzeniami wzroku, słuchu lub dużą
                  niepełnosprawnością ruchową (np. uniemożliwiającą manipulowanie przedmiotami). W takich przypadkach
                  specjalista może zaproponować inną formę diagnozy.
                </p>

                <div className="mt-6 bg-white/70 rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    Potrzebujesz porady?
                  </h4>
                  <p className="text-slate-700">
                    Jeśli nie jesteś pewien/pewna, czy ADOS-2 będzie odpowiednie w przypadku Twojego dziecka, skontaktuj
                    się z nami. Pomożemy dobrać najlepszą formę diagnozy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="border-b border-slate-100 bg-gradient-to-r from-green-500 to-teal-500 py-1"></div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Badanie ADOS-2 dla różnych grup wiekowych
              </h3>

              <div className="relative">
                
                <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 transform bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"></div>

                
                <div className="relative grid gap-4 md:grid-cols-4">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg z-10">
                      <div className="text-center">
                        <div className="text-xs font-medium">od</div>
                        <div className="text-xl font-bold">12m</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-blue-50 p-4 text-center shadow-md w-full">
                      <h4 className="font-semibold text-slate-900 mb-1">Niemowlęta</h4>
                      <p className="text-sm text-slate-600">Moduł T</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg z-10">
                      <div className="text-center">
                        <div className="text-xl font-bold">2-5</div>
                        <div className="text-xs font-medium">lat</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-indigo-50 p-4 text-center shadow-md w-full">
                      <h4 className="font-semibold text-slate-900 mb-1">Przedszkolaki</h4>
                      <p className="text-sm text-slate-600">Moduły 1-3</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg z-10">
                      <div className="text-center">
                        <div className="text-xl font-bold">6-12</div>
                        <div className="text-xs font-medium">lat</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-purple-50 p-4 text-center shadow-md w-full">
                      <h4 className="font-semibold text-slate-900 mb-1">Dzieci szkolne</h4>
                      <p className="text-sm text-slate-600">Moduły 2-3</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg z-10">
                      <div className="text-center">
                        <div className="text-xl font-bold">13+</div>
                        <div className="text-xs font-medium">lat</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-pink-50 p-4 text-center shadow-md w-full">
                      <h4 className="font-semibold text-slate-900 mb-1">Młodzież i dorośli</h4>
                      <p className="text-sm text-slate-600">Moduł 4</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-medium text-white transition-transform hover:scale-[1.02] shadow-md">
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
                  Umów badanie odpowiednie dla Twojego dziecka
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

