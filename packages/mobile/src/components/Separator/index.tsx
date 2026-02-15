import { cn } from '@stellar-ui/shared';
import * as SeparatorPrimitive from '@rn-primitives/separator';
import * as React from 'react';
import { View } from 'react-native';

const RootComponent = SeparatorPrimitive?.Root;
const hasPrimitive = typeof RootComponent !== 'undefined';

type SeparatorProps = SeparatorPrimitive.RootProps &
  React.RefAttributes<SeparatorPrimitive.RootRef>;

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) {
  const rootClass = cn(
    'shrink-0 bg-border',
    orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
    className
  );

  if (!hasPrimitive) {
    return <View className={rootClass} />;
  }

  return (
    <RootComponent
      decorative={decorative}
      orientation={orientation}
      className={rootClass}
      {...props}
    />
  );
}

export { Separator };
