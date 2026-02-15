import type { IComponentUsage } from '@/types';
import { useState } from 'react';

import { InputPassword, PasswordStrength } from '@stellar-ui/web';
import {
  InputPassword as MobileInputPassword,
  PasswordStrength as MobilePasswordStrength,
} from '@stellar-ui/mobile';

export const PasswordStrengthExample = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <InputPassword
        label="Password"
        placeholder="Enter password"
        value={password}
        onChange={setPassword}
      />
      <PasswordStrength password={password} />
    </div>
  );
};

export const PasswordStrengthExampleMobile = () => {
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <MobileInputPassword
        label="Password"
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
      />
      <MobilePasswordStrength password={password} />
    </div>
  );
};

export const PasswordStrengthDocs: IComponentUsage = {
  importCode: `import { PasswordStrength } from '@stellar-ui/web';`,

  usageCode: `<PasswordStrength password={password} />`,

  exampleCode: `import { InputPassword, PasswordStrength } from '@stellar-ui/web';
import { useState } from 'react';

function Example() {
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <InputPassword
        label="Password"
        placeholder="Enter password"
        value={password}
        onChange={setPassword}
      />
      <PasswordStrength password={password} />
    </div>
  );
}`,

  importCodeMobile: `import { InputPassword, PasswordStrength } from '@stellar-ui/mobile';`,

  usageCodeMobile: `<PasswordStrength password={password} />`,

  exampleCodeMobile: `import { InputPassword, PasswordStrength } from '@stellar-ui/mobile';
import { useState } from 'react';

function Example() {
  const [password, setPassword] = useState('');

  return (
    <>
      <InputPassword
        label="Password"
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
      />
      <PasswordStrength password={password} />
    </>
  );
}`,

  props: [
    {
      name: 'password',
      type: 'string',
      description: 'The password string to evaluate strength.',
    },
  ],
};
