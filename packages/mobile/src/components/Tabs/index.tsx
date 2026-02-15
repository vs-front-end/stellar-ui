import * as TabsPrimitive from '@rn-primitives/tabs';
import * as React from 'react';
import { Platform, Pressable, View } from 'react-native';
import { cn } from '@stellar-ui/shared';
import { Text } from '../Text';
import { TextClassContext } from '../Text';

const RootComponent = TabsPrimitive?.Root;
const ListComponent = TabsPrimitive?.List;
const TriggerComponent = TabsPrimitive?.Trigger;
const ContentComponent = TabsPrimitive?.Content;
const useRootContext = TabsPrimitive?.useRootContext;
const hasPrimitive =
  typeof RootComponent !== 'undefined' &&
  typeof ListComponent !== 'undefined' &&
  typeof TriggerComponent !== 'undefined' &&
  typeof ContentComponent !== 'undefined' &&
  typeof useRootContext === 'function';

const FallbackTabsContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
} | null>(null);

const listClassName = cn(
  'flex flex-row items-center justify-center rounded-lg bg-background p-1.5 gap-1 border border-border',
  Platform.select({ web: 'inline-flex w-fit', native: 'mr-auto' })
);

const triggerClassName = (active: boolean, disabled?: boolean) =>
  cn(
    'flex flex-1 flex-row items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1',
    Platform.select({
      web: 'inline-flex whitespace-nowrap focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:outline-ring cursor-default transition-[color,box-shadow] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
    }),
    !active && 'bg-transparent',
    active && 'bg-surface border-border',
    disabled && 'opacity-50'
  );

interface TabsRootProps {
  className?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children?: React.ReactNode;
}

function Tabs({
  className,
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}: TabsRootProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue ?? ''
  );
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : uncontrolledValue;
  const handleValueChange = React.useCallback(
    (v: string) => {
      if (!isControlled) setUncontrolledValue(v);
      onValueChange?.(v);
    },
    [isControlled, onValueChange]
  );

  if (hasPrimitive) {
    type RootProps = Omit<
      React.ComponentProps<typeof RootComponent>,
      'value' | 'onValueChange' | 'className' | 'children'
    >;
    return (
      <RootComponent
        {...(props as RootProps)}
        className={cn('flex flex-col gap-2', className)}
        value={currentValue}
        onValueChange={handleValueChange}
      >
        {children}
      </RootComponent>
    );
  }

  return (
    <FallbackTabsContext.Provider
      value={{ value: currentValue, onValueChange: handleValueChange }}
    >
      <View className={cn('flex flex-col gap-2', className)}>{children}</View>
    </FallbackTabsContext.Provider>
  );
}

interface TabsListProps {
  className?: string;
  children?: React.ReactNode;
}

function TabsList({ className, children, ...props }: TabsListProps) {
  if (hasPrimitive) {
    return (
      <ListComponent
        className={cn(listClassName, className)}
        {...(props as React.ComponentProps<typeof ListComponent>)}
      >
        {children}
      </ListComponent>
    );
  }
  return <View className={cn(listClassName, className)}>{children}</View>;
}

interface TabsTriggerProps {
  className?: string;
  value: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

function TabsTrigger({
  className,
  value,
  disabled,
  children,
  ...props
}: TabsTriggerProps) {
  const fallbackContext = React.useContext(FallbackTabsContext);

  if (hasPrimitive && typeof useRootContext === 'function') {
    const PrimitiveTabsTrigger = () => {
      const { value: rootValue } = useRootContext();
      const { value: _omit, ...triggerRest } = props as React.ComponentProps<
        typeof TriggerComponent
      >;
      return (
        <TextClassContext.Provider
          value={cn(
            'text-sm font-medium',
            rootValue === value ? 'text-foreground' : 'text-muted'
          )}
        >
          <TriggerComponent
            className={cn(
              triggerClassName(rootValue === value, disabled),
              className
            )}
            value={value}
            disabled={disabled}
            {...triggerRest}
          >
            {children}
          </TriggerComponent>
        </TextClassContext.Provider>
      );
    };
    return <PrimitiveTabsTrigger />;
  }

  if (!fallbackContext) return null;
  const active = fallbackContext.value === value;
  return (
    <Pressable
      className={cn(triggerClassName(active, disabled), className)}
      disabled={disabled}
      onPress={() => fallbackContext.onValueChange(value)}
    >
      <Text
        className={cn(
          'text-sm font-medium',
          active ? 'text-foreground' : 'text-muted'
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
}

interface TabsContentProps {
  className?: string;
  value: string;
  children?: React.ReactNode;
}

function TabsContent({
  className,
  value,
  children,
  ...props
}: TabsContentProps) {
  const fallbackContext = React.useContext(FallbackTabsContext);

  if (hasPrimitive) {
    const { value: _omit, ...contentRest } = props as React.ComponentProps<
      typeof ContentComponent
    >;
    return (
      <ContentComponent
        className={cn(
          Platform.select({ web: 'flex-1 outline-none' }),
          className
        )}
        value={value}
        {...contentRest}
      >
        {children}
      </ContentComponent>
    );
  }

  if (!fallbackContext || fallbackContext.value !== value) return null;
  return (
    <View
      className={cn(Platform.select({ web: 'flex-1 outline-none' }), className)}
    >
      {children}
    </View>
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
