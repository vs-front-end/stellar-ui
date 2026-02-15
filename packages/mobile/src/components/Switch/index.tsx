import { cn } from '@stellar-ui/shared';
import * as SwitchPrimitive from '@rn-primitives/switch';
import * as React from 'react';
import { Platform, Pressable, View } from 'react-native';

const RootComponent = SwitchPrimitive?.Root;
const ThumbComponent = SwitchPrimitive?.Thumb;
const hasPrimitive =
  typeof RootComponent !== 'undefined' && typeof ThumbComponent !== 'undefined';

type SwitchProps = Omit<
  SwitchPrimitive.RootProps,
  'checked' | 'onCheckedChange' | 'defaultChecked'
> &
  React.RefAttributes<SwitchPrimitive.RootRef> & {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
  };

function Switch({
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  ...props
}: SwitchProps) {
  const [fallbackChecked, setFallbackChecked] = React.useState(
    Boolean(defaultChecked)
  );
  const isControlled = checked !== undefined;
  const resolvedChecked = isControlled ? checked : fallbackChecked;

  const rootClass = cn(
    'flex h-[1.15rem] w-8 shrink-0 flex-row items-center rounded-full border border-transparent shadow-xs',
    Platform.select({
      web: 'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px] outline-none transition-all disabled:cursor-not-allowed',
    }),
    resolvedChecked ? 'bg-primary' : 'bg-muted',
    disabled && 'opacity-50',
    className
  );

  const thumbClass = cn(
    'size-4 rounded-full',
    Platform.select({
      web: 'pointer-events-none block ring-0 transition-transform',
    }),
    resolvedChecked ? 'translate-x-3.5 bg-white' : 'translate-x-0 bg-white'
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
        onPress={handlePress}
      >
        <View className={thumbClass} />
      </Pressable>
    );
  }

  const rootProps = {
    className: rootClass,
    checked,
    defaultChecked,
    onCheckedChange,
    disabled,
    ...props,
  };
  return (
    <RootComponent
      {...(rootProps as React.ComponentProps<typeof RootComponent>)}
    >
      <ThumbComponent className={thumbClass} />
    </RootComponent>
  );
}

export { Switch };
