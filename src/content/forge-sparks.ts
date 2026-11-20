import { toEraId } from '../types/common.types';
import type { EraId } from '../types/common.types';

/**
 * Example moments — the anti-blank-page tool. Shown as the composer
 * placeholder for the chosen era, and cycled into the field by the
 * "Strike a spark" button. Each teaches the shape of a good commission:
 * a subject, an action, a weather or hour.
 */
const SPARKS_BY_ERA: ReadonlyMap<EraId, readonly string[]> = new Map([
  [
    toEraId('ancient-egypt'),
    [
      'A royal scribe tallying grain as the Nile floods at dusk',
      'Priests carrying a gilded barque through torchlit temple halls',
    ],
  ],
  [
    toEraId('classical-greece'),
    [
      'A sculptor unveiling a marble athlete before the assembly',
      'Runners rounding the last turn at the sacred games',
    ],
  ],
  [
    toEraId('roman-empire'),
    [
      'A legion crossing a frozen river at first light',
      'A senator pausing on the forum steps as omens cross the sky',
    ],
  ],
  [
    toEraId('viking-age'),
    [
      'A longship slipping out of the fjord under a low red moon',
      'A shield-wall bracing as the tide brings the enemy in',
    ],
  ],
  [
    toEraId('medieval-europe'),
    [
      'A mason setting the last stone of the cathedral spire in fog',
      'A knight keeping vigil alone the night before the tournament',
    ],
  ],
  [
    toEraId('feudal-japan'),
    [
      'A ronin waiting out the rain beneath a temple gate',
      'Lantern boats drifting past the castle on festival night',
    ],
  ],
  [
    toEraId('renaissance'),
    [
      'An apprentice grinding ultramarine while the master studies the light',
      'A printing press pulling its first page by candlelight',
    ],
  ],
  [
    toEraId('age-of-sail'),
    [
      'A lighthouse keeper watching the storm roll in',
      'Two frigates trading broadsides through the powder smoke',
    ],
  ],
  [
    toEraId('revolutionary-age'),
    [
      'A crowd raising lanterns against the palace gates',
      'A pamphleteer running wet pages through midnight streets',
    ],
  ],
  [
    toEraId('machine-age'),
    [
      'Riveters walking a bridge span high above the river',
      'A night express crossing the plains under electric stars',
    ],
  ],
]);

const UNIVERSAL_SPARKS: readonly string[] = [
  'A lighthouse keeper watching the storm roll in',
  'A market square waking before sunrise',
  'A messenger arriving a moment too late',
];

export function sparkForEra(eraId: EraId | null, cursor: number): string {
  const pool = (eraId ? SPARKS_BY_ERA.get(eraId) : undefined) ?? UNIVERSAL_SPARKS;
  return pool[cursor % pool.length] ?? 'A lighthouse keeper watching the storm roll in';
}
