"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";



const Hero = dynamic(() => import("@/components/home/hero"), {
  ssr: true,
});

const BackToTop = dynamic(
  () => import("@/components/home/nawigacja-home-page/back-to-top"),
  { ssr: false }
);

const MagnoliaTabs = dynamic(
  () => import("@/components/home/tab-home"),
  {
    loading: () => (
      <div className="w-full max-w-6xl mx-auto py-20 space-y-8 animate-pulse">
        <div className="h-12 w-3/4 bg-gray-100 rounded-lg mx-auto" />
        <div className="h-96 w-full bg-gray-50 rounded-xl" />
      </div>
    ),
    ssr: true,
  }
);

const ContactComponent = dynamic(() => import("./kontakt/page"), {
  loading: () => (
    <div className="w-full h-[600px] bg-gray-50 animate-pulse" />
  ),
  ssr: true,
});

const Social = dynamic(
  () => import("@/components/home/social-media"),
  {
    loading: () => (
      <div className="w-full h-40 bg-gray-50 animate-pulse" />
    ),
    ssr: true,
  }
);

const HomeGate = dynamic(
  () => import("@/components/home/home-gate"),
  { ssr: false }
);

const ViewportLoader = dynamic(
  () => import("@/components/ui/viewport-loader"),
  { ssr: false }
);

export default function Home() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.substring(1);
      const target = document.getElementById(id);
      if (!target) return;

      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    };

    // Run on initial load
    scrollToHash();

    // Run when hash changes (e.g. navigation from another page)
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);



  const router = useRouter();
  const [showMainSite, setShowMainSite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasPassedGateInThisSession = sessionStorage.getItem(
      "magnolia-gate-passed"
    );
    if (hasPassedGateInThisSession) setShowMainSite(true);
    setIsLoading(false);
  }, []);

  /* standardowe wejście (tylko hero) */
  const handleEnterMainSite = () => {
    sessionStorage.setItem("magnolia-gate-passed", "true");
    setShowMainSite(true);
  };

  /* wejście i auto-scroll do sekcji #uslugi */
  const handleEnterMainSiteToUslugi = () => {
    sessionStorage.setItem("magnolia-gate-passed", "true");
    setShowMainSite(true);
    /* poczekaj aż dom się wyrenderuje */
    setTimeout(() => {
      const el = document.getElementById("uslugi");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      /* zapisz hash do url */
      router.replace("/#uslugi");
    }, 0);
  };

  /* loading – zapobiega błyskaniu */
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] h-screen w-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl font-light animate-pulse">
          PORADNIA MAGNOLIA
        </div>
      </div>
    );
  }

  /* GATE */
  if (!showMainSite) {
    return (
      <HomeGate
        onEnterMainSite={handleEnterMainSite}
        onEnterServices={handleEnterMainSiteToUslugi}
      />
    );
  }

  /* STRONA GŁÓWNA */
  return (
    <div>
      <Hero />
      <div id="uslugi">
        <ViewportLoader minHeight="600px">
          <MagnoliaTabs />
        </ViewportLoader>
      </div>
      <div className="pb-20">
        <ViewportLoader minHeight="160px">
          <Social />
        </ViewportLoader>
      </div>
      <ViewportLoader minHeight="600px">
        <ContactComponent />
      </ViewportLoader>
      <BackToTop />
    </div>
  );
}
