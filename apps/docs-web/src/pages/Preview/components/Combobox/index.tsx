import type { IComponentUsage } from '@/types';

import { Combobox } from '@stellar-ui-kit/web';

export const ComboboxExample = () => (
  <Combobox
    options={[
      { value: 'next.js', label: 'Next.js' },
      { value: 'sveltekit', label: 'SvelteKit' },
      { value: 'nuxt.js', label: 'Nuxt.js' },
      { value: 'remix', label: 'Remix' },
      { value: 'astro', label: 'Astro' },
    ]}
    placeholder="Select framework..."
    searchPlaceholder="Search framework..."
  />
);

export const ComboboxDocs: IComponentUsage = {
  importCode: `import { Combobox } from '@stellar-ui-kit/web';`,

  usageCode: `<Combobox
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]}
  placeholder="Select..."
/>`,

  exampleCode: `import { Combobox } from '@stellar-ui-kit/web';

<Combobox
  options={[
    { value: 'next.js', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
  ]}
  placeholder="Select framework..."
  searchPlaceholder="Search framework..."
/>`,

  props: [
    {
      name: 'options',
      type: '{ value: string; label: string }[]',
      description: 'Array of options to display.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'The controlled selected value.',
    },
    {
      name: 'onChange',
      type: '(value: string) => void',
      description: 'Callback fired when the selection changes.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text for the trigger button.',
    },
    {
      name: 'searchPlaceholder',
      type: 'string',
      description: 'Placeholder text for the search input.',
    },
  ],
};
