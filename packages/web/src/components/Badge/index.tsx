import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@stellar-ui/shared';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium leading-tight h-fit w-fit whitespace-nowrap shrink-0 [&>svg]:size-2.5 [&>svg]:shrink-0 [&>svg]:pointer-events-none [&>svg]:text-current gap-1 focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px] aria-invalid:ring-error/20 aria-invalid:border-error transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-white [a&]:hover:bg-primary/90',
        secondary:
          'border-secondary-text bg-secondary-soft text-secondary-text [&>svg]:text-secondary-text [a&]:hover:bg-secondary-soft/90',
        destructive:
          'border-error-text bg-error-soft text-error-text [&>svg]:text-error-text [a&]:hover:bg-error-soft/90 focus-visible:ring-error/20',
        outline:
          'border-border text-foreground bg-surface [a&]:hover:bg-surface/80',
        success:
          'border-success-text bg-success-soft text-success-text [&>svg]:text-success-text [a&]:hover:bg-success-soft/90',
        warning:
          'border-warning-text bg-warning-soft text-warning-text [&>svg]:text-warning-text [a&]:hover:bg-warning-soft/90',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
