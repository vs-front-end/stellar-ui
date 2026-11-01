import { Text, CodeBlock } from '@stellar-ui-kit/web';

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
            @stellar-ui-kit/web
          </code>
          :
        </Text>
        <CodeBlock
          code={`import { ThemeProvider } from '@stellar-ui-kit/web';

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
import { ThemeProvider } from '@stellar-ui-kit/web';

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
          Custom Colors
        </Text>
        <Text as="p" className="text-muted">
          The ThemeProvider writes the{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            --color-*
          </code>{' '}
          variables as inline styles on the document root. Inline styles always
          win over your stylesheet, so overriding these variables in CSS has no
          effect while the ThemeProvider is mounted.
        </Text>
        <Text as="p" className="text-muted">
          For custom colors, skip the ThemeProvider and define the variables
          yourself. Keep the Tailwind preset and point{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            content
          </code>{' '}
          to the library build so component classes are generated:
        </Text>
        <CodeBlock
          code={`import type { Config } from 'tailwindcss';
import stellarPreset from '@stellar-ui-kit/shared/tailwind-preset';

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@stellar-ui-kit/web/dist/**/*.{js,mjs}',
  ],
  presets: [stellarPreset],
};

export default config;`}
          language="typescript"
          copyable
        />
        <Text as="p" className="text-muted">
          Then declare every variable in your global CSS. Use{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            :root
          </code>{' '}
          for the default theme and{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            :root.dark
          </code>{' '}
          for a second one:
        </Text>
        <CodeBlock
          code={`@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-background: #f1f4f8;
  --color-surface: #ffffff;
  --color-border: #e3e9f0;
  --color-foreground: #14283d;
  --color-muted: #5a6b7d;

  --color-primary: #187a44;
  --color-primary-soft: #e7f6ec;
  --color-primary-text: #14713f;
  /* secondary, success, warning, error: base, -soft and -text */
}

:root.dark {
  --color-background: #0d1620;
  --color-surface: #14212f;
  --color-border: #223449;
  --color-foreground: #e6edf5;
  --color-muted: #8a9bb0;
  /* ...same keys as :root */
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
}`}
          language="css"
          copyable
        />
        <Text as="p" className="text-muted">
          Switch themes by toggling the class on the document root:
        </Text>
        <CodeBlock
          code={`function setTheme(theme: 'light' | 'dark') {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
}`}
          language="typescript"
          copyable
        />
        <Text as="p" className="text-muted">
          With a single theme, only{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            :root
          </code>{' '}
          is needed and{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            darkMode
          </code>{' '}
          can be left out.
        </Text>
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Using Theme Classes
        </Text>
        <Text as="p" className="text-muted">
          The ThemeProvider adds theme classes (light, dark, ocean) to the
          document root. With custom colors, the class is the one you toggle.
          You can use these for theme-specific styling:
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
          code={`import { Button } from '@stellar-ui-kit/web';

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
