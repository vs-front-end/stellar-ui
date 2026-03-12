import type { IComponentUsage } from '@/types';
import { CodeBlock } from '@stellar-ui-kit/web';

const EXAMPLE_CODE = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`;

export const CodeBlockExample = () => (
  <div className="w-full max-w-xl">
    <CodeBlock
      code={EXAMPLE_CODE}
      filename="Counter.tsx"
      language="tsx"
      showLineNumbers
    />
  </div>
);

export const CodeBlockDocs: IComponentUsage = {
  importCode: `import { CodeBlock } from '@stellar-ui-kit/web';`,

  usageCode: `<CodeBlock code="const x = 1;" language="tsx" />`,

  exampleCode: `import { CodeBlock } from '@stellar-ui-kit/web';

const code = \`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}\`;

<CodeBlock
  code={code}
  filename="Counter.tsx"
  language="tsx"
  showLineNumbers
/>`,

  props: [
    {
      name: 'code',
      type: 'string',
      description: 'The source code string to display.',
    },
    {
      name: 'filename',
      type: 'string',
      description: 'Optional filename shown in the header bar.',
    },
    {
      name: 'language',
      type: 'string',
      default: '"tsx"',
      description: 'Language for syntax highlighting.',
    },
    {
      name: 'showLineNumbers',
      type: 'boolean',
      default: 'false',
      description: 'When true, displays line numbers.',
    },
    {
      name: 'startingLineNumber',
      type: 'number',
      default: '1',
      description: 'The line number to start counting from.',
    },
    {
      name: 'highlightLines',
      type: 'number[]',
      default: '[]',
      description: 'Line numbers to highlight.',
    },
    {
      name: 'copyable',
      type: 'boolean',
      default: 'true',
      description: 'When true, shows a copy-to-clipboard button.',
    },
    {
      name: 'maxHeight',
      type: 'string',
      description: 'CSS max-height value for the code container.',
    },
  ],
};
