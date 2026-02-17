import type { IComponentUsage } from '@/types';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from '@stellar-ui-kit/web';

export const TabsExample = () => (
  <Tabs defaultValue="account" className="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <Text as="p" className="text-sm text-muted">
        Make changes to your account here. Click save when you&apos;re done.
      </Text>
    </TabsContent>
    <TabsContent value="password">
      <Text as="p" className="text-sm text-muted">
        Change your password here. After saving, you&apos;ll be logged out.
      </Text>
    </TabsContent>
  </Tabs>
);

export const TabsDocs: IComponentUsage = {
  importCode: `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@stellar-ui-kit/web';`,

  usageCode: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>`,

  exampleCode: `import { Tabs, TabsContent, TabsList, TabsTrigger, Text } from '@stellar-ui-kit/web';

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Text as="p" className="text-sm text-muted">
      Make changes to your account here. Click save when you&apos;re done.
    </Text>
  </TabsContent>
  <TabsContent value="password">
    <Text as="p" className="text-sm text-muted">
      Change your password here. After saving, you&apos;ll be logged out.
    </Text>
  </TabsContent>
</Tabs>`,

  props: [
    {
      name: 'value',
      type: 'string',
      description: 'The controlled active tab value.',
    },
    {
      name: 'defaultValue',
      type: 'string',
      description: 'The default active tab when uncontrolled.',
    },
    {
      name: 'onValueChange',
      type: '(value: string) => void',
      description: 'Callback fired when the active tab changes.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
  ],
};
