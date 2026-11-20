import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { useMemo, useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { WakedPainting } from '@/components/ember/waked-painting';
import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { wallLabel } from '@/content/studio-suggestions';
import { mediaUrl } from '@/lib/env';
import { colors, SCREEN_PADDING, spacing, type } from '@/theme';
import { EmptyFrame, FILLET, Frame } from './frame';
import type {
  HangLimits,
  HouseWallProps,
  WallFrame,
  WallItem,
  WallRoomProps,
  WallWorkProps,
} from './house-wall.types';

/** Works hang this far apart: at rest the lit work stands alone, the next arrives as you walk. */
const GAP = spacing.lg;
/** The half-dark the unlit works wait in. */
const UNLIT = 0.38;
/** The lit work may take this much of the screen's width. */
const WALL_WIDTH = 0.94;
/** Room above and below the tallest work for its shadow. */
const WALL_INSET = spacing.sm;
/** The plaque's slot is sized for the longest it can say, so the wall keeps one hanging line. */
const TITLE_LINES = 2;
/** The label under the tallest work; a shorter work lends its plaque the room it leaves. */
const LABEL_LINES = 3;
const MAX_LABEL_LINES = 5;
/** Sentences are budgeted by this, conservatively, so the cap on lines never cuts one. */
const LABEL_CHARS_PER_LINE = 46;
/** The plaque hangs this far under its work. */
const PLAQUE_GAP = spacing.md;
const PLAQUE_HEIGHT =
  spacing.xxs +
  type.epigraph.lineHeight +
  spacing.xxs +
  type.titleSm.lineHeight * TITLE_LINES +
  spacing.sm +
  type.bodySm.lineHeight * LABEL_LINES +
  spacing.md +
  type.micro.lineHeight;
/** A plaque reads only when its work is this close to mid-room; between works the wall is bare. */
const PLAQUE_REACH = 90;
/** A work never hangs shorter than this, however small the room. */
const MIN_HANG = 200;

/**
 * The hanging height: every work shares it and widths follow their proportions.
 * The room decides it, so the tallest work and its plaque exactly fill the
 * space the screen gives the wall. A wide work would overrun the phone, so it
 * hangs smaller instead.
 */
function hangLimits(width: number, room: number): HangLimits {
  const height = room - WALL_INSET * 2 - PLAQUE_GAP - PLAQUE_HEIGHT;
  return { height: Math.max(MIN_HANG, Math.round(height)), maxWidth: Math.round(width * WALL_WIDTH) };
}

function fitFrame(limits: HangLimits, aspect: number): WallFrame {
  const width = Math.min(Math.round(limits.height * aspect), limits.maxWidth);
  return { width, height: Math.round(width / aspect) };
}

/** Where the scroller must sit for each item to hang in the middle of the room. */
function midRoomOffsets(items: readonly WallItem[], screenWidth: number): number[] {
  const first = items[0];
  let left = first ? (screenWidth - first.frame.width) / 2 : 0;
  return items.map((item) => {
    const centre = left + item.frame.width / 2;
    left += item.frame.width + GAP;
    return Math.round(centre - screenWidth / 2);
  });
}

/**
 * One work on the wall, its plaque hung under it. The light follows the
 * visitor: the work is lit mid-room and fades as it leaves, and its plaque
 * reads only once it has settled in front of them. The lit work wakes; the
 * ones either side keep their clip staged so nothing waits when the visitor
 * walks on.
 */
function WallWork({ item, index, offsets, scrollX, lit, near, hint, count, onPress }: WallWorkProps) {
  const { width: screenWidth } = useWindowDimensions();
  const self = offsets[index] ?? 0;
  const before = offsets[index - 1] ?? self - screenWidth;
  const after = offsets[index + 1] ?? self + screenWidth;
  const light = useAnimatedStyle(() => ({
    opacity: interpolate(scrollX.value, [before, self, after], [UNLIT, 1, UNLIT], Extrapolation.CLAMP),
  }));
  const settled = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollX.value,
      [self - PLAQUE_REACH, self, self + PLAQUE_REACH],
      [0, 1, 0],
      Extrapolation.CLAMP,
    ),
  }));
  const { frame, spare } = item;
  const canvas = { width: frame.width - FILLET * 2, height: frame.height - FILLET * 2 };
  const plaqueWidth = screenWidth - SCREEN_PADDING * 2;
  const plaqueSlot = {
    top: frame.height + PLAQUE_GAP,
    left: (frame.width - plaqueWidth) / 2,
    width: plaqueWidth,
  };
  const labelLines = Math.min(
    MAX_LABEL_LINES,
    LABEL_LINES + Math.floor(spare / type.bodySm.lineHeight),
  );
  const hung = {
    width: frame.width,
    height:
      frame.height + PLAQUE_GAP + PLAQUE_HEIGHT + (labelLines - LABEL_LINES) * type.bodySm.lineHeight,
  };

  if (item.kind === 'yours') {
    return (
      <Animated.View style={[light, hung]}>
        <EmptyFrame
          width={frame.width}
          height={frame.height}
          onPress={onPress}
          accessibilityLabel={lit ? 'Bring a painting of your own' : 'Walk to the empty frame'}
        />
        <Animated.View style={[styles.plaqueSlot, plaqueSlot, settled]}>
          <Plaque
            line="Your own painting, set in motion"
            title="Your painting"
            label="Choose one from your photos and the studio takes it from there. Nothing is repainted."
            labelLines={labelLines}
            hint="Choose a painting"
            accessibilityLabel="Choose a painting from your photos"
            onPress={onPress}
          />
        </Animated.View>
      </Animated.View>
    );
  }

  const { work } = item;
  return (
    <Animated.View style={[light, hung]}>
      <Frame
        width={frame.width}
        height={frame.height}
        onPress={onPress}
        accessibilityLabel={lit ? `Open the story of ${work.title}` : `Walk to ${work.title}`}
      >
        {near && work.videoFile ? (
          <View pointerEvents="none">
            <WakedPainting
              animation={{ kind: 'video', url: mediaUrl(work.videoFile) }}
              imageUrl={work.imageUrl}
              width={canvas.width}
              height={canvas.height}
              active={lit}
              focus={work.details.at(0)}
              quiet
            />
          </View>
        ) : (
          <Image source={{ uri: work.imageUrl }} style={canvas} contentFit="cover" transition={200} />
        )}
      </Frame>
      <Animated.View style={[styles.plaqueSlot, plaqueSlot, settled]}>
        <Plaque
          line={`${work.artist} · ${work.year}`}
          title={work.title}
          label={wallLabel(work.story, labelLines * LABEL_CHARS_PER_LINE)}
          labelLines={labelLines}
          count={count}
          hint={hint}
          accessibilityLabel={`Open the story of ${work.title}`}
          onPress={onPress}
        />
      </Animated.View>
    </Animated.View>
  );
}

