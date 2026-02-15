import { cn } from '@stellar-ui/shared';
import * as SelectPrimitive from '@rn-primitives/select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react-native';
import * as React from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { Text } from '../Text';
import { TextClassContext } from '../Text';

export type Option = SelectPrimitive.Option;

const RootComponent = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const hasPrimitive = typeof RootComponent !== 'undefined';

type TriggerRect = {
  top: number;
  left: number;
  width: number;
  height: number;
} | null;

type SelectFallbackContextValue = {
  value: string | undefined;
  selectedLabel: string | undefined;
  onValueChange: (value: string, label?: React.ReactNode) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<unknown>;
  triggerRect: TriggerRect;
  setTriggerRect: (rect: TriggerRect) => void;
};

function getValueAsString(v: string | Option | undefined): string | undefined {
  if (v == null) return undefined;
  return typeof v === 'string' ? v : (v as { value: string }).value;
}

const SelectFallbackContext =
  React.createContext<SelectFallbackContextValue | null>(null);

type SelectRootProps = React.ComponentProps<typeof SelectPrimitive.Root>;

function Select(props: SelectRootProps) {
  if (!hasPrimitive) {
    const triggerRef = React.useRef<unknown>(null);
    const [triggerRect, setTriggerRect] = React.useState<TriggerRect>(null);
    const [value, setValue] = React.useState<string | undefined>(() =>
      getValueAsString(props.defaultValue as string | Option | undefined)
    );
    const [selectedLabel, setSelectedLabel] = React.useState<
      string | undefined
    >();
    const [open, setOpen] = React.useState(false);
    const isControlled = props.value !== undefined;
    const resolvedValue = isControlled
      ? getValueAsString(props.value as string | Option | undefined)
      : value;
    const handleChange = React.useCallback(
      (v: string, label?: React.ReactNode) => {
        if (!isControlled) setValue(v);
        setSelectedLabel(
          typeof label === 'string'
            ? label
            : label != null
              ? String(label)
              : undefined
        );
        (props.onValueChange as ((v: string) => void) | undefined)?.(v);
        setOpen(false);
        setTriggerRect(null);
      },
      [isControlled, props.onValueChange]
    );
    return (
      <SelectFallbackContext.Provider
        value={{
          value: resolvedValue,
          selectedLabel,
          onValueChange: handleChange,
          open,
          setOpen,
          triggerRef,
          triggerRect,
          setTriggerRect,
        }}
      >
        <View className="relative">{props.children}</View>
      </SelectFallbackContext.Provider>
    );
  }
  return <RootComponent {...props} />;
}

function SelectValue({
  ref,
  className,
  placeholder,
  ...props
}: SelectPrimitive.ValueProps &
  React.RefAttributes<SelectPrimitive.ValueRef> & {
    className?: string;
    placeholder?: string;
  }) {
  const fallbackContext = React.useContext(SelectFallbackContext);
  if (!hasPrimitive && fallbackContext) {
    const display =
      fallbackContext.value != null
        ? (fallbackContext.selectedLabel ?? fallbackContext.value)
        : (placeholder ?? '');
    return (
      <Text
        className={cn(
          'flex flex-row items-center gap-2 text-sm',
          !fallbackContext.value ? 'text-muted' : 'text-foreground',
          className
        )}
      >
        {display}
      </Text>
    );
  }
  if (!hasPrimitive) {
    return null;
  }
  const { value } = SelectPrimitive.useRootContext();
  return (
    <SelectPrimitive.Value
      ref={ref}
      className={cn(
        'text-foreground line-clamp-1 flex flex-row items-center gap-2 text-sm',
        !value && 'text-muted',
        className
      )}
      placeholder={placeholder}
      {...props}
    />
  );
}

