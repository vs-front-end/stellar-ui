import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@stellar-ui/shared';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

function Breadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'flex flex-wrap items-center gap-1.5 text-sm text-muted break-words sm:gap-2.5',
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn('transition-colors hover:text-foreground', className)}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-normal text-foreground', className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5 [&>svg]:text-muted', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  children,
  ...props
}: React.ComponentProps<'span'> & {
  children?: React.ReactNode;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <span
          data-slot="breadcrumb-ellipsis"
          role="button"
          aria-label="Show more breadcrumb items"
          className={cn(
            'flex size-9 cursor-pointer items-center justify-center',
            className
          )}
          {...props}
        >
          <MoreHorizontal className="size-4 text-muted" />
          <span className="sr-only">More</span>
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-1" align="start">
        <div className="flex flex-col [&>*]:block [&>*]:px-2 [&>*]:py-1.5 [&>*]:rounded-sm [&>*]:transition-colors [&>*:hover]:bg-muted">
          {children}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
