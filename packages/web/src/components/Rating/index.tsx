import * as React from 'react';
import { StarIcon } from 'lucide-react';

import { cn } from '@stellar-ui-kit/shared';

interface RatingProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  max?: number;
  readOnly?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  containerClassName?: string;
  'aria-label'?: string;
}

function Rating({
  value: controlledValue,
  defaultValue = 0,
  onChange,
  max = 5,
  readOnly = false,
  disabled = false,
  size = 'md',
  className,
  containerClassName,
  'aria-label': ariaLabel,
}: RatingProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);
  const ratingId = React.useId();

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const displayValue = hoverValue !== null ? hoverValue : value;
  const isInteractive = !readOnly && !disabled;

  const sizeClasses = {
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-6',
  };

  const handleClick = (newValue: number) => {
    if (!isInteractive) return;

    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleMouseEnter = (starValue: number) => {
    if (!isInteractive) return;
    setHoverValue(starValue);
  };

  const handleMouseLeave = () => {
    if (!isInteractive) return;
    setHoverValue(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, starValue: number) => {
    if (!isInteractive) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(starValue);
    } else if (e.key === 'ArrowRight' && starValue < max) {
      e.preventDefault();
      const nextStar = document.getElementById(
        `${ratingId}-star-${starValue + 1}`
      );
      nextStar?.focus();
    } else if (e.key === 'ArrowLeft' && starValue > 1) {
      e.preventDefault();
      const prevStar = document.getElementById(
        `${ratingId}-star-${starValue - 1}`
      );
      prevStar?.focus();
    }
  };

  const getStarFill = (starIndex: number) => {
    const starValue = starIndex + 1;
    if (displayValue >= starValue) return 100;
    if (displayValue >= starValue - 0.5) return 50;
    return 0;
  };

  return (
    <div
      className={cn('flex items-center gap-1', containerClassName)}
      role={isInteractive ? 'radiogroup' : undefined}
      aria-label={ariaLabel || (isInteractive ? 'Rating' : undefined)}
    >
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        const fillPercentage = getStarFill(index);
        const isFilled = fillPercentage === 100;
        const isHalfFilled = fillPercentage === 50;

        return (
          <button
            key={starValue}
            id={`${ratingId}-star-${starValue}`}
            type="button"
            role={isInteractive ? 'radio' : undefined}
            aria-checked={isInteractive ? displayValue >= starValue : undefined}
            aria-valuenow={isInteractive ? starValue : undefined}
            aria-label={
              isInteractive ? `${starValue} out of ${max} stars` : undefined
            }
            tabIndex={
              isInteractive && !disabled
                ? displayValue >= starValue
                  ? 0
                  : -1
                : undefined
            }
            disabled={disabled}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onKeyDown={(e) => handleKeyDown(e, starValue)}
            className={cn(
              'relative inline-flex items-center justify-center transition-colors outline-none',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded',
              sizeClasses[size],
              disabled && 'cursor-not-allowed opacity-50',
              isInteractive && !disabled && 'cursor-pointer',
              readOnly && 'cursor-default',
              className
            )}
          >
            <StarIcon
              className={cn(
                'absolute inset-0',
                isFilled || isHalfFilled
                  ? 'text-primary fill-primary'
                  : 'text-muted fill-transparent'
              )}
            />
            {isHalfFilled && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: '50%' }}
              >
                <StarIcon className="text-primary fill-primary" />
              </div>
            )}
            <span className="sr-only">
              {isFilled
                ? 'Full star'
                : isHalfFilled
                  ? 'Half star'
                  : 'Empty star'}
            </span>
          </button>
        );
      })}
      {isInteractive && (
        <span className="sr-only" aria-live="polite">
          Current rating: {displayValue} out of {max} stars
        </span>
      )}
    </div>
  );
}

export { Rating };
