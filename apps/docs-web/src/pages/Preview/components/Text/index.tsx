import type { IComponentUsage } from '@/types';

import { Text } from '@stellar-ui/web';

export const TextExample = () => (
  <div className="flex flex-col gap-2">
    <Text as="h1" className="text-2xl font-bold">
      Heading 1
    </Text>
    <Text as="p" className="text-muted">
      This is a paragraph text.
    </Text>
    <Text as="span" className="text-sm">
      This is a span text.
    </Text>
  </div>
);

export const TextDocs: IComponentUsage = {
  importCode: `import { Text } from '@stellar-ui/web';`,

  usageCode: `<Text as="p">Text content</Text>`,

  exampleCode: `import { Text } from '@stellar-ui/web';

<div className="flex flex-col gap-2">
  <Text as="h1" className="text-2xl font-bold">
    Heading 1
  </Text>
  <Text as="p" className="text-muted">
    This is a paragraph text.
  </Text>
  <Text as="span" className="text-sm">
    This is a span text.
  </Text>
</div>`,

  props: [
    {
      name: 'as',
      type: '"h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "li" | "span"',
      description: 'The HTML element to render as.',
    },
    {
      name: 'styleVariant',
      type: '"lead" | "muted"',
      description: 'The style variant to apply.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The content to display.',
    },
  ],
};
