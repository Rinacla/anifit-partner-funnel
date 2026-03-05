import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import CookieBanner from "./_components/CookieBanner";
import ExitIntentPopup from "./_components/ExitIntentPopup";
import SocialProofToast from "./_components/SocialProofToast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4CAF50",
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
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1366154121191008');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1366154121191008&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}<CookieBanner /><ExitIntentPopup /><SocialProofToast /></body>
    </html>
  );
}
