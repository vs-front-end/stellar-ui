import * as React from 'react';

import { cn } from '@stellar-ui-kit/shared';

interface CircularProgressProps {
  value?: number;
  max?: number;
  size?: number | 'sm' | 'md' | 'lg';
  strokeWidth?: number;
  showValue?: boolean;
  children?: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

const SIZE_MAP = {
  sm: 64,
  md: 120,
  lg: 160,
} as const;

function CircularProgress({
  value = 0,
  max = 100,
  size = 'md',
  strokeWidth,
  showValue = false,
  children,
  className,
  'aria-label': ariaLabel,
}: CircularProgressProps) {
  const sizeValue = typeof size === 'number' ? size : SIZE_MAP[size];
  const defaultStrokeWidth = sizeValue <= 64 ? 4 : sizeValue <= 120 ? 6 : 8;
  const stroke = strokeWidth || defaultStrokeWidth;
  const radius = (sizeValue - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const offset = circumference - (percentage / 100) * circumference;
  const center = sizeValue / 2;
  const viewBox = `0 0 ${sizeValue} ${sizeValue}`;

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center',
        className
      )}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={ariaLabel || `Progress: ${percentage.toFixed(0)}%`}
    >
      <svg
        width={sizeValue}
        height={sizeValue}
        viewBox={viewBox}
        className="transform -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-primary-soft"
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke + 0.5}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="text-primary transition-all duration-300 ease-in-out"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children ? (
          children
        ) : showValue ? (
          <span className="text-foreground font-semibold">
            {percentage.toFixed(0)}%
          </span>
        ) : null}
      </div>
    </div>
  );
}

export { CircularProgress };
