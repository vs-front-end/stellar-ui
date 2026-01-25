import type { IComponentUsage } from '@/types';

import { Button, ButtonGroup } from '@stellar-ui/web';
import { EllipsisIcon } from 'lucide-react';

export const ButtonGroupExample = () => (
  <ButtonGroup>
    <Button className="hover:opacity-80" variant="outline">
      Users
    </Button>

    <Button className="hover:opacity-80" variant="outline">
      Groups
    </Button>

    <Button className="hover:opacity-80" variant="outline">
      <EllipsisIcon />
    </Button>
  </ButtonGroup>
);

export const ButtonGroupDocs: IComponentUsage = {
  importCode: `import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@stellar-ui/web';`,

  usageCode: `<ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`,

  exampleCode: `import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@stellar-ui/web';

<ButtonGroup>
  <Button className="hover:opacity-80" variant="outline">
    Users
  </Button>

  <Button className="hover:opacity-80" variant="outline">
    Groups
  </Button>

  <Button className="hover:opacity-80" variant="outline">
    <EllipsisIcon />
  </Button>
</ButtonGroup>`,

  props: [
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The buttons to group together.',
    },
  ],
};
