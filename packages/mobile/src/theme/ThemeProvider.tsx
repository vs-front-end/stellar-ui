import { useMemo } from 'react';
import { View } from 'react-native';
import { vars } from 'nativewind';

import {
  COMMON_THEME,
  getTheme,
  mergeTheme,
  type ThemeTokens,
  type ThemeVariant,
} from '@stellar-ui/shared';

export interface ThemeProviderProps {
  children: React.ReactNode;
  variant?: ThemeVariant;
  customTheme?: Partial<ThemeTokens>;
}

export function ThemeProvider({
  children,
  variant = 'light',
  customTheme,
}: ThemeProviderProps) {
  const theme = useMemo(() => {
    const baseTheme = getTheme(variant);

    const actualTheme = customTheme
      ? mergeTheme(baseTheme, customTheme)
      : baseTheme;

    return actualTheme;
  }, [variant, customTheme]);

  const themeVars = useMemo(() => {
    const varsMap: Record<string, string> = {};

    // Include COMMON_THEME variables
    Object.entries(COMMON_THEME).forEach(([key, value]) => {
      varsMap[`--color-${key}`] = String(value);
    });

    // Include theme-specific variables
    Object.entries(theme).forEach(([key, value]) => {
      varsMap[`--color-${key}`] = String(value);
    });

    return vars(varsMap);
  }, [theme]);

  return <View style={themeVars}>{children}</View>;
}
