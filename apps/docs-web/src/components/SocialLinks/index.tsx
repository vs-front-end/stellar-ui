import { cn } from '@stellar-ui/shared';
import { Tooltip, TooltipTrigger, TooltipContent } from '@stellar-ui/web';

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

          <TooltipContent className="bg-primary-soft text-primary-text font-semibold">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};
