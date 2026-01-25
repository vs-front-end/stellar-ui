import { IComponentVariant } from '@/types/components';

import {
  Text,
  CodeBlock,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@stellar-ui/web';

interface IVariantItem {
  variant: IComponentVariant;
}

interface IInlineCode {
  children: string;
}

const InlineCode = ({ children }: IInlineCode) => {
  return (
    <code className="p-1 rounded bg-surface text-foreground text-sm font-mono">
      {children}
    </code>
  );
};

export const VariantItem = ({ variant }: IVariantItem) => {
  const parseDescription = (description: string) => {
    const splitDescription = description.split('`');

    const mappedDescription = splitDescription.map((part, i) =>
      i % 2 === 0 ? part : <InlineCode key={i}>{part}</InlineCode>
    );

    return mappedDescription;
  };

  return (
    <div className="space-y-4">
      <div>
        <Text as="h3" className="text-xl font-semibold mb-2">
          {variant.name}
        </Text>

        <Text as="p" className="text-muted">
          {parseDescription(variant.description)}
        </Text>
      </div>

      <Tabs defaultValue="example" className="w-full">
        <TabsList>
          <TabsTrigger value="example">Example</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="example">
          <div className="border border-border rounded-lg p-6 bg-background">
            {variant.component()}
          </div>
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock code={variant.code} language="tsx" copyable />
        </TabsContent>
      </Tabs>
    </div>
  );
};
