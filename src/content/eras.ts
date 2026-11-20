import { toEraId } from '../types/common.types';
import type { EraId } from '../types/common.types';
import type { Era, EraRegion, EraTheme } from '../types/domain.types';

function era(
  id: string,
  name: string,
  shortName: string,
  startYear: number,
  endYear: number,
  mood: string,
  intro: string,
  sort: number,
  region: EraRegion,
  themes: readonly EraTheme[],
): Era {
  return { id: toEraId(id), name, shortName, startYear, endYear, mood, intro, sort, region, themes };
}

export const ERAS: readonly Era[] = [
  era(
    'ancient-egypt',
    'Ancient Egypt',
    'Egypt',
    -3100,
    -30,
    'Sandstone gods and river gold',
    'A single kingdom along one river lasts close to 3,000 years. The pharaohs were treated as gods, and the people who served them built pyramids and temples that still stand. It ends with Cleopatra and the Roman conquest in 30 BC.',
    1,
    'mediterranean-world',
    ['monarchy', 'religion', 'architecture'],
  ),
  era(
    'classical-greece',
    'Classical Greece',
    'Greece',
    -800,
    -323,
    'Marble light and wine-dark seas',
    'Small cities fought each other and, for a while, held off Persia together. Athens let its citizens vote, staged the first tragedies and built the Parthenon. The era ends when Alexander the Great dies in 323 BC, with an empire that reached India.',
    2,
    'mediterranean-world',
    ['philosophy-ideas', 'art-innovation', 'warfare', 'trade'],
  ),
  era(
    'roman-empire',
    'Ancient Rome',
    'Rome',
    -509,
    476,
    'Legions, forums, and burning horizons',
    'A republic that became an empire and ruled from Britain to the Sahara. It built roads, aqueducts and written law, and its legions served 25 years at a stretch. It ends in 476, when the last emperor in the west is sent into retirement.',
    3,
    'mediterranean-world',
    ['empire', 'warfare', 'architecture', 'trade'],
  ),
  era(
    'viking-age',
    'The Viking Age',
    'Vikings',
    793,
    1066,
    'Dragon prows through cold fog',
    'It starts with a raid on the monastery at Lindisfarne in 793 and ends on an English battlefield in 1066. In between, Norse sailors reach Iceland, Greenland and North America. They trade down the rivers of Russia and settle in Normandy and Dublin.',
    4,
    'northern-europe',
    ['seafaring', 'exploration', 'warfare', 'trade'],
  ),
  era(
    'medieval-europe',
    'Medieval Europe',
    'Medieval',
    1066,
    1453,
    'Candlelit stone and iron bells',
    'This is the age of castles, cathedrals and crusades. Kings and popes argue over who rules. The plague kills a third of Europe in 5 years, and the printing press arrives near the end. The era closes with the fall of Constantinople in 1453.',
    5,
    'western-europe',
    ['feudalism', 'religion', 'warfare', 'crisis-collapse'],
  ),
  era(
    'feudal-japan',
    'Feudal Japan',
    'Japan',
    1185,
    1600,
    'Lacquered armor under falling plum rain',
    'The samurai take power in 1185, and the emperor in Kyoto keeps his title but not his say. The Mongols try to invade twice and fail, and later the warlords fight each other for a century. It ends at Sekigahara in 1600, the battle that gave Japan 250 years of peace.',
    6,
    'east-asia',
    ['feudalism', 'warfare', 'religion', 'art-innovation'],
  ),
  era(
    'renaissance',
    'The Renaissance',
    'Renaissance',
    1400,
    1600,
    'Oil, gold leaf, and new worlds',
    'Italian bankers pay for a new kind of art, and painters learn to draw depth with a vanishing point. Leonardo, Michelangelo and Raphael work in the same city in the same years. Columbus sails in 1492, and Luther splits the church in 1517.',
    7,
    'western-europe',
    ['art-innovation', 'religion', 'exploration', 'philosophy-ideas'],
  ),
  era(
    'age-of-sail',
    'The Age of Sail',
    'Age of Sail',
    1571,
    1862,
    'Powder smoke over endless ocean',
    'Wooden ships with cannon decide who owns the oceans. It opens at Lepanto in 1571, the last great battle fought with oared galleys. In between come pirates, the spice trade and Trafalgar. It closes in 1862, when 2 ironclads meet at Hampton Roads and make every wooden fleet obsolete.',
    8,
    'atlantic-world',
    ['seafaring', 'exploration', 'empire', 'warfare'],
  ),
  era(
    'revolutionary-age',
    'The Revolutionary Age',
    'Revolutions',
    1765,
    1848,
    'Torchlight against palace gates',
    'Ordinary people decide that kings can be removed. America breaks from Britain and France beheads its king. The enslaved of Haiti win their freedom, and Napoleon marches to Moscow and back. It ends in 1848, when revolts break out across Europe in a single spring.',
    9,
    'atlantic-world',
    ['revolution', 'philosophy-ideas', 'warfare', 'empire'],
  ),
  era(
    'machine-age',
    'The Machine Age',
    'Machine Age',
    1849,
    1945,
    'Steam, steel, and electric dawn',
    'Steam engines, railways and factories change how everyone lives within 2 generations. Cities double in size, photographs replace painted portraits, and painters go outdoors to catch the light. The era runs through 2 world wars and ends in 1945.',
    10,
    'global',
    ['industry', 'empire', 'warfare', 'crisis-collapse'],
  ),
] as const;

const ERA_BY_ID = new Map(ERAS.map((e) => [e.id, e]));

/**
 * A live scene or forge can reference an era the shipped bundle doesn't know
 * yet (editorial adds an `eras` row before the app updates). Return a neutral
 * placeholder rather than throwing — getEra runs in render paths on both the
 * app and the web gallery, and a throw there collapses the whole tree.
 */
function placeholderEra(id: EraId): Era {
  // process.env.NODE_ENV (not the Metro-only __DEV__) so this typechecks and
  // runs in both the Expo app and the Next.js web gallery that share this file.
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`[eras] Unknown era "${id}" — rendering placeholder.`);
  }
  return {
    id,
    name: 'An Untold Age',
    shortName: 'Untold',
    startYear: 0,
    endYear: 0,
    mood: 'A time not yet charted',
    intro: 'This era is still being written.',
    sort: Number.MAX_SAFE_INTEGER,
    region: 'global',
    themes: [],
  };
}

export function getEra(id: EraId): Era {
  return ERA_BY_ID.get(id) ?? placeholderEra(id);
}

/** Museum-label year span: "3100–30 BC", "509 BC – AD 476", "1400–1600". */
export function formatEraSpan(era: Era): string {
  const year = (value: number) => Math.abs(value).toString();
  if (era.endYear < 0) return `${year(era.startYear)}–${year(era.endYear)} BC`;
  if (era.startYear < 0) return `${year(era.startYear)} BC – AD ${era.endYear}`;
  return `${era.startYear}–${era.endYear}`;
}

export const TIMELINE_START_YEAR = -3100;
export const TIMELINE_END_YEAR = 1945;
