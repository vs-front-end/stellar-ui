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
          your project. Choose Web or Mobile below.
        </Text>
      </div>

      <section className="space-y-6">
        <Text as="h2" className="text-2xl font-semibold">
          Web
        </Text>

        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
            Install the package
          </Text>
          <CodeBlock
            code="npm install @stellar-ui/web"
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
        </div>

        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
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
              @stellar-ui/web
            </code>
            :
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
        </div>

        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
            Use components
          </Text>
          <CodeBlock
            code={`import { Button } from '@stellar-ui/web';

function MyComponent() {
  return <Button>Click me</Button>;
}`}
            language="tsx"
            copyable
          />
        </div>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <Text as="h2" className="text-2xl font-semibold">
          Mobile (React Native / Expo)
        </Text>
        <Text as="p" className="text-muted">
          The mobile package uses NativeWind (Tailwind for React Native). Follow
          the{' '}
          <a
            href="https://www.nativewind.dev/docs/getting-started/installation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            NativeWind installation guide
          </a>{' '}
          for your project, then add Stellar UI as below.
        </Text>

        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
            Install the package
          </Text>
          <CodeBlock
            code={`npm install @stellar-ui/mobile

# Peer dependencies (if not already installed)
npm install react react-native react-native-safe-area-context react-native-svg`}
            language="bash"
            copyable
          />
        </div>

        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
            Configure Tailwind
          </Text>
          <Text as="p" className="text-muted">
            Add the Stellar UI preset to your{' '}
            <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
              tailwind.config.js
            </code>{' '}
            (or{' '}
            <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
              tailwind.config.ts
            </code>
            ):
          </Text>
          <CodeBlock
            code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("@stellar-ui/shared/tailwind-preset")],
  theme: { extend: {} },
  plugins: [],
};`}
            language="javascript"
            copyable
          />
        </div>

        <div className="space-y-4">
          <Text as="h3" className="text-xl font-medium">
            Setup ThemeProvider
          </Text>
          <Text as="p" className="text-muted">
            Wrap your app with{' '}
            <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
              ThemeProvider
            </code>{' '}
            from{' '}
            <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
              @stellar-ui/mobile
            </code>
            :
          </Text>
          <CodeBlock
            code={`import { ThemeProvider } from '@stellar-ui/mobile';

export default function App() {
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
            code={`import { Button, Text } from '@stellar-ui/mobile';
import { View } from 'react-native';

function MyScreen() {
  return (
    <View>
      <Text>Hello Stellar UI</Text>
      <Button onPress={() => {}}>Press me</Button>
    </View>
  );
}`}
            language="tsx"
            copyable
          />
        </div>
      </section>
    </div>
  );
}
