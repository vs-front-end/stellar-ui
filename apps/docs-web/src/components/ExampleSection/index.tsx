import type { DocPlatform } from '@/utils/constants';

import {
  Text,
  CodeBlock,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@stellar-ui/web';

interface IExampleSection {
  platform: DocPlatform;
  exampleComponent: () => JSX.Element;
  exampleCode: string;
  exampleComponentMobile?: () => JSX.Element;
  exampleCodeMobile?: string;
}

export function ExampleSection({
  platform,
  exampleComponent,
  exampleCode,
  exampleComponentMobile,
  exampleCodeMobile,
}: IExampleSection) {
  const isMobile = platform === 'mobile';
  const hasMobileExample = !!exampleComponentMobile && !!exampleCodeMobile;

  const useMobile = isMobile && hasMobileExample;
  const code = useMobile ? exampleCodeMobile : exampleCode;
  const ExampleRenderer = useMobile ? exampleComponentMobile : exampleComponent;
  const safeExampleRenderer =
    typeof ExampleRenderer === 'function' ? ExampleRenderer : null;

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
            <CodeBlock code={code ?? ''} language="tsx" copyable />
          ) : (
            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
              <code>{code ?? ''}</code>
            </pre>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
