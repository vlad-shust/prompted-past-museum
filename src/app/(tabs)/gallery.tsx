import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { CollectionGrid } from '@/components/archive/collection-grid';
import { WingGrid } from '@/components/studio/wing-grid';
import { AppText } from '@/components/ui/app-text';
import { ProfileOrb } from '@/components/ui/profile-orb';
import { Screen } from '@/components/ui/screen';
import { Segmented } from '@/components/ui/segmented';
import { colors, SCREEN_PADDING, spacing } from '@/theme';

type GallerySegment = 'collection' | 'wing';

const SEGMENTS = [
  { value: 'collection', label: 'Collection' },
  { value: 'wing', label: 'From the studio' },
] as const;

export default function GalleryScreen() {
  const [segment, setSegment] = useState<GallerySegment>('collection');

  return (
    <Screen padded={false}>
      <View style={styles.header}>
        <View style={styles.heading}>
          <View style={styles.headerRow}>
            <AppText variant="title" color={colors.textPrimary}>
              Gallery
            </AppText>
            <ProfileOrb />
          </View>
          <AppText variant="epigraph" color={colors.emberGold}>
            Every painting you’ve saved, kept with its story
          </AppText>
        </View>
        <Segmented options={SEGMENTS} value={segment} onChange={setSegment} />
      </View>

      {segment === 'collection' ? <CollectionGrid /> : <WingGrid />}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: SCREEN_PADDING,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    gap: spacing.md,
  },
  heading: {
    gap: spacing.xxs,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
