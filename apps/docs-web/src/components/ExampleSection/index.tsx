import {
  Text,
  CodeBlock,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@stellar-ui-kit/web';

interface IExampleSection {
  exampleComponent: () => JSX.Element;
  exampleCode: string;
}

export function ExampleSection({
  exampleComponent,
  exampleCode,
}: IExampleSection) {
  const safeExampleRenderer =
    typeof exampleComponent === 'function' ? exampleComponent : null;

  return (
    <section className="space-y-4">
      <Text as="h2" className="text-2xl font-semibold">
        Example
      </Text>

      <Tabs defaultValue="example" className="w-full">
        <TabsList>
          <TabsTrigger value="example">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="example">
          <div className="border border-border rounded-lg bg-background/80 overflow-hidden">
            <div className="p-6 overflow-x-auto">
              {safeExampleRenderer ? safeExampleRenderer() : null}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code">
          {CodeBlock ? (
            <CodeBlock code={exampleCode ?? ''} language="tsx" copyable />
          ) : (
            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
              <code>{exampleCode ?? ''}</code>
            </pre>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
