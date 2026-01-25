import { useMemo } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';

import { cn } from '@stellar-ui/shared';

interface Requirement {
  regex: RegExp;
  text: string;
}

const DEFAULT_REQUIREMENTS: Requirement[] = [
  { regex: /.{8,}/, text: 'At least 8 characters' },
  { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
  { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
  { regex: /[0-9]/, text: 'At least 1 number' },
  {
    regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/,
    text: 'At least 1 special character',
  },
];

interface PasswordStrengthProps {
  password: string;
  requirements?: Requirement[];
  showIndicator?: boolean;
  showRequirements?: boolean;
  className?: string;
}

function PasswordStrength({
  password,
  requirements = DEFAULT_REQUIREMENTS,
  showIndicator = true,
  showRequirements = true,
  className,
}: PasswordStrengthProps) {
  const strength = useMemo(
    () =>
      requirements.map((req) => ({
        met: req.regex.test(password),
        text: req.text,
      })),
    [password, requirements]
  );

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getColor = (score: number) => {
    if (score === 0) return 'bg-border';
    if (score <= 1) return 'bg-error';
    if (score <= 2) return 'bg-warning';
    if (score <= 3) return 'bg-warning';
    if (score === 4) return 'bg-warning';

    return 'bg-success';
  };

  const getText = (score: number) => {
    if (score === 0) return 'Enter a password';
    if (score <= 2) return 'Weak password';
    if (score <= 3) return 'Medium password';
    if (score === 4) return 'Strong password';

    return 'Very strong password';
  };

  if (!password && !showRequirements) {
    return null;
  }

  return (
    <div className={cn('space-y-2', className)}>
      {showIndicator && (
        <>
          <div className="mb-4 flex h-1 w-full gap-1">
            {Array.from({ length: requirements.length }).map((_, index) => (
              <span
                key={index}
                className={cn(
                  'h-full flex-1 rounded-full transition-all duration-500 ease-out',
                  index < strengthScore ? getColor(strengthScore) : 'bg-border'
                )}
              />
            ))}
          </div>

          <p className="text-sm font-medium text-foreground">
            {getText(strengthScore)}. {showRequirements && 'Must contain:'}
          </p>
        </>
      )}

      {showRequirements && (
        <ul className="mb-4 space-y-1.5">
          {strength.map((req, index) => (
            <li key={index} className="flex items-center gap-2">
              {req.met ? (
                <CheckIcon className="size-4 text-success" />
              ) : (
                <XIcon className="size-4 text-muted" />
              )}
              <span
                className={cn(
                  'text-xs',
                  req.met ? 'text-success' : 'text-muted'
                )}
              >
                {req.text}
                <span className="sr-only">
                  {req.met ? ' - Requirement met' : ' - Requirement not met'}
                </span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { PasswordStrength };
