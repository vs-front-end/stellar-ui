import type { IComponentUsage } from '@/types';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Label,
} from '@stellar-ui-kit/web';

export const InputOTPExample = () => (
  <div className="flex flex-col gap-2">
    <Label>OTP Input (6 digits)</Label>
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  </div>
);

export const InputOTPDocs: IComponentUsage = {
  importCode: `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@stellar-ui-kit/web';`,

  usageCode: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
</InputOTP>`,

  exampleCode: `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Label,
} from '@stellar-ui-kit/web';

<div className="flex flex-col gap-2">
  <Label>OTP Input (6 digits)</Label>
  <InputOTP maxLength={6}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
    </InputOTPGroup>
  </InputOTP>
</div>`,

  props: [
    {
      name: 'maxLength',
      type: 'number',
      description: 'The maximum number of characters.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'The controlled value.',
    },
    {
      name: 'onChange',
      type: '(value: string) => void',
      description: 'Callback fired when the value changes.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
  ],
};
