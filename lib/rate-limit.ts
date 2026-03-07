/**
 * Simple in-memory rate limiter for API routes.
 * Prevents spam submissions and email abuse.
 *
 * Uses a sliding window per IP with automatic cleanup.
 */

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

// Cleanup stale entries every 5 minutes
const CLEANUP_INTERVAL = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanup(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  const cutoff = now - windowMs;
  for (const [key, entry] of store) {
    entry.timestamps = entry.timestamps.filter((t) => t > cutoff);
    if (entry.timestamps.length === 0) store.delete(key);
  }
}

/**
 * Check if a request should be rate-limited.
 * @param key - Unique identifier (usually IP address)
 * @param maxRequests - Max requests allowed in the window (default: 5)
 * @param windowMs - Time window in ms (default: 15 minutes)
 * @returns true if the request should be BLOCKED
 */
export function isRateLimited(
  key: string,
  maxRequests = 5,
  windowMs = 15 * 60 * 1000
): boolean {
  cleanup(windowMs);

  const now = Date.now();
  const cutoff = now - windowMs;
  const entry = store.get(key);

  if (!entry) {
    store.set(key, { timestamps: [now] });
    return false;
  }

  // Remove expired timestamps
  entry.timestamps = entry.timestamps.filter((t) => t > cutoff);

  if (entry.timestamps.length >= maxRequests) {
    return true; // BLOCKED
  }

  entry.timestamps.push(now);
  return false;
}

/**
 * Extract client IP from Next.js request headers.
 * Checks x-forwarded-for (Vercel/proxies) first, falls back to x-real-ip.
 */
export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return headers.get("x-real-ip") || "unknown";
}
