import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Button,
  Text,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@stellar-ui/web';
import { components } from '@/utils/constants';

interface ComponentNavigationProps {
  currentSlug: string;
}

export const ComponentNavigation = ({
  currentSlug,
}: ComponentNavigationProps) => {
  const currentIndex = components.findIndex((c) => c.slug === currentSlug);

  const previousComponent =
    currentIndex > 0 ? components[currentIndex - 1] : null;

  const nextComponent =
    currentIndex < components.length - 1 ? components[currentIndex + 1] : null;

  if (!previousComponent && !nextComponent) return null;

  return (
    <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
      <Text as="span" className="text- text-muted">
        Component {currentIndex + 1} of {components.length}
      </Text>

      <div className="flex items-center gap-4">
        {previousComponent && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" asChild>
                  <Link
                    to={`/preview/${previousComponent.slug}`}
                    aria-label={`Previous component: ${previousComponent.name}`}
                  >
                    <ChevronLeft className="size-4 shrink-0" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-primary-soft text-primary-text font-semibold"
                arrowClassName="bg-primary-soft fill-primary-soft"
              >
                {previousComponent.name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        {nextComponent && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" asChild>
                  <Link
                    to={`/preview/${nextComponent.slug}`}
                    aria-label={`Next component: ${nextComponent.name}`}
                  >
                    <ChevronRight className="size-4 shrink-0" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-primary-soft text-primary-text font-semibold"
                arrowClassName="bg-primary-soft fill-primary-soft"
              >
                {nextComponent.name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
};
