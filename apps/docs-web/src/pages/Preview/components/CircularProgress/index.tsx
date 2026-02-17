import type { IComponentUsage } from '@/types';

import { CircularProgress } from '@stellar-ui-kit/web';

export const CircularProgressExample = () => (
  <CircularProgress value={50} showValue />
);

export const CircularProgressDocs: IComponentUsage = {
  importCode: `import { CircularProgress } from '@stellar-ui-kit/web';`,

  usageCode: `<CircularProgress value={50} showValue />`,

  exampleCode: `import { CircularProgress } from '@stellar-ui-kit/web';

<CircularProgress value={50} showValue />`,

  props: [
    {
      name: 'value',
      type: 'number',
      description: 'The progress value (0-100).',
    },
    {
      name: 'showValue',
      type: 'boolean',
      default: 'false',
      description: 'When true, displays the value inside the circle.',
    },
    {
      name: 'size',
      type: 'number',
      default: '120',
      description: 'The size of the circular progress in pixels.',
    },
  ],
};
