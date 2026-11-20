/**
 * Featured hero rotation for the web homepage.
 * Edit HERO_QUEUE order to curate; scene titles, stories, and images live in
 * the era files / MOCK_SCENES. This file holds slug references only.
 */

/** Flip to `'daily'` for a one-line cadence change. */
export const HERO_CADENCE: 'weekly' | 'daily' = 'weekly';

/**
 * Monday 2026-09-21 00:00 UTC: start of the Europe/Warsaw ISO week that
 * contains 2026-09-23. Index 0 (Course of Empire) is current for that week.
 */
const HERO_EPOCH_MS = Date.UTC(2026, 8, 21);

const MS_PER_DAY = 86_400_000;
const MS_PER_WEEK = 7 * MS_PER_DAY;

/**
 * Ordered featured slugs. First entry is the current hero when the epoch week
 * (or day) is active. Museum mix across eras from the curated MOCK_SCENES block.
 */
export const HERO_QUEUE = [
  'the-course-of-empire',
  'the-last-day-of-pompeii',
  'the-fourteenth-of-july',
  'the-hot-gates',
  'the-fog-at-sekigahara',
  'liberty-on-the-barricade',
  'the-goddess-returns',
  'the-last-tow',
  'nelsons-ocean',
  'forty-two-lines',
  'twelve-seconds',
  'the-sea-wolves-of-lindisfarne',
] as const;

export type HeroSlug = (typeof HERO_QUEUE)[number];

export function heroQueueIndex(now: Date = new Date()): number {
  const elapsed = now.getTime() - HERO_EPOCH_MS;
  const unitMs = HERO_CADENCE === 'daily' ? MS_PER_DAY : MS_PER_WEEK;
  const units = Math.floor(elapsed / unitMs);
  const len = HERO_QUEUE.length;
  return ((units % len) + len) % len;
}

export function pickHeroSlug(now: Date = new Date()): string {
  return HERO_QUEUE[heroQueueIndex(now)];
}
