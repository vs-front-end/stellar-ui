import { Button, Text } from "@stellar-ui-kit/web";

type ThemeVariant = "light" | "dark" | "ocean";

const THEMES: { value: ThemeVariant; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "ocean", label: "Ocean" },
];

interface AppProps {
  onThemeChange: (theme: ThemeVariant) => void;
}

export default function App({ onThemeChange }: AppProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4 p-8">
      <div className="text-center space-y-2">
        <Text as="h1" className="text-3xl font-bold">
          Stellar UI - Template Web
        </Text>

        <Text as="p" className="text-muted">
          Choose a theme:
        </Text>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {THEMES.map(({ value, label }) => (
          <Button
            key={value}
            size="lg"
            onClick={() => onThemeChange(value)}
            className="text-base min-w-[120px]"
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
