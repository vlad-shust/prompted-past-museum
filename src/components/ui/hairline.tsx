import { StyleSheet, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { colors } from '@/theme';

export function Hairline({ style }: { style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.line, style]} />;
}

const styles = StyleSheet.create({
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.strokeHairline,
    alignSelf: 'stretch',
  },
});
