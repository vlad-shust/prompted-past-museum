import { colors } from './colors';
import type { EraPalette } from './era-palette.types';

/**
 * Each wing is lit by what its paintings are made of: Egypt's gold over lapis,
 * Japan's vermilion on lacquer, Rome's terracotta over Tyrian purple. Accents
 * are AA on bgBase; wash and halo are decorative.
 */
const ERA_PALETTES: Record<string, EraPalette> = {
  'ancient-egypt': { accent: '#E7B94F', halo: '#F6DFA4', wash: '#14335C' },
  'classical-greece': { accent: '#CBD9E2', halo: '#EEF5F9', wash: '#24344A' },
  'roman-empire': { accent: '#E2714C', halo: '#F7B091', wash: '#4A1220' },
  'viking-age': { accent: '#9FC3C9', halo: '#DCEFF1', wash: '#12303A' },
  'medieval-europe': { accent: '#E0B25C', halo: '#F3D79A', wash: '#2E1A3E' },
  'feudal-japan': { accent: '#E4695F', halo: '#F8B6A9', wash: '#3A1113' },
  renaissance: { accent: '#E3C061', halo: '#F6E3A9', wash: '#1D2C58' },
  'age-of-sail': { accent: '#BFC9C4', halo: '#E6EDE9', wash: '#16292F' },
  'revolutionary-age': { accent: '#E2564A', halo: '#FF9C8C', wash: '#17264F' },
  'machine-age': { accent: '#9FBCD0', halo: '#D6E8F3', wash: '#1D2A33' },
};

/** House ember: before a wing is chosen, and for eras the bundle doesn't know. */
export const EMBER_PALETTE: EraPalette = {
  accent: colors.emberGold,
  halo: colors.glowHalo,
  wash: colors.emberDeep,
};

export function eraPalette(eraId: string | null): EraPalette {
  if (eraId === null) return EMBER_PALETTE;
  return ERA_PALETTES[eraId] ?? EMBER_PALETTE;
}
