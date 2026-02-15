import { cn } from '@stellar-ui/shared';
import * as React from 'react';
import { Text as RNText, View } from 'react-native';
import { Input } from '../Input';

interface TextAreaProps extends React.ComponentProps<typeof Input> {
  error?: string;
  containerClassName?: string;
  'aria-invalid'?: boolean;
}

function TextArea({
  className,
  error,
  containerClassName,
  disabled,
  'aria-invalid': ariaInvalid,
  ...props
}: TextAreaProps) {
  const hasError = !!error || ariaInvalid;
  const needsWrapper = !!error || !!containerClassName;

  const textareaElement = (
    <Input
      multiline
      aria-invalid={hasError}
      disabled={disabled}
      className={cn(
        'min-h-16 py-2',
        hasError && 'border-error focus-visible:border-error focus-visible:ring-error/50',
        className
      )}
      {...props}
    />
  );

  if (!needsWrapper) {
    return textareaElement;
  }

  return (
    <View className={cn('w-full max-w-xs gap-2', containerClassName)}>
      {textareaElement}
      {error && (
        <RNText accessibilityRole="alert" className="text-xs text-error">
          {error}
        </RNText>
      )}
    </View>
  );
}

export { TextArea };
