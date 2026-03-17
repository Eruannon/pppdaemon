"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  diagnozyNavigationItems,
  type NavigationItem,
  navigationItems,
  type SubCategoryTabsProps,
} from "@/types/tab-home-types";


import { WWRD } from "@/components/home/wwrd";
import { Logopedia } from "@/components/home/logopedia";
import { IntegracjaSensoryczna } from "@/components/home/integracja-sensoryczna";
import { NdtBobath } from "@/components/home/ndt-bobath";
import { GimnastykaKorekcyjna } from "@/components/home/gimnastyka-korekcyjna";
import { Dogoterapia } from "@/components/home/dogoterapia";
import { Tus } from "@/components/home/tus";
import { TerapiaPedagogiczna } from "@/components/home/terapia-pedagogiczna";
import { AdictionServicesComponent } from "@/components/centrum-uzaleznien-page-components/centrum-uzaleznien";
import TerapieVRComponent from "@/components/terapia-vr-components/vr-component";
import Hippotherapy from "@/components/hipoterapia/hippotherapy";
import { DiagnozaDysleksji } from "@/components/diagnozy/diagnoza-dysleksji";
import { DiagnozaSi } from "@/components/diagnozy/diagnoza-si";
import { DiagnozaZaburzenLekowych } from "@/components/diagnozy/diagnoza-zaburzen-lekowych";
import { DiagnozaAutyzmu } from "@/components/diagnozy/diagnoza-autyzmu";
import { DiagnozaADHD } from "@/components/diagnozy/diagnoza-adhd";
import { DiagnozaUzaleznieniaOdHazardu } from "@/components/diagnozy/diagnoza-uzaleznienia-od-hazardu";
import { DiagnozaUzaleznieniaOdInternetu } from "@/components/diagnozy/diagnoza-uzaleznienia-od-internetu";
import { DiagnozaKompulsywnychZakupow } from "@/components/diagnozy/diagnoza-kompulsywne-kupowanie";
import { DiagnozaKompulsywnychZachowanSeksualnych } from "@/components/diagnozy/diagnoza-uzaleznienie-od-seksu";
import { DiagnozaPracoholizmu } from "@/components/diagnozy/diagnoza-pracoholizm";
import { OcenaKompetencjiEmocjonalnych } from "@/components/diagnozy/ocena-kompetencji-emocjonalnych";
import { DiagnozaRodzicielstwa } from "@/components/diagnozy/diagnoza-rodzicielstwa";
import { WsparciePsychologiczne } from "@/components/adult-page-components/wsparcie-psychologiczne";
import { ProfilaktykaZdrowiaPsychicznego } from "@/components/adult-page-components/profilaktyka-zdrowia-psychicznego";
import { Psychoterapia } from "@/components/adult-page-components/psychoterapia";
import { TerapiaDlaParComponent } from "@/components/adult-page-components/terapia-par";
import { OcenaGotowosciEmocjonalnejWejsciaWZwiazek } from "@/components/diagnozy/ocena-dojrzalosci-emocjonalnej-do-wejscia-w-zwiazek";
import { DiagnozaZaburzenImpulsywnoKompulsywnych } from "../diagnozy/diagnoza-zaburzeń-impulsywno-kompulsywnych";

