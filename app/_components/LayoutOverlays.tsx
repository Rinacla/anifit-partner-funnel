"use client";

import dynamic from "next/dynamic";

const CookieBanner = dynamic(() => import("./CookieBanner"), { ssr: false });
const ExitIntentPopup = dynamic(() => import("./ExitIntentPopup"), { ssr: false });
const SocialProofToast = dynamic(() => import("./SocialProofToast"), { ssr: false });

export default function LayoutOverlays() {
  return (
    <>
      <CookieBanner />
      <ExitIntentPopup />
      <SocialProofToast />
    </>
  );
}
