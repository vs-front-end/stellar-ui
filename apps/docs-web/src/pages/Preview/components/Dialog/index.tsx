import type { IComponentUsage } from '@/types';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@stellar-ui/web';
import {
  AlertDialog as MobileDialog,
  AlertDialogAction as MobileDialogAction,
  AlertDialogCancel as MobileDialogCancel,
  AlertDialogContent as MobileDialogContent,
  AlertDialogDescription as MobileDialogDescription,
  AlertDialogFooter as MobileDialogFooter,
  AlertDialogHeader as MobileDialogHeader,
  AlertDialogTitle as MobileDialogTitle,
  AlertDialogTrigger as MobileDialogTrigger,
} from '@stellar-ui/mobile';
import { Button as MobileButton } from '@stellar-ui/mobile';

const hasMobileAlertDialog =
  typeof MobileDialog !== 'undefined' &&
  typeof MobileDialogTrigger !== 'undefined' &&
  typeof MobileDialogContent !== 'undefined';

export const DialogExample = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open Dialog</Button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button>Continue</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const DialogExampleMobile = () => {
  if (!hasMobileAlertDialog) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <MobileDialog>
      <MobileDialogTrigger asChild>
        <MobileButton>Open Dialog</MobileButton>
      </MobileDialogTrigger>
      <MobileDialogContent>
        <MobileDialogHeader>
          <MobileDialogTitle>Are you absolutely sure?</MobileDialogTitle>
          <MobileDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </MobileDialogDescription>
        </MobileDialogHeader>
        <MobileDialogFooter>
          <MobileDialogCancel asChild>
            <MobileButton variant="outline">Cancel</MobileButton>
          </MobileDialogCancel>
          <MobileDialogAction asChild>
            <MobileButton>Continue</MobileButton>
          </MobileDialogAction>
        </MobileDialogFooter>
      </MobileDialogContent>
    </MobileDialog>
  );
};

export const DialogDocs: IComponentUsage = {
  importCode: `import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@stellar-ui/web';`,

  usageCode: `<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Action</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,

  exampleCode: `import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@stellar-ui/web';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
    
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,

  importCodeMobile: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@stellar-ui/mobile';`,

  usageCodeMobile: `<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Title</AlertDialogTitle>
      <AlertDialogDescription>Description</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,

  exampleCodeMobile: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@stellar-ui/mobile';
import { Button } from '@stellar-ui/mobile';

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Open Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel asChild>
        <Button variant="outline">Cancel</Button>
      </AlertDialogCancel>
      <AlertDialogAction asChild>
        <Button>Continue</Button>
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,

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
      name: 'modal',
      type: 'boolean',
      default: 'true',
      description:
        'When true, prevents interaction with content outside the dialog.',
    },
  ],
};
