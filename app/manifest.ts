import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anifit-Fachberater werden",
    short_name: "Anifit Partner",
    description:
      "Werde Anifit-Fachberater: 15–30 % Provision auf Premium-Hundefutter, lebenslanger Kundenschutz, kostenloser Start.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4CAF50",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    lang: "de",
    categories: ["business", "finance"],
  };
}
