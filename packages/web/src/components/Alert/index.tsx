import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@stellar-ui-kit/shared';

const alertVariants = cva(
  'relative w-full rounded-lg border border-border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[1rem_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:mt-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-surface text-foreground border-border',
        destructive:
          'bg-error-soft text-error-text border-error-text [&>svg]:text-error-text *:data-[slot=alert-description]:text-error-text/90',
        success:
          'bg-success-soft text-success-text border-success-text [&>svg]:text-success-text *:data-[slot=alert-description]:text-success-text/90',
        warning:
          'bg-warning-soft text-warning-text border-warning-text [&>svg]:text-warning-text *:data-[slot=alert-description]:text-warning-text/90',
        informative:
          'bg-primary-soft text-primary-text border-primary-text [&>svg]:text-primary-text *:data-[slot=alert-description]:text-primary-text/90',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight',
        variant === 'default' && 'text-foreground',
        variant === 'destructive' && 'text-error-text',
        variant === 'success' && 'text-success-text',
        variant === 'warning' && 'text-warning-text',
        variant === 'informative' && 'text-primary-text',
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        variant === 'default' && 'text-muted',
        variant === 'destructive' && 'text-error-text',
        variant === 'success' && 'text-success-text',
        variant === 'warning' && 'text-warning-text',
        variant === 'informative' && 'text-primary-text',
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
