import type { IComponentUsage } from '@/types';

import { Separator } from '@stellar-ui/web';
import { Separator as MobileSeparator } from '@stellar-ui/mobile';

export const SeparatorExample = () => (
  <div className="flex items-center gap-4 h-20">
    <div className="text-sm text-foreground">Left</div>
    <Separator orientation="vertical" />
    <div className="text-sm text-foreground">Right</div>
  </div>
);

export const SeparatorExampleMobile = () => (
  <div className="flex flex-row items-center gap-4 h-20">
    <div className="text-sm text-foreground">Left</div>
    <MobileSeparator orientation="vertical" />
    <div className="text-sm text-foreground">Right</div>
  </div>
);

export const SeparatorDocs: IComponentUsage = {
  importCode: `import { Separator } from '@stellar-ui/web';`,

  usageCode: `<Separator />`,

  exampleCode: `import { Separator } from '@stellar-ui/web';

<div className="flex items-center gap-4 h-20">
  <div className="text-sm text-foreground">Left</div>
  <Separator orientation="vertical" />
  <div className="text-sm text-foreground">Right</div>
</div>`,

  importCodeMobile: `import { Separator } from '@stellar-ui/mobile';`,

  usageCodeMobile: `<Separator />`,

  exampleCodeMobile: `import { Separator } from '@stellar-ui/mobile';

<div className="flex flex-row items-center gap-4 h-20">
  <div className="text-sm text-foreground">Left</div>
  <Separator orientation="vertical" />
  <div className="text-sm text-foreground">Right</div>
</div>`,

  props: [
    {
      name: 'orientation',
      type: '"horizontal" | "vertical"',
      default: '"horizontal"',
      description: 'The orientation of the separator.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
  ],
};
