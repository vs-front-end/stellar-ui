import type { Config } from 'tailwindcss';

const stellarPreset = require('@stellar-ui/shared/tailwind-preset');

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', '../../packages/shared/src/**/*.{ts,tsx}'],
  presets: [stellarPreset],
  plugins: [],
};

export default config;
