export type NavigationItem = {
  title: string;
  href: string;
};

export type NavigationItems = {
  [key: string]: NavigationItem[];
};

export const navigationItems: NavigationItems = {
  dzieci: [
    { title: "WWRD", href: "#wwrd" },
    { title: "Terapia logopedyczna", href: "#terapia-logopedyczna" },
    { title: "Integracja sensoryczna", href: "#integracja-sensoryczna" },
    { title: "NDT-Bobath", href: "#ndt-bobath" },
    { title: "Gimnastyka korekcyjna", href: "#gimnastyka-korekcyjna" },
    { title: "Dogoterapia", href: "#dogoterapia" },
    { title: "TUS", href: "#tus" },
    { title: "Terapia pedagogiczna", href: "#terapia-pedagogiczna" },
  ],
  dorosli: [
    { title: "Terapia par", href: "#terapia-par" },
    { title: "Wsparcie psychologiczne", href: "#wsparcie-psychologiczne" },
    {
      title: "Profilaktyka zdrowia psychicznego",
      href: "#profilaktyka-zdrowia-psychicznego",
    },
    { title: "Psychoterapia", href: "#psychoterapia" },
  ],
  uzaleznienia: [
    { title: "Terapia E-uzależnień", href: "#e-uzaleznienia" },
    { title: "Terapia uzależnień", href: "#uzaleznienia" },
  ],
  extra: [
    { title: "Terapia VR", href: "#terapia-vr" },
    { title: "Hipoterapia", href: "#hipoterapia" },
  ],
};

export const diagnozyNavigationItems: NavigationItems = {
  dzieci: [
    { title: "Diagnoza dyskleskji", href: "#diagnoza-dyskleksji" },
    { title: "Diagnoza autyzmu", href: "#diagnoza-autyzmu" },
    { title: "Diagnoza SI", href: "#diagnoza-si" },
    { title: "Diagnoza ADHD", href: "#diagnoza-adhd" },
  ],
  dorosli: [
    {
      title: "Diagnoza zaburzeń lękowych",
      href: "#diagnoza-zaburzen-lekowych",
    },
    {
      title: "Diagnoza zaburzeń impulsywno-kumpulsywnych",
      href: "#diagnoza-zaburzen-impulsywno-kompulsywnych",
    },
    {
      title: "Ocena kompetencji emocjonalych",
      href: "#ocena-kompetencji-emocjonalnych",
    },
    {
      title: "Ocena dojrzałości emocjonalnej do wejścia w związek",
      href: "#ocena-dojrzalosci-emocjonalnej-do-wejscia-w-zwiazek",
    },
    {
      title: "Diagnoza mocnych i słabych stron rodzicielstwa",
      href: "#diagnoza-mocnych-i-słabych-stron-rodzicielstwa",
    },
  ],
  uzaleznienia: [
    {
      title: "Uzależnienie od hazardu",
      href: "#diagnoza-uzaleznienia-od-hazardu",
    },
    {
      title: "Uzależnienie od internetu",
      href: "#diagnoza-uzaleznienia-od-internetu",
    },
    {
      title: "Kompulsywnego kupowanie",
      href: "#diagnoza-uzaleznienia-kompulsywne-kupowanie",
    },
    {
      title: "Kompulsywne zachowanie seksualne",
      href: "#diagnoza-uzaleznienia-kompulsywne-zachowanie-seksualne",
    },

    { title: "Pracoholizm", href: "#diagnoza-pracoholizmu" },
  ],
};

export const tabTitles: { [key: string]: string } = {
  dzieci: "Dla dzieci",
  dorosli: "Dla dorosłych",
  uzaleznienia: "Uzależnienia",
  extra: "Magnolia Extra",
};

export type SubCategoryTabsProps = {
  categoryKey: keyof typeof navigationItems;
  zajeciaItems: NavigationItem[];
};
