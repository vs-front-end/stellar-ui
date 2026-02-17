import { Text, CodeBlock } from '@stellar-ui-kit/web';

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

      <section className="space-y-6">
        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
            Install the package
          </Text>
          <CodeBlock
            code="npm install @stellar-ui-kit/web"
            language="bash"
            copyable
          />
        </div>

        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
            Configure Tailwind CSS
          </Text>
          <Text as="p" className="text-muted">
            Add the Stellar UI preset to your{' '}
            <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
              tailwind.config.ts
            </code>
            :
          </Text>
          <CodeBlock
            code={`import type { Config } from 'tailwindcss';

const stellarPreset = require('@stellar-ui-kit/shared/tailwind-preset');

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
        </div>

        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
            Import CSS
          </Text>
          <Text as="p" className="text-muted">
            Import the Stellar UI styles in your main entry file:
          </Text>
          <CodeBlock
            code={`import '@stellar-ui-kit/web/dist/styles.css';`}
            language="typescript"
            copyable
          />
        </div>

        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
            Setup ThemeProvider
          </Text>
          <Text as="p" className="text-muted">
            Wrap your application with{' '}
            <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
              ThemeProvider
            </code>{' '}
            from{' '}
            <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
              @stellar-ui-kit/web
            </code>
            :
          </Text>
          <CodeBlock
            code={`import { ThemeProvider } from '@stellar-ui-kit/web';

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
        </div>

        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
            Use components
          </Text>
          <CodeBlock
            code={`import { Button } from '@stellar-ui-kit/web';

function MyComponent() {
  return <Button>Click me</Button>;
}`}
            language="tsx"
            copyable
          />
        </div>
      </section>
    </div>
  );
}
