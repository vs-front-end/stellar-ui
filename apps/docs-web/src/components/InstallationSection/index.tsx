import { Text, CodeBlock } from '@stellar-ui/web';

const WEB_INSTALL = 'npm install @stellar-ui/web';

export const InstallationSection = () => {
  return (
    <section className="space-y-4">
      <Text as="h2" className="text-2xl font-semibold">
        Installation
      </Text>

      <CodeBlock code={WEB_INSTALL} language="bash" copyable />
    </section>
  );
};
