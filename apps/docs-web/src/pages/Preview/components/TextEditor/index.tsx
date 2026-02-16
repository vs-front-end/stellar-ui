import type { IComponentUsage } from '@/types';

import { TextEditor } from '@stellar-ui/web';

export const TextEditorExample = () => (
  <div className="flex flex-col gap-4 max-w-2xl">
    <TextEditor
      label="Rich Text Editor"
      placeholder="Start typing..."
      onChange={(html: string) => console.warn(html)}
    />
  </div>
);

export const TextEditorDocs: IComponentUsage = {
  importCode: `import { TextEditor } from '@stellar-ui/web';`,

  usageCode: `<TextEditor
  label="Editor"
  placeholder="Start typing..."
  onChange={(html) => console.warn(html)}
/>`,

  exampleCode: `import { TextEditor } from '@stellar-ui/web';

<div className="flex flex-col gap-4 max-w-2xl">
  <TextEditor
    label="Rich Text Editor"
    placeholder="Start typing..."
    onChange={(html: string) => console.warn(html)}
  />
</div>`,

  props: [
    {
      name: 'label',
      type: 'string',
      description: 'The label for the editor.',
    },
    {
      name: 'error',
      type: 'string',
      description: 'Error message shown below the editor.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: "'Type here...'",
      description: 'Placeholder text when empty.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'Controlled HTML content.',
    },
    {
      name: 'onChange',
      type: '(html: string) => void',
      description: 'Callback when content changes (returns HTML string).',
    },
    {
      name: 'editable',
      type: 'boolean',
      default: 'true',
      description:
        'When false, content is read-only and the toolbar is hidden.',
    },
    {
      name: 'onUploadImage',
      type: '(file: File) => Promise<string>',
      description:
        'Optional. Called when user pastes or drops an image. Return the image URL; if not provided, images are embedded as data URLs.',
    },
  ],
};
