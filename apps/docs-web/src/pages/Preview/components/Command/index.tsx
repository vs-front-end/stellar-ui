import type { IComponentUsage } from '@/types';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@stellar-ui/web';
import { CalendarIcon, FileIcon, SettingsIcon } from 'lucide-react';

export const CommandExample = () => (
  <div className="rounded-lg border border-border bg-surface p-1 max-w-md">
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>

          <CommandItem>
            <FileIcon />
            <span>Search Emoji</span>
          </CommandItem>

          <CommandItem>
            <SettingsIcon />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </div>
);

export const CommandDocs: IComponentUsage = {
  importCode: `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@stellar-ui/web';`,

  usageCode: `<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandItem>Item</CommandItem>
  </CommandList>
</Command>`,

  exampleCode: `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@stellar-ui/web';
import { CalendarIcon, FileIcon, SettingsIcon } from 'lucide-react';

<div className="rounded-lg border border-border bg-surface p-1 max-w-md">
  <Command>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <CalendarIcon />
          <span>Calendar</span>
        </CommandItem>

        <CommandItem>
          <FileIcon />
          <span>Search Emoji</span>
        </CommandItem>
        
        <CommandItem>
          <SettingsIcon />
          <span>Settings</span>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</div>`,

  props: [
    {
      name: 'value',
      type: 'string',
      description: 'The controlled value of the selected item.',
    },
    {
      name: 'onValueChange',
      type: '(value: string) => void',
      description: 'Callback fired when the selected value changes.',
    },
    {
      name: 'filter',
      type: '(value: string, search: string) => number',
      description: 'Custom filter function for search.',
    },
  ],
};
