import type { IComponentUsage } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@stellar-ui/web';

import {
  Avatar as MobileAvatar,
  AvatarFallback as MobileAvatarFallback,
  AvatarImage as MobileAvatarImage,
} from '@stellar-ui/mobile';

const hasMobileAvatar =
  typeof MobileAvatar !== 'undefined' &&
  typeof MobileAvatarImage !== 'undefined' &&
  typeof MobileAvatarFallback !== 'undefined';

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

export const AvatarExampleMobile = () => {
  if (!hasMobileAvatar) {
    return (
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
  }
  return (
    <div className="flex items-center gap-4">
      <MobileAvatar {...({ className: 'size-12' } as any)}>
        <MobileAvatarImage
          src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          {...({ alt: '@github' } as any)}
        />
        <MobileAvatarFallback>GH</MobileAvatarFallback>
      </MobileAvatar>
      <MobileAvatar {...({ className: 'size-12' } as any)}>
        <MobileAvatarFallback>US</MobileAvatarFallback>
      </MobileAvatar>
    </div>
  );
};

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

  importCodeMobile: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@stellar-ui/mobile';`,

  usageCodeMobile: `<Avatar>
  <AvatarImage src="/path/to/image.png" alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,

  exampleCodeMobile: `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@stellar-ui/mobile';

<div className="flex items-center gap-4">
  <Avatar className="size-12">
    <AvatarImage src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="@github" />
    <AvatarFallback>GH</AvatarFallback>
  </Avatar>
  <Avatar className="size-12">
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
