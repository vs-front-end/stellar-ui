# @stellar-ui/shared

Shared design tokens, types, and utilities for Stellar UI - Platform agnostic.

[![npm version](https://img.shields.io/npm/v/@stellar-ui/shared.svg)](https://www.npmjs.com/package/@stellar-ui/shared)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **Design Tokens** - Colors, themes, and design constants
- 🛠️ **Utilities** - Platform-agnostic helper functions
- 🎭 **Theme System** - Light, dark, and custom theme support
- 📦 **Tailwind Preset** - Pre-configured Tailwind CSS setup
- 🎯 **TypeScript** - Full type definitions

## Installation

```bash
npm install @stellar-ui/shared
```

## Exports

### Main Export

```typescript
import { cn, colors, themes } from '@stellar-ui/shared';
```

### Tokens

```typescript
import { colors, themes } from '@stellar-ui/shared/tokens';
```

### Utils

```typescript
import { cn, tokenize, getTheme } from '@stellar-ui/shared/utils';
```

### Tailwind Preset

```typescript
import stellarPreset from '@stellar-ui/shared/tailwind-preset';
```

## Usage

### Using the `cn` Utility

Merge Tailwind CSS classes with proper precedence:

```typescript
import { cn } from '@stellar-ui/shared';

const className = cn(
  'px-4 py-2',
  'bg-primary text-white',
  isActive && 'bg-primary-dark',
  customClass
);
```

### Design Tokens

Access design tokens programmatically:

```typescript
import { colors } from '@stellar-ui/shared/tokens';

console.log(colors.light.primary); // Primary color for light theme
console.log(colors.dark.background); // Background color for dark theme
```

### Tailwind Preset

Add to your `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';
import stellarPreset from '@stellar-ui/shared/tailwind-preset';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [stellarPreset],
};

export default config;
```

The preset includes:

- Design tokens as Tailwind CSS variables
- Extended color palette (primary, secondary, success, warning, error, etc.)
- Typography scale
- Spacing scale
- Border radius tokens
- Shadow tokens

### Theme System

```typescript
import { themes } from '@stellar-ui/shared/tokens';

// Available themes
const lightTheme = themes.light;
const darkTheme = themes.dark;
const oceanTheme = themes.ocean;
```

### TypeScript Types

```typescript
import type { ColorScheme, ThemeVariant } from '@stellar-ui/shared';

const scheme: ColorScheme = 'light' | 'dark';
const variant: ThemeVariant = 'light' | 'dark' | 'ocean';
```

## Available Tokens

### Colors

- **Semantic Colors**: primary, secondary, success, warning, error
- **Neutral Colors**: foreground, background, surface, border, muted
- **Syntax Highlighting**: For code blocks and editors

### Themes

- `light` - Default light theme
- `dark` - Default dark theme
- `ocean` - Ocean blue theme (custom)

## Utilities

### `cn(...classes)`

Merge and deduplicate Tailwind CSS classes using `clsx` and `tailwind-merge`.

```typescript
cn('px-4', 'px-2'); // => 'px-2' (latter wins)
cn('text-red-500', 'text-blue-500'); // => 'text-blue-500'
```

### `tokenize(value, fallback?)`

Convert design token references to CSS variables:

```typescript
tokenize('primary'); // => 'var(--primary)'
tokenize('primary', '#000'); // => 'var(--primary, #000)'
```

### `getTheme(variant)`

Get theme object by variant name:

```typescript
const theme = getTheme('dark');
console.log(theme.primary); // Dark theme primary color
```

## Using with React

```tsx
import { cn } from '@stellar-ui/shared';

function Button({ className, variant }) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded',
        variant === 'primary' && 'bg-primary text-white',
        className
      )}
    />
  );
}
```

## Using with React Native

```tsx
import { colors } from '@stellar-ui/shared/tokens';

function Button({ variant }) {
  const backgroundColor =
    variant === 'dark' ? colors.dark.primary : colors.light.primary;

  return (
    <View style={{ backgroundColor }}>
      <Text>Button</Text>
    </View>
  );
}
```

## Peer Dependencies

- React ^18.0.0 (for React-specific utilities)

## License

MIT © Stellar UI

## Related Packages

- [@stellar-ui/web](https://www.npmjs.com/package/@stellar-ui/web) - React web components
- [@stellar-ui/mobile](https://www.npmjs.com/package/@stellar-ui/mobile) - React Native components
