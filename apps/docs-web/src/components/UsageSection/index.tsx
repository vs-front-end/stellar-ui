import type { DocPlatform } from '@/utils/constants';
import { Text, CodeBlock } from '@stellar-ui/web';

interface IUsageSection {
  platform: DocPlatform;
  importCode: string;
  usageCode: string;
  importCodeMobile?: string;
  usageCodeMobile?: string;
}

export const UsageSection = ({
  platform,
  importCode,
  usageCode,
  importCodeMobile,
  usageCodeMobile,
}: IUsageSection) => {
  const showMobile =
    platform === 'mobile' &&
    importCodeMobile != null &&
    usageCodeMobile != null;
  const imp = showMobile ? importCodeMobile : importCode;
  const use = showMobile ? usageCodeMobile : usageCode;

  return (
    <section className="space-y-4">
      <Text as="h2" className="text-2xl font-semibold">
        Usage
      </Text>

      <CodeBlock code={imp} language="tsx" copyable />
      <CodeBlock code={use} language="tsx" copyable />
    </section>
  );
};
