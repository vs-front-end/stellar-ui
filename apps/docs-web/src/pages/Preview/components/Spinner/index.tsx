import type { IComponentUsage } from '@/types';

import { Spinner, Text } from '@stellar-ui/web';

export const SpinnerExample = () => (
  <div className="flex items-center gap-4">
    <Spinner />
    <Text as="p">Default spinner</Text>
  </div>
);

export const SpinnerDocs: IComponentUsage = {
  importCode: `import { Spinner } from '@stellar-ui/web';`,

  usageCode: `<Spinner />`,

  exampleCode: `import { Spinner, Text } from '@stellar-ui/web';

<div className="flex items-center gap-4">
  <Spinner />
  <Text as="p">Default spinner</Text>
</div>`,

  props: [
    {
      name: 'size',
      type: 'number',
      default: '24',
      description: 'The size of the spinner in pixels.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
  ],
};
