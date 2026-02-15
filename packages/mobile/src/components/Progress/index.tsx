import { cn } from '@stellar-ui/shared';
import * as ProgressPrimitive from '@rn-primitives/progress';
import * as React from 'react';
import { Platform, View } from 'react-native';

const RootComponent = ProgressPrimitive?.Root;
const IndicatorComponent = ProgressPrimitive?.Indicator;
const hasPrimitive =
  typeof RootComponent !== 'undefined' &&
  typeof IndicatorComponent !== 'undefined';

function clamp(value: number | undefined | null): number {
  const n = value ?? 0;
  return Math.min(100, Math.max(0, n));
}

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> &
  React.RefAttributes<ProgressPrimitive.RootRef> & {
    indicatorClassName?: string;
  };

function Progress({
  className,
  value,
  indicatorClassName,
  ...props
}: ProgressProps) {
  const rootClass = cn(
    'relative h-2 w-full overflow-hidden rounded-full bg-primary-soft',
    className
  );
  const widthPercent = clamp(value);

  if (!hasPrimitive) {
    return (
      <View className={rootClass} {...props}>
        <View
          className={cn('h-full bg-primary', indicatorClassName)}
          style={{ width: `${widthPercent}%` }}
        />
      </View>
    );
  }

  return (
    <RootComponent className={rootClass} {...props}>
      <Indicator value={value} className={indicatorClassName} />
    </RootComponent>
  );
}

export { Progress };

const Indicator = Platform.select({
  web: WebIndicator,
  native: NativeIndicator,
  default: NullIndicator,
});

type IndicatorProps = {
  value: number | undefined | null;
  className?: string;
};

function WebIndicator({ value, className }: IndicatorProps) {
  if (Platform.OS !== 'web') {
    return null;
  }

  return (
    <IndicatorComponent
      className={cn(
        'h-full w-full flex-1 bg-primary transition-all',
        className
      )}
      style={{ transform: `translateX(-${100 - clamp(value)}%)` }}
    />
  );
}

function NativeIndicator({ value, className }: IndicatorProps) {
  if (Platform.OS === 'web') {
    return null;
  }

  const widthPercent = clamp(value);

  return (
    <IndicatorComponent asChild>
      <View
        className={cn('h-full bg-primary', className)}
        style={{ width: `${widthPercent}%` }}
      />
    </IndicatorComponent>
  );
}

function NullIndicator(_props: IndicatorProps) {
  return null;
}
