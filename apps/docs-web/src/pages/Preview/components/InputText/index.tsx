import type { IComponentUsage } from '@/types';

import { InputText } from '@stellar-ui/web';
import { InputText as MobileInputText } from '@stellar-ui/mobile';
import { MailIcon, UserIcon } from 'lucide-react';
import { Mail, User } from 'lucide-react-native';

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

export const InputTextExampleMobile = () => (
  <div className="flex flex-col gap-4 max-w-md">
    <MobileInputText label="Input Text" placeholder="Enter text..." />

    <MobileInputText
      label="Input with start icon"
      placeholder="Username"
      startIcon={User as any}
    />

    <MobileInputText
      label="Input with end icon"
      placeholder="Email address"
      endIcon={Mail as any}
    />
  </div>
);

export const InputTextDocs: IComponentUsage = {
  importCode: `import { InputText } from '@stellar-ui/web';`,

  usageCode: `<InputText
  label="Label"
  placeholder="Enter text..."
/>`,

  exampleCode: `import { InputText } from '@stellar-ui/web';
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

  importCodeMobile: `import { InputText } from '@stellar-ui/mobile';`,

  usageCodeMobile: `<InputText
  label="Label"
  placeholder="Enter text..."
/>`,

  exampleCodeMobile: `import { InputText } from '@stellar-ui/mobile';
import { Mail, User } from 'lucide-react-native';

<div className="flex flex-col gap-4 max-w-md">
  <InputText label="Input Text" placeholder="Enter text..." />

  <InputText
    label="Input with start icon"
    placeholder="Username"
    startIcon={User}
  />

  <InputText
    label="Input with end icon"
    placeholder="Email address"
    endIcon={Mail}
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
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
  ],
};
