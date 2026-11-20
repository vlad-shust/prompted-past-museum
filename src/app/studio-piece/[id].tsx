import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { WakedPainting } from '@/components/ember/waked-painting';
import { PaintingWall, usePaintingAspect, useWallStage } from '@/components/scene/painting-wall';
import { DetailLens } from '@/components/today/detail-lens';
import { AppText } from '@/components/ui/app-text';
import { EmberButton } from '@/components/ui/ember-button';
import { EmberDot } from '@/components/ui/ember-dot';
import { EmptyState } from '@/components/ui/empty-state';
import { Hairline } from '@/components/ui/hairline';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Screen } from '@/components/ui/screen';
import { Scrim } from '@/components/ui/scrim';
import { sameStill } from '@/content/scenes/painting-source';
import { houseWorkFor, relatedPaintings } from '@/content/studio-suggestions';
import { useBrandedShare } from '@/hooks/use-branded-share';
import {
  useCollectionWakes,
  useStudioPiece,
  useStudioPieces,
  useSubmitStudioPiece,
} from '@/hooks/use-studio';
import { colors, radius, spacing, type, withAlpha } from '@/theme';
import { toStudioPieceId } from '@/types/common.types';
import type { StudioSuggestionDef } from '@/content/studio-suggestions.types';
import type { AnimationSource, StudioPiece } from '@/types/domain.types';

/** Two caption lines under the painting, kept clear of it. */
const VIEWER_CAPTION_ROOM =
  spacing.lg + type.epigraph.lineHeight + spacing.xs + type.micro.lineHeight + spacing.md;
const VIEWER_FOOTER = { upright: VIEWER_CAPTION_ROOM, turned: VIEWER_CAPTION_ROOM };

/** A piece that finished within this window of opening still gets its burn. */
const CEREMONY_GRACE_MS = 30_000;

/** The viewer's caption: the plain record, "Painted by Vermeer around 1665." */
function paintedLine({ artist, year }: StudioSuggestionDef): string {
  const when = year.startsWith('c. ')
    ? `around ${year.slice(3)}`
    : year.startsWith('before ') || year.startsWith('after ')
      ? year
      : year.endsWith(' century')
        ? `in the ${year}`
        : `in ${year}`;
  return `Painted by ${artist} ${when}`;
}

/**
 * What else on the wall belongs with this one. Waking one from here behaves
 * exactly as it does on the studio rail: an existing piece reopens, a new one
 * is minted.
 */
function RelatedShelf({ suggestion }: { suggestion: StudioSuggestionDef }) {
  const siblings = relatedPaintings(suggestion.id);
  const { data: pieces } = useStudioPieces();
  const { data: wakes } = useCollectionWakes();
  const submitPiece = useSubmitStudioPiece();

  if (siblings.length === 0) return null;

  const open = async (sibling: StudioSuggestionDef) => {
    const existing = pieces?.find(
      (candidate) =>
        sameStill(candidate.imageUri, sibling.imageUrl) &&
        (candidate.status.phase === 'complete' ||
          candidate.status.phase === 'inspecting' ||
          candidate.status.phase === 'animating'),
    );
    if (existing) {
      router.replace({ pathname: '/studio-piece/[id]', params: { id: existing.id } });
      return;
    }
    if (wakes && wakes.quota.kind === 'metered' && wakes.used >= wakes.quota.limit) {
      router.push('/paywall');
      return;
    }
    if (submitPiece.isPending) return;
    try {
      const minted = await submitPiece.mutateAsync({
        imageUri: sibling.imageUrl,
        origin: 'collection',
      });
      router.replace({ pathname: '/studio-piece/[id]', params: { id: minted.id } });
    } catch (error) {
      if (error instanceof Error && error.message === 'quota_exhausted') {
        router.push('/paywall');
        return;
      }
      const detail =
        error instanceof Error && error.message.trim().length > 0
          ? error.message
          : "That painting couldn't be taken down. Try again.";
      console.warn('[studio-piece] related open failed', error);
      Alert.alert('The studio went dark', detail);
    }
  };

  return (
    <View style={styles.moreBlock}>
      <View style={styles.moreHeader}>
        <AppText variant="sectionHeader" color={colors.textTertiary}>
          MORE LIKE THIS
        </AppText>
        <Hairline style={styles.moreLine} />
      </View>
      {siblings.map((sibling) => (
        <PressableScale
          key={sibling.id}
          onPress={() => void open(sibling)}
          accessibilityRole="button"
          accessibilityLabel={`Wake ${sibling.title}`}
          style={styles.moreRow}
        >
          <Image source={{ uri: sibling.imageUrl }} style={styles.moreThumb} contentFit="cover" />
          <View style={styles.moreText}>
            <AppText variant="cardTitle" color={colors.textPrimary} numberOfLines={2}>
              {sibling.title}
            </AppText>
            <AppText variant="caption" color={colors.textSecondary}>
              {sibling.artist} · {sibling.year}
            </AppText>
          </View>
          <EmberDot size={8} />
        </PressableScale>
      ))}
    </View>
  );
}

