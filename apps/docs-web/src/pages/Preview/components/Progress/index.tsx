import type { IComponentUsage } from '@/types';
import { Label, Progress } from '@stellar-ui/web';

export const ProgressExample = () => (
  <div className="flex flex-col gap-2">
    <Label>Progress 25%</Label>
    <Progress value={25} />
  </div>
);

export const ProgressDocs: IComponentUsage = {
  importCode: `import { Progress } from '@stellar-ui/web';`,

  usageCode: `<Progress value={50} />`,

  exampleCode: `import { Label, Progress } from '@stellar-ui/web';

<div className="flex flex-col gap-2">
  <Label>Progress 25%</Label>
  <Progress value={25} />
</div>`,

  props: [
    {
      name: 'value',
      type: 'number',
      description: 'The progress value (0-100).',
    },
    {
      name: 'max',
      type: 'number',
      default: '100',
      description: 'The maximum progress value.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
  ],
};
