import * as React from 'react';
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

interface ToasterPropsExtended extends Omit<ToasterProps, 'theme'> {
  variant?: 'light' | 'dark' | 'ocean';
}

const Toaster = ({ variant, ...props }: ToasterPropsExtended) => {
  const getTheme = (): ToasterProps['theme'] => {
    if (variant) {
      return variant === 'light' ? 'light' : 'dark';
    }

    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (root.classList.contains('light')) return 'light';
      if (root.classList.contains('dark') || root.classList.contains('ocean'))
        return 'dark';
    }

    return 'light';
  };

  const sonnerTheme = getTheme();

  return (
    <Sonner
      theme={sonnerTheme}
      position="top-right"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-success-text" />,
        info: <InfoIcon className="size-4 text-primary-text" />,
        warning: <TriangleAlertIcon className="size-4 text-warning-text" />,
        error: <OctagonXIcon className="size-4 text-error-text" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--color-surface)',
          '--normal-text': 'var(--color-foreground)',
          '--normal-border': 'var(--color-border)',
          '--border-radius': '6px',
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: 'group border',
          success:
            '!bg-success-soft !border-success-text !text-success-text [&_*]:!text-success-text',
          error:
            '!bg-error-soft !border-error-text !text-error-text [&_*]:!text-error-text',
          warning:
            '!bg-warning-soft !border-warning-text !text-warning-text [&_*]:!text-warning-text',
          info: '!bg-primary-soft !border-primary-text !text-primary-text [&_*]:!text-primary-text',
          default: '!bg-background !border-foreground !text-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
