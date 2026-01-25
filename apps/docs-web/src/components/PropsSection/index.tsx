import { Text } from '@stellar-ui/web';
import type { IComponentProp } from '@/types';

interface IPropsSectionProps {
  props: IComponentProp[];
}

export const PropsSection = ({ props }: IPropsSectionProps) => {
  return (
    <section className="space-y-4">
      <Text as="h2" className="text-2xl font-semibold">
        Props
      </Text>

      <div className="border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-surface border-b border-border">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-sm text-muted">
                  Prop
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-muted">
                  Type
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-muted">
                  Default
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm text-muted">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop, index) => (
                <tr
                  key={prop.name}
                  className={
                    index !== props.length - 1 ? 'border-b border-border' : ''
                  }
                >
                  <td className="py-3 px-4">
                    <code className="px-1.5 py-0.5 rounded bg-primary-soft font-semibold text-primary-text text-sm font-mono">
                      {prop.name}
                    </code>
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-sm font-mono text-foreground">
                      {prop.type}
                    </code>
                  </td>
                  <td className="py-3 px-4">
                    {prop.default ? (
                      <code className="text-sm font-mono text-foreground">
                        {prop.default}
                      </code>
                    ) : (
                      <span className="text-foreground text-sm">-</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm text-foreground">
                    {prop.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
