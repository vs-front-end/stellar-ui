import type { IComponentUsage } from '@/types';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@stellar-ui/web';

export const ContextMenuExample = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-border bg-surface text-sm text-foreground">
      Right click here
    </ContextMenuTrigger>

    <ContextMenuContent className="w-64">
      <ContextMenuItem>
        Back
        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
      </ContextMenuItem>

      <ContextMenuItem disabled>
        Forward
        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
      </ContextMenuItem>

      <ContextMenuItem>
        Reload
        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export const ContextMenuDocs: IComponentUsage = {
  importCode: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@stellar-ui/web';`,

  usageCode: `<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Item</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,

  exampleCode: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@stellar-ui/web';

<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-border bg-surface text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      Back
      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>

    <ContextMenuItem disabled>
      Forward
      <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    
    <ContextMenuItem>
      Reload
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,

  props: [
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      description: 'Callback fired when the open state changes.',
    },
    {
      name: 'modal',
      type: 'boolean',
      default: 'true',
      description:
        'When true, prevents interaction with content outside the menu.',
    },
  ],
};
