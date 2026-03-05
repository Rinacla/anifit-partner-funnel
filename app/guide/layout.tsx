import Script from "next/script";

export const metadata = {
  title: "Guide: Dein Start als Anifit-Tierernährungsberater",
  description: "Alles was du wissen musst um als Anifit-Fachberater zu starten.",
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="meta-vc-guide" strategy="afterInteractive">{`
        if(typeof fbq === 'function') { fbq('track', 'ViewContent', {content_name: 'Teampartner Guide'}); }
      `}</Script>
      {children}
    </>
  );
}
