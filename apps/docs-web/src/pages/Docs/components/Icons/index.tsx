import { Text, CodeBlock, Button } from '@stellar-ui/web';

import {
  Home,
  Settings,
  Heart,
  Star,
  Info,
  AlertTriangle,
  CheckCircle,
  Download,
  Share2,
  Edit,
  Search,
  ExternalLink,
} from 'lucide-react';

export function Icons() {
  return (
    <div className="space-y-8 py-9">
      <div>
        <Text as="h1" className="text-4xl font-bold mb-4">
          Icons
        </Text>
        <Text as="p" className="text-lg text-muted mb-4">
          Stellar UI includes Lucide React, a beautiful and consistent icon
          library with over 1,400+ icons.
        </Text>
        <Button asChild variant="outline">
          <a
            href="https://lucide.dev/icons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink />
            Browse All Icons
          </a>
        </Button>
      </div>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Usage
        </Text>
        <Text as="p" className="text-muted">
          Lucide React is included in{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            @stellar-ui/web
          </code>
          . Import the icons you need:
        </Text>
        <CodeBlock
          code={`import { Home, Settings, User, Search } from 'lucide-react';

function MyComponent() {
  return (
    <div>
      <Home className="size-6" />
      <Settings className="size-5 text-primary" />
      <User className="size-4 text-muted" />
      <Search className="w-6 h-6 stroke-[1.5]" />
    </div>
  );
}`}
          language="tsx"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Icon Sizing
        </Text>
        <Text as="p" className="text-muted">
          Use Tailwind's{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            size-*
          </code>{' '}
          utilities or separate width/height classes to control icon size:
        </Text>
        <div className="flex items-center gap-4 p-6 border border-border rounded-lg bg-surface">
          <Home className="size-4 text-muted" />
          <Home className="size-5 text-muted" />
          <Home className="size-6 text-muted" />
          <Home className="size-8 text-muted" />
          <Home className="size-10 text-muted" />
        </div>
        <CodeBlock
          code={`<Home className="size-4" />  {/* 16px */}
<Home className="size-5" />  {/* 20px */}
<Home className="size-6" />  {/* 24px (default) */}
<Home className="size-8" />  {/* 32px */}
<Home className="size-10" /> {/* 40px */}`}
          language="tsx"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Icon Colors
        </Text>
        <Text as="p" className="text-muted">
          Icons inherit the current text color by default. Use Tailwind's color
          utilities to customize:
        </Text>
        <div className="flex items-center gap-4 p-6 border border-border rounded-lg bg-surface">
          <Heart className="size-6 text-error" />
          <Star className="size-6 text-warning" />
          <CheckCircle className="size-6 text-success" />
          <Info className="size-6 text-primary" />
          <AlertTriangle className="size-6 text-muted" />
        </div>
        <CodeBlock
          code={`<Heart className="size-6 text-error" />
<Star className="size-6 text-warning" />
<CheckCircle className="size-6 text-success" />
<Info className="size-6 text-primary" />
<AlertTriangle className="size-6 text-muted" />`}
          language="tsx"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Stroke Width
        </Text>
        <Text as="p" className="text-muted">
          Adjust the icon stroke width using the{' '}
          <code className="px-1.5 py-0.5 rounded bg-primary-soft text-primary-text text-sm">
            stroke-[value]
          </code>{' '}
          utility:
        </Text>
        <div className="flex items-center gap-4 p-6 border border-border rounded-lg bg-surface">
          <Settings className="size-8 stroke-[1] text-foreground" />
          <Settings className="size-8 stroke-[1.5] text-foreground" />
          <Settings className="size-8 stroke-[2] text-foreground" />
          <Settings className="size-8 stroke-[2.5] text-foreground" />
        </div>
        <CodeBlock
          code={`<Settings className="size-8 stroke-[1]" />
<Settings className="size-8 stroke-[1.5]" />
<Settings className="size-8 stroke-[2]" />    {/* default */}
<Settings className="size-8 stroke-[2.5]" />`}
          language="tsx"
          copyable
        />
      </section>

      <section className="space-y-4">
        <Text as="h2" className="text-2xl font-semibold">
          Using with Buttons
        </Text>
        <Text as="p" className="text-muted">
          Icons work seamlessly with Stellar UI components like Button:
        </Text>
        <div className="flex items-center gap-3 p-6 border border-border rounded-lg bg-surface flex-wrap">
          <Button>
            <Download />
            Download
          </Button>
          <Button variant="outline">
            <Share2 />
            Share
          </Button>
          <Button variant="ghost">
            <Edit />
            Edit
          </Button>
          <Button size="icon">
            <Search />
          </Button>
          <Button size="icon" variant="outline">
            <Settings />
          </Button>
        </div>
        <CodeBlock
          code={`<Button>
  <Download />
  Download
</Button>

<Button variant="outline">
  <Share2 />
  Share
</Button>

<Button size="icon">
  <Search />
</Button>`}
          language="tsx"
          copyable
        />
      </section>
    </div>
  );
}
