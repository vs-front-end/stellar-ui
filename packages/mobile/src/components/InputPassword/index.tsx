import { cn } from '@stellar-ui/shared';
import { Eye, EyeOff } from 'lucide-react-native';
import * as React from 'react';
import { Text as RNText, View } from 'react-native';

import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

interface InputPasswordProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChangeText?: (value: string) => void;
  startIcon?: React.ComponentType<{ className?: string }>;
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

function InputPassword({
  label = 'Password',
  placeholder = 'Password',
  value: controlledValue,
  defaultValue,
  onChangeText,
  startIcon: StartIcon,
  error,
  disabled = false,
  editable = true,
  className,
  containerClassName,
  id,
  required,
  'aria-invalid': ariaInvalid,
}: InputPasswordProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const [isVisible, setIsVisible] = React.useState(false);
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
          <View className="pointer-events-none absolute inset-y-0 left-0 flex flex-row items-center justify-center pl-3">
            <StartIcon className="text-muted size-4" />
          </View>
        )}
        <Input
          nativeID={id}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
          secureTextEntry={!isVisible}
          editable={editable && !disabled}
          aria-invalid={hasError}
          className={cn(
            StartIcon && 'pl-9',
            'pr-9',
            hasError &&
              'peer border-error focus-visible:border-error focus-visible:ring-error/50',
            className
          )}
        />
        <Button
          variant="ghost"
          size="icon"
          onPress={() => setIsVisible((p) => !p)}
          disabled={disabled}
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          className="text-muted absolute inset-y-0 right-0 rounded-l-none"
        >
          {isVisible ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </Button>
      </View>
      {error && (
        <RNText role="alert" className="text-xs text-error">
          {error}
        </RNText>
      )}
    </View>
  );
}

export { InputPassword };
