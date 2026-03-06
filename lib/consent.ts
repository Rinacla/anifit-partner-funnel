/**
 * DSGVO-compliant consent management.
 * Meta Pixel must NOT fire before user gives explicit consent.
 */

export function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("cookie_consent") === "accepted";
}

export function setConsent(accepted: boolean): void {
  localStorage.setItem("cookie_consent", accepted ? "accepted" : "declined");
}

/**
 * Load Meta Pixel dynamically after consent.
 * Safe to call multiple times — will only load once.
 */
export function loadMetaPixel(): void {
  if (typeof window === "undefined") return;
  if ((window as any).__metaPixelLoaded) return;
  (window as any).__metaPixelLoaded = true;

  // Initialize fbq via inline script (same as Meta's standard snippet)
  const script = document.createElement("script");
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init','1366154121191008');
    fbq('track','PageView');
  `;
  document.head.appendChild(script);
}

/**
 * Disable Meta Pixel (replace fbq with noop).
 */
export function disableMetaPixel(): void {
  if (typeof window === "undefined") return;
  (window as any).fbq = function () {};
  (window as any).__metaPixelLoaded = false;
}

/**
 * Safe fbq call — only fires if consent was given and pixel is loaded.
 */
export function trackEvent(
  eventType: "track" | "trackCustom",
  eventName: string,
  params?: Record<string, any>
): void {
  if (!hasConsent()) return;
  const fbq = (window as any).fbq;
  if (typeof fbq !== "function") return;
  if (params) {
    fbq(eventType, eventName, params);
  } else {
    fbq(eventType, eventName);
  }
}
