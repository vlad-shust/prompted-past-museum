declare const __brand: unique symbol;

export type Brand<T, B extends string> = T & { readonly [__brand]: B };

export type SceneId = Brand<string, 'SceneId'>;
export type ForgeId = Brand<string, 'ForgeId'>;
export type EraId = Brand<string, 'EraId'>;
export type StudioPieceId = Brand<string, 'StudioPieceId'>;

/** Calendar day in the device's local timezone, formatted YYYY-MM-DD. */
export type IsoDate = Brand<string, 'IsoDate'>;

/** Calendar anniversary independent of year, formatted MM-DD. */
export type MonthDay = Brand<string, 'MonthDay'>;

const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const MONTH_DAY_PATTERN = /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

function assertNonEmpty(raw: string, label: string): void {
  if (raw.length === 0) throw new Error(`Invalid ${label}: empty string`);
}

export function toSceneId(raw: string): SceneId {
  assertNonEmpty(raw, 'SceneId');
  return raw as SceneId;
}

export function toForgeId(raw: string): ForgeId {
  assertNonEmpty(raw, 'ForgeId');
  return raw as ForgeId;
}

export function toEraId(raw: string): EraId {
  assertNonEmpty(raw, 'EraId');
  return raw as EraId;
}

export function toStudioPieceId(raw: string): StudioPieceId {
  assertNonEmpty(raw, 'StudioPieceId');
  return raw as StudioPieceId;
}

export function toIsoDate(raw: string): IsoDate {
  if (!ISO_DATE_PATTERN.test(raw)) throw new Error(`Invalid IsoDate: "${raw}"`);
  return raw as IsoDate;
}

export function toMonthDay(raw: string): MonthDay {
  if (!MONTH_DAY_PATTERN.test(raw)) throw new Error(`Invalid MonthDay: "${raw}"`);
  return raw as MonthDay;
}
