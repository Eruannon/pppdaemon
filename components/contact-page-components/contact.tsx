"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "../forms/formularz";

export default function Kontakt() {
  return (
    <div className="font-sans overflow-x-hidden bg-white">
      <section className="">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-8">
              
              <div className="rounded-lg p-6">
                <div className="mb-6">
                  <Image
                    src="/assets/logo/logo.png"
                    alt="Logo"
                    width={200}
                    height={100}
                    className="mb-4"
                  />
                </div>
                <ul className="space-y-4 font-semibold tracking-tight">
                  <li className="flex items-center gap-2">
                    <Phone className="mr-2 text-[#921d7f]" />
                    +48 789 790 860
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="mr-2 text-[#921d7f]" />
                    +48 690 515 224
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="mr-2 text-[#921d7f]" />
                    +48 502 162 365
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="mr-2 text-[#921d7f]" />
                    poradniamagnolia@gmail.com
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="mr-2 text-[#921d7f]" />
                    Magnolii 25, 44-207 Rybnik
                  </li>
                </ul>

                <p className="text-md font-semibold tracking-tight mt-6">
                  Godziny otwarcia:
                </p>
                <p className="mb-4 flex font-semibold text-sm tracking-tight items-center">
                  <Clock className="mr-2 text-[#921d7f]" />
                  Poniedziałek - Piątek: 7:00 - 21:00
                </p>
              </div>

              
              <ContactForm />
            </div>

            
            <div className="h-full">
              <div className="rounded-lg p-2 h-full">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "450px" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.024484924247!2d18.53624251590285!3d50.0821749794281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114203b67f308d%3A0xf5c3dfe09b098aef!2sMagnolii%2025%2C%2044-207%20Rybnik%2C%20Poland!5e0!3m2!1sen!2sus!4v1686053256452!5m2!1sen!2sus"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
