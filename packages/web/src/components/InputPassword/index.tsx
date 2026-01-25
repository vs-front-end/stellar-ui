import { useId, useState } from 'react';
import { EyeIcon, EyeOffIcon, type LucideIcon } from 'lucide-react';

import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { cn } from '@stellar-ui/shared';

interface InputPasswordProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  startIcon?: LucideIcon;
  error?: string;
  disabled?: boolean;
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
  onChange,
  startIcon: StartIcon,
  error,
  disabled = false,
  className,
  containerClassName,
  id: controlledId,
  name,
  required,
  'aria-invalid': ariaInvalid,
}: InputPasswordProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [isVisible, setIsVisible] = useState(false);
  const generatedId = useId();
  const id = controlledId || generatedId;

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const hasError = !!error || ariaInvalid;

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

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
          type={isVisible ? 'text' : 'password'}
          placeholder={placeholder}
          {...(isControlled ? { value } : { defaultValue })}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          aria-invalid={hasError}
          className={cn(
            StartIcon && 'pl-9',
            'pr-9',
            hasError && 'peer border-error focus-visible:border-error focus-visible:ring-error/50',
            className
          )}
        />
        <Button
          variant="ghost"
          size="icon"
          type="button"
          onClick={toggleVisibility}
          disabled={disabled}
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          className="text-muted focus-visible:ring-primary/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
        >
          {isVisible ? <EyeOffIcon className="size-4" /> : <EyeIcon className="size-4" />}
          <span className="sr-only">{isVisible ? 'Hide password' : 'Show password'}</span>
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

export { InputPassword };
