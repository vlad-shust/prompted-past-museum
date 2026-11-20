/**
 * Local copy of the app's year formatting (src/utils/dates.ts) — the app
 * module pulls date-fns, which the web bundle doesn't need.
 */
export function formatHistoricalYear(year: number): string {
  if (year < 0) return `${-year} BC`;
  if (year < 1000) return `AD ${year}`;
  return String(year);
}

/** Site rule: no en or em dashes on the web. Swaps them for a plain hyphen in every string of a value. */
export function plainDashes<T>(value: T): T {
  if (typeof value === 'string') return value.replace(/[\u2013\u2014]/g, '-') as T;
  if (Array.isArray(value)) return value.map(plainDashes) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, plainDashes(v)]),
    ) as T;
  }
  return value;
}
