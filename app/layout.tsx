import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anifit-Fachberater werden | Enrico Bachmann",
  description:
    "Werde Anifit-Fachberater: 15–30% Provision auf Premium-Hundefutter, lebenslanger Kundenschutz, keine Lagerhaltung. Kostenloser Start.",
  openGraph: {
    title: "Anifit-Fachberater werden | Enrico Bachmann",
    description:
      "Werde Anifit-Fachberater: 15–30% Provision auf Premium-Hundefutter, lebenslanger Kundenschutz, keine Lagerhaltung. Kostenloser Start.",
    locale: "de_DE",
    type: "website",
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
