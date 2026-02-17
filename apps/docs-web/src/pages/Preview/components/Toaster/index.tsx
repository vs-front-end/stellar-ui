import type { IComponentUsage } from '@/types';

import { Button } from '@stellar-ui-kit/web';
import { toast } from 'sonner';

export const ToasterExample = () => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-wrap gap-2">
      <Button
        className="bg-primary-soft text-primary-text"
        onClick={() => toast.info('Here is some information for you.')}
      >
        Info
      </Button>

      <Button
        className="bg-error-soft text-error-text"
        onClick={() => toast.error('Something went wrong!')}
      >
        Error
      </Button>

      <Button
        className="bg-warning-soft text-warning-text"
        onClick={() => toast.warning('Please be careful with this action.')}
      >
        Warning
      </Button>

      <Button
        className="bg-success-soft text-success-text"
        onClick={() => toast.success('Operation completed successfully!')}
      >
        Success
      </Button>
    </div>

    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => {
          const promise = new Promise((resolve) => {
            setTimeout(() => resolve('Data loaded'), 2000);
          });
          toast.promise(promise, {
            loading: 'Loading...',
            success: 'Data loaded successfully',
            error: 'Failed to load data',
          });
        }}
      >
        Promise
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast('Event created', {
            description: 'Friday, February 10, 2024 at 5:57 PM',
          })
        }
      >
        With Description
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast('Event created', {
            description: 'Friday, February 10, 2024 at 5:57 PM',
            action: {
              label: 'Undo',
              onClick: () => console.warn('Undo'),
            },
          })
        }
      >
        With Action
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast('This toast will stay for 10 seconds', {
            duration: 10000,
          })
        }
      >
        Custom Duration
      </Button>
    </div>
  </div>
);

export const ToasterDocs: IComponentUsage = {
  importCode: `import { toast } from 'sonner';`,

  usageCode: `import { toast } from 'sonner';

// Basic toasts
toast.success('Success message');
toast.error('Error message');
toast.info('Info message');
toast.warning('Warning message');

// With description
toast('Event created', {
  description: 'Friday, February 10, 2024 at 5:57 PM',
});

// With action
toast('Event created', {
  description: 'Friday, February 10, 2024 at 5:57 PM',
  action: {
    label: 'Undo',
    onClick: () => console.warn('Undo'),
  },
});

// Promise toast
const promise = fetch('/api/data');
toast.promise(promise, {
  loading: 'Loading...',
  success: 'Data loaded successfully',
  error: 'Failed to load data',
});

// Custom duration
toast('This toast will stay for 10 seconds', {
  duration: 10000,
});`,

  exampleCode: `import { Button } from '@stellar-ui-kit/web';
import { toast } from 'sonner';

<div className="flex flex-col gap-4">
  <div className="flex flex-wrap gap-2">
    <Button
      className="bg-primary-soft text-primary-text"
      onClick={() => toast.info('Here is some information for you.')}
    >
      Info
    </Button>

    <Button
      className="bg-error-soft text-error-text"
      onClick={() => toast.error('Something went wrong!')}
    >
      Error
    </Button>

    <Button
      className="bg-warning-soft text-warning-text"
      onClick={() => toast.warning('Please be careful with this action.')}
    >
      Warning
    </Button>

    <Button
      className="bg-success-soft text-success-text"
      onClick={() => toast.success('Operation completed successfully!')}
    >
      Success
    </Button>
  </div>

  <div className="flex flex-wrap gap-2">
    <Button
      variant="outline"
      onClick={() => {
        const promise = new Promise((resolve) => {
          setTimeout(() => resolve('Data loaded'), 2000);
        });
        toast.promise(promise, {
          loading: 'Loading...',
          success: 'Data loaded successfully',
          error: 'Failed to load data',
        });
      }}
    >
      Promise
    </Button>

    <Button
      variant="outline"
      onClick={() =>
        toast('Event created', {
          description: 'Friday, February 10, 2024 at 5:57 PM',
        })
      }
    >
      With Description
    </Button>

    <Button
      variant="outline"
      onClick={() =>
        toast('Event created', {
          description: 'Friday, February 10, 2024 at 5:57 PM',
          action: {
            label: 'Undo',
            onClick: () => console.warn('Undo'),
          },
        })
      }
    >
      With Action
    </Button>

    <Button
      variant="outline"
      onClick={() =>
        toast('This toast will stay for 10 seconds', {
          duration: 10000,
        })
      }
    >
      Custom Duration
    </Button>
  </div>
</div>`,

  props: [
    {
      name: 'message',
      type: 'string',
      description: 'The message to display in the toast.',
    },
    {
      name: 'description',
      type: 'string',
      description: 'Optional description text.',
    },
    {
      name: 'duration',
      type: 'number',
      default: '4000',
      description: 'Duration in ms before the toast auto-dismisses.',
    },
  ],
};
