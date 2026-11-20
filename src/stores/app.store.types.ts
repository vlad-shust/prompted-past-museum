import type { EraId } from '@/types/common.types';

export interface AppStoreState {
  hasOnboarded: boolean;
  /** Local hour (0–23) the daily scene notification should arrive. */
  notificationHour: number;
  /** Minute past that hour (0–59). */
  notificationMinute: number;
  eraInterests: EraId[];
  /**
   * When eraInterests were picked (device clock, epoch ms): across devices
   * the latest picks win (utils/progress-sync.ts). Null on installs that
   * onboarded before this was recorded.
   */
  eraInterestsSetAtMs: number | null;
  /** Whether the first-open ember reveal has played for a given scene id. */
  revealedSceneIds: string[];
  /** Test key: every room open, no daily gate. Only honoured in dev/demo builds. */
  adminMode: boolean;
  completeOnboarding(notificationHour: number, notificationMinute: number, eraInterests: EraId[]): void;
  setNotificationTime(hour: number, minute: number): void;
  markSceneRevealed(sceneId: string): void;
  setAdminMode(enabled: boolean): void;
}
