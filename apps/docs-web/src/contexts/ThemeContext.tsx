import type { ThemeVariant } from '@stellar-ui/shared';
import { ThemeProvider as WebThemeProvider, Toaster } from '@stellar-ui/web';
import { ThemeProvider as MobileThemeProvider } from '@stellar-ui/mobile';
import { useState, createContext, ReactNode, useMemo, useEffect } from 'react';

interface IThemeContext {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
}

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

const THEME_STORAGE_KEY = 'stellar-ui-theme';

const getInitialTheme = (): ThemeVariant => {
  if (typeof window === 'undefined') return 'dark';

  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme && ['light', 'dark', 'ocean'].includes(storedTheme)) {
      return storedTheme as ThemeVariant;
    }

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    return prefersDark ? 'dark' : 'light';
  } catch {
    return 'dark';
  }
};

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<ThemeVariant>(getInitialTheme);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      console.error('Failed to save theme to localStorage:', error);
    }
  }, [theme]);

  const handleSetTheme = (newTheme: ThemeVariant) => {
    setTheme(newTheme);
  };

  const value = useMemo(() => ({ theme, setTheme: handleSetTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <WebThemeProvider variant={theme}>
        <MobileThemeProvider variant={theme}>{children}</MobileThemeProvider>
        <Toaster variant={theme} />
      </WebThemeProvider>
    </ThemeContext.Provider>
  );
};
