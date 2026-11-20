import { StyleSheet } from 'react-native';

import { useCurrentSeason } from '@/hooks/use-season';
import { colors, withAlpha } from '@/theme';
import { AppText } from '@/components/ui/app-text';

/** "SEASON · THE VIKING AGE" — the masthead line naming this month's era. */
export function SeasonLine() {
  const { data: season } = useCurrentSeason();
  if (!season) return null;

  return (
    <AppText variant="micro" color={withAlpha(colors.emberGold, 0.65)} style={styles.line}>
      SEASON · {season.title.toUpperCase()}
    </AppText>
  );
}

const styles = StyleSheet.create({
  line: {
    textAlign: 'center',
    letterSpacing: 2.4,
  },
});
