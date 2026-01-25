import type { IComponentUsage } from '@/types';

import { MultiSelect } from '@stellar-ui/web';

export const MultiSelectExample = () => (
  <MultiSelect
    options={[
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' },
    ]}
    onValueChange={(values) => console.log(values)}
    placeholder="Select frameworks..."
  />
);

export const MultiSelectDocs: IComponentUsage = {
  importCode: `import { MultiSelect } from '@stellar-ui/web';`,

  usageCode: `<MultiSelect
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]}
  placeholder="Select..."
/>`,

  exampleCode: `import { MultiSelect } from '@stellar-ui/web';

<MultiSelect
  options={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ]}
  onValueChange={(values) => console.log(values)}
  placeholder="Select frameworks..."
/>`,

  props: [
    {
      name: 'options',
      type: '{ value: string; label: string }[]',
      description: 'Array of options to display.',
    },
    {
      name: 'value',
      type: 'string[]',
      description: 'The controlled selected values.',
    },
    {
      name: 'onValueChange',
      type: '(values: string[]) => void',
      description: 'Callback fired when the selection changes.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text when no options are selected.',
    },
  ],
};
