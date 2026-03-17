"use client";

import type React from "react";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "@formspree/react";

export default function ContactComponent() {
  const [state, handleSubmit] = useForm("mkndgljk");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full ">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-0 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            <div className="lg:border-r lg:border-gray-200 px-0 lg:px-8 flex justify-center">
              <div className="space-y-8 max-w-6xl w-full">
                <div className="space-y-8">
                 <div className="flex flex-col items-start gap-1">
  <h2 className="text-3xl font-semibold tracking-tight text-gray-800 leading-tight">
    Siedziba PP-P
  </h2>
  <h3 className="text-base font-medium text-gray-700 leading-snug">
    Nr wpisu do rejestru poradni niepublicznych: E-I.4430.51.2023
  </h3>
</div>

                  <div className=" grid grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                        <p className="text-gray-700">
                          ul. Magnolii 25, <br /> 44-207 Rybnik - Golejów
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-3">
                            <Phone className="w-5 h-5 text-gray-600" />
                            <p className="text-gray-700">+48 789 790 860</p>
                          </div>
                          <div className="flex gap-3">
                            <Phone className="w-5 h-5 text-gray-600" />
                            <p className="text-gray-700">+48 690 515 224</p>
                          </div>
                          <div className="flex gap-3">
                            <Phone className="w-5 h-5 text-gray-600" />
                            <p className="text-gray-700">+48 797 173 501</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <p className="text-gray-700">
                          poradniamagnolia@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-600" />
                        <h3 className="font-semibold text-gray-900">
                          Godziny otwarcia
                        </h3>
                      </div>
                      <p className="text-gray-700 pl-8">
                        Poniedziałek - Piątek: 8:00 - 19:00
                      </p>
                      <p className="text-gray-700 pl-8">Sobota: Zamknięte</p>
                      <p className="text-gray-700 pl-8">Niedziela: Zamknięte</p>
                    </div>
                  </div>

                  <div className="w-full h-48">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.024484924247!2d18.53624251590285!3d50.0821749794281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114203b67f308d%3A0xf5c3dfe09b098aef!2sMagnolii%2025%2C%2044-207%20Rybnik%2C%20Poland!5e0!3m2!1sen!2sus!4v1686053256452!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="px-0 lg:px-8 flex justify-center">
              <div className="flex flex-col items-start gap-1">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-800">
                  Oddział w&nbsp;Centrum&nbsp;Rybnika <br />(kampus)
                </h2>
                  <p className="text-sm font-medium text-gray-700 leading-snug">
    Nr wpisu do rejestru poradni niepublicznych:  E-I.4430.51.2023 akt.1.09.2025 <br /><br />
  </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <p className="text-gray-700">
                      ul. Rudzka 13c, budynek B, <br />
                      44-200 Rybnik - Centrum
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3">
                        <Phone className="w-5 h-5 text-gray-600" />
                        <p className="text-gray-700">+48 789 790 860</p>
                      </div>
                      <div className="flex gap-3">
                        <Phone className="w-5 h-5 text-gray-600" />
                        <p className="text-gray-700">+48 690 515 224</p>
                      </div>
                      <div className="flex gap-3">
                            <Phone className="w-5 h-5 text-gray-600" />
                            <p className="text-gray-700">+48 797 173 501</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <p className="text-gray-700">poradniamagnolia@gmail.com</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <h3 className="font-semibold text-gray-900">
                      Godziny otwarcia
                    </h3>
                  </div>
                  <p className="text-gray-700 pl-8">
                    Godziny otwarcia uwarunkowane są&nbsp;przez uzgodniony
                    wcześniej harmonogram spotkań. Przekazanie dokumentów i
                    kontakt bezpośredni odbywa się w głównym oddziale.
                  </p>
                </div>

                <div className="w-full h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.9023448425384!2d18.89149731571725!3d50.28917997945366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711310231a6b2e7%3A0x8bf7f73708eaf739!2sRudzka%2013C%2C%2044-200%20Rybnik!5e0!3m2!1sen!2spl!4v1638888888888!5m2!1sen!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

           <div className="lg:border-r lg:border-gray-200 lg:px-8 first:lg:pl-0 last:lg:pr-0 last:lg:border-r-0 flex justify-center">
<div className="flex flex-col items-start gap-1">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-800">
                  Filia w&nbsp;Wodzisławiu&nbsp;Śląskim
                </h2>
                  <p className="text-sm font-medium text-gray-700 leading-snug">
    Nr wpisu do rejestru poradni niepublicznych: WO.4330.74.2025 <br /><br />
  </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                  <p className="text-gray-700">
                    os. XXX-lecia 60, <br />
                    44-300 Wodzisław Śląski<br />
                    (poradnia rejonowa, I piętro)
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <p className="text-gray-700">+48 789 790 860</p>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <p className="text-gray-700">+48 690 515 224</p>
                    </div>
                    <div className="flex gap-3">
                            <Phone className="w-5 h-5 text-gray-600" />
                            <p className="text-gray-700">+48 797 173 501</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <p className="text-gray-700">poradniamagnolia@gmail.com</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">
                    Godziny otwarcia
                  </h3>
                </div>
                <p className="text-gray-700 pl-8">
                  Godziny otwarcia uwarunkowane są&nbsp;przez uzgodniony
                  wcześniej harmonogram spotkań. Przekazanie dokumentów i
                  kontakt bezpośredni odbywa się w głównym oddziale.
                </p>
              </div>

              <div className="w-full h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.9814061596603!2d18.453870613120845!3d50.01170371873745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711503f8cf5dd47%3A0xc11dcd101e1c87cf!2sosiedle%20XXX-lecia%2C%2044-286%20Wodzis%C5%82aw%20%C5%9Al%C4%85ski!5e0!3m2!1sen!2spl!4v1773398437212!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

 <div className="lg:border-r lg:border-gray-200 lg:px-8 first:lg:pl-0 last:lg:pr-0 last:lg:border-r-0 flex justify-center">
            {/*<div className="space-y-8 max-w-sm w-full">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-800">
                Filia w Wodzisławiu Śląskim
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                  <p className="text-gray-700">
                    os. Orłowiec 17/2,
                    <br /> 44-280 Rydułtowy
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <p className="text-gray-700">+48 789 790 860</p>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <p className="text-gray-700">+48 690 515 224</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <p className="text-gray-700">poradniamagnolia@gmail.com</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">
                    Godziny otwarcia
                  </h3>
                </div>
                <p className="text-gray-700 pl-8">
                  Godziny otwarcia uwarunkowane są&nbsp;przez uzgodniony
                  wcześniej harmonogram spotkań. Przekazanie dokumentów i
                  kontakt bezpośredni odbywa się w głównym oddziale.
                </p>
              </div>

              <div className="w-full h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.123456789012!2d18.417123456789!3d50.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711234567890abc%3A0x1234567890abcdef!2sO%C5%9B.%20Or%C5%82owiec%2017%2F2%2C%2044-280%20Rydu%C5%82towy!5e0!3m2!1spl!2spl!4v1638888888888!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div> */}

          {/* <div className="lg:border-r lg:border-gray-200 lg:px-8 first:lg:pl-0 last:lg:pr-0 last:lg:border-r-0 flex justify-center">
            <div className="space-y-8 max-w-sm w-full">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-800">
                Oddział Rydułtowy
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                  <p className="text-gray-700">
                    os. Orłowiec 17/2,
                    <br /> 44-280 Rydułtowy
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <p className="text-gray-700">+48 789 790 860</p>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <p className="text-gray-700">+48 690 515 224</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <p className="text-gray-700">poradniamagnolia@gmail.com</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">
                    Godziny otwarcia
                  </h3>
                </div>
                <p className="text-gray-700 pl-8">
                  Godziny otwarcia uwarunkowane są&nbsp;przez uzgodniony
                  wcześniej harmonogram spotkań. Przekazanie dokumentów i
                  kontakt bezpośredni odbywa się w głównym oddziale.
                </p>
              </div>

              <div className="w-full h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.123456789012!2d18.417123456789!3d50.123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711234567890abc%3A0x1234567890abcdef!2sO%C5%9B.%20Or%C5%82owiec%2017%2F2%2C%2044-280%20Rydu%C5%82towy!5e0!3m2!1spl!2spl!4v1638888888888!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>*/}
          </div> 
        </div>

        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center tracking-tight">
            Skontaktuj się z nami
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            {state.succeeded ? (
              <p className="text-green-600 text-center mb-4">
                Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.
              </p>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Imię i nazwisko
                    </label>
                    <Input id="name" name="name" required />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Adres e-mail
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Temat
                  </label>
                  <Input id="subject" name="subject" required />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Wiadomość
                  </label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-[#921d7f] hover:bg-[#7a1968] text-white px-8 py-3 w-full"
                  >
                    {state.submitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
