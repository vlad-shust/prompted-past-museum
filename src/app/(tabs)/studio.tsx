import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CommissionOrb } from '@/components/studio/commission-orb';
import { HouseWall } from '@/components/studio/house-wall';
import { AppText } from '@/components/ui/app-text';
import { ProfileOrb } from '@/components/ui/profile-orb';
import { Screen } from '@/components/ui/screen';
import { sameStill } from '@/content/scenes/painting-source';
import { HOUSE_COLLECTION, HOUSE_WALL_OPENING_ID } from '@/content/studio-suggestions';
import { useCollectionWakes, useStudioPieces, useSubmitStudioPiece } from '@/hooks/use-studio';
import { colors, SCREEN_PADDING, spacing, TAB_BAR_HEIGHT } from '@/theme';
import { onEasel } from '@/utils/easel';
import type { StudioSuggestionDef } from '@/content/studio-suggestions.types';
import type { CollectionWakeState, StudioPiece } from '@/types/domain.types';

/** The plaque's door line, with the one price fact worth a word: the visitor's free taste. */
function storyHint(wakes: CollectionWakeState | undefined): string {
  if (!wakes || wakes.quota.kind === 'unlimited') return 'Open the story';
  return wakes.used < wakes.quota.limit ? 'Open the story · free' : 'Open the story';
}

function openPiece(id: StudioPiece['id']) {
  router.push({ pathname: '/studio-piece/[id]', params: { id } });
}

export default function StudioScreen() {
  const insets = useSafeAreaInsets();
  const { data: wakes } = useCollectionWakes();
  const { data: pieces } = useStudioPieces();
  const submitPiece = useSubmitStudioPiece();
  // Mount-time clock is plenty for a 24-hour failure window.
  const [easelNow] = useState(() => Date.now());

  const wakeSpent =
    wakes !== undefined && wakes.quota.kind === 'metered' && wakes.used >= wakes.quota.limit;
  const busy = (pieces ?? []).some((piece) => onEasel(piece, easelNow));

  // The wall already plays the clip; opening the story is what hangs the work
  // in the visitor's wing, so that is where the free taste is spent.
  const open = async (work: StudioSuggestionDef) => {
    // A piece already staged or already alive reopens instead of minting a duplicate.
    const existing = pieces?.find(
      (piece) =>
        sameStill(piece.imageUri, work.imageUrl) &&
        (piece.status.phase === 'complete' ||
          piece.status.phase === 'inspecting' ||
          piece.status.phase === 'animating'),
    );
    if (existing) {
      openPiece(existing.id);
      return;
    }
    if (wakeSpent) {
      router.push('/paywall');
      return;
    }
    if (submitPiece.isPending) return;
    try {
      const piece = await submitPiece.mutateAsync({ imageUri: work.imageUrl, origin: 'collection' });
      openPiece(piece.id);
    } catch (error) {
      if (error instanceof Error && error.message === 'quota_exhausted') {
        router.push('/paywall');
        return;
      }
      const detail =
        error instanceof Error && error.message.trim().length > 0
          ? error.message
          : "That story couldn't be opened. Try again.";
      console.warn('[studio] open failed', error);
      Alert.alert('The studio went dark', detail);
    }
  };

  return (
    <Screen padded={false}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <AppText variant="title" color={colors.textPrimary}>
            Studio
          </AppText>
          <View style={styles.doors}>
            <CommissionOrb busy={busy} />
            <ProfileOrb />
          </View>
        </View>
        <AppText variant="epigraph" color={colors.emberGold}>
          Tap a painting to wake it
        </AppText>
      </View>

      <View
        style={[styles.room, { paddingBottom: Math.max(insets.bottom, spacing.md) + TAB_BAR_HEIGHT + spacing.md }]}
      >
        <HouseWall
          works={HOUSE_COLLECTION}
          openingId={HOUSE_WALL_OPENING_ID}
          hint={storyHint(wakes)}
          onOpen={(work) => void open(work)}
          onCommission={() => router.push('/commission')}
        />
      </View>
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
  doors: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  room: {
    flex: 1,
  },
});
