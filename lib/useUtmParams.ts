"use client";

import { useEffect, useState } from "react";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  ref?: string;
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "ref",
] as const;

const STORAGE_KEY = "anifit_utm";

/**
 * Captures UTM parameters from the URL on first visit and persists them
 * in sessionStorage so they survive navigation within the funnel.
 * Returns the captured params (empty object if none).
 */
export function useUtmParams(): UtmParams {
  const [params, setParams] = useState<UtmParams>({});

  useEffect(() => {
    // Try to read from URL first
    const url = new URL(window.location.href);
    const fromUrl: UtmParams = {};
    let hasUrlParams = false;

    for (const key of UTM_KEYS) {
      const val = url.searchParams.get(key);
      if (val) {
        fromUrl[key] = val;
        hasUrlParams = true;
      }
    }

    if (hasUrlParams) {
      // Fresh UTM params in URL — save and use them
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      } catch {}
      setParams(fromUrl);
      return;
    }

    // No URL params — check sessionStorage for earlier capture
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        setParams(JSON.parse(stored));
      }
    } catch {}
  }, []);

  return params;
}
