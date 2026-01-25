import type { IComponentUsage } from '@/types';

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@stellar-ui/web';

export const PopoverExample = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="flex flex-col gap-2">
        <Text as="h4" className="font-medium">
          Dimensions
        </Text>

        <Text as="p" className="text-sm text-muted">
          Set the dimensions for the layer.
        </Text>
      </div>
    </PopoverContent>
  </Popover>
);

export const PopoverDocs: IComponentUsage = {
  importCode: `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@stellar-ui/web';`,

  usageCode: `<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>`,

  exampleCode: `import { Button, Popover, PopoverContent, PopoverTrigger, Text } from '@stellar-ui/web';

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="flex flex-col gap-2">
      <Text as="h4" className="font-medium">
        Dimensions
      </Text>
      <Text as="p" className="text-sm text-muted">
        Set the dimensions for the layer.
      </Text>
    </div>
  </PopoverContent>
</Popover>`,

  props: [
    {
      name: 'open',
      type: 'boolean',
      description: 'The controlled open state.',
    },
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: 'The default open state when uncontrolled.',
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      description: 'Callback fired when the open state changes.',
    },
    {
      name: 'modal',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents interaction with content outside the popover.',
    },
  ],
};
