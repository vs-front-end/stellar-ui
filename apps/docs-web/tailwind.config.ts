import type { Config } from 'tailwindcss';

const stellarPreset = require('@stellar-ui/shared/tailwind-preset');

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/shared/src/**/*.{ts,tsx}',
    '../../packages/web/src/**/*.{ts,tsx}',
  ],
  presets: [stellarPreset],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
