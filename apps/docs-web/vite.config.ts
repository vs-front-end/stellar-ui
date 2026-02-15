import { defineConfig } from 'vite';
import { rnw } from 'vite-plugin-rnw';
import path from 'path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

function rnwClassNameMerge() {
  return {
    name: 'rnw-classname-merge',
    transform(code: string, id: string) {
      if (
        id.includes('react-native-web') &&
        id.includes('createDOMProps') &&
        id.endsWith('.js')
      ) {
        const patch = code.replace(
          /if \(className\) \{\s*domProps\.className = className;\s*\}/,
          `if (className) {
    const userClassName = domProps.className;
    domProps.className = [userClassName, className].filter(Boolean).join(' ');
  }`
        );
        if (patch !== code) {
          return { code: patch, map: null };
        }
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    rnwClassNameMerge(),
    rnw({
      jsxImportSource: 'nativewind',
      babel: {
        presets: [
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
        plugins: [
          require('react-native-css-interop/dist/babel-plugin').default,
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
              importSource: 'react-native-css-interop',
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@stellar-ui/shared': path.resolve(
        __dirname,
        '../../packages/shared/src'
      ),
      '@stellar-ui/web': path.resolve(__dirname, '../../packages/web/src'),
      '@stellar-ui/mobile': path.resolve(
        __dirname,
        '../../packages/mobile/src'
      ),
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/contexts': path.resolve(__dirname, './src/contexts'),
      '@/layouts': path.resolve(__dirname, './src/layouts'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/router': path.resolve(__dirname, './src/router'),
    },
    extensions: [
      '.web.tsx',
      '.tsx',
      '.web.ts',
      '.ts',
      '.web.jsx',
      '.jsx',
      '.web.js',
      '.js',
      '.json',
    ],
  },
  define: {
    global: 'window',
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
  optimizeDeps: {
    include: ['nativewind', 'react-native-web'],
    esbuildOptions: {
      jsx: 'automatic',
      resolveExtensions: [
        '.web.tsx',
        '.tsx',
        '.web.ts',
        '.ts',
        '.web.jsx',
        '.jsx',
        '.web.js',
        '.js',
      ],
    },
  },
  build: {
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@stellar-ui/web', '@stellar-ui/shared'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: true,
  },
});
