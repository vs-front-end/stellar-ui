import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  GettingStarted,
  ColorsAndThemes,
  ThemeCustomization,
  Icons,
} from '@/pages/Docs/components';
import { DocsNavigation } from '@/components';

export const Docs = () => {
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [name]);

  if (!name) {
    return <Navigate to="/docs/getting-started" replace />;
  }

  const docs: Record<string, () => JSX.Element> = {
    'getting-started': GettingStarted,
    'colors-and-themes': ColorsAndThemes,
    'theme-customization': ThemeCustomization,
    icons: Icons,
  };

  const DocComponent = docs[name];

  if (!DocComponent) {
    return (
      <div className="flex items-center justify-center py-8">
        <p className="text-muted">Documentation coming soon</p>
      </div>
    );
  }

  return (
    <>
      <DocComponent />
      <DocsNavigation currentSlug={name} />
    </>
  );
};
