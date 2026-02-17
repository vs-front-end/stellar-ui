import type { IComponentUsage } from '@/types';

import { Calendar, Label } from '@stellar-ui-kit/web';

export const CalendarExample = () => (
  <div className="flex gap-8">
    <div className="flex flex-col gap-4">
      <Label>Default Calendar</Label>
      <Calendar />
    </div>

    <div className="flex flex-col gap-4">
      <Label>Range Calendar</Label>
      <Calendar mode="range" />
    </div>
  </div>
);

export const CalendarDocs: IComponentUsage = {
  importCode: `import { Calendar } from '@stellar-ui-kit/web';`,

  usageCode: `<Calendar />`,

  exampleCode: `import { Calendar } from '@stellar-ui-kit/web';

<div className="flex gap-8">
  <div className="flex flex-col gap-4">
    <Label>Default Calendar</Label>
    <Calendar />
  </div>

  <div className="flex flex-col gap-4">
    <Label>Range Calendar</Label>
    <Calendar mode="range" />
  </div>
</div>`,

  props: [
    {
      name: 'mode',
      type: '"single" | "multiple" | "range"',
      default: '"single"',
      description: 'The selection mode of the calendar.',
    },
    {
      name: 'selected',
      type: 'Date | Date[] | DateRange',
      description: 'The controlled selected date(s).',
    },
    {
      name: 'onSelect',
      type: '(date: Date | Date[] | DateRange) => void',
      description: 'Callback fired when the selection changes.',
    },
    {
      name: 'disabled',
      type: 'boolean | Date[]',
      description: 'Disables specific dates or the entire calendar.',
    },
  ],
};
