import type { IComponentUsage } from '@/types';

import { Rating } from '@stellar-ui-kit/web';

export const RatingExample = () => (
  <div className="flex flex-col gap-4">
    <Rating defaultValue={0} aria-label="Product rating" />
    <Rating value={4.5} readOnly aria-label="Average rating: 4.5 stars" />
  </div>
);

export const RatingDocs: IComponentUsage = {
  importCode: `import { Rating } from '@stellar-ui-kit/web';`,

  usageCode: `<Rating defaultValue={0} aria-label="Rating" />`,

  exampleCode: `import { Rating } from '@stellar-ui-kit/web';

<div className="flex flex-col gap-4">
  <Rating defaultValue={0} aria-label="Product rating" />
  <Rating value={4.5} readOnly aria-label="Average rating: 4.5 stars" />
</div>`,

  props: [
    {
      name: 'value',
      type: 'number',
      description: 'The controlled rating value.',
    },
    {
      name: 'defaultValue',
      type: 'number',
      description: 'The default rating value when uncontrolled.',
    },
    {
      name: 'onChange',
      type: '(value: number) => void',
      description: 'Callback fired when the rating changes.',
    },
    {
      name: 'max',
      type: 'number',
      default: '5',
      description: 'The maximum rating value.',
    },
    {
      name: 'readOnly',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
  ],
};
