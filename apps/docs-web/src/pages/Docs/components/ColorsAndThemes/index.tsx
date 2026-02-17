import { Text, CodeBlock } from '@stellar-ui-kit/web';

import {
  COMMON_THEME,
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
} from '@stellar-ui-kit/shared';

export function ColorsAndThemes() {
  const themes = [
    { name: 'Light', colors: LIGHT_THEME },
    { name: 'Dark', colors: DARK_THEME },
    { name: 'Ocean', colors: OCEAN_THEME },
  ];

  const baseColorNames = [
    'background',
    'surface',
    'border',
    'foreground',
    'muted',
  ] as const;

  const semanticColors = [
    {
      name: 'primary',
      variants: [
        { name: 'primary', class: 'bg-primary' },
        { name: 'primary-soft', class: 'bg-primary-soft' },
        { name: 'primary-text', class: 'bg-primary-text' },
      ],
    },
    {
      name: 'secondary',
      variants: [
        { name: 'secondary', class: 'bg-secondary' },
        { name: 'secondary-soft', class: 'bg-secondary-soft' },
        { name: 'secondary-text', class: 'bg-secondary-text' },
      ],
    },
    {
      name: 'success',
      variants: [
        { name: 'success', class: 'bg-success' },
        { name: 'success-soft', class: 'bg-success-soft' },
        { name: 'success-text', class: 'bg-success-text' },
      ],
    },
    {
      name: 'warning',
      variants: [
        { name: 'warning', class: 'bg-warning' },
        { name: 'warning-soft', class: 'bg-warning-soft' },
        { name: 'warning-text', class: 'bg-warning-text' },
      ],
    },
    {
      name: 'error',
      variants: [
        { name: 'error', class: 'bg-error' },
        { name: 'error-soft', class: 'bg-error-soft' },
        { name: 'error-text', class: 'bg-error-text' },
      ],
    },
  ];

  const getHexValue = (colorName: string): string => {
    const allColors = { ...COMMON_THEME, ...LIGHT_THEME };
    const value = allColors[colorName as keyof typeof allColors];
    return typeof value === 'string' ? value : '';
  };

  return (
    <div className="space-y-8 py-9">
      <div>
        <Text as="h1" className="text-4xl font-bold mb-4">
          Colors and Themes
        </Text>
        <Text as="p" className="text-lg text-muted mb-6">
          Stellar UI comes with three built-in themes and a comprehensive color
          system.
        </Text>
      </div>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Available Themes
        </Text>
        <Text as="p" className="text-muted">
          Stellar UI provides three theme variants:
        </Text>
        <ul className="list-disc list-inside space-y-2 text-muted ml-4">
          <li>
            <strong className="text-foreground">Light</strong> - Clean and
            bright theme for light interfaces
          </li>
          <li>
            <strong className="text-foreground">Dark</strong> - Dark theme for
            reduced eye strain
          </li>
          <li>
            <strong className="text-foreground">Ocean</strong> - Deep blue theme
            with a modern aesthetic
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <div className="space-y-6">
          <div className="space-y-8">
            {themes.map((theme) => (
              <div key={theme.name}>
                <Text as="h4" className="text-lg font-medium mb-4">
                  {theme.name} Theme
                </Text>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {baseColorNames.map((colorName) => {
                    const hexValue = theme.colors[colorName];
                    return (
                      <div
                        key={`${theme.name}-${colorName}`}
                        className="border border-border rounded-lg p-4 bg-background"
                      >
                        <div
                          className="w-full h-20 rounded border border-border mb-3"
                          style={{ backgroundColor: hexValue }}
                        />
                        <div>
                          <code className="text-sm font-medium block text-foreground">
                            {colorName}
                          </code>

                          <span className="text-xs text-muted">{hexValue}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div>
            <Text as="h3" className="text-xl font-semibold mb-3">
              Common Colors
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {semanticColors.map((colorGroup) => (
                <div
                  key={colorGroup.name}
                  className="border border-border rounded-lg p-4 bg-background"
                >
                  {colorGroup.variants.map((variant) => (
                    <div
                      key={variant.name}
                      className="flex items-center gap-3 mb-2"
                    >
                      <div
                        className={`w-10 h-10 rounded border border-border ${variant.class} shrink-0`}
                      />
                      <div>
                        <code className="text-sm block text-foreground">
                          {variant.name}
                        </code>
                        <span className="text-xs text-muted">
                          {getHexValue(variant.name)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Using Colors in Tailwind
        </Text>
        <Text as="p" className="text-muted">
          All colors are available as Tailwind utility classes:
        </Text>
        <CodeBlock
          code={`<div className="bg-primary text-primary-text">
  Primary background
</div>

<div className="bg-success-soft text-success">
  Success message
</div>

<div className="border border-border bg-surface">
  Container with border
</div>`}
          language="tsx"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Theme Values
        </Text>
        <Text as="p" className="text-muted">
          Each theme defines specific values for base colors. The semantic
          colors (primary, secondary, success, etc.) remain consistent across
          all themes:
        </Text>
        <CodeBlock
          code={`// Light Theme
background: '#fafafa'
surface: '#ffffff'
border: '#CCCCCC'
foreground: '#000000'
muted: '#555555'

// Dark Theme
background: '#171717'
surface: '#1f1f1f'
border: '#3f3f46'
foreground: '#f1f5f9'
muted: '#aaaab3'

// Ocean Theme
background: '#0f172a'
surface: '#1e293b'
border: '#334155'
foreground: '#f1f5f9'
muted: '#cbd5e1'`}
          language="typescript"
          copyable
        />
      </section>
    </div>
  );
}
