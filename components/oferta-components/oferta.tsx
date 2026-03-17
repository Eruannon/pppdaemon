import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OfertaPage() {
  const services = [
    {
      category: "Wczesne Wspomaganie Rozwoju Dziecka (WWR)",
      items: [{ name: "WWR - od stycznia 2024", price: "darmowe" }],
    },
    {
      category: "TERAPIA UZALEŻNIEŃ",
      items: [
        {
          name: "Konsultacja uzależnień behawioralnych (45 min)",
          price: "150 zł",
        },
        {
          name: "Konsultacja uzależnień behawioralnych (90 min)",
          price: "300 zł",
        },
        {
          name: "Terapia uzależnień behawioralnych dzieci, młodzieży i dorosłych (45 min)",
          price: "150 zł",
        },
        {
          name: "Terapia uzależnień behawioralnych dzieci, młodzieży i dorosłych (90 min)",
          price: "300 zł",
        },
        { name: "Terapia uzależnień od substancji (45 min)", price: "150 zł" },
      ],
    },
    {
      category: "DIAGNOZY, KONSULTACJE I TERAPIE PSYCHOLOGICZNE",
      items: [
        { name: "Konsultacja psychologiczna (50 min)", price: "150 zł" },
        { name: "Opinia psychologiczna dziecka rozpoczynającego pracę w reklamie", price: "350 zł" },
        { name: "Wsparcie psychologiczne (50 min)", price: "150 zł" },
        { name: "Konsultacja psychiatryczna (50 min)", price: "350 zł" },
        { name: "Diagnoza zaburzeń depresyjno-lękowych", price: "350 zł" },
        { name: "Terapia psychologiczna dziecka (50 min)", price: "150 zł" },
        {
          name: "Terapia psychologiczna dziecka - pakiet (4 x 50 min)",
          price: "460 zł",
        },
        {
          name: "Terapia psychologiczna dziecka - pakiet (8 x 50 min)",
          price: "900 zł",
        },
        {
          name: "Trening umiejętności społecznych (TUS) - grupowe (4x50 min)",
          price: "300 zł",
        },
      ],
    },
    {
      category: "BADANIA PSYCHOLOGICZNE POD KĄTEM SPEKTRUM AUTYZMU",
      items: [
        {
          name: "ADOS-2 + ADI-R + ASRS (N+R) (wywiad z rodzicem/opiekunem prawnym, badanie dziecka, wywiad z wychowawcą lub nauczycielem przedmiotowym, opis)",
          price: "750 zł",
        },
      ],
    },
    {
      category: "BADANIA PSYCHOLOGICZNE POD KĄTEM ADHD",
      items: [
        { name: "MOXO (test)", price: "270 zł" },
	{ name: "CONNERS (wywiad / opis)", price: "270 zł" },
        { name: "MOXO + CONNERS (test / wywiad / opis)", price: "450 zł" },
      ],
    },
    {
      category: "PSYCHOTERAPIA",
      items: [
        {
          name: "Konsultacja psychoterapeutyczna dzieci, młodzieży i dorosłych (50 min)",
          price: "160 zł",
        },
        {
          name: "Konsultacje rodzicielskie z psychoterapeutą (90 min)",
          price: "350 zł",
        },
        { name: "Konsultacja małżeńska/par/rodzin (50 min)", price: "200 zł" },
        {
          name: "Sesja psychoterapii małżeńska/par/rodzin (50 min)",
          price: "200 zł",
        },
        {
          name: "Sesja psychoterapii małżeńska/par/rodzin (90 min)",
          price: "350 zł",
        },
        {
          name: "Sesja psychoterapii małżeńska/par/rodzin - pakiet (4x50 min)",
          price: "760 zł",
        },
        {
          name: "Sesja psychoterapii małżeńska/par/rodzin - pakiet (8x50 min)",
          price: "1500 zł",
        },
        {
          name: "Sesja psychoterapii u osoby w trakcie certyfikacji/uprawnieniami w psychoterapii dzieci, młodzieży i dorosłych (50 min)",
          price: "200 zł",
        },
        {
          name: "Sesja psychoterapii u osoby w trakcie certyfikacji / z uprawnieniami w psychoterapii dzieci, młodzieży i dorosłych - pakiet (4x50 minut)",
          price: "700 zł",
        },
        {
          name: "Sesja psychoterapii u osoby w trakcie certyfikacji / z uprawnieniami w psychoterapii dzieci, młodzieży i dorosłych - pakiet (8x50 minut)",
          price: "1300 zł",
        },
      ],
    },
    {
      category: "DIAGNOZY, KONSULTACJE I TERAPIE PEDAGOGICZNE",
      items: [
        {
          name: "Badanie pod kątem dysleksji, dysortografii i dysgrafii (120 minut)",
          price: "500 zł",
        },
        {
          name: "Konsultacja pedagogiczna (bez pisemnego wyniku - 50 minut)",
          price: "150 zł",
        },
        {
          name: "Diagnoza pedagogiczna (z pisemnym wynikiem, 50 minut)",
          price: "350 zł",
        },
        { name: "Terapia pedagogiczna (50 minut)", price: "150 zł" },
        {
          name: "Terapia pedagogiczna grupowa (4 x 50 minut)",
          price: "300 zł",
        },
        {
          name: "Zajęcia z pedagogiem specjalnym z elementami terapii behawioralnej",
          price: "150 zł",
        },
        {
          name: "Ocena zachowania i emocji - test KOZE (90-120 min)",
          price: "250 zł",
        },
        {
          name: "Diagnoza gotowości szkolnej - test KOGS (3-5 godz., rozłożonych na 2 dni)",
          price: "600 zł",
        },
        {
          name: "Diagnoza ucznia szczególnie zdolnego (3-5 godz., rozłożonych na 2 dni)",
          price: "600 zł",
        },
      ],
    },
    {
      category: "LOGOPEDIA I NEUROLOGOPEDIA",
      items: [
        {
          name: "Konsultacja logopedyczna (bez pisemnego wyniku) 1 lub 2 spotkania",
          price: "150/300zł",
        },
        {
          name: "Konsultacja neurologopedyczna (bez pisemnego wyniku) 1 lub 2 spotkania",
          price: "150/300zł",
        },
        {
          name: "Diagnoza logopedyczna (pisemny wynik, 50 minut)",
          price: "250 zł",
        },
        {
          name: "Diagnoza neurologogopedyczna (pisemny wynik, 50 minut)",
          price: "290 zł",
        },
        { name: "Diagnoza KOJD-AFA (90-120 min)", price: "350 zł" },
        { name: "Diagnoza KOLD (90-120 min)", price: "350 zł" },
        {
          name: "Karta Oceny Logopedycznej Dziecka (120 min) - KOLD-PT",
          price: "350 zł",
        },
        { name: "Terapia logopedyczna (50 minut)", price: "150 zł" },
        {
          name: "Terapia logopedyczna - grupowa (4x50 minut)",
          price: "280 zł",
        },
        {
          name: "Terapia neurologopedyczna - pakiet (4x50 minut)",
          price: "560 zł",
        },
      ],
    },
    {
      category: "TERAPIA RĘKI",
      items: [
        {
          name: "Konsultacja terapii ręki (bez pisemnego wyniku - 50 minut)",
          price: "150 zł",
        },
        { name: "Terapia ręki (50 minut)", price: "140 zł" },
        { name: "Terapia ręki - pakiet (4x50 minut)", price: "540 zł" },
        { name: "Terapia ręki - pakiet (8x50 minut)", price: "1040 zł" },
        { name: "Terapia ręki - grupowo (4x50 minut)", price: "350 zł" },
      ],
    },
    {
      category: "INTEGRACJA SENSORYCZNA (SI)",
      items: [
        { name: "Diagnoza SI (pisemny wynik)", price: "550 zł" },
        { name: "Terapia SI (50 min)", price: "150 zł" },
      ],
    },
    {
      category: "FIZJOTERAPIA",
      items: [
        { name: "Konsultacja fizjoterapeutyczna", price: "150 zł" },
        { name: "Terapia fizjoterapeutyczna", price: "150 zł" },
      ],
    },
  ];

  return (
    <Card className="w-full max-w-7xl mx-auto my-5 md:my-20 shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold tracking-tight">
          Magnolia Poradnia Psychologiczno-Pedagogiczna
        </CardTitle>
        <CardDescription className="">
          Cennik ważny od 25.06.2025
        </CardDescription>
      </CardHeader>
      <CardContent>
        {services.map((service, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{service.category}</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-4/5">Usługa</TableHead>
                  <TableHead className="w-1/5 text-right">Cena</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {service.items.map((item, itemIndex) => (
                  <TableRow key={itemIndex}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="text-right">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
