import type { IComponentUsage } from '@/types';

import { TextEditor } from '@stellar-ui/web';

export const TextEditorExample = () => (
  <div className="flex flex-col gap-4 max-w-2xl">
    <TextEditor
      label="Rich Text Editor"
      placeholder="Start typing..."
      onChange={(html: string) => console.log(html)}
    />
  </div>
);

export const TextEditorDocs: IComponentUsage = {
  importCode: `import { TextEditor } from '@stellar-ui/web';`,

  usageCode: `<TextEditor
  label="Editor"
  placeholder="Start typing..."
  onChange={(html) => console.log(html)}
/>`,

  exampleCode: `import { TextEditor } from '@stellar-ui/web';

<div className="flex flex-col gap-4 max-w-2xl">
  <TextEditor
    label="Rich Text Editor"
    placeholder="Start typing..."
    onChange={(html: string) => console.log(html)}
  />
</div>`,

  props: [
    {
      name: 'label',
      type: 'string',
      description: 'The label for the editor.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'The controlled HTML content.',
    },
    {
      name: 'onChange',
      type: '(html: string) => void',
      description: 'Callback fired when the content changes.',
    },
  ],
};
