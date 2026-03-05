import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anifit Berater werden. 15–30% Provision auf Premium-Hundefutter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "20px",
            fontWeight: 600,
            color: "#15803d",
            background: "#dcfce7",
            padding: "8px 24px",
            borderRadius: "999px",
            marginBottom: "32px",
          }}
        >
          Kostenloser Guide
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "56px",
            fontWeight: 800,
            color: "#111827",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          Dein Start als Tierernährungsberater
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#4b5563",
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          15–30 % Provision · Kein Lager · Persönlicher Mentor · Lebenslanger Kundenschutz
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            fontSize: "18px",
            color: "#6b7280",
          }}
        >
          partner.anifutter-shop.de · Enrico Bachmann
        </div>
      </div>
    ),
    { ...size }
  );
}
