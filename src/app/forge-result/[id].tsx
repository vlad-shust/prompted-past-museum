import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeIn, FadeInDown, FadeOut, useReducedMotion } from 'react-native-reanimated';

import { getEra } from '@/content/eras';
import { EmberField } from '@/components/ember/ember-field';
import { EmberReveal } from '@/components/ember/ember-reveal';
import { AppText } from '@/components/ui/app-text';
import { EmberButton } from '@/components/ui/ember-button';
import { EmptyState } from '@/components/ui/empty-state';
import { Scrim } from '@/components/ui/scrim';
import { useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/hooks/query-keys';
import { useBrandedShare } from '@/hooks/use-branded-share';
import { useForge, useForges } from '@/hooks/use-forges';
import { useAppStore } from '@/stores/app.store';
import { useMembershipStore } from '@/stores/membership.store';
import { colors, durations, spacing, withAlpha } from '@/theme';
import { toForgeId } from '@/types/common.types';
import type { Forge } from '@/types/domain.types';
import { isMember } from '@/utils/access';

function craftingLines(eraName: string): string[] {
  return [
    'Stoking the fires…',
    `Sketching ${eraName}…`,
    'Mixing pigment and smoke…',
    'Setting the light…',
  ];
}

function CraftingState({ forge }: { forge: Forge }) {
  const insets = useSafeAreaInsets();
  const era = getEra(forge.eraId);
  const lines = useMemo(() => craftingLines(era.name), [era.name]);
  const [lineIndex, setLineIndex] = useState(forge.status.phase === 'validating' ? -1 : 0);

  useEffect(() => {
    if (forge.status.phase === 'validating') return;
    const interval = setInterval(() => {
      setLineIndex((current) => (current + 1) % lines.length);
    }, 3_600);
    return () => clearInterval(interval);
  }, [forge.status.phase, lines.length]);

  const text = forge.status.phase === 'validating' ? 'Reading your commission…' : lines[Math.max(0, lineIndex)];

  return (
    <View style={styles.crafting}>
      <EmberField />
      <Animated.View
        key={text}
        entering={FadeIn.duration(durations.slow)}
        exiting={FadeOut.duration(durations.standard)}
        style={styles.craftingTextWrap}
      >
        <AppText variant="titleSm" color={colors.textPrimary} style={styles.craftingText}>
          {text}
        </AppText>
        <AppText variant="caption" color={colors.textTertiary} style={styles.craftingText}>
          {era.name} · commissioned by you
        </AppText>
      </Animated.View>
      <View style={[styles.craftingEscape, { bottom: insets.bottom + spacing.xl }]}>
        <EmberButton label="Leave, we’ll keep painting" variant="ghost" small onPress={() => router.back()} />
      </View>
    </View>
  );
}

function CompleteState({ forge, imageUrl }: { forge: Forge; imageUrl: string }) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const revealedSceneIds = useAppStore((state) => state.revealedSceneIds);
  const markSceneRevealed = useAppStore((state) => state.markSceneRevealed);
  const membership = useMembershipStore((state) => state.membership);
  const { data: forges = [] } = useForges();
  const { share, shareCardElement } = useBrandedShare();
  const era = getEra(forge.eraId);
  const reduceMotion = useReducedMotion();
  const heroHeight = Math.round(height * 0.66);
  const revealActive = !revealedSceneIds.includes(forge.id);
  const contentDelay = revealActive ? (reduceMotion ? durations.slow : durations.ceremonial) : 80;
  const paywallShownRef = useRef(false);
  // Captured once: marking the reveal complete flips revealActive false mid-wait;
  // keying the paywall timer off the live value would tear it down before it fires.
  const firstViewRef = useRef(revealActive);

  // Value first, wall immediately after: a free visitor's first completed
  // forge is the plan's paywall moment — after the reveal has landed.
  // "First" = no OTHER forge has completed; the current one is already
  // complete by virtue of rendering this state. Counting this way stays
  // correct even when the forges list cache predates this completion.
  const otherCompleted = forges.filter(
    (other) => other.id !== forge.id && other.status.phase === 'complete',
  ).length;
  useEffect(() => {
    if (paywallShownRef.current) return;
    if (isMember(membership) || otherCompleted > 0 || !firstViewRef.current) return;
    paywallShownRef.current = true;
    const delay = reduceMotion ? durations.slow + 1_200 : durations.ceremonial + 2_600;
    const timer = setTimeout(() => router.push('/paywall'), delay);
    return () => clearTimeout(timer);
  }, [membership, otherCompleted, reduceMotion]);

  const handleShare = () => {
    share({
      imageUrl,
      title: forge.title ?? 'From the forge',
      epigraph: `${era.name} · your commission`,
    });
  };

  return (
    <ScrollView
      style={styles.completeRoot}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: spacing.giant }}
      contentInsetAdjustmentBehavior="never"
    >
      <View style={{ width, height: heroHeight }}>
        <EmberReveal
          imageUrl={imageUrl}
          width={width}
          height={heroHeight}
          active={revealActive}
          onRevealComplete={() => markSceneRevealed(forge.id)}
        />
        <Scrim direction="up" style={styles.heroScrim} />
        <View style={[styles.closeRow, { paddingTop: insets.top + spacing.sm }]}>
          <EmberButton label="Done" variant="ghost" small onPress={() => router.back()} />
        </View>
        <View style={styles.titleBlock}>
          <AppText variant="epigraph" color={colors.emberGold}>
            {era.name} · your commission
          </AppText>
          <AppText variant="title" color={colors.textPrimary}>
            {forge.title ?? 'From the forge'}
          </AppText>
        </View>
      </View>

      <Animated.View
        entering={FadeInDown.duration(durations.slow).delay(contentDelay)}
        style={styles.completeContent}
      >
        <AppText variant="bodySm" color={withAlpha(colors.textPrimary, 0.75)} style={styles.quote}>
          “{forge.description}”
        </AppText>
        <AppText variant="caption" color={colors.emberGold}>
          ◆ Kept in your collection
        </AppText>
        <View style={styles.actions}>
          <EmberButton label="Share" onPress={handleShare} style={styles.action} />
          <EmberButton
            label="Forge another"
            variant="outline"
            onPress={() => router.back()}
            style={styles.action}
          />
        </View>
      </Animated.View>
      {shareCardElement}
    </ScrollView>
  );
}

