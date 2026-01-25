import type { IComponentUsage } from '@/types';

import { InputSearch } from '@stellar-ui/web';

export const InputSearchExample = () => (
  <InputSearch label="Input search" placeholder="Type to search..." />
);

export const InputSearchDocs: IComponentUsage = {
  importCode: `import { InputSearch } from '@stellar-ui/web';`,

  usageCode: `<InputSearch placeholder="Search..." />`,

  exampleCode: `import { InputSearch } from '@stellar-ui/web';


<InputSearch label="Input search" placeholder="Type to search..." />
`,

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
      name: 'value',
      type: 'string',
      description: 'The controlled value.',
    },
    {
      name: 'onChange',
      type: '(value: string) => void',
      description: 'Callback fired when the value changes.',
    },
  ],
};
