import * as React from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';

import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { cn } from '@stellar-ui-kit/shared';

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
  const inputId = React.useId();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      updateValue(0);
      return;
    }

    const numValue = Number(inputValue);
    if (isNaN(numValue)) return;

    let finalValue = numValue;
    if (min !== undefined && finalValue < min) finalValue = min;
    if (max !== undefined && finalValue > max) finalValue = max;

    updateValue(finalValue);
  };

  const canDecrement = min === undefined || value > min;
  const canIncrement = max === undefined || value < max;

  return (
    <div className={cn('w-full max-w-xs space-y-2', containerClassName)}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <div
        role="group"
        aria-label={label}
        aria-invalid={hasError}
        className={cn(
          'relative inline-flex h-9 w-full min-w-0 items-center overflow-hidden rounded-md border border-border bg-surface shadow-xs transition-[color,box-shadow]',
          'focus-within:border-primary focus-within:ring-primary/50 focus-within:ring-[3px]',
          hasError &&
            'border-error focus-within:border-error focus-within:ring-error/50',
          disabled && 'pointer-events-none cursor-not-allowed opacity-50',
          className
        )}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={handleDecrement}
          disabled={disabled || !canDecrement}
          aria-label="Decrement value"
          className="ml-2 aspect-square h-5 shrink-0 rounded-none border-0 text-muted hover:bg-surface hover:text-foreground"
        >
          <MinusIcon className="size-3" />
          <span className="sr-only">Decrement</span>
        </Button>

        <Input
          id={inputId}
          type="number"
          value={value}
          onChange={handleInputChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          className="w-full grow border-0 bg-transparent px-3 py-2 text-center tabular-nums shadow-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
        />

        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={handleIncrement}
          disabled={disabled || !canIncrement}
          aria-label="Increment value"
          className="mr-2 aspect-square h-5 shrink-0 rounded-none border-0 text-muted hover:bg-surface hover:text-foreground"
        >
          <PlusIcon className="size-3" />
          <span className="sr-only">Increment</span>
        </Button>
      </div>
      {error && (
        <p className="text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export { InputCounter };
