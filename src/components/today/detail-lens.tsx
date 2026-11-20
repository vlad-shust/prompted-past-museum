import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { colors, radius, SCREEN_PADDING, spacing, withAlpha } from '@/theme';
import type { DetailFocus } from '@/types/domain.types';
import type { DetailLensProps } from './detail-lens.types';

const THUMB = 64;
const STAGE_ASPECT = 1 / 0.72;

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Positions the full image inside a w×h window so the focus point sits at the
 * window's center, without ever showing past the image's edge. The zoom box
 * carries the *painting's* aspect, not the window's: sizing it to the window
 * cover-crops the canvas, which put up to half of some paintings permanently
 * out of reach. focus.x/y are true points on the painting.
 *
 * Mirrors boxStyle() in web/src/components/detail-lens.tsx. Keep the two in sync.
 */
function regionStyle(focus: DetailFocus, w: number, h: number, aspect: number) {
  const base = Math.max(w / aspect, h);
  const zoomW = aspect * base * focus.scale;
  const zoomH = base * focus.scale;
  return {
    width: zoomW,
    height: zoomH,
    left: clamp(w / 2 - focus.x * zoomW, w - zoomW, 0),
    top: clamp(h / 2 - focus.y * zoomH, h - zoomH, 0),
  };
}

/**
 * The curator's close-looks: circular windows into the painting, with the
 * lens stage always open beneath them. Thumbs jump the pager; swiping
 * moves between details.
 */
export function DetailLens({ imageUrl, details }: DetailLensProps) {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  // Until the painting reports its shape, frame it as the stage.
  const [aspect, setAspect] = useState(STAGE_ASPECT);
  const stageRef = useRef<ScrollView>(null);

  if (details.length === 0) return null;

  const stageW = width - SCREEN_PADDING * 2;
  const stageH = Math.round(stageW * 0.72);
  const current = details[index];

  // Scroll the pager itself: state alone only moves the caption and dots.
  const jumpTo = (next: number) => {
    void Haptics.selectionAsync();
    stageRef.current?.scrollTo({ x: next * stageW, animated: true });
    setIndex(next);
  };

  return (
    <View style={styles.root}>
      <AppText variant="sectionHeader" color={colors.textTertiary}>
        LOOK CLOSER
      </AppText>

      <View style={styles.thumbRow}>
        {details.map((detail, thumbIndex) => (
          <PressableScale
            key={detail.id}
            onPress={() => jumpTo(thumbIndex)}
            haptic={false}
            accessibilityRole="button"
            accessibilityLabel={`Look closer: detail ${thumbIndex + 1} of ${details.length}`}
            style={[styles.thumb, index === thumbIndex ? styles.thumbActive : null]}
          >
            <Image
              source={{ uri: imageUrl }}
              style={[styles.thumbImage, regionStyle(detail.focus, THUMB, THUMB, aspect)]}
              contentFit="cover"
            />
          </PressableScale>
        ))}
      </View>

      <View style={styles.stageBlock}>
        {/* A plain pager, every page mounted: three or four details don't
            need virtualization, and FlatList's initialScrollIndex left
            cells blank until the first manual scroll. */}
        <ScrollView
          ref={stageRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const page = Math.round(event.nativeEvent.contentOffset.x / stageW);
            if (page !== index) setIndex(clamp(page, 0, details.length - 1));
          }}
        >
          {details.map((detail) => (
            <View key={detail.id} style={[styles.stage, { width: stageW, height: stageH }]}>
              <Image
                source={{ uri: imageUrl }}
                style={[styles.stageImage, regionStyle(detail.focus, stageW, stageH, aspect)]}
                contentFit="cover"
                transition={200}
                onLoad={({ source }) => {
                  if (source.width > 0 && source.height > 0) {
                    setAspect(source.width / source.height);
                  }
                }}
              />
            </View>
          ))}
        </ScrollView>
        <AppText variant="bodySm" color={withAlpha(colors.textPrimary, 0.78)} style={styles.caption}>
          {current.caption}
        </AppText>
        <View style={styles.dots}>
          {details.map((detail, dotIndex) => (
            <View
              key={detail.id}
              style={[styles.dot, dotIndex === index ? styles.dotActive : null]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: spacing.md,
  },
  thumbRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  thumb: {
    width: THUMB,
    height: THUMB,
    borderRadius: radius.pill,
    overflow: 'hidden',
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
  },
  thumbActive: {
    borderWidth: 1,
    borderColor: withAlpha(colors.emberGold, 0.7),
  },
  thumbImage: {
    position: 'absolute',
  },
  stageBlock: {
    gap: spacing.sm,
  },
  stage: {
    borderRadius: radius.lg,
    overflow: 'hidden',
    backgroundColor: colors.bgElevated,
  },
  stageImage: {
    position: 'absolute',
  },
  caption: {
    fontStyle: 'italic',
  },
  dots: {
    flexDirection: 'row',
    gap: spacing.xs,
    alignSelf: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: radius.pill,
    backgroundColor: withAlpha(colors.textTertiary, 0.4),
  },
  dotActive: {
    backgroundColor: colors.emberGold,
  },
});