export default function ForgeResultScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const forgeId = typeof id === 'string' && id.length > 0 ? toForgeId(id) : null;
  const { data: forge, isPending } = useForge(forgeId);
  const queryClient = useQueryClient();

  // When polling lands on a terminal phase, the forges list (collection)
  // and the quota counter are stale — refresh them once.
  const phase = forge?.status.phase;
  useEffect(() => {
    if (phase === 'complete' || phase === 'rejected' || phase === 'failed') {
      void queryClient.invalidateQueries({ queryKey: queryKeys.forges });
      void queryClient.invalidateQueries({ queryKey: queryKeys.forgeQuota });
    }
  }, [phase, queryClient]);

  // A null id (empty/malformed deep link) leaves useForge disabled and
  // isPending forever, so surface the "Gone cold" state instead of an
  // endless, escape-less crafting animation.
  if (forgeId === null || (!isPending && !forge)) {
    return (
      <View style={styles.crafting}>
        <EmptyState title="Gone cold" message="This forge can't be found." actionLabel="Back" onAction={() => router.back()} />
      </View>
    );
  }

  if (isPending || !forge) {
    return (
      <View style={styles.crafting}>
        <EmberField />
      </View>
    );
  }

  switch (forge.status.phase) {
    case 'validating':
    case 'generating':
      return <CraftingState forge={forge} />;
    case 'rejected':
      return (
        <View style={styles.crafting}>
          <EmptyState
            title="The forge only shapes the past"
            message={forge.status.reason}
            actionLabel="Try another moment"
            onAction={() => router.back()}
          />
        </View>
      );
    case 'failed':
      return (
        <View style={styles.crafting}>
          <EmptyState
            title="The fire faltered"
            message={forge.status.message}
            actionLabel="Return to the forge"
            onAction={() => router.back()}
          />
        </View>
      );
    case 'complete':
      return <CompleteState forge={forge} imageUrl={forge.status.imageUrl} />;
    default: {
      const exhaustive: never = forge.status;
      throw new Error(`Unhandled forge phase: ${JSON.stringify(exhaustive)}`);
    }
  }
}

const styles = StyleSheet.create({
  crafting: {
    flex: 1,
    backgroundColor: colors.bgViewer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  craftingTextWrap: {
    position: 'absolute',
    left: spacing.huge,
    right: spacing.huge,
    alignItems: 'center',
    gap: spacing.sm,
  },
  craftingText: {
    textAlign: 'center',
  },
  craftingEscape: {
    position: 'absolute',
    alignSelf: 'center',
  },
  completeRoot: {
    flex: 1,
    backgroundColor: colors.bgBase,
  },
  heroScrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '46%',
  },
  closeRow: {
    position: 'absolute',
    top: 0,
    right: spacing.md,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleBlock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
    gap: spacing.xs,
  },
  completeContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    gap: spacing.lg,
  },
  quote: {
    fontStyle: 'italic',
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  action: {
    flex: 1,
  },
});
