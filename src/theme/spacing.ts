export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  huge: 40,
  giant: 56,
  colossal: 72,
} as const;

export const radius = {
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  pill: 999,
} as const;

/** Horizontal padding for standard screens. */
export const SCREEN_PADDING = 24;

/** Bottom padding so scroll content clears the floating tab-bar pill. */
export const TAB_BAR_CLEARANCE = 150;

/** The floating pill itself; it sits above the bottom inset. */
export const TAB_BAR_HEIGHT = 56;
