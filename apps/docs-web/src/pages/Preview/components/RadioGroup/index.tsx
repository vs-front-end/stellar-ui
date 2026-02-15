import type { IComponentUsage } from '@/types';

import { Label, RadioGroup, RadioGroupItem } from '@stellar-ui/web';
import {
  Label as MobileLabel,
  RadioGroup as MobileRadioGroup,
  RadioGroupItem as MobileRadioGroupItem,
} from '@stellar-ui/mobile';

export const RadioGroupExample = () => (
  <div className="flex flex-col gap-4 max-w-md">
    <div className="flex flex-col gap-4">
      <Label>Options</Label>

      <RadioGroup defaultValue="option1">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option1" id="radio-1" />
          <Label htmlFor="radio-1">Option 1</Label>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value="option2" id="radio-2" />
          <Label htmlFor="radio-2">Option 2</Label>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value="option3" id="radio-3" />
          <Label htmlFor="radio-3">Option 3</Label>
        </div>
      </RadioGroup>
    </div>
  </div>
);

export const RadioGroupExampleMobile = () => (
  <div className="flex flex-col gap-4 max-w-md">
    <div className="flex flex-col gap-4">
      <MobileLabel>Options</MobileLabel>

      <MobileRadioGroup defaultValue="option1">
        <div className="flex flex-row items-center gap-2">
          <MobileRadioGroupItem value="option1" id="radio-1" />
          <MobileLabel htmlFor="radio-1">Option 1</MobileLabel>
        </div>

        <div className="flex flex-row items-center gap-2">
          <MobileRadioGroupItem value="option2" id="radio-2" />
          <MobileLabel htmlFor="radio-2">Option 2</MobileLabel>
        </div>

        <div className="flex flex-row items-center gap-2">
          <MobileRadioGroupItem value="option3" id="radio-3" />
          <MobileLabel htmlFor="radio-3">Option 3</MobileLabel>
        </div>
      </MobileRadioGroup>
    </div>
  </div>
);

export const RadioGroupDocs: IComponentUsage = {
  importCode: `import { Label, RadioGroup, RadioGroupItem } from '@stellar-ui/web';`,

  usageCode: `<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="radio-1" />
    <Label htmlFor="radio-1">Option 1</Label>
  </div>
</RadioGroup>`,

  exampleCode: `import { Label, RadioGroup, RadioGroupItem } from '@stellar-ui/web';

<div className="flex flex-col gap-4 max-w-md">
  <div className="flex flex-col gap-2">
    <Label>Options</Label>
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-4">
        <RadioGroupItem value="option1" id="radio-1" />
        <Label htmlFor="radio-1">Option 1</Label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" id="radio-2" />
        <Label htmlFor="radio-2">Option 2</Label>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" id="radio-3" />
        <Label htmlFor="radio-3">Option 3</Label>
      </div>
    </RadioGroup>
  </div>
</div>`,

  importCodeMobile: `import { Label, RadioGroup, RadioGroupItem } from '@stellar-ui/mobile';`,

  usageCodeMobile: `<RadioGroup defaultValue="option1">
  <div className="flex flex-row items-center gap-2">
    <RadioGroupItem value="option1" id="radio-1" />
    <Label htmlFor="radio-1">Option 1</Label>
  </div>
</RadioGroup>`,

  exampleCodeMobile: `import { Label, RadioGroup, RadioGroupItem } from '@stellar-ui/mobile';

<div className="flex flex-col gap-4 max-w-md">
  <div className="flex flex-col gap-4">
    <Label>Options</Label>
    <RadioGroup defaultValue="option1">
      <div className="flex flex-row items-center gap-2">
        <RadioGroupItem value="option1" id="radio-1" />
        <Label htmlFor="radio-1">Option 1</Label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <RadioGroupItem value="option2" id="radio-2" />
        <Label htmlFor="radio-2">Option 2</Label>
      </div>
      <div className="flex flex-row items-center gap-2">
        <RadioGroupItem value="option3" id="radio-3" />
        <Label htmlFor="radio-3">Option 3</Label>
      </div>
    </RadioGroup>
  </div>
</div>`,

  props: [
    {
      name: 'value',
      type: 'string',
      description: 'The controlled value of the selected radio item.',
    },
    {
      name: 'defaultValue',
      type: 'string',
      description: 'The default value when uncontrolled.',
    },
    {
      name: 'onValueChange',
      type: '(value: string) => void',
      description: 'Callback fired when the selected value changes.',
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
      description: 'The name of the radio group for form submission.',
    },
  ],
};