/**
 * An alive house painting gets the museum treatment: the waked work as a
 * full-bleed masthead, its story beneath, and the same close-look lens the
 * daily lessons use. The video keeps playing while the visitor reads.
 */
function HouseMasterpiece({
  piece,
  animation,
  suggestion,
  ceremony,
}: {
  piece: StudioPiece;
  animation: AnimationSource;
  suggestion: StudioSuggestionDef;
  ceremony: boolean;
}) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { share, shareCardElement } = useBrandedShare();
  const [viewerOpen, setViewerOpen] = useState(false);
  const stage = useWallStage(usePaintingAspect(piece.imageUri), VIEWER_FOOTER);
  const heroHeight = Math.round(height * 0.6);
  const lensDetails = suggestion.details.map((detail) => ({
    id: detail.id,
    focus: { x: detail.x, y: detail.y, scale: detail.scale },
    caption: detail.caption,
  }));

  return (
    <View style={styles.museumRoot}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.museumScroll}>
        <View style={{ width, height: heroHeight }}>
          <Pressable
            onPress={() => setViewerOpen(true)}
            accessibilityRole="button"
            accessibilityLabel="Open the painting full screen"
          >
            <WakedPainting
              animation={animation}
              imageUrl={piece.imageUri}
              width={width}
              height={heroHeight}
              active={!viewerOpen}
              ceremony={ceremony}
              focus={suggestion.details.at(0)}
            />
          </Pressable>
          <Scrim direction="down" strength={0.5} style={styles.heroTopScrim} />
          <Scrim color={colors.bgViewer} style={styles.heroScrim} />
          <View style={[styles.heroTop, { paddingTop: insets.top + spacing.sm }]}>
            <PressableScale
              onPress={() => router.back()}
              accessibilityRole="button"
              accessibilityLabel="Back to the studio"
              style={styles.backButton}
            >
              <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.9)}>
                Studio
              </AppText>
            </PressableScale>
          </View>
          <View style={styles.heroText}>
            <AppText variant="epigraph" color={colors.emberGold}>
              {suggestion.artist} · {suggestion.year}
            </AppText>
            <AppText variant="title" color={colors.textPrimary}>
              {suggestion.title}
            </AppText>
            <View style={styles.aliveRow}>
              <EmberDot size={8} />
              <AppText variant="micro" color={colors.emberGold}>
                ALIVE
              </AppText>
            </View>
          </View>
        </View>

        <View style={styles.museumBody}>
          <AppText variant="story" color={colors.textPrimary}>
            {suggestion.story}
          </AppText>
          <View style={styles.lensSlot}>
            <DetailLens imageUrl={suggestion.imageUrl} details={lensDetails} />
          </View>
          <EmberButton
            label="Share your piece"
            variant="outline"
            small
            onPress={() =>
              share({
                imageUrl: piece.imageUri,
                title: suggestion.title,
                epigraph: `${suggestion.artist}, ${suggestion.year} · prompted.past studio`,
              })
            }
          />
          {piece.watermarked ? (
            <AppText variant="micro" color={colors.textTertiary} style={styles.watermarkNote}>
              Shared pieces carry the prompted.past mark. Members share clean.
            </AppText>
          ) : null}
          <RelatedShelf suggestion={suggestion} />
        </View>
      </ScrollView>

      <Modal
        visible={viewerOpen}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setViewerOpen(false)}
      >
        <PaintingWall stage={stage}>
          <View style={[styles.viewerFrame, { top: stage.frame.y, left: stage.frame.x }]}>
            <WakedPainting
              animation={animation}
              imageUrl={piece.imageUri}
              width={stage.frame.width}
              height={stage.frame.height}
              active={viewerOpen}
              fit="contain"
              turned={stage.turned}
              focus={suggestion.details.at(0)}
            />
          </View>
          <View
            style={[
              styles.viewerTop,
              {
                paddingTop: stage.insets.top + spacing.sm,
                paddingRight: stage.insets.right + spacing.xl,
              },
            ]}
          >
            <PressableScale
              onPress={() => setViewerOpen(false)}
              accessibilityRole="button"
              accessibilityLabel="Close full screen"
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              style={styles.viewerClose}
            >
              <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.9)}>
                ✕
              </AppText>
            </PressableScale>
          </View>
          <View style={[styles.viewerFooter, { paddingBottom: stage.insets.bottom + spacing.lg }]}>
            <AppText variant="epigraph" color={colors.emberGold}>
              {suggestion.title}
            </AppText>
            <AppText variant="micro" color={colors.textTertiary} style={styles.viewerLine}>
              {paintedLine(suggestion)}
            </AppText>
          </View>
        </PaintingWall>
      </Modal>
      {shareCardElement}
    </View>
  );
}

