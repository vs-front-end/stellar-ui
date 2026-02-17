import type { Config } from 'tailwindcss';

const stellarPreset = require('@stellar-ui-kit/shared/tailwind-preset');

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@stellar-ui-kit/web/dist/**/*.{js,mjs}',
  ],
  presets: [stellarPreset],
};

export default config;
