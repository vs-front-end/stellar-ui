import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: [
    'react',
    'react-native',
    'react-native-safe-area-context',
    'react-native-svg',
    'lucide-react-native',
    'nativewind',
    '@rn-primitives/slot',
    '@rn-primitives/alert-dialog',
    '@rn-primitives/avatar',
    '@rn-primitives/checkbox',
    '@rn-primitives/label',
    '@rn-primitives/progress',
    '@rn-primitives/radio-group',
    '@rn-primitives/select',
    '@rn-primitives/separator',
    '@rn-primitives/switch',
    '@rn-primitives/tabs',
  ],
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});
