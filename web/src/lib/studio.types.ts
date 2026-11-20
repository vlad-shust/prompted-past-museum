import type { SuggestionDetailDef, StillSize } from '@shared/content/studio-suggestions.types';
import type { WakePoint } from '@/components/varnish-lift.types';

/** A house-collection work whose woken clip is already on the media bucket. */
export interface HouseWork {
  id: string;
  title: string;
  artist: string;
  year: string;
  posterUrl: string;
  videoUrl: string;
  /** The first close look: where the lift starts. */
  focus: WakePoint | undefined;
  /** The wall label: the story's first 2 sentences after the dating line. */
  label: string;
  /** Full article copy from STUDIO_SUGGESTIONS. */
  story: string;
  /** Close looks for the article lens. */
  details: readonly SuggestionDetailDef[];
  /** Still pixel size: the article frame keeps the painting's own proportion. */
  still: StillSize;
}
