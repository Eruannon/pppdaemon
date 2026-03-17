export default function AssessmentProcessSection() {
  return (
    <div className="py-24 bg-white">
      
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="text-sm font-medium text-indigo-600 tracking-wider uppercase">Przebieg badania</span>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
          Jak wygląda badanie krok po kroku?
        </h2>
        <div className="mt-4 h-1 w-16 bg-indigo-600 mx-auto"></div>
        <p className="mt-6 text-lg text-slate-600">
          Badanie ADOS-2 nie przypomina testu czy egzaminu. To spokojne spotkanie ze specjalistą, który proponuje
          dziecku (lub osobie dorosłej) serię prostych aktywności – dopasowanych do wieku i możliwości. Wszystko odbywa
          się w atmosferze zabawy lub naturalnej rozmowy.
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          
          <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

          
          <div className="mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-white z-10">
                  <span className="text-2xl font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Krótki wywiad z rodzicem / opiekunem</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Na początku specjalista zadaje kilka pytań o rozwój dziecka – m.in. kiedy zaczęło mówić, jak się
                  komunikuje, jakie ma trudności. To pozwala dobrać odpowiedni „moduł" badania.
                </p>
                <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-indigo-600">
                  <div className="flex items-center mb-2">
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium text-slate-800">Co warto wiedzieć:</span>
                  </div>
                  <p className="text-slate-600">
                    Nie musisz specjalnie przygotowywać dziecka do badania. Wystarczy, że powiesz mu, że spotka się z
                    miłą osobą, która zaprosi je do wspólnej zabawy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-white z-10">
                  <span className="text-2xl font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Sesja obserwacyjna (czyli samo badanie)</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Dziecko trafia do sali z terapeutą. W zależności od wieku i poziomu mowy, sesja ma formę:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600"
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
                    <p className="text-center text-slate-700">zabawy (np. z lalkami, klockami, książeczkami)</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600"
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
                    </div>
                    <p className="text-center text-slate-700">
                      zadań (np. wspólne układanie historyjek, reagowanie na sytuacje)
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600"
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
                    <p className="text-center text-slate-700">rozmowy (w przypadku starszych dzieci i dorosłych)</p>
                  </div>
                </div>

                <p className="text-lg text-slate-600 mb-6">Diagnosta uważnie obserwuje m.in.:</p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">jak dziecko reaguje na kontakt,</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">jak się komunikuje (werbalnie lub niewerbalnie),</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">czy potrafi naśladować, bawić się symbolicznie,</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">czy pojawiają się zachowania powtarzalne lub nietypowe.</span>
                  </li>
                </ul>

                <div className="bg-indigo-50 rounded-lg p-6 flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-600"
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
                  <div>
                    <p className="font-medium text-slate-800">
                      Sesja trwa zwykle 30–60 minut. Młodsze dzieci mogą mieć w sali obecnego rodzica – ale bez
                      aktywnego udziału.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-white z-10">
                  <span className="text-2xl font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Analiza i opracowanie wyniku</h3>
                <p className="text-lg text-slate-600">
                  Po zakończeniu badania specjalista analizuje zebrane obserwacje i wypełnia standaryzowany protokół.
                  Oceniane są różne obszary: mowa, kontakt, zachowania, reakcje.
                </p>
              </div>
            </div>
          </div>

          
          <div>
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-white z-10">
                  <span className="text-2xl font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Omówienie wyniku z rodzicem</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Jeszcze tego samego dnia lub w osobnym terminie specjalista omawia z rodzicem wynik badania – co
                  zaobserwowano, jakie są wnioski, co można dalej zrobić. W razie potrzeby wydawana jest pisemna opinia
                  psychologiczna.
                </p>
                <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-indigo-600">
                  <div className="flex items-center mb-2">
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium text-slate-800">Ważne:</span>
                  </div>
                  <p className="text-slate-600">
                    Badanie ADOS-2 jest częścią procesu diagnostycznego. Specjalista może zalecić dodatkowe konsultacje
                    lub badania, aby uzyskać pełny obraz funkcjonowania dziecka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

