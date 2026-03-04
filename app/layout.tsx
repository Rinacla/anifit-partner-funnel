import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
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
  metadataBase: new URL("https://anifit-partner.de"),
  title: {
    default: "Anifit-Fachberater werden | Enrico Bachmann",
    template: "%s | Enrico Bachmann",
  },
  description:
    "Werde Anifit-Fachberater: 15–30% Provision auf Premium-Hundefutter, lebenslanger Kundenschutz, keine Lagerhaltung. Kostenloser Start.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anifit-Fachberater werden | Enrico Bachmann",
    description:
      "Werde Anifit-Fachberater: 15–30% Provision auf Premium-Hundefutter, lebenslanger Kundenschutz, keine Lagerhaltung. Kostenloser Start.",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
