import { cn } from '@stellar-ui/shared';
import * as React from 'react';
import { View, type ViewProps } from 'react-native';
import { Text, TextClassContext } from '../Text';

type AlertVariant = 'default' | 'destructive' | 'success' | 'warning' | 'informative';

const AlertVariantContext = React.createContext<AlertVariant>('default');

const alertContainerStyles: Record<AlertVariant, string> = {
  default: 'bg-surface text-foreground border-border',
  destructive: 'bg-error-soft text-error-text border-error-text',
  success: 'bg-success-soft text-success-text border-success-text',
  warning: 'bg-warning-soft text-warning-text border-warning-text',
  informative: 'bg-primary-soft text-primary-text border-primary-text',
};

const titleStyles: Record<AlertVariant, string> = {
  default: 'text-foreground',
  destructive: 'text-error-text',
  success: 'text-success-text',
  warning: 'text-warning-text',
  informative: 'text-primary-text',
};

const descriptionStyles: Record<AlertVariant, string> = {
  default: 'text-muted',
  destructive: 'text-error-text/90',
  success: 'text-success-text/90',
  warning: 'text-warning-text/90',
  informative: 'text-primary-text/90',
};

function Alert({
  className,
  variant = 'default',
  children,
  icon,
  iconClassName,
  ...props
}: ViewProps &
  React.RefAttributes<View> & {
    variant?: AlertVariant;
    icon?: React.ReactNode;
    iconClassName?: string;
  }) {
  const containerClass = alertContainerStyles[variant];
  const textContextValue = cn('text-sm', titleStyles[variant]);

  return (
    <AlertVariantContext.Provider value={variant}>
      <TextClassContext.Provider value={textContextValue}>
        <View
          role="alert"
          className={cn(
            'relative w-full rounded-lg border px-4 pb-2 pt-3.5',
            containerClass,
            className
          )}
          {...props}
        >
          {icon != null && (
            <View className={cn('absolute left-3.5 top-3 size-4', iconClassName)}>
              {icon}
            </View>
          )}
          {children}
        </View>
      </TextClassContext.Provider>
    </AlertVariantContext.Provider>
  );
}

function AlertTitle({
  className,
  ...props
}: React.ComponentProps<typeof Text> & React.RefAttributes<typeof Text>) {
  const variant = React.useContext(AlertVariantContext);
  return (
    <Text
      className={cn(
        'mb-1 min-h-4 pl-6 font-semibold leading-none',
        titleStyles[variant],
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<typeof Text> & React.RefAttributes<typeof Text>) {
  const variant = React.useContext(AlertVariantContext);
  return (
    <Text
      className={cn(
        'pb-1.5 pl-6 text-sm leading-relaxed',
        descriptionStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle };
