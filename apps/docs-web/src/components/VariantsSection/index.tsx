import { Text } from '@stellar-ui/web';
import { VariantItem } from '@/components/VariantItem';

interface IVariantsSection {
  variants: any[];
}

export const VariantsSection = ({ variants }: IVariantsSection) => {
  return (
    <section className="space-y-8">
      <Text as="h2" className="text-2xl font-semibold">
        Variants
      </Text>

      <div className="space-y-8">
        {variants.map((variant, index) => (
          <VariantItem key={index} variant={variant} />
        ))}
      </div>
    </section>
  );
};