/**
 * A wall you walk along: the works hang side by side at one height, each at
 * its own proportion, each with its plaque beneath. The one in front of you
 * is lit and wakes; the rest wait in the half-dark until you reach them.
 * Tapping the lit work opens its story. The wall ends on an empty frame kept
 * for the visitor's own painting.
 */
export function HouseWall({ works, openingId, hint, onOpen, onCommission }: HouseWallProps) {
  const { width } = useWindowDimensions();
  // The wall hangs to the room it is given, so it is measured before it is hung.
  const [room, setRoom] = useState<number | null>(null);
  const items = useMemo<WallItem[]>(() => {
    if (room === null) return [];
    const limits = hangLimits(width, room);
    const hung = works.map<WallItem>((work) => {
      const frame = fitFrame(limits, work.still.width / work.still.height);
      return { kind: 'work', work, frame, spare: limits.height - frame.height };
    });
    // The empty frame hangs a touch smaller than the works, in the plainest proportion.
    const yoursFrame = fitFrame(
      { height: Math.round(limits.height * 0.82), maxWidth: limits.maxWidth },
      4 / 3,
    );
    const yours: WallItem = { kind: 'yours', frame: yoursFrame, spare: limits.height - yoursFrame.height };
    return [...hung, yours];
  }, [works, width, room]);
  const offsets = useMemo(() => midRoomOffsets(items, width), [items, width]);
  const openingIndex = Math.max(
    0,
    works.findIndex((work) => work.id === openingId),
  );

  return (
    <View
      style={styles.room}
      onLayout={(event) => {
        const measured = Math.round(event.nativeEvent.layout.height);
        if (measured !== room) setRoom(measured);
      }}
    >
      {items.length > 0 ? (
        <WallRoom
          key={room}
          items={items}
          offsets={offsets}
          openingIndex={openingIndex}
          count={works.length}
          hint={hint}
          onOpen={onOpen}
          onCommission={onCommission}
        />
      ) : null}
    </View>
  );
}

/**
 * The hung wall. It mounts once the room is measured and opens mid-room, so
 * the light starts on the opening work with no scroll event needed.
 */
