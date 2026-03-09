"use client";

import { useEffect } from "react";
import { hasConsent, loadMetaPixel, loadGoogleAdsTag } from "../../lib/consent";

/**
 * DSGVO-compliant tracking loader.
 * Only loads Meta Pixel + Google Ads gtag if user has previously given consent.
 * New users see CookieBanner first — tracking loads only after "Akzeptieren".
 */
export default function ConsentGatedPixel() {
  useEffect(() => {
    if (hasConsent()) {
      loadMetaPixel();
      loadGoogleAdsTag();
    }
  }, []);

  return null;
}
