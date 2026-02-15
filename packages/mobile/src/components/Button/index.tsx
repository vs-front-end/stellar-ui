import { cn } from '@stellar-ui/shared';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, Pressable } from 'react-native';
import { Text, TextClassContext } from '../Text';

const buttonVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-2 rounded-md',
    Platform.select({
      web: 'whitespace-nowrap outline-none transition-all focus-visible:border-border focus-visible:ring-border/50 focus-visible:ring-[3px] aria-invalid:ring-error/20 aria-invalid:border-error disabled:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-primary active:bg-primary/90',
          Platform.select({ web: 'hover:opacity-90' })
        ),
        destructive: cn(
          'bg-error active:bg-error/90',
          Platform.select({
            web: 'hover:bg-error/90 focus-visible:ring-error/20',
          })
        ),
        outline: cn(
          'border border-border bg-surface text-foreground active:bg-surface/80',
          Platform.select({ web: 'hover:bg-surface/80' })
        ),
        secondary: cn(
          'bg-primary-soft text-primary-text border border-secondary-text active:bg-primary-soft/80',
          Platform.select({ web: 'hover:bg-primary-soft/80' })
        ),
        ghost: cn(
          'text-foreground active:bg-surface',
          Platform.select({ web: 'hover:bg-surface' })
        ),
        link: '',
      },
      size: {
        default: cn(
          'h-9 px-4 py-2',
          Platform.select({ web: 'has-[>svg]:px-3' })
        ),
        sm: cn(
          'h-8 gap-1.5 rounded-md px-3',
          Platform.select({ web: 'has-[>svg]:px-2.5' })
        ),
        lg: cn(
          'h-10 rounded-md px-6',
          Platform.select({ web: 'has-[>svg]:px-4' })
        ),
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva(
  cn(
    'text-sm font-medium',
    Platform.select({ web: 'pointer-events-none transition-colors' })
  ),
  {
    variants: {
      variant: {
        default: 'text-white',
        destructive: 'text-white',
        outline: cn(
          'text-foreground group-active:text-foreground',
          Platform.select({ web: 'group-hover:text-foreground' })
        ),
        secondary: 'text-primary-text',
        ghost: cn(
          'text-foreground group-active:text-foreground',
          Platform.select({ web: 'group-hover:text-foreground' })
        ),
        link: cn(
          'text-primary group-active:underline',
          Platform.select({
            web: 'underline-offset-4 hover:underline group-hover:underline',
          })
        ),
      },
      size: {
        default: '',
        sm: '',
        lg: '',
        icon: '',
        'icon-sm': '',
        'icon-lg': '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentProps<typeof Pressable> &
  React.RefAttributes<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, children, ...props }: ButtonProps) {
  const content =
    typeof children === 'function' ? (
      children
    ) : (
      <Text variant="default">{children}</Text>
    );

  return (
    <TextClassContext.Provider value={buttonTextVariants({ variant, size })}>
      <Pressable
        className={cn(
          props.disabled && 'opacity-50',
          buttonVariants({ variant, size }),
          className
        )}
        role="button"
        {...props}
      >
        {content}
      </Pressable>
    </TextClassContext.Provider>
  );
}

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
