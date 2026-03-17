"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-5xl font-semibold tracking-tight text-center mb-16"
          style={{ wordSpacing: "0.2rem" }}
        >
          Skontaktuj się z nami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Card className="rounded-[32px] overflow-hidden shadow-lg border-none bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Wyślij wiadomość</h3>
              <form className="space-y-6">
                <Input
                  placeholder="Imię i nazwisko"
                  className="rounded-full border-gray-300"
                />
                <Input
                  type="email"
                  placeholder="Adres e-mail"
                  className="rounded-full border-gray-300"
                />
                <Input
                  placeholder="Temat"
                  className="rounded-full border-gray-300"
                />
                <Textarea
                  placeholder="Twoja wiadomość"
                  className="rounded-3xl border-gray-300 min-h-[150px]"
                />
                <Button className="w-full rounded-full bg-[#921d7f] hover:bg-[#7a1968] text-white py-6">
                  Wyślij wiadomość
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card className="rounded-[32px] overflow-hidden shadow-lg border-none bg-[#921d7f] text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Informacje kontaktowe
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4" />
                    <span>+48 123 456 789</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4" />
                    <span>kontakt@magnolia-poradnia.pl</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4" />
                    <span>ul. Przykładowa 123, 00-000 Miasto</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-[32px] overflow-hidden shadow-lg border-none bg-purple-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Godziny otwarcia
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Poniedziałek - Piątek:</span>
                    <span>9:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sobota:</span>
                    <span>10:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Niedziela:</span>
                    <span>Zamknięte</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
