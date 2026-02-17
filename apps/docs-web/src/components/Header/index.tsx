import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@stellar-ui-kit/web';
import webPackageJson from '../../../package.json';

interface IHeader {
  onMenuClick: () => void;
}

const VERSION = webPackageJson.version;

export const Header = ({ onMenuClick }: IHeader) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between gap-4 bg-background px-4 md:hidden">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-lg font-semibold text-foreground">
          Stellar UI{' '}
          <span className="text-xs text-muted font-normal">v{VERSION}</span>
        </span>
      </Link>

      <Button
        variant="ghost"
        size="icon"
        onClick={onMenuClick}
        aria-label="Open menu"
        className="md:hidden"
      >
        <Menu className="size-5" />
      </Button>
    </header>
  );
};
