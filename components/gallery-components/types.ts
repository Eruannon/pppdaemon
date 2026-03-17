export interface MediaItem {
  id: string;
  type: "image" | "video" | "youtube";
  src: string;
  alt: string;
  thumbnail?: string;
}

export interface Theme {
  id: string;
  title: string;
  image: string;
  music: string;
}

export const themes: Theme[] = [
  {
    id: "Witajcie w Magnolii",
    title: "Witajcie w MAGNOLII",
    image: "/assets/pomieszczenia-magnolia/room.jpg",
    music: "/assets/pomieszczenia-magnolia/pomieszczenia-magnolia.mp3",
  },
  {
    id: "Zajęcia SI w Magnolii",
    title: "Zajęcia SI w MAGNOLII",
    image: "/assets/oferta-dla-dzieci/integracja-sensoryczna.jpg",
    music: "",
  },
  {
    id: "Logopedia w Magnolii",
    title: "Logopedia w MAGNOLII",
    image: "/assets/oferta-dla-dzieci/child-services-3.png", // dodaj taki cover (albo podmień ścieżkę na istniejące zdjęcie)
    music: "",
  },
  {
    id: "Terapia pedagogiczna w Magnolii",
    title: "Terapia pedagogiczna w MAGNOLII",
    image: "/assets/oferta-dla-dzieci/terapiaPedagogiczna.jpg", // ustaw dowolny istniejący obraz jako cover
    music: "",
  },

  {
    id: "Hipoterapia",
    title: "Hipoterapia w MAGNOLII",
    image: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-1.JPG",
    music: "",
  },
  {
    id: "Dogoterapia",
    title: "Dogoterapia w MAGNOLII",
    image: "/assets/galeria-dogoterapia/dogoterapia-zdjecie-1.jpg",
    music: "",
  },

  {
    id: "Święta w Magnolii",
    title: "Święta w MAGNOLII",
    image: "/assets/swieta-w-magnolii/christmas-1.jpg",
    music: "/assets/swieta-w-magnolii/swieta-galeria.mp3",
  },
];

