import { Text } from 'react-native';

import { colors, type, typeScaleCap } from '@/theme';
import type { AppTextProps } from './app-text.types';

export function AppText({ variant = 'bodySm', color = colors.textPrimary, style, ...rest }: AppTextProps) {
  return (
    <Text maxFontSizeMultiplier={typeScaleCap[variant]} {...rest} style={[type[variant], { color }, style]} />
  );
}
