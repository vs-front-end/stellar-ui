import {
  COMMON_THEME,
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
} from '../tokens/colors';

import { ThemeVariant, ThemeTokens } from '../types';

export function getTheme(variant: ThemeVariant): ThemeTokens {
  let theme: ThemeTokens = LIGHT_THEME;

  if (variant === 'dark') theme = DARK_THEME;
  if (variant === 'ocean') theme = OCEAN_THEME;

  return { ...COMMON_THEME, ...theme };
}

export function mergeTheme(
  base: ThemeTokens,
  override: Partial<ThemeTokens>
): ThemeTokens {
  const merged = { ...base };

  for (const key in override) {
    if (override[key] !== undefined) {
      merged[key] = override[key]!;
    }
  }

  return merged;
}

export function createCustomTheme(
  variant: ThemeVariant,
  customTokens: Partial<ThemeTokens>
): ThemeTokens {
  const baseTheme = getTheme(variant);
  return mergeTheme(baseTheme, customTokens);
}