export const getMediaForTheme = (theme: string): MediaItem[] => {
  if (theme === "Witajcie w Magnolii") {
    return [
      {
        id: "room-1",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room.jpg",
        alt: "Pomieszczenie 1",
      },
      {
        id: "room-2",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room2.jpg",
        alt: "Pomieszczenie 2",
      },
      {
        id: "room-3",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room3.jpg",
        alt: "Pomieszczenie 3",
      },
      {
        id: "room-4",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room4.jpg",
        alt: "Pomieszczenie 4",
      },
      {
        id: "room-5",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room6.jpeg",
        alt: "Pomieszczenie 5",
      },
      {
        id: "room-6",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room8.jpg",
        alt: "Pomieszczenie 6",
      },
      {
        id: "room-7",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room9.jpg",
        alt: "Pomieszczenie 7",
      },
      {
        id: "room-8",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room10.jpg",
        alt: "Pomieszczenie 8",
      },
      {
        id: "room-9",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room11.jpg",
        alt: "Pomieszczenie 9",
      },
      {
        id: "room-10",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room12.jpg",
        alt: "Pomieszczenie 10",
      },
      {
        id: "room-11",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room13.jpg",
        alt: "Pomieszczenie 11",
      },
      {
        id: "room-12",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room14.jpg",
        alt: "Pomieszczenie 12",
      },
      // {
      //   id: "room-13",
      //   type: "image",
      //   src: "/assets/pomieszczenia-magnolia/room15.jpeg",
      //   alt: "Pomieszczenie 13",
      // },
      // {
      //   id: "room-14",
      //   type: "image",
      //   src: "/assets/pomieszczenia-magnolia/room16.jpeg",
      //   alt: "Pomieszczenie 14",
      // },
      // {
      //   id: "room-15",
      //   type: "image",
      //   src: "/assets/pomieszczenia-magnolia/room17.jpeg",
      //   alt: "Pomieszczenie 15",
      // },
      {
        id: "room-16",
        type: "image",
        src: "/assets/pomieszczenia-magnolia/room18.jpeg",
        alt: "Pomieszczenie 16",
      },
      // {
      //   id: "room-17",
      //   type: "image",
      //   src: "/assets/pomieszczenia-magnolia/room19.jpeg",
      //   alt: "Pomieszczenie 17",
      // },
      // {
      //   id: "room-18",
      //   type: "image",
      //   src: "/assets/pomieszczenia-magnolia/room20.jpeg",
      //   alt: "Pomieszczenie 18",
      // },
    ];
  }
  if (theme === "Zajęcia SI w Magnolii") {
    return [
      {
        id: "si1",
        type: "video",
        src: "/assets/galeria-si-w-magnolii/si1.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si2",
        type: "video",
        src: "/assets/galeria-si-w-magnolii/si2.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si3",
        type: "video",
        src: "/assets/galeria-si-w-magnolii/si3.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si4",
        type: "video",
        src: "/assets/galeria-si-w-magnolii/si4.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si5",
        type: "video",
        src: "/assets/galeria-si-w-magnolii/si5.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si6",
        type: "video",
        src: "/assets/galeria-si-w-magnolii/si6.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si7",
        type: "video",
        src: "/assets/galeria-si-w-magnolii/si7.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si8",
        type: "video",
        src: "/assets/galeria-si-w-magnolii/si8.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si90",
        type: "video",
        src: "/assets/galeria-si-w-magnolii/si9.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si100",
        type: "video",
        src: "/assets/galeria-si-w-magnolii/si10.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },

      //

      {
        id: "si9",
        type: "video",
        src: "/assets/galeria-home-page/si_1.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si10",
        type: "video",
        src: "/assets/galeria-home-page/si_2.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si11",
        type: "video",
        src: "/assets/galeria-home-page/si_3.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si12",
        type: "video",
        src: "/assets/galeria-home-page/si_4.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si13",
        type: "video",
        src: "/assets/galeria-home-page/si_5.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si14",
        type: "video",
        src: "/assets/galeria-home-page/si_6.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si15",
        type: "video",
        src: "/assets/galeria-home-page/si_7.mp4",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si16",
        type: "youtube",
        src: "LuJs3U-l0A0",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si17",
        type: "youtube",
        src: "4TV5EcgFVtk",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si18",
        type: "youtube",
        src: "euRIj7dX-OY",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si19",
        type: "youtube",
        src: "DjXkKXpYOLg",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si20",
        type: "youtube",
        src: "9KlAGTfjRwA",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si21",
        type: "youtube",
        src: "qZzCK0MMXmU",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si22",
        type: "youtube",
        src: "AHvHSVMe0Mk",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
      {
        id: "si23",
        type: "youtube",
        src: "_wUzDAI8EIE",
        alt: "SI w Magnolii",
        thumbnail: "/assets/galeria-si-w-magnolii/thumbail-si.jpg",
      },
    ];
  }

  if (theme === "Święta w Magnolii") {
    return [
      {
        id: "christmas-1",
        type: "image",
        src: "/assets/swieta-w-magnolii/christmas-1.jpg",
        alt: "Choinka w Magnolii",
      },
      {
        id: "christmas-2",
        type: "image",
        src: "/assets/swieta-w-magnolii/christmas-2.jpg",
        alt: "Dekoracje świąteczne",
      },
      {
        id: "christmas-3",
        type: "image",
        src: "/assets/swieta-w-magnolii/christmas-3.jpg",
        alt: "Świąteczne warsztaty",
      },
      {
        id: "christmas-4",
        type: "video",
        src: "/assets/swieta-w-magnolii/christmas-1.mp4",
        alt: "Kolędowanie w Magnolii",
        thumbnail: "/christmas-4-thumb.jpg",
      },
      {
        id: "christmas-5",
        type: "image",
        src: "/assets/swieta-w-magnolii/christmas-4.jpg",
        alt: "Świąteczne prezenty",
      },
      {
        id: "christmas-6",
        type: "video",
        src: "/assets/swieta-w-magnolii/christmas-4.mp4",
        alt: "Świąteczne życzenia",
        thumbnail: "/christmas-6-thumb.jpg",
      },
      {
        id: "christmas-7",
        type: "image",
        src: "/assets/swieta-w-magnolii/christmas-5.jpg",
        alt: "Świąteczne prezenty",
      },
      {
        id: "christmas-8",
        type: "video",
        src: "/assets/swieta-w-magnolii/christmas-2.mp4",
        alt: "Kolędowanie w Magnolii",
        thumbnail: "/christmas-4-thumb.jpg",
      },
      {
        id: "christmas-9",
        type: "video",
        src: "/assets/swieta-w-magnolii/christmas-3.mp4",
        alt: "Kolędowanie w Magnolii",
        thumbnail: "/christmas-4-thumb.jpg",
      },
      {
        id: "christmas-10",
        type: "image",
        src: "/assets/swieta-w-magnolii/christmas-6.jpg",
        alt: "Świąteczne prezenty",
      },
      {
        id: "christmas-11",
        type: "image",
        src: "/assets/swieta-w-magnolii/christmas-7.jpg",
        alt: "Świąteczne prezenty",
      },
      {
        id: "christmas-12",
        type: "image",
        src: "/assets/swieta-w-magnolii/christmas-8.jpg",
        alt: "Świąteczne prezenty",
      },
    ];
  }

  if (theme === "Hipoterapia") {
    return [
      // FILMIKI
      {
        id: "hipoterapia-filmik-1",
        type: "video",
        src: "/assets/galeria-hipoterapia/hipoterapia-filmik-1.MP4",
        alt: "Hipoterapia filmik 1",
      },
      {
        id: "hipoterapia-filmik-2",
        type: "video",
        src: "/assets/galeria-hipoterapia/hipoterapia-filmik-2.MP4",
        alt: "Hipoterapia filmik 2",
      },
      {
        id: "hipoterapia-filmik-3",
        type: "video",
        src: "/assets/galeria-hipoterapia/hipoterapia-filmik-3.mp4",
        alt: "Hipoterapia filmik 3",
      },
      {
        id: "hipoterapia-filmik-4",
        type: "video",
        src: "/assets/galeria-hipoterapia/hipoterapia-filmik-4.mp4",
        alt: "Hipoterapia filmik 4",
      },
      {
        id: "hipoterapia-filmik-5",
        type: "video",
        src: "/assets/galeria-hipoterapia/hipoterapia-filmik-5.mp4",
        alt: "Hipoterapia filmik 5",
      },
      {
        id: "hipoterapia-filmik-6",
        type: "video",
        src: "/assets/galeria-hipoterapia/hipoterapia-filmik-6.mp4",
        alt: "Hipoterapia filmik 6",
      },

      // ZDJĘCIA (w kolejności od 1 do 22)
      {
        id: "hipoterapia-zdjecie-1",
        type: "image",
        src: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-1.JPG",
        alt: "Hipoterapia zdjęcie 1",
      },

      {
        id: "hipoterapia-zdjecie-6",
        type: "image",
        src: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-6.JPG",
        alt: "Hipoterapia zdjęcie 6",
      },

      {
        id: "hipoterapia-zdjecie-8",
        type: "image",
        src: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-8.JPG",
        alt: "Hipoterapia zdjęcie 8",
      },

      {
        id: "hipoterapia-zdjecie-11",
        type: "image",
        src: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-11.JPG",
        alt: "Hipoterapia zdjęcie 11",
      },
      {
        id: "hipoterapia-zdjecie-12",
        type: "image",
        src: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-12.JPG",
        alt: "Hipoterapia zdjęcie 12",
      },

      {
        id: "hipoterapia-zdjecie-15",
        type: "image",
        src: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-15.jpg",
        alt: "Hipoterapia zdjęcie 15",
      },
      {
        id: "hipoterapia-zdjecie-16",
        type: "image",
        src: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-16.jpg",
        alt: "Hipoterapia zdjęcie 16",
      },
      {
        id: "hipoterapia-zdjecie-17",
        type: "image",
        src: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-17.jpg",
        alt: "Hipoterapia zdjęcie 17",
      },
      {
        id: "hipoterapia-zdjecie-18",
        type: "image",
        src: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-18.jpg",
        alt: "Hipoterapia zdjęcie 18",
      },

      {
        id: "hipoterapia-zdjecie-21",
        type: "image",
        src: "/assets/galeria-hipoterapia/hipoterapia-zdjecie-21.jpg",
        alt: "Hipoterapia zdjęcie 21",
      },
    ];
  }
  if (theme === "Dogoterapia") {
    return [
      {
        id: "dogoterapia-filmik-1",
        type: "video",
        src: "/assets/galeria-dogoterapia/dogoterapia-filmik-1.mp4",
        alt: "Dogoterapia filmik 1",
      },
      {
        id: "dogoterapia-zdjecie-1",
        type: "image",
        src: "/assets/galeria-dogoterapia/dogoterapia-zdjecie-1.jpg",
        alt: "Dogoterapia zdjęcie 1",
      },
      {
        id: "dogoterapia-zdjecie-2",
        type: "image",
        src: "/assets/galeria-dogoterapia/dogoterapia-zdjecie-2.jpg",
        alt: "Dogoterapia zdjęcie 2",
      },
    ];
  }
  if (theme === "Logopedia w Magnolii") {
    return [
      {
        id: "logopedia-1",
        type: "video",
        src: "/assets/galeria-logopedia/czytanie-globalne.mp4",
        alt: "Czytanie globalne",
      },
      {
        id: "logopedia-2",
        type: "video",
        src: "/assets/galeria-logopedia/Elektrostymulacja.mp4",
        alt: "Elektrostymulacja",
      },
      {
        id: "logopedia-3",
        type: "video",
        // trening-głoski-sz-cz.1.mp4
        src: "/assets/galeria-logopedia/trening-g%C5%82oski-sz-cz.1.mp4",
        alt: "Trening głoski sz/cz – cz. 1",
      },
      {
        id: "logopedia-4",
        type: "video",
        // trening-głoski-sz-cz.2.mp4
        src: "/assets/galeria-logopedia/trening-g%C5%82oski-sz-cz.2.mp4",
        alt: "Trening głoski sz/cz – cz. 2",
      },
    ];
  }
  if (theme === "Terapia pedagogiczna w Magnolii") {
    return [
      {
        id: "terapia-pedagogiczna-1",
        type: "video",
        src: "/assets/galeria-terapia-pedagogiczna/cwiczenia-integracji-polkul-mozgowych.mp4",
        alt: "Ćwiczenia integracji półkul mózgowych",
      },
      {
        id: "terapia-pedagogiczna-2",
        type: "video",
        src: "/assets/galeria-terapia-pedagogiczna/cwiczenia-uwagi-sluchowej.mp4",
        alt: "Ćwiczenia uwagi słuchowej",
      },
      {
        id: "terapia-pedagogiczna-3",
        type: "video",
        src: "/assets/galeria-terapia-pedagogiczna/Kategoryzacja.mp4",
        alt: "Kategoryzacja",
      },
    ];
  }

  // For other themes, use placeholder images and videos
  return [
    {
      id: `${theme}-1`,
      type: "image",
      src: `/placeholder.svg?height=300&width=400&text=${theme}+1`,
      alt: `${theme} image 1`,
    },
    {
      id: `${theme}-2`,
      type: "video",
      src: `/placeholder-video.mp4`,
      alt: `${theme} video 1`,
      thumbnail: `/placeholder.svg?height=300&width=400&text=${theme}+Video+1`,
    },
    {
      id: `${theme}-3`,
      type: "image",
      src: `/placeholder.svg?height=300&width=400&text=${theme}+2`,
      alt: `${theme} image 2`,
    },
    {
      id: `${theme}-4`,
      type: "image",
      src: `/placeholder.svg?height=300&width=400&text=${theme}+3`,
      alt: `${theme} image 3`,
    },
    {
      id: `${theme}-5`,
      type: "video",
      src: `/placeholder-video.mp4`,
      alt: `${theme} video 2`,
      thumbnail: `/placeholder.svg?height=300&width=400&text=${theme}+Video+2`,
    },
  ];
};
