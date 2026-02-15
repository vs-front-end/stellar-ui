import { cn } from '@stellar-ui/shared';
import * as React from 'react';
import { Platform, TextInput, type TextInputProps } from 'react-native';

type InputProps = TextInputProps &
  React.RefAttributes<TextInput> & {
    disabled?: boolean;
  };

const Input = React.forwardRef<TextInput, InputProps>(function Input(
  { className, editable: editableProp, disabled, ...props },
  ref
) {
  const editable = disabled === true ? false : editableProp;
  return (
    <TextInput
      ref={ref}
      {...(disabled && { style: { pointerEvents: 'none' as const } })}
      className={cn(
        'h-9 w-full min-w-0 rounded-md border border-border bg-surface px-3 py-1 text-base text-foreground shadow-xs',
        'placeholder:text-muted',
        'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px]',
        'disabled:opacity-50',
        'aria-invalid:border-error aria-invalid:ring-error/20',
        'aria-invalid:focus-visible:border-error aria-invalid:focus-visible:ring-error/50',
        (editable === false || disabled) &&
          cn(
            'opacity-50',
            Platform.select({
              web: 'disabled:pointer-events-none disabled:cursor-not-allowed',
            })
          ),
        Platform.select({
          web: 'outline-none transition-[color,box-shadow] md:text-sm',
          native: 'placeholder:text-muted/50',
        }),
        className
      )}
      editable={editable}
      {...(!editable && { focusable: false })}
      {...props}
    />
  );
});

export { Input };
