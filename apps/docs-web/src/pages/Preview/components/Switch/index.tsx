import type { IComponentUsage } from '@/types';

import { Switch } from '@stellar-ui/web';
import {
  Label as MobileLabel,
  Switch as MobileSwitch,
} from '@stellar-ui/mobile';

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

export const SwitchExampleMobile = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <MobileSwitch id="switch-default" />
      <MobileLabel htmlFor="switch-default">Default Switch</MobileLabel>
    </div>
    <div className="flex items-center gap-2">
      <MobileSwitch id="switch-checked" defaultChecked />
      <MobileLabel htmlFor="switch-checked">Checked Switch</MobileLabel>
    </div>
    <div className="flex items-center gap-2">
      <MobileSwitch id="switch-disabled" disabled />
      <MobileLabel htmlFor="switch-disabled">Disabled Switch</MobileLabel>
    </div>
  </div>
);

export const SwitchDocs: IComponentUsage = {
  importCode: `import { Switch } from '@stellar-ui/web';`,

  usageCode: `<Switch id="switch" />`,

  exampleCode: `import { Switch } from '@stellar-ui/web';

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

  importCodeMobile: `import { Label, Switch } from '@stellar-ui/mobile';`,

  usageCodeMobile: `<div className="flex items-center gap-2">
  <Switch id="switch" />
  <Label htmlFor="switch">Label</Label>
</div>`,

  exampleCodeMobile: `import { Label, Switch } from '@stellar-ui/mobile';

<div className="flex flex-col gap-4">
  <div className="flex items-center gap-2">
    <Switch id="switch-default" />
    <Label htmlFor="switch-default">Default Switch</Label>
  </div>

  <div className="flex items-center gap-2">
    <Switch id="switch-checked" defaultChecked />
    <Label htmlFor="switch-checked">Checked Switch</Label>
  </div>

  <div className="flex items-center gap-2">
    <Switch id="switch-disabled" disabled />
    <Label htmlFor="switch-disabled">Disabled Switch</Label>
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
