import { cn } from '@stellar-ui/shared';
import { Minus, Plus } from 'lucide-react-native';
import * as React from 'react';
import { Text as RNText, View } from 'react-native';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

interface InputCounterProps {
  label?: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
  'aria-invalid'?: boolean;
}

function InputCounter({
  label,
  value: controlledValue,
  defaultValue = 0,
  min,
  max,
  step = 1,
  onChange,
  error,
  disabled = false,
  className,
  containerClassName,
  'aria-invalid': ariaInvalid,
}: InputCounterProps) {
  const inputId = React.useId?.() ?? 'input-counter';

  const [internalValue, setInternalValue] = React.useState(defaultValue);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const hasError = !!error || ariaInvalid;

  const updateValue = (newValue: number) => {
    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleIncrement = () => {
    const newValue = value + step;
    if (max !== undefined && newValue > max) return;
    updateValue(newValue);
  };

  const handleDecrement = () => {
    const newValue = value - step;
    if (min !== undefined && newValue < min) return;
    updateValue(newValue);
  };

  const handleInputChange = (text: string) => {
    if (text === '') {
      updateValue(0);
      return;
    }
    const numValue = Number(text);
    if (isNaN(numValue)) return;
    let finalValue = numValue;
    if (min !== undefined && finalValue < min) finalValue = min;
    if (max !== undefined && finalValue > max) finalValue = max;
    updateValue(finalValue);
  };

  const canDecrement = min === undefined || value > min;
  const canIncrement = max === undefined || value < max;

  return (
    <View className={cn('w-full max-w-xs gap-2', containerClassName)}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <View
        accessibilityRole="none"
        aria-invalid={hasError}
        className={cn(
          'relative flex h-9 w-full min-w-0 flex-row items-center overflow-hidden rounded-md border border-border bg-surface shadow-xs',
          'focus-within:border-primary focus-within:ring-primary/50 focus-within:ring-[3px]',
          hasError &&
            'border-error focus-within:border-error focus-within:ring-error/50',
          disabled && 'opacity-50',
          className
        )}
      >
        <Button
          variant="ghost"
          size="icon-sm"
          onPress={handleDecrement}
          disabled={disabled || !canDecrement}
          accessibilityLabel="Decrement value"
          className="ml-2 aspect-square h-5 shrink-0 rounded-none border-0"
        >
          <Minus size={12} className="text-muted" />
        </Button>

        <Input
          nativeID={inputId}
          value={String(value)}
          onChangeText={handleInputChange}
          keyboardType="number-pad"
          editable={!disabled}
          disabled={disabled}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-center text-base tabular-nums shadow-none focus-visible:border-0 focus-visible:ring-0 caret-foreground"
        />

        <Button
          variant="ghost"
          size="icon-sm"
          onPress={handleIncrement}
          disabled={disabled || !canIncrement}
          accessibilityLabel="Increment value"
          className="mr-2 aspect-square h-5 shrink-0 rounded-none border-0"
        >
          <Plus size={12} className="text-muted" />
        </Button>
      </View>
      {error && (
        <RNText accessibilityRole="alert" className="text-xs text-error">
          {error}
        </RNText>
      )}
    </View>
  );
}

export { InputCounter };
