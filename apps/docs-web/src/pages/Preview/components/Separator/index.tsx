import type { IComponentUsage } from '@/types';
import { Separator } from '@stellar-ui-kit/web';

export const SeparatorExample = () => (
  <div className="flex items-center gap-4 h-20">
    <div className="text-sm text-foreground">Left</div>
    <Separator orientation="vertical" />
    <div className="text-sm text-foreground">Right</div>
  </div>
);

export const SeparatorDocs: IComponentUsage = {
  importCode: `import { Separator } from '@stellar-ui-kit/web';`,

  usageCode: `<Separator />`,

  exampleCode: `import { Separator } from '@stellar-ui-kit/web';

<div className="flex items-center gap-4 h-20">
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
