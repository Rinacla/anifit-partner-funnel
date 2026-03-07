import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import LayoutOverlays from "./_components/LayoutOverlays";
import ConsentGatedPixel from "./_components/ConsentGatedPixel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "var(--brand)",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://partner.anifutter-shop.de"),
  title: {
    default: "Anifit-Fachberater werden | Enrico Bachmann",
    template: "%s | Enrico Bachmann",
  },
  description:
    "Werde Anifit-Fachberater: 15–30% Provision auf Premium-Hundefutter, lebenslanger Kundenschutz, keine Lagerhaltung. Kostenloser Start.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Anifit-Fachberater werden | Enrico Bachmann",
    description:
      "Werde Anifit-Fachberater: 15–30% Provision auf Premium-Hundefutter, lebenslanger Kundenschutz, keine Lagerhaltung. Kostenloser Start.",
    locale: "de_DE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Facebook preconnect moved to lib/consent.ts loadMetaPixel() — DSGVO requires no
            network requests to tracking providers before explicit user consent (even dns-prefetch
            leaks IP to Facebook). Preconnect is now injected dynamically after "Akzeptieren". */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Enrico Bachmann — Anifit-Fachberater",
              url: "https://partner.anifutter-shop.de",
              logo: "https://partner.anifutter-shop.de/enrico.webp",
              description:
                "Werde Anifit-Fachberater: 15–30 % Provision auf Premium-Hundefutter mit lebenslangem Kundenschutz. Persönliche Einarbeitung durch Enrico Bachmann.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+49-322-12619379",
                contactType: "customer service",
                availableLanguage: "German",
                email: "partner@anifutter-shop.de",
              },
              sameAs: [
                "https://wa.me/4915204000990",
                "https://www.anifutter-shop.de",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Anifit-Fachberater werden",
              url: "https://partner.anifutter-shop.de",
              description:
                "Werde Anifit-Fachberater: 15–30 % lebenslange Provision auf Premium-Hundefutter mit persönlicher Einarbeitung.",
              publisher: {
                "@type": "Person",
                name: "Enrico Bachmann",
              },
              potentialAction: {
                "@type": "ReadAction",
                target: "https://partner.anifutter-shop.de/faq",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}<LayoutOverlays /><ConsentGatedPixel /></body>
    </html>
  );
}
