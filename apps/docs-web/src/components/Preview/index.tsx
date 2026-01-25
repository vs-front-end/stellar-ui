import { ReactNode } from 'react';
import { cn } from '@stellar-ui/shared';

interface IPreview {
  children: ReactNode;
  className?: string;
}

export const Preview = ({ children, className }: IPreview) => {
  return (
    <div
      className={cn(
        'border border-border rounded-lg p-6 bg-background',
        className
      )}
    >
      {children}
    </div>
  );
};
