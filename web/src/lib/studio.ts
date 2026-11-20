import { HOUSE_COLLECTION, HOUSE_WALL_OPENING_ID } from '@shared/content/studio-suggestions';
import type { StudioSuggestionDef } from '@shared/content/studio-suggestions.types';
import { webEnv } from './env';
import { plainDashes } from './format';
import type { HouseWork } from './studio.types';

/** The work the wall opens on: it hangs mid-wall so the visitor can walk either way. */
export const STUDIO_OPENING_ID = HOUSE_WALL_OPENING_ID;

/** The story opens "Painted in 1850." which the plaque already says; the label starts after it. */
function wallLabel(story: string): string {
  const sentences = story.split('\n')[0].split(/(?<=[.!?])\s+/);
  const body = sentences[0]?.startsWith('Painted ') ? sentences.slice(1) : sentences;
  return body.slice(0, 2).join(' ');
}

function toHouseWork(def: StudioSuggestionDef): HouseWork | undefined {
  if (!def.videoFile) return undefined;
  const first = def.details[0];
  return {
    id: def.id,
    title: def.title,
    artist: def.artist,
    year: def.year,
    posterUrl: def.imageUrl,
    videoUrl: `${webEnv.mediaBaseUrl}/${def.videoFile}`,
    focus: first ? { x: first.x, y: first.y } : undefined,
    label: wallLabel(def.story),
    story: def.story,
    details: def.details,
    still: def.still,
  };
}

/** Every house work the app already plays, hung in the collection's own order. */
export function getHouseWorks(): HouseWork[] {
  return plainDashes(
    HOUSE_COLLECTION.flatMap((def) => {
      const work = toHouseWork(def);
      return work ? [work] : [];
    }),
  );
}

export function getHouseWork(id: string): HouseWork | undefined {
  return getHouseWorks().find((work) => work.id === id);
}

/** The shared suggestion behind a house work, or undefined when the id is unknown. */
export function getHouseSuggestion(id: string): StudioSuggestionDef | undefined {
  return plainDashes(HOUSE_COLLECTION.find((def) => def.id === id && def.videoFile !== undefined));
}
