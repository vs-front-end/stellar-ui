import type { IComponentUsage } from '@/types';

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Text,
} from '@stellar-ui-kit/web';
import { ChevronsUpDownIcon } from 'lucide-react';

export const CollapsibleExample = () => {
  return (
    <Collapsible className="flex w-[350px] flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <Text as="h4" className="text-sm font-semibold">
          Project Settings
        </Text>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDownIcon className="size-4" />
            <span className="sr-only">Toggle details</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-md border border-border px-4 py-2 text-sm">
            <Text as="span" className="text-muted">
              React
            </Text>
            <Text as="span" className="font-medium">
              v19.0.0
            </Text>
          </div>

          <div className="flex items-center justify-between rounded-md border border-border px-4 py-2 text-sm">
            <Text as="span" className="text-muted">
              TypeScript
            </Text>
            <Text as="span" className="font-medium">
              v5.3.3
            </Text>
          </div>

          <div className="flex items-center justify-between rounded-md border border-border px-4 py-2 text-sm">
            <Text as="span" className="text-muted">
              Tailwind CSS
            </Text>
            <Text as="span" className="font-medium">
              v4.0.0
            </Text>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const CollapsibleDocs: IComponentUsage = {
  importCode: `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@stellar-ui-kit/web';`,

  usageCode: `<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Content</CollapsibleContent>
</Collapsible>`,

  exampleCode: `import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Text,
} from '@stellar-ui-kit/web';
import { ChevronsUpDownIcon } from 'lucide-react';

function Example() {
  return (
    <Collapsible className="flex w-[350px] flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <Text as="h4" className="text-sm font-semibold">
          Project Settings
        </Text>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsUpDownIcon className="size-4" />
            <span className="sr-only">Toggle details</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-md border border-border px-4 py-2 text-sm">
            <Text as="span" className="text-muted">
              React
            </Text>
            <Text as="span" className="font-medium">
              v19.0.0
            </Text>
          </div>

          <div className="flex items-center justify-between rounded-md border border-border px-4 py-2 text-sm">
            <Text as="span" className="text-muted">
              TypeScript
            </Text>
            <Text as="span" className="font-medium">
              v5.3.3
            </Text>
          </div>

          <div className="flex items-center justify-between rounded-md border border-border px-4 py-2 text-sm">
            <Text as="span" className="text-muted">
              Tailwind CSS
            </Text>
            <Text as="span" className="font-medium">
              v4.0.0
            </Text>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`,

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
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
  ],
};
