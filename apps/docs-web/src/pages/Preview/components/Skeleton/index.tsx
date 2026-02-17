import type { IComponentUsage } from '@/types';
import { Skeleton } from '@stellar-ui-kit/web';

export const SkeletonExample = () => (
  <div className="flex items-center gap-4">
    <Skeleton className="h-12 w-12 rounded-full" />

    <div className="flex flex-col gap-2 flex-1">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

export const SkeletonDocs: IComponentUsage = {
  importCode: `import { Skeleton } from '@stellar-ui-kit/web';`,

  usageCode: `<Skeleton className="h-4 w-full" />`,

  exampleCode: `import { Skeleton } from '@stellar-ui-kit/web';


<div className="flex items-center gap-4">
  <Skeleton className="h-12 w-12 rounded-full" />

  <div className="flex flex-col gap-2 flex-1">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
</div>
`,

  props: [
    {
      name: 'className',
      type: 'string',
      description: 'CSS classes to define the size and shape of the skeleton.',
    },
  ],
};
