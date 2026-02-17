import type { IComponentUsage } from '@/types';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Text,
} from '@stellar-ui-kit/web';

export const CardExample = () => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description goes here.</CardDescription>
    </CardHeader>

    <CardContent>
      <Text as="p">This is the card content area.</Text>
    </CardContent>

    <CardFooter className="flex gap-2 justify-end">
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </CardFooter>
  </Card>
);

export const CardDocs: IComponentUsage = {
  importCode: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@stellar-ui-kit/web';`,

  usageCode: `<Card className="w-full max-w-sm">
  <CardHeader>
  <CardTitle>Card Title</CardTitle>
  <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>

  <CardContent>
    <Text as="p">This is the card content area.</Text>
  </CardContent>

  <CardFooter className="flex gap-2 justify-end">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>`,

  exampleCode: `import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Text,
} from '@stellar-ui-kit/web';

<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>

  <CardContent>
    <Text as="p">This is the card content area.</Text>
  </CardContent>

  <CardFooter className="flex gap-2 justify-end">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>`,

  props: [
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply to the card.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The content to display inside the card.',
    },
  ],
};
