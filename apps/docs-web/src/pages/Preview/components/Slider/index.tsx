import type { IComponentUsage } from '@/types';

import { Label, Slider } from '@stellar-ui-kit/web';

export const SliderExample = () => (
  <div className="flex flex-col gap-4 max-w-md">
    <div className="flex flex-col gap-2">
      <Label>Default Slider</Label>
      <Slider defaultValue={[50]} />
    </div>

    <div className="flex flex-col gap-2">
      <Label>Range Slider</Label>
      <Slider defaultValue={[20, 80]} max={100} />
    </div>
  </div>
);

export const SliderDocs: IComponentUsage = {
  importCode: `import { Slider } from '@stellar-ui-kit/web';`,

  usageCode: `<Slider defaultValue={[50]} />`,

  exampleCode: `import { Label, Slider } from '@stellar-ui-kit/web';

<div className="flex flex-col gap-4 max-w-md">
  <div className="flex flex-col gap-2">
    <Label>Default Slider</Label>
    <Slider defaultValue={[50]} />
  </div>
  
  <div className="flex flex-col gap-2">
    <Label>Range Slider</Label>
    <Slider defaultValue={[20, 80]} max={100} />
  </div>
</div>`,

  props: [
    {
      name: 'value',
      type: 'number[]',
      description: 'The controlled value(s) of the slider.',
    },
    {
      name: 'defaultValue',
      type: 'number[]',
      description: 'The default value(s) when uncontrolled.',
    },
    {
      name: 'onValueChange',
      type: '(value: number[]) => void',
      description: 'Callback fired when the value changes.',
    },
    {
      name: 'min',
      type: 'number',
      default: '0',
      description: 'The minimum value.',
    },
    {
      name: 'max',
      type: 'number',
      default: '100',
      description: 'The maximum value.',
    },
    {
      name: 'step',
      type: 'number',
      default: '1',
      description: 'The step increment.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
  ],
};
