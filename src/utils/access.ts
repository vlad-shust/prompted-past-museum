import type { SceneId } from '@/types/common.types';
import type { CollectionWakeQuota, Membership, Scene } from '@/types/domain.types';

export const MEMBER_DAILY_FORGES = 3;
export const FREE_COLLECTION_WAKES = 1;

export function isMember(membership: Membership): boolean {
  switch (membership.kind) {
    case 'free':
      return false;
    case 'trial':
      return membership.expiresAtMs > Date.now();
    case 'member':
      // A null expiry is a non-expiring entitlement (e.g. lifetime).
      return membership.expiresAtMs === null || membership.expiresAtMs > Date.now();
    default: {
      const exhaustive: never = membership;
      throw new Error(`Unhandled membership: ${JSON.stringify(exhaustive)}`);
    }
  }
}

/** Forging is a members' room. */
export function forgeDailyLimit(membership: Membership): number {
  return isMember(membership) ? MEMBER_DAILY_FORGES : 0;
}

/**
 * House-collection wakes are pre-staged and free to serve: members wake them
 * without limit, a visitor gets one as the free taste of the studio.
 */
export function collectionWakeQuota(membership: Membership): CollectionWakeQuota {
  return isMember(membership)
    ? { kind: 'unlimited' }
    : { kind: 'metered', limit: FREE_COLLECTION_WAKES };
}

export type SceneAccess = 'open' | 'locked';

/**
 * The metered museum wall: members walk everywhere; a visitor keeps the
 * works already hung in their gallery and nothing else.
 */
export function sceneAccess(
  scene: Scene,
  membership: Membership,
  completedSceneIds: readonly SceneId[],
): SceneAccess {
  if (isMember(membership)) return 'open';
  return completedSceneIds.includes(scene.id) ? 'open' : 'locked';
}

/**
 * The first work is the museum's gift. Once it hangs, the daily lesson asks
 * for membership; completedToday keeps the just-read lesson open until the
 * day turns so the gift is never snatched back mid-visit.
 */
export function todayLessonAccess(
  membership: Membership,
  completedSceneIds: readonly SceneId[],
  completedToday: boolean,
): SceneAccess {
  if (isMember(membership)) return 'open';
  if (completedSceneIds.length === 0) return 'open';
  return completedToday ? 'open' : 'locked';
}
