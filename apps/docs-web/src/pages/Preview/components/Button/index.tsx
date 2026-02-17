import type { IComponentUsage, IComponentVariant } from '@/types';
import { Button } from '@stellar-ui-kit/web';

type ButtonVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost';

type ButtonSize = 'default' | 'sm' | 'lg';

const createVariant = (
  name: string,
  description: string,
  variant: string,
  size?: string
) => {
  const code = size
    ? `<Button variant="${variant}" size="${size}">${name}</Button>`
    : `<Button variant="${variant}">${name}</Button>`;

  const component = () => (
    <Button variant={variant as ButtonVariant} size={size as ButtonSize}>
      {name}
    </Button>
  );

  return { name, description, code, component };
};

export const ButtonVariants: IComponentVariant[] = [
  createVariant(
    'Default',
    'Use the default variant for primary actions.',
    'default'
  ),
  createVariant(
    'Secondary',
    'Use `variant="secondary"` for secondary actions.',
    'secondary'
  ),
  createVariant(
    'Destructive',
    'Use `variant="destructive"` for destructive actions.',
    'destructive'
  ),
  createVariant(
    'Outline',
    'Use `variant="outline"` for outlined buttons.',
    'outline'
  ),
  createVariant('Ghost', 'Use `variant="ghost"` for ghost buttons.', 'ghost'),
  createVariant(
    'Small',
    'Use `size="sm"` for smaller buttons.',
    'default',
    'sm'
  ),
  createVariant(
    'Default Size',
    'Use `size="default"` or omit the size prop for default-sized buttons.',
    'default',
    'default'
  ),
  createVariant(
    'Large',
    'Use `size="lg"` for larger buttons.',
    'default',
    'lg'
  ),
];

export const ButtonExample = ButtonVariants[0].component;

export const ButtonDocs: IComponentUsage = {
  importCode: `import { Button } from '@stellar-ui-kit/web';`,

  usageCode: `<Button>Click me</Button>`,

  exampleCode: `import { Button } from '@stellar-ui-kit/web';

<Button>Default</Button>

`,

  props: [
    {
      name: 'variant',
      type: '"default" | "secondary" | "destructive" | "outline" | "ghost"',
      default: '"default"',
      description: 'The visual style variant of the button.',
    },
    {
      name: 'size',
      type: '"default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"',
      default: '"default"',
      description: 'The size of the button.',
    },
    {
      name: 'asChild',
      type: 'boolean',
      default: 'false',
      description:
        'When true, renders as a Slot component allowing you to compose the button with other elements.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description:
        'When true, prevents user interaction and shows disabled state.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply to the button.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The content to display inside the button.',
    },
  ],
};