function WallRoom({ items, offsets, openingIndex, count, hint, onOpen, onCommission }: WallRoomProps) {
  const { width } = useWindowDimensions();
  const [centred, setCentred] = useState(openingIndex);
  const opening = offsets[openingIndex] ?? 0;
  // Where the visitor stands along the wall.
  const scrollX = useSharedValue(opening);
  const nearest = useSharedValue(openingIndex);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const onScroll = useAnimatedScrollHandler(
    (event) => {
      const x = event.contentOffset.x;
      scrollX.value = x;
      let best = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      for (let i = 0; i < offsets.length; i += 1) {
        const distance = Math.abs((offsets[i] ?? 0) - x);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      }
      if (best !== nearest.value) {
        nearest.value = best;
        runOnJS(setCentred)(best);
      }
    },
    [offsets],
  );

  const walkTo = (index: number) => {
    const x = offsets[index];
    if (x !== undefined) scrollRef.current?.scrollTo({ x, animated: true });
  };

  const first = items[0];
  const last = items[items.length - 1];

  return (
    <Animated.ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
      snapToOffsets={[...offsets]}
      decelerationRate="fast"
      contentOffset={{ x: opening, y: 0 }}
      style={styles.wall}
      contentContainerStyle={[
        styles.works,
        {
          paddingLeft: first ? (width - first.frame.width) / 2 : 0,
          paddingRight: last ? (width - last.frame.width) / 2 : 0,
        },
      ]}
    >
      {items.map((item, index) => {
        const lit = index === centred;
        return (
          <WallWork
            key={item.kind === 'work' ? item.work.id : 'yours'}
            item={item}
            index={index}
            offsets={offsets}
            scrollX={scrollX}
            lit={lit}
            near={Math.abs(index - centred) <= 1}
            hint={hint}
            count={`${index + 1} of ${count}`}
            onPress={() => {
              if (!lit) {
                walkTo(index);
                return;
              }
              if (item.kind === 'work') onOpen(item.work);
              else onCommission();
            }}
          />
        );
      })}
    </Animated.ScrollView>
  );
}

/** The museum label under a work. The whole plaque is the door to its story. */
function Plaque({
  line,
  title,
  label,
  labelLines,
  count,
  hint,
  accessibilityLabel,
  onPress,
}: {
  line: string;
  title: string;
  label: string;
  labelLines: number;
  count?: string;
  hint: string;
  accessibilityLabel: string;
  onPress: () => void;
}) {
  return (
    <PressableScale
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={styles.plaque}
    >
      <View style={styles.plaqueRow}>
        <AppText variant="epigraph" color={colors.emberGold} numberOfLines={1} style={styles.line}>
          {line}
        </AppText>
        {count ? (
          <AppText variant="micro" color={colors.textTertiary} style={styles.count}>
            {count.toUpperCase()}
          </AppText>
        ) : null}
      </View>
      <AppText
        variant="titleSm"
        color={colors.textPrimary}
        numberOfLines={TITLE_LINES}
        style={styles.title}
      >
        {title}
      </AppText>
      <AppText
        variant="bodySm"
        color={colors.textSecondary}
        numberOfLines={labelLines}
        style={styles.label}
      >
        {label}
      </AppText>
      <View style={styles.hint}>
        <AppText variant="micro" color={colors.emberGold} style={styles.hintText}>
          {hint.toUpperCase()}
        </AppText>
        <SymbolView
          name="chevron.right"
          size={9}
          weight="semibold"
          tintColor={colors.emberGold}
          type="monochrome"
          fallback={
            <AppText variant="micro" color={colors.emberGold}>
              ›
            </AppText>
          }
        />
      </View>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  room: {
    flex: 1,
  },
  wall: {
    flex: 1,
  },
  works: {
    // One line through every work's middle, as a museum hangs; each plaque
    // rides under its own work, so the group sits at eye level whatever its shape.
    alignItems: 'center',
    gap: GAP,
    paddingVertical: WALL_INSET,
  },
  plaqueSlot: {
    position: 'absolute',
  },
  plaque: {
    paddingTop: spacing.xxs,
  },
  plaqueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  line: {
    flexShrink: 1,
  },
  count: {
    letterSpacing: 1,
  },
  title: {
    marginTop: spacing.xxs,
  },
  label: {
    marginTop: spacing.sm,
  },
  hint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxs,
    marginTop: spacing.md,
  },
  hintText: {
    letterSpacing: 1.2,
  },
});
