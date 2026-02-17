import type { IComponentUsage } from '@/types';

import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@stellar-ui-kit/web';

export const DrawerExample = () => (
  <Drawer direction="left">
    <DrawerTrigger asChild>
      <Button>Left Drawer</Button>
    </DrawerTrigger>

    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Left Drawer</DrawerTitle>
        <DrawerDescription>This drawer slides from the Left.</DrawerDescription>
      </DrawerHeader>

      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export const DrawerDocs: IComponentUsage = {
  importCode: `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@stellar-ui-kit/web';`,

  usageCode: `<Drawer direction="Left">
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Action</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,

  exampleCode: `import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Text,
} from '@stellar-ui-kit/web';

<Drawer direction="left">
  <DrawerTrigger asChild>
    <Button>Left Drawer</Button>
  </DrawerTrigger>

  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Left Drawer</DrawerTitle>
      <DrawerDescription>This drawer slides from the Left.</DrawerDescription>
    </DrawerHeader>

    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,

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
      name: 'direction',
      type: '"top" | "right" | "bottom" | "left"',
      default: '"bottom"',
      description: 'The side from which the drawer slides in.',
    },
  ],
};
