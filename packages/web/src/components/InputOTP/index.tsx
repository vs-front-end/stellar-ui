import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { MinusIcon } from 'lucide-react';

import { cn } from '@stellar-ui/shared';

type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput> & {
  containerClassName?: string;
  error?: string;
  'aria-invalid'?: boolean;
  className?: string;
};

function InputOTP({
  className,
  containerClassName,
  error,
  'aria-invalid': ariaInvalid,
  ...props
}: InputOTPProps) {
  const hasError = !!error || ariaInvalid;
  const needsWrapper = !!error;

  const otpElement = (
    <OTPInput
      data-slot="input-otp"
      aria-invalid={hasError}
      containerClassName={cn(
        'flex items-center gap-2 has-disabled:opacity-50',
        containerClassName
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  );

  if (!needsWrapper) {
    return otpElement;
  }

  return (
    <div className="w-full max-w-xs space-y-2">
      {otpElement}
      {error && (
        <p className="text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn('flex items-center', className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        'relative flex h-9 w-9 items-center justify-center border-y border-r border-border bg-surface text-sm text-foreground shadow-xs transition-all outline-none',
        'first:rounded-l-md first:border-l last:rounded-r-md',
        'data-[active=true]:z-10 data-[active=true]:border-primary data-[active=true]:ring-primary/50 data-[active=true]:ring-[3px]',
        'aria-invalid:border-error aria-invalid:ring-error/20',
        'data-[active=true]:aria-invalid:border-error data-[active=true]:aria-invalid:ring-error/50',
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon className="text-muted" />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
