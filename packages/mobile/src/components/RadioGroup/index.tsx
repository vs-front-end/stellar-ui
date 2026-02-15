import { cn } from '@stellar-ui/shared';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import * as React from 'react';
import { Platform, Pressable, View } from 'react-native';

const RootComponent = RadioGroupPrimitive?.Root;
const ItemComponent = RadioGroupPrimitive?.Item;
const IndicatorComponent = RadioGroupPrimitive?.Indicator;
const hasPrimitive =
  typeof RootComponent !== 'undefined' &&
  typeof ItemComponent !== 'undefined' &&
  typeof IndicatorComponent !== 'undefined';

type RadioGroupContextValue = {
  value: string | undefined;
  onValueChange: (value: string) => void;
};

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(
  null
);

type RadioGroupProps = Omit<
  RadioGroupPrimitive.RootProps,
  'value' | 'onValueChange'
> &
  React.RefAttributes<RadioGroupPrimitive.RootRef> & {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
  };

function RadioGroup({
  className,
  value: controlledValue,
  defaultValue,
  onValueChange,
  ...props
}: RadioGroupProps) {
  const rootClass = cn('gap-3', className);

  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleValueChange = React.useCallback(
    (v: string) => {
      if (!isControlled) setInternalValue(v);
      onValueChange?.(v);
    },
    [isControlled, onValueChange]
  );

  if (!hasPrimitive) {
    return (
      <RadioGroupContext.Provider
        value={{ value, onValueChange: handleValueChange }}
      >
        <View className={rootClass}>{props.children}</View>
      </RadioGroupContext.Provider>
    );
  }

  const rootProps = {
    className: rootClass,
    value: controlledValue,
    defaultValue,
    onValueChange,
    ...props,
  };
  return (
    <RootComponent
      {...(rootProps as React.ComponentProps<typeof RootComponent>)}
    />
  );
}

type RadioGroupItemProps = RadioGroupPrimitive.ItemProps &
  React.RefAttributes<RadioGroupPrimitive.ItemRef>;

function RadioGroupItem({
  className,
  disabled,
  value: itemValue,
  ...props
}: RadioGroupItemProps) {
  const context = React.useContext(RadioGroupContext);
  const itemClass = cn(
    'aspect-square size-4 shrink-0 items-center justify-center rounded-full border border-border bg-surface shadow-xs',
    Platform.select({
      web: 'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px] aria-invalid:ring-error/20 aria-invalid:border-error outline-none transition-all disabled:cursor-not-allowed',
    }),
    disabled && 'opacity-50',
    className
  );

  if (!hasPrimitive && context) {
    const isSelected = context.value === itemValue;
    const handlePress = () => {
      if (disabled || itemValue == null) return;
      context.onValueChange(itemValue);
    };
    return (
      <Pressable
        className={itemClass}
        disabled={disabled}
        onPress={handlePress}
      >
        {isSelected ? (
          <View className="size-2 rounded-full bg-primary" />
        ) : null}
      </Pressable>
    );
  }

  if (!hasPrimitive) {
    return <View className={itemClass} />;
  }

  return (
    <ItemComponent
      className={itemClass}
      disabled={disabled}
      value={itemValue}
      {...props}
    >
      <IndicatorComponent className="size-2 rounded-full bg-primary" />
    </ItemComponent>
  );
}

export { RadioGroup, RadioGroupItem };
