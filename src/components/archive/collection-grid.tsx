import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useMemo } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import { getEra } from '@/content/eras';
import { useForges } from '@/hooks/use-forges';
import { useSavedSceneIds } from '@/hooks/use-saves';
import { useArchive } from '@/hooks/use-scenes';
import { useProgressStore } from '@/stores/progress.store';
import { colors, radius, SCREEN_PADDING, spacing, TAB_BAR_CLEARANCE } from '@/theme';
import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { EmptyState } from '@/components/ui/empty-state';
import { PressableScale } from '@/components/ui/pressable-scale';
import type { CollectionEntry } from './collection-grid.types';

const GRID_GAP = spacing.md;

export function CollectionGrid() {
  const { width } = useWindowDimensions();
  const { data: scenes = [], isPending: scenesPending } = useArchive();
  const { data: savedIds = [], isPending: savedPending } = useSavedSceneIds();
  const { data: forges = [], isPending: forgesPending } = useForges();
  const completedSceneIds = useProgressStore((state) => state.completedSceneIds);

  const entries = useMemo<CollectionEntry[]>(() => {
    // Completed lessons hang first, most recent walk at the top; works the
    // visitor pinned with Save but hasn't walked yet follow.
    const completionOrder = new Map(completedSceneIds.map((id, index) => [id, index]));
    const collected: CollectionEntry[] = scenes
      .filter((scene) => completionOrder.has(scene.id) || savedIds.includes(scene.id))
      .map((scene) => {
        const completedIndex = completionOrder.get(scene.id);
        return {
          kind: 'scene' as const,
          scene,
          note: completedIndex === undefined ? 'saved for later' : scene.historicalDateLabel,
          sortMs:
            completedIndex === undefined
              ? Date.parse(scene.publishedOn)
              : Number.MAX_SAFE_INTEGER - (completedSceneIds.length - completedIndex),
        };
      });
    const completedForges: CollectionEntry[] = forges.flatMap((forge) =>
      forge.status.phase === 'complete'
        ? [{ kind: 'forge' as const, forge, imageUrl: forge.status.imageUrl, sortMs: forge.createdAtMs }]
        : [],
    );
    return [...collected, ...completedForges].sort((a, b) => b.sortMs - a.sortMs);
  }, [scenes, savedIds, forges, completedSceneIds]);

  if (scenesPending || savedPending || forgesPending) {
    return (
      <View style={styles.loader}>
        <EmberDot size={12} />
      </View>
    );
  }

  if (entries.length === 0) {
    return (
      <EmptyState
        title="The walls are waiting"
        message="Finish today's visit and the work joins your collection."
        actionLabel="To today's room"
        onAction={() => router.navigate('/')}
      />
    );
  }

  const tileWidth = (width - SCREEN_PADDING * 2 - GRID_GAP) / 2;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      <View style={styles.grid}>
        {entries.map((entry) => {
          const key = entry.kind === 'scene' ? `scene-${entry.scene.id}` : `forge-${entry.forge.id}`;
          const imageUrl = entry.kind === 'scene' ? entry.scene.thumbUrl : entry.imageUrl;
          const title = entry.kind === 'scene' ? entry.scene.title : (entry.forge.title ?? 'Untitled commission');
          const caption =
            entry.kind === 'scene' ? entry.note : `${getEra(entry.forge.eraId).shortName} · your forge`;
          const origin = entry.kind === 'scene' ? getEra(entry.scene.eraId).name : 'From the studio';
          const onPress = () => {
            if (entry.kind === 'scene') {
              router.push({ pathname: '/scene/[id]', params: { id: entry.scene.id } });
            } else {
              router.push({ pathname: '/forge-result/[id]', params: { id: entry.forge.id } });
            }
          };
          return (
            <PressableScale
              key={key}
              onPress={onPress}
              accessibilityRole="button"
              accessibilityLabel={title}
              style={[styles.tile, { width: tileWidth }]}
            >
              <Image
                source={{ uri: imageUrl }}
                style={[styles.tileImage, { width: tileWidth, height: tileWidth * 1.25 }]}
                contentFit="cover"
                transition={200}
              />
              <AppText variant="cardTitle" numberOfLines={1} color={colors.textPrimary}>
                {title}
              </AppText>
              <View style={styles.captions}>
                <AppText variant="micro" numberOfLines={1} color={colors.textTertiary}>
                  {caption}
                </AppText>
                <AppText variant="micro" numberOfLines={1} color={colors.textTertiary}>
                  {origin}
                </AppText>
              </View>
            </PressableScale>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: SCREEN_PADDING,
    paddingTop: spacing.lg,
    paddingBottom: TAB_BAR_CLEARANCE,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GRID_GAP,
  },
  tile: {
    gap: 6,
    marginBottom: spacing.sm,
  },
  captions: {
    gap: 2,
  },
  tileImage: {
    borderRadius: radius.md,
    backgroundColor: colors.bgElevated,
  },
});
