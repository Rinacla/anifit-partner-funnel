"use client";

import { useEffect } from "react";
import { hasConsent, loadMetaPixel } from "../../lib/consent";

/**
 * DSGVO-compliant Meta Pixel loader.
 * Only loads the pixel if user has previously given consent.
 * New users see CookieBanner first — pixel loads only after "Akzeptieren".
 */
export default function ConsentGatedPixel() {
  useEffect(() => {
    if (hasConsent()) {
      loadMetaPixel();
    }
  }, []);

  return null;
}
