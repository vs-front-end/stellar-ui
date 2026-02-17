import { Text, CodeBlock } from '@stellar-ui/web';

interface IUsageSection {
  importCode: string;
  usageCode: string;
}

export const UsageSection = ({ importCode, usageCode }: IUsageSection) => {
  return (
    <section className="space-y-4">
      <Text as="h2" className="text-2xl font-semibold">
        Usage
      </Text>

      <CodeBlock code={importCode} language="tsx" copyable />
      <CodeBlock code={usageCode} language="tsx" copyable />
    </section>
  );
};
