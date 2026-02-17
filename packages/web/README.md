# @stellar-ui-kit/web

A comprehensive React component library built with Radix UI and Tailwind CSS. [Published on npm](https://www.npmjs.com/package/@stellar-ui-kit/web).

[![npm version](https://img.shields.io/npm/v/@stellar-ui-kit/web.svg)](https://www.npmjs.com/package/@stellar-ui-kit/web)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **48 Production-Ready Components** - Comprehensive set of UI components
- ♿ **Accessible by Default** - Built on Radix UI primitives (WCAG compliant)
- 🎭 **Dark Mode Support** - Built-in theme system
- 🎯 **TypeScript First** - Full type safety and IntelliSense
- 🎨 **Tailwind CSS** - Utility-first styling with design tokens
- 📦 **Tree Shakeable** - Only bundle what you use
- 🔧 **Customizable** - Variants system with CVA

## Installation

```bash
npm install @stellar-ui-kit/web
```

### Peer Dependencies

```bash
npm install react react-dom
```

## Quick Start

### 1. Configure Tailwind CSS

Add the Stellar UI preset to your `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const stellarPreset = require('@stellar-ui-kit/shared/tailwind-preset');

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@stellar-ui-kit/web/dist/**/*.{js,mjs}',
  ],
  presets: [stellarPreset],
};

export default config;
```

### 2. Import Styles

Import the CSS in your main entry file:

```typescript
import '@stellar-ui-kit/web/dist/styles.css';
```

### 3. Setup Theme Provider

Wrap your app with the ThemeProvider:

```tsx
import { ThemeProvider } from '@stellar-ui-kit/web';

function App() {
  return <ThemeProvider variant="light">{/* Your app */}</ThemeProvider>;
}
```

### 4. Use Components

```tsx
import { Button, Input, Card } from '@stellar-ui-kit/web';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button>Submit</Button>
    </Card>
  );
}
```

## Available Components

### Layout & Structure

- Card
- Separator
- ScrollArea
- Tabs

### Forms & Inputs

- Button, ButtonGroup
- Input, InputText, InputSearch, InputPassword, InputCounter, InputOTP
- TextArea
- Select, MultiSelect, Combobox
- Checkbox
- RadioGroup
- Switch
- Toggle
- Slider
- Label
- DatePicker, Calendar

### Feedback

- Alert
- Progress, CircularProgress
- Spinner
- Skeleton
- Empty
- Toaster
- PasswordStrength
- Rating

### Overlays

- Dialog
- Drawer
- Popover
- Tooltip
- ContextMenu
- DropdownMenu
- Command

### Data Display

- Avatar
- Badge
- Breadcrumb
- Text
- CodeBlock
- TextEditor

### Interactive

- Accordion
- Collapsible

## Documentation

Visit our [documentation site](https://stellar-ui-one.vercel.app) for:

- Interactive component previews
- API reference
- Usage examples
- Customization guides
- Theme documentation

## Examples

### Button with Variants

```tsx
import { Button } from '@stellar-ui-kit/web';

<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
```

### Form with Validation

```tsx
import { Input, Label, Button } from '@stellar-ui-kit/web';

<form>
  <div>
    <Label htmlFor="email">Email</Label>
    <Input
      id="email"
      type="email"
      placeholder="you@example.com"
      aria-invalid={hasError}
    />
  </div>
  <Button type="submit">Submit</Button>
</form>;
```

### Dark Mode Toggle

```tsx
import { Button } from '@stellar-ui-kit/web';
import { useTheme } from '@stellar-ui-kit/web';

function ThemeToggle() {
  const { variant, setVariant } = useTheme();

  return (
    <Button onClick={() => setVariant(variant === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </Button>
  );
}
```

## Icons

Lucide React is included as a dependency:

```tsx
import { Search, Settings, User } from 'lucide-react';
import { Button } from '@stellar-ui-kit/web';

<Button>
  <Search />
  Search
</Button>;
```

## Customization

Components use Tailwind CSS classes and can be customized via className:

```tsx
<Button className="rounded-full px-8">Custom Button</Button>
```

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { ButtonProps } from '@stellar-ui-kit/web';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT © Stellar UI

## Contributing

Contributions are welcome! Please read our [contributing guide](https://github.com/vs-front-end/stellar-ui/blob/main/CONTRIBUTING.md).

## Support

- 📖 [Documentation](https://stellar-ui-one.vercel.app)
- 🐛 [Issue Tracker](https://github.com/vs-front-end/stellar-ui/issues)
