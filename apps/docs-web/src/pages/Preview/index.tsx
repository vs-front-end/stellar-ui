import { useEffect, useMemo } from 'react';
import * as AllComponents from '@/pages/Preview/components';
import { Text } from '@stellar-ui/web';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@stellar-ui/web';

import { components } from '@/utils/constants';
import { useParams, useSearchParams, Navigate } from 'react-router-dom';
import { mapComponentsBySuffix } from '@/utils/functions';
import { LaptopIcon, Smartphone } from 'lucide-react';

import {
  PLATFORM_PARAM,
  PLATFORM_WEB,
  PLATFORM_MOBILE,
} from '@/utils/constants';
import type { DocPlatform } from '@/utils/constants';

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
const componentExamplesMobile = mapComponentsBySuffix(
  AllComponents,
  'ExampleMobile'
);

const MOBILE_INSTALL = 'npm install @stellar-ui/mobile';

export const Preview = () => {
  const { name } = useParams<{ name: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [name]);

  const component = useMemo(
    () => components.find((c) => c.slug === name),
    [name]
  );

  const platforms = component?.platforms ?? ['web'];
  const hasMobile = platforms.includes('mobile');
  const rawPlatform = searchParams.get(PLATFORM_PARAM) ?? PLATFORM_WEB;
  const platform: DocPlatform =
    hasMobile && rawPlatform === PLATFORM_MOBILE
      ? PLATFORM_MOBILE
      : PLATFORM_WEB;

  const setPlatform = (value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set(PLATFORM_PARAM, value);
      return next;
    });
  };

  if (!component) return <Navigate to="/preview/accordion" replace />;

  const componentDocsData = componentDocs[component.name];
  const variantExamples = componentVariants[component.name];
  const exampleComponent = componentExamples[component.name];
  const exampleComponentMobile = componentExamplesMobile[component.name];

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

        {hasMobile && (
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger
              className="w-32"
              size="default"
              aria-label="Platform"
            >
              <SelectValue placeholder="Platform" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value={PLATFORM_WEB}>
                <div className="flex items-center gap-2">
                  <LaptopIcon className="size-3.5" /> Web
                </div>
              </SelectItem>

              <SelectItem value={PLATFORM_MOBILE}>
                <div className="flex items-center gap-2">
                  <Smartphone className="size-3.5" /> Mobile
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      </div>

      <ExampleSection
        platform={platform}
        exampleComponent={exampleComponent}
        exampleCode={componentDocsData.exampleCode}
        exampleComponentMobile={exampleComponentMobile}
        exampleCodeMobile={componentDocsData.exampleCodeMobile}
      />

      <InstallationSection
        platform={platform}
        installCodeMobile={hasMobile ? MOBILE_INSTALL : undefined}
      />

      <UsageSection
        platform={platform}
        importCode={componentDocsData.importCode}
        usageCode={componentDocsData.usageCode}
        importCodeMobile={componentDocsData.importCodeMobile}
        usageCodeMobile={componentDocsData.usageCodeMobile}
      />

      {componentDocsData.props && (
        <PropsSection props={componentDocsData.props} />
      )}

      {variantExamples && <VariantsSection variants={variantExamples} />}

      <ComponentNavigation currentSlug={component.slug} />
    </div>
  );
};
