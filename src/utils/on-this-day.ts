import type { Scene } from '@/types/domain.types';
import { todayMonthDay } from './dates';

/**
 * Years since the scene's moment when today is its calendar anniversary,
 * otherwise null. Qualification is recomputed live from the scene's
 * historical month-day against the device date, never from the stored
 * editorial flag — that flag is frozen at publish time and would keep
 * asserting the anniversary (and inflating the count) on every later date.
 */
export function onThisDayYears(scene: Scene, now: Date = new Date()): number | null {
  const matches = scene.historicalMonthDay !== null && scene.historicalMonthDay === todayMonthDay(now);
  if (!matches) return null;
  // No year zero: 480 BC → AD 2026 is 2505 years, not 2506.
  return now.getFullYear() - scene.historicalYear - (scene.historicalYear < 0 ? 1 : 0);
}

/** "1,947" — grouped digits for the anniversary pill. */
export function formatYearsAgo(years: number): string {
  return years.toLocaleString('en-US');
}
