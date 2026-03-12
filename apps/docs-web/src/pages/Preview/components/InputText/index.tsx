import type { IComponentUsage } from '@/types';
import { InputText } from '@stellar-ui-kit/web';
import { MailIcon, UserIcon } from 'lucide-react';

export const InputTextExample = () => (
  <div className="flex flex-col gap-4 max-w-md">
    <InputText label="Input Text" placeholder="Enter text..." />

    <InputText
      label="Input with start icon"
      placeholder="Username"
      startIcon={UserIcon}
    />

    <InputText
      label="Input with end icon"
      type="email"
      placeholder="Email address"
      endIcon={MailIcon}
    />
  </div>
);

export const InputTextDocs: IComponentUsage = {
  importCode: `import { InputText } from '@stellar-ui-kit/web';`,

  usageCode: `<InputText
  label="Label"
  placeholder="Enter text..."
/>`,

  exampleCode: `import { InputText } from '@stellar-ui-kit/web';
import { MailIcon, UserIcon } from 'lucide-react';

<div className="flex flex-col gap-4 max-w-md">
  <InputText label="Input Text" placeholder="Enter text..." />

  <InputText
    label="Input with start icon"
    placeholder="Username"
    startIcon={UserIcon}
  />

  <InputText
    label="Input with end icon"
    type="email"
    placeholder="Email address"
    endIcon={MailIcon}
  />
</div>`,

  props: [
    {
      name: 'label',
      type: 'string',
      description: 'The label for the input.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text.',
    },
    {
      name: 'type',
      type: 'string',
      default: '"text"',
      description: 'The type of the input element.',
    },
    {
      name: 'startIcon',
      type: 'LucideIcon',
      description: 'Icon component to display at the start.',
    },
    {
      name: 'endIcon',
      type: 'LucideIcon',
      description: 'Icon component to display at the end.',
    },
    {
      name: 'error',
      type: 'string',
      description: 'Error message shown below the input.',
    },
    {
      name: 'helperText',
      type: 'string',
      description: 'Helper text shown below the input when there is no error.',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'When true, shows a required indicator next to the label.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
  ],
};
