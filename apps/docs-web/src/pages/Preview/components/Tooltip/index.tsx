import type { IComponentUsage } from '@/types';

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@stellar-ui/web';

export const TooltipExample = () => (
  <div className="flex items-center gap-4 flex-wrap">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">Top tooltip</Button>
      </TooltipTrigger>

      <TooltipContent side="top">
        <p>Tooltip on top</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">Bottom tooltip</Button>
      </TooltipTrigger>

      <TooltipContent side="bottom">
        <p>Tooltip on bottom</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">Right tooltip</Button>
      </TooltipTrigger>

      <TooltipContent side="right">
        <p>Tooltip on right</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">Left tooltip</Button>
      </TooltipTrigger>

      <TooltipContent side="left">
        <p>Tooltip on left</p>
      </TooltipContent>
    </Tooltip>
  </div>
);

export const TooltipDocs: IComponentUsage = {
  importCode: `import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@stellar-ui/web';`,

  usageCode: `<Tooltip>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>
    <p>Tooltip content</p>
  </TooltipContent>
</Tooltip>`,

  exampleCode: `import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@stellar-ui/web';

<div className="flex items-center gap-4 flex-wrap">
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost">Top tooltip</Button>
    </TooltipTrigger>

    <TooltipContent side="top">
      <p>Tooltip on top</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost">Bottom tooltip</Button>
    </TooltipTrigger>

    <TooltipContent side="bottom">
      <p>Tooltip on bottom</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost">Right tooltip</Button>
    </TooltipTrigger>

    <TooltipContent side="right">
      <p>Tooltip on right</p>
    </TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost">Left tooltip</Button>
    </TooltipTrigger>

    <TooltipContent side="left">
      <p>Tooltip on left</p>
    </TooltipContent>
  </Tooltip>
</div>`,

  props: [
    {
      name: 'open',
      type: 'boolean',
      description: 'The controlled open state.',
    },
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: 'The default open state when uncontrolled.',
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      description: 'Callback fired when the open state changes.',
    },
    {
      name: 'delayDuration',
      type: 'number',
      default: '700',
      description: 'The duration in ms before the tooltip opens.',
    },
    {
      name: 'side',
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: 'The side of the trigger to display the tooltip (TooltipContent).',
    },
  ],
};
