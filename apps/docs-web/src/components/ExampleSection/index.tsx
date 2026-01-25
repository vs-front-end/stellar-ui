import {
  Text,
  CodeBlock,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@stellar-ui/web';

interface IExampleSection {
  exampleComponent: () => JSX.Element;
  exampleCode: string;
}

export function ExampleSection({
  exampleComponent,
  exampleCode,
}: IExampleSection) {
  return (
    <section className="space-y-4">
      <Text as="h2" className="text-2xl font-semibold">
        Example
      </Text>

      <Tabs defaultValue="example" className="w-full">
        <TabsList>
          <TabsTrigger value="example">Example</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="example">
          <div className="border border-border rounded-lg p-6 bg-background">
            {exampleComponent ? exampleComponent() : null}
          </div>
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock code={exampleCode} language="tsx" copyable />
        </TabsContent>
      </Tabs>
    </section>
  );
}
