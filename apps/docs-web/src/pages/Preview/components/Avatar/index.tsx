import type { IComponentUsage } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@stellar-ui/web';

export const AvatarExample = () => (
  <div className="flex items-center gap-4">
    <Avatar className="size-12">
      <AvatarImage
        src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
        alt="@github"
      />
      <AvatarFallback>GH</AvatarFallback>
    </Avatar>

    <Avatar className="size-12">
      <AvatarFallback>US</AvatarFallback>
    </Avatar>
  </div>
);

export const AvatarDocs: IComponentUsage = {
  importCode: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@stellar-ui/web';`,

  usageCode: `<Avatar>
  <AvatarImage src="/path/to/image.png" alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,

  exampleCode: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@stellar-ui/web';

<div className="flex items-center gap-4">
  <Avatar>
    <AvatarImage src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="@github" />
    <AvatarFallback>GH</AvatarFallback>
  </Avatar>

  <Avatar>
    <AvatarFallback>US</AvatarFallback>
  </Avatar>
</div>`,

  props: [
    {
      name: 'src',
      type: 'string',
      description: 'The source URL of the avatar image (AvatarImage).',
    },
    {
      name: 'alt',
      type: 'string',
      description: 'Alt text for the avatar image (AvatarImage).',
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description:
        'Fallback content when image fails to load (AvatarFallback).',
    },
  ],
};
