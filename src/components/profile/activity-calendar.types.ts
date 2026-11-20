import type { EraPalette } from '@/theme';
import type { IsoDate } from '@/types/common.types';
import type { Scene } from '@/types/domain.types';

export interface ActivityCalendarProps {
  /** Calendar days the museum was opened, YYYY-MM-DD. */
  visitDays: IsoDate[];
  palette: EraPalette;
  /** The painting stepped into on a visited day, or null when none is on record. */
  sceneForDay: (day: string) => Scene | null;
  onOpenScene: (scene: Scene) => void;
}
