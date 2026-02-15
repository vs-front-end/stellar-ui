import { cn } from '@stellar-ui/shared';
import * as React from 'react';
import { Text as RNText, View } from 'react-native';

import { Input } from '../Input';
import { Label } from '../Label';

interface InputTextProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChangeText?: (value: string) => void;
  startIcon?: React.ComponentType<{ className?: string; size?: number }>;
  endIcon?: React.ComponentType<{ className?: string; size?: number }>;
  error?: string;
  disabled?: boolean;
  editable?: boolean;
  className?: string;
  containerClassName?: string;
  id?: string;
  name?: string;
  required?: boolean;
  'aria-invalid'?: boolean;
}

function InputText({
  label,
  placeholder,
  value: controlledValue,
  defaultValue,
  onChangeText,
  startIcon: StartIcon,
  endIcon: EndIcon,
  error,
  disabled = false,
  editable = true,
  className,
  containerClassName,
  id,
  required,
  'aria-invalid': ariaInvalid,
}: InputTextProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const hasError = !!error || ariaInvalid;

  const handleChange = (text: string) => {
    if (isControlled) {
      onChangeText?.(text);
    } else {
      setInternalValue(text);
    }
  };

  return (
    <View className={cn('w-full max-w-xs gap-2', containerClassName)}>
      {label && (
        <Label>
          {label}
          {required && <RNText className="text-error ml-1">*</RNText>}
        </Label>
      )}
      <View className="relative">
        {StartIcon && (
          <View className="pointer-events-none absolute inset-y-0 left-0 w-9 flex flex-row items-center justify-center">
            <View className="size-4 items-center justify-center">
              <StartIcon className="text-muted" size={16} />
            </View>
          </View>
        )}
        <Input
          nativeID={id}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
          editable={editable && !disabled}
          disabled={disabled}
          aria-invalid={hasError}
          className={cn(
            StartIcon && 'pl-9',
            EndIcon && 'pr-9',
            hasError &&
              'peer border-error focus-visible:border-error focus-visible:ring-error/50',
            className
          )}
        />
        {EndIcon && (
          <View className="pointer-events-none absolute inset-y-0 right-0 w-9 flex flex-row items-center justify-center">
            <View className="size-4 items-center justify-center">
              <EndIcon className="text-muted" size={16} />
            </View>
          </View>
        )}
      </View>
      {error && (
        <RNText role="alert" className="text-xs text-error">
          {error}
        </RNText>
      )}
    </View>
  );
}

export { InputText };
