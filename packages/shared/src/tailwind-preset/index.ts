import type { Config } from 'tailwindcss';

const stellarPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',

        primary: 'var(--color-primary)',
        'primary-soft': 'var(--color-primary-soft)',
        'primary-text': 'var(--color-primary-text)',

        secondary: 'var(--color-secondary)',
        'secondary-soft': 'var(--color-secondary-soft)',
        'secondary-text': 'var(--color-secondary-text)',

        success: 'var(--color-success)',
        'success-soft': 'var(--color-success-soft)',
        'success-text': 'var(--color-success-text)',

        warning: 'var(--color-warning)',
        'warning-soft': 'var(--color-warning-soft)',
        'warning-text': 'var(--color-warning-text)',

        error: 'var(--color-error)',
        'error-soft': 'var(--color-error-soft)',
        'error-text': 'var(--color-error-text)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
      },
    },
  },
};

export default stellarPreset;
