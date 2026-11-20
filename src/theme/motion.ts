import { Easing } from 'react-native-reanimated';
import type { WithSpringConfig, WithTimingConfig } from 'react-native-reanimated';

/**
 * A museum doesn't bounce. Everything ≤ 300ms except the one ceremonial
 * moment — the ember reveal — which is deliberately slow.
 */
export const durations = {
  micro: 140,
  standard: 240,
  sheet: 350,
  slow: 600,
  ceremonial: 3_000,
} as const;

export const easings = {
  /** Premium "expo" settle for entrances and user-initiated motion. */
  enter: Easing.bezier(0.16, 1, 0.3, 1),
  inOut: Easing.inOut(Easing.cubic),
  /** iOS-sheet feel. */
  sheet: Easing.bezier(0.32, 0.72, 0, 1),
  linear: Easing.linear,
} as const;

export const springs = {
  /** Quiet settle, no overshoot — the default. */
  settle: { damping: 18, stiffness: 180, mass: 1 } satisfies WithSpringConfig,
  /** Follows gesture velocity (drags, scrub release). */
  gesture: { damping: 15, stiffness: 150, mass: 1 } satisfies WithSpringConfig,
  sheet: { damping: 15, stiffness: 120, mass: 1 } satisfies WithSpringConfig,
} as const;

export const timing = {
  micro: { duration: durations.micro, easing: easings.enter } satisfies WithTimingConfig,
  standard: { duration: durations.standard, easing: easings.enter } satisfies WithTimingConfig,
  sheet: { duration: durations.sheet, easing: easings.sheet } satisfies WithTimingConfig,
} as const;

export const PRESS_SCALE = 0.97;
