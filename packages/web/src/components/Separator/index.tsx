import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@stellar-ui/shared';

const separatorVariants = cva(
  'shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
  {
    variants: {
      variant: {
        dashed: 'border-border border-dashed data-[orientation=horizontal]:border-t data-[orientation=vertical]:border-l',
        solid: 'bg-border',
      },
    },
    defaultVariants: {
      variant: 'dashed',
    },
  }
);

export interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof separatorVariants> {}

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  variant = 'solid',
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Separator, separatorVariants };
