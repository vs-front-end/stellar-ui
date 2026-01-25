import type { IComponentUsage } from '@/types';

import { Input, Label, Switch } from '@stellar-ui/web';

export const LabelExample = () => (
  <div className="flex flex-col gap-4 max-w-md">
    <div className="flex flex-col gap-2">
      <Label htmlFor="label-input">Label for Input</Label>
      <Input id="label-input" placeholder="Enter text here..." />
    </div>

    <div className="flex items-center gap-2">
      <Switch id="label-switch" />
      <Label htmlFor="label-switch">Label for Switch</Label>
    </div>
  </div>
);

export const LabelDocs: IComponentUsage = {
  importCode: `import { Label } from '@stellar-ui/web';`,

  usageCode: `<Label htmlFor="input">Label</Label>`,

  exampleCode: `import { Input, Label, Switch } from '@stellar-ui/web';

<div className="flex flex-col gap-4 max-w-md">
  <div className="flex flex-col gap-2">
    <Label htmlFor="label-input">Label for Input</Label>
    <Input id="label-input" placeholder="Enter text here..." />
  </div>
  
  <div className="flex items-center gap-2">
    <Switch id="label-switch" />
    <Label htmlFor="label-switch">Label for Switch</Label>
  </div>
</div>`,

  props: [
    {
      name: 'htmlFor',
      type: 'string',
      description: 'The id of the form element this label is associated with.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The label text or content.',
    },
  ],
};
