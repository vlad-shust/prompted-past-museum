import { format, getDay, getDaysInMonth, parseISO, startOfMonth } from 'date-fns';
import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { getEra } from '@/content/eras';
import { useToday } from '@/hooks/use-today';
import { colors, radius, spacing, withAlpha } from '@/theme';
import type { EraPalette } from '@/theme';
import type { Scene } from '@/types/domain.types';
import { isoDay } from '@/utils/dates';
import type { ActivityCalendarProps } from './activity-calendar.types';

const CELL = 34;
const THUMB_WIDTH = 44;
const WEEK_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'] as const;

/**
 * The quiet record: a month of small marks for days the museum was opened.
 * No streaks, no chains to break: an attendance book, not a scoreboard.
 * A marked day opens onto the painting stepped into that day.
 */
export function ActivityCalendar({
  visitDays,
  palette,
  sceneForDay,
  onOpenScene,
}: ActivityCalendarProps) {
  const now = useToday();
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const visited = new Set<string>(visitDays);
  const today = isoDay(now);

  const daysInMonth = getDaysInMonth(now);
  // date-fns getDay: 0 = Sunday; the grid starts on Monday.
  const leadingBlanks = (getDay(startOfMonth(now)) + 6) % 7;
  const monthPrefix = format(now, 'yyyy-MM');

  const cells: { key: string; day: number | null }[] = [
    ...Array.from({ length: leadingBlanks }, (_, index) => ({
      key: `blank-${index}`,
      day: null,
    })),
    ...Array.from({ length: daysInMonth }, (_, index) => ({
      key: `day-${index + 1}`,
      day: index + 1,
    })),
  ];

  return (
    <View style={styles.root}>
      <AppText variant="sectionHeader" color={colors.textTertiary}>
        {format(now, 'MMMM yyyy').toUpperCase()}
      </AppText>
      <View style={styles.grid}>
        {WEEK_LABELS.map((label, index) => (
          <View key={`w-${index}`} style={styles.cell}>
            <AppText variant="micro" color={colors.textTertiary}>
              {label}
            </AppText>
          </View>
        ))}
        {cells.map((cell) => {
          if (cell.day === null) return <View key={cell.key} style={styles.cell} />;
          const iso = `${monthPrefix}-${String(cell.day).padStart(2, '0')}`;
          const wasHere = visited.has(iso);
          const isToday = iso === today;
          const isSelected = wasHere && iso === selectedDay;
          const mark = (
            <View
              style={[
                styles.dayMark,
                wasHere
                  ? {
                      backgroundColor: withAlpha(palette.wash, 0.55),
                      borderWidth: StyleSheet.hairlineWidth,
                      borderColor: withAlpha(palette.accent, 0.4),
                    }
                  : null,
                isToday
                  ? {
                      borderWidth: 1,
                      borderColor: withAlpha(palette.halo, 0.75),
                    }
                  : null,
                isSelected
                  ? {
                      borderWidth: 1,
                      borderColor: palette.accent,
                      backgroundColor: withAlpha(palette.wash, 0.9),
                    }
                  : null,
              ]}
            >
              <AppText
                variant="micro"
                color={wasHere ? palette.accent : withAlpha(colors.textTertiary, 0.7)}
              >
                {String(cell.day)}
              </AppText>
            </View>
          );
          if (!wasHere) {
            return (
              <View key={cell.key} style={styles.cell}>
                {mark}
              </View>
            );
          }
          return (
            <PressableScale
              key={cell.key}
              onPress={() => setSelectedDay(isSelected ? null : iso)}
              accessibilityRole="button"
              accessibilityLabel={format(parseISO(iso), 'EEEE d MMMM')}
              accessibilityState={{ selected: isSelected }}
              style={styles.cell}
            >
              {mark}
            </PressableScale>
          );
        })}
      </View>
      {selectedDay ? (
        <DayPainting
          day={selectedDay}
          scene={sceneForDay(selectedDay)}
          palette={palette}
          onOpen={onOpenScene}
        />
      ) : null}
    </View>
  );
}

function DayPainting({
  day,
  scene,
  palette,
  onOpen,
}: {
  day: string;
  scene: Scene | null;
  palette: EraPalette;
  onOpen: (scene: Scene) => void;
}) {
  const dayLabel = format(parseISO(day), 'EEEE d MMMM').toUpperCase();
  if (!scene) {
    return (
      <View style={[styles.dayCard, { borderColor: withAlpha(palette.accent, 0.16) }]}>
        <View style={styles.dayText}>
          <AppText variant="micro" color={colors.textTertiary}>
            {dayLabel}
          </AppText>
          <AppText variant="caption" color={colors.textTertiary}>
            You stopped by. No painting is on record for this day.
          </AppText>
        </View>
      </View>
    );
  }
  return (
    <PressableScale
      onPress={() => onOpen(scene)}
      accessibilityRole="button"
      accessibilityLabel={`Open ${scene.title}`}
      style={[styles.dayCard, { borderColor: withAlpha(palette.accent, 0.16) }]}
    >
      <Image
        source={{ uri: scene.thumbUrl }}
        style={styles.thumb}
        contentFit="cover"
        transition={150}
      />
      <View style={styles.dayText}>
        <AppText variant="micro" color={colors.textTertiary}>
          {dayLabel}
        </AppText>
        <AppText variant="cardTitle" color={colors.textPrimary} numberOfLines={1}>
          {scene.title}
        </AppText>
        <AppText variant="micro" color={colors.textTertiary} numberOfLines={1}>
          {scene.historicalDateLabel} · {getEra(scene.eraId).name}
        </AppText>
      </View>
      <AppText variant="button" color={withAlpha(palette.accent, 0.8)}>
        ›
      </AppText>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: spacing.sm,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: `${100 / 7}%`,
    height: CELL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
  },
  thumb: {
    width: THUMB_WIDTH,
    height: THUMB_WIDTH * 1.25,
    borderRadius: radius.sm,
    backgroundColor: colors.bgRaised,
  },
  dayText: {
    flex: 1,
    gap: 2,
  },
  dayMark: {
    width: CELL - 6,
    height: CELL - 6,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
