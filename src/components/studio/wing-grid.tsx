import { format } from 'date-fns';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import { houseWorkFor } from '@/content/studio-suggestions';
import { useStudioPieces } from '@/hooks/use-studio';
import { colors, radius, SCREEN_PADDING, spacing, TAB_BAR_CLEARANCE } from '@/theme';
import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { EmptyState } from '@/components/ui/empty-state';
import { PressableScale } from '@/components/ui/pressable-scale';
import type { HungPiece } from './wing-grid.types';
import type { StudioPiece } from '@/types/domain.types';

const GRID_GAP = spacing.md;

/** House works are labelled from their record; the visitor's own get the day they came alive. */
function hang(piece: StudioPiece, completedAtMs: number): HungPiece {
  const work = houseWorkFor(piece.imageUri);
  if (work) {
    return { piece, title: work.title, caption: `${work.artist} · ${work.year}` };
  }
  return { piece, title: 'Your painting', caption: `Alive since ${format(completedAtMs, 'd MMMM')}` };
}

/**
 * Your pieces: the finished paintings the visitor brought in themselves.
 * Work still on the easel lives in the studio; only what is alive hangs here.
 */
export function WingGrid() {
  const { width } = useWindowDimensions();
  const { data: allPieces = [], isPending } = useStudioPieces();
  // One tile per painting: re-waking the same work must not multiply it.
  // The list arrives newest first, so the first occurrence is the freshest.
  const seen = new Set<string>();
  const pieces: HungPiece[] = [];
  for (const piece of allPieces) {
    if (piece.status.phase !== 'complete' || seen.has(piece.imageUri)) continue;
    seen.add(piece.imageUri);
    pieces.push(hang(piece, piece.status.completedAtMs));
  }

  if (isPending) {
    return (
      <View style={styles.loader}>
        <EmberDot size={12} />
      </View>
    );
  }

  if (pieces.length === 0) {
    return (
      <EmptyState
        title="Nothing hangs here yet"
        message="Bring a painting into the studio and it will hang here, alive."
        actionLabel="Open the studio"
        onAction={() => router.navigate('/studio')}
      />
    );
  }

  const tileWidth = (width - SCREEN_PADDING * 2 - GRID_GAP) / 2;

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
      <View style={styles.grid}>
        {pieces.map(({ piece, title, caption }) => (
          <PressableScale
            key={piece.id}
            onPress={() => router.push({ pathname: '/studio-piece/[id]', params: { id: piece.id } })}
            accessibilityRole="button"
            accessibilityLabel={`${title}, ${caption}`}
            style={[styles.tile, { width: tileWidth }]}
          >
            <Image
              source={{ uri: piece.imageUri }}
              style={[styles.tileImage, { width: tileWidth, height: tileWidth * 1.25 }]}
              contentFit="cover"
              transition={200}
            />
            <AppText variant="cardTitle" numberOfLines={1} color={colors.textPrimary}>
              {title}
            </AppText>
            <View style={styles.captions}>
              <AppText variant="micro" numberOfLines={2} color={colors.textTertiary}>
                {caption}
              </AppText>
              <AppText variant="micro" numberOfLines={1} color={colors.textTertiary}>
                From the studio
              </AppText>
            </View>
          </PressableScale>
        ))}
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
