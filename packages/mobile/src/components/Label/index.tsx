import { cn } from '@stellar-ui/shared';
import * as LabelPrimitive from '@rn-primitives/label';
import * as React from 'react';
import { Text as RNText, View } from 'react-native';

const RootComponent = LabelPrimitive?.Root;
const TextComponent = LabelPrimitive?.Text;

function Label({
  className,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  disabled,
  children,
  ref,
  ..._rest
}: LabelPrimitive.TextProps & React.RefAttributes<LabelPrimitive.TextRef>) {
  void _rest;
  const rootClass = cn(
    'flex flex-row items-center gap-2 text-sm font-medium leading-none text-foreground select-none',
    'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
    'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
    disabled && 'opacity-50',
    className
  );

  const textClass = cn(
    'text-foreground text-sm font-medium leading-none',
    className
  );

  const wrapText = (node: React.ReactNode) =>
    typeof node === 'string' || typeof node === 'number' ? (
      <RNText className={textClass}>{node}</RNText>
    ) : (
      node
    );

  const content = React.Children.map(children, wrapText) ?? wrapText(children);

  if (!RootComponent || !TextComponent) {
    return <View className={rootClass}>{content}</View>;
  }

  return (
    <RootComponent
      ref={ref}
      className={rootClass}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
    >
      {content}
    </RootComponent>
  );
}

export { Label };
