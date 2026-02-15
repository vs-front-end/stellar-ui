import type { IComponentUsage } from '@/types';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@stellar-ui/web';
import {
  Select as MobileSelect,
  SelectContent as MobileSelectContent,
  SelectItem as MobileSelectItem,
  SelectTrigger as MobileSelectTrigger,
  SelectValue as MobileSelectValue,
} from '@stellar-ui/mobile';

export const SelectExample = () => (
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a theme" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
);

export const SelectExampleMobile = () => (
  <MobileSelect>
    <MobileSelectTrigger {...({ className: 'w-[180px]' } as any)}>
      <MobileSelectValue placeholder="Select a theme" />
    </MobileSelectTrigger>

    <MobileSelectContent>
      <MobileSelectItem value="light" label="Light">
        Light
      </MobileSelectItem>
      <MobileSelectItem value="dark" label="Dark">
        Dark
      </MobileSelectItem>
      <MobileSelectItem value="system" label="System">
        System
      </MobileSelectItem>
    </MobileSelectContent>
  </MobileSelect>
);

export const SelectDocs: IComponentUsage = {
  importCode: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@stellar-ui/web';`,

  usageCode: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>`,

  exampleCode: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@stellar-ui/web';

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a theme" />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`,

  importCodeMobile: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@stellar-ui/mobile';`,

  usageCodeMobile: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>`,

  exampleCodeMobile: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@stellar-ui/mobile';

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a theme" />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`,

  props: [
    {
      name: 'value',
      type: 'string',
      description: 'The controlled value of the select.',
    },
    {
      name: 'defaultValue',
      type: 'string',
      description: 'The default value when uncontrolled.',
    },
    {
      name: 'onValueChange',
      type: '(value: string) => void',
      description: 'Callback fired when the value changes.',
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
      description: 'The name of the select for form submission.',
    },
  ],
};
