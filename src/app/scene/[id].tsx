import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { SceneArticle } from '@/components/scene/scene-article';
import { EmberDot } from '@/components/ui/ember-dot';
import { EmptyState } from '@/components/ui/empty-state';
import { ADMIN_AVAILABLE, useAdminMode } from '@/hooks/use-admin';
import { useScene } from '@/hooks/use-scenes';
import { useMembershipStore } from '@/stores/membership.store';
import { useProgressStore } from '@/stores/progress.store';
import { colors } from '@/theme';
import { toSceneId } from '@/types/common.types';
import { sceneAccess } from '@/utils/access';

export default function SceneDetailScreen() {
  const { id, unlock } = useLocalSearchParams<{ id: string; unlock?: string }>();
  const sceneId = typeof id === 'string' && id.length > 0 ? toSceneId(id) : null;
  const { data: scene, isPending } = useScene(sceneId);
  const membership = useMembershipStore((state) => state.membership);
  const completedSceneIds = useProgressStore((state) => state.completedSceneIds);
  const adminMode = useAdminMode();
  // Belt-and-suspenders with admin.tsx: honor unlock=1 from the curator key
  // even if the store write has not re-rendered yet. Live keyed builds ignore it.
  const unlockedByCuratorKey = ADMIN_AVAILABLE && unlock === '1';

  // A null id (malformed deep link) leaves the query disabled and permanently
  // pending, so only show the spinner for a real, in-flight fetch; the null
  // case falls through to the "Lost to time" state below.
  if (sceneId !== null && isPending) {
    return (
      <View style={styles.pending}>
        <EmberDot size={12} />
      </View>
    );
  }

  if (!scene) {
    return (
      <View style={styles.pending}>
        <EmptyState
          title="Lost to time"
          message="This scene isn't in the archive anymore."
          actionLabel="Return to today"
          onAction={() => router.replace('/')}
        />
      </View>
    );
  }

  // Route-level lock: the archive UI never links here for locked scenes,
  // but deep links and stale navigation must hit the same wall.
  if (
    !adminMode &&
    !unlockedByCuratorKey &&
    sceneAccess(scene, membership, completedSceneIds) === 'locked'
  ) {
    return <Redirect href="/paywall" />;
  }

  return <SceneArticle scene={scene} variant="detail" />;
}

const styles = StyleSheet.create({
  pending: {
    flex: 1,
    backgroundColor: colors.bgViewer,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
