"use client";

import dynamic from "next/dynamic";

const StickyHeader = dynamic(() => import("./StickyHeader"), { ssr: false });
const StickyMobileCTA = dynamic(() => import("./StickyMobileCTA"), { ssr: false });
const ScrollTracker = dynamic(() => import("./ScrollTracker"), { ssr: false });
const LeadProofBubble = dynamic(() => import("./LeadProofBubble"), { ssr: false });

export default function ClientOverlays() {
  return (
    <>
      <StickyHeader />
      <StickyMobileCTA />
      <ScrollTracker />
      <LeadProofBubble />
    </>
  );
}
