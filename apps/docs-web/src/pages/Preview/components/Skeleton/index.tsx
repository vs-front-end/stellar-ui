import type { IComponentUsage } from '@/types';

import { Skeleton } from '@stellar-ui/web';
import { Skeleton as MobileSkeleton } from '@stellar-ui/mobile';

export const SkeletonExample = () => (
  <div className="flex items-center gap-4">
    <Skeleton className="h-12 w-12 rounded-full" />

    <div className="flex flex-col gap-2 flex-1">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

export const SkeletonExampleMobile = () => (
  <div className="flex flex-row items-center gap-4">
    <MobileSkeleton {...({ className: 'h-12 w-12 rounded-full' } as any)} />

    <div className="flex flex-col gap-2 flex-1">
      <MobileSkeleton {...({ className: 'h-4 w-full' } as any)} />
      <MobileSkeleton {...({ className: 'h-4 w-2/3' } as any)} />
    </div>
  </div>
);

export const SkeletonDocs: IComponentUsage = {
  importCode: `import { Skeleton } from '@stellar-ui/web';`,

  usageCode: `<Skeleton className="h-4 w-full" />`,

  exampleCode: `import { Skeleton } from '@stellar-ui/web';


<div className="flex items-center gap-4">
  <Skeleton className="h-12 w-12 rounded-full" />

  <div className="flex flex-col gap-2 flex-1">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
</div>
`,

  importCodeMobile: `import { Skeleton } from '@stellar-ui/mobile';`,

  usageCodeMobile: `<Skeleton className="h-4 w-full" />`,

  exampleCodeMobile: `import { Skeleton } from '@stellar-ui/mobile';

<div className="flex flex-row items-center gap-4">
  <Skeleton className="h-12 w-12 rounded-full" />

  <div className="flex flex-col gap-2 flex-1">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
</div>`,

  props: [
    {
      name: 'className',
      type: 'string',
      description: 'CSS classes to define the size and shape of the skeleton.',
    },
  ],
};
