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
import { docsNav } from '@/utils/constants';

interface DocsNavigationProps {
  currentSlug: string;
}

export const DocsNavigation = ({ currentSlug }: DocsNavigationProps) => {
  const currentIndex = docsNav.findIndex((doc) => doc.slug === currentSlug);

  const previousDoc = currentIndex > 0 ? docsNav[currentIndex - 1] : null;

  const nextDoc =
    currentIndex < docsNav.length - 1 ? docsNav[currentIndex + 1] : null;

  if (!previousDoc && !nextDoc) return null;

  return (
    <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
      <Text as="span" className="text-muted">
        Documentation {currentIndex + 1} of {docsNav.length}
      </Text>

      <div className="flex items-center gap-4">
        {previousDoc && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" asChild>
                  <Link
                    to={`/docs/${previousDoc.slug}`}
                    aria-label={`Previous documentation: ${previousDoc.name}`}
                  >
                    <ChevronLeft className="size-4 shrink-0" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-primary-soft text-primary-text font-semibold"
              >
                {previousDoc.name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        {nextDoc && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" asChild>
                  <Link
                    to={`/docs/${nextDoc.slug}`}
                    aria-label={`Next documentation: ${nextDoc.name}`}
                  >
                    <ChevronRight className="size-4 shrink-0" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-primary-soft text-primary-text font-semibold"
              >
                {nextDoc.name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
};
