import { Image } from 'expo-image';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

import { colors, fonts, spacing, withAlpha } from '@/theme';
import { AppText } from '@/components/ui/app-text';
import type { WallpaperCardProps } from './wallpaper-card.types';

/**
 * The lock-screen export: the painting hung whole on the Molten ground,
 * captured at native screen resolution. Bands top and bottom keep the art
 * clear of the clock and the lock-screen controls; the picture is matted,
 * never cropped, so no composition is cut to fit a phone.
 */
const TOP_BAND = 0.2;
const BOTTOM_BAND = 0.14;
const MARGIN_X = 16;
const PLATE_HEIGHT = 108;
/** Mat padding plus hairline, doubled: the frame's own footprint. */
const FRAME_CHROME = 10;
/** Give up rather than hang the button if the painting never decodes. */
const CAPTURE_TIMEOUT_MS = 6_000;

export function WallpaperCard({ payload, screen, onCaptured }: WallpaperCardProps) {
  const cardRef = useRef<View>(null);
  const settledRef = useRef(false);
  const [aspect, setAspect] = useState<number | null>(null);

  const settle = (uri: string | null) => {
    if (settledRef.current) return;
    settledRef.current = true;
    onCaptured(uri);
  };

  useEffect(() => {
    const timer = setTimeout(() => settle(null), CAPTURE_TIMEOUT_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Capture once the painting's true aspect has sized the frame, so the
  // hairline hugs the canvas instead of boxing empty space around it.
  useEffect(() => {
    if (aspect === null) return;
    let cancelled = false;
    const run = async () => {
      // A breath for the resized frame to commit to the surface.
      await new Promise((resolve) => setTimeout(resolve, 140));
      if (cancelled || settledRef.current) return;
      try {
        const uri = await captureRef(cardRef, {
          format: 'jpg',
          quality: 0.95,
          result: 'tmpfile',
          // view-shot takes points and applies the screen scale itself.
          width: screen.width,
          height: screen.height,
        });
        settle(uri);
      } catch {
        settle(null);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aspect]);

  const boxWidth = screen.width - MARGIN_X * 2 - FRAME_CHROME;
  const boxHeight = screen.height * (1 - TOP_BAND - BOTTOM_BAND) - PLATE_HEIGHT - FRAME_CHROME;
  const artWidth = aspect === null ? boxWidth : Math.min(boxWidth, boxHeight * aspect);
  const artHeight = aspect === null ? boxHeight : artWidth / aspect;

  return (
    <View style={styles.offscreen} pointerEvents="none">
      <View
        ref={cardRef}
        collapsable={false}
        style={[
          styles.card,
          {
            width: screen.width,
            height: screen.height,
            paddingTop: screen.height * TOP_BAND,
            paddingBottom: screen.height * BOTTOM_BAND,
          },
        ]}
      >
        <View style={styles.frame}>
          <Image
            source={{ uri: payload.imageUrl }}
            style={{ width: artWidth, height: artHeight }}
            contentFit="contain"
            cachePolicy="memory-disk"
            onLoad={(event) => setAspect(event.source.width / event.source.height)}
            onError={() => settle(null)}
          />
        </View>
        <View style={[styles.plate, { width: boxWidth }]}>
          <AppText style={styles.title} numberOfLines={2} maxFontSizeMultiplier={1}>
            {payload.title}
          </AppText>
          <AppText style={styles.credit} numberOfLines={1} maxFontSizeMultiplier={1}>
            {payload.credit ?? payload.epigraph}
          </AppText>
          <AppText style={styles.wordmark} maxFontSizeMultiplier={1}>
            PROMPTED.PAST
          </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  offscreen: {
    position: 'absolute',
    left: -9999,
    top: 0,
  },
  card: {
    backgroundColor: colors.bgBase,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    padding: 4,
    borderWidth: 1,
    borderColor: withAlpha(colors.emberGold, 0.5),
    backgroundColor: colors.bgViewer,
  },
  plate: {
    height: PLATE_HEIGHT,
    paddingTop: spacing.lg,
    alignItems: 'center',
    gap: spacing.xxs,
  },
  title: {
    fontFamily: fonts.displayLight,
    fontSize: 30,
    lineHeight: 34,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  credit: {
    fontFamily: fonts.epigraphItalic,
    fontSize: 14,
    letterSpacing: 0.4,
    color: colors.emberGold,
  },
  wordmark: {
    fontFamily: fonts.sansMedium,
    fontSize: 9,
    letterSpacing: 2.4,
    color: colors.textTertiary,
    marginTop: spacing.xs,
  },
});