function phaseCopy(piece: StudioPiece): { title: string; line: string } {
  switch (piece.status.phase) {
    case 'inspecting':
      return { title: 'Under inspection', line: 'The curator is considering your painting.' };
    case 'animating':
      return {
        title: 'The studio is waking it',
        line: 'Nothing is repainted: a minute or two while it learns to move.',
      };
    case 'complete':
      return { title: 'Alive', line: 'Nothing changed but time.' };
    case 'rejected':
      return { title: 'Turned away', line: piece.status.reason };
    case 'failed':
      return { title: 'The studio went dark', line: piece.status.message };
    default: {
      const exhaustive: never = piece.status;
      throw new Error(`Unhandled studio phase: ${JSON.stringify(exhaustive)}`);
    }
  }
}

export default function StudioPieceScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const pieceId = typeof id === 'string' && id.length > 0 ? toStudioPieceId(id) : null;
  const { data: piece, isPending } = useStudioPiece(pieceId);
  const { share, shareCardElement } = useBrandedShare();
  // The ember burn belongs to the aliving moment: a completion fresher than
  // the grace window gets the ceremony, reopening an old piece does not.
  const [openedAtMs] = useState(() => Date.now());

  if (isPending) {
    return (
      <Screen>
        <View style={styles.pending}>
          <EmberDot size={12} />
        </View>
      </Screen>
    );
  }

  if (!piece) {
    return (
      <Screen>
        <EmptyState
          title="Not in the studio"
          message="This piece isn't on any easel here."
          actionLabel="Back"
          onAction={() => router.back()}
        />
      </Screen>
    );
  }

  // House paintings get the museum layout once alive; the visitor's own
  // uploads keep the plain easel view (no editorial content exists for them).
  const suggestion = houseWorkFor(piece.imageUri);
  if (piece.status.phase === 'complete' && suggestion) {
    return (
      <HouseMasterpiece
        piece={piece}
        animation={piece.status.animation}
        suggestion={suggestion}
        ceremony={piece.status.completedAtMs > openedAtMs - CEREMONY_GRACE_MS}
      />
    );
  }

  const copy = phaseCopy(piece);
  const settled = piece.status.phase === 'complete';
  const working = piece.status.phase === 'inspecting' || piece.status.phase === 'animating';

  return (
    <Screen padded={false} edges={[]}>
      <View style={{ paddingTop: insets.top + spacing.sm }}>
        <PressableScale
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Back to the studio"
          style={styles.backButton}
        >
          <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.85)}>
            Studio
          </AppText>
        </PressableScale>
      </View>

      <View style={styles.body}>
        {piece.status.phase === 'complete' ? (
          // Collection pieces carry pre-staged clips; the visitor's own
          // uploads play the living still until live generation lands.
          <WakedPainting
            animation={piece.status.animation}
            imageUrl={piece.imageUri}
            width={width - spacing.xl * 2}
            height={Math.round((width - spacing.xl * 2) * 1.2)}
            active
            ceremony={piece.status.completedAtMs > openedAtMs - CEREMONY_GRACE_MS}
          />
        ) : (
          <Image
            source={{ uri: piece.imageUri }}
            style={[
              styles.painting,
              { width: width - spacing.xl * 2 },
              working ? styles.paintingDim : null,
            ]}
            contentFit="contain"
            accessibilityLabel="Your painting"
          />
        )}
        <View style={styles.status}>
          {working ? <EmberDot size={10} /> : null}
          <AppText variant="cardTitle" color={settled ? colors.emberGold : colors.textPrimary}>
            {copy.title}
          </AppText>
          <AppText variant="caption" color={colors.textSecondary} style={styles.statusLine}>
            {copy.line}
          </AppText>
          {settled ? (
            <EmberButton
              label="Share your piece"
              variant="outline"
              small
              onPress={() =>
                share({
                  imageUrl: piece.imageUri,
                  title: 'A painting, woken',
                  epigraph: 'prompted.past studio',
                })
              }
            />
          ) : null}
          {settled && piece.watermarked ? (
            <AppText variant="micro" color={colors.textTertiary} style={styles.statusLine}>
              Shared pieces carry the prompted.past mark. Members share clean.
            </AppText>
          ) : null}
        </View>
      </View>
      {shareCardElement}
    </Screen>
  );
}

