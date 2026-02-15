import type { IComponentUsage } from '@/types';

import { Label, Progress } from '@stellar-ui/web';
import {
  Label as MobileLabel,
  Progress as MobileProgress,
} from '@stellar-ui/mobile';

export const ProgressExample = () => (
  <div className="flex flex-col gap-2">
    <Label>Progress 25%</Label>
    <Progress value={25} />
  </div>
);

export const ProgressExampleMobile = () => (
  <div className="flex flex-col gap-2">
    <MobileLabel>Progress 25%</MobileLabel>
    <MobileProgress value={25} />
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

  importCodeMobile: `import { Label, Progress } from '@stellar-ui/mobile';`,

  usageCodeMobile: `<Progress value={50} />`,

  exampleCodeMobile: `import { Label, Progress } from '@stellar-ui/mobile';

<Label>Progress 25%</Label>
<Progress value={25} />`,

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
