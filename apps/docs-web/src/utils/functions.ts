export const mapComponentsBySuffix = (
  components: Record<string, any>,
  suffix: string
) => {
  const mapped: Record<string, any> = {};

  for (const [exportName, component] of Object.entries(components)) {
    if (exportName.endsWith(suffix)) {
      const componentName = exportName.replace(suffix, '');
      mapped[componentName] = component;
    }
  }

  return mapped;
};
