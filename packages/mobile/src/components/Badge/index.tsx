import { cn } from '@stellar-ui/shared';
import * as Slot from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Platform, Text as RNText, View, type ViewProps } from 'react-native';

import { TextClassContext } from '../Text';

const badgeVariants = cva(
  cn(
    'border-border shrink-0 flex flex-row items-center justify-center gap-1 overflow-hidden rounded-full border px-2 py-0.5',
    Platform.select({
      web: 'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px] aria-invalid:ring-error/20 aria-invalid:border-error w-fit whitespace-nowrap [&>svg]:pointer-events-none [&>svg]:size-2.5',
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-primary border-transparent',
          Platform.select({ web: '[a&]:hover:bg-primary/90' })
        ),
        secondary: cn(
          'border-secondary-text bg-secondary-soft',
          Platform.select({ web: '[a&]:hover:bg-secondary-soft/90' })
        ),
        destructive: cn(
          'border-error-text bg-error-soft',
          Platform.select({ web: '[a&]:hover:bg-error-soft/90' })
        ),
        outline: 'border-border bg-surface text-foreground',
        success: cn(
          'border-success-text bg-success-soft',
          Platform.select({ web: '[a&]:hover:bg-success-soft/90' })
        ),
        warning: cn(
          'border-warning-text bg-warning-soft',
          Platform.select({ web: '[a&]:hover:bg-warning-soft/90' })
        ),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const badgeTextVariants = cva('text-xs font-medium', {
  variants: {
    variant: {
      default: 'text-white',
      secondary: 'text-secondary-text',
      destructive: 'text-error-text',
      outline: 'text-foreground',
      success: 'text-success-text',
      warning: 'text-warning-text',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BadgeProps = ViewProps &
  React.RefAttributes<View> & {
    asChild?: boolean;
    children?: React.ReactNode;
  } & VariantProps<typeof badgeVariants>;

function Badge({
  className,
  variant = 'default',
  asChild = false,
  children,
  ...props
}: BadgeProps) {
  const Component = asChild ? Slot.View : View;
  const textClass = badgeTextVariants({ variant });

  const content =
    typeof children === 'string' || typeof children === 'number' ? (
      <RNText className={textClass}>{children}</RNText>
    ) : (
      children
    );

  return (
    <TextClassContext.Provider value={textClass}>
      <Component
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        {content}
      </Component>
    </TextClassContext.Provider>
  );
}

export { Badge, badgeTextVariants, badgeVariants };
export type { BadgeProps };