function SubCategoryTabs({
  categoryKey,
  activeSubTab,
  activeSection,
  sectionRefs,
}: SubCategoryTabsProps & {
  activeSubTab: string;
  activeSection: string | null;
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
}) {
  const diagnozyItems = diagnozyNavigationItems[categoryKey] || [];
  const showDiagnozyTab = diagnozyItems.length > 0;

  useEffect(() => {
    if (activeSection) {
      const sectionElement = sectionRefs.current[activeSection];
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [activeSection, sectionRefs]);

  return (
    <Tabs value={activeSubTab} className="w-full">
      <TabsContent value="zajecia" className="w-full">
        {categoryKey === "dzieci" && (
          <div className="space-y-16 sm:space-y-24">
            <div
              id="wwrd"
              ref={(el) => {
                if (el) sectionRefs.current["wwrd"] = el;
              }}
              className="pt-12"
            >
              <WWRD />
            </div>
            <div
              id="terapia-logopedyczna"
              ref={(el) => {
                if (el) sectionRefs.current["terapia-logopedyczna"] = el;
              }}
            >
              <Logopedia />
            </div>
            <div
              id="integracja-sensoryczna"
              ref={(el) => {
                if (el) sectionRefs.current["integracja-sensoryczna"] = el;
              }}
            >
              <IntegracjaSensoryczna />
            </div>
            <div
              id="ndt-bobath"
              ref={(el) => {
                if (el) sectionRefs.current["ndt-bobath"] = el;
              }}
            >
              <NdtBobath />
            </div>
            <div
              id="gimnastyka-korekcyjna"
              ref={(el) => {
                if (el) sectionRefs.current["gimnastyka-korekcyjna"] = el;
              }}
            >
              <GimnastykaKorekcyjna />
            </div>
            <div
              id="dogoterapia"
              ref={(el) => {
                if (el) sectionRefs.current["dogoterapia"] = el;
              }}
            >
              <Dogoterapia />
            </div>
            <div
              id="tus"
              ref={(el) => {
                if (el) sectionRefs.current["tus"] = el;
              }}
            >
              <Tus />
            </div>
            <div
              id="terapia-pedagogiczna"
              ref={(el) => {
                if (el) sectionRefs.current["terapia-pedagogiczna"] = el;
              }}
            >
              <TerapiaPedagogiczna />
            </div>
          </div>
        )}
        {categoryKey === "dorosli" && (
          <div className="space-y-16 sm:space-y-24">
            <div
              id="terapia-par"
              ref={(el) => {
                if (el) sectionRefs.current["terapia-par"] = el;
              }}
            >
              <TerapiaDlaParComponent />
            </div>
            <div
              id="wsparcie-psychologiczne"
              ref={(el) => {
                if (el) sectionRefs.current["wsparcie-psychologiczne"] = el;
              }}
            >
              <WsparciePsychologiczne />
            </div>
            <div
              id="profilaktyka-zdrowia-psychicznego"
              ref={(el) => {
                if (el)
                  sectionRefs.current["profilaktyka-zdrowia-psychicznego"] = el;
              }}
            >
              <ProfilaktykaZdrowiaPsychicznego />
            </div>
            <div
              id="psychoterapia"
              ref={(el) => {
                if (el) sectionRefs.current["psychoterapia"] = el;
              }}
            >
              <Psychoterapia />
            </div>
          </div>
        )}
        {categoryKey === "uzaleznienia" && <AdictionServicesComponent />}
        {categoryKey === "extra" && (
          <div>
            <div
              id="terapia-vr"
              ref={(el) => {
                if (el) sectionRefs.current["terapia-vr"] = el;
              }}
            >
              <TerapieVRComponent />
            </div>
            <div
              id="hipoterapia"
              ref={(el) => {
                if (el) sectionRefs.current["hipoterapia"] = el;
              }}
            >
              <Hippotherapy />
            </div>
          </div>
        )}
      </TabsContent>

      {showDiagnozyTab && (
        <TabsContent value="diagnozy" className="w-full">
          {categoryKey === "dzieci" && (
            <div className="space-y-16 sm:space-y-24">
              <div
                id="diagnoza-dysleksji"
                ref={(el) => {
                  if (el) sectionRefs.current["diagnoza-dysleksji"] = el;
                }}
                className="pt-12"
              >
                <DiagnozaDysleksji />
              </div>
              <div
                id="diagnoza-autyzmu"
                ref={(el) => {
                  if (el) sectionRefs.current["diagnoza-autyzmu"] = el;
                }}
              >
                <DiagnozaAutyzmu />
              </div>
              <div
                id="diagnoza-si"
                ref={(el) => {
                  if (el) sectionRefs.current["diagnoza-si"] = el;
                }}
              >
                <DiagnozaSi />
              </div>
              <div
                id="diagnoza-adhd"
                ref={(el) => {
                  if (el) sectionRefs.current["diagnoza-adhd"] = el;
                }}
              >
                <DiagnozaADHD />
              </div>
            </div>
          )}
          {categoryKey === "dorosli" && (
            <div className="space-y-16 sm:space-y-24">
              <div
                id="diagnoza-zaburzen-lekowych"
                ref={(el) => {
                  if (el)
                    sectionRefs.current["diagnoza-zaburzen-lekowych"] = el;
                }}
                className="pt-12"
              >
                <DiagnozaZaburzenLekowych />
              </div>
              <div
                id="diagnoza-zaburzen-impulsywno-kompulsywnych"
                ref={(el) => {
                  if (el)
                    sectionRefs.current[
                      "diagnoza-zaburzen-impulsywno-kompulsywnych"
                    ] = el;
                }}
                className="pt-12"
              >
                <DiagnozaZaburzenImpulsywnoKompulsywnych />
              </div>
              <div
                id="ocena-kompetencji-emocjonalnych"
                ref={(el) => {
                  if (el)
                    sectionRefs.current["ocena-kompetencji-emocjonalnych"] = el;
                }}
                className="pt-12"
              >
                <OcenaKompetencjiEmocjonalnych />
              </div>
              <div
                id="ocena-dojrzalosci-emocjonalnej-do-wejscia-w-zwiazek"
                ref={(el) => {
                  if (el)
                    sectionRefs.current[
                      "ocena-dojrzalosci-emocjonalnej-do-wejscia-w-zwiazek"
                    ] = el;
                }}
                className="pt-12"
              >
                <OcenaGotowosciEmocjonalnejWejsciaWZwiazek />
              </div>
              <div
                id="diagnoza-mocnych-i-słabych-stron-rodzicielstwa"
                ref={(el) => {
                  if (el)
                    sectionRefs.current[
                      "diagnoza-mocnych-i-słabych-stron-rodzicielstwa"
                    ] = el;
                }}
                className="pt-12"
              >
                <DiagnozaRodzicielstwa />
              </div>
            </div>
          )}
          {categoryKey === "uzaleznienia" && (
            <div className="space-y-16 sm:space-y-24">
              <div
                id="diagnoza-uzaleznienia-od-hazardu"
                ref={(el) => {
                  if (el)
                    sectionRefs.current["diagnoza-uzaleznienia-od-hazardu"] =
                      el;
                }}
                className="pt-12"
              >
                <DiagnozaUzaleznieniaOdHazardu />
              </div>
              <div
                id="diagnoza-uzaleznienia-od-internetu"
                ref={(el) => {
                  if (el)
                    sectionRefs.current["diagnoza-uzaleznienia-od-internetu"] =
                      el;
                }}
                className="pt-12"
              >
                <DiagnozaUzaleznieniaOdInternetu />
              </div>
              <div
                id="diagnoza-uzaleznienia-kompulsywne-kupowanie"
                ref={(el) => {
                  if (el)
                    sectionRefs.current[
                      "diagnoza-uzaleznienia-kompulsywne-kupowanie"
                    ] = el;
                }}
                className="pt-12"
              >
                <DiagnozaKompulsywnychZakupow />
              </div>
              <div
                id="diagnoza-uzaleznienia-kompulsywne-zachowanie-seksualne"
                ref={(el) => {
                  if (el)
                    sectionRefs.current[
                      "diagnoza-uzaleznienia-kompulsywne-zachowanie-seksualne"
                    ] = el;
                }}
                className="pt-12"
              >
                <DiagnozaKompulsywnychZachowanSeksualnych />
              </div>
              <div
                id="diagnoza-pracoholizmu"
                ref={(el) => {
                  if (el) sectionRefs.current["diagnoza-pracoholizmu"] = el;
                }}
                className="pt-12"
              >
                <DiagnozaPracoholizmu />
              </div>
            </div>
          )}
        </TabsContent>
      )}
    </Tabs>
  );
}

export default function MagnoliaTabs() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "dzieci"
  );
  const [activeSubTab, setActiveSubTab] = useState(
    searchParams.get("subtab") || "zajecia"
  );
  const [activeSection, setActiveSection] = useState<string | null>(
    searchParams.get("section")
  );

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const tab = searchParams.get("tab");
    const subtab = searchParams.get("subtab");
    const section = searchParams.get("section");

    if (tab) setActiveTab(tab);
    if (subtab) setActiveSubTab(subtab);
    if (section) setActiveSection(section);
  }, [searchParams]);

  useEffect(() => {
    if (activeSection) {
      const sectionElement = sectionRefs.current[activeSection];
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [activeSection]);

  return (
    <Tabs
      id="nawigacja"
      value={activeTab}
      className="w-full max-w-6xl mx-auto py-20"
    >
      {(
        Object.entries(navigationItems) as [
          keyof typeof navigationItems,
          NavigationItem[]
        ][]
      ).map(([key]) => (
        <TabsContent key={key} value={String(key)} className="w-full">
          <SubCategoryTabs
            categoryKey={key}
            activeSubTab={activeSubTab}
            activeSection={activeSection}
            sectionRefs={sectionRefs}
            zajeciaItems={[]}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
