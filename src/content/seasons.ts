import { getEra } from './eras';
import { toEraId } from '../types/common.types';
import type { Season } from '../types/domain.types';

/**
 * Development stand-in seasons: a fixed month→era rotation so the season
 * line always renders in mock mode. Live seasons come from the `seasons`
 * table, set via `npm run editorial -- season set`.
 */
const MOCK_SEASON_ERA_BY_MONTH: Readonly<Record<number, string>> = {
  1: 'ancient-egypt',
  2: 'classical-greece',
  3: 'roman-empire',
  4: 'feudal-japan',
  5: 'medieval-europe',
  6: 'renaissance',
  7: 'viking-age',
  8: 'age-of-sail',
  9: 'revolutionary-age',
  10: 'machine-age',
  11: 'roman-empire',
  12: 'ancient-egypt',
};

export function mockSeasonFor(now: Date): Season {
  const month = now.getMonth() + 1;
  const eraId = toEraId(MOCK_SEASON_ERA_BY_MONTH[month] ?? 'roman-empire');
  return { year: now.getFullYear(), month, eraId, title: getEra(eraId).name };
}
