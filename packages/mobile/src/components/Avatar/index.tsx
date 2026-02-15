import * as React from 'react';
import { Image, Text as RNText, View, type ViewProps } from 'react-native';
import * as AvatarPrimitive from '@rn-primitives/avatar';

import { cn } from '@stellar-ui/shared';

const RootComponent = AvatarPrimitive?.Root;
const ImageComponent = AvatarPrimitive?.Image;
const FallbackComponent = AvatarPrimitive?.Fallback;

function Avatar({
  className,
  children,
  ...props
}: AvatarPrimitive.RootProps & React.RefAttributes<AvatarPrimitive.RootRef>) {
  const containerClass = cn(
    'relative flex size-8 shrink-0 overflow-hidden rounded-full',
    className
  );
  if (!RootComponent) {
    return (
      <View className={containerClass} {...(props as ViewProps)}>
        {children}
      </View>
    );
  }
  return (
    <RootComponent className={containerClass} {...props}>
      {children}
    </RootComponent>
  );
}

function AvatarImage({
  className,
  src,
  ...props
}: AvatarPrimitive.ImageProps & React.RefAttributes<AvatarPrimitive.ImageRef>) {
  const imageClass = cn('aspect-square size-full', className);
  if (!ImageComponent) {
    if (!src) return <View className={imageClass} />;
    return (
      <Image source={{ uri: src }} className={imageClass} resizeMode="cover" />
    );
  }
  return <ImageComponent className={imageClass} src={src} {...props} />;
}

function AvatarFallback({
  className,
  children,
  ...props
}: AvatarPrimitive.FallbackProps &
  React.RefAttributes<AvatarPrimitive.FallbackRef>) {
  const fallbackClass = cn(
    'bg-primary text-white flex size-full flex-row items-center justify-center rounded-full text-sm font-medium',
    className
  );
  if (!FallbackComponent) {
    const textContent =
      typeof children === 'string' || typeof children === 'number' ? (
        <RNText className="text-white text-sm font-medium">{children}</RNText>
      ) : (
        children
      );
    return (
      <View className={fallbackClass} {...(props as ViewProps)}>
        {textContent}
      </View>
    );
  }
  return (
    <FallbackComponent className={fallbackClass} {...props}>
      {children}
    </FallbackComponent>
  );
}

export { Avatar, AvatarFallback, AvatarImage };
