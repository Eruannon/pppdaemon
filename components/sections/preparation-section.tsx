export default function PreparationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
            Praktyczne informacje
          </span>
          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Ile trwa badanie i jak się do niego przygotować?
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Badanie ADOS-2 to spokojne spotkanie, które nie wymaga specjalnego przygotowania. Warto jednak wiedzieć,
            czego się spodziewać i jak zadbać o komfort dziecka.
          </p>
        </div>

        
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="border-b border-slate-100 bg-gradient-to-r from-teal-500 to-emerald-500 py-1"></div>
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-emerald-100 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-teal-600"
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
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">⏱️ Czas trwania</h3>
                  <p className="text-slate-700 text-lg mb-6">
                    Cała wizyta związana z badaniem ADOS-2 trwa zazwyczaj od 1,5 do 2 godzin. Sama część obserwacyjna
                    (czyli kontakt dziecka z diagnostą) to ok. 30–60 minut – w zależności od wieku i tempa pracy.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2 mb-6">
                    <div className="bg-teal-50 rounded-xl p-6 transition-transform hover:scale-[1.02]">
                      <div className="flex items-center mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-teal-600"
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
                        <h4 className="font-semibold text-slate-800">Wywiad wstępny</h4>
                      </div>
                      <p className="text-slate-600">
                        Krótki wywiad z rodzicem na początku wizyty, dotyczący rozwoju dziecka i aktualnych trudności.
                      </p>
                    </div>

                    <div className="bg-teal-50 rounded-xl p-6 transition-transform hover:scale-[1.02]">
                      <div className="flex items-center mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-teal-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                            />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-slate-800">Omówienie wyników</h4>
                      </div>
                      <p className="text-slate-600">
                        Ewentualne omówienie pierwszych wrażeń po badaniu i przedstawienie wstępnych wniosków.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6 border-l-4 border-teal-500">
                    <p className="text-slate-700 flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5"
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
                        📌 Jeśli ADOS-2 jest częścią szerszej diagnozy (np. z testami rozwoju, wywiadem), może być
                        rozłożony na więcej spotkań – ale samo badanie to zazwyczaj jedno, spokojne spotkanie.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mb-16 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="border-b border-slate-100 bg-gradient-to-r from-amber-500 to-orange-500 py-1"></div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-amber-600 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                🧸 Jak przygotować dziecko do badania?
              </h3>

              <div className="bg-amber-50 rounded-xl p-6 mb-8 border-l-4 border-amber-500">
                <p className="text-slate-700 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5"
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
                    Nie trzeba niczego ćwiczyć ani „uczyć się" do badania – ADOS-2 polega na obserwacji naturalnego
                    zachowania. Warto jednak zadbać o kilka prostych rzeczy:
                  </span>
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-amber-600"
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
                    <h4 className="mb-3 text-lg font-semibold text-slate-900">✔️ Zadbaj o komfort dziecka</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">
                          wybierz godzinę, w której dziecko jest wypoczęte i spokojne (np. nie tuż przed drzemką)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">
                          zjedzcie coś przed wizytą – ale nie bezpośrednio przed (część badania dotyczy np. proszenia o
                          jedzenie)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">
                          ubierz dziecko wygodnie, weź ulubioną przytulankę – jeśli daje mu to poczucie bezpieczeństwa
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-amber-600"
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
                    <h4 className="mb-3 text-lg font-semibold text-slate-900">✔️ Przygotuj siebie</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">
                          przypomnij sobie etapy rozwoju dziecka (np. kiedy zaczęło chodzić, mówić)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">
                          weź dokumenty, jeśli posiadasz (opinie, wcześniejsze diagnozy, książeczkę zdrowia)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">
                          nie martw się, jeśli dziecko będzie płakać, nie współpracować lub „zachowa się inaczej niż
                          zwykle" – to też część diagnozy
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                
                <div className="overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 shadow-md transition-transform hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-amber-600"
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
                    <h4 className="mb-3 text-lg font-semibold text-slate-900">✔️ Co powiedzieć dziecku?</h4>
                    <div className="space-y-4">
                      <div className="bg-white/60 rounded-lg p-4">
                        <p className="text-slate-700 text-sm">
                          <span className="font-medium">Dla młodszych dzieci:</span>
                        </p>
                        <p className="text-slate-700 mt-1 italic">
                          "Idziemy do pani/pana, żeby pobawić się razem i porozmawiać."
                        </p>
                      </div>

                      <div className="bg-white/60 rounded-lg p-4">
                        <p className="text-slate-700 text-sm">
                          <span className="font-medium">Dla starszych dzieci:</span>
                        </p>
                        <p className="text-slate-700 mt-1 italic">
                          "Spotkasz się z psychologiem, który chce cię lepiej poznać – nie ma złych odpowiedzi."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="border-b border-slate-100 bg-gradient-to-r from-blue-500 to-teal-500 py-1"></div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Przebieg wizyty diagnostycznej</h3>

              <div className="relative">
                
                <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 transform bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400"></div>

                
                <div className="relative grid gap-4 md:grid-cols-4">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-lg z-10">
                      <div className="text-center">
                        <div className="text-xl font-bold">1</div>
                        <div className="text-xs font-medium">15-20 min</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-blue-50 p-4 text-center shadow-md w-full">
                      <h4 className="font-semibold text-slate-900 mb-1">Wywiad wstępny</h4>
                      <p className="text-sm text-slate-600">Rozmowa z rodzicem o rozwoju dziecka</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg z-10">
                      <div className="text-center">
                        <div className="text-xl font-bold">2</div>
                        <div className="text-xs font-medium">30-60 min</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-teal-50 p-4 text-center shadow-md w-full">
                      <h4 className="font-semibold text-slate-900 mb-1">Badanie ADOS-2</h4>
                      <p className="text-sm text-slate-600">Obserwacja dziecka podczas zabawy/rozmowy</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500 text-white shadow-lg z-10">
                      <div className="text-center">
                        <div className="text-xl font-bold">3</div>
                        <div className="text-xs font-medium">15-20 min</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-emerald-50 p-4 text-center shadow-md w-full">
                      <h4 className="font-semibold text-slate-900 mb-1">Analiza wyników</h4>
                      <p className="text-sm text-slate-600">Diagnosta analizuje obserwacje</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-lime-500 text-white shadow-lg z-10">
                      <div className="text-center">
                        <div className="text-xl font-bold">4</div>
                        <div className="text-xs font-medium">20-30 min</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-green-50 p-4 text-center shadow-md w-full">
                      <h4 className="font-semibold text-slate-900 mb-1">Omówienie</h4>
                      <p className="text-sm text-slate-600">Wstępne wnioski i dalsze kroki</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 font-medium text-white transition-transform hover:scale-[1.02] shadow-md">
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
                  Umów badanie ADOS-2
                </button>
              </div>
            </div>
          </div>

          
          <div className="mt-16 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-500 to-purple-500 py-1"></div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Najczęściej zadawane pytania</h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-slate-50 rounded-xl p-6 transition-all hover:shadow-md">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mr-2"
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
                    Czy mogę być obecny/a podczas badania?
                  </h4>
                  <p className="text-slate-600">
                    W przypadku małych dzieci (do ok. 3 lat) rodzic może być obecny w sali, ale nie powinien ingerować w
                    przebieg badania. Przy starszych dzieciach diagnosta zazwyczaj prosi o pozostanie w poczekalni, aby
                    nie wpływać na naturalność zachowań dziecka.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 transition-all hover:shadow-md">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mr-2"
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
                    Co jeśli dziecko nie będzie chciało współpracować?
                  </h4>
                  <p className="text-slate-600">
                    To normalne! Diagności są przygotowani na różne reakcje dzieci. Sposób, w jaki dziecko reaguje na
                    nową sytuację, również dostarcza cennych informacji diagnostycznych. Jeśli dziecko będzie bardzo
                    niespokojne, możliwe jest przełożenie badania na inny termin.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 transition-all hover:shadow-md">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mr-2"
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
                    Kiedy otrzymam wyniki badania?
                  </h4>
                  <p className="text-slate-600">
                    Wstępne informacje otrzymasz zazwyczaj tego samego dnia, po zakończeniu badania. Pełna pisemna
                    opinia jest gotowa w ciągu 7-14 dni od badania. W naszej poradni staramy się, by rodzice nie musieli
                    długo czekać na wyniki.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 transition-all hover:shadow-md">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600 mr-2"
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
                    Czy badanie jest bolesne lub nieprzyjemne?
                  </h4>
                  <p className="text-slate-600">
                    Absolutnie nie. ADOS-2 to obserwacja podczas zabawy lub rozmowy. Nie ma żadnych inwazyjnych
                    procedur, pobierania krwi czy innych nieprzyjemnych elementów. Dla większości dzieci badanie
                    przypomina po prostu zabawę z nową osobą.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

