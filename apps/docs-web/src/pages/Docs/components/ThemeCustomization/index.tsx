import { Text, CodeBlock } from '@stellar-ui/web';

export function ThemeCustomization() {
  return (
    <div className="space-y-8 py-9">
      <div>
        <Text as="h1" className="text-4xl font-bold mb-4">
          Theme Customization
        </Text>
        <Text as="p" className="text-lg text-muted mb-6">
          Learn how to use and customize themes in Stellar UI.
        </Text>
      </div>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Using Themes
        </Text>
        <Text as="p" className="text-muted">
          Set the theme variant using the{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            variant
          </code>{' '}
          prop on the ThemeProvider. Use{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            ThemeProvider
          </code>{' '}
          from{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            @stellar-ui/web
          </code>{' '}
          on web and from{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            @stellar-ui/mobile
          </code>{' '}
          on React Native:
        </Text>
        <CodeBlock
          code={`import { ThemeProvider } from '@stellar-ui/web';

function App() {
  return (
    <ThemeProvider variant="dark">
      {/* Your app content */}
    </ThemeProvider>
  );
}`}
          language="tsx"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Dynamic Theme Switching
        </Text>
        <Text as="p" className="text-muted">
          You can change themes dynamically by updating the variant prop:
        </Text>
        <CodeBlock
          code={`import { useState } from 'react';
import { ThemeProvider } from '@stellar-ui/web';

type ThemeVariant = 'light' | 'dark' | 'ocean';

function App() {
  const [theme, setTheme] = useState<ThemeVariant>('light');

  return (
    <ThemeProvider variant={theme}>
      <button onClick={() => setTheme('dark')}>
        Switch to Dark
      </button>
      <button onClick={() => setTheme('ocean')}>
        Switch to Ocean
      </button>
      {/* Your app content */}
    </ThemeProvider>
  );
}`}
          language="tsx"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Web: Customizing Colors with CSS Variables
        </Text>
        <Text as="p" className="text-muted">
          On web, you can override theme colors by setting CSS custom
          properties. The ThemeProvider sets these variables on the document
          root:
        </Text>
        <CodeBlock
          code={`:root {
  --color-primary: #3648ce;
  --color-primary-soft: #dbf1ff;
  --color-primary-text: #0e415d;
  
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-border: #CCCCCC;
  --color-foreground: #000000;
  --color-muted: #555555;
}

/* Override in your CSS */
:root {
  --color-primary: #your-color;
  --color-primary-soft: #your-soft-color;
}`}
          language="css"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Web: Creating Custom Themes
        </Text>
        <Text as="p" className="text-muted">
          On web, to create a completely custom theme, you can override all CSS
          variables after the ThemeProvider initializes:
        </Text>
        <CodeBlock
          code={`import { useEffect } from 'react';
import { ThemeProvider } from '@stellar-ui/web';

function CustomThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    
    // Override theme variables
    root.style.setProperty('--color-background', '#your-color');
    root.style.setProperty('--color-surface', '#your-color');
    root.style.setProperty('--color-primary', '#your-color');
    // ... set all other variables
  }, []);

  return (
    <ThemeProvider variant="light">
      {children}
    </ThemeProvider>
  );
}`}
          language="tsx"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Web: Using Theme Classes
        </Text>
        <Text as="p" className="text-muted">
          On web, the ThemeProvider adds theme classes (light, dark, ocean) to
          the document root. You can use these for theme-specific styling:
        </Text>
        <CodeBlock
          code={`/* Theme-specific styles with custom CSS */
.light .my-component {
  background-color: #f0f0f0;
}

.dark .my-component {
  background-color: #1a1a1a;
}

.ocean .my-component {
  background-color: #0a1929;
}

/* Or use Tailwind classes with CSS variables */
.my-component {
  @apply bg-background text-foreground;
}`}
          language="css"
          copyable
        />
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <Text as="h2" className="text-2xl font-semibold">
          Mobile: Customizing with customTheme
        </Text>
        <Text as="p" className="text-muted">
          On React Native there is no document or CSS variables. Use the{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            customTheme
          </code>{' '}
          prop on ThemeProvider to override theme tokens. Values are merged over
          the base theme (same token names as web: background, surface, primary,
          primary-soft, primary-text, etc.):
        </Text>
        <CodeBlock
          code={`import { ThemeProvider } from '@stellar-ui/mobile';

const customTheme = {
  primary: '#your-hex',
  'primary-soft': '#your-soft-hex',
  'primary-text': '#your-text-hex',
  background: '#f5f5f5',
};

export default function App() {
  return (
    <ThemeProvider variant="light" customTheme={customTheme}>
      {/* Your app content */}
    </ThemeProvider>
  );
}`}
          language="tsx"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Component-Level Theme Overrides
        </Text>
        <Text as="p" className="text-muted">
          <strong>Web:</strong> override colors with inline styles or Tailwind
          className. <strong>Mobile:</strong> use Tailwind/NativeWind classes
          (e.g.{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            className="bg-[#custom]"
          </code>
          ) or style prop.
        </Text>
        <CodeBlock
          code={`// Web
import { Button } from '@stellar-ui/web';

function CustomButton() {
  return (
    <Button
      style={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-primary-text)',
      }}
    >
      Custom Styled Button
    </Button>
  );
}

// Or with Tailwind (web)
<Button className="bg-[#custom-color] text-[#custom-text]">
  Custom Styled Button
</Button>

// Mobile: use className (NativeWind) or style
import { Button } from '@stellar-ui/mobile';
<Button className="bg-[#custom-color]">Custom</Button>`}
          language="tsx"
          copyable
        />
      </section>
    </div>
  );
}
