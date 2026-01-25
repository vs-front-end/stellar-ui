import { Text, CodeBlock } from '@stellar-ui/web';

export function GettingStarted() {
  return (
    <div className="space-y-8 py-9">
      <div>
        <Text as="h1" className="text-4xl font-bold mb-4">
          Getting Started
        </Text>
        <Text as="p" className="text-lg text-muted mb-6">
          Get started with Stellar UI by installing the package and configuring
          your project.
        </Text>
      </div>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Install the package
        </Text>
        <Text as="p" className="text-muted">
          Install Stellar UI from npm:
        </Text>
        <CodeBlock
          code="npm install @stellar-ui/web"
          language="bash"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Configure Tailwind CSS
        </Text>
        <Text as="p" className="text-muted">
          Add the Stellar UI preset to your{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            tailwind.config.ts
          </code>{' '}
          file:
        </Text>
        <CodeBlock
          code={`import type { Config } from 'tailwindcss';

const stellarPreset = require('@stellar-ui/shared/tailwind-preset');

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [stellarPreset],
  plugins: [],
};

export default config;`}
          language="typescript"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Import CSS
        </Text>
        <Text as="p" className="text-muted">
          Import the Stellar UI styles in your main entry file:
        </Text>
        <CodeBlock
          code={`import '@stellar-ui/web/dist/styles.css';`}
          language="typescript"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Setup ThemeProvider
        </Text>
        <Text as="p" className="text-muted">
          Wrap your application with the{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            ThemeProvider
          </code>{' '}
          component. You can place it anywhere in your app, even in server
          components:
        </Text>
        <CodeBlock
          code={`import { ThemeProvider } from '@stellar-ui/web';

function App() {
  return (
    <ThemeProvider variant="light">
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
          Use components
        </Text>
        <Text as="p" className="text-muted">
          Now you can import and use any Stellar UI component:
        </Text>
        <CodeBlock
          code={`import { Button } from '@stellar-ui/web';

function MyComponent() {
  return <Button>Click me</Button>;
}`}
          language="tsx"
          copyable
        />
      </section>
    </div>
  );
}
