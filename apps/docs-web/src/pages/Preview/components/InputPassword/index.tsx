import type { IComponentUsage } from '@/types';
import { useState } from 'react';

import { InputPassword, PasswordStrength } from '@stellar-ui/web';
import {
  InputPassword as MobileInputPassword,
  PasswordStrength as MobilePasswordStrength,
} from '@stellar-ui/mobile';

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

export const InputPasswordExampleMobile = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <MobileInputPassword
        label="Input with password strength"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <MobilePasswordStrength password={password} />
    </div>
  );
};

export const InputPasswordDocs: IComponentUsage = {
  importCode: `import { InputPassword, PasswordStrength } from '@stellar-ui/web';`,

  usageCode: `<InputPassword
  label="Password"
  placeholder="Enter password"
/>`,

  exampleCode: `import { InputPassword, PasswordStrength } from '@stellar-ui/web';
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

  importCodeMobile: `import { InputPassword, PasswordStrength } from '@stellar-ui/mobile';`,

  usageCodeMobile: `<InputPassword
  label="Input with password strength"
  placeholder="Password"
  value={password}
  onChangeText={setPassword}
/>
<PasswordStrength password={password} />`,

  exampleCodeMobile: `import { InputPassword, PasswordStrength } from '@stellar-ui/mobile';
import { useState } from 'react';

function Example() {
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <InputPassword
        label="Input with password strength"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
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
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'When true, prevents user interaction.',
    },
  ],
};
