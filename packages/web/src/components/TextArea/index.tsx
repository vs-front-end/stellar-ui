import * as React from 'react';

import { cn } from '@stellar-ui-kit/shared';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  error?: string;
  containerClassName?: string;
}

function TextArea({
  className,
  error,
  containerClassName,
  'aria-invalid': ariaInvalid,
  ...props
}: TextareaProps) {
  const hasError = !!error || ariaInvalid;
  const needsWrapper = !!error || !!containerClassName;

  const textareaElement = (
    <textarea
      data-slot="textarea"
      aria-invalid={hasError}
      className={cn(
        'flex min-h-16 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-foreground shadow-xs transition-[color,box-shadow] outline-none',
        'placeholder:text-muted',
        'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px]',
        hasError &&
          'border-error focus-visible:border-error focus-visible:ring-error/50',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'md:text-sm',
        'field-sizing-content',
        className
      )}
      {...props}
    />
  );

  if (!needsWrapper) {
    return textareaElement;
  }

  return (
    <div className={cn('w-full max-w-xs space-y-2', containerClassName)}>
      {textareaElement}
      {error && (
        <p className="text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export { TextArea };
