"use client";

import { useEffect, useRef } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import {
  ArrowRight,
  Heart,
  Stethoscope,
  GripVertical,
  ChevronRight,
  ChevronLeft,
  Home,
} from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";

interface HomeGateProps {
  onEnterMainSite: () => void;
  onEnterServices: () => void;
}

export default function HomeGate({
  onEnterMainSite,
  onEnterServices,
}: HomeGateProps) {
  /* ───────── DESKTOP STATE & LOGIC ───────── */



  const panelGroupRef = useRef<any>(null);
  const gripRef = useRef<HTMLDivElement>(null);
  const instructionRef = useRef<HTMLDivElement>(null);
  const leftSlideBarRef = useRef<HTMLDivElement>(null);
  const rightSlideBarRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimationActiveRef = useRef(true);

  /* CONSTANTS */
  const EDGE_THRESHOLD = 15; 
  const BLUR_THRESHOLD = 30; 

  /* Resize handler for PanelGroup */
  const handleResize = (sizes: number[]) => {


    const nearLeftEdge = sizes[0] <= EDGE_THRESHOLD;
    const nearRightEdge = sizes[1] <= EDGE_THRESHOLD;



    
    if (sizes[0] <= 5) {
      setTimeout(() => {
        onEnterServices();
      }, 300);
      return;
    }
    if (sizes[1] <= 5) {
      setTimeout(() => {
        window.location.href = "/wwrd";
      }, 300);
      return;
    }

    /* Dynamic blur / opacity for shrinking panels */
    if (leftContentRef.current) {
      const intensity =
        sizes[0] < BLUR_THRESHOLD
          ? Math.max(0, (BLUR_THRESHOLD - sizes[0]) / BLUR_THRESHOLD)
          : 0;
      gsap.to(leftContentRef.current, {
        filter: `blur(${intensity * 8}px)`,
        opacity: 1 - intensity * 0.5,
        duration: 0.1,
      });
    }
    if (rightContentRef.current) {
      const intensity =
        sizes[1] < BLUR_THRESHOLD
          ? Math.max(0, (BLUR_THRESHOLD - sizes[1]) / BLUR_THRESHOLD)
          : 0;
      gsap.to(rightContentRef.current, {
        filter: `blur(${intensity * 8}px)`,
        opacity: 1 - intensity * 0.5,
        duration: 0.1,
      });
    }

    /* Slide bars visibility */
    if (leftSlideBarRef.current) {
      gsap.to(leftSlideBarRef.current, {
        x: nearLeftEdge ? 0 : -120,
        opacity: nearLeftEdge ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (rightSlideBarRef.current) {
      gsap.to(rightSlideBarRef.current, {
        x: nearRightEdge ? 0 : 120,
        opacity: nearRightEdge ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  /* Kill all onboarding animations */
  const stopAllAnimations = () => {
    isAnimationActiveRef.current = false;
    timelineRef.current?.kill();
    timelineRef.current = null;
    gsap.killTweensOf([
      gripRef.current,
      instructionRef.current,
      leftContentRef.current,
      rightContentRef.current,
    ]);
    if (instructionRef.current)
      gsap.set(instructionRef.current, { opacity: 0, y: 20 });
    if (gripRef.current) gsap.set(gripRef.current, { scale: 1 });
  };

  const handleInteractionStart = () => stopAllAnimations();

  /* Onboarding animation – only on first load, desktop */
  useEffect(() => {
    if (!isAnimationActiveRef.current) return;
    const tl = gsap.timeline({ delay: 0.5 });
    timelineRef.current = tl;

    const animate = () => {
      tl.to(gripRef.current, {
        scale: 1.2,
        duration: 0.4,
        ease: "power2.inOut",
        repeat: 1,
        yoyo: true,
        onInterrupt: stopAllAnimations,
      })
        .to(
          instructionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            onInterrupt: stopAllAnimations,
          },
          "-=0.2"
        )
        
        .to(
          {},
          {
            duration: 0.8,
            ease: "power2.inOut",
            onUpdate: function () {
              if (!isAnimationActiveRef.current) {
                this.kill();
                return;
              }
              const p = this.progress();
              panelGroupRef.current?.setLayout([65 - 20 * p, 35 + 20 * p]);
            },
            onInterrupt: stopAllAnimations,
          }
        )
        .to({}, { duration: 0.3 })
        
        .to(
          {},
          {
            duration: 0.8,
            ease: "power2.inOut",
            onUpdate: function () {
              if (!isAnimationActiveRef.current) {
                this.kill();
                return;
              }
              const p = this.progress();
              panelGroupRef.current?.setLayout([45 + 20 * p, 55 - 20 * p]);
            },
            onInterrupt: stopAllAnimations,
          }
        )
        .to(
          instructionRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in",
            onInterrupt: stopAllAnimations,
          },
          "+=0.5"
        )
        .to(
          gripRef.current,
          {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.inOut",
            repeat: 1,
            yoyo: true,
            onInterrupt: stopAllAnimations,
          },
          "-=0.1"
        );
    };

    animate();

    document.addEventListener("mousedown", stopAllAnimations);
    document.addEventListener("touchstart", stopAllAnimations);
    return () => {
      tl.kill();
      timelineRef.current = null;
      document.removeEventListener("mousedown", stopAllAnimations);
      document.removeEventListener("touchstart", stopAllAnimations);
    };
  }, []);

  /* ───────── RENDER ───────── */
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-[9999] m-0 p-0">
      
      <nav className="absolute top-0 left-0 right-0 z-50 p-4 md:p-[60px] flex justify-between items-center text-white">
        <button
          onClick={onEnterMainSite}
          className="hover:text-white transition-colors flex items-center space-x-2 text-xs md:text-2xl font-light tracking-wider"
        >
          <span>PORADNIA MAGNOLIA</span>
        </button>

        <div className="flex space-x-3 md:space-x-8 text-white/80 text-xs md:text-sm font-light tracking-wider">
          <button
            onClick={onEnterMainSite}
            className="hover:text-white transition-colors flex items-center space-x-1 md:space-x-2"
          >
            <Home className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">STRONA GŁÓWNA</span>
          </button>

          {/* <button
            onClick={onEnterServices}
            className="hover:text-white transition-colors flex items-center space-x-1 md:space-x-2"
          >
            <Stethoscope className="w-3 h-3 md:w-4 md:h-4" />
            <span>USŁUGI</span>
          </button> */}

          <Link href="/kontakt" className="hover:text-white transition-colors">
            KONTAKT
          </Link>
        </div>
      </nav>

      
      <div className="hidden md:block w-full h-full">
        
        <div
          ref={leftSlideBarRef}
          className="absolute left-0 top-0 h-full z-40 opacity-0 pointer-events-none"
          style={{ transform: "translateX(-120px)" }}
        >
          <div className="h-full w-[120px] bg-gradient-to-r from-slate-700/95 to-slate-600/95 backdrop-blur-md flex items-center justify-center shadow-2xl">
            <div className="transform -rotate-90 whitespace-nowrap flex items-center space-x-3">
              <ChevronLeft className="w-5 h-5 text-white" />
              <span className="text-white font-medium tracking-wider text-sm">
                PRZECIĄGNIJ DO KOŃCA
              </span>
              <span className="text-white/80 font-light text-xs">
                → PRZEJDŹ DO USŁUG
              </span>
            </div>
          </div>
        </div>
        <div
          ref={rightSlideBarRef}
          className="absolute right-0 top-0 h-full z-40 opacity-0 pointer-events-none"
          style={{ transform: "translateX(120px)" }}
        >
          <div className="h-full w-[120px] bg-gradient-to-l from-emerald-600/95 to-emerald-500/95 backdrop-blur-md flex items-center justify-center shadow-2xl">
            <div className="transform -rotate-90 whitespace-nowrap flex items-center space-x-3">
              <span className="text-white/80 font-light text-xs">
                PRZEJDŹ DO WWR ←
              </span>
              <span className="text-white font-medium tracking-wider text-sm">
                PRZECIĄGNIJ DO KOŃCA
              </span>
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        
        <PanelGroup
          direction="horizontal"
          className="w-full h-full"
          ref={panelGroupRef}
          onLayout={handleResize}
        >
          
          <Panel
            defaultSize={65}
            minSize={5}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2013.jpg-SoHDwWUWGCLkk20bmPdYqlLJjAdWIc.jpeg')",
                }}
              />
            </div>
            <div
              ref={leftContentRef}
              className="relative z-10 h-full overflow-hidden"
            >
              <div className="w-[150%] h-full flex items-center p-[60px] text-white">
                <div className="flex items-center space-x-16 w-full">
                  <div className="flex-shrink-0 w-[600px]">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs font-medium tracking-wide">
                        BEZPŁATNE USŁUGI
                      </span>
                    </div>
                    <h2 className="text-6xl font-light leading-tight mb-6 tracking-tight">
                      Wczesne
                      <br />
                      Wspomaganie
                      <br />
                      <span className="font-medium">Rozwoju</span> Dziecka
                    </h2>
                    <p className="text-xl font-light leading-relaxed mb-8 text-white/90">
                      Wsparcie dla dzieci od 0 do 7 lat i ich
                      rodzin. Całkowicie bezpłatne.
                    </p>
                    <Link
                      href="/wwrd"
                      className="inline-flex items-center space-x-3 bg-white text-emerald-700 px-8 py-4 rounded-full font-medium hover:bg-white/95 transition-all duration-300 group"
                    >
                      <span>Dowiedz się więcej</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="flex-shrink-0 w-[500px] space-y-8">
                    <div className="bg-emerald-600 rounded-2xl p-6">
                      <h4 className="text-xl font-medium mb-4">
                        Jak uzyskać darmowe zajęcia?
                      </h4>
                      <p className="text-emerald-100 mb-4 text-sm">
                        Skontaktuj się z nami, aby dowiedzieć się o dostępności
                        i zapisać dziecko na bezpłatne zajęcia WWRD.
                      </p>
                      <Link
                        href="/wwrd/#jak-uzyskac-darmowe-zajecia-wwrd"
                        className="inline-flex items-center space-x-2 bg-white text-emerald-700 px-6 py-3 rounded-full font-medium hover:bg-white/95 transition-all duration-300 group text-sm"
                      >
                        <span>Sprawdź jak</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="border border-white/20 bg-emerald-500 rounded-2xl p-6">
                      <h4 className="text-lg font-medium mb-3">Dla kogo?</h4>
                      <p className="text-white/90 text-sm mb-4">
                        Dzieci od momentu wykrycia niepełnosprawności do
                        podjęcia nauki w szkole.
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 rounded-xl py-3 px-7 text-center">
                          <p className="text-xs text-white/80">
                            <span className=" font-bold text-xl">0-7</span> lat
                          </p>
                        </div>
                        <div className="text-sm text-white/90">
                          Zajęcia prowadzone przez wykwalifikowanych
                          specjalistów
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>

          
          <PanelResizeHandle
            className="relative group"
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-full blur-sm group-hover:bg-white/20 transition-all duration-300" />
            <div className="w-1 h-full bg-white group-hover:bg-white transition-all duration-300 cursor-col-resize" />
            <div
              ref={gripRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 backdrop-blur-sm rounded-full p-3 group-hover:bg-white transition-all duration-300 cursor-col-resize z-50"
            >
              <GripVertical className="w-4 h-4 text-black" />
            </div>
          </PanelResizeHandle>

          
          <Panel
            defaultSize={35}
            minSize={5}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2014.jpg-18fBbVrM4Mwfnhgghrdv5LwQs6bLKD.jpeg')",
                }}
              />
            </div>
            <div
              ref={rightContentRef}
              className="relative z-10 h-full overflow-hidden"
            >
              <div className="w-[200%] h-full flex items-center p-[60px] text-white">
                <div className="flex items-center space-x-16 w-full">
                  <div className="flex-shrink-0 w-[400px]">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                      <Stethoscope className="w-4 h-4" />
                      <span className="text-xs font-medium tracking-wide">
                        USŁUGI KOMERCYJNE
                      </span>
                    </div>
                    <h2 className="text-6xl font-light leading-tight mb-6 tracking-tight">
                      <span className="font-medium">Diagnozy</span>
                      <br />i Terapie
                    </h2>
                    <p className="text-lg font-light leading-relaxed mb-8 text-white/90">
                      Kompleksowa diagnostyka i terapia dla dzieci i dorosłych.
                    </p>
                    <button
                      onClick={onEnterServices}
                      className="inline-flex items-center space-x-3 bg-white text-slate-800 px-8 py-4 rounded-full font-medium hover:bg-white/95 transition-all duration-300 group"
                    >
                      <span>Sprawdź nasze usługi</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="flex-shrink-0 w-[900px]">
                    <div className="mb-12">
                      <h3 className="text-2xl font-light mb-3">
                        Nasze specjalizacje
                      </h3>
                      <p className="text-white/80">
                        Usługi dostosowane do indywidualnych potrzeb
                      </p>
                    </div>
                    <div className="grid grid-cols-4 gap-12">
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium pb-3 border-b border-white/20">
                          Terapie
                          <br /> psychologiczne
                        </h4>
                        <div className="space-y-2 text-sm text-white/90">
                          <div>Konsultacja psychologiczna</div>
                          <div>Terapia dziecka</div>
                          <div>Terapia par i rodzin</div>
                          <div>Wsparcie psychologiczne</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium pb-3 border-b border-white/20">
                          Diagnozy
                          <br /> specjalistyczne
                        </h4>
                        <div className="space-y-2 text-sm text-white/90">
                          <div>Diagnoza ADHD</div>
                          <div>Spektrum autyzmu</div>
                          <div>Diagnoza dysleksji</div>
                          <div>Gotowość szkolna</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium pb-3 border-b border-white/20">
                          Terapie
                          <br /> specjalistyczne
                        </h4>
                        <div className="space-y-2 text-sm text-white/90">
                          <div>Logopedia</div>
                          <div>Terapia ręki</div>
                          <div>Integracja sensoryczna</div>
                          <div>Fizjoterapia</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium pb-3 border-b border-white/20">
                          Terapia
                          <br /> uzależnień
                        </h4>
                        <div className="space-y-2 text-sm text-white/90">
                          <div>Uzależnienia behawioralne</div>
                          <div>Uzależnienia od substancji</div>
                          <div>Terapia indywidualna</div>
                          <div>Konsultacje</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-px bg-white/20 my-10"></div>
                    <div className="flex justify-between items-center">
                      <Link
                        href="/oferta"
                        className="text-xs text-white hover:text-white transition-colors"
                      >
                        Zobacz cennik →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </PanelGroup>

        
        <div
          ref={instructionRef}
          className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 z-50 opacity-0 translate-y-5"
        >
          <div className="bg-black/30 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-light border border-white/20">
            <span className="inline-flex items-center space-x-2">
              <GripVertical className="w-4 h-4" />
              <span>Przeciągnij aby odkryć ukrytą treść</span>
            </span>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full h-screen overflow-hidden">
        <div className="h-full flex flex-col">
          
          <section
            className="relative flex-1 flex items-center text-white"
            style={{
              backgroundImage:
                "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2013.jpg-SoHDwWUWGCLkk20bmPdYqlLJjAdWIc.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 px-4 text-left space-y-3 w-full">
              <span className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium tracking-wide">
                <Heart className="w-3 h-3" />
                <span>BEZPŁATNE USŁUGI</span>
              </span>
              <h1 className="text-2xl font-light leading-tight">
                Wczesne Wspomaganie
                <br />
                <span className="font-medium">Rozwoju</span> Dziecka
              </h1>
              <p className="text-sm font-light text-white/90 max-w-xs">
                Wsparcie dla dzieci od 0 do 7 lat i ich rodzin.
                Całkowicie bezpłatne.
              </p>
              <Link
                href="/wwrd"
                className="inline-flex items-center space-x-2 bg-white text-emerald-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-white/95 transition"
              >
                <span>Dowiedz się więcej</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          
          <section
            className="relative flex-1 flex items-center text-white"
            style={{
              backgroundImage:
                "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2014.jpg-18fBbVrM4Mwfnhgghrdv5LwQs6bLKD.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 px-4 text-left space-y-3 w-full">
              <span className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium tracking-wide">
                <Stethoscope className="w-3 h-3" />
                <span>USŁUGI KOMERCYJNE</span>
              </span>
              <h2 className="text-2xl font-light leading-tight">
                <span className="font-medium">Diagnozy</span>
                <br />i Terapie
              </h2>
              <p className="text-sm font-light text-white/90 max-w-xs">
                Kompleksowa diagnostyka i terapia dla dzieci i dorosłych.
              </p>
              <div className="space-y-2">
                <button
                  onClick={onEnterServices}
                  className="inline-flex items-center space-x-2 bg-white text-slate-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-white/95 transition"
                >
                  <span>Sprawdź nasze usługi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div>
                  <Link
                    href="/oferta"
                    className="text-xs underline underline-offset-4 hover:text-white block"
                  >
                    Zobacz cennik →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
