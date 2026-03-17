"use client";

import { useState, useCallback } from "react";
import { X, BadgeInfo } from "lucide-react";
import { Button } from "@/components/ui/button";
import Drawer from "./drawer";

const locations = [
  {
    address: "ul. Magnolii 25,",
    postalCode: "44-207 Rybnik-Golejów",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.024484924247!2d18.53624251590285!3d50.0821749794281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114203b67f308d%3A0xf5c3dfe09b098aef!2sMagnolii%2025%2C%2044-207%20Rybnik%2C%20Poland!5e0!3m2!1sen!2sus!4v1686053256452!5m2!1sen!2sus",
  },
  {
    address: "ul. Rudzka 13c, budynek B, ",
    postalCode: "44-200 Rybnik-Centrum",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.9023448425384!2d18.89149731571725!3d50.28917997945366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711310231a6b2e7%3A0x8bf7f73708eaf739!2sRudzka%2013C%2C%2044-200%20Rybnik!5e0!3m2!1sen!2spl!4v1638888888888!5m2!1sen!2spl",
  },
  {
    address: "os. Orłowiec 17/2,",
    postalCode: "44-280 Rydułtowy",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.123456789012!2d18.417123456789!3d50.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711234567890abc%3A0x1234567890abcdef!2sO%C5%9B.%20Or%C5%82owiec%2017%2F2%2C%2044-280%20Rydu%C5%82towy!5e0!3m2!1spl!2spl!4v1638888888888!5m2!1spl!2spl",
  },
];

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClose = useCallback(() => setIsVisible(false), []);
  const handleOpenDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const handleCloseDrawer = useCallback(() => setIsDrawerOpen(false), []);

  if (!isVisible) return null;

  return (
    <>
      <div className="hidden sm:block relative w-full bg-[#921d7f] py-3 px-4 sm:px-6 lg:px-8 border-b font-medium tracking-tight">
        <div className="max-w-6xl mx-auto flex items-center justify-between relative">
          <div className="flex items-center space-x-2">
            <BadgeInfo className="w-5 h-5 text-white" />
            <p className="text-xs sm:text-sm font-medium text-white">
              Nowy punkt Poradni MAGNOLIA: <br className=" sm:hidden block" />
              <span className="underline underline-offset-2">
                os. Orłowiec 17/2, 44-280 Rydułtowy
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="link"
              className="text-xs font-medium text-white underline hover:no-underline p-0"
              onClick={handleOpenDrawer}
            >
              Więcej informacji
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6 rounded-full hover:bg-white/20 transition-colors p-0"
              onClick={handleClose}
              aria-label="Zamknij banner"
            >
              <X className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        locations={locations}
      />
    </>
  );
}
