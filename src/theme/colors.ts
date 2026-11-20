/**
 * Molten palette. Two-black system: pure black only behind full-bleed art
 * (paintings dissolve into OLED); warm near-black everywhere else.
 * All text/accent pairs verified ≥ 4.5:1 on bgBase except emberDeep,
 * which is decorative-only.
 */
export const colors = {
  bgViewer: '#000000',
  bgBase: '#0A0908',
  bgElevated: '#141210',
  bgRaised: '#1C1917',

  strokeHairline: '#2A2520',

  textPrimary: '#F5EDE3',
  textSecondary: '#A89F94',
  textTertiary: '#8A8178',

  emberCore: '#FF6B35',
  emberBright: '#FF9F45',
  emberGold: '#FFB454',
  /** Fails AA for text — gradients, borders, large shapes only. */
  emberDeep: '#C2410C',
  glowHalo: '#FFC97E',
} as const;

/** '#RRGGBB' + 0..1 alpha → rgba() string. */
export function withAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
