import type { IComponentUsage } from '@/types';

import { InputCounter } from '@stellar-ui/web';
import { InputCounter as MobileInputCounter } from '@stellar-ui/mobile';

export const InputCounterExample = () => (
  <div className="flex flex-col gap-4">
    <InputCounter
      label="Input with plus/minus buttons"
      defaultValue={1024}
      min={0}
    />

    <InputCounter
      label="Counter with limits"
      defaultValue={5}
      min={0}
      max={10}
      step={1}
    />
  </div>
);

export const InputCounterExampleMobile = () => (
  <div className="flex flex-col gap-4">
    <MobileInputCounter
      label="Input with plus/minus buttons"
      defaultValue={1024}
      min={0}
    />
    <MobileInputCounter
      label="Counter with limits"
      defaultValue={5}
      min={0}
      max={10}
      step={1}
    />
  </div>
);

export const InputCounterDocs: IComponentUsage = {
  importCode: `import { InputCounter } from '@stellar-ui/web';`,

  usageCode: `<InputCounter
  label="Counter"
  defaultValue={0}
  min={0}
  max={100}
/>`,

  exampleCode: `import { InputCounter } from '@stellar-ui/web';

<div className="flex flex-col gap-4">
  <InputCounter
    label="Input with plus/minus buttons"
    defaultValue={1024}
    min={0}
  />
  
  <InputCounter
    label="Counter with limits"
    defaultValue={5}
    min={0}
    max={10}
    step={1}
  />
</div>`,

  importCodeMobile: `import { InputCounter } from '@stellar-ui/mobile';`,

  usageCodeMobile: `<InputCounter
  label="Counter"
  defaultValue={0}
  min={0}
  max={100}
/>`,

  exampleCodeMobile: `import { InputCounter } from '@stellar-ui/mobile';

<div className="flex flex-col gap-4">
  <InputCounter
    label="Input with plus/minus buttons"
    defaultValue={1024}
    min={0}
  />
  <InputCounter
    label="Counter with limits"
    defaultValue={5}
    min={0}
    max={10}
    step={1}
  />
</div>`,

  props: [
    {
      name: 'label',
      type: 'string',
      description: 'The label for the input.',
    },
    {
      name: 'value',
      type: 'number',
      description: 'The controlled value.',
    },
    {
      name: 'defaultValue',
      type: 'number',
      description: 'The default value when uncontrolled.',
    },
    {
      name: 'onChange',
      type: '(value: number) => void',
      description: 'Callback fired when the value changes.',
    },
    {
      name: 'min',
      type: 'number',
      description: 'The minimum value.',
    },
    {
      name: 'max',
      type: 'number',
      description: 'The maximum value.',
    },
    {
      name: 'step',
      type: 'number',
      default: '1',
      description: 'The step increment.',
    },
  ],
};
