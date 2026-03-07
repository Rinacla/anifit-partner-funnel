/**
 * Design System — Anifit Partner Funnel
 *
 * Shared constants for consistent styling across components.
 * CSS utility classes (.btn-brand, .card, .input, etc.) are in globals.css.
 * Tailwind theme colors (brand-*, warm-*, danger-*) are in globals.css @theme inline.
 *
 * Usage: import { ds } from '@/lib/design'
 */

export const ds = {
  // ── Colors (CSS variable references for inline styles) ──
  brand: 'var(--brand)',
  brandHover: 'var(--brand-hover)',
  brandShadow: 'var(--brand-shadow)',
  brandLight: 'var(--brand-light)',
  whatsapp: 'var(--color-whatsapp)',

  // ── Section container ──
  section: 'mx-auto max-w-3xl px-6',
  sectionWide: 'mx-auto max-w-4xl px-6',
  sectionNarrow: 'mx-auto max-w-2xl px-6',

  // ── Typography (Tailwind classes) ──
  heading: {
    xl: 'text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight',
    lg: 'text-3xl font-bold',
    md: 'text-2xl font-bold',
    sm: 'text-xl font-bold',
    xs: 'text-lg font-bold',
  },

  // ── Text hierarchy ──
  text: {
    body: 'text-gray-700 leading-relaxed',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    faint: 'text-gray-500 text-xs',
    brand: 'text-brand-600',
  },

  // ── Common patterns ──
  pill: 'inline-block text-xs font-bold tracking-widest uppercase text-brand-700 bg-brand-100 px-4 py-1.5 rounded-full',
  badge: 'inline-block text-xs px-2 py-1 rounded-full',
  divider: 'border-t border-gray-100',
  iconCircle: 'flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center',
} as const;
