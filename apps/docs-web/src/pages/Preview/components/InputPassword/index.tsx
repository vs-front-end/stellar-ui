import { useState } from 'react';
import type { IComponentUsage } from '@/types';
import { InputPassword, PasswordStrength } from '@stellar-ui-kit/web';

export const InputPasswordExample = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <InputPassword
        label="Input with password strength"
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />
      <PasswordStrength password={password} />
    </div>
  );
};

export const InputPasswordDocs: IComponentUsage = {
  importCode: `import { InputPassword, PasswordStrength } from '@stellar-ui-kit/web';`,

  usageCode: `<InputPassword
  label="Password"
  placeholder="Enter password"
/>`,

  exampleCode: `import { InputPassword, PasswordStrength } from '@stellar-ui-kit/web';
import { useState } from 'react';

function Example() {
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <InputPassword
        label="Input with password strength"
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />
      <PasswordStrength password={password} />
    </div>
  );
}`,

  props: [
    {
      name: 'label',
      type: 'string',
      description: 'The label for the input.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text.',
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
      name: 'startIcon',
      type: 'LucideIcon',
      description: 'Icon component to display at the start of the input.',
    },
    {
      name: 'error',
      type: 'string',
      description: 'Error message shown below the input.',
    },
    {
      name: 'helperText',
      type: 'string',
      description: 'Helper text shown below the input when there is no error.',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'When true, shows a required indicator next to the label.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
  ],
};
