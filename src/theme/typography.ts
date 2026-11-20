import type { TextStyle } from 'react-native';

/**
 * Cormorant Garamond display runs small on the body (low x-height, hairline
 * strokes), so display sizes sit a step above the old scale and the small
 * serif roles use Medium (500) to survive the dark background. Newsreader
 * body at 500 for the same reason — 400 thins out on near-black.
 */
export const fonts = {
  displayLight: 'CormorantGaramond_300Light',
  display: 'CormorantGaramond_400Regular',
  displayItalic: 'CormorantGaramond_400Regular_Italic',
  epigraphItalic: 'CormorantGaramond_500Medium_Italic',
  serifMedium: 'CormorantGaramond_500Medium',
  body: 'Newsreader_500Medium',
  bodyItalic: 'Newsreader_500Medium_Italic',
  bodySemiBold: 'Newsreader_600SemiBold',
  sans: 'HankenGrotesk_400Regular',
  sansMedium: 'HankenGrotesk_500Medium',
  sansSemiBold: 'HankenGrotesk_600SemiBold',
} as const;

export const type = {
  /** Masthead numerals / splash wordmark. */
  hero: {
    fontFamily: fonts.displayLight,
    fontSize: 48,
    lineHeight: 52,
    letterSpacing: 0.2,
  },
  /** Scene titles. Two lines max. */
  title: {
    fontFamily: fonts.displayLight,
    fontSize: 38,
    lineHeight: 43,
    letterSpacing: 0.2,
  },
  titleSm: {
    fontFamily: fonts.display,
    fontSize: 27,
    lineHeight: 33,
    letterSpacing: 0.2,
  },
  cardTitle: {
    fontFamily: fonts.serifMedium,
    fontSize: 21,
    lineHeight: 26,
    letterSpacing: 0.1,
  },
  /** Era/date lines — ember-tinted Garamond italic. Barely tracked: wide
   * letterspacing breaks an italic's calligraphic joins. */
  epigraph: {
    fontFamily: fonts.epigraphItalic,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.4,
  },
  /** The ~150-word story. Never pure white. */
  story: {
    fontFamily: fonts.body,
    fontSize: 18,
    lineHeight: 29,
    letterSpacing: 0.15,
  },
  bodySm: {
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0.1,
  },
  /** Multiline composer field (forge). */
  input: {
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  sectionHeader: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.3,
  },
  buttonSm: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.3,
  },
  caption: {
    fontFamily: fonts.sansMedium,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  micro: {
    fontFamily: fonts.sansMedium,
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.6,
  },
  /** Badge label. Tracking, not size, is what makes it read at 10. */
  microCaps: {
    fontFamily: fonts.sansSemiBold,
    fontSize: 9,
    lineHeight: 12,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
} as const satisfies Record<string, TextStyle>;

export type TypeVariant = keyof typeof type;

/**
 * Dynamic Type ceilings per variant. Reading text scales generously with
 * the user's accessibility setting; display and chrome scale just enough
 * to stay legible without shattering fixed layouts.
 */
export const typeScaleCap: Record<TypeVariant, number> = {
  hero: 1.2,
  title: 1.2,
  titleSm: 1.25,
  cardTitle: 1.3,
  epigraph: 1.35,
  story: 2,
  bodySm: 1.6,
  input: 1.6,
  sectionHeader: 1.35,
  button: 1.35,
  buttonSm: 1.35,
  caption: 1.5,
  micro: 1.4,
  microCaps: 1.3,
};
