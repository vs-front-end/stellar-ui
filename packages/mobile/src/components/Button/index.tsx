import { TextClassContext } from '../Text';
import { cn } from '@stellar-ui/shared';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, Pressable } from 'react-native';

const buttonVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-2 rounded-md shadow-none',
    Platform.select({
      web: "focus-visible:border-border focus-visible:ring-border/50 aria-invalid:ring-error/20 aria-invalid:border-error whitespace-nowrap outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    })
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-primary shadow-sm shadow-black/5',
          Platform.select({ web: 'hover:opacity-90' })
        ),
        destructive: cn(
          'bg-error active:bg-error/90 shadow-sm shadow-black/5',
          Platform.select({
            web: 'hover:bg-error/90 focus-visible:ring-error/20',
          })
        ),
        outline: cn(
          'border border-border bg-surface active:bg-surface/80 border shadow-sm shadow-black/5',
          Platform.select({
            web: 'hover:bg-surface/80',
          })
        ),
        secondary: cn(
          'bg-primary-soft active:bg-primary-soft/80 shadow-sm shadow-black/5',
          Platform.select({ web: 'hover:bg-primary-soft/80' })
        ),
        ghost: cn(
          'active:bg-surface',
          Platform.select({ web: 'hover:bg-surface' })
        ),
        link: '',
      },
      size: {
        default: cn(
          'h-10 px-4 py-2 sm:h-9',
          Platform.select({ web: 'has-[>svg]:px-3' })
        ),
        sm: cn(
          'h-9 gap-1.5 rounded-md px-3 sm:h-8',
          Platform.select({ web: 'has-[>svg]:px-2.5' })
        ),
        lg: cn(
          'h-11 rounded-md px-6 sm:h-10',
          Platform.select({ web: 'has-[>svg]:px-4' })
        ),
        icon: 'h-10 w-10 sm:h-9 sm:w-9',
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
    'text-foreground text-sm font-medium',
    Platform.select({ web: 'pointer-events-none transition-colors' })
  ),
  {
    variants: {
      variant: {
        default: 'text-white',
        destructive: 'text-white',
        outline: cn(
          'group-active:text-foreground',
          Platform.select({ web: 'group-hover:text-foreground' })
        ),
        secondary: 'text-primary-text',
        ghost: 'group-active:text-foreground',
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

function Button({ className, variant, size, ...props }: ButtonProps) {
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
      />
    </TextClassContext.Provider>
  );
}

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
