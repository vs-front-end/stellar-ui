import { Text, CodeBlock } from '@stellar-ui/web';

export const InstallationSection = () => {
  return (
    <section className="space-y-4">
      <Text as="h2" className="text-2xl font-semibold">
        Installation
      </Text>

      <CodeBlock code="npm install @stellar-ui/web" language="bash" copyable />
    </section>
  );
};
