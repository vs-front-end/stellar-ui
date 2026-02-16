# Stellar UI - Design System Monorepo

[![npm version](https://img.shields.io/npm/v/@stellar-ui/web.svg)](https://www.npmjs.com/package/@stellar-ui/web)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Cross-platform UI library for React.js and React Native built with Turborepo.

📖 **[Documentation](https://stellar-ui-one.vercel.app)** | 🐛 [Report Bug](https://github.com/vs-front-end/stellar-ui/issues)

## Published Packages

- **[@stellar-ui/web](https://www.npmjs.com/package/@stellar-ui/web)** - React DOM UI components (48 components)
- **[@stellar-ui/mobile](https://www.npmjs.com/package/@stellar-ui/mobile)** - React Native UI components
- **[@stellar-ui/shared](https://www.npmjs.com/package/@stellar-ui/shared)** - Design tokens, types, and utilities

## Installation

```bash
# Install web components
npm install @stellar-ui/web

# Install mobile components (React Native)
npm install @stellar-ui/mobile

# Install shared utilities (if needed)
npm install @stellar-ui/shared
```

### Peer Dependencies

**Web:**

```bash
npm install react react-dom
```

**Mobile:**

```bash
npm install react react-native react-native-safe-area-context react-native-svg
# Plus @rn-primitives/* and lucide-react-native as required by @stellar-ui/mobile
```

## Structure

```
stellar-ui/
├── apps/
│   ├── docs-web/      # Vite + React (Documentation & Playground)
│   └── docs-mobile/   # React Native (Documentation)
├── packages/
│   ├── shared/        # Design Tokens, Types, Utils (Platform Agnostic)
│   ├── web/           # React DOM Library (Radix UI + Tailwind)
│   └── mobile/        # React Native Library (RN-Primitives + NativeWind)
└── turbo.json         # Turborepo Pipeline
```

## Tech Stack

- **Monorepo**: Turborepo
- **Web**: React 18 + Radix UI + Tailwind CSS
- **Mobile**: React Native 0.76 + NativeWind v4
- **Build**: tsup (esbuild)
- **TypeScript**: 5.7+

## Getting Started (Development)

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Start documentation (web)
npm run start

# Type check
npm run type-check

# Lint
npm run lint
```

To run the mobile documentation app, use the dev script from `apps/docs-mobile`.

## Package Versions

All packages use compatible versions to prevent peer dependency conflicts:

- React: ^18.3.1
- React DOM: ^18.3.1
- React Native: ^0.76.0
- TypeScript: ^5.7.2

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

MIT © [Stellar UI](LICENSE)