function SelectTrigger({
  ref,
  className,
  children,
  size = 'default',
  ...props
}: SelectPrimitive.TriggerProps &
  React.RefAttributes<SelectPrimitive.TriggerRef> & {
    children?: React.ReactNode;
    size?: 'default' | 'sm';
  }) {
  const fallbackContext = React.useContext(SelectFallbackContext);
  const setRef = React.useCallback(
    (node: unknown) => {
      if (fallbackContext?.triggerRef) {
        (
          fallbackContext.triggerRef as React.MutableRefObject<unknown>
        ).current = node;
      }
      if (ref) {
        if (typeof ref === 'function') (ref as (n: unknown) => void)(node);
        else (ref as React.MutableRefObject<unknown>).current = node;
      }
    },
    [fallbackContext?.triggerRef, ref]
  );
  if (!hasPrimitive && fallbackContext) {
    return (
      <Pressable
        ref={setRef}
        className={cn(
          'flex h-10 flex-row items-center justify-between gap-2 rounded-md border border-border bg-surface px-3 py-2 shadow-xs',
          size === 'sm' && 'h-8',
          className
        )}
        onPress={() => {
          if (!fallbackContext.open) {
            type Rect = {
              top: number;
              left: number;
              bottom: number;
              width: number;
              height: number;
            };
            const el = fallbackContext.triggerRef?.current as {
              getBoundingClientRect?: () => Rect;
            } | null;
            if (el && typeof el.getBoundingClientRect === 'function') {
              const rect = el.getBoundingClientRect();
              fallbackContext.setTriggerRect({
                top: rect.bottom,
                left: rect.left,
                width: rect.width,
                height: rect.height,
              });
            }
          } else {
            fallbackContext.setTriggerRect(null);
          }
          fallbackContext.setOpen(!fallbackContext.open);
        }}
      >
        {children}
        <ChevronDown size={16} className="text-muted" />
      </Pressable>
    );
  }
  if (!hasPrimitive) {
    return (
      <View
        className={cn(
          'h-10 flex-row items-center justify-between gap-2 rounded-md border border-border bg-surface px-3 py-2',
          size === 'sm' && 'h-8',
          className
        )}
      >
        {children}
        <ChevronDown size={16} className="text-muted" />
      </View>
    );
  }
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex h-10 flex-row items-center justify-between gap-2 rounded-md border border-border bg-surface px-3 py-2 shadow-xs',
        Platform.select({
          web: 'focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px] aria-invalid:ring-error/20 aria-invalid:border-error outline-none transition-[color,box-shadow] disabled:cursor-not-allowed w-fit whitespace-nowrap text-sm',
        }),
        props.disabled && 'opacity-50',
        size === 'sm' && 'h-8 py-2',
        className
      )}
      {...props}
    >
      <>{children}</>
      <ChevronDown className="text-muted size-4" size={16} />
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  portalHost,
  ...props
}: SelectPrimitive.ContentProps &
  React.RefAttributes<SelectPrimitive.ContentRef> & {
    className?: string;
    portalHost?: string;
  }) {
  const fallbackContext = React.useContext(SelectFallbackContext);
  if (!hasPrimitive && fallbackContext) {
    if (!fallbackContext.open) return null;
    const triggerRect = fallbackContext.triggerRect;
    const dropdownStyle =
      Platform.OS === 'web' && triggerRect
        ? ({
            position: 'fixed' as 'absolute',
            top: triggerRect.top + 4,
            left: triggerRect.left,
            minWidth: Math.max(triggerRect.width, 128),
          } as React.ComponentProps<typeof View>['style'])
        : undefined;
    const overlayContent = (
      <>
        <Pressable
          className="fixed inset-0 z-40"
          onPress={() => {
            fallbackContext.setTriggerRect(null);
            fallbackContext.setOpen(false);
          }}
        />
        <View
          className={cn(
            'z-50 rounded-md border border-border bg-surface p-1 shadow-md',
            Platform.OS === 'web' && 'max-h-52 overflow-y-auto',
            !dropdownStyle &&
              'absolute top-full left-0 right-0 mt-1 min-w-[8rem]',
            className
          )}
          style={dropdownStyle}
        >
          {children}
        </View>
      </>
    );
    if (Platform.OS === 'web') {
      try {
        const ReactDOM = require('react-dom');
        const doc = (globalThis as { document?: { body: unknown } }).document;
        if (doc?.body) {
          return ReactDOM.createPortal(overlayContent, doc.body);
        }
      } catch {
        // no-op
      }
      return overlayContent;
    }
    return (
      <>
        <Pressable
          className="absolute inset-0 z-40"
          onPress={() => fallbackContext.setOpen(false)}
        />
        <View
          className={cn(
            'absolute top-full left-0 right-0 z-50 mt-1 min-w-[8rem] rounded-md border border-border bg-surface p-1 shadow-md',
            className
          )}
        >
          {children}
        </View>
      </>
    );
  }
  if (!hasPrimitive) {
    return null;
  }
  return (
    <SelectPrimitive.Portal hostName={portalHost}>
      <SelectPrimitive.Overlay
        style={Platform.select({ native: StyleSheet.absoluteFill })}
      >
        <TextClassContext.Provider value="text-foreground">
          <SelectPrimitive.Content
            className={cn(
              'relative z-50 min-w-[8rem] rounded-md border border-border bg-surface shadow-md',
              Platform.select({
                web: 'max-h-52 overflow-y-auto overflow-x-hidden',
                native: 'p-1',
              }),
              position === 'popper' &&
                Platform.select({
                  web: cn(
                    props.side === 'bottom' && 'translate-y-1',
                    props.side === 'top' && '-translate-y-1'
                  ),
                }),
              className
            )}
            position={position}
            {...props}
          >
            <SelectScrollUpButton />
            <SelectPrimitive.Viewport
              className={cn(
                'p-1',
                position === 'popper' &&
                  Platform.select({
                    web: 'h-[var(--radix-select-trigger-height)] min-w-[var(--radix-select-trigger-width)] w-full',
                  })
              )}
            >
              {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton />
          </SelectPrimitive.Content>
        </TextClassContext.Provider>
      </SelectPrimitive.Overlay>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.LabelProps & React.RefAttributes<SelectPrimitive.LabelRef>) {
  if (!hasPrimitive) {
    return null;
  }
  return (
    <SelectPrimitive.Label
      className={cn('text-muted px-2 py-2 text-xs', className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  value: itemValue,
  disabled,
  ...props
}: SelectPrimitive.ItemProps & React.RefAttributes<SelectPrimitive.ItemRef>) {
  const fallbackContext = React.useContext(SelectFallbackContext);
  if (!hasPrimitive && fallbackContext) {
    const isSelected = fallbackContext.value === itemValue;
    return (
      <Pressable
        className={cn(
          'relative flex w-full flex-row items-center gap-2 rounded-sm py-2 pl-2 pr-8',
          Platform.select({ web: 'cursor-default outline-none' }),
          disabled && 'opacity-50',
          className
        )}
        disabled={disabled}
        onPress={() => {
          if (disabled || itemValue == null) return;
          const label = typeof children === 'function' ? undefined : children;
          fallbackContext.onValueChange(itemValue, label);
        }}
      >
        <View className="absolute right-2 flex size-3.5 items-center justify-center">
          {isSelected ? <Check size={16} className="text-foreground" /> : null}
        </View>
        <Text className="text-foreground select-none text-sm">
          {typeof children === 'function' ? null : children}
        </Text>
      </Pressable>
    );
  }
  if (!hasPrimitive) {
    return null;
  }
  return (
    <SelectPrimitive.Item
      className={cn(
        'active:bg-primary-soft group relative flex w-full flex-row items-center gap-2 rounded-sm py-2 pl-2 pr-8',
        Platform.select({
          web: 'focus:bg-primary-soft focus:text-primary cursor-default outline-none data-[disabled]:pointer-events-none',
        }),
        disabled && 'opacity-50',
        className
      )}
      value={itemValue}
      disabled={disabled}
      {...props}
    >
      <View className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="text-foreground size-4" size={16} />
        </SelectPrimitive.ItemIndicator>
      </View>
      <SelectPrimitive.ItemText className="text-foreground group-active:text-primary select-none text-sm" />
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.SeparatorProps &
  React.RefAttributes<SelectPrimitive.SeparatorRef>) {
  if (!hasPrimitive) {
    return null;
  }
  return (
    <SelectPrimitive.Separator
      className={cn(
        'bg-border -mx-1 my-1 h-px',
        Platform.select({ web: 'pointer-events-none' }),
        className
      )}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  if (Platform.OS !== 'web' || !hasPrimitive) {
    return null;
  }
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className
      )}
      {...props}
    >
      <ChevronUp size={16} className="text-muted" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  if (Platform.OS !== 'web' || !hasPrimitive) {
    return null;
  }
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className
      )}
      {...props}
    >
      <ChevronDown size={16} className="text-muted" />
    </SelectPrimitive.ScrollDownButton>
  );
}

function NativeSelectScrollView({
  className,
  ...props
}: React.ComponentProps<typeof ScrollView>) {
  if (Platform.OS === 'web') {
    return <>{props.children}</>;
  }
  return <ScrollView className={cn('max-h-52', className)} {...props} />;
}

export {
  NativeSelectScrollView,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
