import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import { WingDoor } from '@/components/explore/wing-door';
import { WingSheet } from '@/components/explore/wing-sheet';
import type { WingSheetMode } from '@/components/explore/wing-sheet.types';
import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { EmptyState } from '@/components/ui/empty-state';
import { ProfileOrb } from '@/components/ui/profile-orb';
import { Screen } from '@/components/ui/screen';
import { getEra } from '@/content/eras';
import { useTracks } from '@/hooks/use-tracks';
import { useProgressStore } from '@/stores/progress.store';
import { colors, SCREEN_PADDING, spacing, TAB_BAR_CLEARANCE } from '@/theme';
import { walkOf } from '@/utils/lessons';
import type { EraTrack } from '@/utils/tracks.types';

const DOOR_GAP = spacing.md;

export default function ExploreScreen() {
  const { width } = useWindowDimensions();
  const { tracks, isPending, isError, refetch } = useTracks();
  const activeEraId = useProgressStore((state) => state.activeEraId);
  const completedSceneIds = useProgressStore((state) => state.completedSceneIds);
  const startTrack = useProgressStore((state) => state.startTrack);
  const [atDoor, setAtDoor] = useState<EraTrack | null>(null);
  // Per-wing walk state from the paintings actually stepped into — the same
  // source the Today screen uses to pick the next lesson.
  const walks = useMemo(
    () => new Map(tracks.map((track) => [track.era.id, walkOf(track, completedSceneIds)])),
    [tracks, completedSceneIds],
  );

  const doorWidth = (width - SCREEN_PADDING * 2 - DOOR_GAP) / 2;

  const sheetMode: WingSheetMode =
    atDoor && atDoor.era.id === activeEraId
      ? { kind: 'return' }
      : activeEraId === null
        ? { kind: 'begin' }
        : { kind: 'change', fromName: getEra(activeEraId).name };

  const walkIn = () => {
    if (!atDoor) return;
    if (atDoor.era.id !== activeEraId) startTrack(atDoor.era.id);
    setAtDoor(null);
    router.navigate('/');
  };

  return (
    <Screen padded={false}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <AppText variant="title" color={colors.textPrimary}>
            Explore
          </AppText>
          <ProfileOrb />
        </View>
        <AppText variant="epigraph" color={colors.emberGold}>
          One painting a day from the era you pick, with the history behind it
        </AppText>
      </View>

      {isPending ? (
        <View style={styles.pending}>
          <EmberDot size={12} />
        </View>
      ) : isError || tracks.length === 0 ? (
        <EmptyState
          title="The halls are dark"
          message="The museum map couldn't be lit. Try again."
          actionLabel="Relight"
          onAction={() => void refetch()}
        />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
          <View style={styles.doors}>
            {tracks.map((track) => (
              <WingDoor
                key={track.era.id}
                track={track}
                walk={walks.get(track.era.id)!}
                active={track.era.id === activeEraId}
                width={doorWidth}
                onPress={() => setAtDoor(track)}
              />
            ))}
          </View>
        </ScrollView>
      )}
      <WingSheet
        track={atDoor}
        walk={atDoor ? (walks.get(atDoor.era.id) ?? walkOf(atDoor, completedSceneIds)) : null}
        mode={sheetMode}
        onConfirm={walkIn}
        onClose={() => setAtDoor(null)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: SCREEN_PADDING,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    gap: spacing.xxs,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pending: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: SCREEN_PADDING,
    paddingTop: spacing.xs,
    paddingBottom: TAB_BAR_CLEARANCE,
  },
  doors: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: DOOR_GAP,
  },
});
