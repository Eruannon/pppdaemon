"use client";
import Link from "next/link";
import { FaAngleRight, FaFacebookF } from "react-icons/fa";
import { FaTiktok, FaYoutube } from "react-icons/fa6";
import { Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Menu",
    links: [
      { name: "Strona główna", href: "/" },
      { name: "Cennik", href: "/oferta" },
      
      { name: "Galeria cyfrowa", href: "/videos" },
      { name: "Regulamin", href: "/regulamin" },
      { name: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Sprawdź",
    links: [
      { name: "Dołącz do Magnolii", href: "/dolacz-do-magnolii" },
      { name: "Dokumenty", href: "/dokumenty" },
      
      {
        name: "Standardy ochrony małoletnich w placówkach oświatowych",
        href: "/standardy-ochrony-maloletnich-w-placowkach-oswiatowych",
      },
      { name: "Multimedia na stronie", href: "/grafiki-na-stronie" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { name: "+48 789 790 860", href: "tel:+48789790860" },
      { name: "+48 690 515 224", href: "tel:+48690515224" },
      { name: "+48 797 173 501", href: "tel:+48797173501" },
      { name: "+48 502 162 365", href: "tel:+48502162365" },
      { name: "+48 503 192 950", href: "tel:+48503192950" },
      { name: "Magnolii 25, Rybnik", href: "" },
      
      
      
      
      
      {
        name: "poradniamagnolia@gmail.com",
        href: "mailto:poradniamagnolia@gmail.com",
      },
    ],
  },
];

const socialLinks = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@poradnia_magnolia_rybnik",
    icon: FaTiktok,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61564201791275",
    icon: FaFacebookF,
  },
  {
    name: "Facebook (EW)",
    href: "https://www.facebook.com/groups/1071990153582830",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@PPP-MAGNOLIA",
    icon: FaYoutube,
  },
];

const emergencyNumbers = [
  {
    name: "Centrum wsparcia dla osób dorosłych w kryzysie psychicznym",
    number: "800 702 222",
  },
  { name: "Niebieska Linia", number: "800 120 002" },
  {
    name: "Telefon dla rodziców i opiekunów dzieci w kryzysie",
    number: "800 800 602",
  },
  { name: "Telefon zaufania dla dzieci i młodzieży", number: "116 111" },
  {
    name: "Dzięcięcy telefon zaufania Rzecznika Praw Dziecka",
    number: "800 121 212",
  },
  {
    name: "Numer alarmowy w sytuacji zagrożenia życia i zdrowia",
    number: "112",
  },
  {
    name: "Telefon dla rodziców i nauczycieli w sprawie bezpieczeństwa dzieci",
    number: "800 100 100",
  },
  {
    name: "Policyjny telefon zaufania ds. przeciwdziałania przemocy w rodzinie",
    number: "800 120 226",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="relative">
        
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="py-20 lg:py-28">
            
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 xl:gap-20">
                {footerLinks.map((section, index) => (
                  <div key={index} className="space-y-8">
                    <div className="relative">
                      <h3 className="text-xl font-bold text-white mb-2 relative">
                        {section.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-[#921D7F] rounded-full" />
                    </div>

                    <nav className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <div key={linkIndex}>
                          <Link
                            href={link.href}
                            className="group flex items-start gap-3 text-slate-300 hover:text-white transition-all duration-300 text-sm leading-relaxed"
                          >
                            <FaAngleRight className="flex-shrink-0 mt-0.5 text-xs text-slate-500 group-hover:text-[#921D7F] group-hover:translate-x-1 transition-all duration-300" />
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              {link.name}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </nav>
                  </div>
                ))}

                
                <div className="space-y-8">
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-2 relative">
                      Social Media
                    </h3>
                    <div className="w-12 h-0.5 bg-[#921D7F] rounded-full" />
                  </div>

                  <div className="space-y-4">
                    {socialLinks.map((link, index) => (
                      <div key={index}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-300 text-sm"
                        >
                          <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-[#921D7F] flex items-center justify-center transition-all duration-300">
                            <link.icon className="text-xs group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            
            <div className="border-t border-slate-700/50 pt-16">
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Numery pomocnicze
                </h2>
                <div className="w-24 h-0.5 bg-[#921D7F] rounded-full mx-auto" />
                <p className="text-slate-400 mt-4 text-sm">
                  W sytuacji kryzysowej nie wahaj się skorzystać z pomocy
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {emergencyNumbers.map((contact, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800/30 hover:bg-slate-800/50 rounded-xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#921D7F]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#921D7F]/30 transition-all duration-300">
                        <Phone className="w-4 h-4 text-[#921D7F]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-medium text-white mb-2 leading-snug">
                          {contact.name}
                        </h4>
                        <p className="text-lg font-bold text-[#921D7F] group-hover:text-[#921D7F]/80 transition-colors duration-300">
                          {contact.number}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-slate-700/50 bg-slate-900/50">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16 2xl:px-24">
            <div className="py-8 text-center">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} Poradnia MAGNOLIA. Wszelkie
                prawa zastrzeżone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
