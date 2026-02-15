import { cn } from '@stellar-ui/shared';
import { Minus } from 'lucide-react-native';
import * as React from 'react';
import { Text as RNText, TextInput, View } from 'react-native';
import { Input } from '../Input';

const InputOTPContext = React.createContext<{
  value: string;
  maxLength: number;
  disabled: boolean;
  setValue: (value: string) => void;
  setFocusedIndex: (index: number) => void;
  focusedIndex: number;
  registerRef: (
    index: number,
    ref: React.RefObject<TextInput | null> | null
  ) => void;
  focusSlot: (index: number) => void;
} | null>(null);

interface InputOTPProps {
  maxLength?: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  containerClassName?: string;
  error?: string;
  'aria-invalid'?: boolean;
  children?: React.ReactNode;
}

function InputOTP({
  maxLength = 6,
  value: controlledValue,
  onChange,
  disabled = false,
  containerClassName,
  error,
  'aria-invalid': ariaInvalid,
  children,
}: InputOTPProps) {
  const [internalValue, setInternalValue] = React.useState('');
  const [focusedIndex, setFocusedIndex] = React.useState(-1);
  const slotRefs = React.useRef(
    new Map<number, React.RefObject<TextInput | null>>()
  );
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const hasError = !!error || ariaInvalid;
  const needsWrapper = !!error;

  const setValue = React.useCallback(
    (next: string) => {
      const sanitized = next.replace(/\D/g, '').slice(0, maxLength);
      if (!isControlled) setInternalValue(sanitized);
      onChange?.(sanitized);
    },
    [isControlled, maxLength, onChange]
  );

  const registerRef = React.useCallback(
    (index: number, ref: React.RefObject<TextInput | null> | null) => {
      if (ref) slotRefs.current.set(index, ref);
      else slotRefs.current.delete(index);
    },
    []
  );

  const focusSlot = React.useCallback((index: number) => {
    setTimeout(() => slotRefs.current.get(index)?.current?.focus(), 0);
  }, []);

  const contextValue = React.useMemo(
    () => ({
      value,
      maxLength,
      disabled,
      setValue,
      setFocusedIndex,
      focusedIndex,
      registerRef,
      focusSlot,
    }),
    [
      value,
      maxLength,
      disabled,
      setValue,
      setFocusedIndex,
      focusedIndex,
      registerRef,
      focusSlot,
    ]
  );

  const element = (
    <InputOTPContext.Provider value={contextValue}>
      <View
        aria-invalid={hasError}
        className={cn(
          'flex flex-row items-center gap-2',
          disabled && 'opacity-50',
          containerClassName
        )}
      >
        {children}
      </View>
    </InputOTPContext.Provider>
  );

  if (!needsWrapper) {
    return element;
  }

  return (
    <View className="w-full max-w-xs gap-2">
      {element}
      {error && (
        <RNText accessibilityRole="alert" className="text-xs text-error">
          {error}
        </RNText>
      )}
    </View>
  );
}

function InputOTPGroup({
  className,
  ...props
}: React.ComponentProps<typeof View>) {
  return (
    <View className={cn('flex flex-row items-center', className)} {...props} />
  );
}

interface InputOTPSlotProps {
  index: number;
  className?: string;
}

function InputOTPSlot({ index, className }: InputOTPSlotProps) {
  const context = React.useContext(InputOTPContext);
  const inputRef = React.useRef<TextInput>(null);
  if (!context) return null;
  const {
    value,
    maxLength,
    disabled,
    setValue,
    setFocusedIndex,
    focusedIndex,
    registerRef,
    focusSlot,
  } = context;
  const char = value[index] ?? '';
  const isActive = focusedIndex === index;

  React.useEffect(() => {
    registerRef(index, inputRef);
    return () => registerRef(index, null);
  }, [index, registerRef]);

  const handleChange = (text: string) => {
    const digit = text.replace(/\D/g, '').slice(-1);
    const next =
      value.slice(0, index) +
      digit +
      value.slice(index + 1).slice(0, maxLength - index - 1);
    setValue(next);
    if (digit && index < maxLength - 1) {
      focusSlot(index + 1);
    }
  };

  const handleKeyPress = (e: { nativeEvent: { key: string } }) => {
    if (e.nativeEvent.key === 'Backspace' && !char && index > 0) {
      focusSlot(index - 1);
    }
  };

  return (
    <Input
      ref={inputRef}
      value={char}
      onChangeText={handleChange}
      onKeyPress={handleKeyPress}
      onFocus={() => setFocusedIndex(index)}
      onBlur={() => setFocusedIndex(-1)}
      keyboardType="number-pad"
      maxLength={1}
      autoFocus={false}
      disabled={disabled}
      className={cn(
        'h-9 w-9 items-center justify-center rounded-none border-y border-r border-border bg-surface text-center text-sm text-foreground shadow-xs',
        index === 0 && 'rounded-l-md border-l',
        index === maxLength - 1 && 'rounded-r-md',
        isActive && 'z-10 border-primary ring-2 ring-primary/50',
        className
      )}
    />
  );
}

function InputOTPSeparator(props: React.ComponentProps<typeof View>) {
  return (
    <View role="separator" {...props}>
      <Minus size={16} className="text-muted" />
    </View>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
