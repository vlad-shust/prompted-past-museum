import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, SCREEN_PADDING } from '@/theme';
import { Atmosphere } from './atmosphere';
import type { ScreenProps } from './screen.types';

export function Screen({
  children,
  padded = true,
  scroll = false,
  atmosphere = true,
  edges = ['top'],
  backgroundColor = colors.bgBase,
  style,
  contentStyle,
}: ScreenProps) {
  const body = scroll ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[padded && styles.padded, contentStyle]}
      contentInsetAdjustmentBehavior="never"
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.fill, padded && styles.padded, contentStyle]}>{children}</View>
  );

  return (
    <SafeAreaView edges={edges} style={[styles.fill, { backgroundColor }, style]}>
      {body}
      {atmosphere ? <Atmosphere /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  padded: {
    paddingHorizontal: SCREEN_PADDING,
  },
});
