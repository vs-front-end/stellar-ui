import type { IComponentUsage } from '@/types';
import { useState } from 'react';

import { InputPassword, PasswordStrength } from '@stellar-ui/web';

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

  props: [
    {
      name: 'password',
      type: 'string',
      description: 'The password string to evaluate strength.',
    },
  ],
};
