import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { EmptyState } from '@/components/ui/empty-state';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Screen } from '@/components/ui/screen';
import { formatEraSpan } from '@/content/eras';
import { ADMIN_AVAILABLE } from '@/hooks/use-admin';
import { useTracks } from '@/hooks/use-tracks';
import { useAppStore } from '@/stores/app.store';
import { useProgressStore } from '@/stores/progress.store';
import { colors, eraPalette, radius, SCREEN_PADDING, spacing, withAlpha } from '@/theme';

const THUMB_WIDTH = 44;

export default function AdminScreen() {
  const { tracks, isPending } = useTracks();
  const adminMode = useAppStore((state) => state.adminMode);
  const setAdminMode = useAppStore((state) => state.setAdminMode);
  const activeEraId = useProgressStore((state) => state.activeEraId);
  const completedSceneIds = useProgressStore((state) => state.completedSceneIds);
  const [openEraId, setOpenEraId] = useState<string | null>(activeEraId);

  const totalScenes = tracks.reduce((sum, track) => sum + track.dayCount, 0);

  return (
    <Screen padded={false} edges={[]} atmosphere={false}>
      <View style={styles.header}>
        <View>
          <AppText variant="titleSm" color={colors.textPrimary}>
            The curator’s key
          </AppText>
          <AppText variant="caption" color={colors.textTertiary}>
            {totalScenes} works across {tracks.length} eras
          </AppText>
        </View>
        <PressableScale
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Close"
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.8)}>
            Done
          </AppText>
        </PressableScale>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.keyCard}>
          <View style={styles.keyText}>
            <AppText variant="bodySm" color={colors.textPrimary}>
              Every room open
            </AppText>
            <AppText variant="caption" color={colors.textTertiary}>
              Lifts the membership wall and the one-a-day gate so any lesson can be opened and
              read. Progress and membership are left as they are.
            </AppText>
          </View>
          <Switch
            value={adminMode}
            onValueChange={setAdminMode}
            disabled={!ADMIN_AVAILABLE}
            trackColor={{ true: colors.emberDeep, false: colors.bgRaised }}
            thumbColor={adminMode ? colors.emberBright : colors.textTertiary}
          />
        </View>

        {!ADMIN_AVAILABLE ? (
          <AppText variant="caption" color={colors.textTertiary} style={styles.unavailable}>
            This build reads live data with keys, so the key stays locked.
          </AppText>
        ) : null}

        {isPending ? (
          <View style={styles.pending}>
            <EmberDot size={12} />
          </View>
        ) : tracks.length === 0 ? (
          <EmptyState title="Nothing catalogued" message="The archive came back empty." />
        ) : (
          tracks.map((track) => {
            const palette = eraPalette(track.era.id);
            const open = openEraId === track.era.id;
            return (
              <View key={track.era.id} style={styles.wing}>
                <PressableScale
                  onPress={() => setOpenEraId(open ? null : track.era.id)}
                  accessibilityRole="button"
                  accessibilityLabel={track.era.name}
                  accessibilityState={{ expanded: open }}
                  style={[styles.wingHead, { borderColor: withAlpha(palette.halo, 0.2) }]}
                >
                  <View style={[styles.swatch, { backgroundColor: palette.accent }]} />
                  <View style={styles.wingText}>
                    <AppText variant="cardTitle" color={colors.textPrimary}>
                      {track.era.name}
                    </AppText>
                    <AppText variant="micro" color={colors.textTertiary}>
                      {formatEraSpan(track.era).toUpperCase()} · {track.dayCount} WORKS
                    </AppText>
                  </View>
                  <AppText variant="button" color={withAlpha(palette.accent, 0.85)}>
                    {open ? '−' : '+'}
                  </AppText>
                </PressableScale>

                {open
                  ? track.scenes.map((scene, index) => (
                      <PressableScale
                        key={scene.id}
                        onPress={() => {
                          // Turn the curator key on before navigate so Every room open
                          // reflects true and the scene route skips the paywall.
                          if (ADMIN_AVAILABLE) {
                            setAdminMode(true);
                          }
                          router.push({
                            pathname: '/scene/[id]',
                            params: { id: scene.id, unlock: '1' },
                          });
                        }}
                        accessibilityRole="button"
                        accessibilityLabel={`Open ${scene.title}`}
                        style={styles.lesson}
                      >
                        <AppText variant="micro" color={colors.textTertiary} style={styles.dayIndex}>
                          {String(index + 1)}
                        </AppText>
                        <Image
                          source={{ uri: scene.thumbUrl }}
                          style={styles.thumb}
                          contentFit="cover"
                          transition={150}
                        />
                        <View style={styles.lessonText}>
                          <AppText variant="bodySm" color={colors.textPrimary} numberOfLines={1}>
                            {scene.title}
                          </AppText>
                          <AppText variant="micro" color={colors.textTertiary} numberOfLines={1}>
                            {scene.historicalDateLabel}
                            {scene.details?.length ? ` · ${scene.details.length} details` : ''}
                            {scene.animation ? ' · motion' : ''}
                          </AppText>
                        </View>
                        {completedSceneIds.includes(scene.id) ? (
                          <View style={[styles.walked, { backgroundColor: palette.accent }]} />
                        ) : null}
                      </PressableScale>
                    ))
                  : null}
              </View>
            );
          })
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN_PADDING,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  content: {
    paddingHorizontal: SCREEN_PADDING,
    paddingBottom: spacing.giant,
    gap: spacing.sm,
  },
  keyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
  },
  keyText: {
    flex: 1,
    gap: spacing.xxs,
  },
  unavailable: {
    paddingHorizontal: spacing.xs,
  },
  pending: {
    paddingVertical: spacing.giant,
    alignItems: 'center',
  },
  wing: {
    gap: spacing.xxs,
  },
  wingHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
  },
  swatch: {
    width: 4,
    height: 34,
    borderRadius: radius.pill,
  },
  wingText: {
    flex: 1,
  },
  lesson: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  dayIndex: {
    width: 14,
    textAlign: 'right',
  },
  thumb: {
    width: THUMB_WIDTH,
    height: THUMB_WIDTH * 1.25,
    borderRadius: radius.sm,
    backgroundColor: colors.bgRaised,
  },
  lessonText: {
    flex: 1,
    gap: 2,
  },
  walked: {
    width: 6,
    height: 6,
    borderRadius: radius.pill,
  },
});
