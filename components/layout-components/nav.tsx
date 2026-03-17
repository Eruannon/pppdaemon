"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type NavigationItem = {
  title: string;
  href: string;
};

type NavigationItems = {
  [key: string]: NavigationItem[];
};

const navigationItems: NavigationItems = {
  dzieci: [
    { title: "WWRD", href: "/?tab=dzieci&section=wwrd" },
    {
      title: "Terapia logopedyczna",
      href: "/?tab=dzieci&section=terapia-logopedyczna",
    },
    {
      title: "Integracja sensoryczna",
      href: "/?tab=dzieci&section=integracja-sensoryczna",
    },
    { title: "NDT-Bobath", href: "/?tab=dzieci&section=ndt-bobath" },
    {
      title: "Gimnastyka korekcyjna",
      href: "/?tab=dzieci&section=gimnastyka-korekcyjna",
    },
    { title: "Dogoterapia", href: "/?tab=dzieci&section=dogoterapia" },
    { title: "TUS", href: "/?tab=dzieci&section=tus" },
    {
      title: "Terapia pedagogiczna",
      href: "/?tab=dzieci&section=terapia-pedagogiczna",
    },
  ],
  dorosli: [
    { title: "Terapia par", href: "/?tab=dorosli&section=terapia-par" },
    {
      title: "Wsparcie psychologiczne",
      href: "/?tab=dorosli&section=wsparcie-psychologiczne",
    },
    {
      title: "Profilaktyka zdrowia psychicznego",
      href: "/?tab=dorosli&section=profilaktyka-zdrowia-psychicznego",
    },
    { title: "Psychoterapia", href: "/?tab=dorosli&section=psychoterapia" },
  ],
  uzaleznienia: [
    {
      title: "Terapia E-uzależnień",
      href: "/?tab=uzaleznienia&section=e-uzaleznienia",
    },
    {
      title: "Terapia uzależnień",
      href: "/?tab=uzaleznienia&section=uzaleznienia",
    },
  ],
  extra: [
    { title: "Bajkoterapia", href: "/bajkoterapia" },
    { title: "Terapia VR", href: "/?tab=extra&section=terapia-vr" },
    { title: "Hipoterapia", href: "/?tab=extra&section=hipoterapia" },
  ],
};

const diagnozyNavigationItems: NavigationItems = {
  dzieci: [
    {
      title: "Diagnoza dysleksji",
      href: "/?tab=dzieci&subtab=diagnozy&section=diagnoza-dysleksji",
    },
    {
      title: "Diagnoza autyzmu",
      href: "/?tab=dzieci&subtab=diagnozy&section=diagnoza-autyzmu",
    },
    {
      title: "Diagnoza SI",
      href: "/?tab=dzieci&subtab=diagnozy&section=diagnoza-si",
    },
    {
      title: "Diagnoza ADHD",
      href: "/?tab=dzieci&subtab=diagnozy&section=diagnoza-adhd",
    },
  ],
  dorosli: [
    {
      title: "Diagnoza zaburzeń lękowych",
      href: "/?tab=dorosli&subtab=diagnozy&section=diagnoza-zaburzen-lekowych",
    },
    {
      title: "Diagnoza zaburzeń impulsywno-kompulsywnych",
      href: "/?tab=dorosli&subtab=diagnozy&section=diagnoza-zaburzen-impulsywno-kompulsywnych",
    },
    {
      title: "Ocena kompetencji emocjonalnych",
      href: "/?tab=dorosli&subtab=diagnozy&section=ocena-kompetencji-emocjonalnych",
    },
    {
      title: "Ocena dojrzałości emocjonalnej do wejścia w związek",
      href: "/?tab=dorosli&subtab=diagnozy&section=ocena-dojrzalosci-emocjonalnej-do-wejscia-w-zwiazek",
    },
    {
      title: "Diagnoza mocnych i słabych stron rodzicielstwa",
      href: "/?tab=dorosli&subtab=diagnozy&section=diagnoza-mocnych-i-słabych-stron-rodzicielstwa",
    },
  ],
  uzaleznienia: [
    {
      title: "Uzależnienie od hazardu",
      href: "/?tab=uzaleznienia&subtab=diagnozy&section=diagnoza-uzaleznienia-od-hazardu",
    },
    {
      title: "Uzależnienie od internetu",
      href: "/?tab=uzaleznienia&subtab=diagnozy&section=diagnoza-uzaleznienia-od-internetu",
    },
    {
      title: "Kompulsywne kupowanie",
      href: "/?tab=uzaleznienia&subtab=diagnozy&section=diagnoza-uzaleznienia-kompulsywne-kupowanie",
    },
    {
      title: "Kompulsywne zachowanie seksualne",
      href: "/?tab=uzaleznienia&subtab=diagnozy&section=diagnoza-uzaleznienia-kompulsywne-zachowanie-seksualne",
    },
    {
      title: "Pracoholizm",
      href: "/?tab=uzaleznienia&subtab=diagnozy&section=diagnoza-pracoholizmu",
    },
  ],
};

const tabTitles: { [key: string]: string } = {
  dzieci: "Dla dzieci",
  dorosli: "Dla dorosłych",
  uzaleznienia: "Uzależnienia",
  extra: "Magnolia Extra",
};

