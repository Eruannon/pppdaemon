import React from "react";
import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";
import { RiTiktokLine } from "react-icons/ri";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61564201791275",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@PPP-MAGNOLIA",
    color: "from-red-500 to-red-600",
  },
  {
    name: "TikTok",
    icon: RiTiktokLine,
    href: "https://www.tiktok.com/@poradnia_magnolia_rybnik",
    color: "from-black to-gray-800",
  },
];

export default function Social() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-gray-800">
      <h2
        style={{ wordSpacing: "0.2rem" }}
        className="text-3xl sm:text-4xl md:text-5xl text-black font-semibold tracking-tight text-center leading-tight mb-8 sm:mb-12"
      >
        Bądź na bieżąco z naszymi mediami.
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {socialLinks.map((social) => (
          <Card
            key={social.name}
            className="rounded-2xl sm:rounded-[32px] overflow-hidden border-none shadow-lg"
          >
            <CardContent
              className={`p-0 h-full bg-gradient-to-br ${social.color}`}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  className="w-full h-full py-6 sm:py-8 px-2 sm:px-4 text-white hover:text-white hover:bg-transparent"
                >
                  <div className="flex flex-col items-center space-y-2 sm:space-y-4">
                    <social.icon className="w-8 h-8 sm:w-12 sm:h-12" />
                    <span className="text-sm sm:text-base font-medium">
                      {social.name}
                    </span>
                  </div>
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
