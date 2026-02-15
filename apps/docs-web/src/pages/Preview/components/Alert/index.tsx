import { Info, XCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@stellar-ui/web';
import type { IComponentUsage, IComponentVariant } from '@/types';

import {
  Alert as MobileAlert,
  AlertDescription as MobileAlertDescription,
  AlertTitle as MobileAlertTitle,
} from '@stellar-ui/mobile';

type AlertVariant =
  | 'default'
  | 'destructive'
  | 'success'
  | 'warning'
  | 'informative';

const iconMap: Record<string, React.ComponentType> = {
  InfoIcon: Info,
  XCircleIcon: XCircle,
  CheckCircleIcon: CheckCircle,
  AlertCircleIcon: AlertCircle,
};

const createVariant = (
  name: string,
  description: string,
  variant: string,
  icon: string,
  title: string,
  message: string
) => {
  const code = `
  <Alert variant="${variant}">
    <${icon} />
    <AlertTitle>${title}</AlertTitle>
    <AlertDescription>
      ${message}
    </AlertDescription>
  </Alert>
  `;

  const IconComponent = iconMap[icon];

  const component = () => (
    <Alert variant={variant as AlertVariant}>
      <IconComponent />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );

  return { name, description, code, component };
};

export const AlertVariants: IComponentVariant[] = [
  createVariant(
    'Default',
    'Use the default variant for general information.',
    'default',
    'InfoIcon',
    'Default Alert',
    'This is a default alert with some information.'
  ),
  createVariant(
    'Destructive',
    'Use `variant="destructive"` for error messages and destructive actions.',
    'destructive',
    'XCircleIcon',
    'Error Alert',
    'Something went wrong. Please try again.'
  ),
  createVariant(
    'Success',
    'Use `variant="success"` for success messages and positive feedback.',
    'success',
    'CheckCircleIcon',
    'Success Alert',
    'Your action was completed successfully.'
  ),
  createVariant(
    'Warning',
    'Use `variant="warning"` for warning messages that need attention.',
    'warning',
    'AlertCircleIcon',
    'Warning Alert',
    'Please be careful with this action.'
  ),
  createVariant(
    'Info',
    'Use `variant="informative"` for informational messages and helpful tips.',
    'informative',
    'InfoIcon',
    'Info Alert',
    'Here is some useful information for you.'
  ),
];

export const AlertExample = AlertVariants[0].component;

export const AlertExampleMobile = () => (
  <MobileAlert variant="default" icon={<Info className="size-4" />}>
    <MobileAlertTitle>Alert Title</MobileAlertTitle>
    <MobileAlertDescription>
      This is an alert with a title and description.
    </MobileAlertDescription>
  </MobileAlert>
);

export const AlertDocs: IComponentUsage = {
  importCode: `import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@stellar-ui/web';`,

  usageCode: `<Alert variant="default">
  <AlertTitle>Alert Title</AlertTitle>
  <AlertDescription>Alert description</AlertDescription>
</Alert>`,

  exampleCode: `import { InfoIcon } from 'lucide-react';
  
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@stellar-ui/web';

<Alert variant="default">
  <InfoIcon />
  <AlertTitle>Alert Title</AlertTitle>
  <AlertDescription>
    This is an alert with a title and description.
  </AlertDescription>
</Alert>`,

  importCodeMobile: `import { Alert, AlertTitle, AlertDescription } from '@stellar-ui/mobile';
import { Info } from 'lucide-react';`,

  usageCodeMobile: `<Alert variant="default" icon={<Info className="size-4" />}>
  <AlertTitle>Alert Title</AlertTitle>
  <AlertDescription>Alert description</AlertDescription>
</Alert>`,

  exampleCodeMobile: `import { Alert, AlertTitle, AlertDescription } from '@stellar-ui/mobile';
import { Info } from 'lucide-react';

<Alert variant="default" icon={<Info className="size-4" />}>
  <AlertTitle>Alert Title</AlertTitle>
  <AlertDescription>
    This is an alert with a title and description.
  </AlertDescription>
</Alert>`,

  props: [
    {
      name: 'variant',
      type: '"default" | "destructive" | "success" | "warning" | "informative"',
      default: '"default"',
      description: 'The visual style variant of the alert.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The content to display inside the alert.',
    },
  ],
};
