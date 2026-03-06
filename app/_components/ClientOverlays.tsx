"use client";

import dynamic from "next/dynamic";

const StickyHeader = dynamic(() => import("./StickyHeader"), { ssr: false });
const StickyMobileCTA = dynamic(() => import("./StickyMobileCTA"), { ssr: false });
const ScrollTracker = dynamic(() => import("./ScrollTracker"), { ssr: false });
const LeadProofBubble = dynamic(() => import("./LeadProofBubble"), { ssr: false });
const ScrollProgressBar = dynamic(() => import("./ScrollProgressBar"), { ssr: false });

export default function ClientOverlays() {
  return (
    <>
      <ScrollProgressBar />
      <StickyHeader />
      <StickyMobileCTA />
      <ScrollTracker />
      <LeadProofBubble />
    </>
  );
}
