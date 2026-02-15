import type { IComponentUsage } from '@/types';

import { Tabs, TabsContent, TabsList, TabsTrigger, Text } from '@stellar-ui/web';
import {
  Tabs as MobileTabs,
  TabsContent as MobileTabsContent,
  TabsList as MobileTabsList,
  TabsTrigger as MobileTabsTrigger,
  Text as MobileText,
} from '@stellar-ui/mobile';

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

export const TabsExampleMobile = () => (
  <MobileTabs defaultValue="account" className="w-[400px]">
    <MobileTabsList>
      <MobileTabsTrigger value="account">Account</MobileTabsTrigger>
      <MobileTabsTrigger value="password">Password</MobileTabsTrigger>
    </MobileTabsList>
    <MobileTabsContent value="account">
      <MobileText variant="p">
        Make changes to your account here. Click save when you&apos;re done.
      </MobileText>
    </MobileTabsContent>
    <MobileTabsContent value="password">
      <MobileText variant="p">
        Change your password here. After saving, you&apos;ll be logged out.
      </MobileText>
    </MobileTabsContent>
  </MobileTabs>
);

export const TabsDocs: IComponentUsage = {
  importCode: `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@stellar-ui/web';`,

  usageCode: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>`,

  exampleCode: `import { Tabs, TabsContent, TabsList, TabsTrigger, Text } from '@stellar-ui/web';

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

  importCodeMobile: `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from '@stellar-ui/mobile';`,

  usageCodeMobile: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>`,

  exampleCodeMobile: `import { Tabs, TabsContent, TabsList, TabsTrigger, Text } from '@stellar-ui/mobile';

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Text className="text-sm text-muted">
      Make changes to your account here. Click save when you&apos;re done.
    </Text>
  </TabsContent>
  <TabsContent value="password">
    <Text className="text-sm text-muted">
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
