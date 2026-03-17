import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Colorful background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_30%_20%,#fef9c3_0%,transparent_25%),radial-gradient(circle_at_80%_30%,#dbeafe_0%,transparent_25%),radial-gradient(circle_at_40%_70%,#dcfce7_0%,transparent_25%),radial-gradient(circle_at_70%_80%,#ffedd5_0%,transparent_25%)]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 transform rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>

      {/* Colorful top wave */}
      <div className="absolute left-0 right-0 top-0 z-10 h-16">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute h-full w-full">
          <path
            d="M0,0 C150,90 350,0 500,30 C650,60 700,0 900,40 C1050,70 1200,20 1200,20 L1200,0 L0,0 Z"
            className="fill-blue-400 opacity-20"
          ></path>
          <path
            d="M0,0 C150,60 350,20 500,40 C650,60 700,10 900,50 C1050,80 1200,30 1200,30 L1200,0 L0,0 Z"
            className="fill-green-400 opacity-20"
          ></path>
          <path
            d="M0,0 C150,30 350,40 500,50 C650,60 700,20 900,60 C1050,90 1200,40 1200,40 L1200,0 L0,0 Z"
            className="fill-yellow-400 opacity-20"
          ></path>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main content area */}
          <div className="flex flex-col space-y-8 lg:col-span-6 lg:pr-8">
            <div className="inline-flex animate-bounce items-center rounded-full bg-blue-500 px-4 py-1.5 text-sm font-medium text-white">
              Nowość w diagnostyce
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-slate-800 md:text-5xl lg:text-6xl">
              <span className="relative">
                <span className="relative z-10">ADOS-2</span>
                <span className="absolute -bottom-2 left-0 z-0 h-4 w-full bg-yellow-300 opacity-50"></span>
              </span>
              <span className="mt-2 block text-blue-600">Odkryj świat dziecka</span>
            </h1>

            <p className="max-w-[600px] text-xl text-slate-600">
              Poznaj narzędzie, które pomaga zrozumieć wyjątkowy sposób, w jaki Twoje dziecko doświadcza świata.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-blue-600 text-lg text-white hover:bg-blue-700">
                Poznaj metodę
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-300 text-lg text-blue-600 hover:bg-blue-50"
              >
                Umów konsultację
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Certyfikowani specjaliści</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Ponad 10 lat doświadczenia</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Złoty standard diagnostyki</span>
              </div>
            </div>
          </div>

          {/* Illustration area */}
          <div className="relative lg:col-span-6">
            {/* Main illustration */}
            <div className="relative mx-auto h-[500px] max-w-[500px]">
              {/* Colorful background circle */}
              <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-100 opacity-70"></div>

              {/* Central character */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="relative h-64 w-64">
                  {/* Head */}
                  <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 transform rounded-full bg-yellow-400 shadow-lg">
                    {/* Face */}
                    <div className="absolute left-1/4 top-1/3 h-4 w-4 rounded-full bg-white"></div>
                    <div className="absolute right-1/4 top-1/3 h-4 w-4 rounded-full bg-white"></div>
                    <div className="absolute bottom-1/4 left-1/2 h-6 w-10 -translate-x-1/2 transform rounded-full bg-white"></div>
                  </div>

                  {/* Body */}
                  <div className="absolute bottom-0 left-1/2 h-40 w-48 -translate-x-1/2 transform rounded-3xl bg-blue-400 shadow-lg">
                    {/* Arms */}
                    <div className="absolute -left-12 top-1/4 h-8 w-16 rounded-full bg-blue-400 shadow-sm"></div>
                    <div className="absolute -right-12 top-1/4 h-8 w-16 rounded-full bg-blue-400 shadow-sm"></div>

                    {/* Legs */}
                    <div className="absolute -bottom-16 left-1/4 h-20 w-10 rounded-2xl bg-green-400 shadow-sm"></div>
                    <div className="absolute -bottom-16 right-1/4 h-20 w-10 rounded-2xl bg-green-400 shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute left-0 top-1/4 animate-pulse rounded-lg bg-white p-4 shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute right-0 top-1/3 animate-bounce rounded-lg bg-white p-4 shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-1/4 left-1/4 animate-pulse rounded-lg bg-white p-4 shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-500"
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
                </div>
              </div>

              <div className="absolute bottom-1/3 right-1/4 animate-bounce rounded-lg bg-white p-4 shadow-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
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
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-200 opacity-50 transition-transform group-hover:scale-150"></div>
            <div className="relative">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500 text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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
              <h3 className="mb-2 text-xl font-bold text-slate-800">Bezpieczna diagnostyka</h3>
              <p className="text-slate-600">Przyjazne środowisko i profesjonalne podejście dla komfortu dziecka.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-200 opacity-50 transition-transform group-hover:scale-150"></div>
            <div className="relative">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-500 text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-800">Szybkie wyniki</h3>
              <p className="text-slate-600">Precyzyjne informacje i jasne wytyczne dla dalszego wsparcia.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-yellow-200 opacity-50 transition-transform group-hover:scale-150"></div>
            <div className="relative">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500 text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-800">Wsparcie dla rodzin</h3>
              <p className="text-slate-600">Kompleksowa pomoc i wskazówki dla rodziców na każdym etapie.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-16">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 h-full w-full rotate-180">
          <path
            d="M0,0 C150,90 350,0 500,30 C650,60 700,0 900,40 C1050,70 1200,20 1200,20 L1200,0 L0,0 Z"
            className="fill-blue-400 opacity-20"
          ></path>
          <path
            d="M0,0 C150,60 350,20 500,40 C650,60 700,10 900,50 C1050,80 1200,30 1200,30 L1200,0 L0,0 Z"
            className="fill-green-400 opacity-20"
          ></path>
          <path
            d="M0,0 C150,30 350,40 500,50 C650,60 700,20 900,60 C1050,90 1200,40 1200,40 L1200,0 L0,0 Z"
            className="fill-yellow-400 opacity-20"
          ></path>
        </svg>
      </div>
    </section>
  )
}

