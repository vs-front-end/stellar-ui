import { useEffect, useMemo } from 'react';
import * as AllComponents from '@/pages/Preview/components';
import { Text } from '@stellar-ui/web';

import { components } from '@/utils/constants';
import { useParams, Navigate } from 'react-router-dom';
import { mapComponentsBySuffix } from '@/utils/functions';

import {
  ComponentNavigation,
  ExampleSection,
  InstallationSection,
  PropsSection,
  UsageSection,
  VariantsSection,
} from '@/components';

const componentDocs = mapComponentsBySuffix(AllComponents, 'Docs');
const componentVariants = mapComponentsBySuffix(AllComponents, 'Variants');
const componentExamples = mapComponentsBySuffix(AllComponents, 'Example');

export const Preview = () => {
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [name]);

  const component = useMemo(
    () => components.find((c) => c.slug === name),
    [name]
  );

  if (!component) return <Navigate to="/preview/accordion" replace />;

  const componentDocsData = componentDocs[component.name];
  const variantExamples = componentVariants[component.name];
  const exampleComponent = componentExamples[component.name];

  return (
    <div className="space-y-12 py-9">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-4">
          <Text as="h1" className="text-4xl font-bold">
            {component.name}
          </Text>

          <Text as="p" className="text-lg text-muted">
            {component.description}
          </Text>
        </div>
      </div>

      <ExampleSection
        exampleComponent={exampleComponent}
        exampleCode={componentDocsData.exampleCode}
      />

      <InstallationSection />

      <UsageSection
        importCode={componentDocsData.importCode}
        usageCode={componentDocsData.usageCode}
      />

      {componentDocsData.props && (
        <PropsSection props={componentDocsData.props} />
      )}

      {variantExamples && <VariantsSection variants={variantExamples} />}

      <ComponentNavigation currentSlug={component.slug} />
    </div>
  );
};
