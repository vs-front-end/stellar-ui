import type { IComponentUsage } from '@/types';
import { Checkbox, Label } from '@stellar-ui-kit/web';

export const CheckboxExample = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-default" />
      <Label htmlFor="checkbox-default">Default Checkbox</Label>
    </div>

    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-checked" defaultChecked />
      <Label htmlFor="checkbox-checked">Checked Checkbox</Label>
    </div>

    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-disabled" disabled />
      <Label htmlFor="checkbox-disabled">Disabled Checkbox</Label>
    </div>
  </div>
);

export const CheckboxDocs: IComponentUsage = {
  importCode: `import { Checkbox, Label } from '@stellar-ui-kit/web';`,

  usageCode: `<div className="flex items-center gap-2">
  <Checkbox id="checkbox" />
  <Label htmlFor="checkbox">Label</Label>
</div>`,

  exampleCode: `import { Checkbox, Label } from '@stellar-ui-kit/web';

<div className="flex flex-col gap-4">
  <div className="flex items-center gap-2">
    <Checkbox id="checkbox-default" />
    <Label htmlFor="checkbox-default">Default Checkbox</Label>
  </div>

  <div className="flex items-center gap-2">
    <Checkbox id="checkbox-checked" defaultChecked />
    <Label htmlFor="checkbox-checked">Checked Checkbox</Label>
  </div>

  <div className="flex items-center gap-2">
    <Checkbox id="checkbox-disabled" disabled />
    <Label htmlFor="checkbox-disabled">Disabled Checkbox</Label>
  </div>
</div>`,

  props: [
    {
      name: 'checked',
      type: 'boolean',
      description: 'The controlled checked state.',
    },
    {
      name: 'defaultChecked',
      type: 'boolean',
      description: 'The default checked state when uncontrolled.',
    },
    {
      name: 'onCheckedChange',
      type: '(checked: boolean) => void',
      description: 'Callback fired when the checked state changes.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'The name of the checkbox for form submission.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'The value of the checkbox for form submission.',
    },
  ],
};
