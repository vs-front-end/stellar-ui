import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import type { DateRange } from 'react-day-picker';
import type { Locale } from 'date-fns/locale';
import { enUS } from 'date-fns/locale';

import { cn } from '@stellar-ui-kit/shared';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

interface DatePickerProps {
  date?: Date;
  onSelect?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  locale?: Locale;
}

interface DatePickerRangeProps {
  dateRange?: DateRange;
  onSelect?: (range: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  locale?: Locale;
}

function DatePicker({
  date,
  onSelect,
  placeholder = 'Pick a date',
  className,
  disabled,
  locale = enUS,
}: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    date
  );
  const [open, setOpen] = React.useState(false);

  const isControlled = date !== undefined && onSelect !== undefined;
  const currentDate = isControlled ? date : internalDate;

  const handleSelect = (selectedDate: Date | undefined) => {
    if (isControlled) {
      onSelect?.(selectedDate);
    } else {
      setInternalDate(selectedDate);
      onSelect?.(selectedDate);
    }

    if (selectedDate) {
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          data-empty={!currentDate}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            'data-[empty=true]:text-muted',
            className
          )}
        >
          <CalendarIcon />
          {currentDate ? (
            format(currentDate, 'PPP', { locale })
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={currentDate}
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  );
}

function DatePickerRange({
  dateRange,
  onSelect,
  placeholder = 'Pick a date range',
  className,
  disabled,
  locale = enUS,
}: DatePickerRangeProps) {
  const [internalRange, setInternalRange] = React.useState<
    DateRange | undefined
  >(dateRange);

  const [open, setOpen] = React.useState(false);

  const isControlled = dateRange !== undefined && onSelect !== undefined;
  const currentRange = isControlled ? dateRange : internalRange;

  const handleSelect = (range: DateRange | undefined) => {
    if (isControlled) {
      onSelect?.(range);
    } else {
      setInternalRange(range);
      onSelect?.(range);
    }

    if (
      range?.from &&
      range?.to &&
      range.from.getTime() !== range.to.getTime()
    ) {
      setOpen(false);
    }
  };

  const formatRange = (range: DateRange | undefined) => {
    if (!range?.from) return null;
    if (range.from && !range.to) {
      return format(range.from, 'LLL dd, y', { locale });
    }
    if (range.from && range.to) {
      return `${format(range.from, 'LLL dd, y', { locale })} - ${format(range.to, 'LLL dd, y', { locale })}`;
    }
    return null;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          data-empty={!currentRange?.from}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            'data-[empty=true]:text-muted',
            className
          )}
        >
          <CalendarIcon />
          {formatRange(currentRange) || <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={currentRange}
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker, DatePickerRange };
