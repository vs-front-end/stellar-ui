import type { IComponentUsage } from '@/types';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@stellar-ui/web';

export const AccordionExample = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that match the other components&apos;
        aesthetic, but it&apos;s customizable.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
        prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const AccordionDocs: IComponentUsage = {
  importCode: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@stellar-ui/web';`,

  usageCode: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Title</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>`,

  exampleCode: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@stellar-ui/web';

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other
      components' aesthetic, but it's customizable.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,

  props: [
    {
      name: 'type',
      type: '"single" | "multiple"',
      description: 'Whether only one or multiple items can be opened at once.',
    },
    {
      name: 'collapsible',
      type: 'boolean',
      description: 'When type is "single", allows closing the open item.',
    },
    {
      name: 'defaultValue',
      type: 'string | string[]',
      description: 'The default open item(s) when uncontrolled.',
    },
    {
      name: 'value',
      type: 'string | string[]',
      description: 'The controlled open item(s).',
    },
    {
      name: 'onValueChange',
      type: '(value: string | string[]) => void',
      description: 'Callback fired when the open state changes.',
    },
  ],
};
