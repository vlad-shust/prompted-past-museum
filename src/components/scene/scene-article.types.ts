import type { Scene } from '@/types/domain.types';

export interface SceneArticleProps {
  scene: Scene;
  /** today: masthead + reveal + studio nudge. detail: back affordance, no nudge. */
  variant: 'today' | 'detail';
  /** "Day 3 of 5 · The Renaissance" badge over the title. */
  lessonLine?: string;
  /** Quiet line under the actions, e.g. tomorrow's teaser. */
  footerNote?: string;
  /** Fired when the visitor steps into the art; Today completes the day on it. */
  onSteppedIn?: () => void;
}