const categoryImages: { [key: string]: string } = {
  dzieci: "/assets/oferta-dla-dzieci/wwrd.jpg",
  dorosli: "/assets/oferta-dla-doroslych/ocena-gotowosci-zwiazek.jpg",
  uzaleznienia: "/assets/diagnozy/internet.jpg",
  extra: "/assets/hipoterapia/hipoterapia.jpg",
};

export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const headerHeight = header.offsetHeight;


    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }


    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-20" /> 
      <header
        ref={headerRef}
        className={cn(
          "w-full left-0 right-0 z-50 transition-all duration-300 border-b-[1px] border-zinc-300",
          isSticky
            ? "fixed top-0 bg-background shadow-md"
            : "absolute top-0 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20">
            <Link href="/" className="flex items-center space-x-2 mr-6">
              <Image
                src="/assets/logo/logo.png"
                alt="Logo Magnolia"
                width={120}
                height={120}
              />
            </Link>

            
            <nav className="hidden md:flex items-center space-x-8 flex-grow tracking-tighter">
              <Link href="/" className="text-sm font-medium">
                Strona główna
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  {Object.entries(navigationItems).map(([key, items]) => (
                    <NavigationMenuItem key={key}>
                      <NavigationMenuTrigger>
                        {tabTitles[key]}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[800px] lg:w-[1000px] xl:w-[1000px] p-6">
                          <div className="grid grid-cols-5 gap-6">
                            <div className="col-span-2">
                              <NavigationMenuLink asChild>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                  href={`/?tab=${key}`}
                                >
                                  <div className="mb-2 mt-4 text-2xl font-medium">
                                    {tabTitles[key]}
                                  </div>
                                  <div className="aspect-video bg-muted rounded-md overflow-hidden relative">
                                    <Image
                                      src={
                                        categoryImages[key] ||
                                        `/placeholder-${
                                          key || "/placeholder.svg"
                                        }.jpg`
                                      }
                                      alt={`Ilustracja dla ${tabTitles[key]}`}
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 768px) 100vw, 300px"
                                    />
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </div>
                            <div className="col-span-3 grid grid-cols-2 gap-6">
                              <SubMenu items={items} title="Terapie" />
                              {diagnozyNavigationItems[key] && (
                                <SubMenu
                                  items={diagnozyNavigationItems[key]}
                                  title="Diagnozy"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/videos" className="text-sm font-medium">
                Galeria cyfrowa
              </Link>
              <Link href="/oferta" className="text-sm font-medium">
                Cennik
              </Link>
              <Link href="/kontakt" className="text-sm font-medium">
                Kontakt
              </Link>
            </nav>

            <div className="hidden md:block ml-auto">
              <Button asChild className="bg-[#921d7f] hover:bg-[#921d7f]/90">
                <a
                  href="https://ppp.rybnikonline.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zaloguj się do platformy
                </a>
              </Button>
            </div>

            
            <div className="md:hidden ml-auto">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Otwórz menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Zamknij menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    <Link href="/galeria" className="text-sm font-medium">
                      Galeria
                    </Link>
                    <Link href="/oferta" className="text-sm font-medium">
                      Cennik
                    </Link>
                    <Link href="/kontakt" className="text-sm font-medium">
                      Kontakt
                    </Link>
                    <Button asChild className="w-full">
                      <a
                        href="https://ppp.rybnikonline.eu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Zaloguj się do platformy
                      </a>
                    </Button>
                  </nav>
                  <Accordion type="single" collapsible className="w-full mt-6">
                    {Object.entries(navigationItems).map(([key, items]) => (
                      <AccordionItem value={key} key={key}>
                        <AccordionTrigger>{tabTitles[key]}</AccordionTrigger>
                        <AccordionContent>
                          <Tabs defaultValue="uslugi" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="uslugi">Terapie</TabsTrigger>
                              <TabsTrigger value="diagnozy">
                                Diagnozy
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="uslugi">
                              <ScrollArea className="h-[300px]">
                                <div className="space-y-2">
                                  {items.map((item) => (
                                    <MobileMenuItem
                                      key={item.title}
                                      {...item}
                                    />
                                  ))}
                                </div>
                              </ScrollArea>
                            </TabsContent>
                            <TabsContent value="diagnozy">
                              <ScrollArea className="h-[300px]">
                                <div className="space-y-2">
                                  {diagnozyNavigationItems[key]?.map((item) => (
                                    <MobileMenuItem
                                      key={item.title}
                                      {...item}
                                    />
                                  ))}
                                </div>
                              </ScrollArea>
                            </TabsContent>
                          </Tabs>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function SubMenu({ items, title }: { items: NavigationItem[]; title: string }) {
  return (
    <div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <ScrollArea className="h-[350px] lg:h-[400px] xl:h-[450px] pr-4">
        <ul className="space-y-2">
          {items.map((item) => (
            <ListItem key={item.title} title={item.title} href={item.href} />
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function MobileMenuItem({ title, href }: NavigationItem) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-accent hover:text-accent-foreground"
    >
      <span>{title}</span>
      <ChevronRight className="h-4 w-4" />
    </a>
  );
}
