import { cn } from '@stellar-ui/shared';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { Check } from 'lucide-react-native';
import * as React from 'react';
import { Platform, Pressable, View } from 'react-native';

const DEFAULT_HIT_SLOP = 24;

const RootComponent = CheckboxPrimitive?.Root;
const IndicatorComponent = CheckboxPrimitive?.Indicator;
const hasPrimitive = typeof RootComponent !== 'undefined';

type CheckboxProps = CheckboxPrimitive.RootProps &
  React.RefAttributes<CheckboxPrimitive.RootRef> & {
    defaultChecked?: boolean;
  };

function Checkbox({
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  ...props
}: CheckboxProps) {
  const [fallbackChecked, setFallbackChecked] = React.useState(
    Boolean(defaultChecked)
  );
  const isControlled = checked !== undefined;
  const resolvedChecked = isControlled ? checked : fallbackChecked;

  const rootClass = cn(
    'peer size-4 shrink-0 rounded-[4px] border border-border bg-surface shadow-xs',
    'data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-white',
    !hasPrimitive && resolvedChecked && 'border-primary bg-primary',
    'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px]',
    'aria-invalid:border-error aria-invalid:ring-error/20',
    disabled && 'opacity-50',
    Platform.select({ web: 'outline-none transition-shadow' }),
    className
  );

  if (!hasPrimitive) {
    const handlePress = () => {
      if (disabled) return;
      const next = !resolvedChecked;
      setFallbackChecked(next);
      onCheckedChange?.(next);
    };
    return (
      <Pressable
        className={rootClass}
        disabled={disabled}
        hitSlop={DEFAULT_HIT_SLOP}
        onPress={handlePress}
        {...(props as React.ComponentProps<typeof Pressable>)}
      >
        {resolvedChecked && (
          <View className="h-full w-full items-center justify-center">
            <Check
              size={14}
              strokeWidth={Platform.OS === 'web' ? 2.5 : 3.5}
              className="text-white"
            />
          </View>
        )}
      </Pressable>
    );
  }

  return (
    <RootComponent
      className={rootClass}
      hitSlop={DEFAULT_HIT_SLOP}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      {...(defaultChecked !== undefined ? { defaultChecked } : {})}
      {...props}
    >
      {IndicatorComponent && (
        <IndicatorComponent className="h-full w-full items-center justify-center">
          <Check
            size={14}
            strokeWidth={Platform.OS === 'web' ? 2.5 : 3.5}
            className="text-white"
          />
        </IndicatorComponent>
      )}
    </RootComponent>
  );
}

export { Checkbox };
