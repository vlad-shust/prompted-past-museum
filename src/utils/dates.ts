import { differenceInCalendarDays, format, subDays } from 'date-fns';

import { toIsoDate, toMonthDay } from '@/types/common.types';
import type { IsoDate, MonthDay } from '@/types/common.types';

export function isoDay(date: Date): IsoDate {
  return toIsoDate(format(date, 'yyyy-MM-dd'));
}

/** Whole calendar days between two IsoDates, always >= 0, earlier-or-equal first. */
export function daysBetween(from: IsoDate, to: IsoDate): number {
  return Math.max(0, differenceInCalendarDays(new Date(to), new Date(from)));
}

export function todayIso(): IsoDate {
  return isoDay(new Date());
}

export function todayMonthDay(now: Date = new Date()): MonthDay {
  return toMonthDay(format(now, 'MM-dd'));
}

export function isoDaysAgo(days: number): IsoDate {
  return toIsoDate(format(subDays(new Date(), days), 'yyyy-MM-dd'));
}

/** "480 BC" | "AD 79" | "1453" — the house style for timeline years. */
export function formatHistoricalYear(year: number): string {
  if (year < 0) return `${-year} BC`;
  if (year < 1000) return `AD ${year}`;
  return String(year);
}

/** "Friday, 4 July" — the Today screen masthead date. */
export function formatMastheadDate(date: Date): string {
  return format(date, 'EEEE, d MMMM');
}
