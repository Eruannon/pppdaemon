import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";



import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import RootLayoutContent from "@/components/layout-components/RootLayoutContent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Poradnia Psychologiczno-Pedagogiczna Magnolia",
  description:
    "Pomoc psychologiczno-pedagogiczna dla dzieci, młodzieży i dorosłych w Rybniku.",
  keywords: [
    "poradnia psychologiczna",
    "pedagogika",
    "terapia dzieci",
    "terapia młodzieży",
    "psycholog Rybnik",
    "pomoc psychologiczna",
    "psychoterapia",
    "terapia rodzinna",
    "terapia uzależnień",
    "wczesne wspomaganie rozwoju dziecka",
  ],
  authors: [{ name: "Poradnia Psychologiczno-Pedagogiczna Magnolia" }],
  openGraph: {
    title: "Poradnia Psychologiczno-Pedagogiczna Magnolia - Rybnik",
    description:
      "Pomoc psychologiczno-pedagogiczna dla dzieci, młodzieży i dorosłych w Rybniku.",
    url: "https://www.poradniamagnolia.pl",
    siteName: "Poradnia Magnolia",
    images: [
      {
        url: "https://www.poradniamagnolia.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Poradnia Psychologiczno-Pedagogiczna Magnolia",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poradnia Psychologiczno-Pedagogiczna Magnolia",
    description:
      "Pomoc psychologiczno-pedagogiczna dla dzieci, młodzieży i dorosłych w Rybniku.",
    images: ["https://www.poradniamagnolia.pl/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#921d7f" />
        <meta
          name="author"
          content="Poradnia Psychologiczno-Pedagogiczna Magnolia"
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Poradnia Psychologiczno Pedagogiczna Magnolia",
              description:
                "Pomoc psychologiczno-pedagogiczna dla dzieci, młodzieży i dorosłych",
              url: "https://www.poradniamagnolia.pl",
              telephone: "+48789790860",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Magnolii 25",
                addressLocality: "Rybnik",
                postalCode: "44-207",
                addressCountry: "PL",
              },
              openingHours: "Mo,Tu,We,Th,Fr 07:00-21:00",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <RootLayoutContent>{children}</RootLayoutContent>
        <GoogleTagManager gtmId="G-0QW3ZG23F5" />
      </body>
    </html>
  );
}
