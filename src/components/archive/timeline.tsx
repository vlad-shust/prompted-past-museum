import { FlashList } from '@shopify/flash-list';
import type { FlashListRef } from '@shopify/flash-list';
import { router } from 'expo-router';
import { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { useCurrentSeason } from '@/hooks/use-season';
import { useMembershipStore } from '@/stores/membership.store';
import { useProgressStore } from '@/stores/progress.store';
import { colors, radius, spacing, TAB_BAR_CLEARANCE, withAlpha } from '@/theme';
import type { Scene } from '@/types/domain.types';
import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { PressableScale } from '@/components/ui/pressable-scale';
import { BandHeader } from './band-header';
import { SceneRow } from './scene-row';
import { buildTimelineModel } from './timeline-model';
import { TimelineScrubber } from './timeline-scrubber';
import type { TimelineItem } from './timeline-model.types';

export function Timeline({ scenes }: { scenes: Scene[] }) {
  const membership = useMembershipStore((state) => state.membership);
  const completedSceneIds = useProgressStore((state) => state.completedSceneIds);
  const { data: season } = useCurrentSeason();
  const model = useMemo(
    () => buildTimelineModel(scenes, membership, completedSceneIds),
    [scenes, membership, completedSceneIds],
  );
  const listRef = useRef<FlashListRef<TimelineItem>>(null);

  const progress = useSharedValue(0);
  const scrubbing = useSharedValue(false);
  const viewportHeight = useRef(1);
  const maxOffset = useRef(1);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    viewportHeight.current = layoutMeasurement.height;
    maxOffset.current = Math.max(1, contentSize.height - layoutMeasurement.height);
    if (scrubbing.get()) return;
    progress.set(Math.min(1, Math.max(0, contentOffset.y / maxOffset.current)));
  };

  const scrubToRatio = useCallback((ratio: number) => {
    listRef.current?.scrollToOffset({ offset: ratio * maxOffset.current, animated: false });
  }, []);

  return (
    <View style={styles.wrap}>
      <FlashList
        ref={listRef}
        data={model.items}
        keyExtractor={(item) => (item.kind === 'band' ? `band-${item.band.key}` : `scene-${item.scene.id}`)}
        getItemType={(item) => item.kind}
        renderItem={({ item }) =>
          item.kind === 'band' ? (
            <BandHeader band={item.band} seasonEraId={season?.eraId ?? null} />
          ) : (
            <SceneRow scene={item.scene} access={item.access} era={item.era} crossover={item.crossover} />
          )
        }
        ListHeaderComponent={
          model.lockedCount > 0 ? (
            <PressableScale
              onPress={() => router.push('/paywall')}
              accessibilityRole="button"
              accessibilityLabel="Unlock the full archive"
              style={styles.banner}
            >
              <EmberDot size={7} intensity={0.6} />
              <AppText variant="caption" color={colors.textSecondary} style={styles.bannerText}>
                {model.totalCount} scenes hang in the archive · {model.lockedCount} wait behind the veil
              </AppText>
              <AppText variant="buttonSm" color={colors.emberGold}>
                Unlock
              </AppText>
            </PressableScale>
          ) : null
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <AppText variant="bodySm" color={colors.textSecondary}>
              The first scene arrives tomorrow morning.
            </AppText>
          </View>
        }
        contentContainerStyle={{ paddingBottom: TAB_BAR_CLEARANCE }}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onLayout={(event) => {
          viewportHeight.current = event.nativeEvent.layout.height;
        }}
        onContentSizeChange={(_, height) => {
          maxOffset.current = Math.max(1, height - viewportHeight.current);
        }}
      />
      {model.items.length > 0 ? (
        <TimelineScrubber
          bandAtIndex={model.bandAtIndex}
          progress={progress}
          scrubbing={scrubbing}
          onScrubToRatio={scrubToRatio}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginHorizontal: spacing.xl,
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.emberGold, 0.28),
    backgroundColor: withAlpha(colors.emberDeep, 0.1),
  },
  bannerText: {
    flex: 1,
  },
  empty: {
    paddingTop: 120,
    alignItems: 'center',
  },
});
