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
          prop on the ThemeProvider from{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            @stellar-ui/web
          </code>
          :
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
          Customizing Colors with CSS Variables
        </Text>
        <Text as="p" className="text-muted">
          You can override theme colors by setting CSS custom properties. The
          ThemeProvider sets these variables on the document root:
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
          Creating Custom Themes
        </Text>
        <Text as="p" className="text-muted">
          To create a completely custom theme, you can override all CSS
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
          Using Theme Classes
        </Text>
        <Text as="p" className="text-muted">
          The ThemeProvider adds theme classes (light, dark, ocean) to the
          document root. You can use these for theme-specific styling:
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

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Component-Level Theme Overrides
        </Text>
        <Text as="p" className="text-muted">
          Override colors with inline styles or Tailwind className:
        </Text>
        <CodeBlock
          code={`import { Button } from '@stellar-ui/web';

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

// Or with Tailwind
<Button className="bg-[#custom-color] text-[#custom-text]">
  Custom Styled Button
</Button>`}
          language="tsx"
          copyable
        />
      </section>
    </div>
  );
}
