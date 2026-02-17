import type { IComponentUsage } from '@/types';
import { Switch } from '@stellar-ui-kit/web';

export const SwitchExample = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <Switch id="switch-default" />
      <label htmlFor="switch-default" className="text-sm text-foreground">
        Default Switch
      </label>
    </div>

    <div className="flex items-center gap-2">
      <Switch id="switch-checked" defaultChecked />
      <label htmlFor="switch-checked" className="text-sm text-foreground">
        Checked Switch
      </label>
    </div>

    <div className="flex items-center gap-2">
      <Switch id="switch-disabled" disabled />
      <label htmlFor="switch-disabled" className="text-sm text-foreground">
        Disabled Switch
      </label>
    </div>
  </div>
);

export const SwitchDocs: IComponentUsage = {
  importCode: `import { Switch } from '@stellar-ui-kit/web';`,

  usageCode: `<Switch id="switch" />`,

  exampleCode: `import { Switch } from '@stellar-ui-kit/web';

<div className="flex flex-col gap-4">
  <div className="flex items-center gap-2">
    <Switch id="switch-default" />
    <label
      htmlFor="switch-default"
      className="text-sm text-foreground"
    >
      Default Switch
    </label>
  </div>

  <div className="flex items-center gap-2">
    <Switch id="switch-checked" defaultChecked />
    <label
      htmlFor="switch-checked"
      className="text-sm text-foreground"
    >
      Checked Switch
    </label>
  </div>
  
  <div className="flex items-center gap-2">
    <Switch id="switch-disabled" disabled />
    <label
      htmlFor="switch-disabled"
      className="text-sm text-foreground"
    >
      Disabled Switch
    </label>
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
      description: 'The name of the switch for form submission.',
    },
  ],
};
