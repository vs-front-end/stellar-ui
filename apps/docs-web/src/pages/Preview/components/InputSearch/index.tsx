import type { IComponentUsage } from '@/types';
import { InputSearch } from '@stellar-ui-kit/web';

export const InputSearchExample = () => (
  <div className="w-80">
    <InputSearch label="Input search" placeholder="Type to search..." />
  </div>
);

export const InputSearchDocs: IComponentUsage = {
  importCode: `import { InputSearch } from '@stellar-ui-kit/web';`,

  usageCode: `<InputSearch placeholder="Search..." />`,

  exampleCode: `import { InputSearch } from '@stellar-ui-kit/web';

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
    {
      name: 'isLoading',
      type: 'boolean',
      description: 'When true, shows a loading spinner on the right side.',
    },
    {
      name: 'helperText',
      type: 'string',
      description: 'Helper text shown below the input.',
    },
  ],
};
