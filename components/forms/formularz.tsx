"use client";

import React from "react";
import { useForm } from "@formspree/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkndgljk");

  if (state.succeeded) {
    return (
      <p className="text-base font-semibold text-green-600">
        Dziękujemy za wiadomość!
      </p>
    );
  }

  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Wyślij wiadomość
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="full-name"
              className="block text-base font-semibold mb-3"
            >
              Imię/Pseudonim
            </label>
            <Input
              type="text"
              name="name"
              id="full-name"
              placeholder="Imię/Pseudonim"
              required
              className="bg-[#921d7f]/20 border border-[#921d7f] placeholder:font-semibold placeholder:text-xs placeholder:text-[#921d7f]"
            />
          </div>
          <div>
            <label
              htmlFor="email-address"
              className="block text-base font-semibold mb-3"
            >
              Adres Email
            </label>
            <Input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="email@domain.com"
              required
              className="bg-[#921d7f]/20 border border-[#921d7f] placeholder:font-semibold placeholder:text-xs placeholder:text-[#921d7f]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-base font-semibold mb-3"
            >
              Wiadomość
            </label>
            <Textarea
              name="message"
              id="message"
              placeholder="Twoja wiadomość..."
              required
              className="bg-[#921d7f]/20 border border-[#921d7f] placeholder:font-semibold placeholder:text-xs placeholder:text-[#921d7f]"
            />
          </div>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Zgłoszenie z formularza kontaktowego"
          />
          <Button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#921d7f] text-white hover:bg-blue-600"
          >
            Wyślij
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
