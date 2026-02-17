import type { IComponentUsage } from '@/types';
import { DatePicker, DatePickerRange, Label } from '@stellar-ui-kit/web';

export const DatePickerExample = () => (
  <div className="flex flex-col gap-4">
    <Label>Default Date Picker</Label>
    <DatePicker placeholder="Select a date" />

    <Label>Range Date Picker</Label>
    <DatePickerRange />
  </div>
);

export const DatePickerDocs: IComponentUsage = {
  importCode: `import { DatePicker, DatePickerRange } from '@stellar-ui-kit/web';`,

  usageCode: `<DatePicker placeholder="Select a date" />`,

  exampleCode: `import { DatePicker, DatePickerRange } from '@stellar-ui-kit/web';

<div className="flex flex-col gap-4">
  <Label>Default Date Picker</Label>
  <DatePicker placeholder="Select a date" />

  <Label>Range Date Picker</Label>
  <DatePickerRange />
</div>`,

  props: [
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text when no date is selected.',
    },
    {
      name: 'value',
      type: 'Date',
      description: 'The controlled selected date.',
    },
    {
      name: 'onChange',
      type: '(date: Date | undefined) => void',
      description: 'Callback fired when the date changes.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
  ],
};
