import { Image } from 'expo-image';
import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

import { colors, fonts, withAlpha } from '@/theme';
import { AppText } from '@/components/ui/app-text';
import type { ShareCardProps } from './share-card.types';

/**
 * The branded export: painting in a museum mat with a gold hairline,
 * caption plate below. Rendered offscreen at 360×450pt and captured at
 * 1080×1350 (4:5) for the share sheet.
 */
const CARD_W = 360;
const CARD_H = 450;

export function ShareCard({ payload, onCaptured }: ShareCardProps) {
  const cardRef = useRef<View>(null);
  const settledRef = useRef(false);

  // One resolution only, whichever path wins the race.
  const settle = (uri: string | null) => {
    if (settledRef.current) return;
    settledRef.current = true;
    onCaptured(uri);
  };

  // If the card image never loads (cache miss + slow network), neither
  // onLoadEnd nor onError fires — bail to the plain-link share so the
  // tap is never a silent no-op.
  useEffect(() => {
    const timer = setTimeout(() => settle(null), 3_000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const capture = async () => {
    if (settledRef.current) return;
    try {
      // A breath for the image to commit to the surface.
      await new Promise((resolve) => setTimeout(resolve, 120));
      const uri = await captureRef(cardRef, {
        format: 'jpg',
        quality: 0.92,
        result: 'tmpfile',
        width: 1080,
        height: 1350,
      });
      settle(uri);
    } catch {
      settle(null);
    }
  };

  return (
    <View style={styles.offscreen} pointerEvents="none">
      <View ref={cardRef} collapsable={false} style={styles.card}>
        <View style={styles.mat}>
          <Image
            source={{ uri: payload.imageUrl }}
            style={styles.image}
            contentFit="cover"
            onLoadEnd={() => void capture()}
            onError={() => settle(null)}
            cachePolicy="memory-disk"
          />
        </View>
        <View style={styles.plate}>
          <AppText style={styles.epigraph} numberOfLines={1}>
            {payload.epigraph}
          </AppText>
          <AppText style={styles.title} numberOfLines={2}>
            {payload.title}
          </AppText>
          <AppText style={styles.wordmark}>PROMPTED.PAST</AppText>
          {payload.webUrl ? (
            <AppText style={styles.webUrl}>
              {payload.webUrl.replace(/^https?:\/\//, '').split('/')[0]}
            </AppText>
          ) : null}
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
    width: CARD_W,
    height: CARD_H,
    backgroundColor: colors.bgBase,
    padding: 14,
  },
  mat: {
    flex: 1,
    borderWidth: 1,
    borderColor: withAlpha(colors.emberGold, 0.55),
    padding: 3,
    backgroundColor: colors.bgViewer,
  },
  image: {
    flex: 1,
  },
  plate: {
    paddingTop: 12,
    paddingBottom: 2,
    alignItems: 'center',
    gap: 3,
  },
  epigraph: {
    fontFamily: fonts.epigraphItalic,
    fontSize: 10,
    letterSpacing: 1,
    color: colors.emberGold,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 17,
    lineHeight: 21,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  wordmark: {
    fontFamily: fonts.sansMedium,
    fontSize: 8,
    letterSpacing: 2.2,
    color: colors.textTertiary,
    marginTop: 4,
  },
  webUrl: {
    fontFamily: fonts.sansMedium,
    fontSize: 7,
    letterSpacing: 1.1,
    color: withAlpha(colors.emberGold, 0.6),
    marginTop: 1,
  },
});
