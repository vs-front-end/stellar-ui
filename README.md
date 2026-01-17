# Shiba UI - Design System Monorepo

Cross-platform UI library for React.js and React Native built with Turborepo.

## Structure

```
shiba-ui/
├── apps/
│   └── docs/          # Vite + React (Documentation & Playground)
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

## Getting Started

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Start docs app
npm run docs:dev

# Type check
npm run type-check

# Lint
npm run lint
```

## Package Versions

All packages use compatible versions to prevent peer dependency conflicts:

- React: ^18.3.1
- React DOM: ^18.3.1
- React Native: ^0.76.0
- TypeScript: ^5.7.2

