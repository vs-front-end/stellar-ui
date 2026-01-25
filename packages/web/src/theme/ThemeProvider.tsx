import { useEffect } from 'react';

import {
  COMMON_THEME,
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
  type ThemeVariant,
  type ThemeTokens,
} from '@stellar-ui/shared';

export interface ThemeProviderProps {
  children: React.ReactNode;
  variant?: ThemeVariant;
}

export function ThemeProvider({
  children,
  variant = 'light',
}: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;

    Object.entries(COMMON_THEME).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, String(value));
    });

    Object.entries(LIGHT_THEME).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}-light`, String(value));
    });

    Object.entries(DARK_THEME).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}-dark`, String(value));
    });

    Object.entries(OCEAN_THEME).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}-ocean`, String(value));
    });

    root.classList.remove('light', 'dark', 'ocean');
    root.classList.add(variant);

    let activeTheme: ThemeTokens = DARK_THEME;

    if (variant === 'light') activeTheme = LIGHT_THEME;
    if (variant === 'dark') activeTheme = DARK_THEME;
    if (variant === 'ocean') activeTheme = OCEAN_THEME;

    Object.entries(activeTheme).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, String(value));
    });
  }, [variant]);

  return <>{children}</>;
}
