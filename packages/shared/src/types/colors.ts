import { LIGHT_THEME } from '../tokens';

export type ThemeTokens = Record<string, string>;
export type ThemeVariant = 'light' | 'dark' | 'ocean';
export type ColorTokenKey = keyof typeof LIGHT_THEME;
