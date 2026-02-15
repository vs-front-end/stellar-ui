import { cn } from '@stellar-ui/shared';
import { LoaderCircle, Search } from 'lucide-react-native';
import * as React from 'react';
import { View } from 'react-native';

import { Input } from '../Input';
import { Label } from '../Label';

interface InputSearchProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  isLoading?: boolean;
  className?: string;
  containerClassName?: string;
}

function InputSearch({
  label,
  placeholder = 'Search...',
  value: controlledValue,
  onChangeText,
  isLoading: controlledIsLoading,
  className,
  containerClassName,
}: InputSearchProps) {
  const [internalValue, setInternalValue] = React.useState('');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const isLoading =
    controlledIsLoading !== undefined ? controlledIsLoading : false;

  const handleChange = (text: string) => {
    if (isControlled) {
      onChangeText?.(text);
    } else {
      setInternalValue(text);
    }
  };

  return (
    <View className={cn('w-full max-w-xs gap-2', containerClassName)}>
      {label && <Label>{label}</Label>}
      <View className="relative">
        <View className="pointer-events-none absolute inset-y-0 left-0 flex flex-row items-center justify-center pl-3">
          <Search className="text-muted size-3.5" />
        </View>
        <Input
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
          className={cn('peer pl-9', isLoading && 'pr-9', className)}
        />
        {isLoading && (
          <View className="pointer-events-none absolute inset-y-0 right-0 flex flex-row items-center justify-center pr-3">
            <LoaderCircle className="text-muted size-4 animate-spin" />
          </View>
        )}
      </View>
    </View>
  );
}

export { InputSearch };
