# Stellar UI - Design System Monorepo

[![npm version](https://img.shields.io/npm/v/@stellar-ui-kit/web.svg)](https://www.npmjs.com/package/@stellar-ui-kit/web)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

UI library for React (web) built with Turborepo.

📖 **[Documentation](https://stellar-ui-one.vercel.app)** | 🐛 [Report Bug](https://github.com/vs-front-end/stellar-ui/issues)

## Published Packages (npm)

- **[@stellar-ui-kit/web](https://www.npmjs.com/package/@stellar-ui-kit/web)** – React DOM UI components (48 components)
- **[@stellar-ui-kit/shared](https://www.npmjs.com/package/@stellar-ui-kit/shared)** – Design tokens, types, and utilities

## Installation

```bash
# Install web components
npm install @stellar-ui-kit/web

# Install shared utilities (if needed)
npm install @stellar-ui-kit/shared
```

### Peer Dependencies

```bash
npm install react react-dom
```

## Structure

```
stellar-ui/
├── apps/
│   └── docs-web/      # Vite + React (Documentation & Playground)
├── packages/
│   ├── shared/        # Design Tokens, Types, Utils (Platform Agnostic)
│   └── web/           # React DOM Library (Radix UI + Tailwind)
└── turbo.json         # Turborepo Pipeline
```

A mobile (React Native) version is planned for the future; the monorepo is set up to support it.

## Tech Stack

- **Monorepo**: Turborepo
- **Web**: React 18 + Radix UI + Tailwind CSS
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

## Package Versions

All packages use compatible versions to prevent peer dependency conflicts:

- React: ^18.3.1
- React DOM: ^18.3.1
- TypeScript: ^5.7.2

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

MIT © [Stellar UI](LICENSE)
