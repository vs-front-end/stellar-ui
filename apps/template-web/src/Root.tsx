import { useState } from 'react';
import { ThemeProvider } from '@stellar-ui-kit/web';
import App from './App';

export type ThemeVariant = 'light' | 'dark' | 'ocean';

export function Root() {
  const [theme, setTheme] = useState<ThemeVariant>('dark');

  return (
    <ThemeProvider variant={theme}>
      <App onThemeChange={setTheme} />
    </ThemeProvider>
  );
}
