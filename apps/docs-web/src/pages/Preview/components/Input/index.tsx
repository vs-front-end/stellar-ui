import type { IComponentUsage } from '@/types';

import { Input, Label } from '@stellar-ui/web';
import { Input as MobileInput, Label as MobileLabel } from '@stellar-ui/mobile';

export const InputExample = () => (
  <div className="flex flex-col gap-4 max-w-md">
    <div className="flex flex-col gap-2">
      <Label htmlFor="input-default">Default Input</Label>
      <Input id="input-default" placeholder="Enter text here..." />
    </div>

    <div className="flex flex-col gap-2">
      <Label htmlFor="input-disabled">Disabled Input</Label>
      <Input id="input-disabled" placeholder="Disabled input" disabled />
    </div>
  </div>
);

export const InputExampleMobile = () => (
  <div className="flex flex-col gap-4 max-w-md">
    <div className="flex flex-col gap-2">
      <MobileLabel htmlFor="input-default">Default Input</MobileLabel>
      <MobileInput nativeID="input-default" placeholder="Enter text here..." />
    </div>

    <div className="flex flex-col gap-2">
      <MobileLabel htmlFor="input-disabled">Disabled Input</MobileLabel>
      <MobileInput
        nativeID="input-disabled"
        placeholder="Disabled input"
        disabled
      />
    </div>
  </div>
);

export const InputDocs: IComponentUsage = {
  importCode: `import { Input, Label } from '@stellar-ui/web';`,

  usageCode: `<div className="flex flex-col gap-2">
  <Label htmlFor="input">Label</Label>
  <Input id="input" placeholder="Enter text..." />
</div>`,

  exampleCode: `import { Input, Label } from '@stellar-ui/web';

<div className="flex flex-col gap-4 max-w-md">
  <div className="flex flex-col gap-2">
    <Label htmlFor="input-default">Default Input</Label>
    <Input id="input-default" placeholder="Enter text here..." />
  </div>
  
  <div className="flex flex-col gap-2">
    <Label htmlFor="input-disabled">Disabled Input</Label>
    <Input
      id="input-disabled"
      placeholder="Disabled input"
      disabled
    />
  </div>
</div>`,

  importCodeMobile: `import { Input, Label } from '@stellar-ui/mobile';`,

  usageCodeMobile: `<div className="flex flex-col gap-2">
  <Label htmlFor="input">Label</Label>
  <Input nativeID="input" placeholder="Enter text..." />
</div>`,

  exampleCodeMobile: `import { Input, Label } from '@stellar-ui/mobile';

<div className="flex flex-col gap-4 max-w-md">
  <div className="flex flex-col gap-2">
    <Label htmlFor="input-default">Default Input</Label>
    <Input nativeID="input-default" placeholder="Enter text here..." />
  </div>

  <div className="flex flex-col gap-2">
    <Label htmlFor="input-disabled">Disabled Input</Label>
    <Input
      nativeID="input-disabled"
      placeholder="Disabled input"
      disabled
    />
  </div>
</div>`,

  props: [
    {
      name: 'type',
      type: 'string',
      default: '"text"',
      description: 'The type of input (text, email, password, etc.).',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text displayed when input is empty.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
  ],
};
