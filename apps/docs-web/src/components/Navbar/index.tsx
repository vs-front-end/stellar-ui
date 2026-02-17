import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn, ThemeVariant } from '@stellar-ui-kit/shared';
import { useActiveSection } from '@/hooks';
import { version } from '../../../../../packages/web/package.json';
import { ThemeSelector, SocialLinks } from '@/components';
import { components, docsNav } from '@/utils/constants';

import {
  ScrollArea,
  Separator,
  InputSearch,
  Empty,
  EmptyTitle,
  EmptyDescription,
} from '@stellar-ui-kit/web';

interface NavItem {
  title: string;
  href: string;
}

interface INavbarSection {
  title: string;
  items: NavItem[];
  pathname: string;
  onLinkClick?: (href: string) => void;
}

interface INavbar {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
  onLinkClick?: (href: string) => void;
}

const NavbarSection = ({
  title,
  items,
  pathname,
  onLinkClick,
}: INavbarSection) => {
  if (items.length === 0) return null;

  return (
    <div>
      <h2 className="text-xs font-semibold uppercase text-muted mb-3">
        {title}
      </h2>

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              onClick={() => onLinkClick?.(item.href)}
              data-active={pathname === item.href}
              className={cn(
                'flex items-center justify-between gap-2 px-3 py-2 text-sm rounded-md transition-all duration-300',
                pathname === item.href
                  ? 'bg-primary-soft font-medium text-primary-text'
                  : 'text-foreground hover:translate-x-1'
              )}
            >
              <span className="min-w-0 truncate font-medium">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const EmptySearchResults = () => {
  return (
    <Empty className="border-0 gap-2 md:px-0">
      <EmptyTitle>No results found</EmptyTitle>
      <EmptyDescription>Try searching with different keywords</EmptyDescription>
    </Empty>
  );
};

export const Navbar = ({ theme, setTheme, onLinkClick }: INavbar) => {
  const navRef = useRef<HTMLElement>(null);
  const { pathname } = useActiveSection();
  const [searchQuery, setSearchQuery] = useState('');

  const filterNavItems = (items: NavItem[], query: string): NavItem[] => {
    if (!query.trim()) return items;

    const lowerQuery = query.toLowerCase();
    return items.filter((item) =>
      item.title.toLowerCase().includes(lowerQuery)
    );
  };

  const filteredDocsNav = useMemo(() => {
    const documentsItems: NavItem[] = docsNav.map((doc) => ({
      title: doc.name,
      href: `/docs/${doc.slug}`,
    }));

    return filterNavItems(documentsItems, searchQuery);
  }, [searchQuery]);

  const filteredComponentsNav = useMemo(() => {
    const componentsItems: NavItem[] = components.map((component) => ({
      title: component.name,
      href: `/preview/${component.slug}`,
    }));

    return filterNavItems(componentsItems, searchQuery);
  }, [searchQuery]);

  const hasResults =
    filteredDocsNav.length > 0 || filteredComponentsNav.length > 0;

  const showSeparator =
    filteredDocsNav.length > 0 && filteredComponentsNav.length > 0;

  useEffect(() => {
    if (!searchQuery.trim() && navRef.current) {
      const activeLink = navRef.current.querySelector(
        '[data-active="true"]'
      ) as HTMLElement;

      if (activeLink) {
        setTimeout(() => {
          activeLink.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }, 100);
      }
    }
  }, [pathname, searchQuery]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex h-16 items-center gap-2 border-b border-dashed border-border mx-4 flex-shrink-0">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => onLinkClick?.('/')}
        >
          <span className="text-lg font-semibold text-foreground">
            Stellar UI{' '}
            <span className="text-xs text-muted font-normal">v{version}</span>
          </span>
        </Link>
      </div>

      <div className="mx-4 py-6 border-b border-dashed border-border flex-shrink-0">
        <InputSearch
          placeholder="Search..."
          value={searchQuery}
          onChange={setSearchQuery}
          className="w-full max-w-full"
          label=""
        />
      </div>

      <div className="flex-1 min-h-0 my-4 mr-1">
        <ScrollArea className="h-full">
          <nav ref={navRef} className="px-4 py-4 pt-0 space-y-6">
            <NavbarSection
              title="Documentation"
              items={filteredDocsNav}
              pathname={pathname}
              onLinkClick={onLinkClick}
            />

            {showSeparator && <Separator variant="dashed" />}

            <NavbarSection
              title="Components"
              items={filteredComponentsNav}
              pathname={pathname}
              onLinkClick={onLinkClick}
            />

            {searchQuery.trim() && !hasResults && <EmptySearchResults />}
          </nav>
        </ScrollArea>
      </div>

      <div className="border-t border-dashed border-border mx-4 py-4 flex-shrink-0">
        <div className="flex items-center justify-between gap-3">
          <ThemeSelector theme={theme} setTheme={setTheme} />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
