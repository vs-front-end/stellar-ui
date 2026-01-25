import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@stellar-ui/shared';

const toggleVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-foreground outline-none transition-[color,box-shadow] hover:bg-primary-soft hover:text-primary hover:[&_svg]:text-primary data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:[&_svg]:text-white focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-error/20 aria-invalid:border-error aria-invalid:focus-visible:border-error aria-invalid:focus-visible:ring-error/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-border bg-transparent shadow-xs hover:bg-primary-soft hover:text-primary',
      },
      size: {
        default: 'h-9 min-w-9 px-2',
        sm: 'h-8 min-w-8 px-1.5',
        lg: 'h-10 min-w-10 px-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
