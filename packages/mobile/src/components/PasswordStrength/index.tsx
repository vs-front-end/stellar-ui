import { cn } from '@stellar-ui/shared';
import { Check, X } from 'lucide-react-native';
import { useMemo } from 'react';
import { View } from 'react-native';

import { Text } from '../Text';

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
    <View className={cn('gap-2', className)}>
      {showIndicator && (
        <>
          <View className="mb-4 h-1 w-full flex-row gap-1">
            {Array.from({ length: requirements.length }).map((_, index) => (
              <View
                key={index}
                className={cn(
                  'h-full flex-1 rounded-full',
                  index < strengthScore ? getColor(strengthScore) : 'bg-border'
                )}
              />
            ))}
          </View>

          <Text className="text-sm font-medium text-foreground">
            {getText(strengthScore)}. {showRequirements && 'Must contain:'}
          </Text>
        </>
      )}

      {showRequirements && (
        <View className="mb-4 gap-1.5">
          {strength.map((req, index) => (
            <View
              key={index}
              className="flex-row items-center gap-2"
              accessibilityLabel={`${req.text} ${req.met ? 'Requirement met' : 'Requirement not met'}`}
            >
              {req.met ? (
                <Check className="text-success" size={16} />
              ) : (
                <X className="text-muted" size={16} />
              )}
              <Text
                className={cn('text-xs', req.met ? 'text-success' : 'text-muted')}
              >
                {req.text}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export { PasswordStrength };
