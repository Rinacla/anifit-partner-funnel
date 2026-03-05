"use client";

import { useEffect, useRef } from "react";

const DEPTH_MILESTONES = [25, 50, 75, 100];

export default function ScrollTracker() {
  const firedDepths = useRef(new Set<number>());

  useEffect(() => {
    const fbq = (window as any).fbq;
    if (typeof fbq !== "function") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const milestone of DEPTH_MILESTONES) {
        if (pct >= milestone && !firedDepths.current.has(milestone)) {
          firedDepths.current.add(milestone);
          fbq("trackCustom", "ScrollDepth", { percent: milestone });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
