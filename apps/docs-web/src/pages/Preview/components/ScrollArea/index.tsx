import type { IComponentUsage } from '@/types';

import { ScrollArea, Text } from '@stellar-ui-kit/web';

export const ScrollAreaExample = () => (
  <div className="h-[200px] w-[350px] rounded-md border border-border">
    <ScrollArea className="h-full w-full rounded-md">
      <div className="p-4">
        <Text as="h4" className="mb-4 text-sm font-medium">
          Tags
        </Text>

        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="text-sm text-foreground mt-2">
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  </div>
);

export const ScrollAreaDocs: IComponentUsage = {
  importCode: `import { ScrollArea } from '@stellar-ui-kit/web';`,

  usageCode: `<ScrollArea className="h-[200px] w-[350px]">
  <div>Content</div>
</ScrollArea>`,

  exampleCode: `import { ScrollArea, Text } from '@stellar-ui-kit/web';

<div className="h-[200px] w-[350px] rounded-md border border-border">
  <ScrollArea className="h-full w-full rounded-md">
    <div className="p-4">
      <Text as="h4" className="mb-4 text-sm font-medium text-foreground">
        Tags
      </Text>
      
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="text-sm text-foreground mt-2">
          Tag {i + 1}
        </div>
      ))}
    </div>
  </ScrollArea>
</div>`,

  props: [
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The scrollable content.',
    },
  ],
};
