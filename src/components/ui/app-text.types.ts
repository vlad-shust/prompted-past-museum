import type { TextProps } from 'react-native';

import type { TypeVariant } from '@/theme';

export interface AppTextProps extends TextProps {
  variant?: TypeVariant;
  color?: string;
}
