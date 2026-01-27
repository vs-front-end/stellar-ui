import { Sun, Moon, Waves } from 'lucide-react';
import { cn } from '@stellar-ui/shared';
import type { ThemeVariant } from '@stellar-ui/shared';
import { Tooltip, TooltipTrigger, TooltipContent } from '@stellar-ui/web';

const themes = [
  { id: 'light' as const, icon: Sun, label: 'Light theme' },
  { id: 'dark' as const, icon: Moon, label: 'Dark theme' },
  { id: 'ocean' as const, icon: Waves, label: 'Ocean theme' },
];

interface IToggleTheme {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
}

export const ThemeSelector = ({ theme, setTheme }: IToggleTheme) => {
  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-border p-1.5 border-dashed">
      {themes.map(({ id, icon: Icon, label }) => (
        <Tooltip key={id}>
          <TooltipTrigger asChild>
            <button
              aria-label={label}
              onClick={() => setTheme(id)}
              className={cn(
                'flex items-center justify-center rounded-md p-1.5 transition-all',
                'hover:translate-y-0.5',
                theme === id
                  ? 'bg-primary-soft text-primary-text'
                  : 'text-foreground'
              )}
            >
              <Icon className="size-3.5" />
            </button>
          </TooltipTrigger>

          <TooltipContent
            side="bottom"
            className="bg-primary-soft text-primary-text font-semibold"
            arrowClassName="bg-primary-soft fill-primary-soft"
          >
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};
