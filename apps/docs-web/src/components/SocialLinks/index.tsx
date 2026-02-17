import { cn } from '@stellar-ui-kit/shared';
import { Tooltip, TooltipTrigger, TooltipContent } from '@stellar-ui-kit/web';

interface ISocialLink {
  href: string;
  label: string;
  bgColor: string;
  icon: string;
}

const socialLinks: ISocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/vitor-silva-front-end-dev/',
    label: 'LinkedIn',
    bgColor: 'bg-[#026397]',
    icon: '/icons/linkedin.svg',
  },
  {
    href: 'https://github.com/vs-front-end',
    label: 'GitHub',
    bgColor: 'bg-[#353535]',
    icon: '/icons/github.svg',
  },
  {
    href: 'https://www.npmjs.com/package/@stellar-ui-kit/web',
    label: 'NPM',
    bgColor: 'bg-[#BC2026]',
    icon: '/icons/npm.svg',
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ href, label, bgColor, icon }) => (
        <Tooltip key={href}>
          <TooltipTrigger asChild>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={cn(
                'h-[30px] w-[30px] text-white font-medium rounded-full flex items-center justify-center transition-all',
                'hover:translate-y-0.5',
                bgColor
              )}
            >
              <img
                src={icon}
                alt={label}
                className="size-3.5 brightness-0 invert"
              />
            </a>
          </TooltipTrigger>

          <TooltipContent
            side="bottom"
            className="bg-primary-soft text-primary-text font-semibold"
            arrowClassName="bg-primary-soft fill-primary-soft"
          >
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};
