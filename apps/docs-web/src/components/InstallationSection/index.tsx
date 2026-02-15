import type { DocPlatform } from '@/utils/constants';
import { Text, CodeBlock } from '@stellar-ui/web';

const WEB_INSTALL = 'npm install @stellar-ui/web';

interface IInstallationSection {
  platform: DocPlatform;
  installCodeMobile?: string;
}

export const InstallationSection = ({
  platform,
  installCodeMobile,
}: IInstallationSection) => {
  const isMobile = platform === 'mobile';
  const hasMobileInstall = !!installCodeMobile;
  const code = isMobile && hasMobileInstall ? installCodeMobile : WEB_INSTALL;

  return (
    <section className="space-y-4">
      <Text as="h2" className="text-2xl font-semibold">
        Installation
      </Text>

      <CodeBlock code={code} language="bash" copyable />
    </section>
  );
};
