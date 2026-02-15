# @stellar-ui/mobile

React Native component library for Stellar UI - Built with NativeWind v4.

[![npm version](https://img.shields.io/npm/v/@stellar-ui/mobile.svg)](https://www.npmjs.com/package/@stellar-ui/mobile)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 📱 **React Native** - Native mobile components
- 🎨 **NativeWind v4** - Tailwind CSS for React Native
- 🎭 **Theme Support** - Light and dark modes
- 🎯 **TypeScript** - Full type safety
- 🔧 **Expo Compatible** - Works with Expo SDK 51+
- ♿ **Accessible** - Built on @rn-primitives where applicable

## Installation

```bash
npm install @stellar-ui/mobile
```

### Peer Dependencies

```bash
npm install react react-native react-native-safe-area-context react-native-svg
# Plus @rn-primitives/* packages and lucide-react-native as required by the components you use
```

## Available Components

- Alert, AlertDialog
- Avatar, Badge
- Button
- Checkbox
- Input, InputCounter, InputOTP, InputPassword, InputSearch, InputText
- Label
- PasswordStrength
- Progress
- RadioGroup
- Select
- Separator
- Skeleton
- Switch
- Tabs
- Text
- TextArea

## Quick Start

### 1. Setup NativeWind

Follow the [NativeWind v4 setup guide](https://www.nativewind.dev/v4/getting-started/react-native) for your React Native or Expo project.

### 2. Configure Tailwind

Add the Stellar UI preset to your `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';
import stellarPreset from '@stellar-ui/shared/tailwind-preset';

const config: Config = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [stellarPreset],
};

export default config;
```

### 3. Setup Theme Provider

Wrap your app with the ThemeProvider:

```tsx
import { ThemeProvider } from '@stellar-ui/mobile';

export default function App() {
  return <ThemeProvider variant="light">{/* Your app */}</ThemeProvider>;
}
```

### 4. Use Components

```tsx
import { Button, Text } from '@stellar-ui/mobile';
import { View } from 'react-native';

function MyScreen() {
  return (
    <View>
      <Text>Hello Stellar UI</Text>
      <Button onPress={() => console.log('Pressed')}>Press Me</Button>
    </View>
  );
}
```

## Examples

### Button Component

```tsx
import { Button } from '@stellar-ui/mobile';

// Default button
<Button onPress={handlePress}>
  Click Me
</Button>

// With variants
<Button variant="secondary" onPress={handlePress}>
  Secondary
</Button>

// Different sizes
<Button size="sm" onPress={handlePress}>
  Small Button
</Button>
```

### Text Component

```tsx
import { Text } from '@stellar-ui/mobile';

<Text>Default text</Text>
<Text variant="heading">Heading</Text>
<Text variant="muted">Muted text</Text>
```

## Theme System

```tsx
import { useTheme } from '@stellar-ui/mobile';

function ThemedComponent() {
  const { variant, setVariant } = useTheme();

  const toggleTheme = () => {
    setVariant(variant === 'light' ? 'dark' : 'light');
  };

  return <Button onPress={toggleTheme}>Current: {variant}</Button>;
}
```

## TypeScript

Full TypeScript support:

```tsx
import type { ButtonProps } from '@stellar-ui/mobile';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Documentation

Web and mobile documentation are shared at [stellar-ui-one.vercel.app](https://stellar-ui-one.vercel.app). The repo includes:

- `apps/docs-web` – web documentation and playground
- `apps/docs-mobile` – React Native documentation app

## Compatibility

- React Native ^0.76.0
- Expo SDK ^51.0.0
- iOS 13.4+
- Android 6.0+ (API 23+)

## License

MIT © Stellar UI

## Related Packages

- [@stellar-ui/web](https://www.npmjs.com/package/@stellar-ui/web) - React web components
- [@stellar-ui/shared](https://www.npmjs.com/package/@stellar-ui/shared) - Shared tokens and utilities

## Contributing

Contributions are welcome! This package is in early stages and we'd love help building out the component library.

## Support

- 📖 [Documentation](https://stellar-ui-one.vercel.app)
- 🐛 [Issue Tracker](https://github.com/vs-front-end/stellar-ui/issues)
