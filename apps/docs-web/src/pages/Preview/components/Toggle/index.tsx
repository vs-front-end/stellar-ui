import type { IComponentUsage } from '@/types';

import { Toggle } from '@stellar-ui-kit/web';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

export const ToggleExample = () => (
  <div className="flex items-center gap-2">
    <Toggle aria-label="Toggle bold">
      <BoldIcon />
    </Toggle>

    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
    </Toggle>

    <Toggle aria-label="Toggle underline">
      <UnderlineIcon />
    </Toggle>
  </div>
);

export const ToggleDocs: IComponentUsage = {
  importCode: `import { Toggle } from '@stellar-ui-kit/web';`,

  usageCode: `<Toggle aria-label="Toggle">
  <Icon />
</Toggle>`,

  exampleCode: `import { Toggle } from '@stellar-ui-kit/web';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

<div className="flex items-center gap-2">
  <Toggle aria-label="Toggle bold">
    <BoldIcon />
  </Toggle>

  <Toggle aria-label="Toggle italic">
    <ItalicIcon />
  </Toggle>
  
  <Toggle aria-label="Toggle underline">
    <UnderlineIcon />
  </Toggle>
</div>`,

  props: [
    {
      name: 'pressed',
      type: 'boolean',
      description: 'The controlled pressed state.',
    },
    {
      name: 'defaultPressed',
      type: 'boolean',
      description: 'The default pressed state when uncontrolled.',
    },
    {
      name: 'onPressedChange',
      type: '(pressed: boolean) => void',
      description: 'Callback fired when the pressed state changes.',
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