const styles = StyleSheet.create({
  moreBlock: {
    gap: spacing.sm,
    paddingTop: spacing.sm,
  },
  moreHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.xxs,
  },
  moreLine: {
    flex: 1,
    opacity: 0.7,
  },
  moreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  moreThumb: {
    width: 64,
    height: 64,
    borderRadius: radius.md,
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
  },
  moreText: {
    flex: 1,
    gap: spacing.xxs,
  },
  pending: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.xl,
    alignSelf: 'flex-start',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xl,
    paddingHorizontal: spacing.xl,
  },
  painting: {
    aspectRatio: 1,
    maxHeight: '60%',
  },
  paintingDim: {
    opacity: 0.55,
  },
  status: {
    alignItems: 'center',
    gap: spacing.xs,
  },
  statusLine: {
    textAlign: 'center',
  },
  museumRoot: {
    flex: 1,
    backgroundColor: colors.bgViewer,
  },
  museumScroll: {
    paddingBottom: spacing.giant,
  },
  heroTopScrim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 130,
  },
  heroScrim: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '42%',
  },
  heroTop: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  heroText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
    gap: spacing.xxs,
  },
  aliveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  museumBody: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    gap: spacing.xl,
  },
  lensSlot: {
    marginTop: spacing.xs,
  },
  watermarkNote: {
    textAlign: 'center',
  },
  viewerFrame: {
    position: 'absolute',
  },
  viewerTop: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  viewerClose: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: withAlpha(colors.bgRaised, 0.65),
  },
  viewerFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.xl,
  },
  viewerLine: {
    textAlign: 'center',
  },
});
