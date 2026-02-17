import { ReactNode } from 'react';
import { cn } from '@stellar-ui-kit/shared';

interface IPreviewGrid {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
}

export const PreviewGrid = ({
  children,
  className,
  cols = 2,
}: IPreviewGrid) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div
      className={cn(
        'grid gap-4 border border-border rounded-lg p-6 bg-background',
        gridCols[cols],
        className
      )}
    >
      {children}
    </div>
  );
};
