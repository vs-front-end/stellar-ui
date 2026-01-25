import * as React from 'react';

import { cn } from '@stellar-ui/shared';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-9 w-full min-w-0 rounded-md border border-border bg-surface px-3 py-1 text-base text-foreground shadow-xs transition-[color,box-shadow] outline-none',
        'placeholder:text-muted',
        'selection:bg-primary selection:text-white',
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
        'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px]',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'md:text-sm',
        'aria-invalid:border-error',
        'aria-invalid:ring-error/20',
        'aria-invalid:focus-visible:border-error',
        'aria-invalid:focus-visible:ring-error/50',
        className
      )}
      {...props}
    />
  );
}

export { Input };
