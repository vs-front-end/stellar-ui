import { cn } from '@stellar-ui/shared';
import * as Slot from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Text as RNText, type Role } from 'react-native';

const textVariants = cva('text-foreground text-base', {
  variants: {
    variant: {
      default: '',
      h1: 'text-4xl font-bold text-foreground',
      h2: 'text-3xl font-semibold text-foreground',
      h3: 'text-2xl font-semibold text-foreground',
      h4: 'text-xl font-semibold text-foreground',
      p: 'leading-7 text-foreground',
      blockquote: 'border-l-2 border-border italic text-foreground',
      code: 'bg-primary-soft rounded font-mono text-sm text-foreground',
      lead: 'text-xl text-muted',
      large: 'text-lg font-semibold text-foreground',
      small: 'text-sm text-foreground',
      muted: 'text-sm text-muted',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type TextVariantProps = VariantProps<typeof textVariants>;

type TextVariant = NonNullable<TextVariantProps['variant']>;

const ROLE: Partial<Record<TextVariant, Role>> = {
  h1: 'heading',
  h2: 'heading',
  h3: 'heading',
  h4: 'heading',
  blockquote: 'blockquote' as Role,
  code: 'code' as Role,
};

const ARIA_LEVEL: Partial<Record<TextVariant, string>> = {
  h1: '1',
  h2: '2',
  h3: '3',
  h4: '4',
};

const TextClassContext = React.createContext<string | undefined>(undefined);

function Text({
  className,
  asChild = false,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof RNText> &
  TextVariantProps &
  React.RefAttributes<RNText> & {
    asChild?: boolean;
  }) {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;

  return (
    <Component
      className={cn(textVariants({ variant }), textClass, className)}
      role={variant ? ROLE[variant] : undefined}
      aria-level={variant ? ARIA_LEVEL[variant] : undefined}
      {...props}
    />
  );
}

export { Text, TextClassContext };
