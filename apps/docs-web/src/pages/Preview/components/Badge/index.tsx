import type { IComponentUsage, IComponentVariant } from '@/types';
import { Badge } from '@stellar-ui/web';

import {
  CheckIcon,
  InfoIcon,
  XCircleIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from 'lucide-react';

type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'success'
  | 'warning';

const iconMap: Record<string, React.ComponentType> = {
  CheckIcon,
  InfoIcon,
  XCircleIcon,
  CheckCircleIcon,
  AlertCircleIcon,
};

const createVariant = (
  name: string,
  description: string,
  variant: string,
  children: string,
  icon?: string
) => {
  const IconComponent = icon ? iconMap[icon] : null;

  let code = `<Badge variant="${variant}">${children}</Badge>`;

  if (icon) {
    code = `<Badge variant="${variant}">
  <${icon} />
  ${children}
</Badge>`;
  }

  const component = () => (
    <Badge variant={variant as BadgeVariant}>
      {IconComponent && <IconComponent />}
      {children}
    </Badge>
  );

  return { name, description, code, component };
};

export const BadgeVariants: IComponentVariant[] = [
  createVariant(
    'Default',
    'Use the default variant for standard badges.',
    'default',
    'Default'
  ),
  createVariant(
    'Secondary',
    'Use `variant="secondary"` for secondary badges.',
    'secondary',
    'Secondary'
  ),
  createVariant(
    'Destructive',
    'Use `variant="destructive"` for error or destructive badges.',
    'destructive',
    'Destructive'
  ),
  createVariant(
    'Outline',
    'Use `variant="outline"` for outlined badges.',
    'outline',
    'Outline'
  ),
  createVariant(
    'Success',
    'Use `variant="success"` for success badges.',
    'success',
    'Success'
  ),
  createVariant(
    'Warning',
    'Use `variant="warning"` for warning badges.',
    'warning',
    'Warning'
  ),
  createVariant(
    'With Icon',
    'Badges can include icons for better visual communication.',
    'default',
    'With Icon',
    'CheckIcon'
  ),
];

export const BadgeExample = BadgeVariants[0].component;

export const BadgeDocs: IComponentUsage = {
  importCode: `import { Badge } from '@stellar-ui/web';`,

  usageCode: `<Badge>Default</Badge>`,

  exampleCode: `import { Badge } from '@stellar-ui/web';

<div className="flex flex-wrap items-baseline gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
</div>`,

  props: [
    {
      name: 'variant',
      type: '"default" | "secondary" | "destructive" | "outline" | "success" | "warning"',
      default: '"default"',
      description: 'The visual style variant of the badge.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The content to display inside the badge.',
    },
  ],
};
