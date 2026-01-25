import { Link } from 'react-router-dom';
import { Button, Text } from '@stellar-ui/web';
import { ArrowLeftIcon, BookIcon } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />

          <Link
            to="https://github.com/vs-front-end"
            target="_blank"
            className="block"
          >
            <img
              src="/images/error.webp"
              alt="404 Error"
              className="relative size-56 rounded-2xl border-2 border-foreground object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        <div className="space-y-2">
          <div className="space-y-2">
            <Text
              as="h1"
              className="text-5xl font-bold tracking-tight text-foreground"
            >
              404 - Page Not Found
            </Text>
          </div>

          <Text as="p" className="mx-auto max-w-md text-base text-muted">
            The page you're looking for doesn't exist or has been moved.
          </Text>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/">
              <ArrowLeftIcon className="size-4" />
              Go Back
            </Link>
          </Button>

          <Button variant="outline" asChild size="lg">
            <Link to="/docs/getting-started">
              <BookIcon className="size-4" />
              View Docs
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
