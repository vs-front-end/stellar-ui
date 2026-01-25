import { useEffect, useId, useState } from 'react';
import { LoaderCircleIcon, SearchIcon } from 'lucide-react';

import { Input } from '../Input';
import { Label } from '../Label';

interface InputSearchProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  isLoading?: boolean;
  className?: string;
}

function InputSearch({
  label,
  placeholder = 'Search...',
  value: controlledValue,
  onChange,
  isLoading: controlledIsLoading,
  className,
}: InputSearchProps) {
  const [internalValue, setInternalValue] = useState('');
  const [internalIsLoading, setInternalIsLoading] = useState(false);

  const id = useId();
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const isLoading =
    controlledIsLoading !== undefined ? controlledIsLoading : internalIsLoading;

  useEffect(() => {
    if (value && !isControlled) {
      setInternalIsLoading(true);

      const timer = setTimeout(() => {
        setInternalIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }

    if (!isControlled) {
      setInternalIsLoading(false);
    }

    return undefined;
  }, [value, isControlled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <div className={`w-full max-w-xs space-y-2 ${className || ''}`}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted peer-disabled:opacity-50">
          <SearchIcon className="size-3.5" />
          <span className="sr-only">Search</span>
        </div>

        <Input
          id={id}
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="peer px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
        />

        {isLoading && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-muted peer-disabled:opacity-50">
            <LoaderCircleIcon className="size-4 animate-spin" />
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}

export { InputSearch };
