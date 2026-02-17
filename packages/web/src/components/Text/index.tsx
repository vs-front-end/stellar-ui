import React from 'react';
import { cn } from '@stellar-ui-kit/shared';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'li' | 'span';
type StyleVariant = 'lead' | 'muted';

type TextProps = {
  as: Variant;
  styleVariant?: StyleVariant;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<Variant, string> = {
  h1: 'text-4xl font-bold text-foreground lg:text-4xl',
  h2: 'text-3xl font-semibold text-foreground transition-colors',
  h3: 'text-2xl font-semibold text-foreground',
  h4: 'text-xl font-semibold text-foreground',
  p: 'leading-7 text-foreground',
  blockquote: 'border-l-2 border-border italic text-foreground',
  li: 'list-disc text-foreground',
  span: 'text-foreground',
};

const styleVariants: Record<StyleVariant, string> = {
  lead: 'text-xl text-muted',
  muted: 'text-sm text-muted',
};

export const Text: React.FC<TextProps> = ({
  as: Component,
  styleVariant,
  className,
  children,
}) => {
  return (
    <Component
      className={cn(
        variantStyles[Component],
        styleVariant ? styleVariants[styleVariant] : '',
        className
      )}
    >
      {children}
    </Component>
  );
};
