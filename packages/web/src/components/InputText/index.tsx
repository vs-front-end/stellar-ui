import * as React from 'react';
import { LucideIcon } from 'lucide-react';

import { Input } from '../Input';
import { Label } from '../Label';
import { cn } from '@stellar-ui/shared';

interface InputTextProps {
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  error?: string;
  disabled?: boolean;
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
  type = 'text',
  value: controlledValue,
  defaultValue,
  onChange,
  startIcon: StartIcon,
  endIcon: EndIcon,
  error,
  disabled = false,
  className,
  containerClassName,
  id: controlledId,
  name,
  required,
  'aria-invalid': ariaInvalid,
}: InputTextProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || '');
  const generatedId = React.useId();
  const id = controlledId || generatedId;

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const hasError = !!error || ariaInvalid;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <div className={cn('w-full max-w-xs space-y-2', containerClassName)}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </Label>
      )}
      
      <div className="relative">
        {StartIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted peer-disabled:opacity-50">
            <StartIcon className="size-4" />
            <span className="sr-only">Start icon</span>
          </div>
        )}

        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          {...(isControlled
            ? { value }
            : defaultValue !== undefined
              ? { defaultValue }
              : { value })}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          aria-invalid={hasError}
          className={cn(
            StartIcon && 'pl-9',
            EndIcon && 'pr-9',
            hasError && 'peer border-error focus-visible:border-error focus-visible:ring-error/50',
            className
          )}
        />
        {EndIcon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-muted peer-disabled:opacity-50">
            <EndIcon className="size-4" />
            <span className="sr-only">End icon</span>
          </div>
        )}
      </div>

      {error && (
        <p className="text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export { InputText };

