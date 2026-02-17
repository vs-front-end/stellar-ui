import type { IComponentUsage } from '@/types';

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@stellar-ui-kit/web';
import { FileIcon } from 'lucide-react';

export const EmptyExample = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FileIcon />
      </EmptyMedia>

      <EmptyTitle>No files found</EmptyTitle>

      <EmptyDescription>Get started by creating a new file.</EmptyDescription>
    </EmptyHeader>
  </Empty>
);

export const EmptyDocs: IComponentUsage = {
  importCode: `import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@stellar-ui-kit/web';`,

  usageCode: `<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Icon />
    </EmptyMedia>
    <EmptyTitle>Title</EmptyTitle>
    <EmptyDescription>Description</EmptyDescription>
  </EmptyHeader>
</Empty>`,

  exampleCode: `import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@stellar-ui-kit/web';
import { FileIcon } from 'lucide-react';

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FileIcon />
    </EmptyMedia>

    <EmptyTitle>No files found</EmptyTitle>

    <EmptyDescription>Get started by creating a new file.</EmptyDescription>
  </EmptyHeader>
</Empty>`,

  props: [
    {
      name: 'variant',
      type: '"icon" | "image"',
      description: 'The type of media to display (EmptyMedia).',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
  ],
};
