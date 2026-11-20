import { STUDIO_SUGGESTIONS } from '@/content/studio-suggestions';

/** Width the salon hang is drawn at; every rect scales from here to the device. */
export const SALON_DESIGN_WIDTH = 402;

export interface SalonWork {
  id: string;
  imageUrl: string;
  /** Outer frame rect in design points, y measured from the safe-area top. */
  x: number;
  y: number;
  width: number;
  height: number;
  /** Position in the lamp sequence: 0 is lit before the keyhole opens. */
  lamp: number;
}

interface SalonSlot {
  id: string;
  x: number;
  y: number;
  width: number;
  lamp: number;
}

/**
 * A salon hang of the house collection, dense the way the old academies hung
 * them: the Vermeer in the middle, where the keyhole looks, and the rest close
 * around her at their own proportions.
 */
const SLOTS: readonly SalonSlot[] = [
  { id: 'pearl-earring', x: 132, y: 168, width: 138, lamp: 0 },
  { id: 'starry-night', x: 14, y: 34, width: 160, lamp: 5 },
  { id: 'ninth-wave', x: 188, y: 18, width: 200, lamp: 6 },
  { id: 'woman-with-parasol', x: 14, y: 168, width: 104, lamp: 4 },
  { id: 'hay-wain', x: 284, y: 168, width: 104, lamp: 1 },
  { id: 'boulevard-montmartre', x: 284, y: 251, width: 104, lamp: 2 },
  { id: 'air-pump', x: 14, y: 311, width: 104, lamp: 7 },
  { id: 'tower-of-babel', x: 132, y: 344, width: 138, lamp: 3 },
  { id: 'hunters-in-the-snow', x: 284, y: 343, width: 104, lamp: 8 },
];

export const SALON: readonly SalonWork[] = SLOTS.flatMap((slot) => {
  const def = STUDIO_SUGGESTIONS.find((work) => work.id === slot.id);
  if (!def) return [];
  const aspect = def.still.height / def.still.width;
  return [
    {
      id: slot.id,
      imageUrl: def.imageUrl,
      x: slot.x,
      y: slot.y,
      width: slot.width,
      height: Math.round(slot.width * aspect),
      lamp: slot.lamp,
    },
  ];
});

export const SALON_LAMPS = SALON.length;
