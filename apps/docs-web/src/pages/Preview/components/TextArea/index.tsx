import type { IComponentUsage } from '@/types';

import { Label, TextArea } from '@stellar-ui/web';

export const TextAreaExample = () => (
  <div className="flex flex-col gap-4 max-w-md">
    <div className="flex flex-col gap-2">
      <Label htmlFor="textarea-default">Default Textarea</Label>
      <TextArea
        id="textarea-default"
        placeholder="Enter your message here..."
      />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="textarea-disabled">Disabled Textarea</Label>
      <TextArea
        id="textarea-disabled"
        placeholder="Disabled textarea"
        disabled
      />
    </div>
  </div>
);

export const TextAreaDocs: IComponentUsage = {
  importCode: `import { Label, TextArea } from '@stellar-ui/web';`,

  usageCode: `<div className="flex flex-col gap-2">
  <Label htmlFor="textarea">Label</Label>
  <TextArea id="textarea" placeholder="Enter text..." />
</div>`,

  exampleCode: `import { Label, TextArea } from '@stellar-ui/web';

<div className="flex flex-col gap-4 max-w-md">
  <div className="flex flex-col gap-2">
    <Label htmlFor="textarea-default">Default Textarea</Label>
    <TextArea
      id="textarea-default"
      placeholder="Enter your message here..."
    />
  </div>
  <div className="flex flex-col gap-2">
    <Label htmlFor="textarea-disabled">Disabled Textarea</Label>
    <TextArea
      id="textarea-disabled"
      placeholder="Disabled textarea"
      disabled
    />
  </div>
</div>`,

  props: [
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text displayed when textarea is empty.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
    {
      name: 'rows',
      type: 'number',
      description: 'Number of visible text rows.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
  ],
};
